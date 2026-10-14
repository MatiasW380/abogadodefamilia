// Guías legales: artículos pensados para responder búsquedas concretas en Google.
// Cada guía se relaciona con un servicio (campo `servicio`) para enlazarlos entre sí.

export const GUIAS = [
  {
    slug: 'me-denunciaron-por-violencia-familiar-que-hacer',
    servicio: 'violencia-familiar',
    titulo: 'Me denunciaron por violencia familiar en Córdoba: qué hacer',
    tituloSeo: 'Me denunciaron por violencia familiar: qué hacer | Córdoba',
    descripcion:
      'Qué hacer si te notificaron una denuncia por violencia familiar en Córdoba: cómo cumplir la medida, qué evitar, tus derechos y cómo preparar la audiencia.',
    resumen:
      'Los primeros pasos después de recibir una notificación: qué hacer, qué evitar y cuáles son tus derechos.',
    fecha: '2026-10-14',
    bloques: [
      {
        parrafos: [
          'Recibir una notificación por violencia familiar genera angustia y muchas dudas. Lo que hagas en las primeras horas y días puede influir en cómo sigue el proceso, por eso conviene actuar con calma y con asesoramiento.',
        ],
      },
      {
        h2: '1. Leé la resolución completa',
        parrafos: [
          'La notificación indica qué medidas dictó el juzgado (por ejemplo, prohibición de acercamiento, prohibición de contacto o exclusión del hogar), a qué personas alcanzan, a qué distancia y por cuánto tiempo. Guardala: la vas a necesitar.',
        ],
      },
      {
        h2: '2. Cumplí la medida al pie de la letra',
        parrafos: [
          'Desde que te notifican, la medida es obligatoria aunque no estés de acuerdo con ella. La prohibición de contacto suele incluir llamadas, mensajes, redes sociales y contacto a través de familiares o amigos.',
          'Incumplir una orden judicial puede constituir el delito de desobediencia y empeorar tu situación en el proceso de familia, incluso si el contacto lo inicia la otra persona.',
        ],
      },
      {
        h2: '3. Qué no hacer',
        lista: [
          'No busques a la otra persona “para aclarar las cosas”, ni le pidas a terceros que lo hagan.',
          'No publiques nada sobre el conflicto en redes sociales.',
          'No vuelvas a la vivienda si te excluyeron del hogar. Para retirar tus efectos personales hay que pedirlo y hacerlo con intervención de la autoridad.',
          'No declares ni firmes nada sin haber consultado antes con tu abogado.',
        ],
      },
      {
        h2: '4. Reuní documentación',
        parrafos: [
          'Juntá la notificación, mensajes, correos, fotos, certificados y datos de personas que puedan declarar. Guardá las conversaciones completas, no solo fragmentos.',
        ],
      },
      {
        h2: '5. Tus derechos',
        parrafos: [
          'Una medida de protección es provisoria y cautelar: no es una condena ni implica que se haya probado nada. Tenés derecho a ser oído, a contar con un abogado defensor y a ofrecer prueba. Las medidas tienen un plazo y pueden modificarse o dejarse sin efecto.',
          'Si además se abrió una causa penal, tenés derecho a no declarar sin asesoramiento previo.',
        ],
      },
      {
        h2: '6. Si tenés hijos',
        parrafos: [
          'Una medida de restricción no termina con tu vínculo con tus hijos. Según el caso, se puede pedir que se fije un régimen de comunicación compatible con la medida, por ejemplo con encuentros supervisados o con otra persona que haga de intermediaria.',
        ],
      },
    ],
    preguntas: [
      {
        p: '¿La medida de restricción es una condena?',
        r: 'No. Es una medida provisoria y cautelar que el juzgado dicta para prevenir riesgos mientras se analiza la situación. Tenés derecho a defenderte y ofrecer prueba.',
      },
      {
        p: '¿Qué pasa si la otra persona me escribe?',
        r: 'No respondas. La medida te obliga a vos, aunque el contacto lo inicie la otra persona. Guardá el mensaje y consultá con tu abogado.',
      },
      {
        p: '¿Puedo seguir viendo a mis hijos?',
        r: 'Depende de lo que diga la medida. Si alcanza a los hijos o impide el contacto, se puede pedir al juzgado un régimen de comunicación compatible.',
      },
    ],
  },
  {
    slug: 'restriccion-de-acercamiento-exclusion-del-hogar',
    servicio: 'violencia-familiar',
    titulo: 'Restricción de acercamiento y exclusión del hogar: qué significan',
    tituloSeo: 'Restricción de acercamiento y exclusión del hogar | Córdoba',
    descripcion:
      'Qué es una restricción de acercamiento (perimetral) y una exclusión del hogar en Córdoba, cuánto duran, qué pasa si se incumplen y cómo se piden.',
    resumen:
      'Las medidas de protección más comunes explicadas para quien las pide y para quien las recibe.',
    fecha: '2026-10-14',
    bloques: [
      {
        parrafos: [
          'En los casos de violencia familiar, los juzgados pueden dictar medidas de protección en plazos muy cortos. En la Provincia de Córdoba rige la Ley de Violencia Familiar N.º 9283. Estas son las medidas más frecuentes y lo que implican.',
        ],
      },
      {
        h2: 'Restricción o prohibición de acercamiento',
        parrafos: [
          'Conocida como “perimetral”, prohíbe acercarse a una persona y a ciertos lugares (su casa, su trabajo, la escuela de los chicos) dentro de una distancia fijada por el juzgado.',
        ],
      },
      {
        h2: 'Prohibición de contacto',
        parrafos: [
          'Impide comunicarse por cualquier medio: llamadas, mensajes, redes sociales, correo o a través de terceros. Suele dictarse junto con la restricción de acercamiento.',
        ],
      },
      {
        h2: 'Exclusión del hogar',
        parrafos: [
          'Ordena que una persona deje la vivienda que comparte con quien pidió la protección. También puede ordenarse el reintegro al hogar de quien tuvo que irse por la situación de violencia.',
        ],
      },
      {
        h2: '¿Cuánto duran?',
        parrafos: [
          'El juzgado fija un plazo. Al vencer, puede prorrogarlas, modificarlas o dejarlas sin efecto según cómo evolucione la situación.',
        ],
      },
      {
        h2: '¿Qué pasa si se incumplen?',
        parrafos: [
          'El incumplimiento se debe denunciar de inmediato. Para quien incumple, puede constituir el delito de desobediencia y dar lugar a medidas más severas.',
        ],
      },
      {
        h2: 'Cómo se piden',
        parrafos: [
          'La denuncia puede hacerse en una Unidad Judicial o comisaría, y el juzgado puede dictar las medidas en pocas horas. Contar con un abogado ayuda a pedir las medidas adecuadas y a resolver a la vez temas como la cuota y el cuidado de los hijos.',
        ],
      },
    ],
    preguntas: [
      {
        p: '¿Qué distancia tiene una perimetral?',
        r: 'La fija el juzgado en cada caso. Está indicada en la resolución que se notifica.',
      },
      {
        p: '¿Una exclusión del hogar me hace perder la casa?',
        r: 'No define la propiedad de la vivienda. Es una medida de protección provisoria; la vivienda y los bienes se resuelven por otras vías.',
      },
    ],
  },
  {
    slug: 'como-reclamar-cuota-alimentaria-cordoba',
    servicio: 'cuota-alimentaria',
    titulo: 'Cómo reclamar la cuota alimentaria en Córdoba, paso a paso',
    tituloSeo: 'Cómo reclamar la cuota alimentaria en Córdoba, paso a paso',
    descripcion:
      'Guía para reclamar la cuota alimentaria de tus hijos en Córdoba: qué documentación necesitás, cuota provisoria, cómo es el proceso y cuánto demora.',
    resumen: 'Documentación, cuota provisoria y etapas del reclamo, explicado de forma simple.',
    fecha: '2026-10-14',
    bloques: [
      {
        parrafos: [
          'Si el otro progenitor no aporta o lo hace de forma irregular, podés reclamar judicialmente una cuota alimentaria para tus hijos. Estos son los pasos.',
        ],
      },
      {
        h2: '1. Reuní la documentación',
        lista: [
          'Tu DNI y las partidas de nacimiento de tus hijos.',
          'Datos del otro progenitor: domicilio, trabajo o actividad.',
          'Comprobantes de gastos: escuela, salud, alquiler, actividades.',
          'Cualquier prueba de su nivel de vida o ingresos (redes sociales, vehículo, comercio).',
        ],
      },
      {
        h2: '2. Se presenta el reclamo y se pide una cuota provisoria',
        parrafos: [
          'Junto con la demanda se puede pedir una cuota provisoria, que el juzgado fija para que los chicos no tengan que esperar al final del proceso.',
        ],
      },
      {
        h2: '3. Audiencia y posibilidad de acuerdo',
        parrafos: [
          'En muchos casos se llega a un acuerdo en la audiencia. Si se firma, se homologa y tiene la misma fuerza que una sentencia.',
        ],
      },
      {
        h2: '4. Prueba y sentencia',
        parrafos: [
          'Si no hay acuerdo, se prueban las necesidades de los hijos y los ingresos del otro progenitor, y el juzgado fija la cuota en la sentencia.',
        ],
      },
      {
        h2: 'Desde cuándo se debe',
        parrafos: [
          'La cuota se debe desde el reclamo, no desde la sentencia. Cuanto antes se inicie, mejor.',
        ],
      },
    ],
    preguntas: [
      {
        p: '¿Puedo reclamar si el otro progenitor trabaja en negro?',
        r: 'Sí. Sus ingresos se pueden probar por su nivel de vida, su actividad, sus bienes o testigos.',
      },
      {
        p: '¿Necesito que el otro esté de acuerdo?',
        r: 'No. Si no hay acuerdo, el juzgado fija la cuota.',
      },
      {
        p: '¿Hasta qué edad se paga?',
        r: 'Hasta los 21 años, y hasta los 25 si el hijo o la hija estudia y eso le impide mantenerse.',
      },
    ],
  },
  {
    slug: 'como-se-calcula-la-cuota-alimentaria',
    servicio: 'cuota-alimentaria',
    titulo: '¿Cuánto es la cuota alimentaria? Cómo se calcula',
    tituloSeo: '¿Cuánto es la cuota alimentaria? Cómo se calcula en Córdoba',
    descripcion:
      'No hay un porcentaje fijo: cómo se calcula la cuota alimentaria, qué gastos incluye, qué se tiene en cuenta y cómo se actualiza.',
    resumen: 'Por qué no hay un porcentaje fijo y qué tiene en cuenta el juzgado para fijar el monto.',
    fecha: '2026-10-14',
    bloques: [
      {
        parrafos: [
          'Es la pregunta más frecuente. La respuesta corta: no existe un porcentaje fijo establecido por ley. El monto depende de cada caso.',
        ],
      },
      {
        h2: 'Qué se tiene en cuenta',
        lista: [
          'Las necesidades de los hijos según su edad: alimentación, educación, vestimenta, vivienda, salud, transporte y esparcimiento.',
          'Los ingresos y el nivel de vida de ambos progenitores.',
          'Las tareas de cuidado de quien convive con los chicos, que también son un aporte con valor económico.',
        ],
      },
      {
        h2: 'Una referencia útil: la canasta de crianza',
        parrafos: [
          'El INDEC publica mensualmente el costo de la canasta de crianza según la edad de los hijos. Muchos juzgados la toman como referencia para estimar las necesidades, aunque la cuota final depende de los ingresos y las circunstancias de cada familia.',
        ],
      },
      {
        h2: 'Cómo se actualiza',
        parrafos: [
          'Conviene que el acuerdo o la sentencia prevean un mecanismo de actualización, por ejemplo un porcentaje del sueldo o un índice. Si cambian las necesidades o los ingresos, se puede pedir un aumento o una reducción.',
        ],
      },
    ],
    preguntas: [
      {
        p: '¿Existe un porcentaje mínimo del sueldo?',
        r: 'No hay un porcentaje fijado por ley. Cuando el progenitor tiene sueldo registrado, es habitual fijar la cuota como un porcentaje de sus ingresos, que se actualiza solo.',
      },
      {
        p: '¿La cuota incluye la obra social y la escuela?',
        r: 'Puede incluirlas. Es frecuente que, además de un monto, se fije que uno de los progenitores pague directamente ciertos gastos como la obra social o la cuota escolar.',
      },
    ],
  },
  {
    slug: 'no-me-pagan-la-cuota-alimentaria-que-hacer',
    servicio: 'cuota-alimentaria',
    titulo: 'No me pagan la cuota alimentaria: qué puedo hacer',
    tituloSeo: 'No me pagan la cuota alimentaria: qué hacer en Córdoba',
    descripcion:
      'Qué hacer si el otro progenitor no paga la cuota alimentaria en Córdoba: reclamo de cuotas atrasadas, embargo de sueldo, Registro de Deudores Alimentarios y otras medidas.',
    resumen: 'Las herramientas legales para cobrar cuotas atrasadas y lograr que se cumpla.',
    fecha: '2026-10-14',
    bloques: [
      {
        parrafos: [
          'Si ya hay una cuota fijada por sentencia o acuerdo homologado y no se paga, la ley ofrece varias herramientas para cobrarla.',
        ],
      },
      {
        h2: 'Reclamo de las cuotas atrasadas',
        parrafos: [
          'Las cuotas impagas se reclaman con intereses. Conviene llevar un registro de lo que se pagó y lo que no.',
        ],
      },
      {
        h2: 'Embargo y retención del sueldo',
        parrafos: [
          'Si el deudor tiene empleo registrado, se puede ordenar que el empleador descuente la cuota directamente del sueldo. También se pueden embargar cuentas bancarias y bienes.',
        ],
      },
      {
        h2: 'Registro de Deudores Alimentarios Morosos',
        parrafos: [
          'El juzgado puede ordenar la inscripción del deudor en el registro, lo que le genera restricciones para realizar distintos trámites.',
        ],
      },
      {
        h2: 'Otras medidas',
        parrafos: [
          'La ley permite al juzgado adoptar otras medidas razonables para asegurar el cumplimiento. En casos graves, el incumplimiento puede incluso tener consecuencias penales.',
        ],
      },
      {
        h2: 'Si no hay cuota fijada',
        parrafos: [
          'Si nunca se fijó una cuota, el primer paso es reclamarla judicialmente y pedir una cuota provisoria.',
        ],
      },
    ],
    preguntas: [
      {
        p: 'Si no paga, ¿puedo impedirle ver a los chicos?',
        r: 'No. La cuota y el régimen de comunicación son derechos independientes. El incumplimiento de la cuota se reclama por su vía.',
      },
      {
        p: '¿Se puede reclamar a los abuelos?',
        r: 'En ciertos casos, sí, cuando los progenitores no pueden afrontar la cuota.',
      },
    ],
  },
  {
    slug: 'divorcio-unilateral-cordoba',
    servicio: 'divorcio',
    titulo: 'Divorcio unilateral en Córdoba: cómo funciona',
    tituloSeo: 'Divorcio unilateral en Córdoba: cómo funciona',
    descripcion:
      'Cómo es el divorcio unilateral en Córdoba: no hace falta el acuerdo del otro cónyuge ni explicar motivos. Propuesta reguladora, vivienda, bienes y plazos.',
    resumen: 'Cómo divorciarte aunque la otra persona no esté de acuerdo, y qué se resuelve en el proceso.',
    fecha: '2026-10-14',
    bloques: [
      {
        parrafos: [
          'En Argentina no hace falta que ambos cónyuges estén de acuerdo para divorciarse, ni explicar los motivos. Uno solo puede pedirlo.',
        ],
      },
      {
        h2: 'Qué hay que presentar',
        parrafos: [
          'Junto con el pedido de divorcio se presenta una propuesta reguladora: quién se queda en la vivienda, cómo se reparten los bienes, la cuota alimentaria, el cuidado de los hijos y el régimen de comunicación.',
        ],
      },
      {
        h2: 'Qué pasa si el otro no está de acuerdo',
        parrafos: [
          'El otro cónyuge puede presentar su propia propuesta. Si no se llega a un acuerdo sobre los efectos, el divorcio igual se dicta y los temas pendientes se resuelven en el mismo juzgado.',
        ],
      },
      {
        h2: 'Compensación económica',
        parrafos: [
          'Si el divorcio le produce a uno de los cónyuges un desequilibrio económico manifiesto, puede pedir una compensación económica. Hay un plazo de seis meses desde la sentencia para reclamarla.',
        ],
      },
    ],
    preguntas: [
      {
        p: '¿Cuánto tiempo hay que estar casado para divorciarse?',
        r: 'No hay un plazo mínimo.',
      },
      {
        p: '¿Puedo divorciarme si no sé dónde vive mi cónyuge?',
        r: 'Sí. Hay mecanismos para notificar a una persona cuyo domicilio se desconoce.',
      },
    ],
  },
];

export function getGuia(slug) {
  return GUIAS.find((g) => g.slug === slug);
}

export function guiasDeServicio(servicio) {
  return GUIAS.filter((g) => g.servicio === servicio);
}
