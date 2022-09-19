--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cursus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cursus (
    cur_code character varying(10) NOT NULL,
    cur_nom character varying(50) NOT NULL
);


ALTER TABLE public.cursus OWNER TO postgres;

--
-- Name: departement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departement (
    dep_code character varying(6) NOT NULL,
    dep_nom character varying(255) NOT NULL,
    dep_code_reg character varying(3) NOT NULL
);


ALTER TABLE public.departement OWNER TO postgres;

--
-- Name: diplome; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diplome (
    dip_code character varying(10) NOT NULL,
    dip_nom character varying(50) NOT NULL
);


ALTER TABLE public.diplome OWNER TO postgres;

--
-- Name: etudiant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.etudiant (
    etud_nom character varying(255) NOT NULL,
    etud_prenom character varying(255) NOT NULL,
    etud_date_naiss date NOT NULL,
    etud_lieu_naiss character varying(255) NOT NULL,
    etud_nationalite character varying(255) NOT NULL,
    etud_nom_pere character varying(255) NOT NULL,
    etud_profession_pere character varying(255) NOT NULL,
    etud_nom_mere character varying(255),
    etud_profession_mere character varying(255),
    etud_adresse_parent character varying(255) NOT NULL,
    etud_email character varying(128) NOT NULL,
    etud_telephone integer NOT NULL,
    etud_quartier character varying(255) NOT NULL,
    etud_handicape boolean NOT NULL,
    etud_parent_h boolean NOT NULL,
    etud_code_dep character varying NOT NULL,
    etud_code_fil character varying(50) NOT NULL,
    etud_code_cur character varying(50) NOT NULL,
    etud_code_ser character varying(50) NOT NULL,
    etud_code_dip character varying(50) NOT NULL,
    etud_num_insc bigint NOT NULL,
    etud_id bigint NOT NULL,
    etud_lieu_dip character varying(50) NOT NULL,
    etud_moyenne_dip integer NOT NULL,
    etud_mention_dip character varying(50) NOT NULL,
    etud_annee_dip integer NOT NULL,
    etud_niv character varying(4) NOT NULL
);


ALTER TABLE public.etudiant OWNER TO postgres;

--
-- Name: etudiant_etud_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.etudiant ALTER COLUMN etud_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.etudiant_etud_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: filiere; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.filiere (
    fil_code character varying(50) NOT NULL,
    fil_nom character varying(100) NOT NULL,
    fil_code_cur character varying(20) NOT NULL
);


ALTER TABLE public.filiere OWNER TO postgres;

--
-- Name: region; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.region (
    reg_code character varying(3) NOT NULL,
    reg_nom character varying(255)
);


ALTER TABLE public.region OWNER TO postgres;

--
-- Name: serie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.serie (
    ser_code character varying(20) NOT NULL,
    ser_nom character varying(50) NOT NULL,
    ser_code_dip character varying(10) NOT NULL
);


ALTER TABLE public.serie OWNER TO postgres;

--
-- Data for Name: cursus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cursus (cur_code, cur_nom) FROM stdin;
ING	Ingenieur
SING	Science de l'Ingenieur
MAPRO	Master Professionnel
M2R	Master Recherche
\.


--
-- Data for Name: departement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departement (dep_code, dep_nom, dep_code_reg) FROM stdin;
DJRM	Djerem	AD
FARD	Faro-et-Deo	AD
MYBN	Mayo-Banyo	AD
MBER	Mbere	AD
VINA	Vina	AD
HTSN	Haute-Sanaga	CE
LEKI	Lekie	CE
MBIN	Mbam-et-Inoubou	CE
MBKM	Mbam-et-Kim	CE
MFAF	Mefou-et-Afamba	CE
MFAK	Mefou-et-Akono	CE
MFND	Mfoundi	CE
NYKL	Nyong-et-Kelle	CE
NYMF	Nyong-et-Mfoumou	CE
NYSO	Nyong-et-Soo	CE
BBNG	Boumba-et-Ngoko	ES
HANY	Haut-Nyong	ES
KADE	Kadey	ES
LMDJ	Lom-et-Djerem	ES
DMRE	Diamare	EN
LOCH	Logone-et-Chari	EN
MYDN	Mayo-Danay	EN
MYKN	Mayo-Kani	EN
MASV	Mayo-Sava	EN
MYTN	Mayo-Tsanaga	EN
MOUN	Moungo	LT
NKAM	Nkam	LT
SNMR	Sanaga-Maritime	LT
WOUR	Wouri	LT
BENO	Benoue	NO
FARO	Faro	NO
MYLT	Mayo-Louti	NO
MYRY	Mayo-Rey	NO
BOYO	Boyo	NW
BUI	Bui	NW
DGMT	Donga-Mantung	NW
MNCH	Menchum	NW
MEZM	Mezam	NW
MOMO	Momo	NW
NGKT	Ngo-Ketunjia	NW
BTOS	Bamboutos	OU
HNKM	Haut-Nkam	OU
HAPT	Hauts-Plateaux	OU
KNKH	Koung-Khi	OU
MENO	Menoua	OU
MIFI	Mifi	OU
NDE	Nde	OU
NOUN	Noun	OU
DJLB	Dja-et-Lobo	SU
MVLA	Mvila	SU
OCEA	Ocean	SU
VLNT	Vallee-du-Ntem	SU
KPMG	Koupe-Manengouba	SW
LEBL	Lebialem	SW
MANY	Manyu	SW
MEME	Meme	SW
NDIA	Ndian	SW
FAKO	Fako	SW
ET	Autre	ET
\.


--
-- Data for Name: diplome; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.diplome (dip_code, dip_nom) FROM stdin;
bacc	Baccalauréat
deug	DEUG
dut	DUT
gce	GCE Advanced Level
LICSCI	Licence Scientifique
LICTECH	Licence de Technologie
bt	Brevet de Technicien
LICPRO	Licence Professionnelle
bts	Brevet de Technicien Supérieur
gceo	GCE Ordinary Level
ET	Autre
\.


--
-- Data for Name: etudiant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.etudiant (etud_nom, etud_prenom, etud_date_naiss, etud_lieu_naiss, etud_nationalite, etud_nom_pere, etud_profession_pere, etud_nom_mere, etud_profession_mere, etud_adresse_parent, etud_email, etud_telephone, etud_quartier, etud_handicape, etud_parent_h, etud_code_dep, etud_code_fil, etud_code_cur, etud_code_ser, etud_code_dip, etud_num_insc, etud_id, etud_lieu_dip, etud_moyenne_dip, etud_mention_dip, etud_annee_dip, etud_niv) FROM stdin;
kengne	arnold	1998-02-18	bouda	cameroun	tamo	mecano	tata	menagere	douala	kengne@gmail.com	693544533	pk15	f	f	MIFI	GM	ING	c	bacc	999999	1	office du baccalaureat	15	BIEN	2017	L3
kengne	arnold	1998-02-18	bouda	cameroun	tamo	mecano			douala	kengne@gmail.com	693544533	pk15	f	f	MIFI	GM	ING	c	bacc	1000000	4	office du baccalaureat	15	BIEN	2017	L3
kengne	arnold	1998-02-18	bouda	cameroun	tamo	mecano			douala	kengne@gmail.com	693544533	pk15	f	f	MIFI	GM	ING	c	bacc	5267323	6	office du baccalaureat	15	BIEN	2017	L3
test	test123	2008-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GE	ING	c	bacc	8682163	11	Office du Baccalaureat	14	Bien	2005	L1
test2	test123	2008-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GE	ING	c	bacc	3334276	12	Office du Baccalaureat	14	Bien	2005	L1
test	test123	2008-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	4402136	13	Office du Baccalaureat	10	Passable	2013	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	DEUGM	deug	9134307	14	Office du Baccalaureat	13	Assez Bien	2012	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	5286737	15	Office du Baccalaureat	12	Passable	2013	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	7797558	16	Office du Baccalaureat	15	Passable	2015	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	4370950	17	Office du Baccalaureat	12	Assez Bien	2013	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	2055152	18	Office du Baccalaureat	12	Assez Bien	2000	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	9232136	19	Office du Baccalaureat	12	Passable	2000	L1
test3	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test@test.com	692562630	yassa	t	f	FARD	GM	ING	c	bacc	4702015	20	Office du Baccalaureat	15	Bien	2015	L1
test4	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test4@test.com	692562630	yassa	t	f	FARD	MM	SING	DEUGM	deug	6890342	21	Office du Baccalaureat	12	Assez Bien	2012	L1
test5	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562630	yassa	t	f	FARD	GESI	ING	c	bacc	5852857	22	Office du Baccalaureat	12	Passable	2020	L1
test5	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562630	yassa	t	f	FARD	GP	ING	c	bacc	2440769	23	Office du Baccalaureat	10	Passable	2020	L1
test5	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562630	yassa	t	f	FARD	GC	ING	c	bacc	3783860	24	OBC	10	Passable	2012	L3
test5	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562630	yassa	t	f	FARD	GM	ING	c	bacc	7628591	25	OBC	12	Passable	2013	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	3582172	26	OBC	15	Bien	2013	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	2189159	27	OBC	12	Assez Bien	2015	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	7734060	28	OBC	15	Bien	2014	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	1645543	29	OBC	14	Bien	2014	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	5346233	30	OBC	14	Bien	2014	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	8735724	31	OBC	14	Bien	2014	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GM	ING	c	bacc	1548384	32	MINESUP	12	Assez Bien	2013	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	7410412	33	OBC	12	Assez Bien	2012	L3
test6	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	2672962	34	OBC	11	Passable	2013	L3
test7	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GESI	ING	c	bacc	6805826	35	OBC	12	Assez Bien	2015	L3
test9	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GP	ING	c	bacc	7475064	36	OBC	12	Assez Bien	2014	L3
test10	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	3581767	37	OBC	12	Assez Bien	2012	L3
test10	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	4330243	38	MINESUP	12	Assez Bien	2012	L3
test10	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	3880815	39	OBC	12	Passable	2012	L3
test10	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	c	bacc	3100205	40	OBC	12	Assez Bien	2012	L3
test10	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GM	ING	c	bacc	2745006	41	OBC	12	Assez Bien	2012	L3
test10	test1234	2009-12-04	garoua kayley	Cameroun	cours	testeur	course	courseurse	djerem	test5@test.com	692562640	yassa	t	f	FARD	GC	ING	d	bacc	7172159	42	OBC	11	Passable	2013	L3
kameohjfldlskl dddfdflkmflawdf	jules cesar harry	2009-12-29	garoua extrem kayley	Cameroun	tahjkjk makaka jules oppereasdcdf 	professeur jeasd sdasa	jeame	avocate	Logbessou	kamejeam2035jk@gmail.com	655252613	ropoulehgr makepe	f	f	DGMT	QHSEI	ING	btsMIP	bts	3120725	43	Autre	11	Passable	2011	L1
mimbeu 	yves	1990-09-18	yagoua	Cameroun	abega abega jean pierre	avocat	jean marie	avocate	est 	yves@mimyves.com	652623211	logpom	f	f	WOUR	GC	ING	c	bacc	1008489	44	OBC	15	Bien	1998	L1
\.


--
-- Data for Name: filiere; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.filiere (fil_code, fil_nom, fil_code_cur) FROM stdin;
GC	Génie Civil	ING
GM	Génie Mécanique	ING
GESI	Génie Electriques et Systèmes Intelligents	ING
GP	Génie des Procédés	ING
GIT	Génie Informatique et Télécommunications	ING
GE	Génie Energétique 	ING
GA	Génie Automobile 	ING
QHSEI	Génie de la Qualité, Hygiène, Sécurité et Environnement  Industrielle 	ING
GMP	Génie Maritime et Portuaire	ING
METEO	Météorologie	ING
EEAT	Electronique, Electrotechnique,Automatisme et Télécommunication	SING
CIBI	Chimie Industriel et Bioprocédés Industriels	SING
MM	Mécanique et Matériaux	SING
ENER	Energie	SING
GEE	Géophysique Eau et Environnement	SING
SDIA	Sciences des Données et Intelligence Artificielle	SING
M2PDBSA1	Biotechnologie et Sécurité Alimentaire(BSA)	MAPRO
M2PDCMMI1	CONSTRUCTION METALLIQUE ET MECANIQUE INDUSTRIELLE (C2MI)	MAPRO
M2PDGI1	Génie Informatique (GI)	MAPRO
M2PDGIGC1	GEOTECHNIQUE ET INFRASTRUCTURES DE GENIE CIVIL(GIGC)	MAPRO
M2PDGL1	GENIE LOGICIEL (GL)	MAPRO
M2PDHDD1	HYDROCARBURE ET DEVELOPPEMENT DURABLE	MAPRO
M2PDIEA1	Ingénierie Electrique et Automatisme (IEA)	MAPRO
M2PDITE1	INGENIERIE THERMIQUE ET ENERGIE (ITE)	MAPRO
M2PDMGTE1	MECATRONIQUE ET GESTION TECHNIQUE DES EQUIPEMENTS  (MGTE)	MAPRO
TELSI	TELECOMMUNICATIONS ET SYSTEMES D'INFORMATION	M2R
METHS	METHODES	M2R
MECENE	ENERGETIQUE	M2R
GMMAT	GENIE MECANIQUE ET MATERIAUX	M2R
GCMAT	GENIE CIVIL ET MATERIAUX	M2R
EER	ENERGIE ELECTRIQUE ET ROBOTIQUE	M2R
BIOCA	BIOPROCEDES ET CHIMIE APPLIQUEE	M2R
\.


--
-- Data for Name: region; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.region (reg_code, reg_nom) FROM stdin;
AD	Adamaoua
NO	Nord
CE	Centre
SU	Sud
LT	Littoral
ES	Est
EN	Extreme Nord
NW	Nord Ouest
SW	Sud Ouest
OU	Ouest
ET	Autre
\.


--
-- Data for Name: serie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.serie (ser_code, ser_nom, ser_code_dip) FROM stdin;
c	C	bacc
d	D	bacc
e	E	bacc
s	S	bacc
TI	TI	bacc
LICTECHGC	Génie Civil	LICTECH
gcm	Mathematics	gce
gcc	Chemistry	gce
gcp	Physics	gce
gca	Applied Mathematics	gce
LICM	Mathématique	LICSCI
LICPH	Physique	LICSCI
LICCH	Chimie	LICSCI
LICIN	Informatique	LICSCI
LICMI	Maths Info	LICSCI
CI	CI	bacc
f3	F3	bacc
f4	F4	bacc
f5	F5	bacc
f7	F7	bacc
f1	F1	bacc
GT	GT	bt
MA	MA	bt
MAV	MAV	bt
MEM	MEM	bt
dutGM	Génie Mine	dut
dutGME	Génie Métallurgie	dut
dutGEII	Génie Electrique et Informatique Industrielle	dut
dutGB	Génie Biomédical	dut
dutGTE	Génie Thermique et Energie	dut
dutGMP	Génie Mécanique et Productique	dut
dutGI	Génie Informatique	dut
dutGIM	Génie Industriel et Maintenance	dut
LICTECHRT	Réseaux et télécommunication	LICTECH
LICPRORT	Réseaux et télécommunication	LICPRO
LICTECHGEII	Génie électrique et informatique industrielle	LICTECH
LICPROGEII	Génie électrique et informatique industrielle	LICPRO
LICTECHGTE	Génie thermique et énergie	LICTECH
LICPROGTE	Génie thermique et énergie	LICPRO
LICTECHGMP	Génie mécanique et productique	LICTECH
LICPROGMP	Génie mécanique et productique	LICPRO
LICTECHGL	Génie logiciel	LICTECH
LICPROGL	Génie logiciel	LICPRO
DEUGM	Mathématique	deug
DEUGC	Chimie	deug
DEUGPH	Physique	deug
DEUGIN	Informatique	deug
DEUGMI	Maths Info	deug
LICPROGCI	Génie Civil	LICPRO
btsCMETA	Construction Métallique	bts
btsGL	Génie Logiciel	bts
f2s	F2	bacc
btsRSI	Réseau et Sécurité	bts
btsMIP	Maintenance Industrielle et Productique	bts
dutRT	Réseau et Télécommunication	dut
btsIIA	Informatique Industriel et Automatisme	bts
btsRT	Réseaux et Télécommunication	bts
LICSCISCT	Science de la terre	LICSCI
LICTECHGIM	Génie Industriel et Maintenance	LICTECH
LICPROMET	Météorologie	LICPRO
btsMECA	Mécatronique	bts
btsINP	Ingenieurie Pétrolière	bts
LICTECHENV	Environnement	LICTECH
ET	Autre	ET
\.


--
-- Name: etudiant_etud_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.etudiant_etud_id_seq', 44, true);


--
-- Name: cursus cursus_code; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursus
    ADD CONSTRAINT cursus_code PRIMARY KEY (cur_code);


--
-- Name: departement dep_code; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departement
    ADD CONSTRAINT dep_code PRIMARY KEY (dep_code);


--
-- Name: diplome dip_code; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diplome
    ADD CONSTRAINT dip_code PRIMARY KEY (dip_code);


--
-- Name: etudiant etud_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_id PRIMARY KEY (etud_id);


--
-- Name: etudiant etud_num_insc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_num_insc UNIQUE (etud_num_insc);


--
-- Name: filiere fil_code; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filiere
    ADD CONSTRAINT fil_code PRIMARY KEY (fil_code);


--
-- Name: region region_code; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.region
    ADD CONSTRAINT region_code PRIMARY KEY (reg_code);


--
-- Name: serie ser_code; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serie
    ADD CONSTRAINT ser_code PRIMARY KEY (ser_code);


--
-- Name: departement dep_code_reg; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departement
    ADD CONSTRAINT dep_code_reg FOREIGN KEY (dep_code_reg) REFERENCES public.region(reg_code) NOT VALID;


--
-- Name: etudiant etud_code_cur; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_code_cur FOREIGN KEY (etud_code_cur) REFERENCES public.cursus(cur_code) NOT VALID;


--
-- Name: etudiant etud_code_dep; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_code_dep FOREIGN KEY (etud_code_dep) REFERENCES public.departement(dep_code) ON DELETE CASCADE NOT VALID;


--
-- Name: etudiant etud_code_dip; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_code_dip FOREIGN KEY (etud_code_dip) REFERENCES public.diplome(dip_code) NOT VALID;


--
-- Name: etudiant etud_code_fil; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_code_fil FOREIGN KEY (etud_code_fil) REFERENCES public.filiere(fil_code) ON DELETE CASCADE NOT VALID;


--
-- Name: etudiant etud_code_ser; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.etudiant
    ADD CONSTRAINT etud_code_ser FOREIGN KEY (etud_code_ser) REFERENCES public.serie(ser_code) NOT VALID;


--
-- Name: filiere fil_code_cursus; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filiere
    ADD CONSTRAINT fil_code_cursus FOREIGN KEY (fil_code_cur) REFERENCES public.cursus(cur_code) NOT VALID;


--
-- Name: serie ser_code_dip; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.serie
    ADD CONSTRAINT ser_code_dip FOREIGN KEY (ser_code_dip) REFERENCES public.diplome(dip_code) NOT VALID;


--
-- PostgreSQL database dump complete
--

