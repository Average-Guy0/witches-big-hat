# The Witch's Big Hat
## ¿Qué es?: The Witch's Big Hat es un 
E-commerce de fantasía basado en ítems mágicos del TRPG Dungeons and Dragons (específicamente su quinta edición). Contiene detalles sobre varios objetos mágicos con su respectivo precio en piezas de oro (moneda en el juego). Funciona a través de una base de datos de la cual traemos las descripciones, link a imágenes etc. está construida con React.


# Documentacion

## librería
React-router-dom (para la navegación web)

## Base de datos 
Firebase (FireStore para la base de datos, es una base de datos noSQL. Proveída por Google).

## Fuentes
Tangerine y Macondo (de google fonts)


## Composicion
##### Como esta construida en React, tiene una estructura definida.
- un archivo index.html donde los links a las fuentes 
- un archivo index.js donde instalamos Firebase e importa el archivo App 
- el archivo App.jsx que posee todas las rutas para la navegación y varios componentes como también el contexto que se aplica por el componente Context_Provider 
- una carpeta llamada **components** que tiene varias *sub* carpetas con archivos .jsx y .css para la estructura y el estilado 
- una carpeta llamada context que posee el contexto del carro (llamado en el código como Hat)

### Tipos de Notación

personalmente, odio el camel case, así que lo evito cuando puedo, hay excepciones como el caso de métodos ya definido u hooks definidos por ejemplo **useEffect** o **useContext**. Así que mi código tiene a usar varias convenciones. La más llamativa es screaming snake case, desde que me entere de que React la recomendaba al igual que pascal case me cambien inmediatamente y estoy bastante feliz. Pero para que quede claro:
 - camelCase para cosas ya definidas(useEffect) 
 -  kebab-case para las clases en css (grid-container) 
 -  snake_case para nombrar las carpetas y archivos css (cart_item), los archivos .jsx de los componentes los escribo como combinación de pascalcase y snake case (Nav_Bar) 
 -  y SREAMING_SNAKE_CASE para componentes (<ITEM_DETAIL/>)
 
 
![SCREAMING_SNAKE_CASE LOGO](https://fission.codes/assets/images/ZWsUMq-8C096C0B-02E9-4D21-9549-C51BAF112341.png "long live the snake!!!")


# Notas adicionales

- en el código yo menciono Hat como el Carrito, la razón es porque me parece más temáticamente apropiado para una tienda de brujas. Así que cuando veas un array llamado Hat, significa que es el carrito. también lo hago en la página ir al carrito por ir al sombrero. 
-  también hice la página en inglés, por dos razones: 
 1. me siento más cómodo hablando en inglés 
 2. la información que traigo de los items no está en español, y para no traducirla la deje en inglés