# PROYECTO 2 - Documento 2<h1>
# Análisis y diseño para escalabilidad<h2>


### Definición del equipo, proyecto y aplicación:
__Miembros del equipo y asignación de QA por miembros__

* Marco antonio Franco Montoya - Disponibilidad
    @manfranco
* Juan Camilo Rodriguez Montoya - Rendimiento
    @jrodri92
* David Felipe Lemus Giraldo - Seguridad
    @dlemusg

### Análisis

Para identificar los escenarios de calidad se seguirá la siguiente estructura:

 1. Fuente del estímulo: quien o que genera el estímulo. 
 2. Estímulo: lo que se quiere llevar a cabo.
 3. Entorno: condiciones dentro de las cuales se presenta el estímulo.
 4. Artefacto: parte del sistema que recibe el estímulo.
 5. Respuesta: actividad que ocurre luego de la llegada del estímulo.
 6. Medida de la Respuesta: criterio para testear el requerimiento.
 7. Atributo de calidad afectado: Atributo de calidad relacionado con el escenario

__Escenario de Disponibilidad__
* __Fuente del estímulo:__
* __Estímulo:__
* __Ambiente:__
* __Artefacto:__
* __Respuesta:__
* __Medida de respuesta:__

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


__Escenario de Seguridad__
| Escenario | 1 |
| --- | --- |
| Fuente del estímulo | Usuario |
| Estímulo | Registro |
| Artefacto | Auth0 |
| Ambiente |  Operacion Normal |
| Respuesta | El usuario queda registron ante auth0 |
| Medida de Respuesta | Mejora el tiempo de respuesta al momento de registrarse y se aumenta la seguridad |

| Escenario | 2 |
| --- | --- |
| Fuente del estímulo | Usuario |
| Estímulo | Login |
| Artefacto | Auth0 |
| Ambiente |  Operacion Normal |
| Respuesta | Se devuelve un token que autoriza el longin |
| Medida de Respuesta | Auth0 se encarga del login para mayor seguridad, se garantiza un login siempre disponible |

| Escenario | 3 |
| --- | --- |
| Fuente del estímulo | Usuario |
| Estímulo | Cargar rutas |
| Artefacto | Aplicacion |
| Ambiente |  Operacion Normal |
| Respuesta | Si el usuario no esta loggeado en la app las rutas no son disponibles |
| Medida de Respuesta | Se muestra mensaje de no disponibilidad |

| Escenario | 4 |
| --- | --- |
| Fuente del estímulo | Usuario |
| Estímulo | Enviar datos y recibir datos |
| Artefacto | Aplicacion |
| Ambiente |  Operacion Normal |
| Respuesta | La aplicacion utiliza conexion https |
| Medida de Respuesta | Los datos son trasmitidos metdiante protocolos https |


### Diseño

* __Vistas de arquitectura:__
	* __Vista lógica:__
	* ![vista](https://i.imgur.com/phFbeZ1.jpg)
	* __Vista de desarrollo:__
	* ![vista](https://i.imgur.com/G7bRgme.jpg)
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

* __Uso de repositorio


__Tacticas__

__Herramientas__

### Definición de Tecnología v2

* Lenguaje de programación: JavaScript
* Entorno y Framework backend: NodeJS - Express
* Framework frontend: Boostrap
* Base de datos: MonngoDB
* Web server: Nginx

* Certificados SSL: cerbot
* Sign in/signn up: outh0


### Marco-referencia-v2

#### Disponibilidad
    .
* __Patrones y mejores prácticas__
    .
    .
    .

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

#### Seguridad

La seguridad de aplicaciones web es una rama de la Seguridad Informática que se encarga específicamente de la seguridad de sitios web, aplicaciones web y servicios web.

A un alto nivel, la seguridad de aplicaciones web se basa en los principios de la seguridad de aplicaciones pero aplicadas específicamente a la World Wide Web.
*https://es.wikipedia.org/wiki/Seguridad_de_aplicaciones_web*

* __Patrones y mejores prácticas__

    * __Balancear riesgo y usabilidad:__ A mayor complejidad de nuestro sitio, aumenta el riesgo de que se sufra un ataque debido a sus características más elaboradas, es por eso que deben considerarse opciones de seguridad necesarias y sencillas pero eficientes, que ayuden a mitigar cualquier característica que la haga vulnerable.

    * __Rastrear el paso de los datos:__  En las aplicaciones web, existen maneras de distinguir los orígenes de los datos y poder así reconocer cuando los datos pueden ser dignos de confianza y cuando no.

    * __Filtrar entradas:__ El filtrado es una de las piedras angulares de la seguridad en aplicaciones web. Es el proceso por el cual se prueba la validez de los datos. Si nos aseguramos que los datos son filtrados apropiadamente al entrar, podemos eliminar el riesgo de que datos contaminados sean usados para provocar funcionamientos no deseados en la aplicación.

    * __Escapado de salidas:__ Codificar o decodificar caracteres especiales de tal forma que su significado original sea preservado. Si llegamos a utilizar una codificación en particular es necesario conocer los caracteres reservados los cuales serán necesarios escapar.
    
### Referencias

1. Seguridad de aplicaciones web - *https://es.wikipedia.org/wiki/Seguridad_de_aplicaciones_web*
2. Modelo–vista–controlador - *https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador*
3. Aspectos Básicos de la Seguridad en Aplicaciones Web - *https://www.seguridad.unam.mx/historico/documento/index.html-id=17*
4. Escenarios de calidad - *https://github.com/Arquisoft/ObservaTerra11/wiki/Escenarios-de-calidad*
5. Don’t Repeat Yourself - *https://deviq.com/don-t-repeat-yourself/*
6. Principio KISS: De qué se trata (Parte 1) - *https://mantenlosimple.com/2013/10/12/principio-kiss-p1/*
7. *“Architecting High Performing, Scalableand Available Enterprise Web Applications”* de **Shailesh Kumar, 2015** - *http://proquestcombo.safaribooksonline.com.ezproxy.eafit.edu.co/book/software-engineering-and-development/enterprise/9780128022580/firstchapter*
8. Pruebas de rendimiento - *https://www.fractaliasystems.com/pruebas-de-rendimiento-quality-assurance/*

