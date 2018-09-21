# PROYECTO 2 - Rendimiento - Documento 2<h1>
# Análisis y diseño para escalabilidad<h2>


### Responsable, proyecto y aplicación:
__Responsable__
* Juan Camilo Rodriguez Montoya - Rendimiento
    @jrodri92

### Análisis

__Escenario de Rendimiento__

| Escenario | 1 |
| --- | --- |
| Fuente del estímulo | Aplicación |
| Estímulo | Sobrecarga de datos |
| Artefacto | Servidor |
| Ambiente | Multiples usuarios enviando ubicación a tiempo real |
| Respuesta | Implementar sistemas de colas para envio y recepción de datos |
| Medida de Respuesta | Mejora el tiempo de respuesta al momento de que el usuario envía sus posiciones |

| Escenario | 2 |
| --- | --- |
| Fuente del estímulo | Google Maps API |
| Estímulo | Fallo al mostrar el mapa |
| Artefacto | Aplicación |
| Ambiente | Tiempo de carga superior a 5 segundos |
| Respuesta | Cancelar carga y solicitar recarga de pagina al usuario |
| Medida de Respuesta | Tiempo de respuesta del API de Google Maps |

| Escenario | 3 |
| --- | --- |
| Fuente del estímulo | Aplicación |
| Estímulo | Sobrecarga de tráfico |
| Artefacto | Servidor |
| Ambiente | Crecimiento de visitas |
| Respuesta | Balanceador de carga envia requerimientos a otros servidores |
| Medida de Respuesta | Aumenta la capacidad de carga |

| Escenario | 4 |
| --- | --- |
| Fuente del estímulo | Usuario |
| Estímulo | Se registra o loguea|
| Artefacto | Servidor |
| Ambiente | Operación normal |
| Respuesta | Se procesa el registro o logueo |
| Medida de Respuesta | Tiempo de respuesta promedio de 3 segundos |

### Diseño

* __Vistas de arquitectura:__
	* __Vista física:__
	* ![vista](https://i.imgur.com/776Nvka.jpg)

__Patrones de arquitectura__
* __Patrón Modelo-Vista-Controlador(MVC):__ Como su nombre lo indica, este patrón se estructura en 3 capas logicas que interactuan separando la presentacion e iteración con los datos. La capa del *modelo* gestiona los datos, conexiones a BD y los metodos que interactuen sobre ellos, la *vista* es la engarcada de la presentación de la información al usuario, es decir "es la capa con la que el usuario interactua con el sistema" y la capa del *controlador* es la orquestadora de las interacciones del usuario con las funcion del sistema, es el engargado de gestionar el acceso al modelo y la presentación de los datos en la vista.
    * ![patron](https://i.imgur.com/d9k76P2.png)

__Best Practices__

* __DRY(Don’t repeat yourself):__ Eliminar la duplicación de logica de negocio a partir de la abstracción, permitir la automatización de procesos y evitar la repetición de código, la duplicación es dificil de mantener y genera proyectos mas complejos y pesados. 
* __KISS(Keep It Simple Stupid):__ Mantener la simplicidad como objetivo principal en el diseño de la aplicación y asi evitar la complejidad.

* __YAGNI(You ain't gonna need it):__ No implementar nada a partir de supuesto, es decir, estar seguros de implementar para ahorranos tiempo y esfuerzo.

* __Pruebas continuas:__ Evaluar el funcionamiento de la aplicación en ambientes de pruebas antes de lanzar un avanzo a producción.

__Tacticas__

#### Controlar la demanda de recursos
Esto se puede hacer reduciendo la cantidad de eventos procesados aplicando una tasa de muestreo, o limitando la velocidad a la que el sistema responde a eventos, para esto se pueden seguir ciertos criterios:
* Administrar la frecuencia de muestreo.
* Limitar eventos de respuesta.
* Priorizar los eventos.
* Limitar tiempos de ejecución
* Aumentar la eficiencia de los recursos

### Administrar los recursos.
De no ser posible controlar la demanda de recursos, aún se puede administrar los recursos tales como la memoria, los procesadores, entre otros. Para ello se pueden usar las siguientes tácticas: 
* **Incrementar los recursos:** Agregar procesadores más rapidos, más memoria y almacenamiento.
* Tener multiples servidores y un balanceador de carga.

### Otras tácticas que se usarán
* **First-in, First-out (FIFO):** Estructuras de colas que priorizan los primeros datos que entrán, serán los primeros en ser procesados por el servidor, dejando los demás en espera, pero sin afectar al cliente y su interactividad con la aplicación.
* **Data-push y no Data-pull (carga bajo demanda):** Hacer envio de los datos a medida de que el usuario los vaya solicitando.
* **Pensar en Caché:** Tener almacenamiento en cache, es decir, tener la mayor cantidad posible de componentes y paginas importantes bajo una estrategia de almacenamiento en caché.
* **Diseño para el fracaso:** Evaluar todas las posibilidades de fracaso y su probabilidad probable. Algunos eventos comunes de falla pueden ser fallos de hardware, fallos de seguridad, desastres naturales, repunte repentino del tráfico de usuarios, fallos de red, fallos de operaciones, etc. Está muy lidago al control de demanda de recursos.
* **Computación distribuida y paralela:** Diseñe software para que su computación pueda distribuirse a través de múltiples nodos de computación. Esto ofrece la doble ventaja de rendimiento y escalabilidad.
* **Mantenerse liviano:** los componentes páginas clave deben mantenerse ligeros reduciendo su tamaño general y minimizando el número de viajes de ida y vuelta del servidor.

__Herramientas__

### Definición de Tecnología v2
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

### Marco-referencia-v2

#### Rendimiento ¿Qué son las pruebas de rendimiento?

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

* __Patrones y mejores prácticas__

    * __Pensar en Caché:__ Tener almacenamiento en cache, es decir, tener la mayor cantidad
    posible de componentes y paginas importantes bajo una estrategia de almacenamiento en caché.

    * __Diseño para el fracaso:__ Evaluar todas las posibilidades de fracaso y su probabilidad probable.
    Algunos eventos comunes de falla pueden ser fallos de hardware, fallos de seguridad,
    desastres naturales, repunte repentino del tráfico de usuarios, fallos de red, fallos de operaciones, etc.

    * __Computación distribuida y paralela:__ Diseñe software para que su computación pueda
    distribuirse a través de múltiples nodos de computación. Esto ofrece la doble ventaja de rendimiento y escalabilidad.

    * __Mantenerse liviano:__ los componentes páginas clave deben mantenerse ligeros reduciendo
    su tamaño general y minimizando el número de viajes de ida y vuelta del servidor.

    * __Cargas no bloqueadas usando la solicitud de datos asincrónicos:__ Sean componentes del
    lado del cliente o para comunicarse con el servidor o para la agregación de datos, intente
    aprovechar el enfoque basado en AJAX. Esto mejora drásticamente el tiempo de carga de la
    página percibida y proporciona una carga no bloqueante de la página.

    * __Usar la política de carga bajo demanda:__* Cargue los datos y el componente sólo cuando sea necesario.

    * __Batching:*__ Mientras se recuperan datos de sistemas de interfaz como una base de datos
    o servicios web, se recomienda hacer batch de las solicitudes con el fin de minimizar el
    número de viajes de ida y vuelta del servidor.

### Referencias

1. Modelo–vista–controlador - *https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador*
2. Escenarios de calidad - *https://github.com/Arquisoft/ObservaTerra11/wiki/Escenarios-de-calidad*
3. Don’t Repeat Yourself - *https://deviq.com/don-t-repeat-yourself/*
4. Principio KISS: De qué se trata (Parte 1) - *https://mantenlosimple.com/2013/10/12/principio-kiss-p1/*
5. *“Architecting High Performing, Scalableand Available Enterprise Web Applications”* de **Shailesh Kumar, 2015** - *http://proquestcombo.safaribooksonline.com.ezproxy.eafit.edu.co/book/software-engineering-and-development/enterprise/9780128022580/firstchapter*
6. Pruebas de rendimiento - *https://www.fractaliasystems.com/pruebas-de-rendimiento-quality-assurance/*

