-- Cars table seeds here

INSERT INTO cars (
 id,
 owner_id,
 car_make,
 car_model,
 car_year,
 description,
 listing_price,
 car_photo_url,
 is_sold)
 VALUES
(1, 1,'Acura', 'RDX', 2019, '2019 Acura RDX 107 point inspected, Fully detailed, Fresh oil change, Full tank of gas, Up to date service, Leather, Bluetooth Hands Free Phone, Moonroof, Back-Up Camera, All Wheel Drive, Local Trade, Sirius XM Radio, Remainder of Factory Warranty, AWD.' ,4390000, 'https://i.gaw.to/content/photos/33/86/338665_2019_Acura_RDX.jpg', FALSE),
(2, 1,'GMC', 'Sierra 1500',1981,'350 with a 3 speed auto, Runs good, shifts pretty good, have used the truck for the pasted year and a half as a daily and has not let me down yet, is definitely a running project but would make a great start for a restore!', 300000,'https://carphotos.cardomain.com/ride_images/4/709/1349/39270674011_original.jpg', FALSE),
(3, 1, 'Ford', 'Escape', 2009, 'Grate on fule 4 silinder 4x4 comes with two sets of rims and tiers winter and summer Grate shape has camand start 240km 5500 obo', 550000,'https://citycarsw.com/uimages/vehicle/5655194/full/2009-Ford-Escape-Hybrid-Limited-1FMCU59359KA49400-2351.jpeg', FALSE),
(4, 2, 'Acura', 'MDX', 2009, 'Great Condition SUV.
Dealer Maintained. Selling because ordered a new MDX.',2190000, 'http://autohouseusa.com/uimages/vehicle/2024276/full/2009-Acura-MDX-Tech-Pkg-2HNYD28689H505315-4676.jpeg',FALSE ),
(5, 2,'Mazda', '3 Sport', 2014, 'Great car in good condition, Just want to upgrade to the new one.', 820000, 'https://a0f0de7e2abaf482747b-b5063c9ff4ff5ccb80b685a1e61e4036.ssl.cf1.rackcdn.com/JM1BM1L7XE1104590/f31df5c919be45b766590393f7c71276.jpg', FALSE ),
(6, 2, 'Mercedes', 'R-Class', 2007, 'Full Leather Seat, Entertainment Package, AMG Package. 3rd owner. No accidents. Good to go, needs nothing!!!', 960000, 'https://pictures.topspeed.com/IMG/jpg/200608/2007-mercedes-r-class-9.jpg', FALSE),
(7, 3 , 'Toyota', 'FJ Cruiser', 2007, 'Always had oil changed regularly & most driving done on the highway. Recent maintenance includes new front brakes & rotors, new front bearings, battery and alternator. Comes with 2 sets of tires.',1400000, 'https://www.integrityautofinance.com/wp-content/uploads/2020/01/002085R1-2007-Toyota-FJ-Cruiser-Silver-scaled.jpg', FALSE ),
(8, 3,'AM General','Hummer', 1993, 'Starts up and runs great. Suspension, steering and brakes all in good condition. Mechanically in good shape, but could use paint & some body work.', 3800000, 'https://bringatrailer.com/wp-content/uploads/2020/06/1591675387a1d228906077E6CADCCC-0C18-4F81-8B07-28AB5913EBC4.jpeg', FALSE ),
(9, 3, 'Nissan', 'MICRA', 2015, 'Very cute little car that will start in any weather and will not get stuck, made it to Banff and back with this car in extreme weather without any issues.', 920000, 'http://micra-forum.com/imgs/2015-nissan-micra-04.jpg', FALSE ),
(10, 1,'Audi', 'A8', 2006, 'Selling this beautiful luxurious saloon in amazing condition inside out! Black on black executive sedan.', 999500, 'https://www.carspecs.us/photos/114059c18bf25c2e13844557548eb84f4160afac-2000.jpg', FALSE);

ALTER SEQUENCE cars_id_seq RESTART WITH 50;
