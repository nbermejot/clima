import numpy as np
import pandas as pd
from scipy.stats import kde
import matplotlib.pyplot as plt 
import math
from matplotlib.colors import LinearSegmentedColormap


######### EXTRAE FECHA, VIENTO Y VISIBILIDAD DE TODOS LOS METARS ##                   

def extrae_parametros(aeropuerto):
    """ Extrae la primera,segunda y tercera columna de todos los metars
    de un determinado aeropuerto.
    """
    
    nombre_archivo = f"{aeropuerto}.txt"
    file = open(nombre_archivo,'r')
    xLis, yLis, zLis = [], [], []

    for line in file:
       line=line.strip()
       columns=line.split()
       xLis.append(columns[0])
       yLis.append(columns[1])
       zLis.append(columns[2])

    visi, year, hora, dia, mes, dire, vel = [], [], [], [], [], [], []
    for i,j,h in zip(xLis, yLis, zLis):
        # Tercera columna vvvv
        w = str(h)
        vis = w[0:4]
        visi.append(vis)
        # Primera columna yyyymmddhh
        v = str(i)
        yy = v[0:4]
        year.append(yy)
        mm = v[4:6]
        mes.append(mm)
        dd = v[6:8]
        dia.append(dd)
        hh = v[8:10]
        hora.append(hh)
        # Segunda columna dddvv
        a = str(j)
        ddd = a[0:3]
        vv = a[3:5]
        dire.append(ddd)
        vel.append(vv)
      
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
    for i in range(0, len(visi)):
        if visi[i] != None:
           visi[i] = float(visi[i])
    for i in range(0, len(dire)):
       if dire[i] != None:
           dire[i] = float(dire[i])
    for i in range(0, len(vel)):
       if vel[i] != None:
          vel[i] = float(vel[i])
       
    dataframe = []
    for i in range(len(mes)):
        dataframe.append([year[i],mes[i],dia[i],hora[i],visi[i],dire[i],vel[i]])

    return pd.DataFrame( dataframe,columns =  ['year',
                                          'mes',
                                          'dia',
                                          'hora',
                                          'visibilidad',
                                          'direccion',
                                          'velocidad'])



""" KDE (Kernel Density Estimation) es una técnica que estima la densidad de
probabilidad de una nube de puntos bidimensionales. 
Estás generando una malla de valores sobre la que se va a evaluar la
densidad. Es como crear un mapa donde se calculará cuán probable es cada
combinación de 2 valores (hora, dirección) y (hora, visibilidad). 
 nbins = cuántos pasos hay en cada dirección (más pasos = más resolución).
""" 


def pintar_grafica(md,mes,aeropuerto):
    """ Para todos los dias de niebla pinta un KDE en color para la
    visibilidad y un KDE para la dirección del viento con líneas de contorno
    y barbas. Los contornos de color amarillo será por tanto la dirección
    más frecuente del viento en los días que hubo niebla a esa hora del día.
    No quiere decir que con ese viento hubiera niebla ese día a esa hora, ya
    que toma todos los valores de viento horarios de esos días.
    """ 
    # --- KDE para visibilidad (hora vs visibilidad) ---
    kde_vis = kde.gaussian_kde([x,y])
    xi, yi = np.mgrid[x.min():x.max():nbins*1j, y.min():y.max():nbins*1j]
    densidad_vis = 100 * kde_vis(np.vstack([xi.flatten(), yi.flatten()]))
    densidad_vis = densidad_vis.reshape(xi.shape)

    # --- KDE para viento (hora vs dirección) ---
    kde_viento = kde.gaussian_kde([x,d])
    xi, di = np.mgrid[x.min():x.max():nbins*1j, d.min():d.max():nbins*1j]
    densidad_viento = 100 * kde_viento(np.vstack([xi.flatten(), di.flatten()]))
    # Luego, lo redimensionas (reshape) para que coincida con la cuadrícula original.
    densidad_viento = densidad_viento.reshape(xi.shape)

    # --- Plot de la visibilidad ---
    fig, ax = plt.subplots(figsize=(30,20))
    plt.pcolormesh(xi, yi, densidad_vis, alpha = 1,cmap = cmap_vis,
                   shading='auto')
    cb = plt.colorbar(pad=0.055,shrink=1)
    cb.set_label(label='Visibilidad (Frecuencia)', size='xx-large')
    x_dia =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    ax.axhline(y=1000,linewidth=4,color="orange",label = "Umbral de niebla")


    # --- Segundo eje Y (dirección del viento) ---
    ax2 = ax.twinx()

    # Curvas de nivel de dirección del viento
    max_densidad = densidad_viento.max()
    step = 0.01
    niveles = np.arange(0, max_densidad, step)
   
    print("Densidad viento - min:", densidad_viento.min(), "max:",
          densidad_viento.max())
    contornos = ax2.contour(xi, di, densidad_viento, levels = niveles,
                        origin='lower',linestyles='--',
                        linewidths=5,cmap = 'inferno')
    ax.clabel(contornos, inline=1, fontsize=22, inline_spacing = 10,
          fmt=lambda x: f"{x:.2f}%",colors = 'black')

    # Viento en forma de barbas
    pi = math.pi
    θ = (d*pi)/180
    U = -vd*np.sin(θ)
    V = -vd*np.cos(θ)
    ax2.barbs(x, d, U, V, barbcolor="black",length = 9)


    ax.set_ylabel('Visibilidad (m)', fontsize=22, color = "black")
    ax.set_ylim(0, 5000)  # <-- Aquí limitamos el eje Y a 5000 m
    ax.yaxis.set_ticks(np.arange(0, 5100, 200))

    nombre_mes = MESES[mes - 1]
    plt.title(f"{aeropuerto.upper()} {nombre_mes.capitalize()}  - Dia típico de niebla (1996-2019)",
              fontsize=25)
    ax.set_xticks(np.arange(0, 23, 1))

    ax.tick_params(axis="x", labelsize=14)
    ax.tick_params(axis="y", labelsize=14)

    # Etiquetas del segundo eje Y
    ax.set_xlabel('Hora (UTC)', fontsize=22)
    ax2.set_ylabel('Dirección del viento', fontsize=20, color="black",
               rotation = 270)

    ax2.yaxis.set_ticks(np.arange(10, 365, 10))
    ax2.yaxis.set_ticklabels(['10°','20°','30°','40°','50°','60°','70°','80°','90°',
                     '100°','110°','120°','130°','140°','150°','160°','170°','180°',
                     '190°','200°','210°','220°','230°','240°','250°','260°','270°',
                     '280°','290°','300°','310°','320°','330°','340°','350°','360°'])
    ax2.tick_params(axis="y", labelsize=14)

    # Leyendas
    ax.legend(loc=1,edgecolor='black',shadow=True,
          prop={'size': 14})
    ax.text(0.2, 4900,"Nº días de niebla= %d" % count,size=22 ,color="black",
        bbox=dict(facecolor='white',edgecolor='black',boxstyle='square'))
    labels = ['Frecuencia','de  la','dirección','del','viento']

    for i in range(len(labels)):
        contornos.collections[i].set_label(labels[i])
    
    plt.legend(loc='lower left',edgecolor='black',shadow=True)

    # Estética general
    ax.margins(x=0)
    ax.grid(b=True, which='both', color='black', linestyle='-', alpha=0.5)

    plt.tight_layout()  
    plt.show()

######################## Comienza el script ########################
# Parámetros generales
nbins=600
cmap_vis = LinearSegmentedColormap.from_list(
    name='test', 
    colors=['white','lightgray','gold','orange','red','purple'],
    N=20
   )

MESES = ["enero","febrero","marzo","abril","mayo","junio","julio",
         "agosto","septiembre","octubre","noviembre","diciembre"]

# Pedimos al usuario el nombre del aeropuerto
aeropuerto = input("Introduce el código del aeropuerto (ej. lemg): ").lower()
fechas_nieblas = f"fechas_nieblas_{aeropuerto}.csv"
md2 = pd.read_csv(fechas_nieblas,decimal=",",index_col='year')
md1 = extrae_parametros(aeropuerto) 
# hacemos intersección de las 2 tablas anteriores
md = pd.merge(md1, md2, on=['year','mes', 'dia']) 

# Filtro por mes
mes = int(input("¿Qué mes quieres visualizar, del 1 al 12? ").strip())
if 1 <= mes <=12:
    md = md[md['mes'] == mes]
else:
    print("Mes inválido")
 

# Contamos los días de niebla (una entrada por día)
md_total = md.drop_duplicates(subset=['year','mes','dia'], keep='first')
count = len(md_total)

#Filtrar valores por debajo de 5000 y dirección distinta de calma y VRB
md = md[md['visibilidad'] < 5200]
md = md[(md['direccion'] != 0) & (md['direccion'] != 1)]

# Extraer variables
x = md['hora']
y = md['visibilidad']
d = md['direccion']
vd = md['velocidad']


pintar_grafica(md, mes, aeropuerto)
