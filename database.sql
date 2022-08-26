CREATE TABLE primehuissier;
CREATE TABLE primehuissier(
    id SERIAL PRIMARY KEY ,
    libelle TEXT NOT NULL ,
    montant DOUBLE PRECISION ,
    dessociable TEXT NOT NULL ,
    impot TEXT NOT NULL ,
    mensuel TEXT NOT NULL
);
CREATE TABLE parametreglobale
(
    timbrefiscale DOUBLE PRECISION,
    tauxtva DOUBLE PRECISION,
)

CREATE TABLE timbre
(
    id SERIAL PRIMARY KEY,
    libelle TEXT,
    montant DOUBLE PRECISION,
)
CREATE TABLE transport
(
    montanttransportparjours int,
)
CREATE TABLE recettedufinance
(id SERIAL PRIMARY KEY,
    libelle text ,
    montant DOUBLE PRECISION,
    
)
CREATE TABLE photocopie
(
    prixphotocopie DOUBLE PRECISION,
)

CREATE TABLE tachetable(
    id_tache SERIAL PRIMARY KEY,
    tache TEXT NOT NULL ,
    date_critique TEXT,
    date_rappel TEXT,
    resolu TEXT,
    personne_chargee TEXT,
    greffier TEXT,
    course TEXT,
    lieux TEXT,
    services TEXT,
    date_audience TEXT,
    date_decheance TEXT,
    id_doss INT ,
    FOREIGN KEY(id_doss) 
	  REFERENCES recherchedossier(id_dossier)
);

CREATE TABLE adversaire(
    id_adversaire SERIAL PRIMARY KEY,
    nom TEXT NOT NULL,
    registre TEXT,
    adresse TEXT,
    adressedesigne TEXT,
    avocat TEXT,
    adresseavocat TEXT,
    id_doss INT ,
    FOREIGN KEY(id_doss) 
	  REFERENCES recherchedossier(id_dossier)
);

CREATE TABLE collaboratortable (id SERIAL NOT NULL PRIMARY KEY , 
username TEXT,
cin VARCHAR(10) UNIQUE,
ville TEXT,
 rue TEXT,
  num INTEGER,
  codepostal INTEGER ,
   activite TEXT,
   tel VARCHAR(20),
   fax VARCHAR(20),
   email TEXT, 
   matricule VARCHAR(50),
    methodepaiment TEXT,
     MONTANT INTEGER,
     nbredossier INTEGER);
CREATE TABLE recherchedossier
(
    id_dossier integer NOT NULL PRIMARY KEY,
    num_affaire BIGINT,
    emplacement TEXT ,
    client TEXT ,
    tel BIGINT,
    mission TEXT ,
    adversaire TEXT ,
    reste BIGINT,
    code_dossier TEXT ,
    annee TEXT ,
    lieu TEXT ,
    service TEXT ,
    observation TEXT ,
    date_creation TEXT ,
    type_dossier TEXT ,
    CONSTRAINT recherchedossier_pkey PRIMARY KEY (id_dossier)
);

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.recherchedossier
    OWNER to postgres;