# PROYECTO 2 - Rendimiento - Documento 1<h1>


### Definición del equipo, proyecto y aplicación:
__Responsable__

* Juan Camilo Rodriguez Montoya

__Selección de la aplicación basada en Proyecto1__

Al analizar los 3 proyectos, encontramos mayor facilidad trabajando con el  de David Lemus, considerando la facilidad de entender el proyecto y mayor cantidad de avances comparado con los otros. Las plataformas utilizadas no fueron preocupación, puesto que todos trabajamos usando node.js, docker, mongodb.

*El repositorio seleccionado fue:* https://github.com/dlemusg/proyecto2

__Descripción de la aplicación__

Aplicacion web de geolocalizacion, permite guardar la ubicacion en tiempo real cada intervalo de tiempo segun la ruta del usuario, ademas permite la visualizacion de ubicaciones a partir de mapas en google.

__Requisitos Funcionales de la aplicación:__

* Autenticación de usuarios y API REST
* Registro de eventos en tiempo real (se requiere tanto una aplicación que envíe los eventos desde un móvil y el servidor que recibe los eventos, la aplicación que envía los eventos puede ser una página web sencilla en HTML5-Geolocalización y google maps)
* Visualización de ruta previamente almacenada.
* Visualización de ruta en tiempo real

### Detalles técnicos del diseño e implementación funcional para el proyecto2.


### Definición de Tecnologia v1
| SISTEMA OPERATIVO | LINUX CENTOS 7.1 |
| --- | --- |
| LENGUAJE DE PROGRAMACIÓN | JavaScript / NodeJS |
| FRAMEWORK WEB - BACKEND | Express |
| FRAMEWORK WEB - FRONTEND (si aplica) | Bootstrap |
| WEB APP SERVER | Embebido (Node) |
| WEB SERVER  | NGINX |
| BASE DE DATOS | MongoDB |
| GIT (CLI Y GUI) | GitHub | 
| PRUEBAS | Jmeter |

### Marco-referencia-v1

#### Rendimiento
Las pruebas de rendimiento son un conjunto de pruebas no funcionales que se realizan, para determinar la velocidad de ejecución de una tarea concreta en un sistema bajo condiciones particulares de trabajo.

Los objetivos de estas pruebas son:

    Validar y verificar atributos de la calidad del sistema: uso de los recursos, escalabilidad y fiabilidad.
    Comparación de sistemas para encontrar cuál de ellos funciona mejor.
    Determinar qué componentes del sistema provocan que el conjunto .presente rendimientos bajos.

Tipos de Pruebas de Rendimiento

1. Prueba de Carga => Load Test

Prueba de rendimiento que se realiza para observar el comportamiento de una aplicación bajo una cantidad de peticiones esperada.

Objetivos:
    Mostrar los tiempos de respuesta de todas las transacciones importantes.
    Localizar los ‘cuellos de botella’ de una aplicación.

2. Pruebas de Estrés => Stress Test

Prueba de rendimiento que se realiza para observar el comportamiento de una aplicación bajo una cantidad de peticiones extrema.

Objetivos:

    ‘Romper’ la aplicación.
    Determinar cómo rendirá la aplicación si la carga real supera a la carga esperada

3.  Otras Pruebas: de picos, de estabilidad, …

A la hora de efectuar pruebas de rendimiento empleando herramientas de software, es necesario que el departamento de QA, defina un escenario lo más real posible, es decir, lo más semejante a las situaciones de funcionamiento en el entorno.