import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from scipy.stats import kde
import scipy
from matplotlib.colors import LinearSegmentedColormap
import re
import os


def extrae_metar():
    with open('gece.txt') as f1:
        our_lines = f1.readlines()
        for l in our_lines:
            match1 = re.search(r'\d\d\d\d\d\d\d\d\d\d', l)
            match2 = re.search(r'\s\w\w\w\d\dKT', l) 
            if match1 and match2:
                with open('gece2.txt', 'a') as f2:
                    f2.writelines(match1.group()+match2.group()+ '\n')
                
    f1.close()
    f2.close()


def extrae_viento():
    xLis=[]
    yLis=[]
    dire=[]
    vel=[]
    year=[]
    mes=[]
    dia=[]
    hora=[]
    
    f = open('gece2.txt','r')
    for line in f:
        line=line.strip()
        columns=line.split()
        # extrae la columna 1 de la fecha, 1996080104
        xLis.append(columns[0])
        #extrae la columna 2 del viento,  22002KT
        yLis.append(columns[1])
                  
    for i,h in zip(xLis, yLis):
        w = str(h)
        ddd = w[0:3]
        vv = w[3:5]
        v = str(i)
        yy = v[0:4]
        mm = v[4:6]
        dd = v[6:8]
        hh = v[8:10]
        
        # si es distinto de variable
        if (ddd) != 'VRB':
            dire.append(ddd)
            vel.append(vv)
            year.append(yy)   
            mes.append(mm)   
            dia.append(dd)   
            hora.append(hh)
      

    for i in range(0, len(year)):
        if year[i] != None:
            year[i] = float(year[i])
    for i in range(0, len(mes)):
        if mes[i] != None:
            mes[i] = float(mes[i])
    for i in range(0, len(dia)):
        if dia[i] != None:
            dia[i] = float(dia[i])
    for i in range(0, len(hora)):
        if hora[i] != None:
            hora[i] = float(hora[i])
    for i in range(0, len(dire)):
        if dire[i] != None:
           dire[i] = float(dire[i])
    for i in range(0, len(vel)):
        if vel[i] != None:
           vel[i] = float(vel[i])
      

    dataframe = []
    for i in range(len(year)):
        dataframe.append([year[i],mes[i],dia[i], hora[i], dire[i],vel[i]])
    md = pd.DataFrame( dataframe,columns =  ['year','mes','dia','hora','dir','vel'])

    # Excluyo las calmas 00000KT
    # md = md[md['dir'] != 0]
    f.close()
    return md


######################## Comienza el script ########################
if not os.path.exists("gece2.txt"):
    extrae_metar()
else:
    print("...ya existe el archivo gece2.txt")
md = extrae_viento()

######################### Seleccionamos el mes #########################
md = md[md['mes'] == 4]
######################### Dibujo la gráfica #########################
md = md.sort_values(by=['hora'])
# Evaluate a gaussian kde on a regular grid of nbins x nbins over data extents
nbins = 600
x = md['hora']
y = md['dir']
vd = md['vel']
k = kde.gaussian_kde([x,y])
xi, yi = np.mgrid[x.min():x.max():nbins*1j, y.min():y.max():nbins*1j]
zi = 100*k(np.vstack([xi.flatten(), yi.flatten()]))

fig = plt.figure(figsize=(30,12))
ax = fig.add_subplot(1,1,1)
Z = zi.reshape(xi.shape)
#cmap = plt.get_cmap('Wistia',22)
cmap = LinearSegmentedColormap.from_list(
    name='test', 
    colors=['whitesmoke','lemonchiffon','lightsalmon','darkred']
)

plt.pcolormesh(xi, yi, Z, alpha = 0.9, cmap = cmap, vmin=0)
cb = plt.colorbar(pad=0.05)
cb.set_label(label='Frecuencia de la dirección del viento (%)',
             size='x-large')

#############################################################
md = md[md['hora'] >= 0]
md = md[md['hora'] <= 23]
#############################################################
md1 = md.groupby(['hora']).agg(lambda x: scipy.stats.mode(x)[0])
x_dia =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
y_dir = md1['dir']
md2 = md.groupby(['hora']).mean()
y_vel = md2['vel']

ax.plot(x_dia, y_dir, linestyle='-', marker='o',markersize=12,
         linewidth=12,label="Dirección modal del viento",
         color = "azure", markeredgecolor = "black")


ax.set_ylabel('Dirección del viento (°)', fontsize=16, color="black")


major_ticks = np.arange(0, 23, 1)
ax.set_xticks(major_ticks)
ax.tick_params(axis="x", labelsize=14)

ax.tick_params(axis="y", labelsize=14)
ax.yaxis.set_ticks(np.arange(0, 365, 10))
ax.yaxis.set_ticklabels(['CALMA', '10°','20°','30°','40°','50°','60°','70°','80°','90°',
                     '100°','110°','120°','130°','140°','150°','160°','170°','180°',
                     '190°','200°','210°','220°','230°','240°','250°','260°','270°',
                     '280°','290°','300°','310°','320°','330°','340°','350°','360°'])
######################################################################

ax2 = ax.twinx()
ax2.plot(x_dia, y_vel, linewidth=8, label="Velocidad media del viento",
         marker='o',markersize=12,color = "dodgerblue")

ax2.set_ylabel('Velocidad (kt)', fontsize=16, color="blue")
ax2.yaxis.set_ticks(np.arange(0, 15, 1))
ax2.tick_params(axis="y", labelsize=14)
#######################################################################

####################################################################
plt.title("GECE Abril  - Dia típico de viento (2021-2025)",fontsize=20)
plt.xticks(np.arange(0, 24, 1), size = 14)
ax.set_xlabel('Hora (UTC)', fontsize=18)
ax.grid(b=True, which='both', color='black', linestyle='-', alpha=0.5)
ax.legend(loc=2,prop={'size': 12})
ax2.legend(loc=1,prop={'size': 12})
ax.margins(x=0)
plt.show()



