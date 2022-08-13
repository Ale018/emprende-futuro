create database emprende;
use emprende;
--LISTO
create table  TipoProyecto(
    id_TP int (11) not null auto_increment primary key,
    NomTipo_Proyecto varchar(200) not null
);
--LISTO
create table CategoriaParticipacion(
    id_CP int (11) not null auto_increment primary key,
    NomCategoria_Participa varchar(200) not null 
);

--LISTO
create table RegistroParticipacion(
    id_RP  int (11) not null auto_increment primary key,
    Nombre_Representante varchar(200) not null ,
    Correo_Representante varchar(500) not null,
    NoControl_Representante int(20) not null,
    id_TP int(11) not null, 
    Nombre_Proyecto varchar(200) not null,
    Descripcion_Proyecto varchar(500) not null,
    Nombre_Asesor varchar(200) not null,
    Resumen_Ejecutivo varchar(200) not null, 
    Referencia_Video varchar(600),
    Referencia_Evidencias varchar(600)
);

alter table RegistroParticipacion add CONSTRAINT FK_RP_TP FOREIGN key (id_TP) references TipoProyecto(id_TP);

--LISTO
create table Carrera(
    Id_Carrera int (11) not null auto_increment primary key,
    Nombre_Carrera varchar (50) not null
);

--LISTO
create table Grupo(
    Id_Grupo int (11) not null auto_increment primary key,
    Nombre_Grupo varchar (100) not null,
    Id_Carrera int (11) not null
);

alter table Grupo add CONSTRAINT FK_GP_CA FOREIGN key(Id_Carrera) references Carrera(Id_Carrera);

--LISTO
create table IntegrantesEquipo(
 
    id_RP int(11) not null,
    Nombre_Integrante varchar(200) not null,
    Correo_Integrante varchar (500) not null,
    NoControl_Integrante varchar(20) not null,
    Id_Carrera int(11) not null,
    Id_Grupo int(11) not null, 
    Campus_Integrante char(1) not null,
    Programa_Educativo char (1) not null
);

alter table IntegrantesEquipo add CONSTRAINT FK_RP_INTEGRANTES FOREIGN key (id_RP) references RegistroParticipacion(id_RP);
alter table IntegrantesEquipo add CONSTRAINT FK_CA_INTEGRANTES FOREIGN key (Id_Carrera) references Carrera(Id_Carrera);
alter table IntegrantesEquipo add CONSTRAINT FK_GR_INTEGRANTES FOREIGN key (Id_Grupo) references Grupo(Id_Grupo);

alter table IntegrantesEquipo add CONSTRAINT PK_FK_INTEGRANTES_EQUIPO primary key (id_RP,Id_Carrera,Id_Grupo);

--LISTO
create table TipoActividad(
    id_TipoActividad int (11) not null auto_increment primary key,
    Nombre_Actividad varchar (120) not null
);
--LISTO
create table RegistroActividadesEvento(
    Id_Actividad int (11) not null auto_increment primary key,
    Nombre_Actividad varchar(100) not null,
    Fecha_Actividad date not null,
    Hora_Inicio time not null,
    Hora_Termino time not null,
    Cantidad_Asistentes int(5),
    Lugar varchar(100) not null,
    id_TipoActividad int(11) not null, 
    Nombre_Responsable varchar(200) not null,
    Nombre_Participante varchar(200) not null
);

alter table RegistroActividadesEvento add CONSTRAINT FK_TA_EVENTO FOREIGN key(id_TipoActividad) references TipoActividad(id_TipoActividad);


create table RegistroAsistente(
    Id_RegistroAsistente int (11) not null auto_increment primary key,
    Nombre_Asistente varchar(120) not null,
    Ap_Paterno varchar(120) not null,
    Ap_Materno varchar(120) not null,
    Correo_Asistente  varchar(500) not null,
    Campus_Asistente char(1) not null,
    Programa_Educativo char(1) not null,
    Id_Grupo int(11) not null,
    Id_Carrera int(11) not null,
    Tel_Asistente varchar(50) not null,
    Codigo_Acceso varchar(50) not null UNIQUE,
    Comentarios_Evento varchar(300) not null 
 );

ALTER TABLE RegistroAsistente add CONSTRAINT FK_GRUPO_REGISTROASIS FOREIGN key (Id_Grupo) references Grupo(Id_Grupo);

ALTER TABLe RegistroAsistente add CONSTRAINT FK_CARRERA_REGISTROASIS FOREIGN key (Id_Carrera) references Carrera(Id_Carrera);

create table RegistroAsistenciaActividad (
    Id_RegistroAsistente int(11) not null,
    Id_Actividad int(11) not null,
    Estatus_Asistencia char (1) not null 
);

 ALTER table RegistroAsistenciaActividad add CONSTRAINT  FK_RE_RA FOREIGN key (Id_RegistroAsistente) references RegistroAsistente(Id_RegistroAsistente);
 alter table RegistroAsistenciaActividad add CONSTRAINT FK_IA_RA FOREIGN key (Id_Actividad) references RegistroActividadesEvento(Id_Actividad);

 alter table RegistroAsistenciaActividad add CONSTRAINT PK_FK_REGISTROASISTENCIA primary key (Id_RegistroAsistente,Id_Actividad);

create table EvaluacionEvento(
    Id_RegistroAsistente int(11) not null,
    Comentarios_Evento varchar(300) not null 
);
 ALTER table EvaluacionEvento add CONSTRAINT  FK_RE_RAE FOREIGN key (Id_RegistroAsistente) references RegistroAsistente(Id_RegistroAsistente);
 ---------------------------------------------------------------------------------------------
INSERT into TipoProyecto (NomTipo_Proyecto) values ("Social");
INSERT into TipoProyecto (NomTipo_Proyecto) values ("Emprendimiento Tecnologico");
INSERT into TipoProyecto (NomTipo_Proyecto) values ("Desarollo Sustentable");
INSERT into TipoProyecto (NomTipo_Proyecto) values ("Innovación en productos y servicios");
INSERT into TipoProyecto (NomTipo_Proyecto) values ("Social");

---------------------------------------------------------------------------------------------
INSERT into categoriaparticipacion (NomCategoria_Participa) values ("Cartel");
INSERT into categoriaparticipacion (NomCategoria_Participa) values ("Prototipo");
INSERT into categoriaparticipacion (NomCategoria_Participa) values ("Proyecto de Inversión");
INSERT into categoriaparticipacion (NomCategoria_Participa) values ("Proyecto de TI");
---------------------------------------------------------------------------------------------
INSERT into carrera (Nombre_Carrera) values("Administración Capital Humano");
INSERT into carrera (Nombre_Carrera) values("Desarrollo de Negocios Área Mercadotecnía");
INSERT into carrera (Nombre_Carrera) values("Contaduría");
INSERT into carrera (Nombre_Carrera) values("Turismo");
INSERT into carrera (Nombre_Carrera) values("Licenciatura en Gestión Capital Humano");
INSERT into carrera (Nombre_Carrera) values("Licenciatura en Innovación de Negocios y Mercadotecnía");
INSERT into carrera (Nombre_Carrera) values("Desarrollo de Software multiplataforma");
INSERT into carrera (Nombre_Carrera) values("Infraestructura de Redes Digitales");
INSERT into carrera (Nombre_Carrera) values("Entornos Virtuales y Negocios Digitales");
INSERT into carrera (Nombre_Carrera) values("Diseño Digital");
---------------------------------------------------------------------------------------------
INSERT into tipoactividad(Nombre_Actividad) VALUES("Conferencia");
INSERT into tipoactividad(Nombre_Actividad) VALUES("Foro");
INSERT into tipoactividad(Nombre_Actividad) VALUES("Taller");
INSERT into tipoactividad(Nombre_Actividad) VALUES("Panel");
---------------------------------------------------------------------------------------------
INSERT into RegistroParticipacion(Nombre_Representante,Correo_Representante,NoControl_Representante,id_TP,Nombre_Proyecto,Descripcion_Proyecto,Nombre_Asesor,Resumen_Ejecutivo) VALUES("Irene Hernández","sthelabarajas180499@gmail.com",1221100356,1,"Cartel Betty la Fea","Cartel que habla sobre el impacto de Betty la Fea","Apolinar Trejo Cuevas","Excelente cartel");
---------------------------------------------------------------------------------------------
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Administración",1);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Mercadotecnica",2);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Conta",3);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Turismo",4);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Lic. Gestión",5);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Lic. Negocios",6);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Sistemas",7);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Redes",8);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("GEVN0131",9);
INSERT into grupo (Nombre_Grupo,Id_Carrera) values ("Diseño",10);
---------------------------------------------------------------------------------------------
INSERT into IntegrantesEquipo (id_RP,Nombre_Integrante,Correo_Integrante,NoControl_Integrante,Id_Carrera,Id_Grupo,Campus_Integrante,Programa_Educativo) VALUES (1,"Irene Estela Hernández Barajas","sthelabarajas180499@gmail.com","1221100356",9,9,1,1);
INSERT into IntegrantesEquipo (id_RP,Nombre_Integrante,Correo_Integrante,NoControl_Integrante,Id_Carrera,Id_Grupo,Campus_Integrante,Programa_Educativo) VALUES (1,"Lizbeth Alejandra Morales Méndez","cb.morales.lizbeth.2e@gmail.com","1221100365",9,9,1,1);
INSERT into IntegrantesEquipo (id_RP,Nombre_Integrante,Correo_Integrante,NoControl_Integrante,Id_Carrera,Id_Grupo,Campus_Integrante,Programa_Educativo) VALUES (1,"Sara Fernanda Rangel Salazar","sara@gmail.com","1221100367",9,9,1,1);
INSERT into IntegrantesEquipo (id_RP,Nombre_Integrante,Correo_Integrante,NoControl_Integrante,Id_Carrera,Id_Grupo,Campus_Integrante,Programa_Educativo) VALUES (1,"Marlene Guadalupe Rodríguez Aguado","lene.marlene210@gmail.com","1221100970",9,9,1,1);
---------------------------------------------------------------------------------------------
INSERT into RegistroActividadesEvento (Nombre_Actividad,Fecha_Actividad,Hora_Inicio,Hora_Termino,Cantidad_Asistentes,Lugar,id_TipoActividad,Nombre_Responsable,Nombre_Participante) values ("Conferencia IoT","2022-08-16","16:00","17:00",50,"Auditorio",1,"Daniel Sustaita","Conferencista");
---------------------------------------------------------------------------------------------
INSERT into RegistroAsistente (Nombre_Asistente,Ap_Paterno,Ap_Materno,Correo_Asistente,Campus_Asistente,Programa_Educativo,Id_Grupo,Id_Carrera,Tel_Asistente,Codigo_Acceso) values ("Griselda Andrea","Barajas","Reyes","andyrey@gmail.com",1,1,9,9,"4181126777","QR");
