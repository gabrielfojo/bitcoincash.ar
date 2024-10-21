---
layout: doc
title: Bitcoin 101
---

# Introducción

Hoy el mercado de criptomonedas tienen un marketCap de trillones, lejos estamos de los primeros momentos donde Bitcoin era un proyecto de nerds amantes de la criptografía, hoy hablamos de un mercado enorme y es necesario entenderlo más allá de la abstracción que quizás nos brinden las billeteras virtuales. Algunos piensan que Bitcoin fué creado por la CIA, nada mas lejos de la verdad, la historia ha demostrado que el DeepState atacó la red en cuanto vió su potencial amenaza hacia el dinero FIAT, ese ataque fue dirigido a la parte más débil de la red, los desarrolladores.

## Satoshi Nakamoto

En el año 2008 una entidad bajo el nombre de Satoshi Nakamoto publica el Whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System" , en él Satoshi deja las bases para la creación de una moneda digital que no requiere intermediarios.

La red comenzó a funcionar el 3 de enero del 2009, en ese momento se comenzó el trabajo de minería, creando 50 nuevas monedas cada 10 minutos. La primera compra hecha con bitcoin fue un par de pizzas, se pagaron 10000 bitcoins por ellas.

En algún punto bitcoin comenzó a usarse para pagar bienes y servicios, el cartel de bitcoin se acepta aquí se empezaba a conocer. Bitcoin funcionaba bien como reemplazo del dinero FIAT.

## Consenso

En [Home](/index.md) explicamos el funcionamiento básico de la red, pero no hablamos del consenso. La red tiene varias patas que hacen su gobernanza; los desarrolladores son una pata, el código está publicado y cualquiera podría crear una versión del mismo y hacer cambios en él. Por otro lado están los nodos que son los que corren dicho software y tienen una copia de la Blockchain, ellos eligen qué versión desean usar del software, mientras éste no incumpla determinadas reglas los nodos pueden correr la versión que gusten.

Los mineros son otra pata, al principio los nodos hacían el trabajo de minería, hoy ya esta parte requiere un alto nivel de poder de cómputo y es llevado a cabo por pools de minería corriendo hardware específico para tal tarea. Ese poder de cómputo es el Hashrate y es el poder de voto en la red. Esto significa que si dos versiones de software siguen diferentes reglas de consenso, los mineros usarán su poder de cómputo y elegirán un bando llevando su poder de cómputo a la red elegida.

Por último, el usuario, dueño de las monedas es la pata final, ya que si el usuario no está de acuerdo con las nuevas reglas sólo debe vender sus monedas y partir, algo que sería dañino para la red.

Este tipo de consenso que posee Bitcoin se llama PoW (Proof of Work o Prueba de Trabajo).

## Guerra de los Bloques y el Fork del 2017

En el 2017 luego de varios años de intensos tironeos y ataques, algo que podrán leer en el libro "Hijacking Bitcoin" de Roger Ver, lectura altamente recomendada, la comunidad rompe el consenso y se divide en aquellos que desean un tamaño de bloque de 1MB, lo cual permite una transferencia máxima de 7 transacciones por segundo, y aquellos que querian un bloque mayor. Esto da como resultado dos redes Bitcoin, la red que mantuvo mayor Hashrate fué la conservó el ticker BTC y es lo que hoy todos conocen como Bitcoin. La otra red tomó el ticker BCH y es lo que hoy se conoce como Bitcoin Cash, comunidad que entendió que solo se podia escalar con bloques grandes, algo que hoy es más que evidente ya que BTC ya no funciona como moneda.

El lector debe entender, que el que tenía monedas en ese momento pasó a tener el doble, las mismas llaves criptográficas servían tanto para BTC como para BCH. Los usuarios podían conservar ambas, o pasarse de un bando al otro vendiendo sus monedas en un exchange.

Tanto BCH como BTC comparten una misma cadena que va desde el bloque Génesis, el primer bloque, hasta el Fork donde se separan.

Esto ilustra el mecanismo de defensa de Bitcoin y su Prueba de Trabajo y es que si alguna entidad decidiera atacar la moneda y crear nuevas reglas de consenso, requerirá convencer a la mayoría de los mineros, y aún así, si los usuarios no están conformes con los cambios nada evitaría que elijan la versión anterior y vendan sus monedas en la nueva red.

Otras criptomonedas usan algo llamado PoS(Proof of Stake) , Prueba de Participación, donde son los que tienen mayor cantidad de monedas los que votan, son como accionistas con poder de voto. Éste tipo de consenso es más ecológico ya que no usa la energía que usa la Prueba de Trabajo, el problema principal aquí es que en el caso de un Fork, los que mandan en una cadena seguirán mandando en la otra, no hay forma de sacarse de encima un atacante.

## Conclusión

Esperamos que el lector tenga una mejor idea de los diversos factores que afectan la seguridad de sus monedas, entendiendo estos principios básicos es fundamental para entender dónde estamos parados. Un usuario puede ir aún más lejos y correr su propio nodo, algo que no es necesario pero muchos lo hacen como para colaborar con la red, como ventaja, uno puede configurar las billeteras propias para que usen nuestro nodo lo cual es mucho más seguro. Algunos usuarios aún corren software de minería, es posible también pero en este caso se debe recurrir a hardware específico.

<style module>
</style>
