# PROYECTO 2 - Rendimiento - Documento 3<h1>

**1. Responsable**
* Juan Camilo Rodriguez Montoya - Rendimiento
    @jrodri92
	
**2. Diseño de arquitectura de la Aplicación y Sistema**

a. Vista de desarrollo
	
i. Definición de Tecnología de Desarrollo
	   
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

	   
ii. URLs de repositorio (github)
	
[GitHub proyecto2](https://github.com/dlemusg/proyecto2)
	        
**3. Implementación y Pruebas por Atributo de Calidad**
    
### Rendimiento

    a. Implementación
    
	   i. Se utilizó para las pruebas  Jmeter.
	 
	   ii. Se realizó un cambio en la forma en que se enviaban posiciones,
       anteriormente se enviaba una posición cada segundo, 
       ahora las posiciones se envian cada vez que las coordenadas cambian lo cual mejora considerablemente el tiempo de envio de datos.

       iii. Se utilizó el caché para mostrar las posiciones y no siempre realizar conexión con la base
       de datos

       iv. Ahora las posiciones se guardan por bloques, es decir, cada que se envian 5 posiciones
       (guardadas en caché) , se hace la conexión a la base de datos y se guardan, para integridad 
       de los datos, cuando se presiona en parar tambien se guardan estas posiciones.
	 
    b. Esquemas de pruebas para comprobar el Atributo de Calidad.
    	


    
## 4. Marco-referencia-v3:

**_QA - 2 Rendimiento:_** *¿Qué es?*

**Concepto** _Web Performance Optimization (WPO)_

El concepto WPO está relacionado con los métodos y técnicas para optimizar la
velocidad de las páginas web, lo que implica analizar todos los componentes de
una página web para optimizar el tiempo de respuesta de la misma. Es necesario tener
en cuenta los factores que afectan directa o indirectamente el rendimiento de nuestra
web application.

**Factores críticos**

**Ventaja competitiva:** A medida que la expectativa de velocidad aumenta, los sitios Web más lentos van perdiendo competitividad.

**Experiencia del usuario:** el factor de lealtad del usuario es proporcional al rendimiento de nuestra aplicación.

**Impacto financiero:** La tasa de conversión (relación visitante-comprador) se ve afectado si la página no responde
rápidamente; Esto demuestra un impacto directo de la velocidad de la página en los ingresos en línea.

**Estrategia omni-canal (Homologación de dispositivos – navegadores):** Es ideal que una página web se adapte a cualquier
dispositivo y que brinde la misma experiencia y uniformidad a la “original”.


**_¿Qué estrategias se pueden emplear?_**

1. Establecer el Acuerdo de Nivel de Servicio (SLA) de rendimiento y los objetivos
2. Modelación del rendimiento, evaluación de escenarios y análisis de procesos críticos para el negocio y transacciones.
3. Establecimiento de directrices de diseño de rendimiento
4. Aplicación de directrices de diseño de rendimiento
5. Identificar, analizar y eliminar cuellos de botella en varios componentes
6. Establecer una infraestructura continua de monitoreo y alerta
7. Establecer una gobernanza del desempeño consistente en procesos y equipos bien definidos para mantener los SLA de rendimiento.

### **Pasos para modelar y evaluar varios escenarios de rendimiento para**
**procesos y transacciones críticos para el negocio**

**Paso 1:** Identificar y priorizar varios escenarios de negocios

**Paso 2:** modelar la carga de trabajo

**Paso 3:** identificar cualquier patrón relacionado con el rendimiento

### **Establecer pautas de diseño de rendimiento**

**Pensar en Caché:** Tener almacenamiento en cache, es decir, tener la mayor cantidad
posible de componentes y paginas importantes bajo una estrategia de almacenamiento en caché.

**Diseño para el fracaso:** Evaluar todas las posibilidades de fracaso y su probabilidad probable.
Algunos eventos comunes de falla pueden ser fallos de hardware, fallos de seguridad,
desastres naturales, repunte repentino del tráfico de usuarios, fallos de red, fallos de operaciones, etc.

**Computación distribuida y paralela:** Diseñe software para que su computación pueda
distribuirse a través de múltiples nodos de computación. Esto ofrece la doble ventaja
de rendimiento y escalabilidad.

**Mantenerse liviano:** los componentes páginas clave deben mantenerse ligeros reduciendo
su tamaño general y minimizando el número de viajes de ida y vuelta del servidor.

**Cargas no bloqueadas usando la solicitud de datos asincrónicos:** Sean componentes del
lado del cliente o para comunicarse con el servidor o para la agregación de datos, intente
aprovechar el enfoque basado en AJAX. Esto mejora drásticamente el tiempo de carga de la
página percibida y proporciona una carga no bloqueante de la página.

**Usar la política de carga bajo demanda:** Cargue los datos y el componente sólo cuando sea necesario.

**Batching:** Mientras se recuperan datos de sistemas de interfaz como una base de datos
o servicios web, se recomienda hacer batch de las solicitudes con el fin de minimizar el
número de viajes de ida y vuelta del servidor.

Entre otras pautas que podrá conocer en el capitulo de rendimiento del libro:
 > *“Architecting High Performing, Scalableand Available Enterprise Web Applications”*
 > de **Shailesh Kumar, 2015** [Libro](http://proquestcombo.safaribooksonline.com.ezproxy.eafit.edu.co/book/software-engineering-and-development/enterprise/9780128022580/firstchapter)