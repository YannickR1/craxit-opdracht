Requirements:

Allemaal op een public gitrepo (bezorg me url asap uiteraard 😊), frontend en backend mogen in 1 repo.;
(Frontend) Gebruik Angular (Niet AngularJS uiteraard);
(Backend) Gebruik .NET 6 Web Api project type;
Gebruik EF … met SQLite;
Gebruik automapper om de EF entities naar DTO s te mappen;
Gebruik JWT security (Backend en Frontend);
Doe testing (unit testing, integration testing, wat dan ook), dit is nice to have.;
Maak een build en deploy pipeline, ook nice to have.
 

Description:

Maak een applicatie waar mensen kunnen registereren en op inloggen.
Zodra ze ingelogged zijn krijgen ze een lijst van hmm laten we zeggen huizen (moeten geen images bij gewoon droge lijst van huizen is goed), 
en kunnen ze er 1 selecteren voor details of te  editeren alsook een nieuw huis te maken of te deleten. (CRUD dus)
Een huis heeft volgende kenmerken: Location (gewoon de stadsnaam bv), Prize(in euro), Rooms, Image

Eigen comments:
geen gebruik gemaakt van automapper,
Houses CRUD nog zonder authorize, JWT is wel aanwezig
Nog geen image bij huis (kenmerken: image)
geen van beide nice to haves
