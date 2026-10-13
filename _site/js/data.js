/* Contenido educativo resumido. Cada ficha incluye sus fuentes de consulta.
   year indica el hito de origen explicado en dateNote, no la última revisión. */
window.QUALITY_DATA = {
  reviewed: '13 de octubre de 2026',
  categories: {
    proceso: { name: 'Proceso', icon: 'workflow', question: '¿Cómo lo construimos?', description: 'Mejora las prácticas, los equipos y el ciclo de vida para lograr resultados consistentes.', example: 'Revisiones de código, gestión de cambios y prevención de defectos.' },
    producto: { name: 'Producto', icon: 'box', question: '¿Qué calidad tiene?', description: 'Evalúa las propiedades del software: qué hace, cómo funciona y qué tan fácil es mantenerlo.', example: 'Tiempo de respuesta, tolerancia a fallos y facilidad para modificar el código.' },
    uso: { name: 'Uso', icon: 'users', question: '¿Qué logra la persona?', description: 'Observa los resultados que obtienen las personas al usar el sistema en un contexto real.', example: 'Completar una tarea, invertir menos tiempo y quedar satisfecho con la experiencia.' }
  },
  records: [
    {
      id: 'cmmi', name: 'CMMI', fullName: 'Capability Maturity Model Integration', type: 'Modelo', categories: ['proceso'], year: 2000,
      creator: 'CMMI Product Team · SEI, industria y gobierno de EE. UU.', origin: 'Estados Unidos',
      description: 'Un marco de madurez y capacidad para mejorar el desempeño de los procesos de una organización.',
      dateNote: 'Primera versión publicada en 2000. Su antecedente, SW-CMM, se publicó en 1991.',
      dimensions: ['Inicial', 'Gestionado', 'Definido', 'Gestionado cuantitativamente', 'En optimización'],
      dimensionNote: 'Los cinco niveles clásicos de madurez (1–5); la estructura concreta depende de la versión del modelo.',
      application: 'Una empresa acuerda procesos comunes, mide sus resultados y usa esos datos para reducir errores y retrasos.',
      note: 'Una evaluación de madurez organizacional no equivale a certificar que cada producto está libre de defectos. El modelo pasó del SEI al CMMI Institute / ISACA.',
      sources: [{ label: 'SEI · CMMI: A Short History', url: 'https://www.sei.cmu.edu/library/cmmi-a-short-history/' }]
    },
    {
      id: 'iso25010', name: 'ISO/IEC 25010', fullName: 'SQuaRE · Modelo de calidad del producto', type: 'Estándar', categories: ['producto'], year: 2011,
      creator: 'ISO e IEC · Comité JTC 1/SC 7', origin: 'Internacional',
      description: 'Define un modelo común para especificar y evaluar las características de calidad de productos de software y TIC.',
      dateNote: 'Primera edición: 2011. Segunda edición: 2023, dedicada a la calidad del producto.',
      dimensions: ['Adecuación funcional', 'Eficiencia de desempeño', 'Compatibilidad', 'Capacidad de interacción', 'Fiabilidad', 'Seguridad (security)', 'Mantenibilidad', 'Flexibilidad', 'Seguridad operacional (safety)'],
      dimensionNote: 'Nueve características de la edición 2023. Las traducciones se presentan con fines didácticos.',
      application: 'Definir criterios de aceptación para una aplicación: funciones correctas, respuesta adecuada y cambios de código controlados.',
      note: 'Las ocho características de 2011 eran: adecuación funcional, eficiencia de desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. En 2023 se revisan usabilidad y portabilidad como capacidad de interacción y flexibilidad, y se incorpora safety. La calidad en uso pasa a ISO/IEC 25019.',
      sources: [{ label: 'ISO · Edición 2023', url: 'https://www.iso.org/standard/78176.html' }, { label: 'ISO · Modelo de 2011', url: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en' }]
    },
    {
      id: 'iso25019', name: 'ISO/IEC 25019', fullName: 'SQuaRE · Modelo de calidad en uso', type: 'Estándar', categories: ['uso'], year: 2023,
      creator: 'ISO e IEC · Comité JTC 1/SC 7', origin: 'Internacional',
      description: 'Evalúa las consecuencias del uso del sistema para sus usuarios y otras partes interesadas en un contexto definido.',
      dateNote: 'Primera edición: noviembre de 2023. Evoluciona la parte de calidad en uso de ISO/IEC 25010:2011.',
      dimensions: ['Beneficio del uso (beneficialness)', 'Ausencia de riesgo (freedom from risk)', 'Aceptabilidad (acceptability)'],
      dimensionNote: 'Tres características generales; el contexto de uso es un requisito previo. Traducción didáctica de los términos ingleses.',
      application: 'Observar si pacientes y personal pueden reservar una cita, con resultados útiles y riesgos controlados en su entorno real.',
      note: 'En ISO/IEC 25010:2011 la calidad en uso se organizaba en eficacia, eficiencia, satisfacción, ausencia de riesgo y cobertura del contexto. No deben mezclarse los listados de distintas ediciones.',
      sources: [{ label: 'ISO · ISO/IEC 25019:2023', url: 'https://www.iso.org/standard/78177.html' }, { label: 'ISO · Vista previa y términos', url: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:25019:ed-1:v1:en' }]
    },
    {
      id: 'mccall', name: 'McCall', fullName: 'Modelo de factores de calidad de McCall', type: 'Modelo', categories: ['producto'], year: 1977,
      creator: 'Jim A. McCall, Paul K. Richards y Gene F. Walters · General Electric', origin: 'Estados Unidos',
      description: 'Relaciona factores, criterios y métricas para evaluar la operación, la revisión y la transición del software.',
      dateNote: 'Informe Factors in Software Quality, publicado en 1977 para el Rome Air Development Center.',
      dimensions: ['Operación: corrección, fiabilidad, eficiencia, integridad y usabilidad', 'Revisión: mantenibilidad, flexibilidad y facilidad de prueba', 'Transición: portabilidad, reutilización e interoperabilidad'],
      application: 'Comparar soluciones según su facilidad de operación, modificación e integración con otros sistemas.',
      note: 'Es un modelo histórico con once factores. Sirve para comprender la evolución de los modelos de calidad posteriores.',
      sources: [{ label: 'NTIS · Informe original de 1977', url: 'https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/ADA049014.xhtml' }]
    },
    {
      id: 'boehm', name: 'Boehm', fullName: 'Modelo jerárquico de calidad de Boehm', type: 'Modelo', categories: ['producto'], year: 1978,
      creator: 'Barry W. Boehm y colaboradores · TRW', origin: 'Estados Unidos',
      description: 'Organiza la calidad en una jerarquía que conecta la utilidad del software con atributos que pueden evaluarse.',
      dateNote: '1978 corresponde al libro Characteristics of Software Quality; hubo trabajos preliminares anteriores.',
      dimensions: ['Utilidad en su estado actual', 'Mantenibilidad', 'Portabilidad', 'Atributos como fiabilidad, eficiencia y facilidad de comprensión'],
      application: 'Estudiar si una aplicación es útil hoy y si su código podrá entenderse, probarse y adaptarse mañana.',
      note: 'El modelo de calidad de Boehm es diferente de su modelo en espiral, que organiza el desarrollo y el análisis de riesgos.',
      sources: [{ label: 'Boehm · Libro original, 1978', url: 'https://books.google.com/books/about/Characteristics_of_Software_Quality.html?id=Cdm0AAAAIAAJ' }]
    },
    {
      id: 'furps', name: 'FURPS / FURPS+', fullName: 'Functionality, Usability, Reliability, Performance, Supportability', type: 'Modelo', categories: ['producto'], year: 1987,
      creator: 'Robert B. Grady y Deborah L. Caswell · Hewlett-Packard', origin: 'Estados Unidos',
      description: 'Agrupa requisitos de calidad en cinco dimensiones para evitar que la evaluación se limite a las funciones.',
      dateNote: '1987: publicación de Software Metrics: Establishing a Company-Wide Program. FURPS+ es una ampliación posterior.',
      dimensions: ['Funcionalidad', 'Usabilidad', 'Fiabilidad', 'Rendimiento', 'Soportabilidad'],
      application: 'Especificar que una tienda permita comprar, sea comprensible, se recupere de errores y pueda mantenerse.',
      note: 'El signo + amplía la clasificación con restricciones de diseño, implementación, interfaces y requisitos físicos. No es una norma ISO.',
      sources: [{ label: 'Grady y Caswell · Libro original', url: 'https://archive.org/details/softwaremetricse00grad' }, { label: 'IBM · Las cinco dimensiones FURPS', url: 'https://public.dhe.ibm.com/software/uk/itsolutions/developer/rsdc/materials/raw14026usen.pdf' }]
    },
    {
      id: 'gilb', name: 'Gilb', fullName: 'Calidad mediante objetivos cuantificables', type: 'Modelo', categories: ['producto'], year: 1988,
      creator: 'Tom Gilb', origin: 'Desarrollado en el contexto profesional de Noruega',
      description: 'Convierte necesidades de calidad en objetivos medibles y evalúa el progreso mediante entregas evolutivas.',
      dateNote: '1988 es el hito bibliográfico de Principles of Software Engineering Management, no el inicio de todos los trabajos del autor.',
      dimensions: ['Objetivos de calidad', 'Escalas y métodos de medición', 'Valores de referencia y metas', 'Entrega evolutiva de valor'],
      application: 'Sustituir “el sistema debe ser rápido” por una meta de tiempo de respuesta, con carga y método de medición definidos.',
      note: 'Su enfoque permite medir disponibilidad, capacidad de trabajo y otras cualidades; no se limita a esas dos propiedades.',
      sources: [{ label: 'Tom Gilb · Bibliografía y libro de 1988', url: 'https://www.gilb.com/tomtwin/book/stakeholder-engineering/' }]
    },
    {
      id: 'dromey', name: 'Dromey', fullName: 'Modelo de calidad del producto de software', type: 'Modelo', categories: ['producto'], year: 1995,
      creator: 'R. Geoff Dromey · Griffith University', origin: 'Australia',
      description: 'Vincula propiedades concretas de los componentes del software con atributos de calidad de alto nivel.',
      dateNote: 'Artículo A Model for Software Product Quality, IEEE Transactions on Software Engineering, febrero de 1995.',
      dimensions: ['Propiedades de los componentes', 'Relación entre propiedades y atributos', 'Evaluación del producto concreto'],
      application: 'Relacionar código confuso o módulos muy acoplados con dificultades de mantenimiento y pruebas.',
      note: 'Destaca que la calidad debe analizarse a partir de las propiedades reales del producto, no solo de un listado abstracto.',
      sources: [{ label: 'IEEE · Artículo original y DOI', url: 'https://ieeexplore.ieee.org/abstract/document/345830' }]
    },
    {
      id: 'psp', name: 'PSP', fullName: 'Personal Software Process', type: 'Método', categories: ['proceso'], year: 1993,
      creator: 'Watts S. Humphrey · Software Engineering Institute', origin: 'Estados Unidos',
      description: 'Ayuda al desarrollador a planificar su trabajo y registrar tiempo, tamaño y defectos para mejorar sus resultados.',
      dateNote: 'El SEI sitúa su introducción en 1993. El libro A Discipline for Software Engineering se asocia a su difusión en 1994–1995.',
      dimensions: ['Planificación personal', 'Registro del tiempo', 'Estimación', 'Prevención y revisión de defectos'],
      application: 'Un desarrollador contrasta sus estimaciones con el esfuerzo real y ajusta su lista de revisión de código.',
      note: 'Es un método de mejora personal que puede servir de base al trabajo en equipo con TSP.',
      sources: [{ label: 'SEI · Historia y fechas de PSP y TSP', url: 'https://www.sei.cmu.edu/documents/2318/2011_001_001_30129.pdf' }, { label: 'Humphrey · Informe PSP', url: 'https://insights.sei.cmu.edu/library/the-personal-software-process-psp/' }]
    },
    {
      id: 'tsp', name: 'TSP', fullName: 'Team Software Process', type: 'Método', categories: ['proceso'], year: 1996,
      creator: 'Watts S. Humphrey y equipo · Software Engineering Institute', origin: 'Estados Unidos',
      description: 'Organiza equipos que planifican, asignan responsabilidades y siguen objetivos de calidad con datos compartidos.',
      dateNote: 'El SEI sitúa su lanzamiento en 1996. El informe técnico de referencia de Humphrey se publicó en 2000.',
      dimensions: ['Roles y compromisos', 'Plan del equipo', 'Seguimiento del progreso', 'Gestión de calidad'],
      application: 'Un equipo asigna responsables, estima el esfuerzo conjunto y revisa semanalmente los defectos y los compromisos.',
      note: 'Complementa PSP: la disciplina individual se integra con la coordinación y la responsabilidad del equipo.',
      sources: [{ label: 'SEI · Historia y fechas de PSP y TSP', url: 'https://www.sei.cmu.edu/documents/2318/2011_001_001_30129.pdf' }, { label: 'SEI · Colección de Watts Humphrey', url: 'https://insights.sei.cmu.edu/watts/watts/' }]
    },
    {
      id: 'itil', name: 'ITIL', fullName: 'Buenas prácticas para la gestión de servicios de TI', type: 'Marco', categories: ['proceso'], year: 1989,
      creator: 'Central Computer and Telecommunications Agency (CCTA)', origin: 'Reino Unido',
      description: 'Orienta la gestión de servicios tecnológicos y la creación de valor para clientes y usuarios.',
      dateNote: 'Primer libro publicado en 1989. ITIL ha evolucionado a través de varias versiones.',
      dimensions: ['Gestión de servicios', 'Incidentes y problemas', 'Cambios', 'Mejora continua'],
      application: 'Organizar una mesa de ayuda que restablezca servicios y aprenda de los incidentes recurrentes.',
      note: 'Es un marco de buenas prácticas, no una norma ISO de calidad del producto. PeopleCert gestiona actualmente ITIL.',
      sources: [{ label: 'PeopleCert · Historia y evolución de ITIL', url: 'https://community.peoplecert.org/public/clubs/itil/blogs/why-the-new-itil-is-not-just-for-it-courses-2026-02-05' }, { label: 'PeopleCert · ITIL', url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1' }]
    },
    {
      id: 'cobit', name: 'COBIT', fullName: 'Gobierno y gestión de la información y la tecnología', type: 'Marco', categories: ['proceso'], year: 1996,
      creator: 'ISACA y su equipo de expertos', origin: 'Comunidad internacional · ISACA, EE. UU.',
      description: 'Conecta las decisiones y los controles de TI con los objetivos, los riesgos y las necesidades del negocio.',
      dateNote: 'Primera edición publicada por ISACA en 1996.',
      dimensions: ['Gobierno de TI', 'Objetivos del negocio', 'Riesgo y controles', 'Medición del desempeño'],
      application: 'Definir quién decide una inversión tecnológica, qué beneficios espera y cómo supervisará sus riesgos.',
      note: 'Su alcance es el gobierno de la tecnología de la organización; no constituye un modelo de atributos del código.',
      sources: [{ label: 'ISACA · Historia de COBIT', url: 'https://www.isaca.org/resources/news-and-trends/industry-news/2016/cobit-the-road-ahead' }]
    },
    {
      id: 'spice', name: 'ISO/IEC 15504', fullName: 'SPICE · Evaluación de procesos', type: 'Estándar', categories: ['proceso'], year: 1998,
      creator: 'ISO e IEC · Comité JTC 1/SC 7 y proyecto SPICE', origin: 'Internacional',
      description: 'Familia histórica para evaluar la capacidad de los procesos e identificar oportunidades de mejora.',
      dateNote: 'Primer conjunto de informes técnicos en 1998. Las partes se desarrollaron después como normas internacionales.',
      dimensions: ['0 · Incompleto', '1 · Realizado', '2 · Gestionado', '3 · Establecido', '4 · Predecible', '5 · En optimización'],
      application: 'Determinar si la gestión de requisitos se ejecuta, se controla y se mejora de forma sistemática.',
      note: 'Sus partes fueron sustituidas progresivamente por la familia ISO/IEC 330xx. Los niveles de capacidad de procesos no son idénticos a los de madurez organizacional de CMMI.',
      sources: [{ label: 'ISO · Informe inicial de 1998', url: 'https://www.iso.org/standard/27947.html' }, { label: 'ISO · Evolución hacia 33001', url: 'https://www.iso.org/standard/54175.html' }]
    },
    {
      id: 'iso33001', name: 'ISO/IEC 33001', fullName: 'Evaluación de procesos · Conceptos y terminología', type: 'Estándar', categories: ['proceso'], year: 2015,
      creator: 'ISO e IEC · Comité JTC 1/SC 7', origin: 'Internacional',
      description: 'Introduce la familia ISO/IEC 330xx y su vocabulario para evaluar la calidad y la capacidad de los procesos.',
      dateNote: 'Primera edición: marzo de 2015.',
      dimensions: ['Conceptos de evaluación', 'Capacidad de procesos', 'Relación entre normas 330xx', 'Uso de resultados'],
      application: 'Seleccionar las normas de evaluación y medición adecuadas antes de iniciar una mejora de procesos.',
      note: '33001 es la introducción conceptual. Las reglas de evaluación y los marcos de medición se desarrollan en otras partes, como 33002 y 33020.',
      sources: [{ label: 'ISO · ISO/IEC 33001:2015', url: 'https://www.iso.org/standard/54175.html' }]
    },
    {
      id: 'iso12207', name: 'ISO/IEC/IEEE 12207', fullName: 'Procesos del ciclo de vida del software', type: 'Estándar', categories: ['proceso'], year: 1995,
      creator: 'ISO e IEC; posteriores ediciones conjuntas con IEEE', origin: 'Internacional',
      description: 'Establece un marco común de procesos para adquirir, desarrollar, operar, mantener y retirar software.',
      dateNote: 'La familia comienza con ISO/IEC 12207:1995. IEEE/EIA 12207.0-1996 se aprobó en 1996 y se publicó en 1998.',
      dimensions: ['Acuerdos de adquisición y suministro', 'Gestión organizacional y del proyecto', 'Procesos técnicos del ciclo de vida'],
      application: 'Definir responsabilidades, actividades y resultados desde la contratación hasta el mantenimiento de un sistema.',
      note: 'No impone un ciclo de vida único: sus procesos pueden aplicarse en distintos enfoques de desarrollo. IEEE/EIA 12207 es una adopción histórica de esta familia.',
      sources: [{ label: 'ISO · Historia de la familia 12207', url: 'https://www.iso.org/standard/43447.html' }, { label: 'IEEE · IEEE/EIA 12207.0-1996', url: 'https://standards.ieee.org/standard/12207_0-1996.html' }]
    },
    {
      id: 'iso9126', name: 'ISO/IEC 9126', fullName: 'Modelo histórico de calidad del producto', type: 'Estándar', categories: ['producto', 'uso'], year: 1991,
      creator: 'ISO e IEC · Comité JTC 1/SC 7', origin: 'Internacional',
      description: 'Normalizó seis características de calidad del software y dio paso a una familia de modelos y métricas.',
      dateNote: 'Primera publicación en 1991; ISO/IEC 9126-1:2001 desarrolló el modelo de calidad posterior.',
      dimensions: ['Funcionalidad', 'Fiabilidad', 'Usabilidad', 'Eficiencia', 'Mantenibilidad', 'Portabilidad'],
      application: 'Comprender la base histórica de las evaluaciones de calidad interna, externa y en uso.',
      note: 'Referencia histórica retirada. ISO/IEC 25010:2011 sustituyó a 9126-1:2001. Para nuevos estudios, distingue claramente las ediciones de SQuaRE.',
      sources: [{ label: 'ISO · ISO/IEC 9126-1:2001 y antecedentes', url: 'https://www.iso.org/standard/22749.html' }]
    },
    {
      id: 'iso25000', name: 'ISO/IEC 25000', fullName: 'Guía de SQuaRE', type: 'Estándar', categories: ['producto', 'uso'], year: 2005,
      creator: 'ISO e IEC · Comité JTC 1/SC 7', origin: 'Internacional',
      description: 'Explica cómo se relacionan las normas de requisitos, modelos, medición y evaluación de calidad de la familia SQuaRE.',
      dateNote: 'Primera edición: agosto de 2005. Revisión de la guía en 2014.',
      dimensions: ['Gestión de calidad', 'Modelos de calidad', 'Medición', 'Requisitos', 'Evaluación'],
      application: 'Elegir un modelo de calidad, definir requisitos medibles y planificar su evaluación dentro de una misma familia.',
      note: 'SQuaRE es una familia de normas. ISO/IEC 25000 es su guía; no debe confundirse con el modelo específico de ISO/IEC 25010.',
      sources: [{ label: 'ISO · Guía SQuaRE de 2005', url: 'https://www.iso.org/standard/35683.html' }]
    },
    {
      id: 'iso25040', name: 'ISO/IEC 25040', fullName: 'SQuaRE · Evaluación de la calidad', type: 'Estándar', categories: ['producto'], year: 2011,
      creator: 'ISO e IEC · Comité JTC 1/SC 7', origin: 'Internacional',
      description: 'Proporciona un marco para organizar la evaluación de calidad con criterios y resultados documentados.',
      dateNote: 'Primera edición: marzo de 2011. La edición de 2024 sustituye a la de 2011.',
      dimensions: ['Requisitos de evaluación', 'Especificación de la evaluación', 'Diseño', 'Ejecución', 'Conclusión'],
      dimensionNote: 'Síntesis del proceso descrito en la edición de 2011.',
      application: 'Comparar dos soluciones de software con las mismas métricas, condiciones de prueba y criterios de aceptación.',
      note: 'Su foco es el proceso de evaluar la calidad del producto; no es un modelo de madurez de los procesos de desarrollo.',
      sources: [{ label: 'ISO · Edición 2011 y reemplazo en 2024', url: 'https://www.iso.org/standard/35765.html' }]
    },
    {
      id: 'iso9001', name: 'ISO 9001', fullName: 'Sistemas de gestión de la calidad', type: 'Estándar', categories: ['proceso'], year: 1987,
      creator: 'ISO · Comité TC 176/SC 2', origin: 'Internacional',
      description: 'Establece requisitos para un sistema de gestión capaz de proporcionar resultados consistentes y mejorar la satisfacción del cliente.',
      dateNote: 'Primera edición: marzo de 1987. La ficha oficial recoge la evolución y las nuevas ediciones.',
      dimensions: ['Enfoque al cliente', 'Gestión por procesos', 'Evaluación del desempeño', 'Mejora continua'],
      application: 'Una empresa de software gestiona requisitos del cliente, controla sus procesos y da seguimiento a las no conformidades.',
      note: 'Es transversal a sectores. La certificación evalúa un sistema de gestión con alcance definido; no garantiza que todo software producido carezca de fallos.',
      sources: [{ label: 'ISO · Primera edición y evolución', url: 'https://www.iso.org/standard/16533.html' }, { label: 'ISO · Cómo funciona la certificación', url: 'https://www.iso.org/certification.html' }]
    },
    {
      id: 'ieee830', name: 'IEEE 830', fullName: 'Especificación de requisitos de software', type: 'Estándar', categories: ['proceso', 'producto'], year: 1984,
      creator: 'IEEE · Computer Society', origin: 'Estados Unidos · alcance internacional',
      description: 'Guía histórica para describir el contenido y las cualidades de una buena especificación de requisitos de software.',
      dateNote: 'Primera publicación: 1984. La edición 830-1998 es una revisión muy citada.',
      dimensions: ['Requisitos claros', 'Consistencia', 'Verificabilidad', 'Trazabilidad'],
      application: 'Revisar que cada requisito de una especificación pueda entenderse, comprobarse y relacionarse con una necesidad.',
      note: 'Es una referencia histórica. Su evolución se integra en ISO/IEC/IEEE 29148 sobre ingeniería de requisitos.',
      sources: [{ label: 'IEEE · Primera edición 830-1984', url: 'https://standards.ieee.org/standard/830-1984.html' }, { label: 'ISO · Ingeniería de requisitos 29148', url: 'https://www.iso.org/standard/72089.html' }]
    },
    {
      id: 'iso29148', name: 'ISO/IEC/IEEE 29148', fullName: 'Ingeniería de requisitos', type: 'Estándar', categories: ['proceso', 'producto'], year: 2011,
      creator: 'ISO, IEC e IEEE · JTC 1/SC 7', origin: 'Internacional',
      description: 'Define procesos y contenidos de información para gestionar requisitos de sistemas y software durante el ciclo de vida.',
      dateNote: 'Primera edición: 2011. Segunda edición publicada en 2018.',
      dimensions: ['Necesidades de las partes interesadas', 'Requisitos del sistema y software', 'Especificación', 'Gestión y trazabilidad'],
      application: 'Transformar una necesidad del negocio en requisitos verificables y mantener sus relaciones con las pruebas.',
      note: 'Amplía el alcance de las antiguas recomendaciones de documentación: aborda actividades de ingeniería de requisitos durante el ciclo de vida.',
      sources: [{ label: 'ISO · ISO/IEC/IEEE 29148:2018 e historia', url: 'https://www.iso.org/standard/72089.html' }]
    },
    {
      id: 'iso27001', name: 'ISO/IEC 27001', fullName: 'Sistemas de gestión de la seguridad de la información', type: 'Estándar', categories: ['proceso'], year: 2005,
      creator: 'ISO e IEC · Comité JTC 1/SC 27', origin: 'Internacional',
      description: 'Especifica requisitos para gestionar los riesgos que afectan la confidencialidad, integridad y disponibilidad de la información.',
      dateNote: 'Primera edición ISO/IEC en 2005, con antecedentes en BS 7799. Entre sus revisiones está la edición de 2022.',
      dimensions: ['Evaluación de riesgos', 'Tratamiento de riesgos', 'Controles de seguridad', 'Seguimiento y mejora'],
      application: 'Identificar riesgos de acceso indebido al repositorio y establecer controles, responsables y seguimiento.',
      note: 'Complementa la calidad de software desde la gestión organizacional. Certificar el sistema de gestión no es certificar individualmente una aplicación.',
      sources: [{ label: 'ISO · Primera edición de 2005', url: 'https://www.iso.org/standard/42103.html' }]
    },
    {
      id: 'iso9241', name: 'ISO 9241-11', fullName: 'Usabilidad · Definiciones y conceptos', type: 'Estándar', categories: ['uso'], year: 1998,
      creator: 'ISO · Comité TC 159/SC 4', origin: 'Internacional',
      description: 'Sitúa la usabilidad en la relación entre usuarios, objetivos y un contexto de uso específico.',
      dateNote: 'Primera edición de la parte 11: 1998. Segunda edición: 2018.',
      dimensions: ['Eficacia', 'Eficiencia', 'Satisfacción', 'Contexto de uso'],
      application: 'Medir cuántas personas completan un registro, cuánto tardan y cómo valoran la experiencia en un teléfono.',
      note: 'La eficacia es lograr el objetivo; la eficiencia relaciona el resultado con los recursos usados. El contexto incluye usuarios, tareas y entorno.',
      sources: [{ label: 'ISO · Primera edición de 1998', url: 'https://www.iso.org/standard/16883.html' }, { label: 'ISO · Edición 2018', url: 'https://www.iso.org/standard/63500.html' }]
    },
    {
      id: 'wcag', name: 'WCAG', fullName: 'Web Content Accessibility Guidelines', type: 'Estándar', categories: ['uso', 'producto'], year: 1999,
      creator: 'W3C · Web Accessibility Initiative (WAI)', origin: 'Consorcio internacional',
      description: 'Define criterios comprobables para hacer el contenido web accesible a personas con distintas discapacidades.',
      dateNote: 'WCAG 1.0: 5 de mayo de 1999. WCAG 2.2 se publicó como recomendación en 2023.',
      dimensions: ['Perceptible', 'Operable', 'Comprensible', 'Robusto'],
      dimensionNote: 'Los cuatro principios de WCAG 2.x. Los criterios se organizan en niveles A, AA y AAA.',
      application: 'Permitir completar un formulario con teclado, etiquetas comprensibles y contraste suficiente.',
      note: 'WCAG es una recomendación técnica del W3C. Su exigibilidad depende de su incorporación a regulaciones o contratos; accesibilidad y usabilidad se complementan.',
      sources: [{ label: 'W3C · Lanzamiento de WCAG 1.0', url: 'https://www.w3.org/press-releases/1999/wcag/' }, { label: 'W3C · WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' }]
    }
  ],
  questions: [
    { question: 'Un equipo quiere reducir errores mejorando sus revisiones y su planificación. ¿Qué enfoque prioriza?', options: ['Calidad del producto', 'Calidad del proceso', 'Calidad en uso'], answer: 1, explanation: 'El enfoque de proceso estudia cómo se construye el software. CMMI, PSP o TSP ayudan a mejorar esas prácticas.', related: 'cmmi' },
    { question: '¿Cuál es una diferencia correcta entre modelo y estándar?', options: ['Todo estándar es legalmente obligatorio.', 'Un modelo siempre tiene certificación.', 'Un modelo organiza conceptos; un estándar formaliza acuerdos técnicos.'], answer: 2, explanation: 'Los estándares suelen ser voluntarios, aunque pueden exigirse por contrato o regulación. Una norma también puede definir un modelo, como ISO/IEC 25010.', related: 'iso25010' },
    { question: '¿Cuántas características principales tiene el modelo de producto de ISO/IEC 25010:2023?', options: ['Ocho', 'Nueve', 'Cinco'], answer: 1, explanation: 'La edición 2023 tiene nueve características. El listado de ocho corresponde a 2011; la calidad en uso se desarrolla ahora en ISO/IEC 25019.', related: 'iso25010' },
    { question: 'Observar si una persona logra reservar una cita y queda satisfecha evalúa principalmente…', options: ['La madurez de la organización', 'La cantidad de líneas de código', 'La calidad en uso'], answer: 2, explanation: 'Se observan resultados para una persona, una tarea y un contexto real. No basta con verificar que existe un botón de reserva.', related: 'iso9241' },
    { question: '¿Qué afirmación sobre el origen de estas referencias es correcta?', options: ['McCall y colaboradores publicaron su modelo en 1977.', 'CMMI fue creado por ISO en 2011.', 'WCAG fue creado por IEEE en 1984.'], answer: 0, explanation: 'El informe de McCall, Richards y Walters es de 1977. CMMI se publicó en 2000 y WCAG 1.0 fue publicado por el W3C en 1999.', related: 'mccall' }
  ]
};
