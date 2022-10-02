USE [master]
GO
/****** Object:  Database [WALLET]    Script Date: 02/10/2022 20:31:57 ******/
CREATE DATABASE [WALLET]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WALLET', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\WALLET.mdf' , SIZE = 4288KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'WALLET_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\WALLET_log.ldf' , SIZE = 1072KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [WALLET] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WALLET].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WALLET] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WALLET] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WALLET] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WALLET] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WALLET] SET ARITHABORT OFF 
GO
ALTER DATABASE [WALLET] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WALLET] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WALLET] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WALLET] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WALLET] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WALLET] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WALLET] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WALLET] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WALLET] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WALLET] SET  ENABLE_BROKER 
GO
ALTER DATABASE [WALLET] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WALLET] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WALLET] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WALLET] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WALLET] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WALLET] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WALLET] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WALLET] SET RECOVERY FULL 
GO
ALTER DATABASE [WALLET] SET  MULTI_USER 
GO
ALTER DATABASE [WALLET] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WALLET] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WALLET] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WALLET] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [WALLET] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'WALLET', N'ON'
GO
USE [WALLET]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 02/10/2022 20:31:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PERSONA]    Script Date: 02/10/2022 20:31:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PERSONA](
	[IdPersona] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NULL,
	[Apellido] [varchar](150) NULL,
	[Telefono] [varchar](50) NULL,
	[Cuil] [varchar](16) NULL,
	[Mail] [varchar](100) NULL,
	[Domicilio] [varchar](100) NULL,
	[Altura] [varchar](5) NULL,
	[FechaNac] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdPersona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[USUARIO]    Script Date: 02/10/2022 20:31:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[USUARIO](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[NombreUser] [varchar](100) NULL,
	[Contrasenia] [varchar](100) NULL,
	[IdPersona] [int] NULL,
	[BHabilitado] [int] NULL,
	[IsAdmin] [bit] NULL,
	[FechaAlta] [date] NULL,
	[FechaBaja] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [Model], [ProductVersion]) VALUES (N'202210021959187_InitialCreate', N'back_wallet.Data.back_walletContext', 0x1F8B0800000000000400CD59DB6EE336107D2FD07F10F4D402592B9797369077E13849117473C12AD9D78296C60EBB14A98A54D6FEB63EF493FA0B1DEA4A49962DD97152E4251E9187C3E19CE1D1E8DFBFFF713F2D4366BD402CA9E063FB64746C5BC07D1150BE18DB899A7FF8C5FEF4F1C71FDCAB205C5A5F8B71677A1CCEE4726C3F2B159D3B8EF49F21247214523F1652CCD5C817A14302E19C1E1FFFEA9C9C38801036625996FB25E18A8690FEC09F53C17D885442D8AD0880C9DC8E4FBC14D5BA2321C888F830B667C4FFF6C777C218A8D12551C4B6268C12F4C30336B72DC2B95044A197E74F123C150BBEF0223410F6B88A00C7CD0993907B7F5E0DEFBB91E353BD11A79A5840F98954221C0878729647C6694EDF29BE7619398CDD15C658ADF4AED3F88DED073C3EC13162CDB5CEA72CD6E3EAD1CDCE6294CF3AB28C6747652A60C6E8BF236B9A3095C430E690A898B023EB219931EAFF0EAB47F10DF898278C99EEA183F8AC6640D3432C2288D5EA0BCC73A76F82D26DA73EDD69CE2F67B7A766BBBBE1EAECD4B6EED015326350E68211094F89187E030E3151103C10A520E61A0AD268B69C682C7927C2590CC57A987EC823DBBA25CBCFC017EA796CE3BFB6754D97101496DC87274E91763849C5096C5B661201633410075FE81118CC053FFC42D384B2832F724BDE60914B8114A58C1E3E6613CD3872F065AEC17F2677C42F16C2AA0B8F58BDD7106933D0C53399616014A912B78B912690EB54956C637D7B92098975DC07D5B77CD6FBD5B7D2EDE1F5AD9CFAB6F50D6FD6F8F01541700CB4044E0F9FE2377212849417EB5C08C180F0C109DE75E1F4E0177299EC4DB014E982FC39146933C3F441108A1993AF62F0443F82A55AC3384C919C74323F82BAE719B407AAAE4DA46D55AE649A6ED475FF37217232AC83584BB162D7E5FE2AD9E964BAB3D0A74E8740756F491461461A8235B7585EA656A71FBCE1422ECC301C5FAED173A5B7E54AC868B280C653CD9F00AE692C9556C933A2CF7C1A84AD616B4EB323CCC5828D036B96B82AF8C504FD7F2B7552F15E9E6D03A40AE435EE2DC4DA946E134A5F2A31DB9A99BE351046E26E724E054B42BE455F6EC22A649E0954D8FAA3542ACEC4A9ACFD912A99662255D6FE48990E3351324B7F844C64990899A53F82A1A04C18C33C20C6B946AA4538B7F547A92490895359FB23D5349009567BD0C6739D06219AB4735ABC6BA889268F7BB1BCACA97BB1BC28BFC359DE39B39BE565ADAFB3BC43656DC232C54E9BE9997D00B34C3D532398F9A03F5EA9596AFB2C8C03705EB12E1A52A64594CC3C102B13332DACCCFCC62C69E985E69072F5523734F4819BDFD5DBBB5CADCB3B1B625B18A4171AE88BDB5B4905614630EF2F366514F75B0DB8259CCE41AAECEDC43E3D3E396DB4CAFE3F6D2B47CA80F5EB5DBD730789EA106F7D871A28DBEB4D23FE42624CF1F8A7902C7F36B176690CED05D66CFEEC05663678F602329B387B01B51A35FB45BED68CD90BAAD9700930CDD42B355CD2047EDD76CB3B373D0E4849B3CFB15FF2B77B197BE135FA1533BAED50FB96B61D12D5EC5CEC9CA9ADCE454FA4619D8BF62B71AFA6C4A69E44762FA3BF339D90999F552FA35FC76253C3621D7ED5E8D8B19DD19621AE637E92732F41D24505A13FD071F0F5FD5E8116636EF85C14A7895B333D2A86342B386045C21398C48ACE89AFF0B10F52A6ADBDAF842538E42A9C4170C3EF1315256A22258433566B4EBACEE6F5D39E4DDD67F73ED2BFE46B6C01DDA43A45EFF905DE6B41E9F7F59A14ED80D0C998572CF4CA53BA722D5625D29DE03D81F2F05D42045CD7BB4708238660F29E7BE40576F10D0BDF6758107F55A8C96E90ED07510FBB7B49C92226A1CC31AAF9FA33B3A3BF337FFC0F25D5C131991E0000, N'6.1.3-40302')
SET IDENTITY_INSERT [dbo].[PERSONA] ON 

INSERT [dbo].[PERSONA] ([IdPersona], [Nombre], [Apellido], [Telefono], [Cuil], [Mail], [Domicilio], [Altura], [FechaNac]) VALUES (1, N'Marcos', N'Galperin', NULL, N'20224323116', N'pobreMarcos@gmail.com', NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[PERSONA] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__PERSONA__2724B2D1375F4DCD]    Script Date: 02/10/2022 20:31:57 ******/
ALTER TABLE [dbo].[PERSONA] ADD UNIQUE NONCLUSTERED 
(
	[Mail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[USUARIO]  WITH CHECK ADD FOREIGN KEY([IdPersona])
REFERENCES [dbo].[PERSONA] ([IdPersona])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
USE [master]
GO
ALTER DATABASE [WALLET] SET  READ_WRITE 
GO
