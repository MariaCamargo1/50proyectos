PROJECTO 1

TEMAS A APRENDER---
BOX SIZING: controla cómo se calcula el ancho y el alto de un elemento, incluyendo su contenido, relleno y borde. 

content-box: el ancho y el alto del elemento se calculan solo en base al contenido del elemento. El relleno y el borde se añaden al ancho y al alto total, lo que significa que el tamaño final del elemento será el resultado de la suma del ancho y alto del contenido, más el relleno y el borde.

border-box: el ancho y el alto del elemento incluyen el contenido, el relleno y el borde. En otras palabras, el tamaño total del elemento es el resultado de sumar el ancho y alto del contenido, el relleno y el borde.


CSS ANIDADO: es una técnica que te permite definir reglas de estilo más específicas y estructuradas. Con el anidamiento, puedes agrupar selectores relacionados y aplicar estilos de manera más organizada. 

"&" en CSS es conocido como el "selector padre" cuando se utiliza en el contexto de preprocesadores como Sass o Less. Este símbolo se utiliza para referirse al selector padre dentro de un bloque anidado.

El uso del amperson te permite escribir reglas de estilo de manera más concisa y legible, ya que evita repetir el selector padre en cada regla anidada.



dvh, vh: vh, representa la unidad de porcentaje del viewport de altura. 


wh, vw: vw representa el ancho del viewport.


rem: se basa en el tamaño de fuente del elemento raíz de la página web, Por ejemplo, si el tamaño de fuente del elemento raíz es 16px, entonces 1rem sería igual a 16px.


em: se basa en el tamaño de fuente del elemento padre más cercano que tenga un tamaño de fuente definido.  útil cuando deseas que el tamaño de fuente u otras propiedades se ajusten automáticamente en relación con el tamaño de fuente de su elemento padre, lo que puede ser beneficioso para diseños más flexibles



Las pseudo-clases y pseudo-elementos son selectores CSS que te permiten aplicar estilos a elementos en ciertos estados o partes específicas de un elemento. Aquí está la diferencia entre ellos:

Pseudo-clases: Son selectores que se utilizan para aplicar estilos a elementos en estados específicos que no están presentes en el DOM inicialmente. Por ejemplo, puedes usar pseudo-clases para seleccionar elementos en función de su estado de interacción, como :hover para estilizar un enlace cuando se pasa el cursor sobre él, o :focus para estilizar un elemento cuando está enfocado. Algunas pseudo-clases comunes incluyen :hover, :focus, :active, :first-child, :last-child, etc.
Pseudo-elementos: Son selectores que se utilizan para aplicar estilos a partes específicas de un elemento que no existen en el DOM. Los pseudo-elementos se representan con dos puntos dobles :: en lugar de uno. Por ejemplo, puedes usar pseudo-elementos para agregar contenido o estilizar partes específicas de un elemento, como ::before para agregar contenido antes de un elemento, o ::after para agregar contenido después de un elemento. Algunos pseudo-elementos comunes incluyen ::before, ::after, ::first-line, ::first-letter, etc.



APRENDI: 
NTH-CHILD(): nth child es para dar a los elementos posiciones unicas, al igual que cada elemento puede etener su css unico por aparte independientemente del resto del css

container hover se aplica cuando el mouse esta sobre un elemntos, el selector hijo indica que no 
  se le aplicara opacidad a los elementos los cuales no se esta hoveriando y el not hover selecciona 
  todos los elementos que no estan siendo hoveriando y se le aplica la opacidad