# Web Design @cmda-minor-web 1819
## Onderzoek 🔍
### User Scenario
#### Wie? 👩
Larissa: Larissa is blind. Bij het bezoeken van websites op internet maakt ze gebruik van een brailleregel, en van een screenreader.
#### Wat? (opdracht) 
Larissa wil op een website snel en effectief kunnen navigeren. Op dit moment doet ze dit met behulp van een screenreader 
en een brailleregel. Door bepaalde sneltoetsen te gebruiken kan ze bijvoorbeeld: snel door alle linkjes op de pagina tabben.
Ook kan ze elementen opvragen die op de pagina te vinden zijn. Zoals alle titels of alle alt-teksten.

__Hoe__ ontwerp ik een website waardoor Larissa makkelijk, snel, effectief en ook 'pleasurable' kan navigeren.

#### (mogelijke) Oplossingen
* __Auditief navigeren__ Alle elementen op de pagina spelen een geluid af wanneer de muis hier overheen hovert. Dit geluid 
is kenmerkend voor het element, zodat Larissa herkent welke elementen het zijn. Wanneer ze een **trackpad** gebruikt 
kan ze tactiel voelen waar de randen van de viewport zijn, doordat de grote van de viewport wordt vertaald naar het trackpad.
Dus rechtsboven op het trackpad is ook rechtsboven op de website, linksonder is ook linksonder op de website enz.

* __'Dedicated' navigatie pagina__ Op dit moment 'tabbed' -> <kbd>TAB</kbd> Larrissa door de websites heen om te navigeren.
Dit werkt best goed, totdat je op een website komt zoals [bol.com](https://www.bol.com/nl/), waar je producten kunt vinden door 
het menu te gebruiken. Dit menu is immens groot, wat voor mensen die kunnen zien al een kleine uitdaging kan vormen, voor mensen 
die blind zijn is dit een nog grotere uitdaging. Larissa gaf aan dat ze soms niet meer weet waar ze is op websites. Daarom 
is het handig als er een pagina is waar je met tab als een soort boomstructuur door het menu kunt tabben. Deze pagina is een
extra laag bovenop de huidige website. Deze is alleen toegankelijk via een 'skip-link'. Deze link kun je alleen bezoeken 
wanneer je de <kbd>TAB</kbd> toets gebruikt. Mensen die niet blind zijn zullen hier dus niks van merken.

![Ideeën](public/img/ideeën%20.jpeg)

### Value Proposition Canvas
![VPC](public/img/Value-Proposition-Canvas.png)
    
#### User
* Tasks
    * Larissa gebruikt het menu om door de website te navigeren
    * Larissa zoekt naar informatie over specifieke producten/onderwerpen op een detailpagina van de website.
    
* Gains
    * Larissa kan met een 'goede' navigatie informatie vinden op websites.
    * Larissa weet waar ze is op de website.
    * Ze kan terug en vooruit op de pagina (navigeren).
    * Met haar screen-reader weet Larissa wat er op de website te vinden is.

* Pains
    * Larissa weet vaak niet waar ze is op een website.
    * Larissa kan websites soms niet gebruiken, omdat de focus op sommige elementen disabled is. 
    * Sommige ontworpen interacties die vanzelfsprekend zijn voor niet blinde mensen. Zijn voor Larissa onmoglijk om te 
    gebruiken. Zoals de 'regen-slider' van [buienradar](https://www.buienradar.nl/).
    
#### Product
* Products & Services
    * Dedicated navigatie pagina
    * Auditief navigeren

* Gain creators
    * Larissa kan snel vinden wat ze zoekt.
    * Effectief zoeken, dus ze kan doelgericht zonder omwegen vinden wat ze zoekt.
    * Larissa weet snel waar ze is op de website.
    * Larissa weet sneller welke elementen er op de website zijn en waar ze zich bevinen.
    
* Pain killers
    * Breadcrumbs zorgen ervoor dat ze ten alle tijden weet waar ze is op de website.
    * De HTML is semantisch, waardoor de screen-reader de website juist interpreteert.             
    * De interactie op de website werkt intuïtief voor Larissa. 








