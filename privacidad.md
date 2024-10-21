---
layout: doc
title: Privacidad
---

# Privacidad

Ok, ya instalaste la billetera y recibiste unos sats, ya tenemos el conocimiento básico del tema, vamos a profundizar un poco más.

Como ya hemos visto, las transacciones son guardadas en la Blockchain, la base de datos que miles de nodos comparten alrededor del mundo, son los que hacen posible que no se requiera un intermediario, son los guardianes de la moneda. Cada bloque nuevo lleva un link al bloque anterior, la información en los bloques está firmada criptográficamente, cualquier cambio en ellos los invalidaria y serían rechazados por los otros nodos.

Lo que debemos entender ahora es que esta Blockchain es pública, cualquiera puede inspeccionarla y seguir el dinero de wallet a wallet. Veamos cómo podemos protegernos.

## Autocustodia

Las instrucciones de este sitio fueron orientadas a que el usuario instale una billetera autocustodiada, a diferencia de las billeteras custodia como Binance, Lemon, Fiwind, etc éstas últimas requieren KYC (Know Your Customer), lo que significa que requieren identificar al usuario, generalmente con información biométrica.

Cuando usamos wallets autocustodiadas, nadie sabe quienes somos, las monedas van de una dirección criptográfica a otra, es posible ver el importe y destino, pero en primera instancia no se sabe quienes son los dueños de esas direcciones. Ahora, si nosotros usamos exchanges donde nos identificamos para cambiar una moneda por otra, esa dirección ya queda pegada a nuestra identidad.

En líneas generales quizás no nos importe que la wallet que usamos para pagar algun bien quede pegada a nuestra identidad, pero es importante entender el concepto dado que quizás desde esta wallet enviamos a una donde tenemos todos nuestros ahorros, si alguien decide tirar del cordón podrá acceder a nuestro balance de ahorros.
Por suerte BitconCash tiene muchas opciones para protegernos.

## Direcciones multiples de BCH

En la billetera de Bitcoin.com **preferencias > Ajustes de privacidad > Reutilizar** dirección del depósito debería estar destildado, esto hace que se generen nuevas direcciones en lugar de usar siempre la misma. Las direcciones no caducan, significa que uno puede darle una dirección a alguien y esta persona podrá enviar siempre dinero a la misma. Esta característica permite que una billetera reciba pagos en infinitas direcciones lo cual hace muy complejo determinar quienes somos.

## CashFushion

Esta opción es más avanzada, solo se incluye simplemente por referencia. Cashfushion en un protocolo de mezclado de monedas, cuando lo activamos nuestras monedas son distribuidas entre muchas otras wallets y luego retornan a nosotros, lo cual hace prácticamente imposible que identifiquen que son nuestras.

[CashFusion Web](https://cashfusion.org/)

## Otras criptos

El lector debe saber que hay otras criptos además de BitcoinCash que compiten por el puesto de ser una moneda libre, algunas inclusive incorporan encriptación en su Blockchain haciendo imposible el rastreo de las mismas. Monero(XMR) es un ejemplo. Nuestra postura es que BCH es mucho más rápida, económica y que para la mayoría de los casos de uso, las direcciones múltiples son suficientes para protegernos. No obstante, si el intercambio se hace mediante exchanges que no requieren de nuestros datos, sería perfectamente factible swapear coins entre BCH y XMR según el caso de uso que tengamos.

<style module>





</style>
