const { faker } = require('@faker-js/faker');

let database = [{
    "avatar": "https://robohash.org/excepturinullasuscipit.png?size=300x300&set=set1",
    "name": "Turner Veneur",
    "email": "tveneur0@about.com",
    "password": "kTWF70KR7D0"
  }, {
    "avatar": "https://robohash.org/doloresvitaeearum.png?size=300x300&set=set1",
    "name": "Jacqueline Corson",
    "email": "jcorson1@i2i.jp",
    "password": "fdSuh401SrM"
  }, {
    "avatar": "https://robohash.org/nonetquasi.png?size=300x300&set=set1",
    "name": "Benji Rapinett",
    "email": "brapinett2@ucsd.edu",
    "password": "tpPgDNushPGD"
  }, {
    "avatar": "https://robohash.org/numquamquiea.png?size=300x300&set=set1",
    "name": "Gardie Connue",
    "email": "gconnue3@networksolutions.com",
    "password": "IgC6dzz7Asu"
  }, {
    "avatar": "https://robohash.org/fugiatauteum.png?size=300x300&set=set1",
    "name": "Celestina Perillo",
    "email": "cperillo4@mtv.com",
    "password": "kaQvWOl"
  }, {
    "avatar": "https://robohash.org/minusprovidentsunt.png?size=300x300&set=set1",
    "name": "Ingmar Wickerson",
    "email": "iwickerson5@blinklist.com",
    "password": "8smYYhngr"
  }, {
    "avatar": "https://robohash.org/etdoloreea.png?size=300x300&set=set1",
    "name": "Isak Cornewall",
    "email": "icornewall6@live.com",
    "password": "QEJEiz"
  }, {
    "avatar": "https://robohash.org/quodebitiscumque.png?size=300x300&set=set1",
    "name": "Biron Dedenham",
    "email": "bdedenham7@marketwatch.com",
    "password": "yYx14TuMdOs"
  }, {
    "avatar": "https://robohash.org/repudiandaeaccusantiumvoluptatem.png?size=300x300&set=set1",
    "name": "Denis Garlant",
    "email": "dgarlant8@sakura.ne.jp",
    "password": "3r2ywpOxsBe"
  }, {
    "avatar": "https://robohash.org/velitnecessitatibusillum.png?size=300x300&set=set1",
    "name": "Halie Sirl",
    "email": "hsirl9@wufoo.com",
    "password": "LZf6qPWkP"
  }, {
    "avatar": "https://robohash.org/estquia.png?size=300x300&set=set1",
    "name": "Gideon Cogzell",
    "email": "gcogzella@va.gov",
    "password": "KoGQzGw3MdT"
  }, {
    "avatar": "https://robohash.org/velomnisnemo.png?size=300x300&set=set1",
    "name": "Blair Goody",
    "email": "bgoodyb@usda.gov",
    "password": "FYJ1LYopTqF"
  }, {
    "avatar": "https://robohash.org/iustoomniset.png?size=300x300&set=set1",
    "name": "Jerrome Dragon",
    "email": "jdragonc@nps.gov",
    "password": "m5wlQS0NXO1R"
  }, {
    "avatar": "https://robohash.org/ipsumautquisquam.png?size=300x300&set=set1",
    "name": "Robbyn Tiffney",
    "email": "rtiffneyd@moonfruit.com",
    "password": "dD2zY05"
  }, {
    "avatar": "https://robohash.org/atvelitet.png?size=300x300&set=set1",
    "name": "Tull Instock",
    "email": "tinstocke@dropbox.com",
    "password": "B9CTmGn"
  }, {
    "avatar": "https://robohash.org/nequeveroad.png?size=300x300&set=set1",
    "name": "Gavrielle Lambourn",
    "email": "glambournf@meetup.com",
    "password": "0RdDBIJD"
  }, {
    "avatar": "https://robohash.org/molestiaeutvoluptates.png?size=300x300&set=set1",
    "name": "Suzette Scoates",
    "email": "sscoatesg@blogspot.com",
    "password": "OGUTDA"
  }, {
    "avatar": "https://robohash.org/omnisipsasoluta.png?size=300x300&set=set1",
    "name": "Annaliese Cripps",
    "email": "acrippsh@java.com",
    "password": "1K03ZQP"
  }, {
    "avatar": "https://robohash.org/vitaemolestiasratione.png?size=300x300&set=set1",
    "name": "Inglebert Bonellie",
    "email": "ibonelliei@oakley.com",
    "password": "eV4UwK65IsFk"
  }, {
    "avatar": "https://robohash.org/natusquasofficia.png?size=300x300&set=set1",
    "name": "Holt Whightman",
    "email": "hwhightmanj@imgur.com",
    "password": "jVbOApqNqRux"
  }, {
    "avatar": "https://robohash.org/quiautet.png?size=300x300&set=set1",
    "name": "Howey Aldwich",
    "email": "haldwichk@phpbb.com",
    "password": "EQzRZrZXCi0h"
  }, {
    "avatar": "https://robohash.org/ipsumnequequibusdam.png?size=300x300&set=set1",
    "name": "Quinn Gifkins",
    "email": "qgifkinsl@myspace.com",
    "password": "OpMxq1TcwffK"
  }, {
    "avatar": "https://robohash.org/rerumsitaut.png?size=300x300&set=set1",
    "name": "Shannan Currum",
    "email": "scurrumm@freewebs.com",
    "password": "QxCYn83gbcxF"
  }, {
    "avatar": "https://robohash.org/quisquammaximequi.png?size=300x300&set=set1",
    "name": "Vanny Cerith",
    "email": "vcerithn@chron.com",
    "password": "BIYexAxX"
  }, {
    "avatar": "https://robohash.org/eaquevoluptatibusnam.png?size=300x300&set=set1",
    "name": "Marion Minto",
    "email": "mmintoo@slashdot.org",
    "password": "5DPJRrjH"
  }, {
    "avatar": "https://robohash.org/fugasimiliquequo.png?size=300x300&set=set1",
    "name": "Gilles Riccardini",
    "email": "griccardinip@360.cn",
    "password": "jx0vnfZqh6F"
  }, {
    "avatar": "https://robohash.org/velitfugitnumquam.png?size=300x300&set=set1",
    "name": "Godfry Moffat",
    "email": "gmoffatq@deviantart.com",
    "password": "sRRpU2e"
  }, {
    "avatar": "https://robohash.org/liberoveldolorem.png?size=300x300&set=set1",
    "name": "Irving Fobidge",
    "email": "ifobidger@earthlink.net",
    "password": "mGWBAU7VrsE"
  }, {
    "avatar": "https://robohash.org/ullammolestiaeinventore.png?size=300x300&set=set1",
    "name": "Wanids Cotesford",
    "email": "wcotesfords@apple.com",
    "password": "n0H8nA"
  }, {
    "avatar": "https://robohash.org/inetmolestiae.png?size=300x300&set=set1",
    "name": "Julia Simeon",
    "email": "jsimeont@squidoo.com",
    "password": "ANZkpKAD"
  }, {
    "avatar": "https://robohash.org/aliasconsequunturfuga.png?size=300x300&set=set1",
    "name": "Zea McRinn",
    "email": "zmcrinnu@about.me",
    "password": "KD557xn1D"
  }, {
    "avatar": "https://robohash.org/repellatfacilisquod.png?size=300x300&set=set1",
    "name": "Yvette Heavy",
    "email": "yheavyv@unesco.org",
    "password": "Wn4VBrV"
  }, {
    "avatar": "https://robohash.org/cupiditateremquia.png?size=300x300&set=set1",
    "name": "Nessy Fruish",
    "email": "nfruishw@chronoengine.com",
    "password": "shUZTG"
  }, {
    "avatar": "https://robohash.org/facilisverosit.png?size=300x300&set=set1",
    "name": "Stephi Ornils",
    "email": "sornilsx@ca.gov",
    "password": "TSXLBcYV"
  }, {
    "avatar": "https://robohash.org/aperiamodiooptio.png?size=300x300&set=set1",
    "name": "Marshal Sheddan",
    "email": "msheddany@paypal.com",
    "password": "KVxroRRS"
  }, {
    "avatar": "https://robohash.org/excepturiquianon.png?size=300x300&set=set1",
    "name": "Arnie McCreery",
    "email": "amccreeryz@mashable.com",
    "password": "dP7UKa38"
  }, {
    "avatar": "https://robohash.org/nullanihilmollitia.png?size=300x300&set=set1",
    "name": "Garnet Firbanks",
    "email": "gfirbanks10@fda.gov",
    "password": "o9FhoSP98ofF"
  }, {
    "avatar": "https://robohash.org/rerumcumodio.png?size=300x300&set=set1",
    "name": "Karola Swetland",
    "email": "kswetland11@blog.com",
    "password": "IDINdKdIjt"
  }, {
    "avatar": "https://robohash.org/excepturiharummollitia.png?size=300x300&set=set1",
    "name": "Mackenzie Boxhall",
    "email": "mboxhall12@upenn.edu",
    "password": "N9xoinI0"
  }, {
    "avatar": "https://robohash.org/autnonlaboriosam.png?size=300x300&set=set1",
    "name": "Jenni Kubu",
    "email": "jkubu13@reference.com",
    "password": "HFKmCajCuazT"
  }, {
    "avatar": "https://robohash.org/voluptatemvoluptatemipsa.png?size=300x300&set=set1",
    "name": "Yankee Huyhton",
    "email": "yhuyhton14@yelp.com",
    "password": "vlz3bcX9jwaU"
  }, {
    "avatar": "https://robohash.org/delenitisaepequia.png?size=300x300&set=set1",
    "name": "Redd Maykin",
    "email": "rmaykin15@about.com",
    "password": "5XlX37JxRnX"
  }, {
    "avatar": "https://robohash.org/magnamconsequaturtenetur.png?size=300x300&set=set1",
    "name": "Alvira Connerry",
    "email": "aconnerry16@google.ru",
    "password": "1k7CJOB"
  }, {
    "avatar": "https://robohash.org/remquamconsectetur.png?size=300x300&set=set1",
    "name": "Klement Fydo",
    "email": "kfydo17@berkeley.edu",
    "password": "0pEHC3p2h"
  }, {
    "avatar": "https://robohash.org/beataeeosdolor.png?size=300x300&set=set1",
    "name": "Matty Reame",
    "email": "mreame18@multiply.com",
    "password": "S0GJHf0Km"
  }, {
    "avatar": "https://robohash.org/consequatureiusnon.png?size=300x300&set=set1",
    "name": "Kandace Javes",
    "email": "kjaves19@1und1.de",
    "password": "BNhZ1GoKpni4"
  }, {
    "avatar": "https://robohash.org/velitquosconsequatur.png?size=300x300&set=set1",
    "name": "Faina Celle",
    "email": "fcelle1a@house.gov",
    "password": "nGxFBJD89Cgy"
  }, {
    "avatar": "https://robohash.org/doloreseosmodi.png?size=300x300&set=set1",
    "name": "Daisi Redfern",
    "email": "dredfern1b@macromedia.com",
    "password": "cwgXDmdRIy4S"
  }, {
    "avatar": "https://robohash.org/utvelitsimilique.png?size=300x300&set=set1",
    "name": "Regen Kerfut",
    "email": "rkerfut1c@canalblog.com",
    "password": "LWtypWZnlhjj"
  }, {
    "avatar": "https://robohash.org/itaqueauta.png?size=300x300&set=set1",
    "name": "Arni Bolver",
    "email": "abolver1d@ihg.com",
    "password": "iFcRnsF2O"
  }, {
    "avatar": "https://robohash.org/quiillumbeatae.png?size=300x300&set=set1",
    "name": "Melosa Gagg",
    "email": "mgagg1e@blogspot.com",
    "password": "2Aar9IW"
  }, {
    "avatar": "https://robohash.org/quietmaiores.png?size=300x300&set=set1",
    "name": "Rodrigo Isitt",
    "email": "risitt1f@google.ca",
    "password": "AW35Cmrq"
  }, {
    "avatar": "https://robohash.org/exundeconsequatur.png?size=300x300&set=set1",
    "name": "Ede Boater",
    "email": "eboater1g@clickbank.net",
    "password": "WQoS7O"
  }, {
    "avatar": "https://robohash.org/nonquianeque.png?size=300x300&set=set1",
    "name": "Vaughn Bromley",
    "email": "vbromley1h@mozilla.org",
    "password": "GcQ6h89lnl3"
  }, {
    "avatar": "https://robohash.org/isteetveniam.png?size=300x300&set=set1",
    "name": "Amargo Westcarr",
    "email": "awestcarr1i@soundcloud.com",
    "password": "wAwBfQ"
  }, {
    "avatar": "https://robohash.org/aliquamexofficia.png?size=300x300&set=set1",
    "name": "Isidro Lockton",
    "email": "ilockton1j@hibu.com",
    "password": "6n37yHN"
  }, {
    "avatar": "https://robohash.org/natusquisatque.png?size=300x300&set=set1",
    "name": "Margarethe Mulles",
    "email": "mmulles1k@icq.com",
    "password": "rlyChzeD4"
  }, {
    "avatar": "https://robohash.org/iuredelenitiest.png?size=300x300&set=set1",
    "name": "Son Orknay",
    "email": "sorknay1l@slashdot.org",
    "password": "GekAyDV"
  }, {
    "avatar": "https://robohash.org/animietquas.png?size=300x300&set=set1",
    "name": "Penny Bottom",
    "email": "pbottom1m@cisco.com",
    "password": "u0f3T8Q"
  }, {
    "avatar": "https://robohash.org/sequieosaspernatur.png?size=300x300&set=set1",
    "name": "My Doram",
    "email": "mdoram1n@shop-pro.jp",
    "password": "INg7TwkIw33S"
  }, {
    "avatar": "https://robohash.org/doloribusquodenim.png?size=300x300&set=set1",
    "name": "Jerrilee Paoli",
    "email": "jpaoli1o@state.tx.us",
    "password": "Jna4CbWhG1r"
  }, {
    "avatar": "https://robohash.org/excepturiquibusdamipsa.png?size=300x300&set=set1",
    "name": "Paquito Stares",
    "email": "pstares1p@jigsy.com",
    "password": "P7G8DHk"
  }, {
    "avatar": "https://robohash.org/perspiciatisullamporro.png?size=300x300&set=set1",
    "name": "Maximo Veillard",
    "email": "mveillard1q@sun.com",
    "password": "AwRVwWKj"
  }, {
    "avatar": "https://robohash.org/ullammaximenostrum.png?size=300x300&set=set1",
    "name": "Dorelle Phebee",
    "email": "dphebee1r@businessinsider.com",
    "password": "aSPEXy4mf"
  }, {
    "avatar": "https://robohash.org/utiureea.png?size=300x300&set=set1",
    "name": "Bucky Safell",
    "email": "bsafell1s@biblegateway.com",
    "password": "joLSqtx"
  }, {
    "avatar": "https://robohash.org/abdebitiset.png?size=300x300&set=set1",
    "name": "Clarita Blethin",
    "email": "cblethin1t@addtoany.com",
    "password": "gmZA0fS"
  }, {
    "avatar": "https://robohash.org/excepturisitconsequatur.png?size=300x300&set=set1",
    "name": "Bram MacCorley",
    "email": "bmaccorley1u@blogs.com",
    "password": "uUeSga4ON"
  }, {
    "avatar": "https://robohash.org/estdolorquidem.png?size=300x300&set=set1",
    "name": "Karlens Scranny",
    "email": "kscranny1v@studiopress.com",
    "password": "lzlfPZdTRq"
  }, {
    "avatar": "https://robohash.org/estrerumnon.png?size=300x300&set=set1",
    "name": "Anastasia Hindmoor",
    "email": "ahindmoor1w@weibo.com",
    "password": "weCI7G"
  }, {
    "avatar": "https://robohash.org/etvoluptasquae.png?size=300x300&set=set1",
    "name": "Lanie Newart",
    "email": "lnewart1x@simplemachines.org",
    "password": "NKnqC2H"
  }, {
    "avatar": "https://robohash.org/occaecatibeataefugit.png?size=300x300&set=set1",
    "name": "Reamonn Saylor",
    "email": "rsaylor1y@vinaora.com",
    "password": "nn20Vj7BI"
  }, {
    "avatar": "https://robohash.org/liberosuntdolorum.png?size=300x300&set=set1",
    "name": "Lucille Gasnell",
    "email": "lgasnell1z@independent.co.uk",
    "password": "MTJzHG0ViA"
  }, {
    "avatar": "https://robohash.org/illumeiusest.png?size=300x300&set=set1",
    "name": "Bunnie Loudwell",
    "email": "bloudwell20@163.com",
    "password": "lhz0Kiz"
  }, {
    "avatar": "https://robohash.org/perferendisdoloresdignissimos.png?size=300x300&set=set1",
    "name": "Veronike Dainton",
    "email": "vdainton21@fastcompany.com",
    "password": "wYFrxFmGF"
  }, {
    "avatar": "https://robohash.org/doloremqueomnislaborum.png?size=300x300&set=set1",
    "name": "Noreen Morson",
    "email": "nmorson22@ucoz.com",
    "password": "usvKZNrg5"
  }, {
    "avatar": "https://robohash.org/eumabet.png?size=300x300&set=set1",
    "name": "Herc Claesens",
    "email": "hclaesens23@blinklist.com",
    "password": "ZckdO15HdI"
  }, {
    "avatar": "https://robohash.org/quisvoluptatemdicta.png?size=300x300&set=set1",
    "name": "Janean Garred",
    "email": "jgarred24@topsy.com",
    "password": "Y5cYi0dAb"
  }, {
    "avatar": "https://robohash.org/cumquequiasperiores.png?size=300x300&set=set1",
    "name": "Danielle Puden",
    "email": "dpuden25@pcworld.com",
    "password": "qawQKPvs"
  }, {
    "avatar": "https://robohash.org/utpossimusautem.png?size=300x300&set=set1",
    "name": "Temple Bennell",
    "email": "tbennell26@fotki.com",
    "password": "2u7cfk"
  }, {
    "avatar": "https://robohash.org/doloremquidemofficia.png?size=300x300&set=set1",
    "name": "Elvin Kenforth",
    "email": "ekenforth27@dmoz.org",
    "password": "jFTCkAzy4Dy"
  }, {
    "avatar": "https://robohash.org/liberoettempore.png?size=300x300&set=set1",
    "name": "Barthel McCullagh",
    "email": "bmccullagh28@ocn.ne.jp",
    "password": "SUI0Vy3uBP"
  }, {
    "avatar": "https://robohash.org/itaqueatculpa.png?size=300x300&set=set1",
    "name": "Sigvard Boldock",
    "email": "sboldock29@geocities.jp",
    "password": "zjht2hDCY78"
  }, {
    "avatar": "https://robohash.org/temporibusexaccusamus.png?size=300x300&set=set1",
    "name": "Tyrus Giacomelli",
    "email": "tgiacomelli2a@tiny.cc",
    "password": "OMlpxh"
  }, {
    "avatar": "https://robohash.org/optioautsimilique.png?size=300x300&set=set1",
    "name": "Stephanus Alejandre",
    "email": "salejandre2b@berkeley.edu",
    "password": "9Y7pzhYN6mdv"
  }, {
    "avatar": "https://robohash.org/dolorumoptioincidunt.png?size=300x300&set=set1",
    "name": "Claudetta Dilger",
    "email": "cdilger2c@digg.com",
    "password": "qxDxCg9"
  }, {
    "avatar": "https://robohash.org/minusdoloreset.png?size=300x300&set=set1",
    "name": "Ethelda Millea",
    "email": "emillea2d@aol.com",
    "password": "730ov8ZJ"
  }, {
    "avatar": "https://robohash.org/estnumquameos.png?size=300x300&set=set1",
    "name": "Lotta Jagiello",
    "email": "ljagiello2e@sakura.ne.jp",
    "password": "KF3Fqwns"
  }, {
    "avatar": "https://robohash.org/cumquaesed.png?size=300x300&set=set1",
    "name": "Codi Melrose",
    "email": "cmelrose2f@twitpic.com",
    "password": "4ySKwTnzC2"
  }, {
    "avatar": "https://robohash.org/etmaioreseum.png?size=300x300&set=set1",
    "name": "Wash Loads",
    "email": "wloads2g@biglobe.ne.jp",
    "password": "MdS2sQ"
  }, {
    "avatar": "https://robohash.org/rerumtemporepariatur.png?size=300x300&set=set1",
    "name": "Isa Eldrid",
    "email": "ieldrid2h@yolasite.com",
    "password": "J3SEzxnf"
  }, {
    "avatar": "https://robohash.org/aliasnullanemo.png?size=300x300&set=set1",
    "name": "Jeremy Dimeloe",
    "email": "jdimeloe2i@smugmug.com",
    "password": "CEUtKH"
  }, {
    "avatar": "https://robohash.org/voluptatessuntvel.png?size=300x300&set=set1",
    "name": "Cybil McIntee",
    "email": "cmcintee2j@cocolog-nifty.com",
    "password": "ZRfRHT9tq7Rs"
  }, {
    "avatar": "https://robohash.org/quiveniamquas.png?size=300x300&set=set1",
    "name": "Salome Halmkin",
    "email": "shalmkin2k@yale.edu",
    "password": "5ye1i6eutSd"
  }, {
    "avatar": "https://robohash.org/enimconsequaturratione.png?size=300x300&set=set1",
    "name": "Rhonda Saunderson",
    "email": "rsaunderson2l@yahoo.co.jp",
    "password": "5z8JFqFE"
  }, {
    "avatar": "https://robohash.org/ipsamabaut.png?size=300x300&set=set1",
    "name": "Jewel Collin",
    "email": "jcollin2m@topsy.com",
    "password": "T95hXw"
  }, {
    "avatar": "https://robohash.org/namnonaut.png?size=300x300&set=set1",
    "name": "Roseann Kirman",
    "email": "rkirman2n@seesaa.net",
    "password": "wqQcV2D6"
  }, {
    "avatar": "https://robohash.org/debitisfugitratione.png?size=300x300&set=set1",
    "name": "Cordie Alphonso",
    "email": "calphonso2o@people.com.cn",
    "password": "TbNqGaH1"
  }, {
    "avatar": "https://robohash.org/solutaametdebitis.png?size=300x300&set=set1",
    "name": "Sylvan Brigge",
    "email": "sbrigge2p@weebly.com",
    "password": "uu4QRlRM26K"
  }, {
    "avatar": "https://robohash.org/rerumquosquas.png?size=300x300&set=set1",
    "name": "Sybille Aldins",
    "email": "saldins2q@amazon.co.jp",
    "password": "zRXfhBAy"
  }, {
    "avatar": "https://robohash.org/etconsecteturquas.png?size=300x300&set=set1",
    "name": "Leshia Cornehl",
    "email": "lcornehl2r@nih.gov",
    "password": "aP2imgazuH"
  }]

  async function createUsersNew () {
    for(var i = 0; i <= database.length; i++){
        let user = database[i]
        // console.log(user);
        await fetch('http://localhost:8080/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            })

    }
}
createUsersNew();

async function createUsers (num) {
    for(var i = 0; i <= num; i++){
        let user = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            avatar: faker.image.imageUrl(width="640", height="480")
        }
        // console.log(user);
        await fetch('http://localhost:8080/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            })

    }
}

// createUsers(100);