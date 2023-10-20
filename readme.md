## ESERCIZIO

 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

 **Prima di partire a scrivere codice poniamoci qualche domanda:**
 Come faccio a sapere se un numero è divisibile senza resto per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?

**Consigli del giorno:**

 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

 **BONUS 1:**

 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**

 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


 #### SOLUZIONE

 1. Imposto il ciclo for da 1 a 100

 2. Per ogni iterazione:
    
            SE il numero % 3 uguale a 0
                stampo Fizz
            ALTRIMENTI SE il numero % 5 uguale a 0 
                stampo Buzz
            ALTRIMENTI SE il numero % 3 uguale a 0 E il numero % 5 uguale 0
                stampo FizzBuzz
            ALTRIMENTI 
                stampo il numero

3. Fine ciclo