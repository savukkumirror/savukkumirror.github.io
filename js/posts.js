var posts = angular.module('postapp', ['ui.bootstrap']);

posts.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [];
  var slides =  ['/images/9015/22THVISIONTAMILNAD_1764909g-150x150.jpg','/images/8985/45aa80e7db7c49d5a0ac6a43f7d23f6d-e1d5871c63b14938b5946c73ccd00c34-0-150x150.jpg','/images/8965/GNANADESIKAN-2-150x150.jpg','/images/8953/Photo-01-150x150.jpg','/images/8930/Untitled-150x150.jpg','/images/8917/480-150x150.jpe','/images/8907/savukku-image-2-150x150.jpg','/images/7412/flowers_2162096g-150x150.jpg','/images/7413/subramaniam_3_100211045443-150x150.jpg','/images/7415/E0-AE-AE-E0-AF-88-E0-AE-95-E0-AF-8D-E0-AE-95-E0-AF-87-E0-AE-B2-E0-AF-8D-E0-AE-95-E0-AF-81-E0-AE-A9-E0-AF-8D-E0-AE-B9-E0-AE-BE-150x150.jpg','/images/7416/jjsasikalanakeeran-150x150.jpg','/images/7417/RK_Agrawal-150x150.jpg','/images/7418/15MA_COURTDGL_1686169f-150x150.jpg','/images/7419/savukku-2Bimage-2B-2--150x150.jpg','/images/7420/1-150x150.jpg','/images/7421/NarendraModi-621x414-150x150.jpg','/images/7422/p42-150x150.jpg','/images/7423/jaya-650_051311033836-150x150.jpg','/images/6979/Asra-Garg-3-150x150.jpg','/images/6968/water-well-india-150x150.jpg','/images/6947/Judge_who_wore_dhoti_Sam_story_360-150x150.jpg','/images/6924/Asra-Garg-2-150x150.jpg','/images/6912/1-DSC_1523-150x150.jpg','/images/6889/chinnakkuthoosi-150x150.jpg','/images/6879/23VBG_JAYALALITHAA_368443f-150x150.jpg','/images/6853/11279PJuly-08-L-big-150x150.jpg','/images/6840/ph.jpg-1-150x150.jpe','/images/6830/vaikundarajan-2-150x150.jpg','/images/6816/wal-150x150.jpg','/images/6809/THirumavalavan-150x150.jpg','/images/6791/IMG_0528-150x150.jpg','/images/6787/karunanidhi_1113689f-150x150.jpg','/images/6770/IMG_20140629_132307454-150x150.jpg','/images/6759/subramaniam_2_01-150x150.jpg','/images/6753/25TH_GOPAL_SUBRAMAN_934042e-150x150.jpg','/images/6746/AP081021044565-150x150.jpg','/images/6736/1-150x150.jpg','/images/6725/DSC00081-150x150.jpg','/images/6721/boston-faneuil-hall-quincy-market-old-state-house-jeyamohan-150x150.jpg','/images/6713/1389795322rishikesh1-150x150.jpg','/images/6684/muzaffarnagar_0-150x150.jpg','/images/6691/Narendra-modi-150x150.jpg','/images/6675/gorbi620_1861401b-150x150.jpg','/images/6663/TH-BOOK_LAUNCH_5_1582201f-150x150.jpg','/images/6652/azad-150x150.jpg','/images/6635/RSS_March_Bhopal_PTI_360-150x150.jpg','/images/6625/karunanithi-kattumaram-1-150x150.jpg','/images/6616/tm-krishna1-150x150.jpg','/images/6603/Karti_Chidambaram_1754499f-150x150.jpg','/images/6601/Map_of_Jammu_and_Kashmir2-150x150.jpg','/images/6583/modioath1-150x150.jpg','/images/6587/Tamil-Daily-News-Paper_26334345341-150x150.jpg','/images/6584/karunanidhi_mwn2-150x150.jpg','/images/6578/afzal-gurus-book-released-seven-months-after-he-was-hanged_180913085859-150x150.jpg','/images/6568/dg-vanzara-sr-02_060513113604-150x150.jpg','/images/6556/thumb-150x150.jpe','/images/6553/karunanidhi-621x4141-150x150.jpg','/images/6550/30.05.2014_Page_02-150x150.jpg','/images/6546/20TH_SPECIAL_COURT_759948f-150x150.jpg','/images/6543/M-KARUNANIDHI-SONG-150x150.jpg','/images/6540/karunagal-150x150.jpg','/images/6532/04TH_SONIA_1258356f-150x150.jpg','/images/6521/elections_1810682g-150x150.jpg','/images/6517/KARUNANIDHI_1540750f1-150x150.jpg','/images/6506/modi_mother-150x150.jpg','/images/6501/eelam_tamils_650-150x150.jpg','/images/6245/Tamil-Nadu-pc-wise-150x150.gif','/images/6227/savukku-image-150x150.jpg','/images/6211/1208537_3408622831228_996631676_n-150x150.jpg','/images/6198/IMG_2197-150x150.jpg','/images/6193/Farmer-Suicides-India-150x150.jpg','/images/6187/4714858-3x2-940x627-150x150.jpg','/images/6183/karunanidhi-621x414-150x150.jpg','/images/6179/kanimozhi_illus_20110509-150x150.jpg','/images/6173/KARUNANIDHI_1540750f-150x150.jpg','/images/6165/000_Del493689-150x150.jpg','/images/6155/TOI_0026-150x150.jpg','/images/6139/Kamaraj-150x150.jpg','/images/6133/modivarnsi-150x150.jpg','/images/6119/p_sathasivam_20131125.jpg-150x150.jpe','/images/6117/TOI_0026-150x150.jpg','/images/6110/ls-polls-jayalalithaa-goes-all-guns-blazing-for-40-seats_220314013325-150x150.jpg','/images/6102/IN12_MAMATA_11993f-150x150.jpg','/images/6092/14TH_SATHASIVAM1_1584387f-150x150.jpg','/images/6084/B_Id_411109_P_Sathasivam-150x150.jpg','/images/6074/young_voters1-621x414-150x150.jpg','/images/6069/a-raja4_20110202-150x150.jpg','/images/6063/a.raja-5-150x150.jpg','/images/6057/Narendra_Modi-150x150.jpg','/images/6046/INDIAN-EXPRESS-150x150.jpg','/images/6030/j_a_Tr-150x150.jpg','/images/6016/2803020564_6cd2b0bce0_b-150x150.jpg','/images/6008/karunanidhi_a_raja_201103071-150x150.jpg','/images/6002/Karunanidhi-old-150x150.jpg','/images/5993/Modi-Mukesh-Reuters-150x150.jpg','/images/5977/03MATH_DALITS__648794f-150x150.jpg','/images/5972/Front-Cover-tile-150x150.jpg','/images/5965/MK_Kamaraj_Indira__1474654g-150x150.jpg','/images/5958/Muslims-in-India-150x150.jpg','/images/5945/Ramadoss-150x150.jpg','/images/5934/karu13-150x150.jpg','/images/5929/india-voters-150x150.jpg','/images/5915/4741380934_349bf607e3_b-150x150.jpg','/images/5904/001-150x150.jpg','/images/5899/1487279_763596816985859_485034682_n-150x150.jpg','/images/5893/45aa80e7db7c49d5a0ac6a43f7d23f6d-e1d5871c63b14938b5946c73ccd00c34-0-150x150.jpg','/images/5878/4464289938_ddf0eaa201_o-150x150.jpg','/images/5870/17nxg_p6_7_election_gbp2dgcfb117nxg_elections2-150x150.jpg','/images/5857/sasi3-150x150.jpg','/images/5847/581883F367202F3A1BAAE9C79633F1-150x150.jpg','/images/5839/MG_4324-Large-150x150.jpg','/images/5826/th09-j_balaji-p_TH_1715895f-150x150.jpg','/images/5802/Arvind-Kejriwal-evicted-150x150.jpg','/images/5784/savukkulogo-150x150.png','/images/5781/savukkulogo-150x150.png','/images/5752/10150666_764271523585055_686913784_n-150x150.jpg','/images/5748/pic02-150x150.jpg','/images/5739/7cd7ae2a-81d1-434d-85c3-79fb06cb397dWallpaper1-150x150.jpg','/images/5730/mpdisuperman-150x150.jpg','/images/5713/M_Id_405805_Narendra_Modi-150x150.jpg','/images/5544/IMG-20140327-WA0018-150x150.jpg','/images/5539/M_Id_405805_Narendra_Modi-150x150.jpg','/images/5533/m2_650_091313100538-150x150.jpg','/images/5527/jayalalithaa_karunanidhi-150x150.jpg','/images/5524/narendra_modi_young_20121105_1-150x150.jpg','/images/5519/arunachal-narendramodi-150x150.jpg','/images/5702/Jayalalithaa-150x150.jpeg','/images/5514/sivaji_parasakthi-150x150.jpg','/images/5511/10002789_10201740071929874_1759921490_n-150x150.jpg','/images/5497/Dharmapuri-Women-in-room-11-150x150.jpg','/images/5493/1798827_573933026036544_82469324_n-150x150.jpg','/images/5491/1010092_10203183859295191_1736377076_n-150x150.jpg','/images/5489/joseph-stalin-logic-150x150.jpg','/images/5479/tas_boy_run-150x150.jpg','/images/5468/0_3-150x150.jpg','/images/5464/2450802473_02c046146b_o-150x150.jpg','/images/5460/TOI_0026_1-150x150.jpg','/images/5455/TOI_0026-150x150.jpg','/images/5454/Dinamani_logo-150x150.jpg','/images/5452/TOI_0026-150x150.jpg','/images/5395/savukku_image-150x150.jpg','/images/5393/DSC_3837_2-150x150.jpg','/images/5383/tas_boy_run_e-150x150.jpg','/images/5371/sankara-subbu-satish-kumar-150x150.jpg','/images/5367/1618629_10152032562593303_132270080_n-150x150.jpg','/images/5360/savukku_image-150x150.jpg','/images/5359/nps-150x150.jpg','/images/5351/tas_boy_run_e-150x150.jpg','/images/5335/jaff-150x150.jpg','/images/5328/2g-tape-150x150.jpg','/images/5326/pr300309b-150x150.jpg','/images/5324/tas_boy_run-150x150.jpg','/images/5314/Karunanidhi-150x150.jpg','/images/5313/1623719_810184319007481_1493203556_n-150x150.jpg','/images/5310/cuj1-150x150.jpg','/images/5304/AVN_KARUNA_120812f-150x150.jpg','/images/5303/jaffer_sait_2-150x150.jpg','/images/5295/savukku_image-150x150.jpg','/images/5294/Mad-HC-150x150.jpg','/images/5291/07VBG_M__KARUNANIDH_523831f-150x150.jpg','/images/5290/1609865_698051470216755_785580759_n-150x150.jpg','/images/5288/t_boy_and_gang-150x150.jpg','/images/5277/sasi-150x150.jpg','/images/5270/681x454-150x150.jpg','/images/5263/7691_10201111778862940_1117094651_n-150x150.jpg','/images/5248/IMG_2197-150x150.jpg','/images/5242/V_mask_by_Sylent_Phantom-150x150.jpg','/images/5237/tasmac_boy-150x150.jpg','/images/5225/pr300309b-150x150.jpg','/images/5222/savukku_image-150x150.jpg','/images/5221/7691_10201111778862940_1117094651_n-150x150.jpg','/images/5207/DSC_5603-150x150.jpg','/images/5203/1450169_10201111789343202_148895854_n-150x150.jpg','/images/5198/1-DSC_0034-150x150.jpg','/images/5195/Untitled-1-150x150.jpg','/images/5191/newspaper_cutting_20091116-150x150.jpg','/images/5178/1010250_567294269981232_1533622636_n-150x150.jpg','/images/5174/2176838929_30c714cf74_b-150x150.jpg','/images/5167/7691_10201111778862940_1117094651_n-150x150.jpg','/images/5156/923207_10151678027034273_1471113477_n-150x150.jpg','/images/5149/DevyaniK-150x150.jpg','/images/5141/9836PDEC---13---B-big-150x150.jpg','/images/5135/t_boy_and_gang-150x150.jpg','/images/5126/20IN_KARUNANIDHI9_1304858f-150x150.jpg','/images/5125/Diarchy-150x150.jpg','/images/5123/1450169_10201111789343202_148895854_n-150x150.jpg','/images/5100/law-150x150.jpeg','/images/5085/tas-150x150.jpg','/images/5065/Tejpal-1-150x150.jpg','/images/5056/tas_boy_1-150x150.jpg','/images/5046/spying2-150x150.jpg','/images/5039/tas_boy_5-150x150.jpg','/images/5027/t_boy_and_gang-150x150.jpg','/images/5015/681x454-150x150.jpg','/images/5007/t_boy_and_gang-150x150.jpg','/images/4995/Karunanidhi_to_leave_for_Delhi_tomorrow-150x150.jpg','/images/4993/narendra_modi-150x150.jpg','/images/4991/tas_boy_1-150x150.jpg','/images/4970/Moodar-Koodam-Movie-Poster-01-150x150.jpg','/images/4965/tas_boy_57-150x150.jpg','/images/4957/20IN_KARUNANIDHI9_1304858f-150x150.jpg','/images/4955/Asaram2-620x450-150x150.jpg','/images/4944/t_boy_and_gang-150x150.jpg','/images/4925/jaffer_sait_2-150x150.jpg','/images/4924/tas_boy_46565-150x150.jpg','/images/4915/IMG_9358-150x150.jpg','/images/4911/1240059_683709764992402_1274495728_n-150x150.jpg','/images/4909/tas_boy_5-150x150.jpg','/images/4892/tas_boy_3_1-150x150.jpg','/images/4886/681x454-150x150.jpg','/images/4882/t_boy_and_gang-150x150.jpg','/images/4867/tas_boy_3-150x150.jpg','/images/4855/522757_385401311545378_1902187585_n-150x150.jpg','/images/4851/DSC_8300-150x150.jpg','/images/4847/poster-150x150.jpg','/images/4844/tas_boy_3_1-150x150.jpg','/images/4830/993532_488963797848381_1764364882_n-150x150.jpg','/images/4828/t_boy_and_gang-150x150.jpg','/images/4810/Sampath__Kumar_DC-150x150.jpg','/images/4806/facebook-testing-new-timeline-format-with-single-column-of-posts-updated--8395815038-150x150.jpg','/images/4802/t_boy_and_gang2-150x150.jpg','/images/4795/ilavarasan_poster-150x150.jpg','/images/4793/july_12_poster_1-150x150.jpg','/images/4786/tas_boy_11-150x150.jpg','/images/4775/lawyer-03-150x150.jpg','/images/4761/t_boy_and_gang-150x150.jpg','/images/4750/14680364_Nalini_Murugan_9-150x150.jpg','/images/4748/DMK_flag-150x150.png','/images/4742/tas_boy_1-150x150.jpg','/images/4731/advocate-symbol-copy-150x150.png','/images/4729/Police-Dog-150x150.jpg','/images/4725/sadhguru_ashram2-150x150.jpg','/images/4723/392566_336752149720772_904922927_n-150x150.jpg','/images/4720/tas_boy_3-150x150.jpg','/images/4712/poster-150x150.jpg','/images/4709/5588_483934921675714_1877858711_n-150x150.jpg','/images/4704/1002071_587515354603701_337645868_n-150x150.jpg','/images/4701/ZIP.1_165-150x150.jpg','/images/4696/saidai_poster-150x150.jpg','/images/4694/tas_boy_3-150x150.jpg','/images/4681/DIVYA__DHARMAPURI_1478334f-150x150.jpg','/images/4679/395327_484137091655497_1012655174_n_1-150x150.jpg','/images/4671/946833_484134978322375_1164224053_n_1-150x150.jpg','/images/4669/final_on_11-150x150.jpg','/images/4666/tas_boy_1-150x150.jpg','/images/4656/29529_132364633445226_2686343355_n-150x150.jpg','/images/4650/tas_boy_3-150x150.jpg','/images/4638/IMG_9083-150x150.jpg','/images/4637/29529_132364633445226_2686355_n-150x150.jpg','/images/4629/tas_boy_1-150x150.jpg','/images/4617/Picture_058-150x150.jpg','/images/4615/jayalalitha7-150x150.jpeg','/images/4613/tas_boy_3-150x150.jpg','/images/4604/p88b-150x135.jpg','/images/4601/gold-ETFs-150x150.jpg','/images/4594/KUDANKULAM_829871f-150x150.jpg','/images/4653/29529_132363156778707_580865_n-150x150.jpg','/images/4592/tas_boy_1-150x150.jpg','/images/4587/DSC_0866-150x150.jpg','/images/4586/Rajagopalan_IAS-150x150.jpg','/images/4582/3325733396_bdb800d4a9_b-150x150.jpg','/images/4580/IN21_JAYA_1296f-150x150.jpg','/images/4579/tas_boy_1-150x150.jpg','/images/4571/4893244844_a78f681a9a_z-150x150.jpg','/images/4569/m_karunanidhi_20130401_1-150x150.jpg','/images/4563/dinamani-logo-150x141.jpg','/images/4562/Jangid_43-150x150.jpg','/images/4558/M_Id_377300_bhullar-150x150.jpg','/images/4553/dinamani-logo-150x141.jpg','/images/4551/IMG_0828-150x150.jpg','/images/4546/Akila_demo_notice-150x150.jpg','/images/4544/sam_0407-150x150.jpg','/images/4542/Sun_TV_Poster-150x150.jpg','/images/4540/karuna20120603-150x150.jpg','/images/4533/Sun_TV_PK-150x150.png','/images/4527/DSC_0634-150x150.jpg','/images/4520/p17-150x150.jpg','/images/4518/IMG_3962-150x150.jpg','/images/4499/Karunanidhi-150x150.jpg','/images/4498/39.-Amma-Photo-Present-150x150.jpg','/images/4495/CSk__SRH-150x150.jpg','/images/4490/SP_Reporter_Poster_31-3-2013.pdf-150x150.jpg','/images/4488/59922_103295999847890_560997797_n-150x150.jpg','/images/4478/IMG_5410-150x150.jpg','/images/4475/59922_103295999847890_560997797_n-150x150.jpg','/images/4471/image-150x150.jpeg','/images/4468/04-balachandran13-600-150x150.jpg','/images/4461/ffffffffffffff-150x150.jpg','/images/4460/p40-150x150.jpg','/images/4457/ffffffffffffff-150x150.jpg','/images/4455/4078599230_2cd95d67c7_o-150x150.jpg','/images/4405/high_court-150x150.jpg','/images/4400/321496_474165919312379_477275747_n-150x150.jpg','/images/4398/image001-150x150.jpg','/images/4392/DECO_005-150x150.jpg','/images/4386/2-150x150.jpg','/images/4381/DSC_0906-150x150.jpg','/images/4374/19SRI2_jpg_1368787g-150x150.jpg','/images/4372/19SRI1_jpg_1368786g-150x150.jpg','/images/4368/vetri-durai-150x150.jpg','/images/4355/koshboo-150x150.jpg','/images/4353/black_karuna-150x150.jpg','/images/4351/3-06-12-_Thalaivar_Birthday--111-150x150.jpg','/images/4347/images-150x150.jpg','/images/4344/s4-150x150.jpg','/images/4333/DSC_0596-150x150.jpg','/images/4329/Kamal-Sir-4-150x150.jpg','/images/4320/1_2-150x150.jpg','/images/4319/Adade-03-150x150.jpg','/images/4317/_MG_5255-150x150.jpg','/images/4313/Adade31-150x150.jpg','/images/4311/1_MG_5375-150x150.jpg','/images/4307/2451624532_fd97d04530_o-150x150.jpg','/images/4305/Slide2-150x150.jpg','/images/4250/Viswaroopam-150x150.jpg','/images/4248/IMG_0006-150x150.jpg','/images/4238/Muthukumar-Banner---colour-150x150.jpg','/images/4234/la_mascara_1994_1-150x150.jpg','/images/4230/viswaroopam-trailer-launch-stills-27-150x150.jpg','/images/4220/DSC_3837_2-150x150.jpg','/images/4218/RAHUL_GANDHI_1_1269639f-150x150.jpg','/images/4216/04High_Cou1rt_Madras-150x150.jpg','/images/4212/DSC_3837_2-150x150.jpg','/images/4210/mackennas_gold_ver3_xlg-150x150.jpg','/images/4204/Elippe_Dharmarao-150x150.jpg','/images/4202/Amma-Photo-1-150x150.jpg','/images/4195/george1-150x150.jpg','/images/4192/BangaruAdigalar1-150x150.jpg','/images/4179/Sep_-_05_c-150x150.jpg','/images/4172/06THSAIDAI_S_DURAIS_522108a-150x150.jpg','/images/4166/06VBG_ADALAT_746045f-150x150.jpg','/images/4163/Elippe_Dharmarao-150x150.jpg','/images/4158/New-Year-2013-Wishes-Wallpaper-600x450-150x150.jpg','/images/4156/NDC_20121227-150x150.jpg','/images/4152/06THSAIDAI_S_DURAIS_522108a-150x150.jpg','/images/4134/Amma-Photo-1-150x150.jpg','/images/4132/Elippe_Dharmarao-150x150.jpg','/images/4129/jaffer_sait_2-150x150.jpg','/images/4128/Eqbal-150x150.jpg','/images/4121/VVal101212_106-150x150.jpg','/images/4119/sam_0407-150x150.jpg','/images/4113/DSC_0833-150x150.jpg','/images/4111/Senthil-Balaji-150x150.jpg','/images/4104/03-150x150.jpg','/images/4095/1DSC_0115-150x150.jpg','/images/4093/DSC_0123-150x150.jpg','/images/4084/MadrasHighCourtManuNeedhiCholanStatue-150x150.jpg','/images/4081/encounter-150x150.jpg','/images/4075/madras-high-court-wallpaper-150x150.jpg','/images/4073/kasab_reuters-150x150.jpg','/images/4071/116921715__357345b-150x150.jpg','/images/4069/4740740575_c8b22d94a7_b-150x150.jpg','/images/4056/invitation-150x150.jpg','/images/4052/Pramod_Kumar_IPS-150x150.jpg','/images/4049/PRESS-Release-IAS-BOOK-1-150x150.jpg','/images/4047/DSC_0599-150x150.jpg','/images/3945/Amma-Photo-1-150x150.jpg','/images/3940/DSC_0421-150x150.jpg','/images/3938/DSC00038-150x150.jpg','/images/3936/Book_advt-150x150.jpg','/images/3934/24.10.12-photo-w-c-2-150x150.jpg','/images/3929/ts2-150x150.png','/images/3921/jollu-150x150.png','/images/3919/rangasamy-150x150.jpg','/images/3917/IMG5139-1233940124-150x150.jpg','/images/3915/Notice-2-150x150.jpg','/images/3913/THSHK_PARAMAKUDI_2_779810g-150x150.jpg','/images/3904/DSC_0433-3-150x150.jpg','/images/3854/DSC_6793-150x150.jpg','/images/3852/thukkiandi12-150x150.jpg','/images/3851/thukkiandi1-150x150.jpg','/images/3850/71a5520f2893e57bd018134853ed-grande-150x150.jpg','/images/3849/Tamil-Daily-News-Paper_58039057255-150x150.jpg','/images/3847/l2012042640361-150x150.jpg','/images/3845/3325707760_6f4f340c91_b-150x150.jpg','/images/3843/sarath_kumar_sarath_kumar_profile_sarath_kumar_stills_sarath_kumar_photos_sarath_kumar_videos_malayalam_cinema_complete_movie_4-150x150.jpg','/images/3834/205023921_20231f4f25_b-150x150.jpg','/images/3829/savukku_image-150x150.jpg','/images/3820/04THSHANKAR_174823e-150x150.jpg','/images/3818/Amma-Photo-7-150x150.jpg','/images/3799/nitin-gadkari-2009-12-24-7-44-18-150x150.jpg','/images/3797/HWF_Medical_Camp-American_Doctors_visit-150x150.jpg','/images/3791/adfsw-150x150.jpg','/images/3789/Ranjan_1-150x150.jpg','/images/3786/pistol_991176f-150x150.jpg','/images/3784/ramadas13-150x150.jpg','/images/3782/prakash-karat_10-150x150.jpg','/images/3780/BL08_JAYANTHI_945937f-150x150.jpg','/images/3778/George_S-150x150.jpg','/images/3776/aadfDSC00037-150x150.jpg','/images/3774/Thukkiandi_2-150x150.jpg','/images/3772/8-150x150.jpg','/images/3771/sheela-150x150.jpg','/images/3769/Vairamuthu-150x150.jpg','/images/3767/IMG_0009-150x150.jpg','/images/3764/ffffffffffffff-150x150.jpg','/images/3762/07Epidau1rus_Theater08-150x150.jpg','/images/3755/n-ram-150x150.jpg','/images/3744/agra-sp_350_092612113836-150x150.jpg','/images/3742/12-13-2011-18-valarmathi--anandhan-sworn-in-150x150.jpg','/images/3740/kannppan-comishnar-150x150.jpg','/images/3738/00-title-card-13-09-12-innocence-of-muslims-150x150.jpg','/images/3729/LSnewN_0080-150x150.jpg','/images/3727/koodamkulam4-150x150.jpg','/images/3726/3-1-150x150.jpg','/images/3724/IMG_5220_Custom-150x150.jpg','/images/3723/3335459439_154e7e47cb_o-150x150.jpg','/images/3722/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_03-150x150.jpg','/images/3719/koodamkulam4-150x150.jpg','/images/3718/DSC_0850-150x150.jpg','/images/3708/Tripathy_JK1-150x150.jpg','/images/3706/asdf-150x150.jpg','/images/3695/DSC00034-150x150.jpg','/images/3694/DSC_6669-150x150.jpg','/images/3691/Varadha_Raj._13-150x150.jpg','/images/3688/DSC_0614-150x150.jpg','/images/3656/_MG_9488-150x150.jpg','/images/3639/cop1-150x150.jpg','/images/3631/283617_128153527329238_1419357596_n-150x150.jpg','/images/3629/DSCN0676-150x150.jpg','/images/3616/IN21_JAYA_1296f-150x150.jpg','/images/3615/karun_jaya_2-150x150.jpg','/images/3613/seeman_copy-150x150.jpg','/images/3611/nedu1-150x150.jpg','/images/3609/DSC_0255-2-150x150.jpg','/images/3589/2803009690_bd0b5d68df_b-150x150.jpg','/images/3587/987987-150x150.jpg','/images/3570/raji-150x150.jpg','/images/3568/1final_product-150x150.jpg','/images/3565/m7-150x150.jpg','/images/3551/daroji-0099-2-150x150.jpg','/images/3549/final3-150x150.jpg','/images/3544/pix_333-150x150.jpg','/images/3540/Untitled-1-150x150.jpg','/images/3533/afsd00-Tamil-2-150x150.jpg','/images/3531/TNPSC-Images-150x150.jpg','/images/3515/sIMG_0001-150x150.jpg','/images/3513/sIMG_0001-150x150.jpg','/images/3500/_MG_3523-150x150.jpg','/images/3495/03112011010-150x150.jpg','/images/3493/dscf4504-150x150.jpg','/images/3490/IMG_2197-150x150.jpg','/images/3489/l2012021139209-150x150.jpg','/images/3463/1IMG_0007-150x150.jpg','/images/3456/2_1-150x150.jpg','/images/3453/14-150x150.jpg','/images/3448/real-150x150.jpg','/images/3437/Mayawati-150x150.jpg','/images/3428/LegalNotice-Front3-150x150.jpg','/images/3425/IMG_0001-150x150.jpg','/images/3421/4786949304_52d41b3c5e_b-150x150.jpg','/images/3418/DSC_3837_2-150x150.jpg','/images/3416/facebook1-150x150.jpg','/images/3411/Tripathy_7-150x150.jpg','/images/3393/1818-150x150.jpg','/images/3370/324343-150x150.jpg','/images/3366/latest-150x150.jpg','/images/3362/raja2-150x150.jpg','/images/3357/bg15-150x150.jpg','/images/3354/a-raja-150x150.jpeg','/images/3351/1298860201-150x150.jpg','/images/3346/DSCF3485-150x150.jpg','/images/3343/MIC-150x150.png','/images/3339/1Anandreturnshome_Firstpost-150x150.jpg','/images/3334/001-150x150.jpg','/images/3328/__Page_1-150x150.jpg','/images/3325/Karunaaaa-150x150.jpg','/images/3323/36._Amma_Photo_Present-150x150.jpg','/images/3319/AVN_FULLPPL_1097030g-150x150.jpg','/images/3314/Karunanidhi_1_2-150x150.jpg','/images/3299/May---11-b-150x150.jpg','/images/3290/simran-for-teenage-bonanza-jaya-tv-pressmeet-stills_3_103823123-150x150.jpg','/images/3279/unioncarbide_1-150x150.gif','/images/3275/Pramodkumar_2-150x150.jpg','/images/3271/Ninaiventhal-sticker-01-05may12-curves-150x150.jpg','/images/3268/cartoon-150x150.jpg','/images/3255/vazhakku-enn-150x150.jpg','/images/3247/locusts-swarm-615-150x150.jpg','/images/3241/Pramod_Kumar_IPS-150x150.jpg','/images/3240/56a8183c-277e-4003-a7b1-a0d37f9461ed-150x150.jpg','/images/3236/email-ad-may-150x150.jpg','/images/3233/268362-bangaru-laxman-150x150.jpg','/images/3225/IN21_JAYA_1296f-150x150.jpg','/images/3222/soni_sori-150x150.jpg','/images/3213/IMG_0691-150x150.jpg','/images/3206/n_t_s_7_Page_1-150x150.jpg','/images/3201/bhopal01-150x150.jpg','/images/3199/23042012032111-150x150.jpg','/images/3197/_DSC0152-150x150.jpg','/images/3195/Kalangher-150x150.jpg','/images/3193/anna-150x150.jpg','/images/3189/8_42-150x150.jpg','/images/3186/Bhopal_Gas_Tragedy-150x150.jpg','/images/3183/681x454-150x150.jpg','/images/3174/AVN_KARUNA_120812f-150x150.jpg','/images/3164/Sun_TV_Network_0-150x150.jpg','/images/3162/vta-150x150.jpg','/images/3158/kunal-150x150.jpg','/images/3156/koodamkulam4-150x150.jpg','/images/3155/jaya_868668f-150x150.jpg','/images/3151/high_court-150x150.jpg','/images/3147/LAT_WORLD_BOOK_DAY_796558a-150x150.jpg','/images/3145/DSC_5594-150x150.jpg','/images/3141/udayakumar_938372a-150x150.jpg','/images/3138/DSC_7407-150x150.jpg','/images/3128/koodankulam5-150x150.jpg','/images/3124/2803005006_458d357ba9_b-150x150.jpg','/images/3123/koodamkulam4-150x150.jpg','/images/3106/womenwithbaby-150x150.jpg','/images/3097/Asra_Garg_2-150x150.jpg','/images/3092/DSC_6896-150x150.jpg','/images/3088/chennaicitypictures_highcourt-150x150.jpg','/images/3080/bala-son-of20prrabaharan-150x150.jpg','/images/3074/DSC_0874-150x150.jpg','/images/3055/pandian1-150x150.jpg','/images/3037/DSC_5118-150x150.jpg','/images/3030/Tripathy_JK5-150x150.jpg','/images/3019/DSC_5599-150x150.jpg','/images/3016/DSC_6427-150x150.jpg','/images/3005/Kadhalil_sothapuvathu_eppadi-Love_failure_stills_2-150x150.jpg','/images/2999/2176838929_30c714cf74_b-150x150.jpg','/images/2993/avd-150x150.jpg','/images/2990/Salman_Khurshid_portrait-150x150.jpg','/images/2985/DSC_3886_2-150x150.jpg','/images/2972/jaya34309483-150x150.jpg','/images/2965/vijay_nanban_movie_release_posters_3910-150x150.jpg','/images/2955/18092011298-150x150.jpg','/images/2943/avd-150x150.jpg','/images/2930/DSC_0596-150x150.jpg','/images/2914/21TH_NAT_898781f-150x150.jpg','/images/2904/vant-150x150.jpg','/images/2893/IMG_5378-150x150.jpg','/images/2890/Arulnidhi_Mouna-Guru_Tamil_movie_first_look_wallpapers-150x150.jpg','/images/2882/Gopal_Nakkeeran-150x150.jpg','/images/2878/nakkheeran_gopal4-150x150.jpg','/images/2848/04_01_2012_001_030-150x150.jpg','/images/2830/a2-150x150.jpg','/images/2825/TN_Public_Servi12162-150x150.jpg','/images/2821/sasi1-150x150.jpg','/images/2816/MI4-banner004-150x150.jpg','/images/2804/sasi1-150x150.jpg','/images/2788/23-150x150.jpg','/images/2785/Times_of_India_08.02.2007-150x150.jpg','/images/2782/AgxNpUECMAEQl2l-150x150.jpg','/images/2779/jhana-sir-150x150.jpg','/images/2772/Jangid_IPS-150x150.jpg','/images/2770/324343-150x150.jpg','/images/2759/2011_8largeimg203_Aug_2011_050101467-150x150.jpg','/images/2747/DSC_5276-150x150.jpg','/images/2744/IMG_5136-150x150.jpg','/images/2736/42102608Deiva-Thirumagan-Movie-Stills-31-150x150.jpg','/images/2698/IMG_5143-150x150.jpg','/images/2659/Jun-22-d-150x150.jpg','/images/2640/IMG_1223-150x150.jpg','/images/2629/DSC_4400-150x150.jpg','/images/2615/July---11-d-150x150.jpg','/images/2607/praba_n-150x150.jpg','/images/2603/Pramod_Kumar_IPS-150x150.jpg','/images/2585/24348421-150x150.jpg','/images/2580/selvi334-150x150.jpg','/images/2565/2359843-150x150.jpg','/images/2561/Sep_10_a-150x150.jpg','/images/2555/July---20-d-150x150.jpg','/images/2546/Kingfisher_Airlines-150x150.jpg','/images/2534/AVN_KARUNA_120812f-150x150.jpg','/images/2529/23110203-150x150.jpg','/images/2527/J-Jayalalitha-150x150.jpg','/images/2523/julian-assange-julian-assange-politics-wikileaks-whistleblow-political-poster-1291419465-150x150.jpg','/images/2511/img3-1-150x150.jpg','/images/2508/TNF-Notice-150x150.jpg','/images/2504/IMG_2197-150x150.jpg','/images/2495/2881301161_b3ab45afdd_b-150x150.jpg','/images/2480/archive_9112-150x150.jpg','/images/2476/DSC_6640-150x150.jpg','/images/2472/13-150x150.jpg','/images/2468/IMG_0001-150x150.jpg','/images/2463/Kanimozhi_photo-150x150.jpg','/images/2460/DSC04708-150x150.jpg','/images/2454/selvi-serial1-150x150.jpg','/images/2449/DSC_5196-150x150.jpg','/images/2445/nalini_3_small-150x150.jpg','/images/2443/Rajendran_T_IPS-150x150.jpg','/images/2438/parama_notice_6-150x150.jpg','/images/2436/STALIN-WRAPPER-150x150.jpg','/images/2433/Dinakaran.com-Election_2011_18888491393-150x150.jpg','/images/2427/_MG_0229-150x150.jpg','/images/2418/DSC_0357-150x150.jpg','/images/2412/Jangid_IPS-150x150.jpg','/images/2401/DSC_6635-150x150.jpg','/images/2396/jaya3434-150x150.jpg','/images/2394/Senthilvelan__IPS-150x150.jpg','/images/2361/Thol.Thirumavalavan_-_2-150x150.jpg','/images/2355/A_Raja_0098-150x150.jpg','/images/2352/police-150x150.jpg','/images/2342/Jaffer_Jangid-150x150.jpg','/images/2338/27TH_JAFFAR_SAIT_734424e-150x150.jpg','/images/2337/nalini-story-2-150x150.jpg','/images/2332/a-raja2_20110202-150x150.jpg','/images/2322/high_court-150x150.jpg','/images/2315/078484-01-02-150x150.jpg','/images/2303/04_1-150x150.jpg','/images/2300/VIJAYAKANTH_2-150x150.jpg','/images/2294/chidambaram2-150x150.jpg','/images/2285/01.Photo-150x150.jpg','/images/2280/3130-1606-t-r-balu-150x150.jpg','/images/2263/06-150x150.jpg','/images/2261/IMG_8770-150x150.jpg','/images/2257/06_1-150x150.jpg','/images/2255/06-150x150.jpg','/images/2254/THSHK_PARAMAKUDI_1_779809g-150x150.jpg','/images/2242/ImageLoader-150x150.jpg','/images/2227/Natarajan-IAS-150x150.jpg','/images/2188/001-150x150.jpg','/images/2182/Madras-High-Court1-150x150.jpg','/images/2176/8-26-2011-22-vellore-prison-receives-commun-150x150.jpg','/images/2173/54257_BnHover-150x150.jpg','/images/2157/04ndgvb01_L-G_sends_128866f-150x150.jpg','/images/2155/blast16-16-150x150.jpg','/images/2144/REDDY_BROTHERS-150x150.jpg','/images/2128/06-150x150.jpg','/images/2127/par1-150x150.jpg','/images/2120/death-penalty-150x150.jpg','/images/2107/babbb04ed3f731d4_large-150x150.jpg','/images/2103/IMG_0502-150x150.jpg','/images/2094/7-19-2011-49-asset-abduction-complaint-agai-150x150.jpg','/images/2090/adfad-150x150.jpg','/images/2084/anna-hazare-150x150.jpg','/images/2078/pict13-150x150.jpg','/images/2065/pugalenthi-150x150.jpg','/images/2060/06-150x150.jpg','/images/2059/01.Photo-150x150.jpg','/images/2058/776013728_e0691574e0-150x150.jpg','/images/2051/06-150x150.jpg','/images/2044/justice_soumitra_sen_306x180_634491652260088811-150x150.jpg','/images/2036/2553493-150x150.jpg','/images/2033/5605168488_a49df5c585_b-150x150.jpg','/images/2023/ilaignan_audio_launch_stills_pics_11-150x150.jpg','/images/2019/03-150x150.jpg','/images/2017/06-150x150.jpg','/images/2014/John_Wilkes_Booth_wanted_poster_1-150x150.jpg','/images/2010/06-150x150.jpg','/images/2009/18730177-150x150.jpg','/images/2000/sunfinal_Page_1-150x150.jpg','/images/1992/IMG_0039-150x150.jpg','/images/1987/05-150x150.jpg','/images/1984/06-150x150.jpg','/images/1982/DSC_3886-150x150.jpg','/images/1978/DSC_0133_1-150x150.jpg','/images/1973/kalai-Asiriyar_13-150x150.jpg','/images/1966/Kamaraj_complaint_Page_1-150x150.jpg','/images/1963/form_2-3_pg_9-24_121-136_1_Page_12-150x150.jpg','/images/1953/l2010101430992-150x150.jpg','/images/1950/swamy-150x150.jpg','/images/1948/pic12-150x150.jpg','/images/1935/Rajamanickam-150x150.jpg','/images/1933/011-150x150.jpg','/images/1932/DSC_3838-150x150.jpg','/images/1921/06-150x150.jpg','/images/1919/20110727a_00310100703-150x150.jpg','/images/1917/jaffer-150x150.jpg','/images/1913/jaffer-house-150x150.jpg','/images/1910/4192193579_cd1facfd4f_b-150x150.jpg','/images/1898/21045843-150x150.jpg','/images/1895/Kalangher-150x150.jpg','/images/1884/1_1-150x150.jpg','/images/1881/ARV_ALAGIRI_4489e-150x150.jpg','/images/1873/05VBG_SIBAL_302673f-150x150.jpg','/images/1861/high_court-150x150.jpg','/images/1857/02-150x150.jpg','/images/1855/06-150x150.jpg','/images/1851/IPS_TRAN0001_1-150x150.jpg','/images/1847/KD_BRO_wrapper_1_Page_1-150x150.jpg','/images/1841/K14l-150x150.jpg','/images/1831/06-150x150.jpg','/images/1829/07-150x150.jpg','/images/1827/IMG-150x150.jpg','/images/1816/01.Photo-150x150.jpg','/images/1814/Kalangher-150x150.jpg','/images/1809/jaffer_sait_2-150x150.jpg','/images/1804/ARV_ALAGIRI_4489e-150x150.jpg','/images/1793/2280734-150x150.jpg','/images/1790/dayanidhi_maran-150x150.jpg','/images/1786/Ayyanar-Audio-Launch-546-150x150.jpg','/images/1780/IMG-150x150.jpg','/images/1776/2261415-150x150.jpg','/images/1774/dalitVillagers-150x150.jpg','/images/1767/manmohan-150x150.jpg','/images/1758/tr_ramasamy-150x150.jpg','/images/1746/Thangabalu_2-150x150.jpg','/images/1744/IMG_9359-150x150.jpg','/images/1742/31618218-150x150.jpg','/images/1740/32516578-150x150.jpg','/images/1738/thol-thirumavalavan-10-150x150.jpg','/images/1729/Chidam_baram-150x150.jpg','/images/1726/Rajasenthur_Pandian-150x150.jpg','/images/1724/avan-ivan2-150x150.jpg','/images/1722/323100-150x150.jpg','/images/1720/34250171-150x150.jpg','/images/1716/mk_kanimozhi_20110509-150x150.jpg','/images/1707/CPIM_Press_News_on_18.6.2011_1_Page_1-150x150.jpg','/images/1704/jaya2_20110614-150x150.jpg','/images/1699/candle-light-notice-NEW-150x150.jpg','/images/1694/4-150x150.jpg','/images/1691/meenakashi-150x150.jpg','/images/1689/Thalaivar_Kaditham_14-6-2011_Page_1-150x150.jpg','/images/1685/DSC_3886-150x150.jpg','/images/1681/rajathi_ammal._4-150x150.jpg','/images/1679/Mr_Kalanithi_Maran-150x150.jpg','/images/1675/pic07-150x150.jpg','/images/1673/24950328-150x150.jpg','/images/1670/2881301161_b3ab45afdd_b-150x150.jpg','/images/1662/Vasan_Publication_SH_2010_Page_5-150x150.jpg','/images/1659/RMK_1691_copy-150x150.jpg','/images/1653/rajathi-ammal.-3-150x150.jpg','/images/1651/Share_holders_Page_1-150x150.jpg','/images/1647/DSC_1238-small-150x150.jpg','/images/1639/IMG_0240-150x150.jpg','/images/1629/Jan_-_15_j-150x150.jpg','/images/1627/IMG_0001343-150x111.jpg','/images/1624/new-daya-150x150.jpg','/images/1614/IMG_0001-150x150.jpg','/images/1604/cinnakuthusi--150x150.jpg','/images/1597/invitation-1-150x150.jpg','/images/1595/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_05-150x150.jpg','/images/1583/DSC_0414-150x150.jpg','/images/1571/Wrapper_Final-150x150.jpg','/images/1567/2405269796_0e12e55bb6_b-150x150.jpg','/images/1558/tihar-jail-150x150.jpg','/images/1549/image001-1-150x150.jpg','/images/1545/Kanimozhi2_20110520-150x150.jpg','/images/1531/Rajanderan._10-150x150.jpg','/images/1523/may18-150x150.jpg','/images/1521/jaya_win_1a-150x150.jpg','/images/1519/20110115_secretriatechenna-copy-150x150.jpg','/images/1511/3335459439_154e7e47cb_o-150x150.jpg','/images/1508/kanimozhi_low_res-150x150.jpg','/images/1506/25045703-150x150.jpg','/images/1501/Gopal-nakkeran6-150x150.jpg','/images/1499/IMG_0001-150x150.jpg','/images/1498/karunanithi1-150x150.jpg','/images/1496/30pic1-150x150.jpg','/images/1482/150810-2-150x150.jpg','/images/1475/Kalangher-150x150.jpg','/images/1467/mk_kanimozhi_20110509-150x150.jpg','/images/1437/madras-high-court-150x150.jpg','/images/1432/mm_singh_a_raja_20101129-150x150.jpg','/images/1414/SLA_war_crime_on_LTTE_Ramesh-150x150.jpg','/images/1409/dk_veeramani_statement-150x150.jpg','/images/1407/rad-150x150.jpg','/images/1402/34451843-150x150.jpg','/images/1399/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_03-150x150.jpg','/images/1397/The-Hindu-150x150.jpg','/images/1388/Photo00083-150x150.jpg','/images/1385/70b35ea697e2c57d67e9c56c59d9-grande-150x150.jpg','/images/1375/asiriyar_arikkai_Page_1-150x150.jpg','/images/1372/001-150x150.jpg','/images/1371/P4-150x150.jpg','/images/1368/savukku_image-150x150.jpg','/images/1365/KR13THOGAIMALAI_550476f-150x150.jpg','/images/1357/MAA_9164_copy-150x150.jpg','/images/1355/00013-150x150.jpg','/images/1351/karunanithi-150x150.jpg','/images/1343/Appeal_to_voters_Page_1-150x150.jpg','/images/1339/22434109-150x150.jpg','/images/1337/kulla-narikkootam1bala-cartoons--150x150.jpg','/images/1329/32311500-150x150.jpg','/images/1327/4286899457_573c46a83d_b-150x150.jpg','/images/1324/karunanidhi_20080805-150x150.jpg','/images/1322/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_03-150x150.jpg','/images/1303/2251343-150x150.jpg','/images/1293/27cm7-150x150.jpg','/images/1277/24832296-150x150.jpg','/images/1275/18cm14-150x150.jpg','/images/1271/24458359-150x150.jpg','/images/1266/IMG_9359-150x150.jpg','/images/1258/Thangabalu_2-150x150.jpg','/images/1254/23721734-150x150.jpg','/images/1244/l2007052413423-150x150.jpg','/images/1242/22914734-150x150.jpg','/images/1250/22nov_dmk-150x150.jpg','/images/1239/ARV_ALAGIRI_4489e-150x150.jpg','/images/1234/43139359-150x150.jpg','/images/1232/MAA_3425-copy-150x150.jpg','/images/1212/31354906-150x150.jpg','/images/1202/karunanidhi_1-150x150.jpg','/images/1197/22840500-150x150.jpg','/images/1183/2552915-150x150.jpg','/images/1179/1-24_Page_24-150x150.jpg','/images/1170/karuna_big1-150x150.jpg','/images/1160/Kalangher-150x150.jpg','/images/1155/2465062-150x150.jpg','/images/1153/003web-150x150.jpg','/images/1150/IMG_9359-150x150.jpg','/images/1144/1-24_Page_14-150x150.jpg','/images/1133/24711937_1-150x150.jpg','/images/1131/cartoon-for-Jaf-web-150x150.jpg','/images/1125/25053375-150x150.jpg','/images/1116/adfads-150x150.jpg','/images/1106/1-24_Page_04-150x150.jpg','/images/1099/DSC_9063-150x150.jpg','/images/1090/IMG_0006-150x150.jpg','/images/1061/681x454-150x150.jpg','/images/1052/DSC_0159-150x150.jpg','/images/1043/25621578-150x150.jpg','/images/1040/jaffer_sait_2-150x150.jpg','/images/1038/32536265-150x150.jpg','/images/1033/karuna_thiruma-150x150.jpg','/images/1029/1-2-150x150.jpg','/images/1027/2176838929_30c714cf74_b-150x150.jpg','/images/1020/DSC_9069-150x150.jpg','/images/1013/32625156-150x150.jpg','/images/1005/jiwal1-150x150.jpg','/images/1004/33049687-150x150.jpg','/images/1002/4293346778_21fb94341d_o-150x150.jpg','/images/996/sathik-sucide1-150x150.jpg','/images/986/2473878-150x150.jpg','/images/967/DSC_1514-150x150.jpg','/images/957/DSC_3521-150x150.jpg','/images/952/information_commissoners-150x150.jpg','/images/948/22830796-150x150.jpg','/images/944/DHINATHANTHI_22_10_10-150x150.jpg','/images/931/building_strong_basement_we-150x150.jpg','/images/926/21811546-150x150.jpg','/images/923/5_1-150x150.jpg','/images/920/asiriyar_arrikkai_2-150x150.jpg','/images/915/1580083773_262b38544b_b-150x150.jpg','/images/912/amithab_kalaignar-150x150.jpg','/images/907/DSC_9069-150x150.jpg','/images/899/33754218-150x150.jpg','/images/896/2599182705_409ba8dba9_b-150x150.jpg','/images/893/muthukumar1-150x150.jpg','/images/890/Karunanidhi_with_3rd_wife_Rajathi_Ammal_by_HKR-150x150.jpg','/images/885/RMK_1693_copy-150x150.jpg','/images/873/31233750-150x150.jpg','/images/871/2-150x150.jpg','/images/869/asiriyar_arrikkai-150x150.jpg','/images/864/VIJAYAKANTH-150x150.jpg','/images/862/2265162-150x150.jpg','/images/856/a_raja_20110221-150x150.jpg','/images/849/savukku_image-150x150.jpg','/images/840/DSC_0463-150x150.jpg','/images/834/congress-150x150.jpg','/images/830/sff_bmp-150x150.jpg','/images/828/2534562-150x150.jpg','/images/822/IMG_0007-150x150.jpg','/images/815/1367353493_c766de17b0-150x150.jpg','/images/808/010-150x150.jpg','/images/806/17_02_2011_011_0051-150x150.jpg','/images/802/33121937-150x150.jpg','/images/796/tamilmakkalkural_blogspot_kanimozhi_rajapaksa-150x150.jpg','/images/789/3163978-150x150.jpg','/images/787/30825321385bbbd8505db-150x150.jpg','/images/779/001-150x150.jpg','/images/778/11-150x150.jpg','/images/762/shahid-balwa-150x150.jpg','/images/752/Feb_10_a1-150x150.jpg','/images/749/RAJA3-150x150.jpg','/images/740/2451624538_337648c0cd_o-150x150.jpg','/images/730/Malathy_S-150x150.jpg','/images/729/Malathy_S-150x150.jpg','/images/728/Malathy_S-150x150.jpg','/images/724/2183015-150x150.jpg','/images/722/Sonia-Gandhi_1-150x150.jpg','/images/718/Jaffar_Sait_2-150x150.jpg','/images/712/05_02_2011_011_024-150x150.jpg','/images/709/3947531-150x150.jpg','/images/707/karunanidhi_birthday_3_june_2010-150x150.jpg','/images/706/karunanidhi_birthday_3_june_2010-150x150.jpg','/images/703/Untitled-2-150x150.jpg','/images/702/167771_1565149614998_1423116401_31329918_469816_n-150x150.jpg','/images/701/167771_1565149614998_1423116401_31329918_469816_n-150x150.jpg','/images/698/aaa1-150x150.jpg','/images/696/savukku_image_2-150x150.jpg','/images/692/Feb_02_l-150x150.jpg','/images/690/Feb_02_k-150x150.jpg','/images/687/ar-150x150.jpg','/images/684/thukkiandi-150x150.jpg','/images/676/tamanna_spicy_23_11_09__6_-150x150.jpg','/images/668/52_ramadass1-150x150.jpg','/images/646/kamaraj1-150x150.jpg','/images/635/IMG_8791-150x150.jpg','/images/633/DSC_8069-150x150.jpg','/images/625/sunil_1-150x150.jpg','/images/620/Jayakanthan_Writer-150x150.jpg','/images/618/3216875-150x150.jpg','/images/616/jaffer-150x150.jpg','/images/605/32144140-150x150.jpg','/images/603/Jan_-_22_g-150x150.jpg','/images/600/Kamaraj_3-150x150.jpg','/images/593/Tiruvengimalai_saravanan-150x150.jpg','/images/587/ARV_ALAGIRI_4489e-150x150.jpg','/images/580/pressmeet-blore-150x150.jpg','/images/576/Baskaran_IAS-150x150.jpg','/images/573/Jan_-_15_c-150x150.jpg','/images/566/25THAZHAGIRI_80842e-150x150.jpg','/images/560/Inv_2011_6-150x150.jpg','/images/555/Inv_2011_3-150x150.jpg','/images/536/Jan_-_15_e-150x150.jpg','/images/527/1-150x150.jpg','/images/526/illaignan_Audio-Launch15-150x150.jpg','/images/519/25749828-150x150.jpg','/images/517/va.manikandan-150x150.jpg','/images/515/Jan_12_k1-150x150.jpg','/images/513/jaffer-150x150.jpg','/images/509/image013-150x150.jpg','/images/499/remembering-kothamangalam-subbu07-150x150.jpg','/images/494/IMG_9577-150x150.jpg','/images/492/Kaspar_2-150x150.jpg','/images/488/2533551202_1bb302a3dd_b-150x150.jpg','/images/483/ravikumar_tiruma-150x150.jpg','/images/480/KANIMOZHI_10674f-150x150.jpg','/images/473/Sunil_kumar-150x150.jpg','/images/467/vairamuthu3111_339-150x150.jpg','/images/460/Wilson-150x150.jpg','/images/458/IMG_0003-150x150.jpg','/images/456/IMG_9442-150x150.jpg','/images/449/savukku_image-150x150.jpg','/images/443/Rajendran_T_IPS-150x150.jpg','/images/438/ANIL-150x150.jpg','/images/425/2638052737_4e2bd8d72e-150x150.jpg','/images/418/350l2xd-150x150.jpg','/images/412/cake-150x150.jpg','/images/402/1-150x150.jpg','/images/392/Jaffar_Sait_2-150x150.jpg','/images/387/1_11600-150x150.jpg','/images/384/IMG_9276-150x150.jpg','/images/375/radhakrishnan-150x150.jpg','/images/373/IMG_0001-150x150.jpg','/images/369/DSC_09123-150x150.jpg','/images/362/Jaffar_Sait_2-150x150.jpg','/images/356/sunil_new-150x150.jpg','/images/354/2-150x150.jpg','/images/352/ma_01.jpg','/images/350/iaisai.jpg','/images/348/Jaffar_Sait_2-150x150.jpg','/images/340/radhakrishna1n-150x150.jpg','/images/325/rasathi_ammal-150x150.jpg','/images/307/IMG_9149-150x150.jpg','/images/300/maveerar-150x150.jpg','/images/296/aram-150x150.jpg','/images/286/a-150x150.jpg','/images/284/a-150x150.jpg','/images/283/mm_singh_a_raja_20101129-150x150.jpg','/images/275/j1-150x150.jpg','/images/273/4060247467_d225c319a2_o-150x150.jpg','/images/270/raja-768204-150x150.jpg','/images/256/Raja_2-150x150.jpg','/images/244/9623d2da9fcc8fd75272-150x150.jpg','/images/239/Sylendra-Babu-Handling-Python-2-150x150.jpg','/images/229/encounter_284024f-150x150.jpg','/images/226/317_0052-150x150.jpg','/images/212/Jaffar_Sait_2-150x150.jpg','/images/208/KAshokVardhanShettyIAS-150x150.jpg','/images/198/young_vasanthi-150x150.jpg','/images/192/Kalaignar_87_Book_Release_Invitation_02-150x150.jpg','/images/177/justicegovindarajan.jpg','/images/175/sunil_new-150x150.jpg','/images/167/letikha_saran-150x150.jpg','/images/165/1karuna_croc-150x150.jpg','/images/160/Koose_Muniswamy_Veerappan_con_mitra-150x150.jpg','/images/153/tamilsworld1943619545-150x150.jpg','/images/149/800px-tamil-tigers-flagsvg-150x150.png','/images/140/letikha_saran-150x150.jpg','/images/127/10wimur-copy-150x150.jpg','/images/124/2-150x150.jpg','/images/122/1580083773_262b38544b_b-150x150.jpg','/images/118/kalanidhi-dayanidhi-maran-150x150.jpg','/images/108/01tvko_Chattambi_Sw_172825f-150x150.jpg','/images/104/04_10_2010_004_010-150x150.jpg','/images/99/sunil_2-150x150.jpg','/images/79/IMG_0001343-150x111.jpg','/images/73/pandi_2-150x150.jpg','/images/68/NPVJ-150x150.jpg','/images/63/Raraja_detail-150x150.png','/images/58/IMG-150x150.jpg','/images/54/Shanti20Bhushan-150x150.jpg','/images/44/cowboy_with_whip-150x150.png','/images/42/11-150x150.jpg','/images/37/1-150x150.jpg','/images/33/sunil_2-150x150.jpg','/images/29/madras-high-court-150x150.jpg','/images/25/IN21_DGP_8951f-150x150.jpg','/images/15/a-150x150.jpg','/images/7444/IMG1-150x150.jpg','/images/7445/Sun_TV_Pictures_COO_Hansraj_Saxena1-150x150.jpg','/images/7447/jagathratchagan_607123374-150x150.jpg','/images/7448/Joseph-Felix-150x150.jpg','/images/7450/cartoon-150x150.jpg','/images/7452/Kamaraj-150x150.jpg','/images/7453/radhakrishna1n-150x150.jpg','/images/7454/dmk6-150x150.jpg','/images/7455/03nxg_p6_7_ips_gllsb08c103nxg_rajendran1-150x150.jpg','/images/7456/Jaffer7878-1--150x150.jpg','/images/7458/DSC05456-150x150.jpg','/images/7457/radhakrishna1n1-150x150.jpg','/images/7460/radha1-150x150.jpg','/images/7459/CM150210_113-150x150.jpg','/images/7461/IMG_00116-150x150.jpg','/images/7463/secretariat-150x150.jpg','/images/7462/Thiruma-new1-5B1-5D-150x150.jpg','/images/7464/11-150x150.jpg','/images/7465/23-150x150.jpg','/images/7467/IMG_8640-150x150.jpg','/images/7468/final_on_11-150x150.jpg','/images/7469/11_28_2007_15_12_15_inv-2520meet-2520blore-25202-150x150.jpg','/images/7472/jafer-11-150x150.jpg','/images/7473/2008111550030101-150x150.jpg','/images/7474/237px-Wikileaks_logo_svg-150x150.png','/images/7475/2451624538_337648c0cd_o-150x150.jpg','/images/7477/jaffer-sait3-150x150.jpg','/images/7478/sankar-with-policc1-150x150.jpg','/images/7481/js-and-jiwal-150x150.jpg','/images/7482/0033-150x150.jpg','/images/7483/IMG_8431-150x150.jpg','/images/7484/gaspar-150x150.jpg','/images/7485/karunanidhi_575035-150x150.jpg','/images/7487/414945982_fe6aa23fda_o-150x150.jpg','/images/7489/kaspar-150x150.jpg','/images/7490/DSC02753-150x150.jpg','/images/7493/2006051713740401-150x150.jpg','/images/7492/karupaiya-150x150.jpg','/images/7494/IMG_8246-150x150.jpg','/images/7498/Bagath-Singh-before-he-was-arrested-150x150.jpg','/images/7499/k2-150x150.jpg','/images/7500/swamiji1-150x150.jpg','/images/7501/IMG_8225-150x150.jpg','/images/7502/wctc_t-150x150.jpg','/images/7504/LAT_STALIN_19564a-150x150.jpg','/images/7505/Ramadas-150x150.jpg','/images/7507/52_ramadass1-150x150.jpg','/images/7508/k1-150x150.jpg','/images/7510/kp-ramalingam-150x150.jpg','/images/7512/r-m-veerappan-17809-150x150.jpg','/images/7511/new-secretariat-building-chennai-photos4-150x150.jpg','/images/7513/KARUNANIDHI_M_8934e-150x150.jpg','/images/7514/political-cyclone-150x150.jpg','/images/7516/IMG_0001343-150x111.jpg','/images/7517/1-150x150.jpg','/images/7518/AVN16_KETAN_12683e-150x150.jpg','/images/7519/N-2520Srinivasan222-150x150.jpg','/images/7520/a_raja_ye_20081224-150x150.jpg','/images/7521/44-150x150.jpg','/images/7522/Parliament-150x150.jpg','/images/7523/INDIA_-_SRI_LANKA_-F-_0518_-_Sonia_Gandhi_e_Karunanidhi-150x150.jpg','/images/7524/2005042806200401-150x150.jpg','/images/7528/19965_311284978089_655808089_3404716_7442637_n-150x150.jpg','/images/7529/IMG_5603-150x150.jpg','/images/7532/police-final-sub_02-150x150.jpg','/images/7533/nalini_680-150x150.jpg','/images/7534/MK_5187f-150x150.jpg','/images/7536/angadi-theru-tamil-movie-3-765886-150x150.jpg','/images/7537/KARUNANIDHI_8799e-150x150.jpg','/images/7538/3-150x150.jpg','/images/7539/karunanidhi_20081124-150x150.jpg','/images/7541/Kvinde9-150x150.jpg','/images/7542/9-150x150.jpg','/images/7543/aaa-150x150.jpg','/images/7544/Image0122-150x150.jpg','/images/7545/CM150210_113-150x150.jpg','/images/7546/4199888090_959cd42628-150x150.jpg','/images/7547/letter-1-150x150.jpg','/images/7548/MadrasHighCourtManuNeedhiCholanStatue-150x150.jpg','/images/7549/IMG_7530-150x150.jpg','/images/7552/44-150x150.jpg','/images/7553/untitled-150x150.jpg','/images/7554/Dhirubhai_Ambani-150x150.gif','/images/7555/nalini-150x150.jpg','/images/7559/Jyoti_Basu-150x150.jpg','/images/7558/fbGYtR-150x150.jpg','/images/7560/karu-150x150.jpg','/images/7561/Image0062-150x150.jpg','/images/7562/kalaignar-tv-1_0003-150x150.jpg','/images/7563/4-150x150.jpg','/images/7564/Surya-02333-150x150.jpg','/images/7565/blog_logo1-150x150.jpg','/images/7566/C2-AA-C3-AC-C2-AE-C3-B0-C2-A3-C2-A4-C2-AE-C3-B5-C2-AE-150x150.jpg','/images/7567/arnold-karuna-150x150.jpg','/images/7568/Lakshmi-150x150.jpg','/images/7569/tblgeneralnews_469260811811-150x150.jpg','/images/7570/untitled-150x150.jpg','/images/7571/10-150x150.jpg','/images/7573/final-on-11-150x150.jpg','/images/7574/1000-rupees-150x150.jpg','/images/7575/timemagazinecover-150x150.jpg','/images/7576/feb09_04cartoon1-150x150.jpg','/images/7577/Babri-mosque-interior-150x150.jpg','/images/7578/kalam-pulam-150x150.jpg','/images/7579/AnilAmbani-150x150.jpg','/images/7580/1_3-150x150.jpg','/images/7581/security_advisor_narayanan-150x150.jpg','/images/7582/11-150x150.jpg','/images/7583/dmk1-150x150.jpg','/images/7584/december-10-notice-150x150.jpg','/images/7587/anonymous_woman_lightbox-150x150.jpg','/images/7585/photo1235-150x150.jpg','/images/7588/13_11_2009_001_021_013-150x150.jpg','/images/7589/20091101yeddy1-150x150.jpg','/images/7590/bribery-150x150.png','/images/7591/ind_t2-150x150.jpg','/images/7592/2008081558910701-150x150.jpg','/images/7593/2-150x150.jpg','/images/7594/photos-255Ccoprk.jpg','/images/7595/2007011510640401-150x150.jpg','/images/7596/a_raja_ye_20081224-150x150.jpg','/images/7597/anniyan026gq-150x150.jpg','/images/7598/24539890-150x150.jpg','/images/7599/2008020550080301-150x150.jpg','/images/7601/manmohan_singh_4001-150x150.jpg','/images/7600/argentina_panel_27_03_08-150x150.jpg','/images/7602/Image0065-150x150.jpg','/images/7603/Nalini-150x150.jpg','/images/7604/tblfpnnews_65835207701-150x150.jpg','/images/7605/27jaya.jpg','/images/7606/ANNA-2520-2520Approved-2520Photo-150x150.jpg','/images/7607/08_09_2009_003_004_009-104x150.jpg','/images/7609/2009031958090102.jpg','/images/7610/aaaaaaaaaaaaaaaaaaaa-150x150.jpg','/images/7611/thiruma-jail2-150x150.jpg','/images/7612/IMG_6540-150x150.jpg','/images/7613/18170373-146x150.jpg','/images/7615/ramaswami_naicker-150x150.jpg','/images/7616/Nalini-150x150.jpg','/images/7617/Nalini1-150x150.jpg','/images/7618/rrj-125x150.jpg','/images/7621/South_Asian_Communist_Banner-150x150.png','/images/7622/Sivajisilverjublie110108_33-150x150.jpg','/images/7625/2-150x150.jpg','/images/7626/E-150x150.jpg','/images/7627/m-karunanidhi-sonia-gandhi-rahul-gandhi-dayanidhi-maran-2009-5-19-11-53-40-150x150.jpg','/images/7629/rasaaathi-150x150.jpg','/images/7628/govt-servants-150x150.jpg','/images/7630/attachment5-150x150.jpeg','/images/7631/cartoon-1-150x150.jpg','/images/7634/05-150x150.jpg','/images/7633/vadugu-150x150.jpg','/images/7636/IMG_5648-150x150.jpg','/images/7637/vadugu1-150x150.jpg','/images/7639/kalais-150x150.jpg','/images/7641/anna-150x150.jpg','/images/7643/DSC07086-150x150.jpg','/images/7644/slide-11-150x150.jpg','/images/7646/anniyan026gq-150x150.jpg','/images/7647/poongo-2520resugn-147x150.jpg',''];
  var maxSlides=slides.length>6?6:slides.length-1;

  for(var i=0;i<maxSlides;i++)
    {
      $scope.slides.push({
        image:slides[i]
      });
    }

  /*$scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'https://placekitten.com/g/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
      ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }*/
});

posts.controller('PostListController', function($scope, $sce) {
  $scope.filteredPosts = [];
  $scope.pagePosts = [];
  $scope.categories = ['default',''];
  $scope.itemsPerPage = 10;
  $scope.currentPage = 1;
  $scope.filteredCategory="";

  /*$scope.$on('resetPager', function(event, args) {
    $scope.currentPage = 1;
  });*/

  $scope.setCategoryFilter=function(c)
  {
    $scope.filteredCategory=c;
    $scope.currentPage = 1;
    $scope.figureOutPostsToDisplay();
    //$scope.$broadcast('resetPager', null);
  };

  $scope.filterCategory=function(post)
  {
    return $scope.filteredCategory==""||post.categories[0]==$scope.filteredCategory;
  };

  $scope.makePosts = function() {
    $scope.posts = [];
	
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மின்சாரக் கனவுகள்'),
            thumbnail:'/images/9015/22THVISIONTAMILNAD_1764909g-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/11/25/post9015.html",
            publishDate:"Nov 25, 2014",
            summary:$sce.trustAsHtml("&#8220;அந்த ஃபேனை ஆப் பண்ணிட்டுப் போயித் தொலையேன்டா.. கரண்டு பில் எவ்வளவு வருது தெரியுமா ?&#8221; என்ற இந்தக் குரல் பல்வேறு நடுத்தர வர்க்கங்களின் வீடுகளில் ஒலிக்கும் குரல். ஊடகங்களில் மின் கட்டண உயர்வு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறை செல்லும் சீமாட்டி'),
            thumbnail:'/images/8985/45aa80e7db7c49d5a0ac6a43f7d23f6d-e1d5871c63b14938b5946c73ccd00c34-0-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/11/23/post8985.html",
            publishDate:"Nov 23, 2014",
            summary:$sce.trustAsHtml("மனிதனின் தேவைகளுக்கு இந்த உலகில் போதுமானவைகள் உள்ளன. ஆனால், அவன் பேராசைக்கு போதுமானவைகள் இல்லை என்றார் காந்தி.&#8220;There is a sufficiency in the world for man&#8217;s need but not for..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலே உன் விலை என்ன ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/11/17/post8982.html",
            publishDate:"Nov 17, 2014",
            summary:$sce.trustAsHtml("ஊழல் என்ற புற்றுநோய் நம் சமுதாயத்தின் முக்கிய உறுப்புக்களை தின்று விட்டது. ஏற்கனவே அது போதுமான சேதத்தை ஏற்படுத்தி விட்டது. பொது ஊழியர்கள் ஊழல் பேர்வழிகளாக இருந்தால், சமுதாயத்தின் கட்டுமானமே ஆட்டம் கண்டு, அரசின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இருட்டறையில் உள்ளதடா தமிழகம்&#8230; &#8230; &#8230;. &#8230;'),
            thumbnail:'/images/8965/GNANADESIKAN-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/11/08/post8965.html",
            publishDate:"Nov 8, 2014",
            summary:$sce.trustAsHtml("“இருட்டறையில் உள்ளதடா உலகம். சாதி இருக்கின்றதென்பானும் இருக்கின்றானே” என்றார் பாரதிதாசன். ஆனால், நாம் இப்போது பாட வேண்டியது அந்தப்பாடலை அல்ல. இருட்டறையில் உள்ளதடா தமிழகம், ஞானதேசிகன் என்பானும் இருக்கின்றானே என்பதுதான்.ஞானதேசிகன் ஐஏஎஸ்கடந்த 10 ஆண்டுகளாகவே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரணித்த கடவுள்.'),
            thumbnail:'/images/8953/Photo-01-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/11/06/post8953.html",
            publishDate:"Nov 6, 2014",
            summary:$sce.trustAsHtml("தங்களின் அனைத்து பிரச்சினைகளில் இருந்தும் கடவுள் நம்மை விடுவிப்பார், காப்பாற்றுவார் என்றே கடவுள் நம்பிக்கை உள்ளவர்கள் நம்புகின்றனர்.   கடவுளின் மீது முழு நம்பிக்கையை வைக்கின்றனர்.   கடவுள் நம்மை உய்விப்பார் என்று பிடிவாதமாக நம்பிக்கை கொள்கிறார்கள். ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வருக! வருக! வைகுண்டராஜா&#8230;&#8230; !!!!'),
            thumbnail:'/images/8930/Untitled-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/10/29/post8930.html",
            publishDate:"Oct 29, 2014",
            summary:$sce.trustAsHtml("தமிழகத்தில் இருக்கும் செய்தி சேனல்கள் போதாது என்று, வரும் அக்டோபர் 30 முதல் நியூஸ் 7 என்று ஒரு செய்தித் தொலைக்காட்சி தொடங்கப்பட உள்ளது. இன்று இந்தியாவில் உள்ள ஊடகங்களின் நிலைமை என்னவென்பது உங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாற்றத்தைத் தவிர மாறாதது ஜெயலலிதா மட்டுமே &#8211; பாகம் 3'),
            thumbnail:'/images/8917/480-150x150.jpe',
            categories:['default',''],
            href:"/default/2014/10/25/post8917.html",
            publishDate:"Oct 25, 2014",
            summary:$sce.trustAsHtml("மாற்றத்தைத் தவிர மாறாதது ஜெயலலிதா கட்டுரைகளின் முதல் மற்றும் இரண்டாம் பாகங்களை படிக்காதவர்கள் படித்து விடுங்கள்.அரசு ஊழியர்கள் மட்டுமில்லாமல், சமூகத்தில் அத்தனை தரப்பினரையும் பகைத்துக் கொண்டார் ஜெயலலிதா. மத்திய அரசில் பிஜேபி மற்றும் திமுக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மீண்டு(ம்) எழுந்தோம்.'),
            thumbnail:'/images/8907/savukku-image-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/10/22/post8907.html",
            publishDate:"Oct 22, 2014",
            summary:$sce.trustAsHtml("பல்வேறு தடைகளுக்கு பிறகு, சிறிது காலம், முழுமையான இணையதளமாக இயங்க முடியாமல் ப்ளாக் வடிவத்தில் இயங்கி வந்தோம். ஆனாலும், நமது பணி தொய்வடையவில்லை. ப்ளாக் வடிவத்திலேயே பல்வேறு முக்கியமான ஊழல்களை அம்பலப்படுத்தினோம். தற்சமயம், பல..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாற்றத்தைத் தவிர மாறாதது ஜெயலலிதா மட்டுமே &#8211; பாகம் 2'),
            thumbnail:'/images/7412/flowers_2162096g-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/10/19/post7412.html",
            publishDate:"Oct 19, 2014",
            summary:$sce.trustAsHtml("&nbsp;ஜுன் 30, 2001. இந்த நாளை தமிழகம் மறந்திருக்க முடியாது. திமுக தலைவர் கருணாநிதி நள்ளிரவில் கைது செய்யப்பட்ட நாள் அது.&nbsp;தி.மு.க.ஆட்சியில் மேம்பாலம் கட்டியதில் ஊழல் என்று சி.பி.சி.ஐ.டி. போலீசாரால் இரவோடு இரவாக எப்.ஐ.ஆர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாற்றத்தைத் தவிர மாறாதது ஜெயலலிதா மட்டுமே.'),
            thumbnail:'/images/7413/subramaniam_3_100211045443-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/10/17/post7413.html",
            publishDate:"Oct 17, 2014",
            summary:$sce.trustAsHtml("1991-1996 ஜெயலலிதா ஆட்சி&nbsp;குறித்து, சென்றுவா மகளேசென்று வா&nbsp;என்ற கட்டுரையில் &nbsp;விரிவாக அலசினோம். அதில் விடுபட்ட&nbsp;சில பகுதிகளை&nbsp;பார்த்து விட்டு&nbsp;2001 ஜெயலலிதா ஆட்சியை&nbsp;அலசுவோம்.சுப்ரமணியன் சுவாமிக்கும்&nbsp;ஜெயலலிதாவுக்கும் மோதல்&nbsp;ஏன் ஏற்பட்டது என்பதுபலருக்கு புரியாத&nbsp;புதிராக இருக்கிறது.&nbsp; சாதி அடிப்படையிலும், மத அடிப்படையிலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எத்தனை கோடி இன்பங்கள் வைத்தாய் இறைவா ?'),
            thumbnail:'/images/7415/E0-AE-AE-E0-AF-88-E0-AE-95-E0-AF-8D-E0-AE-95-E0-AF-87-E0-AE-B2-E0-AF-8D-E0-AE-95-E0-AF-81-E0-AE-A9-E0-AF-8D-E0-AE-B9-E0-AE-BE-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/10/03/post7415.html",
            publishDate:"Oct 3, 2014",
            summary:$sce.trustAsHtml("27 செப்டம்பர் 2014. &nbsp;இந்த நாளை ஜெயலலிதா எப்படி அணுகியிருப்பாரோ தெரியவில்லை, ஒரு மாதமாகவே இரவு உறங்க முடியவில்லை. துளியும் உறக்கம் இல்லாமல் பல்வேறு ஊடகவியலாளர்கள் மற்றும் அதிகாரிகளோடு இரவு நெடு நேரம் விவாதித்துக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சென்று வா மகளே&#8230; சென்று வா.'),
            thumbnail:'/images/7416/jjsasikalanakeeran-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/09/26/post7416.html",
            publishDate:"Sep 26, 2014",
            summary:$sce.trustAsHtml("18 ஆண்டு கால சரித்திரத்தின் இறுதிப்பக்கங்கள் எழுதப்பட்டுக் கொண்டிருக்கின்றன. 27 செப்டம்பர் 2014 ஜெயலலிதா மற்றும் தமிழகத்தின் தலையெழுத்தி திருத்தி எழுதப்பட உள்ளது.&nbsp;பத்தி பத்தியாக எழுதப்பட வேண்டிய இந்த சரித்திரம், என்ன காரணத்தாலோ, ஊடகங்களால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சி.டி.செல்வம் என்ற மொள்ளமாறி  &#8211; பாகம் இரண்டு.'),
            thumbnail:'/images/7417/RK_Agrawal-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/09/17/post7417.html",
            publishDate:"Sep 17, 2014",
            summary:$sce.trustAsHtml("இந்திய அரசியல் அமைப்புச் சட்டத்தை உருவாக்கிய நமது முன்னோர்கள், நீதிபதிகளின் மீது நடவடிக்கையே எடுக்க இயலாத அளவுக்கு, மிக மிக சிக்கலான ஒரு பாதுகாப்பை உருவாக்கி வைத்துள்ளார்கள்.&nbsp;&nbsp;&nbsp;இது எதற்காக என்றால், நீதிபதிகள் தவறான குற்றச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சி.டி.செல்வம் என்ற மொள்ளமாறி.'),
            thumbnail:'/images/7418/15MA_COURTDGL_1686169f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/09/15/post7418.html",
            publishDate:"Sep 15, 2014",
            summary:$sce.trustAsHtml("சவுக்கு இணையதளம், தொடங்கிய நாள் முதலாகவே, அதிகார வர்க்கத்துக்கு, மிகப்பெரிய சவாலாகவே இருந்து வந்துள்ளது.&nbsp;&nbsp; ஐஏஎஸ் அதிகாரிகள், ஐபிஎஸ் அதிகாரிகள், அமைச்சர்கள், நீதிபதிகள், வழக்கறிஞர்கள், என்று அதிகாரம் பொருந்திய எந்த அமைப்பையும் சவுக்கு விட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கதாநாயகர்கள்.'),
            thumbnail:'/images/7419/savukku-2Bimage-2B-2--150x150.jpg',
            categories:['default',''],
            href:"/default/2014/09/08/post7419.html",
            publishDate:"Sep 8, 2014",
            summary:$sce.trustAsHtml("ஒரு இணையதளம்நடத்துவதும், அதற்காகபெரும் பிரச்சினைகளைசந்திப்பதும், வீட்டில்இருக்க முடியாமல்தலைமறைவு வாழ்க்கைவாழ்வதும், அதைநடத்துபவருக்கு இயல்பாகஇருக்கலாம். ஆனால், அவருக்கு உதவிசெய்ய ஒருசர்வரை நடத்துபவருக்கு இது இயல்புஅல்ல.&nbsp;&nbsp;&nbsp; எவனோ ஒருவன், சமுதாயத்துக்காக ஏதோசெய்து கொண்டிருக்கிறான், அவனுக்கு நம்மால்ஆன உதவியைசெய்வோம் என்றுஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருட்டுச் சாமியாரும், தொள்ளாயிரம் அடிமைகளும்'),
            thumbnail:'/images/7420/1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/09/03/post7420.html",
            publishDate:"Sep 3, 2014",
            summary:$sce.trustAsHtml("கடந்த வருடம் மூன்று &nbsp;தேசியவிருது &nbsp;வாங்கிய &#8221; தங்கமீன்கள் &#8221; என்ற திரைப்படத்தில் நாயகன் வறுமையிலும் தனது அன்பு மகளை எப்படி பொக்கிஷமாக கருதி சிறப்பாக உருவாக்க முயற்சிக்கிறான் என்பதே கதை.&nbsp;மேற்கொண்டு நம் பார்க்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Jayalalitha in Kurta'),
            thumbnail:'/images/7421/NarendraModi-621x414-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/09/02/post7421.html",
            publishDate:"Sep 2, 2014",
            summary:$sce.trustAsHtml("With Modi completing 100 days in power, we can expect many analyses from several quarters both for and against.&nbsp; Some may be quite lavish in..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊமை ஊடகங்கள்.'),
            thumbnail:'/images/7422/p42-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/08/31/post7422.html",
            publishDate:"Aug 31, 2014",
            summary:$sce.trustAsHtml("நேற்றைக்கு முன்தினம், பெங்களுரு சிறப்பு நீதிமன்றத்தில் ஜெயலலிதா மீதான சொத்துக் குவிப்பு வழக்கில், விசாரணை முடிந்து, செப்டம்பர் 20 அன்று தீர்ப்பு என்று அறிவித்தார், &nbsp;சிறப்பு நீதிபதி மைக்கேல் டி குன்ஹா.&nbsp;தமிழகம் மட்டுமல்லாமல், இந்தியா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Judgment day'),
            thumbnail:'/images/7423/jaya-650_051311033836-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/08/24/post7423.html",
            publishDate:"Aug 24, 2014",
            summary:$sce.trustAsHtml("&#8220;Now judgment is upon this world; now the ruler of this world will be cast out.&#8221; says the Bible (Mathew 13:49).Whether a devout Christian is..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The New Bandit Queen'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/23/post7000.html",
            publishDate:"Aug 23, 2014",
            summary:$sce.trustAsHtml("Phoolan Devi, called the Bandit Queen, is dead, of course. But there are different avatars of the dreaded Devi, haunting the society all the time.At..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பான்டிட் குயின்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/21/post7001.html",
            publishDate:"Aug 21, 2014",
            summary:$sce.trustAsHtml("பான்டிட் குயின் என்று அழைக்கப்பட்ட பூலான் தேவிதான் இறந்து விட்டாரே... இப்போது அவரைப் பற்றி எதற்கு என்று யோசிப்பீர்கள். &nbsp;இது இறந்து போன பான்டிட் குயின் பூலான் தேவி பற்றியது அல்ல. &nbsp;பூலான் தேவி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேட்டி கட்டிக்கொண்டு கொள்ளையடியுங்கள்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/12/post7002.html",
            publishDate:"Aug 12, 2014",
            summary:$sce.trustAsHtml("வேட்டி பிரச்சினை பூதாகாரமாக ஆக்கப்பட்டு இப்போது சட்டமும் வந்தாகிவிட்டது. &nbsp;தமிழ் இந்து செய்தி இணைப்புஇவ்வாறாக தமிழ் மரபுகளைக் காத்துவிட்ட புரட்சித் தாய் ஜெயலலிதாவிற்கு பல தரப்பினரும் வாழ்த்துப்பா பாடிய வண்ணமிருக்கின்றனர்.உயர்நீதிமன்ற நீதிபதி ஒருவர் வேட்டி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி ஒரு நேர்மையாளர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/11/post7003.html",
            publishDate:"Aug 11, 2014",
            summary:$sce.trustAsHtml("நீதிபதி மார்கண்டேய கட்ஜு அவர்கள், தன்னுடைய இளையதளத்தில், கருணாநிதியின் சொத்துக்கள் குறித்து பல்வேறு கேள்விகள் எழுப்பியிருந்தார்.&nbsp;அதன் இணைப்பு&nbsp;அந்த கேள்விகளுக்கு நேரடியாக பதில் அளிக்காமல், அமைப்பு செயலாளர் ஆர்.எஸ்.பாரதியை விட்டு, பதில் கேள்வி கேட்டுள்ளார் திமுக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பேய்கள் அரசாண்டால் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/10/post7004.html",
            publishDate:"Aug 10, 2014",
            summary:$sce.trustAsHtml("முகலிவாக்கம் கட்டிடம் இடிந்து விழுந்ததும், அந்த இடத்தை பார்வையிட்ட ஜெயலலிதா, முதலில் சொன்னது &#8220;சிஎம்டிஏ அதிகாரிகள் மீது எந்தத் தவறும் இல்லை&#8221; என்பதே. &nbsp; எந்த விதமான விசாரணையும் நடக்கும் முன்னரே இப்படி ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('And the fight continues'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/05/post7005.html",
            publishDate:"Aug 5, 2014",
            summary:$sce.trustAsHtml("Achimuthu Shankar, a key contributor to the Savukku website, has strongly protested the hacking of his e-mail by the National Cyber Safety and Security Standards.&nbsp;Following..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதியின் மரணம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/03/post7007.html",
            publishDate:"Aug 3, 2014",
            summary:$sce.trustAsHtml("பெண்களுக்கு எதிரான குற்றங்கள் தொடர்பாக வழக்குகள் வருகையில், இந்த நீதிபதிகள் பொங்குவதை பார்த்திருக்கிறீர்களா ? &nbsp;இப்படிப்பட்ட குற்றங்களை இரும்புக் கரம் கொண்டு ஒடுக்க வேண்டும். &nbsp;சமுதாயத்தில் பெண்களுக்கு எதிரான குற்றங்களை இழைப்பவர்களுக்கு கடுமையான தண்டனை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The Fiction Of Rationalism And Humanity / Mohammad Jalaluddin'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/08/01/post7008.html",
            publishDate:"Aug 1, 2014",
            summary:$sce.trustAsHtml("Both Gaza and ISIS could be said to bring out the worst in us in different ways. It is not just men, women and children..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தகத்தகாய தலித்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/07/31/post7009.html",
            publishDate:"Jul 31, 2014",
            summary:$sce.trustAsHtml("சமீபத்தில் தமிழகஅரசு ஒருஉத்தரவை வெளியிட்டுள்ளது.&nbsp;&nbsp; அந்த உத்தரவின்படி, தலைமை நீதிபதிக்குஉள்ள மரபின்அடிப்படையிலான மரியாதைகள்அனைத்தும், இரண்டாவதுமூத்த நீதிபதிக்கும் வழங்கப்பட வேண்டும்.&nbsp; ஒரு உயர்நீதிமன்றத்தின் தலைமை நீதிபதிஎன்பவர் மட்டுமே, அரசின் தலையாயமரியாதைகளுக்கு தகுதியானவர்என்று இதுநாள் வரைஇருந்து வந்தது.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாய்க்கால் தகராறும், வழிதவறிய நீதியும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/07/30/post7010.html",
            publishDate:"Jul 30, 2014",
            summary:$sce.trustAsHtml("(திராவிட இயக்கச் செம்மல்களில் ஒருவரது வாரிசு இன்று அவ்வியக்கத்தின் எஞ்சியிருக்கும் நற்பெயரையும் அழித்தே தீருவேன் எனக் கங்கணம் கட்டிக்கொண்டு செயல்படுகிறார். திராவிடமே, தந்தை பெரியாரே உயிர்மூச்சு என பசப்பிக்கொண்டிருக்கும் அரசியல் தலைவர்கட்கும் அவர்களின் சொம்புகளுக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Apologists Beware, Savukku Is Watching You !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/07/28/post7011.html",
            publishDate:"Jul 28, 2014",
            summary:$sce.trustAsHtml("Like subaltern history, subaltern journalism too has many supporters. Talk of Mayavati’s corruption, they will say, ‘Oh come on, why do you target her, after..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Media Deafeningly Silent As High Court Judge Runs Amok'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/07/26/post7012.html",
            publishDate:"Jul 26, 2014",
            summary:$sce.trustAsHtml("At a time Markandey Katju has turned the spotlight on corruption in judiciary, the way a serving judge of the Madras High Court seems engaged..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Savukku’s relentless battle for justice'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/07/25/post7014.html",
            publishDate:"Jul 25, 2014",
            summary:$sce.trustAsHtml("We have lost count of the number of times the authorities have sought to clamp down on our website(s).&nbsp;We kept coming back and catching the..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிக்கலில் அஸ்ரா கர்க் ?'),
            thumbnail:'/images/6979/Asra-Garg-3-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/19/post6979.html",
            publishDate:"Jul 19, 2014",
            summary:$sce.trustAsHtml("தருமபுரி மாவட்ட காவல் கண்காணிப்பாளர் மீது உள்துறை செயலாளர் மற்றும் காவல் துறை தலைமை இயக்குநருக்கு அனுப்பப்பட்டுள்ள புகார்கள் அவருக்கு சிக்கலை ஏற்படுத்தும் என்று தகவல்கள் கூறுகின்றன.தருமபுரி மாவட்டத்தின் காவல் கண்காணிப்பாளராக உள்ளவர் அஸ்ரா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Mineral Water –II: TATA’s Foray'),
            thumbnail:'/images/6968/water-well-india-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/17/post6968.html",
            publishDate:"Jul 17, 2014",
            summary:$sce.trustAsHtml("That might be the common scene in many rural parts of India. But big business is entering the water business in a big way.Reliance may..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அய்யர் வீட்டில்ஆட்டுக்கால் பாயா'),
            thumbnail:'/images/6947/Judge_who_wore_dhoti_Sam_story_360-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/17/post6947.html",
            publishDate:"Jul 17, 2014",
            summary:$sce.trustAsHtml("கடந்த வாரம், சென்னை உயர்நீதிமன்ற நீதிபதி ஹரிபரந்தாமன் சென்னை கிரிக்கேட் வாரிய வளாகத்துக்குள் உள்ள மெட்றாஸ் கிரிக்கெட் க்ளப்புக்கு சொந்தமான அரங்கத்தில், முன்னாள் நீதிபதி டி.எஸ்.அருணாச்சலம் எழுதிய ஒரு நூல் வெளியீட்டு விழாவில் கலந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அஸ்ரா கர்க் என்ற அப்பாடக்கர்'),
            thumbnail:'/images/6924/Asra-Garg-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/16/post6924.html",
            publishDate:"Jul 16, 2014",
            summary:$sce.trustAsHtml("14 ஜுலை இதழ் டைம்ஸ் ஆப் இந்தியா சென்னை பதிப்பின் முதல் பக்கத்தில் ஒரு செய்தி வந்திருந்தது.   காவல்துறை கண்காணிப்பாளரின் போன் உளவுத்துறையால் ஒட்டுக் கேட்கப்படுகிறது. இது குறித்து அந்த எஸ்.பி டிஜிபி ராமானுஜத்திடம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Mineral Water, the Untold Story &#8211; I'),
            thumbnail:'/images/6912/1-DSC_1523-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/15/post6912.html",
            publishDate:"Jul 15, 2014",
            summary:$sce.trustAsHtml("(When I went to Philippines back in the eighties, I was shocked to find a four-year-old boy holding a bottle of Coca Cola, outside their..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புனிதப் பசுக்கள் ஒழிக்கப்படட்டும்!'),
            thumbnail:'/images/6889/chinnakkuthoosi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/13/post6889.html",
            publishDate:"Jul 13, 2014",
            summary:$sce.trustAsHtml("ஸ்டாலின் காலத்து ரஷ்யாவைக் கிண்டல் செய்யும் நாவல் இது.  ஒரு கட்டத்தில் ஒரு கூட்டுப் பண்ணை மேலாளர் ஏதேதோ ஆத்திரமாகப் பேசிக்கொண்டே சற்று வேகமாக மேசைமீது ஓங்கி அடிப்பார். அந்த அடி எதிர்பாராத வகையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 8'),
            thumbnail:'/images/6879/23VBG_JAYALALITHAA_368443f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/12/post6879.html",
            publishDate:"Jul 12, 2014",
            summary:$sce.trustAsHtml("மரம் ஓய்வை விரும்பினாலும் காற்று விடுவதில்லை.   கரைகள் ஓய்வை விரும்பினாலும் அலைகள் விடுவதில்லை என்பது போல, சவுக்கு ஓய்வை விரும்பினாலும் கருணாநிதி விடுவதில்லை.தமிழ்நாடு அரசுப் பணியாளர் தேர்வாணையத்தினால் 2004ம் ஆண்டு தேர்ந்தெடுக்கப்பட்ட 83 அதிகாரிகளின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்னும் எத்தனை பிணங்கள் உங்களுக்கு வேண்டும் ஜெயலலிதா ?'),
            thumbnail:'/images/6853/11279PJuly-08-L-big-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/10/post6853.html",
            publishDate:"Jul 10, 2014",
            summary:$sce.trustAsHtml("&#8220;இன்னல்களை பொருட்படுத்தாமல் கடமையைச் செய்பவர்களை அங்கீகரிப்பதில் எனது தலைமையிலான அரசு எப்போதும் முன்னிலை வகிக்கிறது&#8221;இது செல்வி ஜெயலலிதா, மவுலிவாக்கம் கட்டிட இடிபாடுகளில் சிக்கியவர்களை மீட்கும் நடவடிக்கைகளில் ஈடுபட்டவர்களுக்கு நடத்திய பாராட்டு விழாவில் பேசியது. இதுதான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Mining Scam Media Would Not Touch'),
            thumbnail:'/images/6840/ph.jpg-1-150x150.jpe',
            categories:['default',''],
            href:"/default/2014/07/09/post6840.html",
            publishDate:"Jul 9, 2014",
            summary:$sce.trustAsHtml("&nbsp;This mining scam emanating from Tamil Nadu is a scam with a difference, it seems to be abetted by the judiciary itself, but the media..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருச்செந்தூரின் கடலோரத்தில் வைகுண்டராஜன் அரசாங்கம்.'),
            thumbnail:'/images/6830/vaikundarajan-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/08/post6830.html",
            publishDate:"Jul 8, 2014",
            summary:$sce.trustAsHtml("சவுக்கில் &#8220;எத்தனை கோடி கொடுத்தாய் வைகுண்டராஜா ?&#8221; என்ற கட்டுரை வந்ததும், திங்கட்கிழமை இந்த வழக்கை, தனது போர்ட்ஃபோலியோ மாறினாலும் நீதிபதி கர்ணனே விசாரிக்கப் போகிறார் என்ற தகவலும் பதிவிட்டிருந்த பின்னாலும், தலைமை நீதிபதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Chennai – National Capital of Construction Disaster?'),
            thumbnail:'/images/6816/wal-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/06/post6816.html",
            publishDate:"Jul 6, 2014",
            summary:$sce.trustAsHtml("Wall collapse site&nbsp;The wall collapse in Thiruvallur on Sunday, killing 11 workers from Andhra Pradesh, seems to confirm the notoriety of the state as the..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருமாவிற்குத் திறந்த மடல்'),
            thumbnail:'/images/6809/THirumavalavan-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/05/post6809.html",
            publishDate:"Jul 5, 2014",
            summary:$sce.trustAsHtml("அன்பு நண்பரே,புதிதாகச் சொல்ல என்னிடம் ஏதும் இல்லைதான். ஆனால் முக்கிய நிகழ்வுகள்போது ஏதாவது சொல்லாவிட்டால் என்ன செய்தியாளன் நான் ! எனவே மீண்டும் ஊதிவைக்கிறேன்.திமுக கூட்டணியிலிருந்து விலகிவிடலாம் என நீங்கள் சிந்திப்பதாக செய்தி உலா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எத்தனை கோடி கொடுத்தாய் வைகுண்டராஜா ?'),
            thumbnail:'/images/6791/IMG_0528-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/05/post6791.html",
            publishDate:"Jul 5, 2014",
            summary:$sce.trustAsHtml("கடந்த ஆண்டு ஆகஸ்ட் மாதத்தில் அனைத்து விதமான க்ரானைட் க்வாரி நடவடிக்கைகளும் தடை செய்யப்பட்டன என்று ஜெயலலிதா ஒரு அறிவிப்பை வெளியிட்டார். இதையடுத்து தமிழகமெங்கும் வருவாய்த்துறை மற்றும் கனிமத்துறை அதிகாரிகள் பரபரப்பாக ஆய்வுகளை மேற்கொண்டனர்.வருவாய்த்துறை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரே ரகுபதி தலைமையில் ஒன்பது விசாரணைகளா?&#8217;   &#8211; கருணாநிதி அறிக்கை'),
            thumbnail:'/images/6787/karunanidhi_1113689f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/04/post6787.html",
            publishDate:"Jul 4, 2014",
            summary:$sce.trustAsHtml("&#8220;சென்னையில் 11 மாடிக் கட்டிடம் இடிந்து, இதுவரை 61 பேர் பலியான சம்பவம் குறித்து தமிழக முதல்வர் ஜெயலலிதா, நீதிபதி ரெகுபதி தலைமையில் விசாரணைக் கமிஷன் ஒன்றை நியமித்திருக்கிறார்.இதுபோல திராவிட முன்னேற்றக் கழக ஆட்சி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இக் கொடுமை தொடரும்'),
            thumbnail:'/images/6770/IMG_20140629_132307454-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/07/04/post6770.html",
            publishDate:"Jul 4, 2014",
            summary:$sce.trustAsHtml("முகலிவாக்கம் மீட்புப் பணிகோடைக்காலம் முடிந்து வரும் முதல் மழை எப்போதும் மகிழ்ச்சியினை அளிக்கும். வெயிலின் கொடுமையை இரண்டு மூன்று மாதங்களுக்கு அனுபவித்து வந்தவர்கள், அந்த முதல் மழையில் தாங்களாகவே நனைந்து குதூகலிப்பார்கள்.ஆனால், இந்த ஆண்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Subverting Judiciary – Modi-style'),
            thumbnail:'/images/6759/subramaniam_2_01-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/29/post6759.html",
            publishDate:"Jun 29, 2014",
            summary:$sce.trustAsHtml("Gopal Subramaniam, an eminent lawyer, is denied place in the apex court of the country by a vengeful government. The episode hints at shape of..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதியேதலைவணங்கு.  '),
            thumbnail:'/images/6753/25TH_GOPAL_SUBRAMAN_934042e-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/27/post6753.html",
            publishDate:"Jun 27, 2014",
            summary:$sce.trustAsHtml("மூத்த வழக்கறிஞர் ராம் ஜெத்மலானி ஒரு முறை இவ்வாறு குறிப்பிட்டார்.  &#8220;இந்தியாவில் இரண்டு வகையான நீதிபதிகள் உண்டு.  சட்டம் தெரிந்தவர்கள்.  சட்ட அமைச்சரை தெரிந்தவர்கள்&#8221; என்று.இந்தியாவில், நீதித்துறை நியமனங்கள் தொடர்பாக இப்போது இருந்து வரும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Karnataka : Hub of communal vigilantism ?'),
            thumbnail:'/images/6746/AP081021044565-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/26/post6746.html",
            publishDate:"Jun 26, 2014",
            summary:$sce.trustAsHtml("Iqbal is a youth in his twenties from a small village in coastal Karnataka. He was reportedly assaulted for “being with a Hindu girl”.  He..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இறுகும் சுருக்கு.'),
            thumbnail:'/images/6736/1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/25/post6736.html",
            publishDate:"Jun 25, 2014",
            summary:$sce.trustAsHtml("மே 26 அன்று வழக்கம் போலவே 18 ஆண்டுகளாக தாமதப்படுத்தப்பட்ட ஜெயலலிதாவின் மீதான சொத்துக் குவிப்பு வழக்குக்கு மீண்டும் இடைக்காலத் தடை விதித்தது உச்சநீதிமன்றம்.உச்சநீதிமன்றத்தின் கோடைகால விடுமுறை நீதிபதிகளான பி.எஸ்.சவுகான் மற்றும், ஏ.கே.சிக்ரி ஆகியோர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பின் தொடரும் பெண்களின் குரல்'),
            thumbnail:'/images/6725/DSC00081-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/22/post6725.html",
            publishDate:"Jun 22, 2014",
            summary:$sce.trustAsHtml("இலக்கியவாதிகள், கவிஞர்களைப் பார்த்தால் எப்போதுமே பிரமிப்பு உண்டு. உடலை வில் போல வளைத்து ஜிம்னாசியம் செய்யும் வீராங்கனைகளைப் பார்ப்பது போல, நம்மால் இது முடியாது என்ற பிரமிப்பு எப்போதும் உண்டு. நாம் அன்றாடம் சாதாரணமாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெயமோகன் சிலாகிக்கப்படவேண்டியவரே'),
            thumbnail:'/images/6721/boston-faneuil-hall-quincy-market-old-state-house-jeyamohan-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/19/post6721.html",
            publishDate:"Jun 19, 2014",
            summary:$sce.trustAsHtml("துக்ளக் இதழ் வெளியாகி பரபரப்பை ஏற்படுத்திக்கொண்டிருந்த நேரம். தஞ்சை இராமூர்த்தியிடம் என்ன சார் இது இப்படிப் போட்டுத் தாக்குகிறார். சுவையாகவும் இருக்கிறது. நன்றாக விற்கிறது. இத்தகைய வலது சாரி சிந்தனைகள் வளர்வது நல்லதில்லையே என்றேன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடவுளைத் தேடி'),
            thumbnail:'/images/6713/1389795322rishikesh1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/18/post6713.html",
            publishDate:"Jun 18, 2014",
            summary:$sce.trustAsHtml("பயணம் என்பது எப்போதுமே அழகானது.பாதுகாப்பும் கதகதப்பும் மிக்க சொந்த இடத்தில் இருந்து, தெரிந்த முகங்களில் இருந்து வெளியே சென்று திரும்பும் அனுபவம் அலாதியானது. திரும்ப வரமுடியும் என்ற நம்பிக்கை அளிக்கும் உத்வேகம் பயணத்தை இன்னும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('A remorseful Modi, anyone?'),
            thumbnail:'/images/6684/muzaffarnagar_0-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/15/post6684.html",
            publishDate:"Jun 15, 2014",
            summary:$sce.trustAsHtml("Pune riotsSo on the 2nd of June, 2014 ‘pehla wicket padli’ (the first wicket went down), that of one Mohsin Saikh’s &#8211; the credit going..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதல் தாக்குதல்'),
            thumbnail:'/images/6691/Narendra-modi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/14/post6691.html",
            publishDate:"Jun 14, 2014",
            summary:$sce.trustAsHtml("சில நாட்களுக்கு முன்னால் மத்திய உளவு நிறுவனமான இன்டெலிஜென்ஸ் ப்யூரோவின் அறிக்கை என்று ஒரு அறிக்கை ஊடகங்களில் வெளியாகி, தன்னார்வ தொண்டு நிறுவனங்கள் மீது மிகப்பெரிய தாக்குதலை தொடுத்துள்ளது.மத்திய உளவு நிறுவனத்தின் தன்னார்வத் தொண்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அழிவை நோக்கி இடதுசாரிகள்/என்.பி.உல்லேக்'),
            thumbnail:'/images/6675/gorbi620_1861401b-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/14/post6675.html",
            publishDate:"Jun 14, 2014",
            summary:$sce.trustAsHtml("1980களில் சோவியத் யூனியனில் நடைபெற்று வந்த பெரிஸ்ட்ராய்கா (சீரமைப்பு) பரபரப்பாக விவாதிக்கப்பட்டு வந்தபோது, நீண்ட வடு ஒன்று கோர்பசேவின் தலையினைப் பிளப்பது போலத் தெரிகிறதல்லவா அது போல சோவியத் யூனியனும் சிதறுண்டு போகப்போகிறது என..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டி.எம்.கிருஷ்ணாவின் கலகக் குரல் / சிங்கி இரசிகன்'),
            thumbnail:'/images/6663/TH-BOOK_LAUNCH_5_1582201f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/12/post6663.html",
            publishDate:"Jun 12, 2014",
            summary:$sce.trustAsHtml("கர்நாடக இசை குறித்து முன்னணி இசைக்கலைஞர் டி.எம். கிருஷ்ணா கூறிவரும் கருத்துக்கள் நம்மை தி. ஜானகிராமனின் இசைப்பயிற்சி சிறுகதை பக்கம் அழைத்துச் செல்கிறது. தலித் இளைஞன் ஒருவனுக்கு கர்நாடக இசையைச் சொல்லிக் கொடுக்க முடிவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மௌலானா அபுல்கலாம் ஆசாத் – ஒரு மீள் பார்வை/முபாரக் அலி'),
            thumbnail:'/images/6652/azad-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/08/post6652.html",
            publishDate:"Jun 8, 2014",
            summary:$sce.trustAsHtml("(விடுதலைப் போராட்ட வீரர் மௌலானா அபுல்கலாம் ஆசாத் உலக முஸ்லீம் அடையாளத்திலிருந்து இந்திய தேசிய நீரோட்டத்திற்கு மாறியது குறித்துக் கூறும் கட்டுரை.) ஆசாத் மிகப்பெரிய இஸ்லாமிய அறிஞர், சிறந்த பேச்சாளர். ஒரு கட்டத்தில் இந்திய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('How to take on the RSS/Rendra'),
            thumbnail:'/images/6635/RSS_March_Bhopal_PTI_360-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/06/post6635.html",
            publishDate:"Jun 6, 2014",
            summary:$sce.trustAsHtml("Demolition on to the eternal shame of IndiaMany would have thought building a Ram mandir at the site where the Babri Masjid had stood till..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கட்டுமரம் மூழ்கிவிடும் அபாயம்'),
            thumbnail:'/images/6625/karunanithi-kattumaram-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/04/post6625.html",
            publishDate:"Jun 4, 2014",
            summary:$sce.trustAsHtml("மூழ்கினால் நல்லதுதானே ஆபத்தா என்று நண்பர்கள் எதிர்க் கேள்வி போடவேண்டாம். அப்புறம் அம்மாவும், கிஷோர் சாமியும் ஏகத்துக்குக் குதிப்பார்கள். இன்னொரு சுதாகரனே உருவாகிவிடக்கூடும் !தீவிர ஜெ பக்தர் கிஷோர் சுவாமிமுன்னாள் வளர்ப்பு மகன் சுதாகரன்விஷயத்திற்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கர்நாடக இசை பிராமணர்களுக்கு மட்டும்தான் சொந்தமா?/எஸ்.சிவகுமார்'),
            thumbnail:'/images/6616/tm-krishna1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/02/post6616.html",
            publishDate:"Jun 2, 2014",
            summary:$sce.trustAsHtml("(முன்னணி இசைக் கலைஞர் டி.எம்.கிருஷ்ணா கர்நாடக இசை பிராமணர்களின் கட்டுப்பாட்டிலிருந்து மீட்கப்படவேண்டும் எனக் கலகக் குரல் எழுப்பி வருகிறார். ஒரு நூலே எழுதிவிட்டார். கர்நாடக இசைக் கச்சேரிகளைக் கேட்க வருபவர்கள் பெரும்பாலும் பிராமணர்களே. இப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கார்த்தி சிதம்பரத்தின் கவலை'),
            thumbnail:'/images/6603/Karti_Chidambaram_1754499f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/06/01/post6603.html",
            publishDate:"Jun 1, 2014",
            summary:$sce.trustAsHtml("ரொம்பத் தான் கவலை கார்த்தி சிதம்பரத்திற்கு. தமிழகத்தில் காங்கிரஸ் நசித்துவிட்டதாம். அடைந்துவிட்ட படுதோல்விக்கு தார்மீகப் பொறுப்பேற்று மாநிலத் தலைவர் ஞானதேசிகன் பதவி விலகவேண்டுமாம்.சரி வரலாறு காணாத தோல்வியை கட்சி சந்தித்தற்குப் பொறுப்பேற்று அன்னை சோனியாவும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('WHY ARTICLE 370 HAS TO GO'),
            thumbnail:'/images/6601/Map_of_Jammu_and_Kashmir2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/30/post6601.html",
            publishDate:"May 30, 2014",
            summary:$sce.trustAsHtml("Our valued contributor FOOTPRINTS argues Art.370 of the Indian constitution has to go. No, he is not a parivaarist. But he has his reasons. He..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Modi-fied India – What Is In Store For Us?'),
            thumbnail:'/images/6583/modioath1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/29/post6583.html",
            publishDate:"May 29, 2014",
            summary:$sce.trustAsHtml("Modi tweets after swearing-in as PM promising a ‘developed, strong and inclusive’ India. Now in each of these categories, Gujarat is the model this man..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! – 8 – கருணாநிதி கடிதம்'),
            thumbnail:'/images/6587/Tamil-Daily-News-Paper_26334345341-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/28/post6587.html",
            publishDate:"May 28, 2014",
            summary:$sce.trustAsHtml("பெங்களூருவில் நடைபெற்று வரும் ஜெயலலிதா சொத்துக் குவிப்பு வழக்கில் அரசு வழக்கறிஞர் பவானி சிங் அவர்கள், சாட்சியங்களின் மூலம் வெளிவந்த விபரங்களை, மேலும் தொடர்ந்து தொகுத்துக் கூறினார்.தமிழக வீட்டு வசதிக் கழகச் செயலாளர் பாலகிருஷ்ணன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! – 7 – கருணாநிதி கடிதம்'),
            thumbnail:'/images/6584/karunanidhi_mwn2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/28/post6584.html",
            publishDate:"May 28, 2014",
            summary:$sce.trustAsHtml("பெங்களூரில் நடைபெறும் ஜெயலலிதா சொத்துக் குவிப்பு வழக்கில், அரசு வழக்கறிஞர் பவானி சிங் தொகுத்துச் சொல்லியிருக்கும் சாட்சியங்களைப் பற்றிய மேலும் பல விபரங்கள் வருமாறு:-சிவசங்கர் என்பவர் கொடுத்துள்ள சாட்சியத்தில், &#8220;நான் சேலம் மாவட்டம், ராசிபுரத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Terror Attacks: No Relief For Anyone / Part II'),
            thumbnail:'/images/6578/afzal-gurus-book-released-seven-months-after-he-was-hanged_180913085859-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/27/post6578.html",
            publishDate:"May 27, 2014",
            summary:$sce.trustAsHtml("In several countries in the west, the investigating and prosecuting agencies are different, and the latter can shoot down cases where there is not enough..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml(' Terror Attacks: No Relief For Anyone &#8211; Part I'),
            thumbnail:'/images/6568/dg-vanzara-sr-02_060513113604-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/26/post6568.html",
            publishDate:"May 26, 2014",
            summary:$sce.trustAsHtml("Yes while terror attacks will continue to haunt the society at large for different reasons, an unjust system only makes it easier for the perpetrators.A..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இருண்டஎதிர்காலம்'),
            thumbnail:'/images/6556/thumb-150x150.jpe',
            categories:['default',''],
            href:"/default/2014/05/25/post6556.html",
            publishDate:"May 25, 2014",
            summary:$sce.trustAsHtml("&#8220;மக்களின் உயிரைப் பறித்த உண்மையான குற்றவாளிகளை கைது செய்யாமல், அப்பாவிகளை கைது செய்து, அவர்கள் மீது கடுமையான குற்றச்சாட்டுகளை சுமத்தி, அவர்களுக்கு தண்டனையும் பெற்றுத் தரப்பட்டுள்ளது. இந்த வழக்கை விசாரித்த கீழமை நீதிமன்றங்கள் அடிப்படை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! – 6 – கருணாநிதி கடிதம்'),
            thumbnail:'/images/6553/karunanidhi-621x4141-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/24/post6553.html",
            publishDate:"May 24, 2014",
            summary:$sce.trustAsHtml("21-3-2014 முதல் தனது இறுதி வாதத்தை பவானி சிங் தொடங்கினார். பெங்களூரில் நடைபெறும் இந்த வழக்கில் அரசு வழக்கறிஞர் பவானி சிங் அவர்களே, சாட்சிகள் எல்லாம் தங்கள் சாட்சியங்களில் என்ன தெரிவித்தார்கள் என்பதையெல்லாம் வரிசையாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தஞ்சை இராமமூர்த்தி &#8211; அரசியல் விபத்தால் முடங்கிப்போன ஆளுமை'),
            thumbnail:'/images/6550/30.05.2014_Page_02-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/23/post6550.html",
            publishDate:"May 23, 2014",
            summary:$sce.trustAsHtml("ஆக்கர் வாங்கிய பம்பரம் குறித்து இந்து தமிழ் நாளேட்டில் ஒரு விமர்சனக் கட்டுரை வெளியாக, அதற்கு பதில் சொல்லும் வகையில் தஞ்சை இராமமூர்த்தி அந்நாளேட்டிற்கு கடிதம் ஒன்று எழுத அது மதிமுகவின் சங்கொலியில் வெளியாகியிருக்கிறது.இடது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சூதும் வாதும்..'),
            thumbnail:'/images/6546/20TH_SPECIAL_COURT_759948f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/23/post6546.html",
            publishDate:"May 23, 2014",
            summary:$sce.trustAsHtml("படிச்சவன் சூதும் வாதும் செஞ்சா போவான் போவான் அய்யோன்னு போவான் என்றான் பாரதி.&nbsp;லஞ்ச ஒழிப்புத் துறையில் உள்ள படித்த அதிகாரிகள் அப்படித்தான் செயல்பட்டுக் கொண்டிருக்கிறார்கள்.&#8220;தமிழக லஞ்ச ஒழிப்புத் துறையும் அதன் அதிகாரிகளும், குற்றவாளியோடு கைகோர்த்துக்கொண்டு,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! – 5 – கருணாநிதி கடிதம்'),
            thumbnail:'/images/6543/M-KARUNANIDHI-SONG-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/23/post6543.html",
            publishDate:"May 23, 2014",
            summary:$sce.trustAsHtml("ஏற்கனவே 15 ஆண்டுகளுக்கும் மேலாகத் திட்ட மிட்டு, விசாரணை தாமதப்படுத்தப்பட்ட இன்றைய நிலையிலும் இந்த வழக்கினை தொடர்ந்து மேலும் தாமதப்படுத்த பல்வேறு தந்திரங்களும் உத்திகளும் கையாளப்படுகின்றன.அதிலே ஒன்றுதான் அரசு வழக்கறிஞரே ஒரு மனுவினைத் தாக்கல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! – 4 – கருணாநிதி கடிதம்'),
            thumbnail:'/images/6540/karunagal-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/22/post6540.html",
            publishDate:"May 22, 2014",
            summary:$sce.trustAsHtml("அரசு வழக்கறிஞரான பவானி சிங் அவர்களை கர்நாடக மாநில அரசே மாற்றிய நிலையில், உச்சநீதிமன்ற நீதிபதி, திரு. சவுஹான் அவர்கள் இந்த வழக்கினை பவானி சிங் அவர்களே தொடர்ந்து அரசு சார்பில் நடத்தலாம் என்று முடிவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('In Punishing Congress, Voters Have Punished Themselves'),
            thumbnail:'/images/6532/04TH_SONIA_1258356f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/22/post6532.html",
            publishDate:"May 22, 2014",
            summary:$sce.trustAsHtml("The oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them.—Karl MarxClearly the..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள்தீர்ப்பு'),
            thumbnail:'/images/6521/elections_1810682g-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/21/post6521.html",
            publishDate:"May 21, 2014",
            summary:$sce.trustAsHtml("2014 தேர்தல் முடிவுகள்பலருக்குஉவப்பானதாகஇருக்கலாம்.  சிலருக்குகசப்பாகஇருக்கலாம்.  ஆனால்அதுமக்கள்தீர்ப்பு. இந்தியா போன்ற ஜனநாயகத்தில் பெரும்பான்மை மக்கள், ஒரு மோசமான  நபரை பிரதமராகத் தேர்ந்தெடுத்தாலும், அதை ஏற்றுக் கொள்வதே மக்களாட்சி  மீது நம்பிக்கை கொண்டோரின் கடமையாகும்.நரேந்திர தாமோதர் தாஸ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! – 3 – கருணாநிதி கடிதம்'),
            thumbnail:'/images/6517/KARUNANIDHI_1540750f1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/21/post6517.html",
            publishDate:"May 21, 2014",
            summary:$sce.trustAsHtml("பெங்களூருக்கு வழக்கு விசாரணை மாற்றப்பட்டபோதே, இந்த வழக்கு முடியும் கட்டத்தில்தான் இருந்தது. ஒரு சில மாதங்களில் தீர்ப்பு வெளிவரும் என்று எதிர்பார்க்கப்பட்ட நிலையில், குற்றஞ்சாட்டப்பட்ட வர்களின் அடுக்கடுக்காக வாய்தா வாங்கும் அபாரத் திறமை காரணமாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Cry, beloved country!'),
            thumbnail:'/images/6506/modi_mother-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/20/post6506.html",
            publishDate:"May 20, 2014",
            summary:$sce.trustAsHtml("The headline is misleading. I am no patriot. I nurture a healthy distaste for the very idea of patriotism. And I nurture a healthier suspicion..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மறக்க முடியுமா ?'),
            thumbnail:'/images/6501/eelam_tamils_650-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/18/post6501.html",
            publishDate:"May 18, 2014",
            summary:$sce.trustAsHtml("மே 18. மொழியால் இணக்கமாக இணைந்திருந்த ஈழத் தமிழர்களை, விலங்குகளை சுடுவது போல அழித்த நாள். வேடிக்கை மட்டுமே பார்க்க முடிந்தது.எத்தனை போராட்டங்கள் ? எத்தனை மறியல்கள் ? எத்தனை பட்டினிப்போர்கள் ? ஆனால்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('2014 Parliamentary elections &#8211; Tamilnadu results'),
            thumbnail:'/images/6245/Tamil-Nadu-pc-wise-150x150.gif',
            categories:['default',''],
            href:"/default/2014/05/15/post6245.html",
            publishDate:"May 15, 2014",
            summary:$sce.trustAsHtml("2014 Parliamentary elections – Tamilnadu results Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('We are back'),
            thumbnail:'/images/6227/savukku-image-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/15/post6227.html",
            publishDate:"May 15, 2014",
            summary:$sce.trustAsHtml("So we are back now, friends Clearly judicial proclamations are not going to hold us back.We stress again the dispute was over savukku.net, even where we..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் இந்த அவசரம் ?'),
            thumbnail:'/images/6211/1208537_3408622831228_996631676_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/10/post6211.html",
            publishDate:"May 10, 2014",
            summary:$sce.trustAsHtml("அர்ச்சனாஅர்ச்சனா ராமசுந்தரம் ஐபிஎஸ்ராமசுந்தரம் ஐபிஎஸ். இந்தப் பெயர் கடந்த சில நாட்களாக ஊடகங்களில் பரபரபப்பாக அடிபட்டுக் கொண்டிருக்கிறது. மத்திய புலனாய்வுத் துறைக்கு கூடுதல் இயக்குநராக நியமிக்கப்பட்ட தமிழக கேடரைச் சேர்ந்த அர்ச்சனா ராமசுந்தரத்தை அவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதி வியாபாரிகள்'),
            thumbnail:'/images/6198/IMG_2197-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/09/post6198.html",
            publishDate:"May 9, 2014",
            summary:$sce.trustAsHtml("வெங்கடாச்சலம். இந்தப் பெயரைக் கேட்டாலே தமிழகத்தில் அரசு அதிகாரிகள், அமைச்சர்கள் அனைவரும் நடுங்குவார்களோ இல்லையோ, பம்முவார்கள். அப்படியொரு சக்திவாய்ந்த பெயர் இந்த வெங்கடாச்சலம்.நீதி நாயகன் கர்ணன்ராமச்சந்திரா மருத்துவப் பல்கலைக்கழகம் மற்றும் ஆராய்ச்சி மையத்தின் வேந்தர்தான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('All this sound and fury……….'),
            thumbnail:'/images/6193/Farmer-Suicides-India-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/07/post6193.html",
            publishDate:"May 7, 2014",
            summary:$sce.trustAsHtml("Switzerland is going to vote in a few days. They are going to have a referendum about raising the minimum wage in the country to..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The Murky Saga Of IPL Probe In Tamil Nadu'),
            thumbnail:'/images/6187/4714858-3x2-940x627-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/07/post6187.html",
            publishDate:"May 7, 2014",
            summary:$sce.trustAsHtml("The Tamil Nadu police investigations into the IPL scam continues to be a riddle wrapped in a mystery inside an enigma.While their Delhi and Mumbai counterparts have filed..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை ! &#8211; 2 &#8211; கருணாநிதி கடிதம்'),
            thumbnail:'/images/6183/karunanidhi-621x414-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/06/post6183.html",
            publishDate:"May 6, 2014",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,&nbsp;பொதுச் செயலாளர் பேராசிரியர் அவர்களின் மனுவின் மீது உச்ச நீதிமன்றம் 2003ஆம் ஆண்டு அளித்த தீர்ப்பின் முற்பகுதியை நேற்றைய கடிதத்தில் குறிப்பிட்டிருந்தேன் அல்லவா? அந்தத் தீர்ப்பின் அடுத்தடுத்த பகுதிகள் வருமாறு :- &#8220;அரசு அதிகாரியாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடாது கருப்பு'),
            thumbnail:'/images/6179/kanimozhi_illus_20110509-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/05/post6179.html",
            publishDate:"May 5, 2014",
            summary:$sce.trustAsHtml("உறுத்து வந்து ஊட்டும் ஊழ்வினை கருணாநிதியையும் அவர் குடும்பத்தையும் பிடித்து ஆட்டிக் கொண்டிருக்கிறது. வாக்குப் பதிவு முடிந்ததும் பல்வேறு கருத்துக்கள், திமுக எதிர்ப்பார்த்ததை விட, சிறப்பாகவே தேர்தலில் வெற்றி பெறும் என்று கூறிய மகிழ்ச்சி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கு; ஒரு தொடர் கதை!  &#8211; கருணாநிதி கடிதம்'),
            thumbnail:'/images/6173/KARUNANIDHI_1540750f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/05/post6173.html",
            publishDate:"May 5, 2014",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,தமிழக முதலமைச்சர் ஜெயலலிதா இப்போது மூன்றாவது முறையாக தமிழகத்தின் ஆட்சிப் பொறுப்பைநடத்தி வரும் நேரத்தில், அவர் மீது கடந்த காலத்தில் பல்வேறு வழக்குகள் நடைபெற்று, அவற்றில் விசாரணை நீதிமன்றத்தில் சட்டப்படி அவர் தண்டிக்கப்பட்ட போதிலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('AAP,  a welcome initiative despite some questions'),
            thumbnail:'/images/6165/000_Del493689-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/05/post6165.html",
            publishDate:"May 5, 2014",
            summary:$sce.trustAsHtml("What is the Aam Admi Party (AAP)? What does it stand for? What role is it going to play in the polity? Questions aplenty. No..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('It is for you to judge'),
            thumbnail:'/images/6155/TOI_0026-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/03/post6155.html",
            publishDate:"May 3, 2014",
            summary:$sce.trustAsHtml("Whenever &#8216;the&#8217;  Judge CT Selvam passes any order with regard to our website &#8216;savukku&#8217;  I get tremendously provoked.  My reaction naturally would be to write..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கை மூடித்தான் ஆக வேண்டும்.'),
            thumbnail:'/images/6139/Kamaraj-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/02/post6139.html",
            publishDate:"May 2, 2014",
            summary:$sce.trustAsHtml("&#8220;ஒரு வீணாய்ப் போனவனின் வழக்கை விசாரிக்க நான் எனது விலை மதிக்க முடியாத 45 நிமிடங்களை செலவிட்டு விட்டேன். உங்களால் ஒரு இணைய தளத்தைக் கூட தடை செய்ய முடியாதா ? கூகிள் மற்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்னதான் நடக்கிறது உத்திர பிரதேசத்தில்?'),
            thumbnail:'/images/6133/modivarnsi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/02/post6133.html",
            publishDate:"May 2, 2014",
            summary:$sce.trustAsHtml("85 நாடாளுமன்ற உறுப்பினர்களைத் தேர்ந்தெடுக்கும் மிகப் பெரிய மாநிலமான உத்திரபிரதேச முடிவுகள் நாட்டின் எதிர்காலத்தை நிர்ணயிக்கக்கூடும். அங்கு மோடி அலை வீசுவதாகவே பலர் கருதுகின்றனர். இது குறித்து டைம்ஸ் ஆஃப் இண்டியா நாளேட்டில் வெளியாகியிருக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The Good, The Bad and The Greedy.'),
            thumbnail:'/images/6119/p_sathasivam_20131125.jpg-150x150.jpe',
            categories:['default',''],
            href:"/default/2014/05/01/post6119.html",
            publishDate:"May 1, 2014",
            summary:$sce.trustAsHtml("Indian judges may perhaps be classified into three categories &#8211; the good, bad and the greedy. Without any shred of doubt, the recently retired Chief..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாசகர்கள் கவனத்துக்கு.'),
            thumbnail:'/images/6117/TOI_0026-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/05/01/post6117.html",
            publishDate:"May 1, 2014",
            summary:$sce.trustAsHtml("சவுக்கு தளத்தை தடை செய்வது தொடர்பான வழக்கு புதன் கிழமை அன்று சென்னை உயர்நீதிமன்றத்தில் நீதிபதி சி.டி.செல்வம் முன்னிலையில் விசாரணைக்கு வந்தது.நீதிபதி சி.டி.செல்வம்அப்போது காவல்துறை அதிகாரிகளை கடுமையான வார்த்தையில் பேசினார் செல்வம். &#8220;ஒரு சாதாரண..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மீண்டும் தொடங்கியது சொத்துக் குவிப்பு வழக்கு.'),
            thumbnail:'/images/6110/ls-polls-jayalalithaa-goes-all-guns-blazing-for-40-seats_220314013325-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/29/post6110.html",
            publishDate:"Apr 29, 2014",
            summary:$sce.trustAsHtml("ஜெயலலிதாவின் மீதான சொத்துக் குவிப்பு வழக்குக்கு விதிக்கப்பட்டிருந்த தடையை உச்சநீதிமன்றம் விலக்கிக் கொண்டதையடுத்து, இன்று பெங்களுரு சிறப்பு நீதிமன்றத்தில் விசாரணை மீண்டும் தொடங்கியது.நீதிபதி சதாசிவம் ஓய்வு பெற்ற மறுநாளே ஜெயலலிதா சொத்துக் குவிப்பு வழக்கில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('MAMATA BANERJEE: UNWITTING TOOL OF HINDUTVA'),
            thumbnail:'/images/6102/IN12_MAMATA_11993f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/29/post6102.html",
            publishDate:"Apr 29, 2014",
            summary:$sce.trustAsHtml("The Indian National Congress didn’t seem to realize what it was doing when it threw out Mamata Banerjee some years ago. It was she who..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போதையின் பிடியில்&#8230; &#8230;.'),
            thumbnail:'/images/6092/14TH_SATHASIVAM1_1584387f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/29/post6092.html",
            publishDate:"Apr 29, 2014",
            summary:$sce.trustAsHtml("ஒரு ஹோட்டலுக்கு குடும்பத்தோடு உணவருந்த செல்கிறீர்கள். அந்த ஹோட்டலில் உங்களை பரபரப்பாக கவனித்து, பெரும்புள்ளி போல நடத்தினால், உங்களை கவனித்த பணியாளுக்கு கூடுதலாக டிப்ஸ் அளிப்பீர்கள். அந்த பரபரப்பான கவனிப்பை விரும்பாதவர்கள் இருக்க முடியுமா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசியல் நிழலில்'),
            thumbnail:'/images/6084/B_Id_411109_P_Sathasivam-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/24/post6084.html",
            publishDate:"Apr 24, 2014",
            summary:$sce.trustAsHtml("தேர்தல் நேரம். நாடு முழுக்க தேர்தலைத் தவிர வேறு எதுவுமே பேசுபொருளாக இல்லாது போய் விட்டது. டீக்கடைகளிலும், தெரு முனைகளிலும், தொலைக்காட்சி சேனல்களிலும் தேர்தல் செய்திகளே முழுமையாக ஆக்ரமித்துள்ளன. விவாதங்களில் அனல் பறக்கின்றன.இப்படி அனைவரும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யாருக்கு வாக்களிக்க ?'),
            thumbnail:'/images/6074/young_voters1-621x414-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/23/post6074.html",
            publishDate:"Apr 23, 2014",
            summary:$sce.trustAsHtml("&#8220;இந்தியாதான் இந்திரா. இந்திராதான் இந்தியா&#8221; என்று தனி நபர் துதிபாடலின் உச்சமான வார்த்தைகளை 1974ல், நெருக்கடி நிலை பிரகடனத்திற்கு முன் கூறினார் தேவ் காந்த் பரூவா. ஏறக்குறைய அப்படியொரு சூழல் இன்று உருவாகியிருக்கிறது.மோடி அலை...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உலகைக் குலுக்கிய ஒரு நாள் – ஒரு புரட்சியின் கதை – பாகம் 4'),
            thumbnail:'/images/6069/a-raja4_20110202-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/23/post6069.html",
            publishDate:"Apr 23, 2014",
            summary:$sce.trustAsHtml("அமைச்சரவை குழுவுக்கு அனுப்ப வேண்டும் என்ற சட்டம் மற்றும் நீதித்துறையின் பரிந்துரையை ராசா புறந்தள்ளியதற்கு வலுவான காரணம் இருக்கிறது.&nbsp;ஸ்பெக்ட்ரம் லைசென்ஸ் வழங்குவதற்கான கடைசித் தேதியை 25.09.2007 என நிர்ணயிக்க வேண்டுமென்று, ராசா முடிவெடுத்த உடனேயே,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உலகைக் குலுக்கிய ஒரு நாள் – ஒரு புரட்சியின் கதை – பாகம் 3'),
            thumbnail:'/images/6063/a.raja-5-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/22/post6063.html",
            publishDate:"Apr 22, 2014",
            summary:$sce.trustAsHtml("அந்த துன்பியல் சம்பவம் நடைபெற்ற நாள் 16 மே 2007. ஆம் ஆ.ராசா அன்றுதான் தொலைத் தொடர்புத் துறை அமைச்சராக பொறுப்பேற்றார்.இந்த ஸ்பெக்ட்ரம் விவகாரத்தை விரிவாக ஆராய ஆரம்பித்தால் தலை சுற்றுகிறது. ஏனெனில் அத்தனை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Can Narendra Modi be trusted with development ?'),
            thumbnail:'/images/6057/Narendra_Modi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/22/post6057.html",
            publishDate:"Apr 22, 2014",
            summary:$sce.trustAsHtml("Let us assume that you are evaluating Narendra Modi and his party, the BJP, for their fitness to &#8220;rule&#8221;. You have heard conflicting reports about the..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உலகைக் குலுக்கிய ஒரு நாள் – ஒரு புரட்சியின் கதை – பாகம் 2'),
            thumbnail:'/images/6046/INDIAN-EXPRESS-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/20/post6046.html",
            publishDate:"Apr 20, 2014",
            summary:$sce.trustAsHtml("2011 தேர்தல் களத்தில் பிரதான எதிர்க்கட்சிகள் அனைத்தாலும் பிரதானமாக பேசப்பட்ட முக்கியமான விஷயம் ஸ்பெக்ட்ரம் ஊழல். இந்த ஊழல், தொடர்பாக பத்திரிக்கைகளில் பரவலாக 2ஜி, 3ஜி என ஊடகங்களில் பரவலாக விவாதிக்கப் பட்டாலும், நமக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடல்லயே இல்லையாம்&#8230;'),
            thumbnail:'/images/6030/j_a_Tr-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/20/post6030.html",
            publishDate:"Apr 20, 2014",
            summary:$sce.trustAsHtml("நடிகர் வடிவேலு ஒரு படத்தில் வக்கீல் வண்டு முருகனாக நடித்திருப்பார். அதில் அவரை கைது போலீஸ் கைது செய்துவிடும். சிறையில் அடைக்கப்பட்ட வக்கீல் வண்டுமுருகன், தன்னுடைய உதவியாளர்கள் ஜாமீன் பெற்று வருவார்கள் என்று காத்திருப்பார்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கலிங்கப்பட்டியிலிருந்து கமலாலயம்வரை'),
            thumbnail:'/images/6016/2803020564_6cd2b0bce0_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/20/post6016.html",
            publishDate:"Apr 20, 2014",
            summary:$sce.trustAsHtml("கலிங்கப்பட்டி வீரர் வைகோ தற்போது கமலாலயத்தில் சரண் புகுந்திருக்கிறார். அப்படியும் அவர் வெல்வதற்கான வாய்ப்புக்கள் குறைவே என்கின்றனர் விவரமறிந்தவர்கள். அப்படித் தோற்றாலும் அவர் ஏதாவது புதிய பாடம் கற்றுக் கொள்ளப்போகிறாரா என்ன? அதெல்லாம் எதுவுமே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உலகைக் குலுக்கிய ஒரு நாள் &#8211; ஒரு புரட்சியின் கதை &#8211; பாகம் 1'),
            thumbnail:'/images/6008/karunanidhi_a_raja_201103071-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/19/post6008.html",
            publishDate:"Apr 19, 2014",
            summary:$sce.trustAsHtml("&nbsp;ரஷ்ய புரட்சியை விளக்கும் &#8220;உலகைக் குலுக்கிய பத்து நாட்கள்&#8221; என்ற புத்தகம் மிகப் பிரபலமான புத்தகம். ரஷ்ய புரட்சியை அற்புதமாக விளக்கும் நூல் அது.அது போன்றதொரு புரட்சி இந்தியாவிலும் நடந்தது. அந்த புரட்சிக்கு சொந்தக்காரர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சர்க்காரியா 5'),
            thumbnail:'/images/6002/Karunanidhi-old-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/19/post6002.html",
            publishDate:"Apr 19, 2014",
            summary:$sce.trustAsHtml("நிலம், நீர், நெருப்பு, காற்று, ஆகாயம் ஆகிய அனைத்தும் பஞ்ச பூதங்கள் என்று அழைக்கப் படும். திமுக அரசு, ரியல் எஸ்டேட் மூலமாக நிலத்தில் செய்த ஊழல்களை கடந்த ஐந்தாண்டுகளாக பார்த்தோம். ஆகாயத்தில் செய்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Should we trust the political instincts of businessmen?'),
            thumbnail:'/images/5993/Modi-Mukesh-Reuters-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/18/post5993.html",
            publishDate:"Apr 18, 2014",
            summary:$sce.trustAsHtml("This is a battle between liberalisers and liberals, one businessman told me recently. The liberalisers, he said, are for economic reforms; reforms that will push..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மயானத்திலிருந்து ஒரு அழுகுரல்.'),
            thumbnail:'/images/5977/03MATH_DALITS__648794f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/18/post5977.html",
            publishDate:"Apr 18, 2014",
            summary:$sce.trustAsHtml("1991-1996 வரையிலான ஜெயலலிதா ஆட்சிக் காலம், தமிழகத்தின் இருண்ட காலம் என்று சொன்னால் அது மிகையாகாது. ஊழல், அராஜகம், ரவுடித்தனம், கொலை, கொள்ளை, என்று அராஜகங்களின் மொத்த உருவமாக அந்த ஆட்சி திகழ்ந்தது. ஜெயலலிதா,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் &#8211; புத்தக வடிவில்'),
            thumbnail:'/images/5972/Front-Cover-tile-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/18/post5972.html",
            publishDate:"Apr 18, 2014",
            summary:$sce.trustAsHtml("சிவலிங்கத்தின் மீது செந்தேள் தொடர் கட்டுரைகளை சவுக்கு தளத்தில் படித்திருப்பீர்கள். இந்தக் கட்டுரைகள் மோடி என்பவர் யார், அவர் எப்படிப்பட்ட மனிதர் என்பதை புரிந்து கொள்ள உதவும். வளர்ச்சி என்ற பெயரில், மோடி என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சர்க்காரியா 4'),
            thumbnail:'/images/5965/MK_Kamaraj_Indira__1474654g-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/17/post5965.html",
            publishDate:"Apr 17, 2014",
            summary:$sce.trustAsHtml("முதலில் வருபவருக்கே முன்னுரிமை என்ற பாலிசியை கடைபிடித்து, பெரும் கொள்ளை அடித்ததை நாம் ஸ்பெக்ட்ரம் விவகாரத்தில் பார்த்து வருகிறோம். முதலில் வராதவருக்குக் கூட முன்னுரிமை என்பதை கேள்விப் பட்டிருக்கிறீர்களா ? சொல்வதைச் செய்வதை விட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Elections and Muslims'),
            thumbnail:'/images/5958/Muslims-in-India-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/17/post5958.html",
            publishDate:"Apr 17, 2014",
            summary:$sce.trustAsHtml("Muslims are accused of voting en bloc. I wish they do. And do so strategically and in conjunction with other underprivileged people across the rainbow..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக்கை தாங்கிய தமிழ்க்குடிதாங்கி 2'),
            thumbnail:'/images/5945/Ramadoss-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/16/post5945.html",
            publishDate:"Apr 16, 2014",
            summary:$sce.trustAsHtml("தைலாபுரத்தில் உள்ள அவரது பண்ணை வீட்டு வரவேற்பறையே அவரது ’வளர்ச்சியை’ செய்தியாளர்களுக்கு பறைசாற்றியது. முதலில் சாதா ரக ஸ்டீல், பிரம்பு நாற்காலிகள், பின்னர் கண்கவர் வேலைப்பாடுடனான மேசை நாற்காலிகள் பின்னர் அமர்ந்தால் அமுங்கிவிடக்கூடிய அதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சர்க்காரியா 3'),
            thumbnail:'/images/5934/karu13-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/16/post5934.html",
            publishDate:"Apr 16, 2014",
            summary:$sce.trustAsHtml("கடந்த ஐந்தாண்டுகளில் புதிது புதிதாக படக் கம்பெனிகள் தொடங்கப் படுவதைப் பார்த்திருப்பீர்கள். ரெட் ஜெயின்ட் பிக்சர்ஸ், க்ளவுட் நைன் பிக்சர்ஸ், சன் பிக்சர்ஸ். இந்தப் பட நிறுவனங்களின் உரிமையாளர்கள், கல்லூரியிலிருந்து இப்போதுதான் வெளி வந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The greatest show on earth'),
            thumbnail:'/images/5929/india-voters-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/15/post5929.html",
            publishDate:"Apr 15, 2014",
            summary:$sce.trustAsHtml("The Indians are a chuffed up lot these days. They are strutting about feeling very important since the country has, quite seamlessly, eased itself into..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக்கை தாங்கும் தமிழ்க் குடிதாங்கி'),
            thumbnail:'/images/5915/4741380934_349bf607e3_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/14/post5915.html",
            publishDate:"Apr 14, 2014",
            summary:$sce.trustAsHtml("டாக்டர்.ராமதாஸ். இந்தப் பெயரோடு வன்னியர் சங்கத் தலைவராக தன் அரசியல் வாழ்வைத் தொடங்கினார். பிறகு, தமிழார்வம் காரணமாக, மருத்துவர் ச.ராமதாசானார். தலித் மக்களின் உரிமைகளுக்காகக் குரல் கொடுத்து தன் சமூகத்தினரையே பகைத்துக்கொண்ட சூழலில் ‘தமிழ்க்குடிதாங்கி’..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சர்க்காரியா 2'),
            thumbnail:'/images/5904/001-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/13/post5904.html",
            publishDate:"Apr 13, 2014",
            summary:$sce.trustAsHtml("இந்தியா சந்தித்த ஊழல்களில் பெரிய ஊழல் போபர்ஸ் பீரங்கி பேர ஊழல். போபர்ஸுக்கு அடுத்தபடியாக உர இறக்குமதி, சர்க்கரை இறக்குமதி, என்று சவப்பெட்டி வரை இந்த பட்டியல் நீண்டது.ஆனால் பூச்சி மருந்து தெளிப்பதில் ஊழல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சர்க்காரியா பாகம் 1'),
            thumbnail:'/images/5899/1487279_763596816985859_485034682_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/12/post5899.html",
            publishDate:"Apr 12, 2014",
            summary:$sce.trustAsHtml("இன்றை தலைமுறை இல்லாமல், சென்ற தலைமுறைக்குக் கூட தெரியாத விபரம், நீதிபதி சர்க்காரியா திமுக ஆட்சியின் ஊழல்கள் குறித்தும், அதன் தலைவர் கருணாநிதியின் ஊழல்கள் குறித்தும், வெளியிட்ட விசாரணை அறிக்கை.இந்த அறிக்கை, திமுகவினர் எப்படியெல்லாம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The Audacity of Abuse !!!'),
            thumbnail:'/images/5893/45aa80e7db7c49d5a0ac6a43f7d23f6d-e1d5871c63b14938b5946c73ccd00c34-0-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/12/post5893.html",
            publishDate:"Apr 12, 2014",
            summary:$sce.trustAsHtml("Be you ever so high, the law is above you, said Lord Denning. But Jayalalitha and her coterie appear to think different.While small-time offenders are..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்ன செய்யப்போறீங்க மக்கழே ?'),
            thumbnail:'/images/5878/4464289938_ddf0eaa201_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/11/post5878.html",
            publishDate:"Apr 11, 2014",
            summary:$sce.trustAsHtml("#மக்கழே. இந்த வார்த்தை இந்தத் தேர்தலில் மிக மிக பிரபலமான ஒரு வார்த்தை. இந்த வார்த்தைக்கு சொந்தக்காரர், டைட்டானிக் கப்பலின் கேப்டன் விஜயகாந்த். விஜயகாந்த் டைட்டானிக் கப்பல் போல மூழ்கப் போகிறாரா. அல்லது, டைட்டானிக்கில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('HOBSON’S CHOICE'),
            thumbnail:'/images/5870/17nxg_p6_7_election_gbp2dgcfb117nxg_elections2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/10/post5870.html",
            publishDate:"Apr 10, 2014",
            summary:$sce.trustAsHtml("The phrase &#8220;Hobson&#8217;s choice&#8221; means a free choice in which only one option is offered, &#8220;take it or leave it.&#8221; The phrase originated from Thomas..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முடிவில்லாத பாதையில்&#8230;..'),
            thumbnail:'/images/5857/sasi3-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/10/post5857.html",
            publishDate:"Apr 10, 2014",
            summary:$sce.trustAsHtml("We accordingly direct that in cases of sitting MPs and MLAs, who have charges framed against them under offences of the Representation of the People..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Criminalization and opportunism plague Left in Kerala &#8211; K Praksh Babu'),
            thumbnail:'/images/5847/581883F367202F3A1BAAE9C79633F1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/09/post5847.html",
            publishDate:"Apr 9, 2014",
            summary:$sce.trustAsHtml("Why are the Left’s fortunes so down in Kerala? These days opinion polls after polls predict a near clean sweep for the Congress-led United Democratic..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மோடி அலை அல்ல. மோசடி அலை : உதயக்குமார் நேர்காணல்'),
            thumbnail:'/images/5839/MG_4324-Large-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/08/post5839.html",
            publishDate:"Apr 8, 2014",
            summary:$sce.trustAsHtml("ஏறத்தாழ மூன்று ஆண்டுகளுக்கு பிறகு இடிந்தகரையை விட்டு வெளியே வந்துள்ளார் உதயக்குமார். சென்னைக்கு வந்திருந்த அவரை சவுக்கு சார்பாக எடுத்த நேர்காணல்.அரசியலில் இருந்து முழுமையாக விலகி இருந்த அணு உலை எதிர்ப்பு போராட்டக் குழு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Modi: the knight in shining armor for NRIs? &#8211; Mehul Kamdar'),
            thumbnail:'/images/5826/th09-j_balaji-p_TH_1715895f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/08/post5826.html",
            publishDate:"Apr 8, 2014",
            summary:$sce.trustAsHtml("Gujarat Chief Minister Narendra Modi being mobbed by NRI fans at a Pravasi Bharatiya Divas function in New DelhiWhile it is difficult to stereotype a people on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('AAP is the option &#8211; Ajit Hari'),
            thumbnail:'/images/5802/Arvind-Kejriwal-evicted-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/07/post5802.html",
            publishDate:"Apr 7, 2014",
            summary:$sce.trustAsHtml("If Arvind Kejriwal and his Aam Aadmi Party did not really exist, chances are that no one in this country would actually have thought of..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய சவுக்கு தொடக்கம்'),
            thumbnail:'/images/5784/savukkulogo-150x150.png',
            categories:['default',''],
            href:"/default/2014/04/07/post5784.html",
            publishDate:"Apr 7, 2014",
            summary:$sce.trustAsHtml("அன்பார்ந்த வாசகர்களே……சவுக்கு தளத்தோடு தொடர்ந்து பயணித்து வந்த அன்பு உறவுகளே…….சவுக்கு தளம் மூடப்படுகிறது என்று அறிவிப்பு வெளியிடப்பட்டதும் பல்வேறு வாசகர்கள் துடிதுடித்தனர்.  தொலைபேசியிலும் முகநூல் வழியாகவும் என்ன ஆயிற்று… ஏது ஆயிற்று என்று பதறினர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Savukku is going bilingual'),
            thumbnail:'/images/5781/savukkulogo-150x150.png',
            categories:['default',''],
            href:"/default/2014/04/07/post5781.html",
            publishDate:"Apr 7, 2014",
            summary:$sce.trustAsHtml("We are happy to announce that your favourite Savukku is going bilingual.Hereafter we will regularly carry articles in English, written exclusively for us by experts in their respective..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கயமை&#8230; கயவாளித்தனம்&#8230; கபளீகரம்&#8230;'),
            thumbnail:'/images/5752/10150666_764271523585055_686913784_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/04/post5752.html",
            publishDate:"Apr 4, 2014",
            summary:$sce.trustAsHtml("கடமை. கண்ணியம். கட்டுப்பாடு.  இந்த வார்த்தைகளை திமுகவின் அனைத்துக் கூட்டங்களிலும் கேட்கலாம். அறிஞர் அண்ணா சொல்லிய இந்த வார்த்தைகளைத்தான் தி.மு.க. தனது கொள்கையாக பறைசாற்றிக் கொண்டிருக்கிறது.&#8220;நம்மிடம் பணமில்லை கட்சி நடத்த. ஆனாலும் வழிவகை இருக்கிறது.  ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செய்வீர்களா&#8230;?  நீங்கள் செய்வீர்களா&#8230;?'),
            thumbnail:'/images/5748/pic02-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/04/01/post5748.html",
            publishDate:"Apr 1, 2014",
            summary:$sce.trustAsHtml("ஜெயலலிதாவின் பிரச்சாரக் கூட்டங்களில் இந்த வார்த்தைகள்தான் பிரதானமாக எதிரொலிக்கிறது. பிரச்சாரக் கூட்டத்தில் ஜெயலலிதா தன் பிரதமர் கனவுகளை வெளிப்படையாகச் சொல்லாமல், மத்தியில் அதிகாரம் வேண்டும் என்று மறைமுகமாகச் சொன்னாலும், அதிமுக அடிமைகளின் &#8220;அம்மா பிரதமர்&#8221;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மோடி அல்ல&#8230;.. மோசடி'),
            thumbnail:'/images/5739/7cd7ae2a-81d1-434d-85c3-79fb06cb397dWallpaper1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/31/post5739.html",
            publishDate:"Mar 31, 2014",
            summary:$sce.trustAsHtml("Advani should drop ‘v’ from his name if he wants Modi to listen: Arvind Kejriwalஇதுதான் அர்விந்த் கேஜ்ரிவால், மோடியைப் பற்றி எழுதிய ட்வீட்.   அர்விந்த் கேஜ்ரிவால் அர்த்தமில்லாமல் பேசுபவர் அல்ல.  ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் &#8211; பாகம் 7'),
            thumbnail:'/images/5730/mpdisuperman-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/29/post5730.html",
            publishDate:"Mar 29, 2014",
            summary:$sce.trustAsHtml("2002 -கலவரங்களின் போது கோர்தன் ஜடாஃபியா மாநில  உள்துறை இணை அமைச்சராய் இருந்தார். அப்போதைய வன்முறைகளில் மோடியைப் போல இவருக்கும் பங்குண்டு என்று பலர் குற்றஞ்சாட்டுகின்றனர். 15 ஆண்டுகள் வி.ஹெ.ச்.பியில் இருந்த அவர் 90-களில்தான் பாஜகவில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் பாகம்-6'),
            thumbnail:'/images/5713/M_Id_405805_Narendra_Modi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/28/post5713.html",
            publishDate:"Mar 28, 2014",
            summary:$sce.trustAsHtml("2011 செப்டம்பர்-12 அன்று கடவுள் பெரியவர் என ட்விட்டரில் மோடி பதிவிடுகிறார். அன்றுதான்  உச்சநீதிமன்றம் குஜராத் கலவரங்கள்போது நிகழ்ந்த 9 மிக மோசமான சம்பவங்கள் குறித்து விசாரித்துக்கொண்டிருக்கும் சிறப்புப் புலனாய்வுக்குழு ஈசன் ஜாஃப்ரி படுகொலையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் &#8211; பாகம் 5'),
            thumbnail:'/images/5544/IMG-20140327-WA0018-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/27/post5544.html",
            publishDate:"Mar 27, 2014",
            summary:$sce.trustAsHtml("மோடி ஒரு தீவிர இந்துத்துவ அரசியல்வாதி என்ற புகழிலிருந்து வளர்ச்சிக்கு வித்திடுபவர் என்ற ஒரு பிம்பம் உருவாகத்தொடங்கியது 2008ல். அந்த ஆண்டு அக்டோபரில் டாட்டாவின் நானோ கார் தயாரிக்கும் தொழிற்சாலை மேற்கு வங்கத்திலிருந்து குஜராத்துக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் பாகம் 4'),
            thumbnail:'/images/5539/M_Id_405805_Narendra_Modi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/26/post5539.html",
            publishDate:"Mar 26, 2014",
            summary:$sce.trustAsHtml("முதல்வரான மோடி எப்படி நிர்வாகம் செய்வது எப்படி என்பதை மெல்ல மெல்லக் கற்றுக்கொண்டிருந்தார். அதிகாரிகளுடனான விவாதங்களின்போது பொதுவாக அமைதியாகவே இருந்தார், மற்றவர்கள் கூறுவதை அவர் நன்கு உள்வாங்க முயற்சி செய்தார் என்கிறார் அப்போது உயர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் பாகம் 3'),
            thumbnail:'/images/5533/m2_650_091313100538-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/25/post5533.html",
            publishDate:"Mar 25, 2014",
            summary:$sce.trustAsHtml("ஆர்,எஸ்.எஸ்சில் மோடி வேகமாக வளர்ந்தார் என்றாலும், அரசியல் அதிகாரம் வேண்டுமென்றால் அது பாரதீய ஜனதாவில் இணைந்தால்தான் என்பதை அவர் உணர்ந்தார். அப் பயணமும் 1987ல் தொடங்கியது. குஜராத் மாநில பாஜக செயல்பாடுகளை&nbsp; மேற்பார்வையிடும் பிரசாரக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Too close a call'),
            thumbnail:'/images/5527/jayalalithaa_karunanidhi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/24/post5527.html",
            publishDate:"Mar 24, 2014",
            summary:$sce.trustAsHtml("This election presents a very unique situation in Tamil Nadu where there is a five- cornered contest. In the recent history of Tamil Nadu there..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மீது செந்தேள் &#8211; பாகம் 2'),
            thumbnail:'/images/5524/narendra_modi_young_20121105_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/24/post5524.html",
            publishDate:"Mar 24, 2014",
            summary:$sce.trustAsHtml("-நரேந்திர மோடியின் கதை அவருக்கு பல போதனைகள் செய்த, அவரை உருவாக்கிய அமைப்புக்களின் கதையும் கூட. அரசியல் ரீதியாக அவ்வமைப்புக்கள் கடந்த ஐம்பதாண்டுகளில் வளர, அவற்றின் ஊடே மோடியும் வளர்ந்தார்.அவற்றுள் மிக முக்கியமானது, அரசியலில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிவலிங்கத்தின் மேல் செந்தேள்.'),
            thumbnail:'/images/5519/arunachal-narendramodi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/22/post5519.html",
            publishDate:"Mar 22, 2014",
            summary:$sce.trustAsHtml("நரேந்திர மோடி, இந்தியாவின் எல்லா பிணிகளுக்கும் மருந்து, எல்லா இழிவுகளுக்கும் தீர்வு, அனைத்து சிக்கல்களையும் ஒரு சொடுக்கில் தீர்க்கும் அலாவுதீனின் அற்புத விளக்கு என்று நினைப்பவர்களை இந்தக் கட்டுரை எந்த விதத்திலும் மாற்றப் போவதில்லை.ஆனால்,&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('To cut a criminal trial, short: Tracing Jayalalithaa&#8217;s DA case'),
            thumbnail:'/images/5702/Jayalalithaa-150x150.jpeg',
            categories:['default',''],
            href:"/default/2014/03/21/post5702.html",
            publishDate:"Mar 21, 2014",
            summary:$sce.trustAsHtml("&#8216;Amma for PM&#8217; chorus in AIADMK circles is deafening. The election manifesto of AIADMK and Jaya&#8217;s rhetoric in her election campaign further underscores her vaulting..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்ன குற்றங் கண்டாய் ?'),
            thumbnail:'/images/5514/sivaji_parasakthi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/21/post5514.html",
            publishDate:"Mar 21, 2014",
            summary:$sce.trustAsHtml("மீண்டும் ஒரு வழக்கின் மூலமாக தான் ஒரு திமுக உடன்பிறப்பு என்பதையும் தாண்டி, தான் ஒரு திமுகவின் காவலன் என்பதை, சென்னை உயர்நீதிமன்றத்தில் நீதிபதியாக இருக்கும் சி.டி.செல்வம் நிரூபித்திருக்கிறார்.சி.டி.செல்வம் ஒரு நீதிபதி எப்படியெல்லாம் இருக்கக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 40'),
            thumbnail:'/images/5511/10002789_10201740071929874_1759921490_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/19/post5511.html",
            publishDate:"Mar 19, 2014",
            summary:$sce.trustAsHtml("&#8220;வாப்பா தமிழ்.&nbsp; ஏமாத்தாம கரெக்ட் டையத்துக்கு வந்துட்டியே.. &#8221; என்றார் கணேசன்.&#8220;சரி. இப்போவாவது கூட்டணி நிலவரம் தெளிவாச்சாப்பா ? &#8220;&#8220;அண்ணே இந்த நிமிஷம் வரைக்கும் பிஜேபி அணி என்ன பண்ணப் போறாங்கன்ற தகவல் இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலித் அமைப்புக்களுக்கு முன் உள்ள சவால்கள்'),
            thumbnail:'/images/5497/Dharmapuri-Women-in-room-11-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/15/post5497.html",
            publishDate:"Mar 15, 2014",
            summary:$sce.trustAsHtml("அகில இந்திய அளவில் தலித் அமைப்புக்கள் குறித்து விரிவாக விவாதிக்கவியலாது. விடுதலைச் சிறுத்தைகள் திமுகவால் அவமானப்படுத்தப்பட்டது பற்றிய சவுக்கு கட்டுரையில் விடுபட்டுப் போன சில அம்சங்கள் மட்டும் இங்கு.கம்யூனிஸ்ட் கட்சிகள் தேர்தல் அரசியலிலிருந்து சற்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடுதலைச் சிறுத்தைகள் வேட்பாளர் மீது ஊழல் புகார்.'),
            thumbnail:'/images/5493/1798827_573933026036544_82469324_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/14/post5493.html",
            publishDate:"Mar 14, 2014",
            summary:$sce.trustAsHtml("விடுதலைச் சிறுத்தைகள் கட்சியின் வேட்பாளர் ரவிக்குமார் மீது வருமானத்துக்கு அதிகமாக சொத்து சேர்த்த புகார் எழுந்துள்ளது. &nbsp; இது குறித்த விபரங்கள் பின்வருமாறு.&nbsp;விடுதலைச் சிறுத்தைகள் கட்சியின் எம்.எல்.ஏவாக இருந்தவர் ரவிக்குமார். &nbsp; இவர் தலித்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிலை தடுமாறும் என் சீனியருக்கு ஒரு திறந்த மடல்'),
            thumbnail:'/images/5491/1010092_10203183859295191_1736377076_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/12/post5491.html",
            publishDate:"Mar 12, 2014",
            summary:$sce.trustAsHtml("அன்புள்ள சகோதரர் செல்வம் அவர்களுக்கு,இவ்வுலகின் கடைசி துதிபாடி நான்தான் என்பது தங்களுக்குத் நன்றாகத் தெரியும்.இருந்தபோதும் நீங்கள் சவுக்கு வலைத்தளம் தொடர்பான வழக்கை கையாண்ட விதம் குறித்து சமூக வலைத்தளங்களில் உங்கள் மீது நடக்கும் விமர்சனங்களும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தியக் கம்யூனிஸ்டுகளும் தேர்தல் அரசியலும்'),
            thumbnail:'/images/5489/joseph-stalin-logic-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/12/post5489.html",
            publishDate:"Mar 12, 2014",
            summary:$sce.trustAsHtml("கம்யூனிஸ்டுகள் பலவகை. காரல் மார்க்ஸ், ஸ்டாலின், போல் பாட், நல்ல கண்ணு, தா பாண்டியன், இப்படிப் பலரும் உலகின் கண்களில் கம்யூனிஸ்டுகளாகத் தெரிகின்றனர். பேராசானுக்குப் பிறகு உண்மையான கம்யூனிஸ்டுகள் யார் என்பதில் நிறைய குழப்பமிருக்கிறது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 39'),
            thumbnail:'/images/5479/tas_boy_run-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/11/post5479.html",
            publishDate:"Mar 11, 2014",
            summary:$sce.trustAsHtml("&#8220;எங்கப்பா தேர்தல் நேரம் அதுவுமா காணாமப் போயிட்ட. ? &#8221; என்று அலுப்பாக கேட்டார் கணேசன்.&#8220;அண்ணே நிலைமை தெரியாதா அண்ணே. ஒரு மாசமாச்சு வீட்டுக்கு போயி&#8221;&#8220;சாரிப்பா. மறந்துட்டேன்.&nbsp; செய்தியாவது இருக்கா. ? &#8220;&#8220;இருக்குண்ணே.&nbsp; நெறய்ய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திராவிடத்தால் வீழ்ந்தோம்.'),
            thumbnail:'/images/5468/0_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/10/post5468.html",
            publishDate:"Mar 10, 2014",
            summary:$sce.trustAsHtml("இந்த கட்டுரையின் தலைப்பை இப்போது உச்சரித்துக் கொண்டிருப்பவர்கள் கம்யூனிஸ்டுகள்.சுயமரியாதை என்ற முழக்கத்தோடுதான் திராவிட இயக்கம் தொடங்கியது.&nbsp;&nbsp; சுயமரியாதை மாநாடு என்று சுயமரியாதைக் காகவே மாநாடு நடத்திய இயக்கம் திராவிட இயக்கம். ஆனால் தங்களைத் தவிர..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் மவுனம் ?'),
            thumbnail:'/images/5464/2450802473_02c046146b_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/08/post5464.html",
            publishDate:"Mar 8, 2014",
            summary:$sce.trustAsHtml("டெல்லியில் ஆம் ஆத்மி கட்சியின் தலைவர் பிரசாந்த் பூஷண் 2ஜி டேப்புகள் வெளியிட்ட 5 பிப்ரவரி அன்று, திமுக தமிழக டிஜிபி ராமானுஜத்தை மாற்ற வேண்டும் என்று தேர்தல் ஆணையத்திடம் மனு அளித்தது.டிஜிபி ராமானுஜத்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('AN OPEN LETTER TO JUSTICE CT SELVAM FROM HIS JUNIOR'),
            thumbnail:'/images/5460/TOI_0026_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/05/post5460.html",
            publishDate:"Mar 5, 2014",
            summary:$sce.trustAsHtml("AN OPEN LETTER TO MY SLIPPING &nbsp;SENIOR Dear Brother&nbsp; You know that I am the last sycophant.Yet my heart bleeds to read the posts, comments and..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உங்களுக்கு நன்றி சிரில் தாமரைச் செல்வம்'),
            thumbnail:'/images/5455/TOI_0026-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/03/post5455.html",
            publishDate:"Mar 3, 2014",
            summary:$sce.trustAsHtml("XXX என்ற முகவரியில் உள்ள வீடு பூட்டி சீல் வைக்க இந்த நீதிமன்றம் உத்தரவிடுகிறது.&nbsp;&nbsp; காவல்துறையினர், அந்த வீட்டை சீல் வைக்கும் பணியை உறுதி செய்வார்கள்.&nbsp;&nbsp; நீதிமன்றப் பதிவாளர், இந்த உத்தரவின் நகலை, மாநகர..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடக்குமுறை அச்சாரம் &#8211; தினமணி தலையங்கம்'),
            thumbnail:'/images/5454/Dinamani_logo-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/03/post5454.html",
            publishDate:"Mar 3, 2014",
            summary:$sce.trustAsHtml("ஊடகங்கள் அரசியல்வாதிகளின் தாக்குதலுக்கு இலக்காகும் காலம் இது. அரசியல்வாதிகள் மட்டுமல்ல நீதித்துறையும் ஊடகங்களின் செயல்பாடுகளில் தலையிடுவதுதான் விசித்திரமாக இருக்கிறது. தனி மனித சுதந்திரத்திற்கும், பேச்சு சுதந்திரத்திற்கும் முன்னுரிமை அளிக்கும் நமது அரசியல் சட்டத்தின் உணர்வுகளைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பார்ந்த சி.டி.செல்வம்&#8230;.'),
            thumbnail:'/images/5452/TOI_0026-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/03/02/post5452.html",
            publishDate:"Mar 2, 2014",
            summary:$sce.trustAsHtml("உங்களை நீதிபதி சி.டி.செல்வம் என்று ஏன் அழைக்கவில்லை தெரியுமா ? நீதிபதிகளாக நடந்து கொள்பவர்களைத்தான் நீதிபதி என்று அழைக்க முடியும். திமுகவின் வட்டச் செயலாளர் போல நடந்து கொள்பவர்களை நீதிபதி என்று அழைக்க இயலாது.முதலில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கு தளத்தை பத்து நாட்களில் முடக்க உயர்நீதிமன்றம் உத்தரவு'),
            thumbnail:'/images/5395/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/28/post5395.html",
            publishDate:"Feb 28, 2014",
            summary:$sce.trustAsHtml("சவுக்கு தளத்தை முடக்க, சென்னை உயர்நீதிமைன்ற நீதிபதி சி.டி.செல்வம் தலைமையில் பல்வேறு நபர்கள் இணைந்து சதிச்செயலில் ஈடுபட்டதும், அதன் விளைவாக தாக்கல் செய்யப்பட்ட வழக்கு, சி.டி.செல்வம் முன்பு தொடர்ந்து விசாரிக்கப்பட்டு வந்ததும், சவுக்கு வாசகர்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொன்னா ஒதைப்பீங்க'),
            thumbnail:'/images/5393/DSC_3837_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/28/post5393.html",
            publishDate:"Feb 28, 2014",
            summary:$sce.trustAsHtml("புதனன்று திமுக தலைவர் கருணாநிதி வெளியிட்ட கேள்வி பதில் அறிக்கையில், ஜெயலலிதா சொத்துக் குவிப்பு வழக்கிலிருந்து தப்புவதற்காகவும், நீதிமன்றத்தில் ஆஜராவதை தவிர்க்கவுமே, தேர்தல் பிரச்சாரத்தை விரைவாகத் தொடங்குகிறார் என்று ஒரு அறிக்கை வெளியிட்டுள்ளார். &#8220;கேள்வி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 38'),
            thumbnail:'/images/5383/tas_boy_run_e-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/25/post5383.html",
            publishDate:"Feb 25, 2014",
            summary:$sce.trustAsHtml("&#8220;வாடா தமிழ்.&nbsp; என்ன விஷயம் முதல் விஷயம் ?&#8221; சொல்லு என்று ஆவலாக வரவேற்றான் பீமராஜன்.&#8220;எல்லோருக்கும் முன்னதா, அதிமுக வேட்பாளர் பட்டியலை அறிவிச்சி, தேர்தல் பிரச்சார தேதியையும் அறிவிச்சி, அனைத்து கட்சிகளையும் திக்குமுக்காட வெச்சிட்டாங்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விலகாத திரை.'),
            thumbnail:'/images/5371/sankara-subbu-satish-kumar-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/24/post5371.html",
            publishDate:"Feb 24, 2014",
            summary:$sce.trustAsHtml("சங்கர சுப்பு.&nbsp; மனித உரிமைப் போராளி.&nbsp; மனித உரிமைகள் எங்கே மீறப்பட்டாலும் அதற்காக குரல் கொடுப்பவர்.&nbsp; பல நக்சலைட்டுகளை போலி என்கவுன்டர்களில் இருந்து காப்பாற்றியவர் என்று பல்வேறு புகழுக்கு சொந்தக்காரர் சங்கரசுப்பு.தொடக்கத்தில் எல்லோருமே நன்றாகத்தான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எழுவர் விடுதலை : சட்டமும் அரசியலும்.'),
            thumbnail:'/images/5367/1618629_10152032562593303_132270080_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/21/post5367.html",
            publishDate:"Feb 21, 2014",
            summary:$sce.trustAsHtml("தலைப்பைப் பார்த்ததும், தமிழ் இந்து மற்றும் உயிர்மை இதழ்களில் வருவது போல, பிரக்ஞை பூர்வமான கட்டுரை என்று நினைத்து பயந்து விடாதீர்கள்.&nbsp;&nbsp; எளிமையாகவே விஷயத்தை அணுகலாம்.முருகன், சாந்தன் மற்றும் பேரறிவாளன் ஆகியோரின் மரண தண்டனையை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் நடத்த வேண்டும் சவுக்கு ?'),
            thumbnail:'/images/5360/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/18/post5360.html",
            publishDate:"Feb 18, 2014",
            summary:$sce.trustAsHtml(" சவுக்கு என்ற தளம் ஊர் கூடி இழுக்கும் தேர் என்பது பல முறை தெளிவாக விளக்கப்பட்டுள்ளது.&nbsp; இது ஒரு தனி நபரோ, ஒரு சிலரோ நடத்தும் தளம் அல்ல.மனித சமுதாயம் தோன்றி, குடும்பம், தனிச்சொத்து,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பஞ்சாப் திருடன்.'),
            thumbnail:'/images/5359/nps-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/14/post5359.html",
            publishDate:"Feb 14, 2014",
            summary:$sce.trustAsHtml("பாக்தாத் திருடன், 1960ம் ஆண்டு, எம்.ஜி.ஆர் நடித்து வெளிவந்த திரைப்படம். பிரபல இயக்குநர் டி.ஆர்.சுந்தரம் தயாரித்து இயக்கிய திரைப்படம் இது.&nbsp;&nbsp; எம்.ஜி.ஆர், வைஜெயந்தி மாலா உள்ளிட்ட பலர் நடித்த திரைப்படம் இது.&nbsp;&nbsp; 1924ம் ஆண்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 37'),
            thumbnail:'/images/5351/tas_boy_run_e-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/12/post5351.html",
            publishDate:"Feb 12, 2014",
            summary:$sce.trustAsHtml("&#8220;ஓயாது இந்த அலை. சாயாது இந்த சிலை&#8221; என்று பேசியபடியே மொட்டை மாடிக்குள் நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;வாடா வா.. போன வாரம் மாதிரியே லேட்டா வர்ற. கரெக்ட் டையத்துக்கு வர வேண்டாமா ? &#8220;&#8220;பற்பல,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடைசி ஆணி.'),
            thumbnail:'/images/5335/jaff-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/10/post5335.html",
            publishDate:"Feb 10, 2014",
            summary:$sce.trustAsHtml("ஆம் ஆத்மி கட்சி கடந்த செவ்வாயன்று வெளியிட்ட உரையாடல்கள், நாடு முழுக்க அதிர்வலைகளை ஏற்படுத்தியதோடு, தமிழகத்திலும் பெரிய தாக்கத்தை ஏற்படுத்தியுள்ளன.&nbsp;&nbsp; திமுக கூடாரமே கலங்கிப் போயிருக்கிறது.அரசியல் கட்சிகள், திரை மறைவு பேரங்களில் ஈடுபடுவது, சகஜமான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('2ஜி பேச்சு&#8230; ஒட்டுக் கேட்டது யார் ? அம்பலமாகும் பின்னணி'),
            thumbnail:'/images/5328/2g-tape-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/08/post5328.html",
            publishDate:"Feb 8, 2014",
            summary:$sce.trustAsHtml("இந்தியாவின் புதிய அரசை யார் அமைக்கப்போகிறார்கள் என்பதற்கான நாடாளுமன்றத் தேர்தல் நெருங்கிக் கொண்டிருக்கிற நேரத்தில் இந்தத் திடீர் திருப்பத்தை அரசியல் கட்சிகள் பலவும் எதிர்பார்க்கவில்லை. 2ஜி விவகாரம் தொடர்பான டெலிபோன் ஒட்டுக்கேட்பு பதிவுகள் வெளியாகி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வெட்கப்படுங்கள்.'),
            thumbnail:'/images/5326/pr300309b-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/07/post5326.html",
            publishDate:"Feb 7, 2014",
            summary:$sce.trustAsHtml("சவுக்கு தளத்தை முடக்குவதற்காக நடைபெற்று வரும் வழக்கு இன்று சென்னை உயர்நீதிமன்றத்தில் விசாரணைக்கு வந்தது.&nbsp; அப்போது, &nbsp;சென்னை மாநகர சைபர் பிரிவு போலீசார், இந்த தளத்தை நடத்துபவர் தொடர்ந்து தலைமறைவாக உள்ளார். எங்களால் பிடிக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 36.'),
            thumbnail:'/images/5324/tas_boy_run-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/07/post5324.html",
            publishDate:"Feb 7, 2014",
            summary:$sce.trustAsHtml("&#8220;ஊழல் ஒழிப்பே பிரதான லட்சியம்.&nbsp; ஊழலை ஒழித்தே தீருவேன்&#8221; என்று முஷ்டியை உயர்த்திக் குரல் கொடுத்துக் கொண்டே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;என்ன மச்சான். ஆம் ஆத்மி பார்ட்டியில சேந்துட்டியா ? &#8221; என்றான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('2ஜி விவகாரத்தில் கருணாநிதி மீது சிபிஐ விசாரணை நடத்தக் கோரி புகார்'),
            thumbnail:'/images/5314/Karunanidhi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/06/post5314.html",
            publishDate:"Feb 6, 2014",
            summary:$sce.trustAsHtml("2ஜி அலைக்கற்றை விவகாரம் தொடர்பான வழக்கு, டெல்லி சிறப்பு நீதிமன்றத்தில் நடந்து வருகிறது.&nbsp; ஸ்பெக்ட்ரம் ஒதுக்கீடு செய்ததற்கு கைமாறாக, கலைஞர் டிவிக்கு லஞ்சமாக 200 கோடி ரூபாய் கொடுக்கப்பட்டது என்று சிபிஐ குற்றம் சாட்டியது.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொம்பொலி&#8230;.'),
            thumbnail:'/images/5313/1623719_810184319007481_1493203556_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/06/post5313.html",
            publishDate:"Feb 6, 2014",
            summary:$sce.trustAsHtml("சூரியனின் அஸ்தமனத்தை விரும்புகிறவர்கள் யார்?&#8217; தி.மு.க. உடைய வேண்டும், அழிய வேண்டும் என்று ஏன் இத்தனை பேர் ஆசைப்படுகிறார்கள் என்று தெரியவில்லை. தி.மு.க.விற்கு எப்போதெல்லாம் பிரச்சினை வருகிறதோ அப்போதெல்லாம் அந்தக் கட்சி இத்தோடு அழிந்துவிடும் என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் மீதுள்ள புகார்களுக்கு விசாரணை  ஆணையம் அமைக்க கோரிக்கை'),
            thumbnail:'/images/5310/cuj1-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/01/post5310.html",
            publishDate:"Feb 1, 2014",
            summary:$sce.trustAsHtml("சவுக்கு தளத்தில், முன்னாள உளவுத்துறை தலைவர் ஜாபர் சேட் மற்றும், கலைஞர் டிவியின் மேலாண் இயக்குநர் சரத் குமார் ரெட்டி இடையேயான உரையாடல் சனியன்று வெளியிடப்பட்டது.&nbsp;இந்த உரையாடல் அரசியல் மற்றும் அதிகாரிகள் வட்டாரத்தில் பெரும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி விரும்பி வைத்துக் கொண்ட ஆப்பு.'),
            thumbnail:'/images/5304/AVN_KARUNA_120812f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/01/post5304.html",
            publishDate:"Feb 1, 2014",
            summary:$sce.trustAsHtml("2 ஆகஸ்ட் 2011 அன்று, ஜாபர் சேட் மீது லஞ்ச ஒழிப்புத் துறை வழக்கு பதிவு செய்ததைக் கண்டித்து, இஸ்லாமிய சமுதாயத்தைச் சேர்ந்த ஜாபர் சேட் பழிவாங்கப்படுகிறார் என்று கருணாநிதி வெளியிட்ட அறிக்கை.&nbsp;பழிவாங்கும் பொய்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வல்லவனுக்கு வல்லவன்.'),
            thumbnail:'/images/5303/jaffer_sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/02/01/post5303.html",
            publishDate:"Feb 1, 2014",
            summary:$sce.trustAsHtml("ஜாபர் சேட்.&nbsp; இந்தப் பெயரைக் கேட்டதும் உடனே நினைவுக்கு வருவது ஒட்டுக் கேட்பு. தொலைபேசிகளை ஒட்டுக் கேட்கும் வழக்கம் காலங்காலமாக இருந்தே வருகிறது என்றாலும், சமீப காலங்களில் ஒட்டுக் கேட்பு என்ற விவகாரம் பரபரபப்பாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மோடியின் அடிமைகள்&#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2014/01/31/post5296.html",
            publishDate:"Jan 31, 2014",
            summary:$sce.trustAsHtml("மோடிக்காகத் துடிக்கும் ஜூவி திருமாவேலனின் நாடி !in&nbsp;அ.தி.மு.க,&nbsp;இதர கட்சிகள்,&nbsp;ஊடகம்,&nbsp;தி.மு.க,&nbsp;பா.ஜ.க by&nbsp;வினவு, January 31, 2014தமிழ் மக்களின் நாடித்துடிப்பு என்று முத்திரை வாக்கியத்துடன் வெளிவரும் ஜூவி எனும் இதழும் அதன் ஆசிரியரும் மோடிக்காக செய்யும் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கு தளத்தை நடத்துபவரை கைது செய்ய உத்தரவு.'),
            thumbnail:'/images/5295/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/30/post5295.html",
            publishDate:"Jan 30, 2014",
            summary:$sce.trustAsHtml("சென்னை உயர்நீதிமன்றத்தில், சவுக்கு தளத்தை முடக்க வேண்டும் என்று கோரி, மூத்த வழக்கறிஞரும், மனித உரிமைப் போராளியும் ஆன (?????) சங்கரசுப்பு வழக்கு தொடர்ந்திருந்தார்.இந்த வழக்கு கடந்த ஒரு மாதமாக விசாரணையில் இருந்து வந்தது.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சாக்கடைகளும், சந்தன மரங்களும்.'),
            thumbnail:'/images/5294/Mad-HC-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/30/post5294.html",
            publishDate:"Jan 30, 2014",
            summary:$sce.trustAsHtml("1994ம் ஆண்டு முதன் முறையாக சட்டப்பேரவைத் தேர்தலை சந்தித்த மதிமுக, ஒரு சீட்டுகளில் கூட வெற்றி பெறாமல் படு தோல்வியை சந்தித்தது. அப்போது வைகோ வெளியிட்ட அறிக்கையில் கூறியது &#8220;காட்டாற்று வெள்ளத்தில் சாக்கடையோடு சில..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி அழகிரி இடையே நடந்தது என்ன ?'),
            thumbnail:'/images/5291/07VBG_M__KARUNANIDH_523831f-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/29/post5291.html",
            publishDate:"Jan 29, 2014",
            summary:$sce.trustAsHtml("கருணாநிதி மற்றும் அழகிரி இடையே என்ன நடந்தது. என்ன பேசினார்கள் என்று பல்வேறு ஊகங்கள், மற்றும் வதந்திகள் பரவியுள்ள நிலையில், சவுக்கு செய்தியாளர்கள் உண்மையை உள்ளபடி, அப்படியே அள்ளி வந்துள்ளார்கள்.என்ன நடந்தது என்பதை பார்க்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காவித்துண்டு கபாலிக்கு புலவர் புலமைப்பித்தன் கடிதம்'),
            thumbnail:'/images/5290/1609865_698051470216755_785580759_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/28/post5290.html",
            publishDate:"Jan 28, 2014",
            summary:$sce.trustAsHtml("என் அன்புத் தம்பி வைகோவுக்கு, உன் அண்ணன் ஏழைப்புலவன் எழுதும் மடல்! வணக்கம்! வாழிய நலம்! தம்பி என்று நான் உன்னை அழைப்பதை ஒப்புக்காக அழைப்பதாக நினைத்துக் கொள்ளாதே. என் மனசாட்சிப்படி நான் உன்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 35'),
            thumbnail:'/images/5288/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/28/post5288.html",
            publishDate:"Jan 28, 2014",
            summary:$sce.trustAsHtml("&#8220;அண்ணன் என்னடா. தம்பி என்னடா ? அவசரமான உலகத்திலே. ஆசை கொள்வதில் அர்த்தம் என்னடா காசில்லாதவன் குடும்பத்திலே&#8221; என்று பாடியபடியே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;வா தம்பி.&nbsp; உக்காரு.&nbsp; மொத மேட்டரா அழகிரி மேட்டர்தான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சசிகலா என்ற ஆமை'),
            thumbnail:'/images/5277/sasi-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/25/post5277.html",
            publishDate:"Jan 25, 2014",
            summary:$sce.trustAsHtml("மன்னார்குடி மாஃபியா.&nbsp; ஜெயலலிதா என்று அதிகாரத்துக்கு வந்தாரோ, அன்று முதல், ஆட்சி நிர்வாகத்தில் மன்னார்குடி மாஃபியாவின் பங்கு என்ன என்பதை ஒட்டுமொத்த தமிழகமும் அறியும்.டிசம்பர் 2011ல் சசிகலா உள்ளிட்ட மாஃபியா கும்பலை, ஜெயலலிதா வெளியேற்றியபோது,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதைத்தானா இந்த நீதிமன்றம் விரும்புகிறது&#8230;. ?'),
            thumbnail:'/images/5270/681x454-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/23/post5270.html",
            publishDate:"Jan 23, 2014",
            summary:$sce.trustAsHtml("நீதிபதி கர்ணனின் விவகாரங்களைப் பற்றி எழுதியதும் அந்த சம்பவத்தைப் பற்றி பல்வேறு தகவல்கள் வந்த வண்ணம் உள்ளன.&nbsp; கட்டுரை இணைப்பு.&nbsp; நீதிபதி கர்ணன் தலைமை நீதிபதி அறைக்குள் சென்று, அவரை அவதூறாகப் பேசிய சம்பவம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 34'),
            thumbnail:'/images/5263/7691_10201111778862940_1117094651_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/21/post5263.html",
            publishDate:"Jan 21, 2014",
            summary:$sce.trustAsHtml("&#8220;அன்பு வணக்கங்கள் அனைவருக்கும்&#8221; என்றபடி உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;வா மச்சான்.. வா.. பனி ரொம்பப் பெய்யுது.&nbsp; ஹாட்டா செய்திகளை எடுத்து விடு&#8221; என்று தமிழை வரவேற்றான் ரத்னவேல்.&#8220;முதல்ல தேர்தல் அணி நிலவரங்களை பாத்துடுவோம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிக்கு அவமானம்.'),
            thumbnail:'/images/5248/IMG_2197-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/17/post5248.html",
            publishDate:"Jan 17, 2014",
            summary:$sce.trustAsHtml("இன்று காலை செய்தித்தாள்களில் ஒரு செய்தி. நீதி நாயகர், நீதிச் சுடர், நீதி தேவன், நீதிப் பேரொளி, நீதிக் கோமான், நீதிச் சக்கரவர்த்தி கர்ணனை வேறு நீதிமன்றத்துக்கு இடமாற்றம் செய்ய வேண்டும் என்று, சென்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முற்போக்கு முகமூடிகள்.'),
            thumbnail:'/images/5242/V_mask_by_Sylent_Phantom-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/16/post5242.html",
            publishDate:"Jan 16, 2014",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் ஒரு கிராமத்தில் ஒரு தலித் பெண் இருக்கிறாள்.&nbsp; அவள் இரவு நேரத்தில் தனியாகக் செல்கையில், அவளை 10 பேர் சேர்ந்து பாலியல் வன்முறைக்கு உள்ளாக்குகிறார்கள்.&nbsp; அவளை அந்த நிலைக்கு ஆளாக்கியதில் 6 பேர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 33'),
            thumbnail:'/images/5237/tasmac_boy-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/14/post5237.html",
            publishDate:"Jan 14, 2014",
            summary:$sce.trustAsHtml("&#8220;வணக்கம் அண்ணே. எல்லாருக்கும் பொங்கல் வாழ்த்துக்கள்&#8221; என்றபடி மாடிக்குள் நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;வணக்கம் டா.. உக்காரு.. என்னென்ன செய்திகள் எடுத்துக்கிட்டு வந்துருக்க. ஒன்னு ஒன்னா சொல்லு, மொதல்ல தேர்தல் களம் எப்படி இருக்குன்னு சொல்லு&#8221;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதித்துறை உடன்பிறப்பே&#8230;'),
            thumbnail:'/images/5225/pr300309b-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/08/post5225.html",
            publishDate:"Jan 8, 2014",
            summary:$sce.trustAsHtml("அன்பார்ந்த நீதித்துறை உடன்பிறப்பே.&nbsp; ஆரிய கொட்டத்தை அடக்க, தந்தை பெரியாரின் வழியிலும், அறிஞர் அண்ணாவின் வழியிலும், திராவிட இனத்தைக் காக்க புதிதாய் பிறந்த கழகத்தின் நீதித்துறை பிரிவிலே இணைந்து, கழகத்தை காக்க வந்த உன்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கு தளத்தை முடக்கும் சதியில் நீதியரசர்கள்.'),
            thumbnail:'/images/5222/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/07/post5222.html",
            publishDate:"Jan 7, 2014",
            summary:$sce.trustAsHtml("அன்பார்ந்த வாசகர்களே. சவுக்கு தளம், கடந்த நான்கு ஆண்டுகளாக, உண்மைகளை வெளிக்கொணர வேண்டும் என்ற ஒரே நோக்கில், பல்வேறு இடையூறுகள், தடைகள், மிரட்டல்களுக்கு இடையே எழுதி வந்திருக்கிறது.&nbsp;&nbsp; உத்தமர் போல வேடமிட்டு, ஊரை ஏமாற்றி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 32'),
            thumbnail:'/images/5221/7691_10201111778862940_1117094651_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/07/post5221.html",
            publishDate:"Jan 7, 2014",
            summary:$sce.trustAsHtml("&#8220;வணக்கம்&#8221; என்றான் டாஸ்மாக் தமிழ்.&nbsp;&nbsp; கோரஸாக &#8220;வணக்கம்&#8221; என்றபடி கணேசன், வடிவேல், ரத்னவேல் மற்றும் பீமராஜன் தமிழை வரவேற்றனர்&#8220;என்னடா. அழகிரி அதிரடி பேட்டி குடுத்திருக்கார் ? &#8221; என்று விவாதத்தை தொடங்கினான் ரத்னவேல்.&#8220;ஆமாம்டா. அண்ணன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புகழ்த்தடம் தேடி&#8230;'),
            thumbnail:'/images/5207/DSC_5603-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/03/post5207.html",
            publishDate:"Jan 3, 2014",
            summary:$sce.trustAsHtml("மகா தமிழ்ப் பிரபாகரன் என்ற இளைஞன், இலங்கை சென்று, அந்நாட்டு ராணுவத்தால் கைது செய்யப்பட்டதும், சமூக வலைத்தளங்களில் பெரும் கொந்தளிப்பு ஏற்பட்டது.&nbsp; சவுக்கு தளத்திலும், மகா தமிழ்ப் பிரபாகரன் பணியாற்றிய விகடன் குழும நிறுவனங்களின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 31'),
            thumbnail:'/images/5203/1450169_10201111789343202_148895854_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/01/01/post5203.html",
            publishDate:"Jan 1, 2014",
            summary:$sce.trustAsHtml("&#8220;எல்லோருக்கும் புத்தாண்டு வாழ்த்துக்கள்&#8221; என்றான் டாஸ்மாக் தமிழ்.&#8220;வாப்பா.&nbsp; உனக்கும் வாழ்த்துக்கள்.&nbsp; எப்படி இருக்க ? &#8221; என்றார் கணேசன்.&#8220;நல்லா இருக்கேன்ணே.&nbsp; இந்த ஆண்டு எப்படிப் போச்சு.? &#8220;&#8220;சிறப்பா போச்சுப்பா.&nbsp; இந்த ஆண்டும் நம்மோட பணியை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புத்தாண்டு வாழ்த்துக்கள் 2014'),
            thumbnail:'/images/5198/1-DSC_0034-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/31/post5198.html",
            publishDate:"Dec 31, 2013",
            summary:$sce.trustAsHtml("2013ம் ஆண்டு இனிமையாகவே கடந்திருக்கிறது. &nbsp;2013ம் ஆண்டு சவுக்கு தளத்தைப் பொருத்தவரை, நீதித்துறை ஆண்டாக அறிவிக்கப்பட்டது.&nbsp; நீதித்துறை ஆண்டாக அறிவித்தற்கு ஏற்ப, நீதித்துறையை விமர்சித்து ஏராளமான கட்டுரைகள் எழுதப்பட்டன. ஆண்டின் தொடக்கத்திலேயே நேனே தேவுடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இருளில் மூழ்கும் நீதி'),
            thumbnail:'/images/5195/Untitled-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/30/post5195.html",
            publishDate:"Dec 30, 2013",
            summary:$sce.trustAsHtml("கவுண்டர்கள் என அழைக்கப்படும் கொங்கு வேளாளர்   இனம்   மாவட்டங்களில் வசிக்கும் தமிழைத் தாய் மொழியாக கொண்ட ஒரு சமுதாயமாகும்.  பகுதிகளில் பெருமளவில் உள்ள இவர்கள் பிற்படுத்தப்பட்ட வகுப்பை சேர்ந்தவர்கள். தமிழகத்தில் இவர்களை பொதுவாக கவுண்டர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலில் உறங்கும் ஊடகங்கள்'),
            thumbnail:'/images/5191/newspaper_cutting_20091116-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/28/post5191.html",
            publishDate:"Dec 28, 2013",
            summary:$sce.trustAsHtml("இந்திய ஊடகம் சந்தித்த மிகப்பெரிய நெருக்கடி 1975ம் ஆண்டு இந்திரா காந்தியால் அறிவிக்கப்பட்ட நெருக்கடி நிலை.&nbsp; இந்தியாவில் உள்ள அத்தனை பத்திரிக்கைகளும் மண்டியிட்டன.&nbsp; அனைத்து பத்திரிக்கைகளும் சென்சார் செய்யப்பட்ட பிறகே வெளியிட அனுமதிக்கப்பட்டன. அரை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விகடன் குழுமத்தின் கனத்த மவுனம்.'),
            thumbnail:'/images/5178/1010250_567294269981232_1533622636_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/26/post5178.html",
            publishDate:"Dec 26, 2013",
            summary:$sce.trustAsHtml("மகா.தமிழ்ப் பிரபாகரன்.&nbsp;&nbsp; இலங்கை ராணுவம் மற்றும் உளவுப் படையால் தற்சமயம் கடத்தப்பட்டு,&nbsp; இலங்கை தீவிரவாதக் குற்றத் தடுப்புப் பிரிவினரால் விசாரிக்கப்பட்டு வருகிறார்.இந்த மகா. தமிழ்ப் பிரபாகரன், புலித்தடம் தேடி என்ற நூலின் ஆசிரியர்.&nbsp; 22..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அழிவின் பாதையில்'),
            thumbnail:'/images/5174/2176838929_30c714cf74_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/26/post5174.html",
            publishDate:"Dec 26, 2013",
            summary:$sce.trustAsHtml("1995ம் ஆண்டு ஏப்ரல் மாதத்தில் நீதிபதி சிவராஜ் பாட்டில் சென்னை உயர்நீதிமன்ற நீதிபதியாக இருந்தார்.&nbsp; ஜெயலலிதா மீது வழக்கு தொடுக்க அப்போது கவர்னராக இருந்த சென்னா ரெட்டி அனுமதி அளித்ததை எதிர்த்து, தொடரப்பட்ட வழக்கில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 30'),
            thumbnail:'/images/5167/7691_10201111778862940_1117094651_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/24/post5167.html",
            publishDate:"Dec 24, 2013",
            summary:$sce.trustAsHtml(" &#8220;வணக்கம். எல்லோருக்கும் வணக்கம்&#8221; என்று மொட்டை மாடியில் நுழைந்தான டாஸ்மாக் தமிழ்.&#8220;வாடா. வா. உக்காரு.&nbsp; தேர்தல் களம் சூடு பிடிச்சிடுச்சு போல.. பரபரப்பா என்னென்ன செய்திகள் வச்சுருக்க&#8221; என்றான் பீமராஜன்.&#8220;கிட்டத்தட்ட அமெரிக்க ஜனாதிபதி தேர்தல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போலி தலித்துகள்'),
            thumbnail:'/images/5156/923207_10151678027034273_1471113477_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/22/post5156.html",
            publishDate:"Dec 22, 2013",
            summary:$sce.trustAsHtml("ஆ.ராசாவை தகத்தகாய தலித்துகளின் கதிரவன் என்றார் கருணாநிதி.&nbsp; அது ஆ.ராசா அலைக்கற்றை ஊழலில் சிக்கி, மூழ்கிக் கொண்டிருந்த நேரம்.&nbsp;&nbsp; உச்சநீதிமன்றத்துக்கு நியமிக்கப்பட இருந்த கர்நாடக உயர்நீதிமன்ற தலைமை நீதிபதி பி.டி.தினகரன் மீது அலை அலையாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆளும் அதிகாரிகள்'),
            thumbnail:'/images/5149/DevyaniK-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/21/post5149.html",
            publishDate:"Dec 21, 2013",
            summary:$sce.trustAsHtml("அமெரிக்காவில் உள்ள இந்திய தூதரக அதிகாரி தேவ்யானி கோப்ராக்டே விசா மோசடி உள்ளிட்ட மோசடிகளில் ஈடுபட்டதாக கைது செய்யப்பட்டதற்கு எதிர்ப்பு தெரிவித்து, இந்திய அரசு டெல்லியில் உள்ள அமெரிக்க தூதரக வாயிலில் இருந்த பாதுகாப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காவல்துறை உங்கள் நண்பன்.'),
            thumbnail:'/images/5141/9836PDEC---13---B-big-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/18/post5141.html",
            publishDate:"Dec 18, 2013",
            summary:$sce.trustAsHtml("இந்த வாசகத்தை தமிழ்நாடு காவல்துறை அடிக்கடி பயன்படுத்திப் பார்த்திருப்பீர்கள்.&nbsp;&nbsp;&nbsp; அந்த தமிழ்நாடு காவல்துறை ஒரு நேர்வில் தமிழக மக்களுக்கு எப்படிப்பட்ட நண்பனாக செயல்பட்டது என்பது குறித்தே இந்த கட்டுரை.பேராசை பிடித்த மனிதர்களை பார்த்திருப்பீர்கள். பேராசையே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 29'),
            thumbnail:'/images/5135/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/17/post5135.html",
            publishDate:"Dec 17, 2013",
            summary:$sce.trustAsHtml("“என்னப்பா லேட்டு… எவ்வளவு நேரம் வெயிட் பண்றது“ என்று அலுத்துக் கொண்டார் கணேசன்.“அண்ணே உங்களுக்காக செய்தியெல்லாம் சேகரிச்சிக்கிட்டு வரணுமில்ல. அதான் லேட்டாயிடுச்சு“ என்றான் டாஸ்மாக் தமிழ்.“சரி.. இந்த வாரம் என்னடா விசேஷம். சொல்லு“ என்றான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொத்துக் குவிப்பு வழக்கும்;  கோடநாடு வழக்கும்!'),
            thumbnail:'/images/5126/20IN_KARUNANIDHI9_1304858f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/14/post5126.html",
            publishDate:"Dec 14, 2013",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,முதலமைச்சர் ஜெயலலிதா மீதான சொத்துக் குவிப்பு வழக்கில் தொடர்புடைய சென்னையில் உள்ள அசையும் சொத்துக்களை, வழக்கு விசாரணை நடந்து வரும் பெங்களூர் சிறப்பு நீதி மன்றத்துக்கு வரும் 21ஆம் தேதிக்குள் கொண்டு வர வேண்டுமென்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வலுக்கிறது மன்மோகன் &#8211; சோனியா மோதல்?'),
            thumbnail:'/images/5125/Diarchy-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/10/post5125.html",
            publishDate:"Dec 10, 2013",
            summary:$sce.trustAsHtml("நான்கு மாநில சட்டப் பேரவைத் தேர்தல்களிலும் காங்கிரஸ் கட்சி எதிர்கொண்டிருக்கும் வரலாறு காணாத தோல்வி, கட்சித் தலைமையை ஆட்டம் காண வைத்திருப்பதில் ஆச்சரியம் ஒன்றுமில்லை. அடுத்து ஆறு மாதங்களில் நடைபெற இருக்கும் மக்களவைத் தேர்தலில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 28'),
            thumbnail:'/images/5123/1450169_10201111789343202_148895854_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/10/post5123.html",
            publishDate:"Dec 10, 2013",
            summary:$sce.trustAsHtml("&#8220;வெற்றி. வெற்றி.. வெற்றி.. மோடிக்கு வெற்றி.. மோடிக்கு வெற்றி&#8221; என்று கூறியபடியே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;என்ன மச்சான். பண்டாரக் கட்சியில சேந்துட்டியா&#8221; என்று கிண்டல் அடித்தான் பீமராஜன்.&#8220;நான் சேரலடா.. ஆனா, பிஜேபி காரங்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருப்பு ஆடுகள் 3'),
            thumbnail:'/images/5100/law-150x150.jpeg',
            categories:['default',''],
            href:"/default/2013/12/08/post5100.html",
            publishDate:"Dec 8, 2013",
            summary:$sce.trustAsHtml("சவுக்கு தளத்தில் இதற்கு முன்பாக கருப்பு ஆடுகள் 1 மற்றும் கருப்பு ஆடுகள் 2 என்று இரண்டு கட்டுரைகள் வழக்கறிஞர் சமூகத்தில் உள்ள கருப்பு ஆடுகள் குறித்து எழுதப்பட்டன. அந்தக் கட்டுரைகளை எழுதியதற்கு வழக்கறிஞர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 27'),
            thumbnail:'/images/5085/tas-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/12/03/post5085.html",
            publishDate:"Dec 3, 2013",
            summary:$sce.trustAsHtml("&#8220;எல்லாருக்கும் வணக்கம்&#8221;&nbsp; என்று புன்னகையோடு உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.&#8220;வா மச்சான்.&nbsp; வணக்கம்&#8221; என்று தமிழை வரவேற்றான் பீமராஜன்.&#8220;என்ன சரக்குடா வச்சிருக்க.&nbsp; ? &#8221; என்று செய்திகளை கொட்டுமாறு கேட்டான் ரத்னவேல்.&#8220;ஒரு சிறந்த பத்திரிக்கையா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீதும் நன்றும்&#8230; … …'),
            thumbnail:'/images/5065/Tejpal-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/11/30/post5065.html",
            publishDate:"Nov 30, 2013",
            summary:$sce.trustAsHtml("“டெஹல்கா&#8221;. இந்திய பத்திரிக்கை உலகையே இந்தப் பெயர் மாற்றிப் போட்டது என்றால்&nbsp;அது மிகையல்ல. 1999ம் ஆண்டு ஒரு சாதாரண வலைத்தளமாக உருவான டெஹல்கா,&nbsp; பிஜேபியின் அரசாங்கத்தையே ஆட்டிப்படைத்தது.நாங்கள் வித்தியாசமானவர்கள் என்ற முழக்கத்தோடு ஆட்சியைப் பிடித்த பிஜேபி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 26'),
            thumbnail:'/images/5056/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/11/26/post5056.html",
            publishDate:"Nov 26, 2013",
            summary:$sce.trustAsHtml("&#8220;வணக்கம்&#8221; என்று சொல்லியபடி மொட்டை மாடியில் நுழைந்தான் தமிழ்.&#8220;வா மச்சான்&#8221; என்று டாஸ்மாக் தமிழை வரவேற்றான் பீமராஜன். &#8220;ஏற்காடு இடைத்தேர்தல் பிரச்சாரம் எப்படி இருக்கு ? &#8221; என்றான் ரத்னவேல்.&#8220;ஏற்காடு தேர்தல் நல்லா சூடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பின் தொடரும் நிழல்.'),
            thumbnail:'/images/5046/spying2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/11/23/post5046.html",
            publishDate:"Nov 23, 2013",
            summary:$sce.trustAsHtml("ஒட்டுக் கேட்டல், பின் தொடருதல், 24 மணி நேரமும் கண்காணிப்பில் வைத்திருத்தல் போன்றவை, உளவு பார்ப்பதின் ஒரு பகுதி. குடும்பம், தனிச்சொத்து, அரசு என்ற அமைப்புகள் தோன்றியதிலிருந்தே, உளவும் ஒரு அங்கமாக இருந்து வருகிறது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 25'),
            thumbnail:'/images/5039/tas_boy_5-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/11/19/post5039.html",
            publishDate:"Nov 19, 2013",
            summary:$sce.trustAsHtml("  “நந்தவனத்தில் ஓர் ஆண்டி &#8211; அவன்நாலாறு மாதமாய்க் குயவனை வேண்டிகொண்டு வந்தான் ஒரு தோண்டி &#8211; மெத்தக்கூத்தாடிக் கூத்தாடிப் போட்டுடைத்தாண்டி&#8221;என்று பாடியபடியே மொட்டை மாடிக்குள் நுழைந்தான் டாஸ்மாக் தமிழ்.“என்னடா பாட்டும் கூத்துமா வர்ற. ?”..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 24'),
            thumbnail:'/images/5027/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/11/12/post5027.html",
            publishDate:"Nov 12, 2013",
            summary:$sce.trustAsHtml("“வணக்கம் எல்லோருக்கும் வணக்கம்” என்று சொல்லியபடி டாஸ்மாக் தமிழ் உள்ளே நுழைந்த்தும் யாரும் எதுவும் சொல்லாமல் அமைதியாக இருந்தனர்.”என்ன. எல்லோரும் அமைதியா இருக்கீங்க. பேச மாட்டீங்களா ? ” என்றான்.மீண்டும் அமைதி.“என்ன யாருமே பேச..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மூடர் கூடம்.'),
            thumbnail:'/images/5015/681x454-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/10/04/post5015.html",
            publishDate:"Oct 4, 2013",
            summary:$sce.trustAsHtml("மூடர் கூடம் என்றவுடன் மீண்டும் நவீன் படத்தைப் பற்றிய கட்டுரை என்று நினைத்து விடாதீர்கள்.&nbsp; இது வேறு மூடர் கூடத்தைப் பற்றியது.&nbsp;&nbsp; இந்தத் தலைப்பு ஏன் வைக்கப்பட்டது என்பதை கட்டுரையின் இறுதியில் நீங்களே புரிந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 23'),
            thumbnail:'/images/5007/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/10/01/post5007.html",
            publishDate:"Oct 1, 2013",
            summary:$sce.trustAsHtml("“எல்லோருக்கும் மாலை வணக்கம்“ என்று மொட்டை மாடியில் நுழைந்தான் டாஸ்மாக் தமிழ்.“வணக்கம் தமிழ். மோடி கூட்டத்துக்கு திருச்சிக்கு போயிருந்தியா ? ““தமிழ்நாட்டுல மோடி அலை வீசத் தொடங்கிடுச்சுன்னு பிஜேபி காரங்க பிரச்சாரம் பண்ணிக்கிட்டு இருக்காங்க.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அழைக்காமல் பலரையும், அழைத்துப் பலரையும்? &#8211; கருணாநிதி கடிதம்'),
            thumbnail:'/images/4995/Karunanidhi_to_leave_for_Delhi_tomorrow-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/27/post4995.html",
            publishDate:"Sep 27, 2013",
            summary:$sce.trustAsHtml(" அழைக்காமல் பலரையும், அழைத்துப் பலரையும்?கலைஞர் கடிதம் &#8211; 27.9.2013உடன்பிறப்பே,ஒரு விழாவினை எப்படி நடத்த வேண்டும் என்பதற்குப் பதிலாக, எப்படி நடத்தக்கூடாது என்பதற்கு உதாரணமாக நடந்த சினிமா நூற்றாண்டு விழா பற்றி சில கருத்துகளைக் கூறுகிறேன்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மோடியை ஏன் ஆதரிக்க முடியாது ?'),
            thumbnail:'/images/4993/narendra_modi-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/26/post4993.html",
            publishDate:"Sep 26, 2013",
            summary:$sce.trustAsHtml("நரேந்திர மோடி. பிரதமர் வேட்பாளராக அறிவிக்கப்பட்ட பிறகு, திருச்சிக்கு மோடி வருகிறார். &nbsp;&nbsp;மோடி தமிழகம் வருகை தரும் நாள் நெருங்க நெருங்க, தமிழகமெங்கும் ஒரு பரபரப்பு. இளைஞர்கள் இளந்தாமரை மாநாட்டை ஆவலாக எதிர்ப்பார்த்து காத்திருக்கிறார்கள்....."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 22'),
            thumbnail:'/images/4991/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/24/post4991.html",
            publishDate:"Sep 24, 2013",
            summary:$sce.trustAsHtml("r“எல்லோருக்கும் இனிய மாலை வணக்கம்“ என்று சொல்லியபடி உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“வணக்கம் வணக்கம்“ உக்காருடா.&nbsp; கட கட ன்னு தகவல்களைச் சொல்லு“ என்றான் பீமராஜன்.&nbsp; ரத்னவேல், கணேசன் மற்றும் வடிவேல் சிரித்தபடியே தமிழை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மூடர் கூடம்…'),
            thumbnail:'/images/4970/Moodar-Koodam-Movie-Poster-01-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/18/post4970.html",
            publishDate:"Sep 18, 2013",
            summary:$sce.trustAsHtml("  சவுக்கு தளம் தொடங்கி நான்கு ஆண்டுகள் கடந்து விட்டன.&nbsp; இந்த நான்கு ஆண்டுகளில் இரண்டே இரண்டு திரைப்படங்களைப் பற்றித்தான் சவுக்கு தளத்தில் எழுதப்பட்டுள்ளது. ஒன்று அங்காடித் தெரு.&nbsp; மற்றொன்று வழக்கு எண் 18/19.&nbsp; இப்போது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 21'),
            thumbnail:'/images/4965/tas_boy_57-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/17/post4965.html",
            publishDate:"Sep 17, 2013",
            summary:$sce.trustAsHtml("“சட்டம் ஒரு இருட்டறை.. “ என்று கூறியபடியே மொட்டை மாடியில் நுழைந்தான் டாஸ்மாக் தமிழ்.“வா மச்சான்… என்ன இன்னைக்கு சீக்கிரம் வந்துட்ட “ என்று கேட்டபடியே அவனை வரவேற்றான் ரத்னவேல்.விரித்திருந்த பெட்ஷீட்டில் ரத்னவேலோடு கணேசன்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதி வெல்லும்;  நிச்சயம் வெல்லும்!  &#8211; பெங்களுரு சொத்துக் குவிப்பு வழக்கு குறித்து கருணாநிதி அறிக்கை'),
            thumbnail:'/images/4957/20IN_KARUNANIDHI9_1304858f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/14/post4957.html",
            publishDate:"Sep 14, 2013",
            summary:$sce.trustAsHtml(" நீதி வெல்லும்;&nbsp; நிச்சயம் வெல்லும்!&nbsp;உடன்பிறப்பே,எந்தவித சிக்கல் வந்தாலும் அதை&nbsp; ஏற்பது என்ற ஒரே முடிவோடு இந்தக் கடிதத்தை எழுதுகிறேன்.&nbsp; ஏனென்றால் நீதி நிலைக்க வேண்டும் என்பதில் எனக்குள்ள அசையா&nbsp; நம்பிக்கைதான்.பெங்களூர் சிறப்பு நீதி மன்றத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 7'),
            thumbnail:'/images/4955/Asaram2-620x450-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/13/post4955.html",
            publishDate:"Sep 13, 2013",
            summary:$sce.trustAsHtml(" அகமதாபாத்திலிருந்து 35 கிலோ மீட்டர் தொலைவிலுள்ள மோட்டேரா என்ற சிறு நகரத்தில்தான் 42 ஆண்டுகளுக்கு முன்னால் ஒரு மனிதர் வந்து இறங்கினார்.&nbsp; அப்போது அவருக்குக் கிடைத்த அரசியல் தொடர்புகளால் 10 ஏக்கர் நிலம் அவருக்குக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 20'),
            thumbnail:'/images/4944/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/10/post4944.html",
            publishDate:"Sep 10, 2013",
            summary:$sce.trustAsHtml("“ஒன்னுமே புரியல உலகத்துல…. என்னமோ நடக்குது… மர்மமா இருக்குது” என்று பாடியபடி மொட்டை மாடிக்குள் நுழைந்தான் டாஸ்மாக் தமிழ். மொட்டை மாடியில் விரித்திருந்த பெட்ஷீட்டில் கணேசன், பீமராஜன், வடிவேல், ரத்னவேல் அனைவரும் அமர்ந்திருந்தனர்.பீமராஜன்தான் தமிழை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் மீது குற்றப் பத்திரிக்கை தாக்கல்.'),
            thumbnail:'/images/4925/jaffer_sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/05/post4925.html",
            publishDate:"Sep 5, 2013",
            summary:$sce.trustAsHtml("ஜாபர் சேட். திமுக ஆட்சிக் காலத்தில் தமிழகத்தின் முடிசூடா மன்னனாகத் திகழ்ந்தவர் ஜாபர் சேட். திமுக ஆட்சியில் நினைத்ததை சாதித்தவர் ஜாபர் சேட்.&nbsp; முக.அழகிரி, முக.ஸ்டாலின் மற்றும் கனிமொழி, இவர்களையெல்லாம் விட, கருணாநிதிக்கு நெருக்கமான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 19'),
            thumbnail:'/images/4924/tas_boy_46565-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/09/03/post4924.html",
            publishDate:"Sep 3, 2013",
            summary:$sce.trustAsHtml("“சோதனை மேல் சோதனை…. போதுமடா சாமி… வேதனைதான் வாழ்க்கை என்றால் தாங்காது பூமி” என்று பாடியபடியே வந்தான் டாஸ்மாக் தமிழ்.”என்ன மச்சான்… சோகப்பாட்டா பாடுற ? ” என்று தமிழ் அமரும் முன்பாகவே கேள்வி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இடியும் நிலையில் பொறியியல் கல்லூரி : ஒரு பகீர் ரிப்போர்ட்.'),
            thumbnail:'/images/4915/IMG_9358-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/30/post4915.html",
            publishDate:"Aug 30, 2013",
            summary:$sce.trustAsHtml("தலைப்பைப் பார்த்ததும் பயந்து விடாதீர்கள்.&nbsp; கட்டுரையை முழுமையாக படியுங்கள்.காமராஜ். எளிமை என்பதன் மறுபெயர் காமராஜ்.&nbsp; தனக்கென்று சொத்துக்களை சேர்த்து வைத்துக் கொள்ளாத ஒரு அரிய அரசியல்வாதி காமராஜ்.&nbsp; ஆனால், பிச்சையெடுத்துக் கொண்டிருப்பவனுக்கு கோடீஸ்வரன் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மறுக்கிறார் சமஸ்&#8230;.'),
            thumbnail:'/images/4911/1240059_683709764992402_1274495728_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/30/post4911.html",
            publishDate:"Aug 30, 2013",
            summary:$sce.trustAsHtml(" சவுக்கு தளத்தில், கடந்த வார டாஸ்மாக் தமிழில், தமிழ் இந்து நாளேட்டில் பணிபுரியும் சமஸ் என்பவருக்கும், அங்கே பணியாற்றும் கவிதா முரளிதரன் என்பவருக்கும் பனிப்போர் என்றும், சமஸ் வலதுசாரி சிந்தனை உடையவர் என்றும், செய்தி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 18'),
            thumbnail:'/images/4909/tas_boy_5-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/26/post4909.html",
            publishDate:"Aug 26, 2013",
            summary:$sce.trustAsHtml("கருணாநிதியின் மகிழ்ச்சி… மற்றும் சோகம்“அன்பின் பிறப்பிடம், அற நெறியின் இருப்பிடம், கருணை வடிவம், கற்பின் திருவுருவம், மாசற்ற மாணிக்கம், மாற்றுக் குறையாத தங்கம்”&nbsp; என்று வேகமாக வசனம் பேசியபடியே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 17'),
            thumbnail:'/images/4892/tas_boy_3_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/20/post4892.html",
            publishDate:"Aug 20, 2013",
            summary:$sce.trustAsHtml(" “ஆல் ப்ராப்ளம்ஸ் ஓவர் ப்ரோ” என்று சொல்லிக்கொண்டே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“என்னடா தலைவா ரிலீஸைப்பத்திதானே சொல்ற ?” என்றான் வடிவேல்.”ஆமாம் மச்சான்.. உங்கப் பத்திரிக்கைக்குத்தான் கஷ்டம்””ஏன்டா.. எங்கப் பத்திரிக்கைக்கு என்ன கஷ்டம் ?..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சபிக்கப்பட்டவர்கள்.'),
            thumbnail:'/images/4886/681x454-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/17/post4886.html",
            publishDate:"Aug 17, 2013",
            summary:$sce.trustAsHtml("அரசு ஊழியர்கள்.&nbsp; இவர்கள் ஒரு விசித்திரப் பிறவிகள். பிறக்கும்போது முதுகெலும்போடு பிறந்து, நாட்பட நாட்பட முதுகெலும்பு தானாக மறையும் ஒரு விசித்திரமான பிறவிகள் இந்த அரசு ஊழியர்கள். அரசுப் பணியில் சேர்ந்த நாள் முதலாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 16'),
            thumbnail:'/images/4882/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/13/post4882.html",
            publishDate:"Aug 13, 2013",
            summary:$sce.trustAsHtml("“வாங்கண்ணா வணக்கங்கண்ணா.. செய்தியைச் சொல்லுங்கண்ணா” என்று தமிழ் உள்ளே நுழையும்போதே வரவேற்றான் ரத்னவேல்.”டேய் என்னடா கிண்டலா ?” என்று கேட்டவாறே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“வெல்கம்மு வெல்கம்மு ப்ரோ…” என்று தன் பங்குக்கு தமிழை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 15'),
            thumbnail:'/images/4867/tas_boy_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/06/post4867.html",
            publishDate:"Aug 6, 2013",
            summary:$sce.trustAsHtml("“வணக்கம்… வணக்கம்…” என்று உரக்க அறிவித்தபடியே மொட்டை மாடியில் நுழைந்தான் தமிழ்.”வா மச்சான்.&nbsp; உக்காரு…. என்னென்ன செய்திகள்லாம் வச்சுருக்க.” என்று ஆவலாகக் கேட்டான் பீமராஜன்.”இருக்குடா… இருக்கு… நெறய்ய இருக்கு.. எங்க ஸ்டார்ட் பண்றதுன்னு யோசிக்கிறேன்”..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மகளைப் பெற்ற அப்பாக்கள்…'),
            thumbnail:'/images/4855/522757_385401311545378_1902187585_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/03/post4855.html",
            publishDate:"Aug 3, 2013",
            summary:$sce.trustAsHtml("கடந்த இரண்டு நாட்களாக, சமூக வலைத்தளங்களிலும், ஊடகங்களிலும், பொதுமக்கள் மத்தியிலும் பரபரப்பாக விவாதிக்கப்பட்டு வரும் விவகாரம் சேரன் மகள் தாமினியின் காதல்.ஒரு கிராமத்தில் எப்போதும் குடித்து விட்டு ரவுடித்தனம் செய்யும் ஒருவன் இருக்கிறான்.&nbsp; அவனுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜீன்ஸ்  அணிந்த வன்னிய இளைஞன்.'),
            thumbnail:'/images/4851/DSC_8300-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/08/02/post4851.html",
            publishDate:"Aug 2, 2013",
            summary:$sce.trustAsHtml(" தலித் இளைஞர்கள், ஜீன்ஸ் பேன்ட் அணிந்து கொண்டு, கூலிங் கிளாஸ் போட்டுக் கொண்டு வன்னிய பெண்களை கவர்ந்து ஏமாற்றுவதையே வாடிக்கையாகக் கொண்டிருக்கிறார்கள் என்று பகிரங்கமாக குற்றம் சாட்டினார் பாட்டாளி மக்கள் கட்சித் தலைவர் ராமதாஸ்.இங்கே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாறிய வேந்தர்.'),
            thumbnail:'/images/4847/poster-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/31/post4847.html",
            publishDate:"Jul 31, 2013",
            summary:$sce.trustAsHtml("நாறிய வேந்தர்.பாரி வேந்தர்.&nbsp; பாரிவேந்தர் என்று தன்னை அழைத்துக் கொள்ளும், பச்சமுத்து யார் ?&nbsp; பச்சமுத்து, தமிழகத்தின் நம்பர் ஒன் கல்விக் கொள்ளையன்.&nbsp;&nbsp; பச்சமுத்து நடத்தும் மருத்துவக் கல்லூரியில் ஒரு எம்பிபிஎஸ் சீட்டின் விலை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 14'),
            thumbnail:'/images/4844/tas_boy_3_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/30/post4844.html",
            publishDate:"Jul 30, 2013",
            summary:$sce.trustAsHtml("“வணக்கம்… எல்லாருக்கும் வணக்கம்” என்று மொட்டை மாடியில் நுழைந்தான் தமிழ்.”வா மச்சான்..&nbsp; உக்காரு..&nbsp; ஒவ்வொரு மேட்டரா சொல்லு” என்று சிரிப்போடு அவனை வரவேற்றான் பீமராஜன்.”நான் அமெரிக்கா போறேன்…” என்றான் தமிழ்.”என்ன மச்சான்… திடீர்னு நீ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிராமணத்துவமும், அணுத்துவமும்'),
            thumbnail:'/images/4830/993532_488963797848381_1764364882_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/28/post4830.html",
            publishDate:"Jul 28, 2013",
            summary:$sce.trustAsHtml("அன்பார்ந்த தமிழ்ச் சொந்தங்களே:சாதி மத மறுப்பு வணக்கம்! நாம் வாழும் சமூகத்தின் அடி ஆழத்தில் இயங்கிக் கொண்டிருக்கிற ஒரு சில முக்கியமான நீரோட்டங்களை, அவற்றின் போக்குகளை, தன்மைகளை, ஒற்றுமைகளை, தமக்குள் கொண்டிருக்கும் தாக்கங்களை சுட்டிக்காட்டுவதுதான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 13'),
            thumbnail:'/images/4828/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/23/post4828.html",
            publishDate:"Jul 23, 2013",
            summary:$sce.trustAsHtml(" “ஸ்டாம்பு மீது ஸ்டாம்பு வந்து என்னைச் சேரும்… அதை&nbsp;வாங்கித் தந்த பெருமையெல்லாம் ஆஸ்திரியாவைச் சேரும்…” என்று பாடியபடியே உள்ளே நுழைந்தான்…”என்னப்பா ஸ்டாம்பு போஸ்ட் ஆபீஸ்னு பாட்ற” என்றார் கணேசன்.&nbsp; அண்ணே… திமுக தலைவர் ஸ்டாம்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சம்பத் குமாரைக் காப்பாற்றுவது யார் ?'),
            thumbnail:'/images/4810/Sampath__Kumar_DC-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/20/post4810.html",
            publishDate:"Jul 20, 2013",
            summary:$sce.trustAsHtml("தமிழக லஞ்ச ஒழிப்புத் துறை, லஞ்சம் வாங்கும் அரசு ஊழியர்களை கையும் களவுமாக பிடித்தது குறித்த பல்வேறு செய்திகளைப் பார்த்திருப்பீர்கள்.சமீபத்திய செய்தித்தாள்களில் வந்த சில செய்திகள்.ஜாதிச் சான்றிதழ் வழங்க ரூ.1500 லஞ்சம் வாங்கிய வேலூர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Social Media is a place for the grown ups.'),
            thumbnail:'/images/4806/facebook-testing-new-timeline-format-with-single-column-of-posts-updated--8395815038-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/16/post4806.html",
            publishDate:"Jul 16, 2013",
            summary:$sce.trustAsHtml(" Yesterday’s Hindu published an article “Trolls invade social media : activists”.&nbsp; The article predominantly quotes the version of self styled activists Manushya Puthran and Kavin..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 12'),
            thumbnail:'/images/4802/t_boy_and_gang2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/14/post4802.html",
            publishDate:"Jul 14, 2013",
            summary:$sce.trustAsHtml("தமிழ் மொட்டை மாடியில் நுழைவதைப் பார்த்ததும் வரவேற்றார் கணேசன். “வாப்பா தமிழ்““என்னண்ணே.. எல்லோரும் சீக்கிரம் வந்துட்டீங்க போல.. “ என்றபடியே உள்ளே நுழைந்தான் தமிழ்.“ஆமாம் மச்சான், இன்னைக்கு எல்லோரும் கொஞ்சம் சீக்கிரமே வந்துட்டோம்.“ என்றான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இளவரசனை காக்க தவறிய தலித்துகள்'),
            thumbnail:'/images/4795/ilavarasan_poster-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/13/post4795.html",
            publishDate:"Jul 13, 2013",
            summary:$sce.trustAsHtml("இளவரசன் திவ்யா..இந்தியாவை திரும்பி பார்க்க வைத்த காதல் ஜோடி. ஜாதி ஒழிப்பே மக்கள் விடுதலை என்ற கருத்தை வலுப்படுத்தும் நோக்கோடு, எத்தகைய எதிர்ப்புகள் வந்த போதிலும் அதையெல்லாம் துச்சமென தூக்கி எறிந்து காதல் வானில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டுபாக்கூர் துரைசாமி.'),
            thumbnail:'/images/4793/july_12_poster_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/08/post4793.html",
            publishDate:"Jul 8, 2013",
            summary:$sce.trustAsHtml("சைதை துரைசாமி நடத்தும் மனிதநேய அறக்கட்டளையின் தகிடுதத்தங்கள் குறித்து, சவுக்கு தளத்தில் தொடர்ந்து எழுதப்பட்டு வந்துள்ளது. ஏகலைவன் வார இதழிலும் இது குறித்து கட்டுரைகள் வெளியிடப்பட்டிருந்தன.&nbsp; தற்போது தமிழ்நாடு அரசு குடிமைப் பயிற்சி நிலையம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 11'),
            thumbnail:'/images/4786/tas_boy_11-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/07/post4786.html",
            publishDate:"Jul 7, 2013",
            summary:$sce.trustAsHtml("வழக்கமான உற்சாகம் இல்லாமல் அமைதியாக உள்ளே நுழைந்தான். யாரும் அவனிடம் ஏன் அமைதியாக இருக்கிறாய் என்றும் கேட்கவில்லை.&nbsp; அழுத்தமான மவுனம் நிலவியது.பீமராஜன் மவுனத்தை உடைத்தான். “என்னடா எதுவும் பேசாம இருக்கற ? ““என்னத்தடா பேசச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருப்பு ஆடுகள் 2'),
            thumbnail:'/images/4775/lawyer-03-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/07/04/post4775.html",
            publishDate:"Jul 4, 2013",
            summary:$sce.trustAsHtml("கடந்த மாதம் இரண்டு நாட்கள் தமிழகம் முழுக்க நீதிமன்றப் புறக்கணிப்பு நடந்தது.&nbsp; இந்த நீதிமன்றப் புறக்கணிப்புக்கான காரணங்கள், பின்புலம் ஆகியவற்றைப் பற்றி சவுக்கு தளத்தில் கருப்பு ஆடுகள் என்ற கட்டுரையில் விரிவாக எழுதப்பட்டிருந்தது.அந்த நீதிமன்றப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 10'),
            thumbnail:'/images/4761/t_boy_and_gang-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/30/post4761.html",
            publishDate:"Jun 30, 2013",
            summary:$sce.trustAsHtml("“சக்ஸஸ். இன்று முதல் நானும் ஒரு ஏமாற்றுக்காரன்” என்று கத்தியபடி உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“என்னப்பா டிராமாவுல பேசற மாதிரி வசனம் பேசற… ? “ என்றார் கணேசன்.“இது நான் பேசுன வசனம் இல்லன்ணே…....."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 10'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2013/06/30/post4759.html",
            publishDate:"Jun 30, 2013",
            summary:$sce.trustAsHtml("“சக்ஸஸ். இன்று முதல் நானும் ஒரு ஏமாற்றுக்காரன்” என்று கத்தியபடி உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“என்னப்பா டிராமாவுல பேசற மாதிரி வசனம் பேசற… ? “ என்றார் கணேசன்.“இது நான் பேசுன வசனம் இல்லன்ணே…....."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினி மீது குற்றப்பத்திரிக்கை தாக்கல்.'),
            thumbnail:'/images/4750/14680364_Nalini_Murugan_9-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/29/post4750.html",
            publishDate:"Jun 29, 2013",
            summary:$sce.trustAsHtml("கடந்த 2010ம் ஆண்டு, நளினி முன் விடுதலை கோரி, சென்னை உயர்நீதிமன்றத்தில் வழக்கு தாக்கல் செய்து, அந்த வழக்கு விசாரணையில் இருந்தபோது, நளினியிடம் செல்போன் ஒன்று பறிமுதல் செய்யப்பட்டதாக, கருணாநிதி அரசு குற்றம் சுமத்தியது.&nbsp;&nbsp;இதையடுத்து,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முடிவின் ஆரம்பம்.'),
            thumbnail:'/images/4748/DMK_flag-150x150.png',
            categories:['default',''],
            href:"/default/2013/06/28/post4748.html",
            publishDate:"Jun 28, 2013",
            summary:$sce.trustAsHtml("18 செப்டம்பர் 1949 அன்று சென்னை பவழக்காரத் தெருவில் நடந்த அந்த வரலாற்றுச் சிறப்பு மிக்க அமைப்புக் குழுக் கூட்டத்தில்தான் திராவிட முன்னேற்றக் கழகம் உருவெடுத்தது. “நாம் இதுவரையில் பரப்பி வந்த கொள்கைகளையும் லட்சியத்தையும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 9'),
            thumbnail:'/images/4742/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/23/post4742.html",
            publishDate:"Jun 23, 2013",
            summary:$sce.trustAsHtml("உள்ளே நுழையும்போதே தலையை சொறிந்து கொண்டே வந்தான் டாஸ்மாக் தமிழ்.&nbsp;&nbsp; வந்ததும் எதுவும் பேசாமல் அமைதியாக அமர்ந்தான்.“என்னப்பா அமைதியா இருக்க… ? எதுவும் பிரச்சினையா… ? “ என்று தமிழைப் பார்த்து வாஞ்சையோடு கேட்டார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருப்பு ஆடுகள்.'),
            thumbnail:'/images/4731/advocate-symbol-copy-150x150.png',
            categories:['default',''],
            href:"/default/2013/06/21/post4731.html",
            publishDate:"Jun 21, 2013",
            summary:$sce.trustAsHtml("வழக்கறிஞர்கள் தொழில் என்பது மருத்துவர்களின் தொழிலுக்கு நிகராக உயிரைக் காக்கும் தொழில் என்றால் அது மிகையாகாது. வழக்கறிஞர்களால்தான், இன்று நமது சமுதாயத்தில் நடைமுறையில் அமலில் இருக்கும் பல விதிமுறைகள், சட்டங்கள் போன்றவற்றின் பின்னணியில் பல..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேட்டை நாய்கள்….'),
            thumbnail:'/images/4729/Police-Dog-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/18/post4729.html",
            publishDate:"Jun 18, 2013",
            summary:$sce.trustAsHtml("வேட்டை நாய்கள் என்பன கண்ணில் தென்படும் இரையை வேட்டையாடுவதற்காகவே வளர்க்கப்படுகின்றன.&nbsp; அந்த நாய்களுக்கு, தாங்கள் எதைத் தாக்குகிறோம், எதற்காக தாக்குகிறோம் என்பது போன்ற எந்தப் புரிதலும் கிடையாது. அந்த வேட்டை நாய்களிடம் நியாய தர்மத்தையும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈஷா மையத்துக்கு எதிராக மேலும் ஒரு பொது நல வழக்கு.'),
            thumbnail:'/images/4725/sadhguru_ashram2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/18/post4725.html",
            publishDate:"Jun 18, 2013",
            summary:$sce.trustAsHtml("கோவையில் சத்குரு என்கிற ஜக்கி வாசுதேவ் என்கிற ஜெகதீஷ் என்பவர், ஈஷா யோக மையம் என்ற ஒன்றை நடத்தி வருகிறார். யோகா சொல்லித் தருகிறேன் என்ற பெயரில் இந்த அமைப்பு வனங்களை அழித்து, காட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐபிஎஸ் அதிகாரி மீது கொலை வழக்கு பதிவு செய்யக் கோரி உயர்நீதிமன்றத்தில் வழக்கு.'),
            thumbnail:'/images/4723/392566_336752149720772_904922927_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/17/post4723.html",
            publishDate:"Jun 17, 2013",
            summary:$sce.trustAsHtml("திருப்பூர் மாவட்டம் கண்ணகி நகரைச் சேர்ந்த பழனிச்சாமி என்பவர் 31.08.2012 அன்று அடையாளம் தெரியாத நபர்களால் கொல்லப்பட்டார். இந்த கொலை வழக்கு தொடர்பாக அந்தப் பகுதியைச் சேர்ந்த 30க்கும் மேற்பட்ட நபர்கள் சந்தேகத்தின் அடிப்படையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 8'),
            thumbnail:'/images/4720/tas_boy_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/17/post4720.html",
            publishDate:"Jun 17, 2013",
            summary:$sce.trustAsHtml("விசிலிடித்தபடியே மொட்டை மாடியில் நுழைந்த டாஸ்மாக் தமிழை புன்னகையோடு வரவேற்றார் கணேசன்..“என்னப்பா குஜாலா இருக்க போலருக்கே… ? ““நான் குஜாலா இல்லன்ணே… திமுக தலைவர்தான் குஜாலா இருக்கார். “ என்று பூடகமாக சிரித்தான் தமிழ்.“என்னடா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டுபாக்கூர் ஐ.ஏ.எஸ். அகாடமிகள்&#8230;'),
            thumbnail:'/images/4712/poster-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/15/post4712.html",
            publishDate:"Jun 15, 2013",
            summary:$sce.trustAsHtml("ஜூன் இரண்டாம் வாரம். இது ஐ.ஏ.எஸ். பயிற்சி மையங்களின் பொற்காலம். இப்போதுதான் அட்மிஷன் குவிந்து வங்கி கணக்கில் நிதிநிலை உயரும்.தலைநகர் சென்னையில் திரும்பிய இடமெல்லாம் வண்ண வண்ண சுவரொட்டிகள். எல்லா பயிற்சி மையங்களின் விளம்பரத்திலும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொம்புக் கட்டுரை எழுதுவது எப்படி ?'),
            thumbnail:'/images/4709/5588_483934921675714_1877858711_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/14/post4709.html",
            publishDate:"Jun 14, 2013",
            summary:$sce.trustAsHtml("திமுகவில், சொம்படிக்க கவிஞர்கள், மேடைப் பேச்சாளர்கள், பத்திரிக்கையாளர்கள், உரையாசிரியர்கள், பாடலாசிரியர்கள், பட்டிமன்றப் பேச்சாளர்கள் என்று பஞ்சமே கிடையாது.&nbsp; அறிவாலயம், கோபாலபுரம் அல்லது சிஐடி காலனிப் பக்கம் போனாலே காது கிழியும் அளவுக்கு ஜால்ரா சத்தம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தொடரும் வடுகப்பட்டிகள்.'),
            thumbnail:'/images/4704/1002071_587515354603701_337645868_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/13/post4704.html",
            publishDate:"Jun 13, 2013",
            summary:$sce.trustAsHtml("வடுகப்பட்டி அவலத்தின் பின்னணியில் மீண்டும் கொதிப்பு, கண்டனம், இக்கொடுமைகளுக்கு தீர்வு என்ன என்பது குறித்தும் அலசல். அனைத்துமே ஓரிரு வாரங்களில் நின்றுவிடும். இதுவும் கடந்து போகும் என்ற ரீதியில் அவரவர் அடுத்த பிரச்சினைகளுக்குத் தாவிவிடுவர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைச்சிறந்த எம்.பி…'),
            thumbnail:'/images/4701/ZIP.1_165-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/11/post4701.html",
            publishDate:"Jun 11, 2013",
            summary:$sce.trustAsHtml("ஒரு பாராளுமன்ற உறுப்பினரின் பணி என்ன… ?&nbsp; கட்சியின் கொள்கைப்படியோ, அல்லது கட்டளைப்படியோ பாராளுமன்றத்தில் உரையாற்ற வேண்டும். முக்கியமான விவாதங்களில் பங்கெடுத்துப் பேச வேண்டும். அவர் சார்ந்த மாநிலத்தின் நலன்கள் குறித்து பாராளுமன்றத்தில் குரல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சைதை துரைசாமி முகத்திரையைக் கிழிக்கும் தொடருக்குத் தடை…'),
            thumbnail:'/images/4696/saidai_poster-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/10/post4696.html",
            publishDate:"Jun 10, 2013",
            summary:$sce.trustAsHtml("சைதை துரைசாமி… பெரிய மனிதர் போலவும், புரவலர் போலவும் காண்பித்துக் கொண்டு, அயோக்கியத்தனங்களை அரங்கேற்றிக் கொண்டிருக்கும், சென்னை மாநகராட்சி மேயர் சைதை துரைசாமி பற்றி, சவுக்கில் விரிவான கட்டுரைகள் வந்துள்ளன.தற்போது ஏகலைவன் என்ற அரசியல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 7'),
            thumbnail:'/images/4694/tas_boy_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/09/post4694.html",
            publishDate:"Jun 9, 2013",
            summary:$sce.trustAsHtml("“ஹாய் மச்சான்… வணக்கம்ணே…“ என்று அமர்க்களமாக மொட்டை மாடியில் காலடி எடுத்து வைத்தான் டாஸ்மாக் தமிழ்.வெயில் தணிந்திருந்ததால், அனைவரும் தரையில் அமர்ந்திருந்தனர். தான் வாங்கிக் கொண்டு வைத்திருந்த சரக்கை எடுத்து வைத்தான் தமிழ்.“அதானே பாத்தேன்…&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்புள்ள திவ்யா…'),
            thumbnail:'/images/4681/DIVYA__DHARMAPURI_1478334f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/07/post4681.html",
            publishDate:"Jun 7, 2013",
            summary:$sce.trustAsHtml("அன்புள்ள திவ்யா…தமிழ் இலக்கியங்களிலும், உலக இலக்கியத்திலும் பல அமர காதல் கதைகள் உண்டு.&nbsp; அவற்றில் பல இன்று வரை சிலாகித்துப் பேசப்படுகின்றன.&nbsp; ஆனால், உங்களுக்கும் இளவரசனுக்குமான காதல், கண் முன்னே ஒரு பெரும் பிரளயத்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு கவிஞர் சித்தரான கதை… ..'),
            thumbnail:'/images/4679/395327_484137091655497_1012655174_n_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/05/post4679.html",
            publishDate:"Jun 5, 2013",
            summary:$sce.trustAsHtml("சித்தர்கள் என்பவர்கள் மரபை உடைத்தவர்கள் என்று தமிழ் வரலாற்றில் அறியப்படுகிறார்கள்.&nbsp; ஒவ்வொரு சித்தரும் ஒவ்வொரு வகைப்பட்டவர்.ஏராளமான சித்தர்கள் இருந்தாலும், அகப்பேய்ச் சித்தர், அழுகணிச் சித்தர், குதம்பைச் சித்தர், இடைக்காட்டுச் சித்தர், கஞ்சமலைச் சித்தர், கடுவெளிச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொம்பாலானது&#8230;'),
            thumbnail:'/images/4671/946833_484134978322375_1164224053_n_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/05/post4671.html",
            publishDate:"Jun 5, 2013",
            summary:$sce.trustAsHtml("&#8220;தமிழ் நாட்டில் எந்தப் பிரச்சினை நடந்தாலும் அதை தன்னைச் சுற்றி நடக்கும் பிரச்சினையாக மாற்றி விடுகிறாரே கலைஞர்?&#8221;’என்று ஒரு முறை ஒரு பத்திரிகையாளர் என்னிடம் ஆச்சரியத்துடன் குறிப்பிட்டார். எனக்கு அதில் ஆச்சரியப்பட ஒன்றுமே இல்லை...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஓய்வு பெறுங்கள்… ….'),
            thumbnail:'/images/4669/final_on_11-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/02/post4669.html",
            publishDate:"Jun 2, 2013",
            summary:$sce.trustAsHtml("90 வயது. 90 வயதில் ஒரு மனிதன் உயிரோடு இருக்க முடியும்.&nbsp; உண்டு, உறங்கி, எப்போது காடு அழைக்கும் என்று காட்டை எதிர்நோக்கி அந்தக் காலத்தைப் போல வருமா என்று புலம்பியபடி காலம் தள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 6'),
            thumbnail:'/images/4666/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/06/02/post4666.html",
            publishDate:"Jun 2, 2013",
            summary:$sce.trustAsHtml("தலையைத் தொங்க போட்டபடியே சற்று டல்லாக மொட்டை மாடிக்குள் நுழைந்தான் டாஸ்மாக் தமிழ்.“என்ன தம்பி… டல்லா இருக்க…“ என்று அவனைப் பார்த்து பதட்டத்தோடு கேட்டார் கணேசன்.&nbsp; “ஒண்ணும் இல்லன்ணே“.“அட சொல்லுப்பா…““நம்ப பேசறத கேக்கற நெறய்ய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆங்கிலம் ஏன், எங்கு, எந்த அளவில்?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2013/06/02/post4657.html",
            publishDate:"Jun 2, 2013",
            summary:$sce.trustAsHtml("&nbsp;ஆங்கில வழியில் பயில்வோர் ஆங்கிலத்தில்தான் உள் தேர்வுகள் எழுதவேண்டுமா, அநீதி, கிராமப்புற மாணவர்கள் பாதிக்கப்படுவர் என ஆளாளுக்கு கொதித்தெழ, அரண்டு போன ஜெயலலிதா அம்முயற்சியைக் கைவிட்டார்.தமிழார்வலர்களுக்கு மகிழ்ச்சி. எங்கள் உணர்வுகளைப் புரிந்துகொண்டார் புரட்சித் தலைவி...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கு தளம் மீது சன் டிவி மகாலட்சுமி காவல்துறையில் புகார்&#8230;'),
            thumbnail:'/images/4656/29529_132364633445226_2686343355_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/31/post4656.html",
            publishDate:"May 31, 2013",
            summary:$sce.trustAsHtml("சவுக்கு இணையதளத்தில் வெளிவந்த இரண்டு பேர் ஏழு காதல் கட்டுரை தொடர்பாக &nbsp;சன் டிவி &nbsp;மகாலட்சுமி காவல்துறையில் புகார் அளித்துள்ளார்.சன் டிவி மகாலட்சுமி பற்றி இரண்டு பேர் ஏழு காதல் (கரெக்டா எண்ணிதானே போட்டோம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 5'),
            thumbnail:'/images/4650/tas_boy_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/26/post4650.html",
            publishDate:"May 26, 2013",
            summary:$sce.trustAsHtml("“ஹாய் மச்சான் இந்தாங்க… சில் போறதுக்கு முன்னாடி ஸ்டார்ட் பண்ணுங்க&#8221; என்று மூன்று பேரிடமும் குளிர்ந்த பீர்களை எடுத்து நீட்டினான்.“அண்ணே ரமோனாவ் கிடைக்கல… பகார்டி இருக்கு. இதுவும் சூப்பரா இருக்கும். இந்தாங்க“ என்று கணேசனிடம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பால் கனகராஜ் தலைமையில் வழக்கறிஞர்கள் அடாவடி…'),
            thumbnail:'/images/4638/IMG_9083-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/23/post4638.html",
            publishDate:"May 23, 2013",
            summary:$sce.trustAsHtml("இன்று (23/05/2013) காலை சுமார் 11.30 மணியளவில் வரதட்சிணை வழக்கில் கைது செய்யப்பட்ட சன்டிவி மகாலட்சுமியின் தாயார் ஜான்சி ராணி மற்றும் அவரது மகன் சதீஷ் ஆகியோரை நாகூரிலிருந்து கைது செய்து எழும்பூர் நீதிமன்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சூது கவ்வும்'),
            thumbnail:'/images/4637/29529_132364633445226_2686355_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/23/post4637.html",
            publishDate:"May 23, 2013",
            summary:$sce.trustAsHtml("மகாலட்சுமி. இவர் ஒரு முக்கிய பிரமுகர்.&nbsp; மிகவும் முக்கிய பிரமுகர்.&nbsp; இப்படி இவர் தன்னைத்தானே நினைத்துக் கொண்டிருக்கிறார்.&nbsp; இவரை வெறும் மகாலட்சுமி என்று அழைத்தால் இவருக்குக் கோபம் வந்து விடும்.&nbsp; ‘சன் டிவி மகாலட்சுமி’..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 4'),
            thumbnail:'/images/4629/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/19/post4629.html",
            publishDate:"May 19, 2013",
            summary:$sce.trustAsHtml(" “மின்வெட்டு நாளில் இன்று மின்சாரம் போல வந்தாயே…..“ என்று பாடிக்கொண்டே உள்ளே நுழைந்தான் டாஸ்மாக் தமிழ்.“வாய்யா வா….&nbsp; என்ன லவ் மூட்ல இருக்கற போலருக்கு ? ““எனக்கு ஏது லவ்வு ஜவ்வெல்லாம்…. ? நைட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மே 17'),
            thumbnail:'/images/4617/Picture_058-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/16/post4617.html",
            publishDate:"May 16, 2013",
            summary:$sce.trustAsHtml("இயலாமையும் வஞ்சகமும்சூல் கொண்டுமானுடம் தெரு மேய்ந்போதுகொடிய நாசகார பாஷாணங்களைமுள்ளிவாய்க்கால் முட்டுக்குள்மிக மலினமாக ஒத்திகை பார்த்து,நவீன நரபலி நடத்தப்பட்டஅரக்கத்தனத்தின்நான்காம் ஆண்டு. ஒருசிலகருங்காலிகளின் வரலாற்று துரோகத்தால்,இருபத்து ஓராம் நூற்றாண்டில்உலகம் வியப்புடன் திரும்பிப்பார்த்ததமிழினத்தின் ஒப்பற்ற எழுச்சிகாட்டிக்கொடுக்கப்பட்டகரிநாள். தந்தரமும் நயவஞ்சகமும் ஒன்றுசேர்ந்துஒரு இனத்தின்நாற்பது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வன்முறையில் ஈடுபடும் கட்சி தடை செய்யப்படும் : ஜெயலலிதா'),
            thumbnail:'/images/4615/jayalalitha7-150x150.jpeg',
            categories:['default',''],
            href:"/default/2013/05/13/post4615.html",
            publishDate:"May 13, 2013",
            summary:$sce.trustAsHtml("வன்முறையில் ஈடுபடும் எந்த கட்சியாக இருந்தாலும், அதனை தடை செய்ய தமிழக அரசு தயங்காது என்று தமிழக முதல்வர் தெரிவித்துள்ளார்.வட மாவட்டங்களில் கடந்த &nbsp;சில &nbsp;நாட்களாக &nbsp; நடைபெற்று &nbsp; வரும் வன்முறைச் சம்பவங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 3'),
            thumbnail:'/images/4613/tas_boy_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/12/post4613.html",
            publishDate:"May 12, 2013",
            summary:$sce.trustAsHtml("”ரஷ்யர்கள் தயாரிச்ச அணு உலை மட்டும் வேணாம்கறீங்க… அவங்க ஊர் வோட்கா மட்டும் வேணுமா ?&nbsp; என்னண்ணே நியாயம் இது ?” என்று கேட்டபடியே கணேசனுக்கு ரமோனாவ் வோட்கா பாட்டிலை எடுத்து வைத்தான் தமிழ்.”சரவணபவன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சாதிதாஸ் !'),
            thumbnail:'/images/4604/p88b-150x135.jpg',
            categories:['default',''],
            href:"/default/2013/05/11/post4604.html",
            publishDate:"May 11, 2013",
            summary:$sce.trustAsHtml(" சாதிதாஸ்!ப.திருமாவேலன் “நாங்கள் இருக்கும் கூட்டணிதான் வெற்றிக் கூட்டணி!&#8221; என்று சொல்வார் டாக்டர் ராமதாஸ். &#8221;எந்தக் கூட்டணி வெற்றிபெறப்போவதாகத் தெரிகிறதோ, அந்தக் கூட்டணியில் போய்ச் சேர்ந்துகொள்வார் அவர்!&#8221; என்று எதிர்க் கட்சிகள் கிண்டல் அடிப்பார்கள். இப்போது எந்தக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நேர்மையே உன் விலை என்ன?'),
            thumbnail:'/images/4601/gold-ETFs-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/11/post4601.html",
            publishDate:"May 11, 2013",
            summary:$sce.trustAsHtml("அரசுப் பணியில் அதிகாரிகளாக சேரும் தொடக்க காலத்தில் நேர்மையாக நடந்து கொள்ள வேண்டும் என்ற எண்ணத்தோடுதான் பெரும்பாலானோர் சேர்கிறார்கள்.&nbsp; சேரும்போதே பல கோடிகளை ஆட்டையைப் போட வேண்டும் என்ற எண்ணத்தோடு சேர்பவர்கள்&nbsp; விதிவிலக்குகள்.&nbsp; ஆனால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தரமற்ற கூடங்குளம் அணு உலைகள்'),
            thumbnail:'/images/4594/KUDANKULAM_829871f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/07/post4594.html",
            publishDate:"May 7, 2013",
            summary:$sce.trustAsHtml("கிணறு வெட்ட, வெட்ட பூதம் கிளம்பியது போன்று, அணுசக்திக்கு எதிரான மக்கள் இயக்கம் கடந்த 600 நாட்களுக்கும் மேலாக, அறிவார்ந்த முறையில், அறிவியல் பூர்வமாக கூடங்குளம் அணுஉலைத் தொடர்பான பல உண்மைகளை மத்திய, மாநில..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரண்டு பேர் ஏழு காதல்..'),
            thumbnail:'/images/4653/29529_132363156778707_580865_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/06/post4653.html",
            publishDate:"May 6, 2013",
            summary:$sce.trustAsHtml("என்னடா இது.. இரண்டு பேர் ஏழு காதல் என்று வியப்பாக இருக்கிறதா.&nbsp; ஆம். இது ஒரு வித்தியாசமான காதல் கதைதான்.&nbsp; கண்றாவிக் கதை என்றும் சொல்லலாம்.முக்கோண காதல் கதை கேள்விப்பட்டிருப்பீர்கள். நாற்கோண காதல் கதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ் 2'),
            thumbnail:'/images/4592/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/06/post4592.html",
            publishDate:"May 6, 2013",
            summary:$sce.trustAsHtml("&nbsp;“எல்லோருக்கும் வணக்கம்“ என்றபடியே உள்ளே மொட்டை மாடிக்குள் நுழைந்தான் தமிழ்.“வணக்கம் தமிழ் உக்காருப்பா. நம்ப ஐட்டம் கொண்டு வந்தியா“ என்றார் கணேசன்.“இந்தாங்கண்ணே“ என்று ரமோனாவ் வோட்கா பாட்டிலை எடுத்து அளித்தான்.“சரக்கெல்லாம் இருக்கட்டும்.. மொதல்ல நியூஸை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலித்துகள் தங்கள் வீட்டை அவர்களாகவே கொளுத்திக் கொண்டு நஷ்ட ஈடு கேட்கின்றனர்.- அன்புமணி ராமதாஸ்'),
            thumbnail:'/images/4587/DSC_0866-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/01/post4587.html",
            publishDate:"May 1, 2013",
            summary:$sce.trustAsHtml(" இன்று சென்னையில் பத்திரிக்கையாளர்களை அன்புமணி ராமதாஸ் சந்தித்தார். மே தினமான இன்று, பாட்டாளி மக்கள் கட்சியினருக்கு கருப்பு தினம் என்றார்.&nbsp; எங்கள் தொண்டர்கள் இரண்டு பேர் இறந்ததற்கு நீதி வேண்டி போராட்டம் நடத்திய மருத்துவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராமானுஜத்தை பதவி நீக்கம் செய்ய வேண்டும்.'),
            thumbnail:'/images/4586/Rajagopalan_IAS-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/01/post4586.html",
            publishDate:"May 1, 2013",
            summary:$sce.trustAsHtml("  ராஜகோபால் அண்ணன் கண்ணுல அம்மாவப் பாத்து என்ன பூரிப்பு பாருங்களேன்..தமிழக டிஜிபி ராமானுஜத்தை உடனடியாக பதவி நீக்கம் செய்ய வேண்டுமென்ற கோரிக்கை காவல்துறை உயர் அதிகாரிகள் மற்றும் ஐஏஎஸ் அதிகாரிகள் மத்தியில் எழுந்துள்ளது.சமீபத்தில் பட்ஜெட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வருந்துகிறோம்.'),
            thumbnail:'/images/4582/3325733396_bdb800d4a9_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/05/01/post4582.html",
            publishDate:"May 1, 2013",
            summary:$sce.trustAsHtml("தமிழகத்தைப் பொறுத்தவரை, சாதீய மோதல்கள் என்பது என்பது நீறுபூத்த நெருப்பாகவே எப்போதும் இருந்து வருகிறது. ஆதிக்க சாதியினருக்கும் தலித்துகளுக்கும் இடையே மோதல் வெடிக்க ஒரு சிறு பொறி போதுமானதாக இருந்து வருகிறது.&nbsp; மக்களிடையே ஆழமாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரக்காணம் கலவரம் குறித்த ஜெயலலிதாவின் அறிக்கை'),
            thumbnail:'/images/4580/IN21_JAYA_1296f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/29/post4580.html",
            publishDate:"Apr 29, 2013",
            summary:$sce.trustAsHtml("பாட்டாளி மக்கள் கட்சி சார்பில் மாமல்லபுரத்தில் நடைபெற்ற சித்திரைத் திருவிழாவின் போது மரக்காணம் பகுதியில் இரு பிரிவினரிடையே ஏற்பட்ட கலவரம் குறித்த சிறப்பு கவன ஈர்ப்புத் தீர்மானத்தின் மீது பல்வேறு கட்சியினர் தெரிவித்த கருத்துகளுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாஸ்மாக் தமிழ்'),
            thumbnail:'/images/4579/tas_boy_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/28/post4579.html",
            publishDate:"Apr 28, 2013",
            summary:$sce.trustAsHtml(" யார் இந்த டாஸ்மாக் தமிழ் ?&nbsp; வெளியூரில் இருந்து சென்னைக்கு பிழைப்பு தேடி வந்தவன்.&nbsp; சென்னை நகரில் தலைமைச் செயலகம் அருகே உள்ள ஒரு டாஸ்மாக் பாரில் வேலை செய்கிறான்.&nbsp;&nbsp; படிக்கவில்லையே தவிர அபார..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மார்க்சிஸ்ட்டுகள் சிந்தனைக்கு&#8230; 1'),
            thumbnail:'/images/4571/4893244844_a78f681a9a_z-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/27/post4571.html",
            publishDate:"Apr 27, 2013",
            summary:$sce.trustAsHtml("தனித் தமிழீழத்தை ஏகாதிபத்தியம் ஆதரிக்கிறதா?பா.திருமாவேலன்இந்த நூற்றாண்டின் மாபெரும் துயரமான ஈழத் தமிழர் விவகாரத்தில் மார்க்சிஸ்ட் கம்யூனிஸ்ட் கட்சியின் நிலைப்பாடு அறிவுச் சூழலில் அதிர்ச்சியையும் ஆச்சர்யத்தையும் ஏற்படுத்தி வருகிறது. ஈழத் தமிழர் வாழ்க்கையையும் எதிர்காலத்தையும் பற்றிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மறக்க முடியுமா ?'),
            thumbnail:'/images/4569/m_karunanidhi_20130401_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/26/post4569.html",
            publishDate:"Apr 26, 2013",
            summary:$sce.trustAsHtml("27 ஏப்ரல் 2009. &nbsp;தமிழின வரலாற்றில் மறக்க முடியாத நாள். கருணாநிதி தமிழினத்துக்கு செய்த துரோகத்தின் உச்சம் அந்த உண்ணாவிரத நாடகம். &nbsp;பொங்கியெழுந்த போராட்டங்களை முனை மழுங்கி நீர்த்துப் போகச் செய்த ஒரு கருப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிகாரம் போனபின்பு கருணாநிதி ஆவேசம் காட்டுவது ஏன் ?  &#8211; பழ நெடுமாறன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2013/04/24/post4564.html",
            publishDate:"Apr 24, 2013",
            summary:$sce.trustAsHtml("அதிகாரம் போனபின்பு கருணாநிதி ஆவேசம் காட்டுவது ஏன்?பழ.நெடுமாறன்வேலூர் சிறையில் வாடும் பேரறிவாளன், சாந்தன், முருகன் ஆகிய மூவருக்காகவும் தி.மு.க. தலைவர் கருணாநிதி தினமும் கண்ணீர்விட்டுக் கடிதங்கள் வடிக்க ஆரம்பித்திருக்கிறார். அதிகாரம் இருந்த காலத்தில் அவர்களுக்காக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('&#8220;காக்கி&#8217; வக்கிரம்! &#8211; தினமணி தலையங்கம்.'),
            thumbnail:'/images/4563/dinamani-logo-150x141.jpg',
            categories:['default',''],
            href:"/default/2013/04/22/post4563.html",
            publishDate:"Apr 22, 2013",
            summary:$sce.trustAsHtml("ஐந்து வயது சிறுமியைப் பாலியல் வன்கொடுமைக்கு ஆளாக்கிய பிகார் இளைஞரை தில்லி போலீஸôர் கைது செய்த பின்னரும்கூட, மக்கள் மனக்கொதிப்புடன் தில்லி காவல் தலைமை அலுவலகத்தை முற்றுகையிடக் காரணம், இந்த வழக்கில் காவல்துறை காட்டிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடி சறுக்கிய யானை.'),
            thumbnail:'/images/4562/Jangid_43-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/21/post4562.html",
            publishDate:"Apr 21, 2013",
            summary:$sce.trustAsHtml("யானைக்கும் அடிசறுக்கும் என்பது பழமொழி.&nbsp; அப்படி அடி சறுக்கிய யானையின் கதைதான் இது. &nbsp;&nbsp;சங்காராம் ஜாங்கிட். யார் இந்த ஜாங்கிட் ?&nbsp; இது குறித்து விபரமாக அறிந்து கொள்ள ஜெகஜ்ஜாலக் கில்லாடி ஜாங்கிட் என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('படுகொலை செய்யப்பட்ட நீதி'),
            thumbnail:'/images/4558/M_Id_377300_bhullar-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/20/post4558.html",
            publishDate:"Apr 20, 2013",
            summary:$sce.trustAsHtml("தேவேந்தர் பால் சிங் புல்லார்.&nbsp; கடந்த வாரம் உச்சநீதிமன்றம் அளித்த தீர்ப்பைப் போல மிகவும் பிற்போக்கான கண்டிக்கத்தக்க தீர்ப்பு இந்திய வரலாற்றில் அளிக்கப்பட்டது இல்லை. 60 ஆண்டுகாலமாக பல்வேறு தீர்ப்புகளின் மூலம், இந்திய நீதித்துறை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எதுவும் நடக்கும் &#8211; தினமணி தலையங்கம்.'),
            thumbnail:'/images/4553/dinamani-logo-150x141.jpg',
            categories:['default',''],
            href:"/default/2013/04/19/post4553.html",
            publishDate:"Apr 19, 2013",
            summary:$sce.trustAsHtml("&nbsp; சென்னையில் நடைபெற்ற ஐ.பி.எல். கிரிக்கெட் போட்டியில் இலங்கை வீரர்கள் பங்கேற்கக் கூடாது என்று எதிர்ப்பு தெரிவித்து போராட்டங்கள் நடத்திய தனித் தமிழீழ ஆதரவு அமைப்புகள் மற்றும் மாணவர் அமைப்புகள் நிர்வாகிகள் தொடர்பாக ஒரு தனியார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கழுவி ஊற்றப்பட்ட சன் டிவி&#8230;.'),
            thumbnail:'/images/4551/IMG_0828-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/18/post4551.html",
            publishDate:"Apr 18, 2013",
            summary:$sce.trustAsHtml("மனித உரிமைப் பாதுகாப்பு மையம் சார்பில் சன் டிவிக்கு எதிராக ஆர்ப்பாட்டம் நடைபெற்றது.ஆர்ப்பாட்டத்தில் உயர்நீதிமன்ற&nbsp;வழக்குரைஞர்கள், மனித உரிமை பாதுகாப்பு மைய தோழர்கள் என சுமார் 50 பேர்&nbsp;கலந்து கொண்டனர்.காமராஜர் சாலையில் உள்ள எம்.ஆர்.சி நகர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சன் டிவியைக் கண்டித்து ஆர்ப்பாட்டம் &#8211; அனைவரும் வாரீர்.'),
            thumbnail:'/images/4546/Akila_demo_notice-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/16/post4546.html",
            publishDate:"Apr 16, 2013",
            summary:$sce.trustAsHtml("பெண்ணை ஓடும் பேருந்தில் பாலியல் வல்லுறவு செய்து&nbsp;&nbsp;நடுத்தெருவில் தூக்கியெறிந்த டெல்லி சம்பவம் போன்ற வெளிப்படையாக நடக்கும் கொடுமைகள் நம்மை அதிர்ச்சிக்குள்ளாக்குகின்றன.&nbsp;மக்கள் தெருக்களில் திரண்டு பாதிக்கப்பட்ட பெண்ணுக்காக நியாயம் கேட்கிறார்கள்.&nbsp;ஆனால் பளபளக்கும் கட்டிடங்களுக்குள் ஏசி அலுவலகங்களுக்குள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மீன் குழம்பு மேஜிஸ்ட்ரேட் பணியிட மாற்றம்.'),
            thumbnail:'/images/4544/sam_0407-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/16/post4544.html",
            publishDate:"Apr 16, 2013",
            summary:$sce.trustAsHtml("வள்ளியூர் நீதிமன்ற நடுவர் க்றிஸ்டல் பபிதா என்பவர், &nbsp;தன் வீட்டில் சரிவர மீன் குழம்பு வைக்கவில்லை என்ற காரணத்தால்,&nbsp;நீதிமன்றத்தின் அலுவலக உதவியாளர் வேல்முருகன் என்பவரை பணி இடைநீக்கம் செய்தார். &nbsp;இது குறித்து சவுக்கில்&nbsp; நமக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மன்மத ராஜாவைக் கண்டித்து சன் டிவி முன்பு ஆர்ப்பாட்டம்.'),
            thumbnail:'/images/4542/Sun_TV_Poster-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/16/post4542.html",
            publishDate:"Apr 16, 2013",
            summary:$sce.trustAsHtml(" மன்மத ராஜாவைக் கண்டித்தும், பாலியல் வன்கொடுமைக்கு எதிராக புகார் கொடுத்த அகிலாவையே பணி நீக்கம் செய்து அவரது மன உறுதியை உடைக்கும் முயற்சியில் ஈடுபட்டு வரும் சன் டிவி நிர்வாகத்தைக் கண்டித்து வரும் 17..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தயவுசெய்து இறந்து விடுங்கள்… … ….'),
            thumbnail:'/images/4540/karuna20120603-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/14/post4540.html",
            publishDate:"Apr 14, 2013",
            summary:$sce.trustAsHtml("இயக்குநர் மகேந்திரனின் உதிரிப்பூக்கள் திரைப்படத்தின் இறுதிக் காட்சியில் சுந்தரவடிவேலுவாக நடிக்கும் விஜயன் திருந்துவார்.&nbsp; ஆனால் அத்தனை நாட்களாக அவரைப் பார்த்து மனம் வெறுத்த அந்த ஊர் மக்கள், அவரை&nbsp; ஏற்க மறுப்பார்கள்.&nbsp;&nbsp; அவரை ஊர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாசமாய்ப் போக…'),
            thumbnail:'/images/4533/Sun_TV_PK-150x150.png',
            categories:['default',''],
            href:"/default/2013/04/14/post4533.html",
            publishDate:"Apr 14, 2013",
            summary:$sce.trustAsHtml(" இப்படி யாரையும் சபிப்பது வருத்தத்திற்குரிய விஷயம்.&nbsp; அதிலும் சம்பந்தப்பட்ட நபரின் பிறந்தநாள் அன்று சபித்தால் ?&nbsp;&nbsp; இவர் திருந்த மாட்டார், மனம் வருந்தமாட்டார் என்று நினைக்கும் ஒரு நபரை மட்டுமே இப்படிச் சபிக்க முடியும்.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கலங்கரை விளக்கு..'),
            thumbnail:'/images/4527/DSC_0634-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/10/post4527.html",
            publishDate:"Apr 10, 2013",
            summary:$sce.trustAsHtml("கலங்கரை விளக்கு என்றதும் எம்ஜிஆரின் பழைய திரைப்படம் என்று நினைத்துக் கொள்ளாதீர்கள். இது வேறு கலங்கரை விளக்கம்.&nbsp; கலங்கரை விளக்கம் என்பது, நடுக்கடலில் உள்ள கப்பல்களுக்கு கரை மற்றும் ஆபத்தான பாறைகள் போன்றவற்றை அடையாளம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவசர அவசரமாக அணு உலையைத் திறக்காதீர்கள்! &#8211; அணு விஞ்ஞானி கோபாலகிருஷ்ணன்.'),
            thumbnail:'/images/4520/p17-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/10/post4520.html",
            publishDate:"Apr 10, 2013",
            summary:$sce.trustAsHtml(" அவசர அவசரமாக அணு உலையைத் திறக்காதீர்கள்!எச்சரிக்கும் விஞ்ஞானி கோபாலகிருஷ்ணன்இந்திய அணு சக்தித் துறையின் புகழ் பெற்ற விஞ்ஞானி கோபாலகிருஷ்ணன். திருவனந்தபுரத்தைச் சேர்ந்த இவர், கலிஃபோர்னியா பல்கலைக்கழகத்தில் படித்து ஹார்வர்டு பல்கலைக்கழகத்தில் பேராசிரியராகப் பணியாற்றியவர். இந்திய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொறுக்கி'),
            thumbnail:'/images/4518/IMG_3962-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/04/06/post4518.html",
            publishDate:"Apr 6, 2013",
            summary:$sce.trustAsHtml(" யார் இந்த பொறுக்கி.&nbsp;ஈழப் பிரச்சினை குறித்து,&nbsp;தமிழகமெங்கும் வீரஞ்செறிந்த போராட்டங்களை நடத்திய மாணவச் செல்வங்கள்தான் பொறுக்கி.&nbsp;இப்படி இவர்களை பொறுக்கிகள் என்று அழைப்பது யார் தெரியுமா.&nbsp;இந்தியாவின் மிக முக்கியமான அரசியல் தரகரான சுப்ரமணிய சுவாமிதான்.&nbsp;பொது நல வழக்குகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிமுக ஆட்சியில் சட்டம் ஒழுங்கு சிரிப்பாய் சிரிக்கிறது!  &#8211; கருணாநிதி கண்டனம்.'),
            thumbnail:'/images/4499/Karunanidhi-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/30/post4499.html",
            publishDate:"Mar 30, 2013",
            summary:$sce.trustAsHtml("டாக்டர் கருணாநிதி! அவருடைய வயது 70! அமைதியும் அடக்கமும்நிறைந்தவர்! மருத்துவத் துறை பேராசிரியராக அரசுப் பணியிலே நீண்ட காலம்பணியாற்றி விட்டு ஓய்வு பெற்றவர்! தனியார் மருத்துவ மனை ஒன்றில்அனுமதிக்கப்பட்டு, சிகிச்சை பெற்று வரும் &#8220;தினத்தந்தி&#8221;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 6'),
            thumbnail:'/images/4498/39.-Amma-Photo-Present-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/29/post4498.html",
            publishDate:"Mar 29, 2013",
            summary:$sce.trustAsHtml("கடந்த புதன்கிழமை ஜெயலலிதா சென்னை நந்தனம் அப்போல்லோ மருத்துவமனையில் சிகிச்சை பெற்று வரும் தினத்தந்தி நாளிதழின் உரிமையாளர் சிவந்தி ஆதித்தனை நேரில் சென்று பார்த்தார்.&nbsp; ஒரு முதலமைச்சர் தன்னுடைய பல்வேறு வேலைகளுக்கிடையில் இது போல..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிங்களவன் முக்கியமென்றால் தமிழ்நாட்டில் ஏன் இருக்கிறீர்கள் ?'),
            thumbnail:'/images/4495/CSk__SRH-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/26/post4495.html",
            publishDate:"Mar 26, 2013",
            summary:$sce.trustAsHtml("IPL 2013 கிரிக்கெட் சீசனில் (ஏப்ரல் 3 முதல் மே 26 வரை) இந்தியா சிமெண்ட்ஸ் நிறுவனத்தின் சீனிவாசன் சென்னை சூப்பர் கிங்ஸ் அணி இலங்கை வீரர்கள் யுவன் குலசேகராவை ரூ.50 லட்சத்துக்கும் அகிலா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மன்மத’ ராஜா மீது கொலை வழக்கு?'),
            thumbnail:'/images/4490/SP_Reporter_Poster_31-3-2013.pdf-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/26/post4490.html",
            publishDate:"Mar 26, 2013",
            summary:$sce.trustAsHtml("பாலியல் வழக்கில் சிக்கிய சன் டி.வி.யின் ‘மன்மத’ ராஜா மீது கொலை வழக்குப் பாயலாம் என்று தெரிகிறது. அந்த நிறுவனத்தில் வேலை பார்த்து தற்கொலை செய்துகொண்ட இரண்டு பெண்களின் வழக்கு மீண்டும் தூசு தட்டப்பட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குட்டி ஆடுகளும் குள்ளநரிகளும்.'),
            thumbnail:'/images/4488/59922_103295999847890_560997797_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/25/post4488.html",
            publishDate:"Mar 25, 2013",
            summary:$sce.trustAsHtml("குட்டி ஆடு தப்பிவந்தால்&nbsp;குள்ளநரிக்குச் சொந்தம்!&nbsp; குள்ளநரி மாட்டிகிட்டா&nbsp; கொறவனுக்குச் சொந்தம்!&nbsp; தட்டுக்கெட்ட மனிதர்கண்ணில்&nbsp; பட்டதெல்லாம் சொந்தம்!&nbsp; சட்டப்படி பார்க்கப்போனால்எட்டடிதான் சொந்தம் !என்றார் பட்டுக்கோடை கல்யாண சுந்தரம்.என்ன அழகான&nbsp; வரிகள் !!! தட்டுக்கெட்ட மனிதர் கண்ணில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மோசடியில் ஈடுபட்டாரா ராம.செல்வராஜ் ?'),
            thumbnail:'/images/4478/IMG_5410-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/24/post4478.html",
            publishDate:"Mar 24, 2013",
            summary:$sce.trustAsHtml("தமிழ்நாட்டின் மிக மிகச் சிறந்த புலனாய்வு நிருபர் யாரென்றால் அது சன் டிவியின் ராம செல்வராஜ்தான். இவரைப்போல ஒரு அப்பாடக்கர் நிருபரை பார்க்கவே முடியாது.&nbsp; தனக்குத் தெரியாத விஷயங்கள் உலகில் எதுவுமே இல்லை என்பது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கதையல்ல நிஜம்..'),
            thumbnail:'/images/4475/59922_103295999847890_560997797_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/22/post4475.html",
            publishDate:"Mar 22, 2013",
            summary:$sce.trustAsHtml("“ஆர் யூ மிஸ் அகிலா.. ?”“ஆமாம் சார் நான் அகிலாதான் பேசறேன்.. ““நான் சன் டிவிலேர்ந்து வெற்றி வேந்தன் பேசறேன். இப்போ சன் டிவில ரெக்ரூட்மென்ட் நடக்குது. நான் ராஜ் டிவியில உங்க நியூசை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழத் தமிழர் விவகாரத்தில் தமிழக முஸ்லீம்களின் நிலை.'),
            thumbnail:'/images/4471/image-150x150.jpeg',
            categories:['default',''],
            href:"/default/2013/03/21/post4471.html",
            publishDate:"Mar 21, 2013",
            summary:$sce.trustAsHtml("இன்று இந்தியாவின் கவனத்தைத் திருப்பி யிருக்கும் முக்கிய நிகழ்வான இலங்கைத் தமிழர் விவகாரம் குறித்தும், அதில் தமிழக முஸ்லிம்களின் பார்வை குறித்தும் தமிழ்நாடு முஸ்லிம் முன்னேற்றக் கழகத்தின் தலைவர் ஜே.எஸ்.ரிபாயீ அவர்கள் மக்கள் உரிமை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வெந்து தணியட்டும் காடு.'),
            thumbnail:'/images/4468/04-balachandran13-600-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/20/post4468.html",
            publishDate:"Mar 20, 2013",
            summary:$sce.trustAsHtml("பாலச்சந்திரன் கொலை செய்யப்பட்ட ஆதாரங்ளை சேனல் 4 வெளியிட்ட நாள் முதலாகவே தமிழகம் கொதிக்கத் தொடங்கியது.&nbsp; இந்த கொதிநிலைக்கு வடிவம் கொடுத்து போராட்டத்தைத் தொடங்கியவர்கள் லயோலா கல்லூரி மாணவர்கள்.திலீபன், பிரிட்டோ, ஷாஜிபாய், ஆண்டனி, மணிகண்டன்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்று சுனாமி, இன்று பினாமி!'),
            thumbnail:'/images/4461/ffffffffffffff-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/17/post4461.html",
            publishDate:"Mar 17, 2013",
            summary:$sce.trustAsHtml("புகழேந்தி தங்கராஜ்இந்தியாவை ஆளும் காங்கிரஸ் அரசு மாதிரி ஒரு நயவஞ்சக நாட்டாமையை உலகில் எங்கே தேடினாலும் நீங்கள் பார்க்கமுடியாது. பக்கத்து வீட்டுப் பிரச்சினையில் தலையிடவே&nbsp; மாட்டார்களாம், இந்த கண்ணியமான விஷக்கன்னிகள். பக்கத்து வீட்டுக்காரன் தன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வெட்டப்படும் மரங்கள்.. அலறும் விலங்குகள்! &#8211; சிக்கலில் ஈஷா'),
            thumbnail:'/images/4460/p40-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/13/post4460.html",
            publishDate:"Mar 13, 2013",
            summary:$sce.trustAsHtml("&#8216;மரங்களுக்கும் மனிதர்களுக்கும் இருப்பது நெருக்கமான உறவு. இந்த உறவை யாரும் பிரிக்கவோ அல்லது இந்த உறவு இல்லாமலோ மனிதன் வாழவே முடியாது’ என்று சொன்னவர் ஜக்கி வாசுதேவ். அப்படிப்பட்ட மரங்களை வைத்தே ஜக்கி வாசுதேவ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது வேற வாய்&#8230;&#8230;  அது&#8230;.. ?'),
            thumbnail:'/images/4457/ffffffffffffff-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/11/post4457.html",
            publishDate:"Mar 11, 2013",
            summary:$sce.trustAsHtml(" டெசோ அமைப்பின் சார்பாக செவ்வாயன்று ஈழத் தமிழரின் உரிக்காகவும், இலங்கையை போர்க்குற்றத்துக்காக தண்டிப்பதற்காகவும், நடைபெறும் முழு அடைப்புக்கு அழைப்பு விடுத்து கருணாநிதியின் கடிதம்..டெசோ தலைவர் கருணாநிதி வேண்டுகோள்…&nbsp; 11.03.2013ஈழத் தமிழர் இன்னல் தீரவும், ஐக்கிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அத்தனைக்கும் ஆசைப்படாதே…. ..'),
            thumbnail:'/images/4455/4078599230_2cd95d67c7_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/10/post4455.html",
            publishDate:"Mar 10, 2013",
            summary:$sce.trustAsHtml("மனித இனம் தோன்றியதிலிருந்தே அவனுக்கான தத்துவத்தேடலும் தோன்றியது.&nbsp; புரியாத விஷயங்களை அறிந்து கொண்டே ஆக வேண்டும் என்ற மனிதனின் தீராத தாகம், இந்தத் தத்துவத் தேடலை வளர வைத்தது.&nbsp; இப்படியான தேடல்களின் வெளிப்பாடுகளே மதம்.&nbsp;&nbsp;&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யார் சிறந்த நீதிபதி… ?'),
            thumbnail:'/images/4405/high_court-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/02/post4405.html",
            publishDate:"Mar 2, 2013",
            summary:$sce.trustAsHtml("உயர்நீதிமன்ற நீதிபதி ஆக வேண்டும் என்பது ஒவ்வொரு வழக்கறிஞரின் கனவு.&nbsp;&nbsp; கையைப் பிடிப்பது, காலைப் பிடிப்பது, தரகு (தரகு என்பதில் “எல்லா” விதமான தரகுகளும் அடக்கம்) வேலை செய்வது, முறைவாசல் செய்வது, என்று பல்வேறு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலங்கைக்கு எதிராக அமெரிக்கா கொண்டுவரும் தீர்மானத்தை ஆதரிக்க முடியாது: பி.ஜெய்னுலாப்தீன்'),
            thumbnail:'/images/4400/321496_474165919312379_477275747_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/02/post4400.html",
            publishDate:"Mar 2, 2013",
            summary:$sce.trustAsHtml("விடுதலைப்புலிகள் தலைவர் பிரபாகரனின் மகன் கொல்லப்பட்ட சம்பவம் பற்றி ஒரு வீடியோவை சனல் 4 என்ற தொலைக்காட்சி தற்போது வெளியிட்டுள்ளது. இதனை தற்போது ஆரம்பமாகியுள்ள ஐ.நா வின் மனித உரிமைகள் மாநாட்டில் திரையிடுவதற்கும் குறிப்பிட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசியலும் விளையாட்டும்  2013 IPL 20 -20 கிரிக்கெட் போட்டியை முன் வைத்து'),
            thumbnail:'/images/4398/image001-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/01/post4398.html",
            publishDate:"Mar 1, 2013",
            summary:$sce.trustAsHtml("  “நாடுகள் விளையாட்டின் மூலம் தேசியத்தை வளர்த்து எடுக்கின்றது. விளையாட்டு ஒரு நாட்டின் பரப்புரைக்கான முக்கிய கருவியாகப் பயன்படுகின்றது”.&nbsp; &#8211; மாட்டின் வினோகர் - “போட்டிக்கு அப்பால்: விளையாட்டும் அரசியலும்” &nbsp;(More Than a..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு பூந்தமல்லி சித்திரவதை முகாம்களை இழுத்து மூடக்கோரி  &#8211; பிரச்சாரப் பயணம்.'),
            thumbnail:'/images/4392/DECO_005-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/03/01/post4392.html",
            publishDate:"Mar 1, 2013",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீதும் நன்றும் பிறர் தர வாரா !!!'),
            thumbnail:'/images/4386/2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/26/post4386.html",
            publishDate:"Feb 26, 2013",
            summary:$sce.trustAsHtml("கே.பி.சுனில். இந்தியாவின் மிக முக்கியமான பத்திரிக்கை-யாளர்களுள் ஒருவராக வந்திருக்க வேண்டியவர்.&nbsp; இந்தியாவின் குறிப்பிடத்தக்க ஆங்கிலப் பத்திரிக்கையான இல்லஸ்ட்ரேட்டட் வீக்லி ஆப் இந்தியாவின் தென்னிந்திய கரெஸ்பான்டென்டாக இருந்தார் சுனில்.&nbsp; சுனில் பழைய தலைமுறைப் பத்திரிக்கையாளர்.&nbsp; இன்றைய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடிமைகள் மன்றம்.'),
            thumbnail:'/images/4381/DSC_0906-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/25/post4381.html",
            publishDate:"Feb 25, 2013",
            summary:$sce.trustAsHtml("இந்தியாவிலேயே தலைச்சிறந்த அடிமைகள் எங்கிருக்கிறார்கள் என்று யாரிடம் கேட்டாலும் தமிழகத்தில் என்று தயங்காமல் சொல்லுவார்கள். அந்த அடிமைகள் எங்கே என்று கேட்டால் அதிமுகவில் என்று யாரைக்கேட்டாலும் சொல்லுவார்கள். வழக்கமாக யாரையாவது பார்த்து அடிமை என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பச்சைத் துரோகத்துக்கு  பதில் சொல்லுங்கள்  காங்கிரஸ் நண்பர்களே..!'),
            thumbnail:'/images/4374/19SRI2_jpg_1368787g-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/24/post4374.html",
            publishDate:"Feb 24, 2013",
            summary:$sce.trustAsHtml("சர்வதேசத்தின் மனசாட்சியையும் உலுக்கிக் கொண்டிருக்கிறது அந்தப் புகைப்படம். தான் உட்கார வைக்கப்பட்டிருக்கிற பங்கரிலிருந்து மூன்றடி தூரத்தில் மரணம் நிற்பதைக்கூட&nbsp; அறியாமல், சுடப்போகிறவனே தனக்குக் கொடுத்த பிஸ்கட்டை&nbsp; வெள்ளந்தியாகச் சாப்பிட்டுக் கொண்டிருக்கிற அந்தக் குழந்தையின் முகம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாலச்சந்திரன்.'),
            thumbnail:'/images/4372/19SRI1_jpg_1368786g-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/24/post4372.html",
            publishDate:"Feb 24, 2013",
            summary:$sce.trustAsHtml(" பன்னிரண்டு&nbsp;வயது குழந்தைஈழக்குழந்தை&nbsp;என்பதால்ஏன்&nbsp;எதற்கு&nbsp;கொல்லப்படுகிறேன்என்று&nbsp;அறியாமல்&#8220;கேட்பதற்கும்&nbsp;ஆளில்லாததால்&#8221;சல்லடையாக்கப்பட்டுபடுகொலை&nbsp;செய்யப்பட்டான்! செய்தி&nbsp;மட்டும்ஆஸ்கார்&nbsp;விருதுக்கு பரிந்துரைக்க தக்கஅமெரிக்க&nbsp;படத்துக்கிணையாக,ஆவணப்படமாகஎட்டுத்திக்கும்,இலவசமாக&nbsp;காட்டப்படுகிறது. ஆங்காங்கேஅரசியல்&nbsp;இலாபத்திற்கென்றாலும்,கண்டனங்களும், &nbsp;விமர்சனங்களும்சூடு&nbsp;பறக்க விவாதிக்கப்படுகின்றன. வில்லனாக,எட்டுக்கோடி&nbsp;தமிழர்களைதன்னகத்தே&nbsp;கொண்ட இந்தியா.சத்தமில்லாமல்தனது&nbsp;வேலையை செய்கிறது. &#8220;ராஜபக்‌ஷ,நிச்சியம்&nbsp;தண்டிக்கப்படலாம்&#8221;,தமிழர்களுக்குஇந்தியாவில்லனாக&nbsp;இல்லாவிட்டால். சோனியாவின்&nbsp;ஒற்றனாக&#8220;தமிழகத்தில்&nbsp;எவரும்&nbsp;இல்லையென்றால்&#8221;,இந்தியா&nbsp;தமிழர்களின் வில்லனாகநீண்டகாலம்&nbsp;தொடரமுடியாது. ராஜபக்‌ஷ&nbsp;தண்டிக்கப்பட்டால்பூனை&nbsp;வெளியே வந்துவிடும். அதனால்இலங்கை&nbsp;அல்லது,இந்திய&nbsp;அரசியலில்படுபட்சி&nbsp;காலம் தவிர்ந்துராஜபக்‌ஷவைசர்வதேசமும்&nbsp;தண்டிக்க முடியாது. ஆவணப்படத்தின்அலைவரிசைக்கேற்பபடுகொலை&nbsp;சூத்திரதாரிகளும்தந்தரம்&nbsp;புரிந்தவர்களும்மக்கள்&nbsp;கிளர்ச்சியை மந்தமாக்கமேடை&nbsp;அமைத்துதேர்தல்&nbsp;திருவிழாவுக்காகஅப்பாவியாகவேடங்கட்ட&nbsp;தலைப்பட்டுள்ளனர். பாலச்சந்திரனின்கோரக்&nbsp;கொலைச் செய்தியை,இன்னொன்று&nbsp;மறைக்கும்வரைஒப்புக்கு&nbsp;சப்பாணியாக,உலகத்தை&nbsp;ஏமாற்றஅலகு&nbsp;குத்திஆயிரம்&nbsp;மைல்அங்கப்பிரதிஸ்டை&nbsp;செய்யவும்தமிழீன&nbsp;தலைவர் தயாராகி விட்டார். கருணாநிதிஅன்று&nbsp;மனிதனாக தன்னைகொஞ்சமாவது&nbsp;நினைத்திருந்தால்,பாலச்சந்திரன்&nbsp;சல்லடையாகியிருக்க மாட்டான்.முத்துக்குமாரும்&nbsp;மூட்டிக்கொண்டிருக்கமாட்டான். கொலைக்களம்&nbsp;ஒன்றுஆவணப்படமாகஹிட்லரின்&nbsp;ஜெர்மனி படங்களைவிஞ்சுமளவுக்கு&nbsp;வெளிவந்துமிருக்காது. சனியன்&nbsp;பிடித்துஇந்த&nbsp;அழுக்கு&nbsp;மனிதன் செய்த சதி,பல&nbsp;இலட்சம்படுகொலையில்&nbsp;விடிந்திருக்கிறது.இருந்தும்&nbsp;கிரகநிலை மாறிசனியன்&nbsp;விடுபட்டஅறிகுறி&nbsp;தென்படவில்லை. கண்டம்&nbsp;தாண்டிஇங்கிலாந்தின்&nbsp;சனல்&nbsp;4தொலைக்காட்சிஇலங்கைக்கும்,&nbsp;&nbsp;இந்தியாவுக்கும்தொல்லைக்காட்சியாகிகொள்ளி&nbsp;வைத்துவிடுமோ என்று மட்டும்வஞ்சகர்கள்&nbsp;அஞ்சுகின்றனர். பாலச்சந்திரனை&nbsp;படுகொலை செய்ததுஇலங்கை&nbsp;இராணுவம். கொலைக்களத்தைவடிவமைத்தது&nbsp;இந்திய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அப்பனுக்கு தப்பாமல் பிறந்த பிள்ளை.'),
            thumbnail:'/images/4368/vetri-durai-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/22/post4368.html",
            publishDate:"Feb 22, 2013",
            summary:$sce.trustAsHtml("ஒரு காகிதம் பொறுக்கி கல்வித்தந்தை ஆன கதையை ஏற்கனவே சவுக்கு வாசகர்கள், அலிபாபாவும் ஆயிரம் திருடர்களும், ஐ யம் வெரி ஹேப்பி ஸ்டார்ட் ம்யூசிக், மற்றும் முகமூடி ஆகிய கட்டுரைகளில் படித்திருப்பீர்கள்.&nbsp; சரி.. சைதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குமுதம் ரிப்போர்டர் கட்டுரை குறித்த கருணாநிதியின் அறிக்கை'),
            thumbnail:'/images/4355/koshboo-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/16/post4355.html",
            publishDate:"Feb 16, 2013",
            summary:$sce.trustAsHtml("கருத்துச் சுதந்திரம் &#8211; பத்திரிகைச் சுதந்திரம் என்பவை ஜனநாயக நாட்டில் எந்த அளவுக்கு முக்கியமானவையோ; அதே அளவுக்கு முக்கியமானவை சமூகப் பொறுப்பு &#8211; பத்திரிகாதர்மம் ஆகியவை என்பதை ஜனநாயக உரிமைகளிலும் &#8211; கடமைகளிலும் நம்பிக்கையுள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஓடினாள் ஓடினாள்&#8230;.'),
            thumbnail:'/images/4353/black_karuna-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/16/post4353.html",
            publishDate:"Feb 16, 2013",
            summary:$sce.trustAsHtml(" தட்சிணாமூரத்தி : தமிழகம் பல கேவலங்களைச் சந்தித்திருக்கிறது…&nbsp; பல கேவலமான தலைவர்களைச் சந்தித்திருக்கிறது.&nbsp; ஆனால் இந்த வழக்கு கேவலமானதல்ல.&nbsp; வேலத்திலும் கேவலமானது..&nbsp; இது பற்றிப் பேசும் நான் மனிதனும் அல்ல.&nbsp; இந்திய அரசியலிலே உள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழும் சகுனி'),
            thumbnail:'/images/4351/3-06-12-_Thalaivar_Birthday--111-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/10/post4351.html",
            publishDate:"Feb 10, 2013",
            summary:$sce.trustAsHtml("நல்ல செய்தியோ, கெட்ட செய்தியோ, தமிழக ஊடகங்களுக்கு செய்திகளை அள்ளி வழங்குவதில் திமுகவை விஞ்ச வேறு எந்தக் கட்சியும் இல்லை.&nbsp; தினந்தோறும் அப்படி செய்திகளை வழங்கும் திமுக பற்றி கடந்த வாரம் வந்த செய்தி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெனிவா !!!!'),
            thumbnail:'/images/4347/images-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/10/post4347.html",
            publishDate:"Feb 10, 2013",
            summary:$sce.trustAsHtml("இந்த மாத இறுதியில் ஐக்கிய நாடுகள் சபையின் மனித உரிமைகள் கவுன்சில் கூட இருக்கும் நிலையில், மீண்டும் சூடுபிடிக்கிறது ஜெனிவா. இலங்கைக்கு எதிராக அமெரிக்கா கொண்டுவரும் தீர்மானத்தை ஆதரிக்கப்போகிறது பிரிட்டன்.&nbsp; இந்தியாவும் ஆதரிக்கும் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சகலகலா வல்லவன் ஆன ஹே ராம்.'),
            thumbnail:'/images/4344/s4-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/08/post4344.html",
            publishDate:"Feb 8, 2013",
            summary:$sce.trustAsHtml("சகலகலா வல்லவன் திரைப்படம் 1982ம் ஆண்டு எஸ்.பி.முத்துராமன் இயக்கத்தில் வெளியான படம்.&nbsp;&nbsp; தமிழ்த்திரையுலகின் போக்கையே அப்படம் மாற்றியமைத்தது என்றால் மிகையாகாது.&nbsp; 176 நாட்கள் ஓடி வசூலில் சாதனை அமைத்தது அப்படம்.&nbsp; அதற்குப் பிறகு, அந்தப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 5'),
            thumbnail:'/images/4333/DSC_0596-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/06/post4333.html",
            publishDate:"Feb 6, 2013",
            summary:$sce.trustAsHtml("மக்கள் வரிப்பணத்தை விரயமாக்குவதில், கருணாநிதி ஜெயலலிதா ஆகிய இருவருமே ஒருவருக்கொருவர் சளைத்தவர்கள் அல்ல.&nbsp; எம்.ஜி.ஆர் மறைவுக்குப் பிறகு, மாறி மாறி ஆட்சி செய்த இரு திராவிடக் கட்சித் தலைவர்களுமே தங்கள் ஈகோவை திருப்தி செய்வதற்காக,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அல்லாவின் திருப்பெயரால்… ….'),
            thumbnail:'/images/4329/Kamal-Sir-4-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/04/post4329.html",
            publishDate:"Feb 4, 2013",
            summary:$sce.trustAsHtml("கடந்த இரண்டு வார காலமாக, தமிழகத்தில் நீடித்து வந்த சர்ச்சை ஒரு வழியாக முடிவுக்கு வந்திருக்கிறது.&nbsp; விஸ்வரூபம் திரைப்படம் தொடர்பாக, இஸ்லாமியர்கள் தரப்புக்கும், கமல்ஹாசன் தரப்புக்கும் தமிழக அரசு நடத்திய கட்டப்பஞ்சாயத்தின் மூலம் ஏற்பட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டெசோ.. &#8230;'),
            thumbnail:'/images/4320/1_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/04/post4320.html",
            publishDate:"Feb 4, 2013",
            summary:$sce.trustAsHtml("டெசோ &#8211; என்றே ஆகிவிட்டது பெருமைக்குரிய அந்த அமைப்பின் பெயர். 1985ல் ஆரம்பிக்கப்பட்டபோது, &#8216;தமிழ் ஈழ ஆதரவாளர் அமைப்பு&#8217; என்கிற முழுமையான பெயர் அதற்கு. அந்தப் பெயரே அதன் நோக்கம் என்ன என்பதை அழுத்தந்திருத்தமாகப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கண்ணா லட்டு தின்ன ஆசையா ?'),
            thumbnail:'/images/4319/Adade-03-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/03/post4319.html",
            publishDate:"Feb 3, 2013",
            summary:$sce.trustAsHtml(" நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 4'),
            thumbnail:'/images/4317/_MG_5255-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/02/01/post4317.html",
            publishDate:"Feb 1, 2013",
            summary:$sce.trustAsHtml("அரசியல் என்றாலே, பொய் புரட்டு, வஞ்சகம், சூது இவை எல்லாமும் அடக்கம். தமிழக அரசின் முன்னணித் தலைவர்களாக உள்ள கருணாநிதி, ஜெயலலிதா ஆகிய இருவரும் இதற்கு சற்றும் விதிவிலக்கல்ல.&nbsp; ஆனால், கருணாநிதியைப் போல, சுவையாக,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கனம் கோர்டார் அவர்களே&#8230;.'),
            thumbnail:'/images/4313/Adade31-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/31/post4313.html",
            publishDate:"Jan 31, 2013",
            summary:$sce.trustAsHtml(" நன்றி தினமணி. Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஓர் இரவு !!!'),
            thumbnail:'/images/4311/1_MG_5375-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/30/post4311.html",
            publishDate:"Jan 30, 2013",
            summary:$sce.trustAsHtml("ஓர் இரவு… அறிஞர் அண்ணா எழுதிய நாடகம். சென்னை அண்ணா சாலையில் உள்ள மின்சார வாரியத் தலைமையக கட்டிடத்தின் பெயர் என்பிகேஆர்ஆர் மாளிகை.&nbsp; இதன் விரிவாக்கம் என்னவென்பது பலருக்குத் தெரியாது.&nbsp; என்பிகேஆர்ஆர் என்பதன் விரிவாக்கம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பூனைக்குட்டி வெளியே வந்து விட்டது&#8230; &#8211; கருணாநிதி அறிக்கை'),
            thumbnail:'/images/4307/2451624532_fd97d04530_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/30/post4307.html",
            publishDate:"Jan 30, 2013",
            summary:$sce.trustAsHtml("வெளியே வந்து விட்டது பூனைக்குட்டி!( கலைஞர் கடிதம் 30-1-2013 )உடன்பிறப்பே,கலைஞானி தம்பி கமல்ஹாசன் தயாரித்து, இயக்கி, நடித்துள்ள &#8220;விஸ்வரூபம்&#8221; திரைப்படத்திற்கு தமிழக அரசு விதித்துள்ள தடைதான் தமிழகத்திலே அனைவரது கவனத்தையும் ஈர்த்திட்ட பிரச்சினையாகும். 29-1-2013..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறை !!!'),
            thumbnail:'/images/4305/Slide2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/29/post4305.html",
            publishDate:"Jan 29, 2013",
            summary:$sce.trustAsHtml("   Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேண்டாத ரூபம்.'),
            thumbnail:'/images/4250/Viswaroopam-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/29/post4250.html",
            publishDate:"Jan 29, 2013",
            summary:$sce.trustAsHtml("விஸ்வரூபம் திரைப்படத்தை பற்றி இஸ்லாமியர்களிடமிருந்து&nbsp; வரும் கருத்துக்கள் ஏன் ஒரே மாதிரியிருக்கிறது? ஒற்றுமையா அல்லதுஇவர்கள் சார்ந்த மதம் விமர்சனங்களை தாங்காத அளவிற்கு பலகீனமானதா? இவர்கள் ஏன் மதம் சார்ந்த பிரச்சனைகளில் மட்டும் இப்படிஒற்றுமையாக ஒன்றுகூடுகிறார்கள்?..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு கனவு ! ஒரு மரணம் !'),
            thumbnail:'/images/4248/IMG_0006-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/28/post4248.html",
            publishDate:"Jan 28, 2013",
            summary:$sce.trustAsHtml("அவள் பெயர் கோமதி. அவளுக்கு படிக்கவேண்டும் என்று நிறைய ஆசை….&nbsp; &nbsp;குடும்பத்தில் வறுமை தாண்டவமாடினாலும், அவளை ஆங்கில மீடியத்தில் படிக்க வைக்கிறார்கள்.&nbsp; நன்றாகப் படித்து ஏதாவது ஒரு வேலைக்குப் போகலாம் என்ற கனவோடு அவள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முத்துக்குமார் வீரவணக்க நாள்.'),
            thumbnail:'/images/4238/Muthukumar-Banner---colour-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/27/post4238.html",
            publishDate:"Jan 27, 2013",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முகமூடி.. …'),
            thumbnail:'/images/4234/la_mascara_1994_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/27/post4234.html",
            publishDate:"Jan 27, 2013",
            summary:$sce.trustAsHtml("1994ம் ஆண்டு வெளியான திரைப்படம் தி மாஸ்க்.&nbsp; பிரபலமாக காமிக்ஸ் கதையாக வெளிவந்து கொண்டிருந்த தி மாஸ்க் என்ற கேரக்டரை, திரைப்படமாக எடுத்தார் சக் ரஸ்ஸல் என்ற இயக்குநர்.&nbsp; ஹாலிவுட் நட்சத்திரம் ஜிம் கேர்ரி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விஸ்வரூபம்… …'),
            thumbnail:'/images/4230/viswaroopam-trailer-launch-stills-27-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/25/post4230.html",
            publishDate:"Jan 25, 2013",
            summary:$sce.trustAsHtml("“மனுஷ்ய புத்திரன் என்ற புனைப்பெயரில் எழுதும் இவன் இந்தப் பெயரை வைப்பதற்கு கொஞ்சம் கூட தகுதியற்றவன் உண்மையில் மிருக புத்திரன் என்றுதான் இவனைச் சொல்ல வேண்டும் காரணம் என்னவென்றால் கொடூரமான முறையில் கழுத்து நெறித்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு கல், ஒன்பது மாங்காய்கள்.'),
            thumbnail:'/images/4220/DSC_3837_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/24/post4220.html",
            publishDate:"Jan 24, 2013",
            summary:$sce.trustAsHtml("கருணாநிதியின் அரசியல் சாதுர்யமும், முதிர்ச்சியும், சமயோசிதமும், இந்தியாவில் உள்ள எந்த அரசியல்வாதிக்கும் வராது என்பதை அவர் மீண்டும் மீண்டும் நிரூபித்து வருகிறார். இன்று அவர் வெளியிட்டுள்ள அறிக்கையை பாருங்கள்.“மதுரை மாவட்டத்திற்குள் டாக்டர் ராமதாஸ் அவர்களை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்புள்ள ராகுல் காந்தி,'),
            thumbnail:'/images/4218/RAHUL_GANDHI_1_1269639f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/22/post4218.html",
            publishDate:"Jan 22, 2013",
            summary:$sce.trustAsHtml("உங்களுக்குத் தமிழ் தெரியாது. அப்புறம் ஏன் இப்படி ஒரு கடிதம்? வெட்டிவேலைதான். ஆங்கிலத்தில் எழுதினால் மட்டும் நீங்கள் படித்துவிடப்போகிறீர்களா, படித்தாலும் உணர்ந்து செயல்படப்போகிறீர்களா என்ன?. நேரம் கிடைக்கும்போது உங்களை வறுத்தெடுத்தால் ஒரு திருப்தி அவ்வளவுதான்.(தமிழ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டார்க் ரூம்.. … …'),
            thumbnail:'/images/4216/04High_Cou1rt_Madras-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/20/post4216.html",
            publishDate:"Jan 20, 2013",
            summary:$sce.trustAsHtml("தற்போதைய தலைமுறைக்கு டார்க்ரூம் என்றால் என்னவென்றே தெரியாது.&nbsp; புகைப்படக் கலை முழுமையாக டிஜிட்டல் மயமாகி விட்ட இன்றைய சூழலில் டார்க் ரூம் என்ற பிரயோகம், அதன் முக்கியத்துவத்தையும் பொருளையும் இழந்து விட்டது. புகைப்படக் கலை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாரிசு மோதல் : கருணாநிதி யார் பக்கம் ?'),
            thumbnail:'/images/4212/DSC_3837_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/20/post4212.html",
            publishDate:"Jan 20, 2013",
            summary:$sce.trustAsHtml("ஜனவரி முதல் வாரத்தில் ஸ்டாலின்தான் எனது அடுத்த வாரிசு என்று அறிவித்து, திமுகவில் மட்டுமல்லாது தமிழக அரசியல் வானிலேயே பெரும் பரபரப்பை ஏற்படுத்தினார் கருணாநிதி.பாட்டாளி மக்கள் கட்சியிலிருந்து விலகி, திமுகவில் ஜனவரி முதல் வாரத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுரானாஸ் கோல்ட்'),
            thumbnail:'/images/4210/mackennas_gold_ver3_xlg-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/19/post4210.html",
            publishDate:"Jan 19, 2013",
            summary:$sce.trustAsHtml("மெக்கன்னாஸ் கோல்ட் என்ற திரைப்படம், 1969ம் ஆண்டில் வெளிவந்த ஹாலிவுட் திரைப்படம். தங்கத்தின் மீதான வெறி, மனிதர்களை எப்படியெல்லாம் மாற்றுகிறது என்பதை அற்புதமாக விளக்கும் படம் அது. க்ரெகரி பெக் மற்றும் ஓமர் ஷெரீஃப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேதனை… விரக்தி… பரிதாபம்…'),
            thumbnail:'/images/4204/Elippe_Dharmarao-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/16/post4204.html",
            publishDate:"Jan 16, 2013",
            summary:$sce.trustAsHtml("நமது வாழ்க்கையில் பல சமயங்களில் நமக்கு வேதனையும் விரக்தியும் ஏற்படுவது இயல்பு.&nbsp;&nbsp; நம் வாழ்வில் அனுதினமும் ஏற்படும் பல்வேறு சம்பவங்கள் நமக்கு விரக்தியை ஏற்படுத்துகின்றன.&nbsp; பல நேரங்களில்,&nbsp; இந்த விரக்தி நம்மை ஆட்கொண்டு நமது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொங்கல் வாழ்த்துக்கள்..'),
            thumbnail:'/images/4202/Amma-Photo-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/14/post4202.html",
            publishDate:"Jan 14, 2013",
            summary:$sce.trustAsHtml("வழக்கமாக எல்லா பண்டிகைகளுக்கும், தலைவர்கள் மக்களுக்கு வாழ்த்து சொல்வார்கள்.&nbsp; ஒரு மாற்றத்திற்காக நாம் இந்த ஆண்டு தலைவர்களுக்கு வாழ்த்து சொல்லுவோம்.ஜெயலலிதா.இந்தத் தைத் திருநாளில், நாட்டு நடப்புக்களை குறைந்தபட்சம் செய்தித்தாள்களைப் பார்த்தாவதோ அல்லது, ஜெயா தொலைக்காட்சி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடங்காமை ஆரிருள் உய்த்து விடும்.'),
            thumbnail:'/images/4195/george1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/12/post4195.html",
            publishDate:"Jan 12, 2013",
            summary:$sce.trustAsHtml("அடக்கம் அமரருள் உய்க்கும்அடங்காமை ஆரிருள் உய்த்து விடும்அடக்கம் அழியாத புகழைக் கொடுக்கும்.&nbsp; அடங்காமை வாழ்வையே இருளாக்கி விடும் என்கிறார் அய்யன் வள்ளுவர்.“ஜார்ஜ்.&nbsp; இவர் ஐஐடியில் படித்தவர்.&nbsp; பொதுவாகவே ஐஐடியில் படித்தவர்கள் மற்றவர்களை எருமை மாடுகளாகவே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கயமையின் நிறம் சிகப்பு'),
            thumbnail:'/images/4192/BangaruAdigalar1-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/09/post4192.html",
            publishDate:"Jan 9, 2013",
            summary:$sce.trustAsHtml("மேல்மருவத்தூர்.&nbsp; கடந்த முப்பது முப்பத்தைந்து ஆண்டுகளாக இந்த இடம் ஒரு ஆன்மீகத் தலமாக உருவாகியிருக்கிறது. தமிழகத்தில் புரட்சித் தலைவி அம்மா அவர்களுக்கு போட்டியாக ஒரு அம்மா இருக்கிறார் என்றால் அது பங்காரு அடிகளார் என்கிற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜோதி Money'),
            thumbnail:'/images/4179/Sep_-_05_c-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/06/post4179.html",
            publishDate:"Jan 6, 2013",
            summary:$sce.trustAsHtml("கூடங்குளம் அணு உலையை எதிர்த்து அப்பகுதி மக்கள் கடந்த ஒரு ஆண்டுக்கும் மேலாக, தொடர்ந்து சளைக்காமல் போராடி வருவதை, சவுக்கு வாசர்கள் அறிவீர்கள்.&nbsp; இது தொடர்பாக, சென்னை உயர்நீதிமன்றத்தில் வழக்கு தொடுக்கப்பட்டதையும், அவ்வழக்கை சென்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐ யம் வெரி ஹேப்பி.. ஸ்டார்ட் ம்யூசிக்..'),
            thumbnail:'/images/4172/06THSAIDAI_S_DURAIS_522108a-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/05/post4172.html",
            publishDate:"Jan 5, 2013",
            summary:$sce.trustAsHtml(" கவுண்டமணி.&nbsp; தமிழ்த் திரையுலகில், நகைச்சுவையில் ஒரு மைல் கல் என்றால் அது மிகையல்ல.&nbsp; அவ்வப்பொழுது,&nbsp; மழைக்காலம், வெயில்காலம் போல, தமிழ்த்திரையுலகில் காமெடி நடிகர்கள் தோன்றி மறைவார்கள். ஆனால், காலத்தைக் கடந்து இன்றளவும் நகைச்சுவையாக அன்றாடம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கொம்பு முளைத்தவர்கள்.'),
            thumbnail:'/images/4166/06VBG_ADALAT_746045f-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/03/post4166.html",
            publishDate:"Jan 3, 2013",
            summary:$sce.trustAsHtml("இன்று சென்னை உயர்நீதிமன்றத்தில் நடந்த இரண்டு வழக்குகளின் விசாரணை, குறித்து விரிவாகப் பார்ப்போம்.நேற்று எழுதப்பட்ட நேனே தேவுடு கட்டுரை படித்திருப்பீர்கள். அந்தக் கட்டுரையில் குறிப்பிட்டிருந்தபடி நேற்று மாலையே ஃபேக்ஸ் மூலமாக வெளி மாநிலத்தில் உள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நேனே தேவுடு.. ..'),
            thumbnail:'/images/4163/Elippe_Dharmarao-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/02/post4163.html",
            publishDate:"Jan 2, 2013",
            summary:$sce.trustAsHtml("2013ம் ஆண்டை நீதித்துறை ஆண்டாக அறிவித்து விட்டு, முதல் கட்டுரை நீதித்துறையைப் பற்றி இல்லாமல் இருந்தால் சவுக்கு வாசகர்கள் என்ன நினைப்பார்கள்…. ?முதல் கட்டுரையே நீதித்துறையைப் பற்றித்தான். தலைப்பைப் பார்த்ததும், ஏதோ தெலுங்குக் கட்டுரை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புத்தாண்டு வாழ்த்துக்கள் தோழர்களே..'),
            thumbnail:'/images/4158/New-Year-2013-Wishes-Wallpaper-600x450-150x150.jpg',
            categories:['default',''],
            href:"/default/2013/01/01/post4158.html",
            publishDate:"Jan 1, 2013",
            summary:$sce.trustAsHtml("2012 நிறைவுக்கு வந்து 2013 தொடங்கியுள்ளது. 2012 பலர் வாழ்வில் பல்வேறு மாற்றங்களை ஏற்படுத்தியிருக்கக் கூடும். பலருக்கு இது சிறப்பான ஆண்டாக அமைந்திருக்கலாம்.&nbsp; பலருக்கு இது ஏமாற்றம் தரும் ஆண்டாகவோ, பின்னடைவைத் தந்த ஆண்டாகவோ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரைவேக்காட்டுத்தனம்.'),
            thumbnail:'/images/4156/NDC_20121227-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/28/post4156.html",
            publishDate:"Dec 28, 2012",
            summary:$sce.trustAsHtml("இன்று தேசிய வளர்ச்சிக் கழகக் கூட்டத்தில் கலந்து கொள்வதற்காக டெல்லி சென்ற ஜெயலலிதா, கூட்டம் தொடங்கிய 10வது நிமிடத்தில் தன் பேச்சுக்கு இடையூறு செய்யும் விதமாக, மணியடித்ததால், தன் பேச்சை முழுவதுமாக படித்ததாக கருதிக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அலிபாபாவும் ஆயிரம் திருடர்களும்.'),
            thumbnail:'/images/4152/06THSAIDAI_S_DURAIS_522108a-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/27/post4152.html",
            publishDate:"Dec 27, 2012",
            summary:$sce.trustAsHtml("அலிபாபாவும் நாற்பது திருடர்களும் கேள்விப்பட்டிருப்பீர்கள்.&nbsp; அது என்ன ஆயிரம் திருடர்கள்… ? நாற்பது திருடர்கள் இருந்தாலே நாடு தாங்காது… ஆயிரம் அல்லது அதற்கு மேற்பட்ட திருடர்கள் இருந்தால்…&nbsp; என்ன ஆகும்… ?ஆயிரத்துக்கும் மேற்பட்ட திருடர்களை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 3'),
            thumbnail:'/images/4134/Amma-Photo-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/24/post4134.html",
            publishDate:"Dec 24, 2012",
            summary:$sce.trustAsHtml("சவுக்கில் எப்போதுமே ஜெயலலிதா காவல்துறையை நம்பியே ஆட்சி நடத்துவார்… ஜெயலலிதா ஆட்சிக்கு வந்தால், காவல்துறை அதிகாரிகளுக்கு கொண்டாட்டமாகப் போய் விடும், தமிழகத்தில் அதிகாரம் மிக்க வர்க்கமாகவும், மக்களை ஒடுக்கும் துறையாகவும் காவல்துறை மாறிவிடும் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அய்யயோ….  ஆனந்தமே…..'),
            thumbnail:'/images/4132/Elippe_Dharmarao-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/22/post4132.html",
            publishDate:"Dec 22, 2012",
            summary:$sce.trustAsHtml("இப்படி யார் பாடுவார் என்றால் சென்னை உயர்நீதிமன்றத்தில் நீதிபதியாக இருக்கும் நீதியரசர் எலிப்பி தர்மாராவ் அவர்கள் பாடுவார். ஏன் அப்படிப் பாடுவார்… ?&nbsp; இருக்காதா பின்னே.&nbsp; அண்ணன் எப்போ சாவான்… திண்ணை எப்போ காலியாகும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருமதி ரோசலின் மரணத்துக்கு தமிழக அரசே பொறுப்பு!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/12/22/post4130.html",
            publishDate:"Dec 22, 2012",
            summary:$sce.trustAsHtml("திருமதி ரோசலின் மரணத்துக்கு தமிழக அரசே பொறுப்பு!கடந்த செப்டம்பர் மாதம் பத்தாம் நாள் இடிந்தகரையில் நடந்த அணுஉலை முற்றுகைப் போராட்டத்தில் கலந்து கொண்டு காவல் துறையால் கைது செய்யப்பட்ட திருமதி. ரோசலின் தேவசகாயம் (வயது&nbsp;63)..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் தாமதம்… ?'),
            thumbnail:'/images/4129/jaffer_sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/20/post4129.html",
            publishDate:"Dec 20, 2012",
            summary:$sce.trustAsHtml("ஜாபர் சேட். தமிழகத்தின் முடிசூடா மன்னனாகத் திகழ்ந்தவர்.&nbsp;&nbsp; கருணாநிதியின் செல்லப்பிள்ளை. தமிழகத்தின் டிஜிபியாக இருந்த காலம் சென்ற துரை என்ற அதிகாரியை விட, அதிக அதிகாரத்தோடு தமிழகத்தை ஆட்டிப் படைத்தவர்.&nbsp; அவரைப் பற்றி ஏராளமான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Caesar’s wife should be beyond reproach Mr.Chief Justice..!'),
            thumbnail:'/images/4128/Eqbal-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/18/post4128.html",
            publishDate:"Dec 18, 2012",
            summary:$sce.trustAsHtml("The Indian Express Delhi edition carried a news item titled, “Complaint against one judge said daughter took Tata quota seat for MBBS 12 years ago”.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கண்ணாடி வீட்டிலிருந்து கல்லெறியாதீர்… ….'),
            thumbnail:'/images/4121/VVal101212_106-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/16/post4121.html",
            publishDate:"Dec 16, 2012",
            summary:$sce.trustAsHtml("ஹைதராபாத்தில் நடந்த ஒரு ஒலிநாடா வெளியீட்டு விழாவில் குஷ்பு கலந்து கொண்ட போது, அவர் உடுத்தியிருந்த புடவையில் இந்துக் கடவுளர்கள் படம் இருந்ததாக சர்ச்சை எழுந்துள்ளது.&nbsp; இந்த சர்ச்சையை எழுப்பியவர்கள், இந்து மக்கள் கட்சியினர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நமக்கு வாய்த்த அடிமைகள்.. … …'),
            thumbnail:'/images/4119/sam_0407-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/13/post4119.html",
            publishDate:"Dec 13, 2012",
            summary:$sce.trustAsHtml("தலைப்பைப் பார்த்ததும், ஜெயலலிதாவும், சசிகலாவும் பேசிக்கொள்கிறார்கள் என்று நினைத்து விடாதீர்கள். அவர்கள் அதிமுக அடிமைகளைப் பற்றி இப்படித்தான் பேசிக்கொள்வார்கள் என்றாலும், இந்தக் கட்டுரை அவர்களைப் பற்றியது அல்ல.இந்தக் கட்டுரை, தமிழகத்தில் உள்ள உயர்நீதிமன்றம் தவிர்த்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தர்மபுரி தாக்குதல் உணர்த்துவது என்ன ?  &#8211; ஜி.ராமகிருஷ்ணன்.'),
            thumbnail:'/images/4113/DSC_0833-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/13/post4113.html",
            publishDate:"Dec 13, 2012",
            summary:$sce.trustAsHtml("சிபிஎம் மாநிலக்குழுச் செயலாளர் ஜி.ராமகிருஷ்ணன்.விழி பிதுங்க வைக்கும் விலைவாசி உயர்வு. விரக்தியின் விளிம்புக்குத் தள்ளும் வேலையின்மை, விவசாயத்துக்கு அடுத்ததாக அதிகம் பேர் நம்பியிருக்கும் சிறு வணிகத்திற்கு ஆபத்து. காசு உள்ளவர்களுக்கே வேலை வாய்ப்புள்ள உயர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிமுகவில் ஒரு வீரபாண்டி ஆறுமுகம்.'),
            thumbnail:'/images/4111/Senthil-Balaji-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/12/post4111.html",
            publishDate:"Dec 12, 2012",
            summary:$sce.trustAsHtml("சேலம் அங்கம்மாள் காலனியில் குடியிருந்த மக்களின் சொத்துக்களை திமுகவின் அமைச்சர் வீரபாண்டி ஆறுமுகம் மற்றும் அவர் உறவினர்கள் பறிக்க முயற்சி செய்து, அங்கே குடியிருந்த மக்களை அடித்து விரட்டி, அதன் காரணமாக வீரபாண்டி ஆறுமுகம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கப்பலோட்டிய தமிழன்.'),
            thumbnail:'/images/4104/03-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/10/post4104.html",
            publishDate:"Dec 10, 2012",
            summary:$sce.trustAsHtml("கப்பலோட்டிய தமிழன் யாரென்று பார்ப்போம்.&nbsp; அதற்கு முன் நெஞ்சை உருக்கும் ஒரு கதையைப் பார்த்து விடுவோம். சமீபத்தில் சென்னையைத் தாக்க இருந்த நீலம் புயல், ஒரு வழியாக வலுவிழந்து சென்னை தப்பித்தது.&nbsp; சென்னை தப்பித்தாலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிறந்த நாள் வாழ்த்துக்கள்'),
            thumbnail:'/images/4095/1DSC_0115-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/09/post4095.html",
            publishDate:"Dec 9, 2012",
            summary:$sce.trustAsHtml("ராதாகிருஷ்ணன்.&nbsp; இவர் ஒரு வழக்கறிஞர்.&nbsp; ஆயிரக்கணக்கில் இருக்கும் வழக்கறிஞர்களில் இவர் ஒரு வழக்கறிஞர் அல்ல.&nbsp; இவர் மக்களுக்கான வழக்கறிஞர்.நம்மில் பலர் பல்வேறு துறைகளில் விற்பன்னர்களாக இருப்போம். நிபுணர்களாக இருப்போம்.&nbsp; மற்றவர்களோடு ஒப்பிட முடியாத அளவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காதல் டாக்டருக்கு படைப்பாளிகள் பதில்'),
            thumbnail:'/images/4093/DSC_0123-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/09/post4093.html",
            publishDate:"Dec 9, 2012",
            summary:$sce.trustAsHtml("தருமபுரி வன்முறை மற்றும் காதலைக் கொண்டாடும் ஓவிய முகாம் சென்னை மெரினா கடற்கரையில் வெற்றிகரமாக நடந்ததுதருமபுரி வன்கொடுமைகளைத் தொடர்ந்து தலித் மக்கள் மீது கட்டவிழ்த்து விடப்பட்ட சாதி வெறியாட்டங்கள் பரவலாக அதிகரித்துள்ளது. இதற்கு தலித்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிலை குலைந்த நீதி'),
            thumbnail:'/images/4084/MadrasHighCourtManuNeedhiCholanStatue-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/06/post4084.html",
            publishDate:"Dec 6, 2012",
            summary:$sce.trustAsHtml("&nbsp;இந்தக் கட்டுரையைப் படிப்பதற்கு முன், நிலை தடுமாறும் நீதி என்ற கட்டுரையைப் படித்து விடுங்கள்.நம் சென்னை உயர்நீதிமன்றத்தில் உள்ள நீதிபதிகளைப் பற்றி தெரிந்து கொள்வோம்.முதலில் தலைமை நீதிபதி.&nbsp; தலைமை நீதிபதி இக்பால், ஜார்கண்ட் மாநிலத்தைச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கொலைகார நீதிமன்றங்கள்…'),
            thumbnail:'/images/4081/encounter-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/12/03/post4081.html",
            publishDate:"Dec 3, 2012",
            summary:$sce.trustAsHtml("கடந்த வாரம் என்கவுன்டர் என்ற பெயரில் மேலும் இரண்டு கொலைகளை அரங்கேற்றியிருக்கிறது தமிழ்நாடு காவல்துறை. பிரபு மற்றும் பாரதி என்ற இருவரை வழக்கம் போல தப்பிச் சென்ற பிறகு பிடித்த காவல்துறையினரை அவர்கள் தாக்கியதால்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிலை தடுமாறும் நீதி..'),
            thumbnail:'/images/4075/madras-high-court-wallpaper-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/29/post4075.html",
            publishDate:"Nov 29, 2012",
            summary:$sce.trustAsHtml(" இந்தியாவின் நீதித்துறை உலகின் புகழ் பெற்ற நீதித்துறைகளுக்கு சற்றும் சளைக்காத நீதித்துறை. விவியன் போஸ், வி.ஆர்.கிருஷ்ணய்யர், பி.என்.பகவதி, எச்.ஆர்.கண்ணா, சர்க்காரியா, சின்னப்ப ரெட்டி, போன்ற பல்வேறு நீதிபதிகள் இந்திய நீதித்துறையின் பெருமையை நிலைநாட்டிச் சென்றுள்ளனர்.இந்திய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேசிய அவமானம்.. …'),
            thumbnail:'/images/4073/kasab_reuters-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/22/post4073.html",
            publishDate:"Nov 22, 2012",
            summary:$sce.trustAsHtml("  தந்தை வண்டி இழுத்து வாழ்வை நடத்துபவர். கடுமையான வறுமைச் சூழல்.&nbsp; ஆறாவது வகுப்போடு படிப்பை கைவிடுகிறான்.&nbsp;&nbsp; அதற்குப் பிறகு உடல் உழைப்பு. லாஹுரில் தனியாக தங்கி வேலை செய்கிறான்.&nbsp; ஊருக்குத் திரும்பியதும், தான் சம்பாதித்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராமதாஸ் திடீர் போராட்ட அறிவிப்பு&#8230;'),
            thumbnail:'/images/4071/116921715__357345b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/20/post4071.html",
            publishDate:"Nov 20, 2012",
            summary:$sce.trustAsHtml("இதுபோன்ற நிகழ்ச்சிகள்தான் கலாச்சார சீரழிவுக்கு வழி வகுக்கும். ஆங் சான் சூ கீ. வன்னிய சமுதாயத்தைச் சேர்ந்த ஒரு பெண். தலித் சமுதாயத்தைச் சேர்ந்த ஓபாமா பொது இடத்தில் இப்படி முத்தமிடுவதன் மூலம் தமிழ்க்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காதல் டாக்டர்.. …'),
            thumbnail:'/images/4069/4740740575_c8b22d94a7_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/19/post4069.html",
            publishDate:"Nov 19, 2012",
            summary:$sce.trustAsHtml("காதலிப்பவர்களுக்கெல்லாம் ஒரு அற்புத செய்தி.&nbsp;&nbsp; காதலிக்கும் போது பலருக்கு இருக்கும் ஒரு அச்சம் நம் காதல் உண்மையானதுதானா…&nbsp; நம் காதல் நிறைவேறுமா… நாம் ஒருவரையொருவர் காதலிப்பது சரியானதா… இல்லையா.. இது போல பல சந்தேகங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எண்ணற்ற வினாக்களை எழுப்பும் மதிப்புமிக்க நூல்! &#8211; சீமான்.'),
            thumbnail:'/images/4056/invitation-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/19/post4056.html",
            publishDate:"Nov 19, 2012",
            summary:$sce.trustAsHtml("தோழர் திருச்சி வேலுச்சாமியின் நூலுக்கு சீமானின் அணிந்துரை.&nbsp;முன்னாள் பிரதமர் இராஜீவ் காந்தி கொலை தமிழ்நாட்டின் அரசியலையும், ஈழத்தின் நம் சொந்தங் கள் நடத்திய நியாயமான, தீரமிக்க விடுதலைப் போராட்டத்தையும் பெரிதும் பாதித்த ஒரு நிகழ்வாகும்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('10 ஆயிரம் லஞ்சம் வாங்கிய தபால் அதிகாரி கைது'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/11/19/post4054.html",
            publishDate:"Nov 19, 2012",
            summary:$sce.trustAsHtml("&nbsp;ராஜபாளையம் தபால் நிலையத்தில் தபால் அதிகாரியாக பணியில் சேர்ந்தவர் பாலமுருகன். இவர் பணியில் சேர்ந்து இரண்டு ஆண்டுகள் ஆகி விட்டதால், இவரின் தகுதிகாண் பருவத்தை திருப்திகரமாக இருந்ததாக உத்தரவிட, உதவி தபால் கண்காணிப்பாளர் அங்கண்ணன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கஸ்டம்ஸ் உதவி ஆணையர் மீது சிபிஐ வழக்கு பதிவு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/11/19/post4053.html",
            publishDate:"Nov 19, 2012",
            summary:$sce.trustAsHtml("கஸ்டம்ஸில் உதவி ஆணையராக உள்ள கதிர்வேல், கஸ்டம்ஸ் மதிப்பீட்டாளர் சஞ்சய் கக்கர், மதிப்பீட்டாளர் மணி, கஸ்டம்ஸ் ஆய்வாளர் குகன், &nbsp;மற்றும் சிலரை இன்று சிபிஐ கைது செய்தது. &nbsp; மெஜஸ்டிக் என்ற இறக்குமதி நிறுவனத்துக்குச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிரமாதம் பிரமோத்..'),
            thumbnail:'/images/4052/Pramod_Kumar_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/18/post4052.html",
            publishDate:"Nov 18, 2012",
            summary:$sce.trustAsHtml("பிரமோத் குமார் ஐபிஎஸ்.&nbsp; சவுக்கு வாசகர்களுக்கெல்லாம் நன்றாகவே அறிமுகம் ஆனவர். 1989ம் ஆண்டு நேரடியாக தேர்ந்தெடுக்கப்பட்ட ஐபிஎஸ் அதிகாரி.யார் இந்த பிரமோத் குமார், எதற்காக இவரைப் பற்றி சவுக்கில் எழுதப்பட்டுள்ளது என்று அறிய விரும்பும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐஏஎஸ் அதிகாரிகள் சொத்துப் பட்டியல் &#8211; நூல் வெளியூடு'),
            thumbnail:'/images/4049/PRESS-Release-IAS-BOOK-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/16/post4049.html",
            publishDate:"Nov 16, 2012",
            summary:$sce.trustAsHtml("தமிழகத்தில் உள்ள ஐஏஎஸ் அதிகாரிகளின் சொத்துப் பட்டியல்களை தொகுத்து, பொதுமக்கள் அனைவரும் பயன் பெறும் வகையில் தொகுத்து நூலாக நாளை (17.11.2012) வெளியிடப்படுகிறது. &nbsp;முன்னாள் ஐஏஎஸ் அதிகாரி தேவசகாயம் இந்நூலை வெளியிடுகிறார்.&nbsp;  Share this:Share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவள் பெயர் அம்பிகா…'),
            thumbnail:'/images/4047/DSC_0599-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/15/post4047.html",
            publishDate:"Nov 15, 2012",
            summary:$sce.trustAsHtml("அவள் பெயர் அம்பிகா.&nbsp;&nbsp; அவள் கணவன் பெயர் குமார்.&nbsp; அவளுக்கு இரண்டு மகள்கள்.&nbsp; ஒரு மகன்.&nbsp; பெரிய மகளின் பெயர் சுஷ்மிதா.&nbsp; சின்ன மகளின் பெயர் சுஷாந்திகா.&nbsp; மகனின் பெயர் சக்திவேல்.&nbsp;&nbsp; சுஷ்மிதா ஒன்பதாவது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு 2'),
            thumbnail:'/images/3945/Amma-Photo-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/10/post3945.html",
            publishDate:"Nov 10, 2012",
            summary:$sce.trustAsHtml("ஜெயலலிதாவின் நிர்வாகச் சீர்கேட்டிற்கு உதாரணங்களைச் சொல்லிக் கொண்டே போகலாம்.&nbsp;&nbsp; அண்ணா வளைவைக் காப்பாற்றி விட்டு, அரசு சித்த மருத்துவமனையை இடிப்பது, நாள்தோறும் யாராவது ஒரு அதிகாரியையோ அமைச்சர்களையோ மாற்றுவது, அண்ணா நூலகத்தை குழந்தைகளுக்கான மருத்துவமனையாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Bribe need not be in cash Mr.Ramanujam.'),
            thumbnail:'/images/3940/DSC_0421-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/08/post3940.html",
            publishDate:"Nov 8, 2012",
            summary:$sce.trustAsHtml("He who is not contented with what he has, would not be contented with what he would like to have, &nbsp;said Socrates.The appointment of K.Ramanujam,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக அரசுக்கு தோல்வியே கிடையாது  &#8211; வண்டு முருகன் ஆவேசம்&#8230;'),
            thumbnail:'/images/3938/DSC00038-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/07/post3938.html",
            publishDate:"Nov 7, 2012",
            summary:$sce.trustAsHtml(" நீதிமன்றத்தில் தமிழக அரசுக்குத் தோல்வியா?பதில் சொல்கிறார் அட்வகேட் ஜெனரல்&nbsp;சமச்சீர்க் கல்வி தொடங்கி அண்ணா நூலகம் வரை அனைத்திலும் தமிழக அரசின் நிலைப்​பாட்டுக்கு சறுக்கல்கள்தான். இந்தநிலையில், கடந்த வாரம் கிரானைட் வழக்கில் உயர் ​நீதிமன்ற&nbsp;&nbsp;மதுரைக் கிளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தூக்குக் கயிற்றில் நிஜம்&#8230; ராஜீவ் கொலையில் மறைக்கப்பட்ட உண்மைகள்.'),
            thumbnail:'/images/3936/Book_advt-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/06/post3936.html",
            publishDate:"Nov 6, 2012",
            summary:$sce.trustAsHtml("&#8220;தூக்குக் கயிற்றில் நிஜம்&#8221;என்ற தலைப்பில் திருச்சி வேலுச்சாமி எழுதிய ராஜீவ் காந்தி கொலை பற்றிய புதிய புத்தகம், &nbsp;வரும் நபம்பர் 23ம் தேதி, சென்னை தியாகராயர் கரில் உள்ள பி.டி.தியாகராயர் அரங்கத்தில், வெளியிடப்பட உள்ளது..தொல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரவுடி கலெக்டர்…'),
            thumbnail:'/images/3934/24.10.12-photo-w-c-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/06/post3934.html",
            publishDate:"Nov 6, 2012",
            summary:$sce.trustAsHtml("பாஸ்கரன்.&nbsp;&nbsp; இவர் தமிழ்நாடு அரசுப் பணியாளர் தேர்வாணையம் நடத்தும் க்ரூப் 1 தேர்வில் தேர்ச்சி பெற்று, 2010ல் ஐஏஎஸ் அதிகாரியாக பணி உயர்த்தப்படுகிறார்.&nbsp;&nbsp; 10 ஜுன் 2011 அன்று தஞ்சாவூர் மாவட்ட கலெக்டராக நியமிக்கப்படுகிறார்.தஞ்சாவூர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயிர்ப்புடன் ஒரு நாடகம்.. பாகம் 2'),
            thumbnail:'/images/3929/ts2-150x150.png',
            categories:['default',''],
            href:"/default/2012/11/05/post3929.html",
            publishDate:"Nov 5, 2012",
            summary:$sce.trustAsHtml("முதல் பாகம் நாடகத்தைப் படிக்காதவர்களுக்கு, நாடகத்தின் கதை முழுமையாகத் தெரியாது. ஆகையால் இரண்டாம் பாகத்தைப் படிப்பதற்கு முன்னால், முதல் பாகத்தைப் படித்து விடவும்.உயிர்ப்புடன் ஒரு நாடகம்கடந்த பாகத்தின் இறுதியில் சொல்லியிருந்தது போலவே, இரண்டாம் பாகம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வருவாய் பெருக்க பொய்யுரைத்ததா விகடன் ?'),
            thumbnail:'/images/3921/jollu-150x150.png',
            categories:['default',''],
            href:"/default/2012/11/04/post3921.html",
            publishDate:"Nov 4, 2012",
            summary:$sce.trustAsHtml("முன்னாள் போராளி இன்று ஒரு பாலியல் தொழிலாளி” என்ற தலைப்பில் பேட்டி ஒன்று விகடன் இதழில் வந்துள்ளது. &nbsp;ஒரு முன்னாள் போராளியின் பேட்டி என்று கூறி விட்டு பெண் புலிகளின் உருவாக்கம் புலிகளின் தலைவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  தப்பி ஓடிய ரங்கசாமி…'),
            thumbnail:'/images/3919/rangasamy-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/03/post3919.html",
            publishDate:"Nov 3, 2012",
            summary:$sce.trustAsHtml("சோனியாவின் மருமகன் ராபர்ட் வதேராவை விட அதிகமாக சொத்து சேர்த்து விட்டார், ப.சிதம்பரத்தின் மகன் கார்த்தி சிதம்பரம் என்று ட்விட்டரில் எழுதிய, பாண்டிச்சேரியைச் சேர்ந்த தொழிலதிபர் ரவி என்பவரை, கார்த்தி சிதம்பரம் ஈமெயிலில் அனுப்பிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கெஞ்சிக் கேட்கிறோம்&#8230; முதுகில் குத்தாதீர்கள்&#8230;'),
            thumbnail:'/images/3917/IMG5139-1233940124-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/02/post3917.html",
            publishDate:"Nov 2, 2012",
            summary:$sce.trustAsHtml("இந்த வாரம் ஆனந்த விகடனில் வெளிவந்த பேட்டி இது..&#8220;நேற்று. நான் விடுதலைப் போராளி! இன்று. பாலியல் தொழிலாளி.&#8221;ஒரு பெண் புலியின் வாக்குமூலம்இது ஒர் உண்மைக் கதைவித்யா ராணி. 2009 மே வரை தமிழ் ஈழம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பத்திரிக்கையாளர்கள் கவனத்திற்கு&#8230;.'),
            thumbnail:'/images/3915/Notice-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/02/post3915.html",
            publishDate:"Nov 2, 2012",
            summary:$sce.trustAsHtml("அன்பான பத்திரிக்கையாளர்களே..&nbsp;சென்னை விமான நிலையத்தில் நடந்த சம்பவங்களை நீங்கள் அனைவரும் அறிந்திருப்பீர்கள். &nbsp; பத்திரிக்கையாளர்களை தகாத முறையில் பேசிய விஜயகாந்த் தான் பேசியதற்கு இந்நாள் வரையில் வருத்தம் தெரிவிக்கவில்லை. &nbsp; பல முறை முதலமைச்சர்களாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கனத்த மவுனம்'),
            thumbnail:'/images/3913/THSHK_PARAMAKUDI_2_779810g-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/11/01/post3913.html",
            publishDate:"Nov 1, 2012",
            summary:$sce.trustAsHtml(" பரமக்குடியில், பசும்பொன் முத்துராமலிங்கத் தேவரின் நினைவு தினம் மற்றும் பிறந்த தினம் அனுசரிக்கப்படும் குருபூஜையை ஒட்டி நடந்த வன்முறையில் இது வரை இறந்தவர்களின் எண்ணிக்கை நான்கு &nbsp;எனத் தெரிகிறது.&nbsp; மருத்துவமனையிலும் பலர் அனுமதிக்கப்பட்டிருக்கிறார்கள். இவர்களில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வெள்ளத்தில் மூழ்கிய ருக்மணி லட்சுமிபதி…'),
            thumbnail:'/images/3904/DSC_0433-3-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/29/post3904.html",
            publishDate:"Oct 29, 2012",
            summary:$sce.trustAsHtml("இன்று சென்னையின் பிரதான சாலைகளில் ஒன்றான ருக்மணி லட்சுமிபதி சாலை, மக்கள் வெள்ளத்தில் மூழ்கியது. &nbsp;கூடங்குளம் அணு உலையை இழுத்து மூடு என்ற கோரிக்கையோடு, சென்னையில் மறுமலர்ச்சி தி.மு.க, விடுதலைச் சிறுத்தைகள், மனிதநேய மக்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துக்கையாண்டி மனைவி சுப்புலட்சுமி சிறையில் அடைக்கப்பட்டார்.'),
            thumbnail:'/images/3854/DSC_6793-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/26/post3854.html",
            publishDate:"Oct 26, 2012",
            summary:$sce.trustAsHtml("&nbsp;துக்கையாண்டியின் மனைவி சுப்புலட்சுமி சிறையில் அடைக்கப்பட்டார்.&nbsp; வட இந்தியாவைச் சேர்ந்த இருவருக்கு சொந்தமான பத்து கிரவுண்ட் நிலத்தை, அவர்கள் பெயரில் மோசடியாக ஆவணம் தயார் செய்து நில அபகரிப்பு செய்ததாக புகாரில் சிக்கிய முன்னாள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?   துக்கையாண்டி மீது சொத்துக் குவிப்பு வழக்கு'),
            thumbnail:'/images/3852/thukkiandi12-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/25/post3852.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml("  நில அபகரிப்பு வழக்கில் துக்கையாண்டியின் மனைவி சுப்புலட்சுமி கைது செய்யப்பட்டுள்ள நிலையில், துக்கையாண்டிக்கு புதுத் தலைவலி கிளம்பியிருக்கிறது.&nbsp;&nbsp; 24 ஆயிரம் சதுர அடியில் மூன்று நீச்சல் குளங்களோடு அபகரிக்கப்பட்ட நிலத்தில் பனையூரில் பிரம்மாண்டமான வீடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துக்கையாண்டி மனைவி சுப்புலட்சுமி கைது'),
            thumbnail:'/images/3851/thukkiandi1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/25/post3851.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml(" நில அபகரிப்பு வழக்கில் துக்கையாண்டியின் மனைவி சுப்புலட்சுமி, பெங்களுரில் கைது. வட இந்தியாவைச் சேர்ந்த இருவரின் நிலத்தை துக்கையாண்டியின் மனைவி, போலி ஆவணங்களை தயார் செய்து அபகரித்ததாக சென்னை மாநகர காவல்துறை வழக்கு பதிவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? அதிமுகவுக்கு தூது விட்டாரா அழகிரி..'),
            thumbnail:'/images/3850/71a5520f2893e57bd018134853ed-grande-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/25/post3850.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml("தன் மகனை கைது நடவடிக்கையிலிருந்து காப்பாற்றுவதற்காக மு.க.அழகிரி அதிமுகவுக்கு தூது விட்டுள்ளார்.&nbsp; கைது நடவடிக்கையை கைவிட வேண்டும் என்றும், தன் குடும்பத்தை மேலும் சிக்கலில் ஆழ்த்த வேண்டாம் என்றும் வேண்டுகோள் விடுக்கும் முயற்சியில் ஈடுபட்டுள்ளார்.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  ஈமு ராஜா.. !!!'),
            thumbnail:'/images/3849/Tamil-Daily-News-Paper_58039057255-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/25/post3849.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml("ஈமுக் கோழி மோசடி விவகாரத்தில் கைதாகி சிறையில் உள்ள அதன் இயக்குநர் குரு, அவர் தொந்தரவில்லாமல் தொழில் நடத்த பலருக்கு கப்பம் கட்டி வந்துள்ளார்.&nbsp; காவல்துறையினர், யார் யாருக்குக் கப்பம் கட்டியுள்ளார் என்பதைத் தீவிரமாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? நடுத்தெரு நாராயணசாமி..'),
            thumbnail:'/images/3847/l2012042640361-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/25/post3847.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml("2014 பாராளுமன்றத் தேர்தலில் எப்படியாவது கரை சேர வேண்டும் என்று இப்போதே கணக்குப் போட ஆரம்பித்துள்ளனர் காங்கிரஸ் தலைவர்கள்.&nbsp; சென்ற முறை நூலிழையில் வெற்றி பெற்றது போல இப்போது நடக்கக் கூடாது என்பதால், இம்முறை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? சமூக நீதியைக் காக்கும் மருத்துவர் அய்யா'),
            thumbnail:'/images/3845/3325707760_6f4f340c91_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/25/post3845.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml(" மருத்துவர் ராமதாஸின் மகள் வயிற்றுப் பேரன் முகுந்தனின் திருமணம் அக்டோபர் 10 அன்று சென்னையில் நடந்தது.&nbsp; இந்தத் திருமணத்துக்கு வரதட்சிணையாக ரோல்ஸ் ராய்ஸ் கார் ஒன்றும், போயஸ் தோட்டத்தில் சொகுசு பங்களா ஒன்றும் கொடுக்கப்பட்டுள்ளது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொய் வழக்கிலிருந்து விடுதலை…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/10/25/post3844.html",
            publishDate:"Oct 25, 2012",
            summary:$sce.trustAsHtml(" சவுக்கில் ஜாபர் சேட் வீட்டு வசதி வாரியத்தில் மோசடி செய்த பெற்ற வீட்டு மனை குறித்து சவுக்கு தளத்தில் ஒரு மகிழ்ச்சி ஒரு சோகம் என்ற கட்டுரை எழுதியதற்காக, ஜாபர் சேட் உத்தரவின் பேரில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சரத் குமாருக்கு நோட்டீஸ் அனுப்பினார் உதயக்குமார்.'),
            thumbnail:'/images/3843/sarath_kumar_sarath_kumar_profile_sarath_kumar_stills_sarath_kumar_photos_sarath_kumar_videos_malayalam_cinema_complete_movie_4-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/24/post3843.html",
            publishDate:"Oct 24, 2012",
            summary:$sce.trustAsHtml("சரத்குமாருக்கு நோட்டீஸ் அனுப்பினார் உதயக்குமார். &nbsp;கூடங்குளம் அணு உலை எதிர்ப்புக் குழுவின் தலைவர் சரத் குமார் நடத்தும் வாரப் பத்திரிக்கை மீடியா வாய்ஸ். &nbsp;இந்தப் பத்திரிக்கையில் &#8220;வேண்டும் கூடங்குளம். நெருக்கம் தலைவர்கள்.. நொறுங்கும் உதயக்குமார்&#8221;என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சின்மயி'),
            thumbnail:'/images/3834/205023921_20231f4f25_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/23/post3834.html",
            publishDate:"Oct 23, 2012",
            summary:$sce.trustAsHtml("இன்று சென்னை மாநகர சைபர் கிரைம் போலீசாரால், தேசிய ஆடை வடிவமைப்புக் கல்லூரியின் உதவிப் பேராசிரியர் சரவணக்குமார் என்பவர், கைது செய்யப்பட்டுள்ளார்.&nbsp; ராஜன்லீக்ஸ் என்ற பெயரில் இணையத்தில் எழுதிவரும் ராஜன் என்பவரும் கைது செய்யப்பட்டுள்ளார்.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாமும் பெற்றோம் ஒரு கோடி..'),
            thumbnail:'/images/3829/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/21/post3829.html",
            publishDate:"Oct 21, 2012",
            summary:$sce.trustAsHtml("சவுக்கு தளத்தின் ஹிட்டுகள் ஒரு கோடியைத் தொட்டு விட்டன.&nbsp; இது கொண்டாட வேண்டிய தருணமா…&nbsp; பெரிய சாதனை எதையாவது செய்து விட்டோமா என்ற சுயபரிசோதனைக் கேள்விகளுக்கு பதில் நிச்சயம் கொண்டாட வேண்டிய தருணமே.&nbsp; கடந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அப்பனுக்குத் தப்பாமல் பிறந்த பிள்ளை&#8230;'),
            thumbnail:'/images/3820/04THSHANKAR_174823e-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/21/post3820.html",
            publishDate:"Oct 21, 2012",
            summary:$sce.trustAsHtml("  பொதுத்துறை வங்கிகளுக்கு கிங்ஃபிஷர் விமான நிறுவனம் தர வேண்டிய கடன் பாக்கி மட்டும் 8000 கோடி. இந்த 8000 கோடியும், நமது வரிப்பணம்.&nbsp;கிங்ஃபிஷர் விமான நிறுவனத்தின் லைசென்ஸ் ரத்து செய்யப்பட்டு விட்டதால் ஆயிரக்கணக்கான ஊழியர்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முட்டாள் அரசு'),
            thumbnail:'/images/3818/Amma-Photo-7-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/19/post3818.html",
            publishDate:"Oct 19, 2012",
            summary:$sce.trustAsHtml("அதிமுக அரசைப் போன்ற முட்டாள்த்தனமான அரசை இந்தியாவில் எங்குமே பார்க்க முடியாது. நந்தவனத்தில் ஓர் ஆண்டிஅவன் நாலாறு மாதமாய்குயவனை வேண்டிகொண்டு வந்தானொரு தோண்டிஅதைக் கூத்தாடிக் கூத்தாடிபோட்டுடைத்தாண்டி என்ற பாடல் யாருக்குப் பொருந்துமோ இல்லையோ.&nbsp; ஜெயலலிதாவுக்கு நிச்சயமாகப் பொருந்தும்.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The Winning Alliance !!!'),
            thumbnail:'/images/3799/nitin-gadkari-2009-12-24-7-44-18-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/19/post3799.html",
            publishDate:"Oct 19, 2012",
            summary:$sce.trustAsHtml("In a surprise development, a new movement &nbsp;&#8211; “India For Corruption” &nbsp;perceptibly with an intention to counter Kejriwal’s India Against Corruption has been inaugurated in..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரணித்த கடவுள்கள்.'),
            thumbnail:'/images/3797/HWF_Medical_Camp-American_Doctors_visit-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/16/post3797.html",
            publishDate:"Oct 16, 2012",
            summary:$sce.trustAsHtml(" மருத்துவத்தைப் போன்ற புனிதமான தொழில் உலகில் வேறு எதுவுமே கிடையாது.&nbsp;&nbsp; வேறு எந்தத் தொழிலுக்கும் இல்லாத ஒரு பெருமை மருத்துவத் தொழிலுக்கு உண்டு.&nbsp;&nbsp; உயிரைக் காப்பாற்றும் வல்லமை படைத்தவர்கள் மருத்துவர்கள் என்பதாலேயே மருத்துவர்களை கடவுளாகவே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துக்கையாண்டி ஐபிஎஸ்'),
            thumbnail:'/images/3791/adfsw-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/15/post3791.html",
            publishDate:"Oct 15, 2012",
            summary:$sce.trustAsHtml("செய்தி. துக்கையாண்டி, இன்று ஆலந்தூர் நீதிமன்றத்தில் சரணடைந்து, சென்னை உயர்நீதிமன்ற உத்தரவின்படி முன்ஜாமீன் பெற்றார்.இந்தச் செய்தியை ஒட்டி, துக்கையாண்டிக்காக இந்தப் பாடல் சமர்ப்பணம்.. {youtube}aCqMus86GZA{/youtube}கற்க கற்க கள்ளும் கற்க என்று சொன்னான் அவன் கள்ளும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சூதும் வஞ்சகமும்'),
            thumbnail:'/images/3789/Ranjan_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/12/post3789.html",
            publishDate:"Oct 12, 2012",
            summary:$sce.trustAsHtml("நம் அன்றாட வாழ்வில் பொய்யும், சூதும் வஞ்சகமும், துரோகமும் ஒருபகுதியாகவேமாறிப்போய், அது நம்மை அதிர்ச்சிக்குள்ளாக்க தவறுகிறது.&nbsp; எந்தவிதமான அறச்சிக்கலும், இல்லாமல் சர்வசாதாரணமாக துரோகமிழைக்கும் அரசியல்வாதிகளையும், பல்வேறு சுயநலமிகளான மனிதர்களையும் பார்க்கையில் நமக்கு இந்த துரோகங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  மாற்றப்படுகிறாரா இணை ஆணையர் ?'),
            thumbnail:'/images/3786/pistol_991176f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/12/post3786.html",
            publishDate:"Oct 12, 2012",
            summary:$sce.trustAsHtml("சென்னை மாநகர ஆணையாளராக திரிபாதி இருந்தவரை இணை ஆணையர் சண்முக ராஜேஸ்வரன் பெரும் அதிகாரத்தை செலுத்தி வந்திருக்கிறார்.&nbsp; கமிஷனருக்கு நெருக்கம் என்பதால், மற்ற இணை ஆணையர்களை விட, சண்முக ராஜேஸ்வரனுக்கு செல்வாக்கு அதிகமே.&nbsp; ஆனால்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? டாக்டரின் தலைவலி..'),
            thumbnail:'/images/3784/ramadas13-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/12/post3784.html",
            publishDate:"Oct 12, 2012",
            summary:$sce.trustAsHtml("அனைவருக்கும் வைத்தியம் பார்க்க வேண்டிய டாக்டருக்கே தலைவலி என்றால் என்ன செய்வது ?&nbsp;&nbsp;&nbsp; அப்படித்தான் ஆகியிருக்கிறது டாக்டர் ராமதாஸ் நிலைமை.ஏற்கனவே ராமதாஸின் சொந்த தம்பியான சீனிக் கவுண்டர், பாட்டாளி மக்கள் கட்சியை விட்டு விலகி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  மறுத்த காரத்.  துக்கத்தில் தோழர்கள்….'),
            thumbnail:'/images/3782/prakash-karat_10-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/12/post3782.html",
            publishDate:"Oct 12, 2012",
            summary:$sce.trustAsHtml(" சமீபத்தில் மார்க்சிஸ்ட் கட்சியின் தமிழ் மாநிலக்குழுக் கூட்டம் சென்னையில் நடைபெற்றது.&nbsp; வேறு ஒரு நிகழ்ச்சிக்காக சென்னை வந்திருந்த அக்கட்சியின் தேசியப் பொதுச் செயலாளர் பிரகாஷ் காரத் இக்கூட்டத்தில் கலந்து கொண்டார். இக்கூட்டத்தில், தமிழ் மாநிலக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  பத்திரிக்கையாளர்களை வியப்பில் ஆழ்த்திய ஜெயந்தி நடராஜன்.'),
            thumbnail:'/images/3780/BL08_JAYANTHI_945937f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/12/post3780.html",
            publishDate:"Oct 12, 2012",
            summary:$sce.trustAsHtml("சோனியாவின் மருமகன் ராபர்ட் வதேரா மீது அர்விந்த் கேஜ்ரிவால் புகார் சொன்ன அடுத்த நிமிடமே, காங்கிரஸில் உள்ள அத்தனை செய்தித் தொடர்பாளர்களும், அந்தக் குற்றச்சாட்டை மறுத்து தொலைக்காட்சிகளில் பேட்டியளிக்க வேண்டும் என்று கண்டிப்பான உத்தரவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடக்கம் அமரருள் உய்க்கும்..'),
            thumbnail:'/images/3778/George_S-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/10/post3778.html",
            publishDate:"Oct 10, 2012",
            summary:$sce.trustAsHtml("அடக்கம் அமரருள் உய்க்கும், அடங்காமை ஆரிருள் உய்த்து விடும் என்றார் வள்ளுவர். &nbsp;இந்தக் குறளைப் படித்து பின்பற்ற வேண்டியவர் சென்னை மாநகர ஆணையாளராக இருக்கும் ஜார்ஜ்.ஜார்ஜ் சென்னை மாநகர காவல் ஆணையாளராக பொறுப்பேற்றதில் பலருக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  வண்டு முருகனின் வாதத்திறமை.'),
            thumbnail:'/images/3776/aadfDSC00037-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/06/post3776.html",
            publishDate:"Oct 6, 2012",
            summary:$sce.trustAsHtml("சமீபத்தில் மு.க.அழகிரியின் மகன் துரை தயாநிதியின் முன் ஜாமீன் மனு, சென்னை உயர்நீதிமன்ற மதுரைக் கிளையில் விசாரணைக்கு வந்தது.&nbsp; அந்த விசாரணையில் அரசுத் தரப்பு வழக்கறிஞராக ஆஜரானார் வண்டு முருகன்.&nbsp; அப்போது அழகிரியின் மகன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புழல் சிறை உங்களை அன்புடன் வரவேற்கிறது…'),
            thumbnail:'/images/3774/Thukkiandi_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/05/post3774.html",
            publishDate:"Oct 5, 2012",
            summary:$sce.trustAsHtml("நில அபகரிப்பு வழக்கில் சிக்கிய முன்னாள் லஞ்ச ஒழிப்புத் துறை இயக்குநர் மற்றும் கூடுதல் டிஜிபி துக்கையாண்டி மற்றும் அவர் மகள் யாமினி மற்றும் அவர் மனைவி மீது சென்னை மாநகர காவல்துறை நில..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருப்புத்தான் எனக்குப் புடிச்ச கலரு&#8230;'),
            thumbnail:'/images/3772/8-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/05/post3772.html",
            publishDate:"Oct 5, 2012",
            summary:$sce.trustAsHtml("கருப்புத் தான் எனக்குப் புடிச்ச கலருஎன் பேரச் சொன்னா&nbsp; ஊரு அதிரும் அந்த அளவு டெர்ரரு.டண்டணக்கா டண்டணக்கா டண்டணக்கா டன்..டண்டணக்கா டண்டணக்கா டண்டணக்கா டன்..கருப்புத் தான் எனக்குப் புடிச்ச கலரு என் பேரச் சொன்னா&nbsp; ஊரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  சாமர்த்தியமான ஷீலா ப்ரியா'),
            thumbnail:'/images/3771/sheela-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/04/post3771.html",
            publishDate:"Oct 4, 2012",
            summary:$sce.trustAsHtml("  சமீபத்தில் நடந்த ஐஏஎஸ் அதிகாரிகள் மாற்றத்தில் அனைவரின் புருவத்தையும் உயரச் செய்தது, மதிவாணன் ஐஏஎஸை தொழில் துறையின் இணைச் செயலாளராக நியமித்து பிறப்பித்த உத்தரவுதான்.&nbsp; இந்த உத்தரவு விசித்திரமாக இருந்ததற்கான காரணம் க்ரானைட் ஊழலுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? கலக்கத்தில் கவிப்பேரரசு'),
            thumbnail:'/images/3769/Vairamuthu-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/04/post3769.html",
            publishDate:"Oct 4, 2012",
            summary:$sce.trustAsHtml("க்ரானைட் ஊழல் தொடர்பான வழக்கு விசாரணை துரிதமாக நடைபெற்றுக் கொண்டிருக்கும் நிலையில் திரையுலகத்தைச் சேர்ந்த சில புள்ளிகள் கலக்கத்தில் உள்ளனர்.&nbsp;&nbsp; கவிப்பேரரசுவின் சென்னையில் உள்ள இரண்டு வீடுகளுக்கான க்ரானைட் கற்களை சப்ளை செய்தது பிஆர்பி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('(PIMP FICTION) பிம்ப் ஃபிக்ஷன்'),
            thumbnail:'/images/3767/IMG_0009-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/04/post3767.html",
            publishDate:"Oct 4, 2012",
            summary:$sce.trustAsHtml("1994ம் ஆண்டு உலகப் புகழ் பெற்ற இயக்குநர் க்வென்டின் டாரன்டினோவால் இயக்கப்பட்டு வெளியான படம்தான் Pulp Fiction.&nbsp; திரைக்கதை வடிவமைப்பில் ஒரு பெரிய உத்தியை கொண்டு வந்த இப்படம் ஆஸ்கார் விருது உள்ளிட்ட பல்வேறு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திட்ட அலுப்பாக இருக்கிறது&#8230;'),
            thumbnail:'/images/3764/ffffffffffffff-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/03/post3764.html",
            publishDate:"Oct 3, 2012",
            summary:$sce.trustAsHtml("இந்த டெசோ மாநாட்டைப் பற்றியும், கருணாநிதி அன் கம்பேனி நடத்திய பல நாடகங்கள் பற்றியும் கருணாநிதி பாணியிலேயே சொன்னால் பல முறை இடித்துரைத்தாயிற்று.&nbsp; இதற்கு மேல் இந்த மானங்கெட்டவர்களைத் திட்ட சவுக்குக்கே அலுப்பாக இருக்கிறது…இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயிர்ப்புடன் ஒரு நாடகம்..'),
            thumbnail:'/images/3762/07Epidau1rus_Theater08-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/10/02/post3762.html",
            publishDate:"Oct 2, 2012",
            summary:$sce.trustAsHtml("நாடகக் கலை உலகில் தோன்றி ஏறக்குறைய 2500 ஆண்டுகளாகின்றது.&nbsp; கிறிஸ்து பிறப்பதற்கு முன்பு ஆறாம் நூற்றாண்டிலேயே ஏதென்ஸ் நகரில் நாடகக் கலை உருவானதற்கான வரலாற்றுச் சான்றுகள் உள்ளன. சாக்ரடீஸ் தனது பொயடிக்ஸ் என்ற நூலில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறை செல்லும் சிங்கள ரத்னா'),
            thumbnail:'/images/3755/n-ram-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/27/post3755.html",
            publishDate:"Sep 27, 2012",
            summary:$sce.trustAsHtml("இந்து பத்திரிக்கையின் ஆசிரியராக இருந்த, இந்து ராம் மீது, தமிழக காவல்துறை கூட்டுச் சதி, அத்து மீறி நுழைதல் மற்றும் கொள்ளையடித்தல் ஆகிய பிரிவுகளின் கீழ் வழக்கு பதிவு செய்துள்ளனர்.கோவையைச் சேர்ந்த முன்னாள் எம்.எல்.ஏ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கான்ஸ்டபிளுக்கு மரியாதை&#8230;'),
            thumbnail:'/images/3744/agra-sp_350_092612113836-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/27/post3744.html",
            publishDate:"Sep 27, 2012",
            summary:$sce.trustAsHtml("உத்தரப் பிரதேசத்தில், ஒரு பொது இடத்தில் ஒரு கான்ஸ்டபிளை தன் ஷு லேசைக் கட்டச் சொல்லி உத்தரவிட்ட கூடுதல் காவல் துறை கண்காணிப்பாளரை பணி இடை நீக்கம் செய்து உத்தரவிட்டள்ளது உத்தரப்பிரதேச அரசு.. UP..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  வளர்பிறையில் வளர்மதி'),
            thumbnail:'/images/3742/12-13-2011-18-valarmathi--anandhan-sworn-in-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/26/post3742.html",
            publishDate:"Sep 26, 2012",
            summary:$sce.trustAsHtml(" தமிழ்நாடு சமூக நலத்துறை அமைச்சர் வளர்மதி வளர்ச்சி பிரம்மாண்டமானதாக பெருகி வருகிறதாம்.&nbsp;&nbsp; சென்னை நுங்கம்பாக்கத்தில் உள்ள ஹாடோஸ் க்ளப்பை விலைக்கு வாங்க வளர்மதி தீவிர முயற்சியில் ஈடுபட்டுள்ளதாகத் தகவல்கள் தெரிவிக்கின்றன. ஏற்கனவே இந்தக் கிளப்பை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?   ஏன் மறுத்தார் கண்ணப்பன் ?'),
            thumbnail:'/images/3740/kannppan-comishnar-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/25/post3740.html",
            publishDate:"Sep 25, 2012",
            summary:$sce.trustAsHtml("சென்னை மாநகர காவல் ஆணையாளர் திரிபாதி மாற்றப்பட்டு, ஜார்ஜ் பதவியேற்றதும், மேலும் அதிரடி மாற்றங்களைச் செய்து அருள்மிகு அம்மாவிடம் நல்ல பெயர் வாங்க வேண்டும் என்று முடிவெடுத்திருக்கிறாராம்.&nbsp;&nbsp; அதற்காக, உள்துறைச் செயலாளருக்கு அனுப்பியுள்ள கடிதத்தில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சதி வலை.. … …'),
            thumbnail:'/images/3738/00-title-card-13-09-12-innocence-of-muslims-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/24/post3738.html",
            publishDate:"Sep 24, 2012",
            summary:$sce.trustAsHtml("It is best to be both feared and loved, however, if one cannot be both it is better to be feared than loved.”By suggesting this,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  ஜப்பான் சென்ற சேஷசாயி..'),
            thumbnail:'/images/3729/LSnewN_0080-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/20/post3729.html",
            publishDate:"Sep 20, 2012",
            summary:$sce.trustAsHtml("சமீபத்தில், அமெரிக்கத் தூதரகம் முன்பாக முஸ்லீம் அமைப்பு ஒன்று ஆர்ப்பாட்டம் நடத்தியபோது, தூதரகத்தின் மீது கடும் தாக்குதல் நடைபெற்றது.&nbsp;&nbsp; அந்த முஸ்லீம் அமைப்புக்கு நல்ல செல்வாக்கு உண்டு என்பதாலும், ஆர்ப்பாட்டம் நடத்திய விவகாரம் உணர்ச்சிபூர்வமான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளம் அணு உலைக்கெதிராக புலம் பெயர் படைப்பாளர்கள் கூட்டறிக்கை'),
            thumbnail:'/images/3727/koodamkulam4-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/19/post3727.html",
            publishDate:"Sep 19, 2012",
            summary:$sce.trustAsHtml("அணுஉலைக்கெதிரான போராட்டம் தொடர்பான இலங்கைத்தமிழ் அரசியலாளர்கள், படைப்பாளிகள், ஊடகவியலாளர்கள், சமூக செயற்பாட்டாளர்கள், மதப்பிரதிநிதிகளின் கூட்டறிக்கைகூடங்குளம் அணுமின் நிலையத்திற்கெதிராக கடந்த பல வருடங்களாகவே எதிர்ப்புணர்வுகள் இருந்து வரும் சூழலில், அணுமின் நிலையத்தின் இறுதிக்கட்ட பணிகள் நடைபெற்றுவருவதைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மிருக விதி..'),
            thumbnail:'/images/3726/3-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/19/post3726.html",
            publishDate:"Sep 19, 2012",
            summary:$sce.trustAsHtml("எலிக்கு,&nbsp;எறும்புக்கு,பாம்பு,&nbsp;தேரைக்கு,காட்டு&nbsp;மரத்துக்கு,தேள்,&nbsp;பூரானுக்கும்.வாழ்வியல்&nbsp;தத்துவம் பற்றிவாதாடுவதற்குசட்டப்படி&nbsp;அமைப்புக்கள் உண்டு. எலி&nbsp;வளைக்குள் நீர் புகுந்துவிட்டால்,பெருச்சாளி&nbsp;புகை இடுக்கில் சிக்கிக்கொண்டால்,தவளை பாம்பை கௌவிக்கொண்டால்,அவைகளை காப்பாற்றபோர்க்கால அடிப்படையில்தெருவில்&nbsp;இறங்கி போராட்டம் நடத்தஅரச அனுசரணையுடன்அமைப்பு&nbsp;ரீதியாகமனிதனுக்கு உரிமையுண்டு! ஆனால்பாவப்பட்ட மனித குலத்துக்கு மட்டும்எதிர்மறையான புளக்கமேவாழ்வியலில் சாத்தியம்என்கிறது ஆளும் வர்க்கம். மானுடம்&nbsp;தவிர்த்தவற்றின்வாழ்வின்&nbsp;சூட்சுமத்தைஅறிந்து&nbsp;கொள்ள மட்டும்.ஐநா&nbsp;வும் அதிகார வர்க்கங்களும்அனுதினமும்பலகோடி&nbsp;பணம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளம் போராட்டத்தின் பின்னணியில் பாகிஸ்தான் ?.'),
            thumbnail:'/images/3724/IMG_5220_Custom-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/18/post3724.html",
            publishDate:"Sep 18, 2012",
            summary:$sce.trustAsHtml("அதிர்ச்சியாக இருக்கிறதா… இப்படி ஒரு செய்தியை ஊடகங்களில் விரைவில் பார்த்தால் அதிர்ச்சியடையாதீர்கள். அதற்கான வேலையை உளவு நிறுவனங்கள் செய்து கொண்டிருப்பதாகத் தகவல்கள் வருகின்றன.இன்றைய செய்தித்தாள்களில் பெரிய அளவில் வந்திருக்கக் கூடிய ஒரு செய்தி பாகிஸ்தானுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துணிச்சல் இருந்தால் இதை நிறுத்துங்கள் ஜெயலலிதா&#8230;!!!'),
            thumbnail:'/images/3723/3335459439_154e7e47cb_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/18/post3723.html",
            publishDate:"Sep 18, 2012",
            summary:$sce.trustAsHtml("சமீபத்தில், நேரு விளையாட்டரங்கில், கால்பந்து &nbsp;விளையாட வந்த இலங்கையைச் சேர்ந்த விளையாட்டு வீரர்களை திருப்பி அனுப்பினார் ஜெயலலிதா. &nbsp;அது தமிழக மக்களின் உணர்வுகளுக்காக என்று விளக்கம் வேறு கூறினார். &nbsp;http://www.colombopage.com/archive_12A/Sep17_1347906329CH.phpSept 17, Colombo: A..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேடி சரித்திரம்.'),
            thumbnail:'/images/3722/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_03-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/17/post3722.html",
            publishDate:"Sep 17, 2012",
            summary:$sce.trustAsHtml("கேடி சகோதரர்கள் கேடி சகோதரர்கள் என்று தமிழகத்தின் முக்கியமான பெரும்புள்ளிகளைப் பற்றி சவுக்கு வாசர்கள் நன்கு அறிவீர்கள்.&nbsp; அவர்கள் யார், அவர்களால் தமிழகத்துக்கு விளையும் ஆபத்து என்ன என்பது குறித்து, சவுக்கில் கருணாநிதியை விட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளம் அணு உலையை எதிர்த்து உச்சநீதிமன்றத்தில் மேலும் ஒரு பொதுநல வழக்கு'),
            thumbnail:'/images/3719/koodamkulam4-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/17/post3719.html",
            publishDate:"Sep 17, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணு உலை தொடர்பாக உச்ச நீதிமன்றத்தில் புதிய வழக்கு.&nbsp; மத்திய அரசின் முன்னாள் செயலரான ஈ.ஏ.சர்மா, பொதுநல வழக்குகளுக்கான மையம் மற்றும் சுந்தரராஜன் ஆகியோர் இந்த வழக்கினை தொடர்ந்திருக்கிறார்கள்.அந்த மனுவில், கூடங்குளம் அணு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அப்துல் கலாம் ஒரு ஹிட்லர்'),
            thumbnail:'/images/3718/DSC_0850-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/17/post3718.html",
            publishDate:"Sep 17, 2012",
            summary:$sce.trustAsHtml("இன்று (17.09.2012) சென்னை பத்திரிக்கையாளர் மன்றத்தில், எழுத்தாளர்கள், கலைஞர்கள், பத்திரிக்கையாளர்கள் உள்ளிட்டோர் பங்கேற்ற பத்திரிக்கையாளர் சந்திப்பு நடைபெற்றது.&nbsp; இப்பத்திரிக்கையாளர் சந்திப்பின் போது பேசிய கற்றது தமிழ் படத்தின் இயக்குநர் ராம், முன்னாள் குடியரசுத் தலைவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா…. ?  திரிபாதிக்கு தெரியுமா ?'),
            thumbnail:'/images/3708/Tripathy_JK1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/16/post3708.html",
            publishDate:"Sep 16, 2012",
            summary:$sce.trustAsHtml("சல்யூட்டெல்லாம் நல்லாத்தான் அடிக்கறாரு. துக்கையாண்டி குடும்பம் மேல போட்ட எப்ஐஆர்லதான் நடவடிக்கை எடுக்க மாட்றாரு.நில அபகரிப்புப் பிரிவு என ஒரு பிரிவை உருவாக்கினாலும் உருவாக்கினார்கள்..&nbsp; வசூல் வேட்டை கொடிகட்டிப் பறக்கிறது. குறிப்பாக சென்னை மாநகரக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு கைக்கூலியின் கதை..'),
            thumbnail:'/images/3706/asdf-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/16/post3706.html",
            publishDate:"Sep 16, 2012",
            summary:$sce.trustAsHtml("அவன் ஒரு கைக்கூலி.&nbsp; வெளிநாட்டிலிருந்து பணம் வாங்கியவன்.&nbsp; ஒரு ட்ரஸ்ட் அமைத்து வெளிநாட்டுப் பணத்தை அபகரித்தவன்.&nbsp; மக்களை மிரட்டுபவன்.&nbsp;&nbsp; பல கோடி ரூபாய் சொத்துக்களை வைத்துள்ளவன்.&nbsp; அயோக்கியன்.&nbsp;&nbsp; அமெரிக்க கைக்கூலி.&nbsp;&nbsp; இவ்வாறெல்லாம் மத்திய அரசு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தண்ணீரில் மிதக்கும் மக்கள்&#8230; தவிக்க விட்ட ஜெயலலிதா &#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/15/post3696.html",
            publishDate:"Sep 15, 2012",
            summary:$sce.trustAsHtml("தண்ணீரில் மிதக்கும் மக்கள். தவிக்க விட்ட ஜெ.கூடங்குளத்தில் அச்ச அலை!கூடங்குளத்தின் கடல் ஓரத்தில் நடந்துவந்த போராட்டத்தை, நாடு முழுவதும் பரவ வைத்தது மட்டும்தான் தமிழ்நாடு அரசாங்கத்தின் ஒரே சாதனை. &#8216;ஈரைப் பேன் ஆக்கி பேனைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  வசூல் ராஜாவான வண்டு முருகன்.'),
            thumbnail:'/images/3695/DSC00034-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/14/post3695.html",
            publishDate:"Sep 14, 2012",
            summary:$sce.trustAsHtml("சென்னை புழல் சிறையின் கண்காணிப்பாளராக இருப்பவர் கருப்பண்ணன். &nbsp;04.04.2004 அன்று சென்னை மத்திய சிறையில் சுப்ரமணியம் கைதி மர்மமான முறையில் இறந்து போகிறார்.&nbsp;&nbsp; அவர் இறந்த போது கருப்பண்ணன் ஜெயிலராக இருந்தார். மாவட்ட ஆட்சித்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போலி சுதந்திரம்…'),
            thumbnail:'/images/3694/DSC_6669-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/13/post3694.html",
            publishDate:"Sep 13, 2012",
            summary:$sce.trustAsHtml(" கூடங்குளம் அணு உலைக்கு எதிராக தொடர்ந்து குரல் கொடுத்து வரும் தோழர் சதீஷ் தற்போது காவல்துறையால் கைது செய்யப்பட்டு புழல் சிறையில் அடைக்கப்பட்டுள்ளார்.&nbsp; ஒரு சில மாதங்களுக்கு முன், தோழர் முகிலன், தோழர் சதீஷ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா… ?  வெக்கங்கெட்ட நக்கீரன்…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/13/post3693.html",
            publishDate:"Sep 13, 2012",
            summary:$sce.trustAsHtml("நக்கீரனைப் பற்றிக் கேவலமாக பல முறை கழுவி ஊற்றியாகி விட்டது.&nbsp; ஆனாலும், மரம் ஓய்வை விரும்பினாலும் காற்று விடமாட்டேன்கிறதே…கடந்த வாரம் கூடங்குளத்தில் நேர்ந்த கலவரங்களை தினகரன் நாளேட்டின் புகைப்பட நிபுணர் பரமக்குமார் என்பவர் உயிரைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('&#8220;சசிகலாவின் வேதனையை ஜெயலலிதா உணர்வாரா?&#8221;  &#8211; நடராஜன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/13/post3692.html",
            publishDate:"Sep 13, 2012",
            summary:$sce.trustAsHtml("எப்போது பேட்டி கேட்டாலும் உடனே தடதடக்கும் ம.நடராசன், சிறை சென்று மீண்ட பிறகு &#8216;நோ. நோ’ என்று சொல்ல ஆரம்பித்தார். திடீரென்று &#8216;நானோ’ டெக்னாலஜிபற்றி லண்டனில் பேசிவிட்டுத் திரும்பியவரைச் சமீபத்தில் சந்தித்ததில் இருந்து. &#8221;அ.தி.மு.க-வில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? எங்கே அடிபட்டது வரதராஜுவுக்கு ?'),
            thumbnail:'/images/3691/Varadha_Raj._13-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/12/post3691.html",
            publishDate:"Sep 12, 2012",
            summary:$sce.trustAsHtml("திருநெல்வேலி சரக டிஐஜியாக இருப்பவர் வரதராஜு.. &nbsp;இவர் ஒரு &#8220;நேர்மையான&#8221; அதிகாரி. விபரங்களுக்கு &nbsp;இந்தக் கட்டுரையை&nbsp;&nbsp;படியுங்கள். &nbsp; நேற்று கூடங்குளத்தில் நடந்த மோதலின்போது, வரதராஜுவுக்கு காயம் ஏற்பட்டதாக &nbsp;ஊடகங்களில் செய்தி வெளியாகியுள்ளது. &nbsp;நேற்றைய இந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீ பரவட்டும்&#8230;'),
            thumbnail:'/images/3688/DSC_0614-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/11/post3688.html",
            publishDate:"Sep 11, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணு உலை தொடர்பாக, மக்கள் குண்டடிபட்டும், தடியடி பட்டும் காவல்துறையின் கொடுமைக்கு ஆளாகிக் கொண்டிருக்கும் இந்த வேளையில், இந்த துன்பத்திலும் ஒரு நன்மை நடந்திருக்கிறது.அது மக்களுக்கான கட்சிகள் எவை, மக்கள் விரோதக் கட்சிகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எம்மிடம் இழப்பதற்கு எதுவுமில்லை.'),
            thumbnail:'/images/3656/_MG_9488-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/11/post3656.html",
            publishDate:"Sep 11, 2012",
            summary:$sce.trustAsHtml("வினவு தோழர்கள் ஜெயலலிதாவை எப்போதுமே பாசிச ஜெயா என்றே அழைப்பார்கள். பாசிசம் என்றால் என்ன ?&nbsp; முதலாம் உலகப்போரின் போது இத்தாலி நாட்டில் தோன்றியதுதான் பாசிசம். உலகெங்கும் உள்ள அறிஞர்களால், வலதுசாரி தீவிரவாதம் பாசிசம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழத்தாய்..'),
            thumbnail:'/images/3639/cop1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/10/post3639.html",
            publishDate:"Sep 10, 2012",
            summary:$sce.trustAsHtml("  சென்னையில் உள்ள நேரு ஸ்டேடியத்தில் சிங்கள அணியோடு கால்பந்து விளையாட அனுமதித்தற்காக ஸ்டேடிய அதிகாரியை பணி இடை நீக்கம் செய்ததையொட்டியும், சிங்கள கால்பந்து அணி வீரர்கள் திருப்பி அனுப்பப்பட்டதையொட்டியும், போயஸ் தோட்டத்தில் ஆலோசனை கூட்டம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  தப்பிய ரெட்டி..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/05/post3637.html",
            publishDate:"Sep 5, 2012",
            summary:$sce.trustAsHtml("ஸ்பெக்ட்ரம் வழக்கில் மாறன் சகோதரர்களுக்கு எதிராக சிபிஐ பதிவு செய்துள்ள வழக்கில் எவ்வித முன்னேற்றமும் இல்லாமல் தொய்வடைந்த நிலையில் உள்ளது.&nbsp; இவ்வழக்கில் மாறன் சகோதரர்களுக்கு பெரிய அளவில் உதவி செய்துள்ளதாக குற்றம் சாட்டப்பட்டுள்ள அப்போல்லோ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ? விடுபட்ட சிவி.சண்முகம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/05/post3636.html",
            publishDate:"Sep 5, 2012",
            summary:$sce.trustAsHtml("சென்னை உயர்நீதிமன்றத்தின் 150 வது ஆண்டு விழாவுக்காக சிறப்பான அழைப்பிதழ் அச்சடிக்கப்பட்டுள்ளது. &nbsp;இந்த அழைப்பிதழில் நீதிபதிகள், முதலமைச்சர் ஜெயலலிதா, உள்ளிட்டோரின் பெயர்கள் அச்சிடப்பட்டுள்ளன. &nbsp;அனைவர் பெயரும் அச்சிடப்பட்டாலும், தமிழக சட்டத்துறை அமைச்சர் சி.வி.சண்முகத்தின் பெயர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?  சாதுர்யமான ஜார்ஜ் மன்னர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/05/post3635.html",
            publishDate:"Sep 5, 2012",
            summary:$sce.trustAsHtml("சட்டம் ஒழுங்கு கூடுதல் டிஜிபி ஜார்ஜ், சமீபத்தில் ராமநாதபுரம் சென்று, செப்டம்பர் மாதம் பரமக்குடியில் நடைபெற இருக்கும் இமானுவேல் சேகரனின் நினைவு நாளுக்கான பாதுகாப்பு ஏற்பாடுகள் குறித்து ஆய்வுக் கூட்டம் நடத்தியிருக்கிறார். மதுரையைத் தாண்டி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட அப்படியா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/05/post3634.html",
            publishDate:"Sep 5, 2012",
            summary:$sce.trustAsHtml("சென்னை உயர்நீதிமன்றத்தின் 150வது ஆண்டு விழா வரும் எட்டாம் தேதி நடைபெற உள்ளது. &nbsp; இந்த விழாவில் கலந்து கொள்ளுமாறு, மாநில முதல்வர் செல்வி ஜெயலலிதாவுக்கு தலைமை நீதிபதியால் நேரில் அழைப்பு விடுக்கப்பட்டது. &nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சகோதரச் சண்டையை தொடங்கி வைத்தவரே கருணாநிதிதான்! &#8211; பழ.நெடுமாறன்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/09/03/post3632.html",
            publishDate:"Sep 3, 2012",
            summary:$sce.trustAsHtml("ஒரே பொய்யைத் திரும்பத் திரும்பச் சொல்வதன் மூலமாக அதை உண்மையாக்கிவிட முடியும் என்று நினைப்பவர்களில் கருணாநிதி முதன்மை​யானவர். ஈழத்தில் இனஅழிவுப் போர் நடந்த காலத்தில் தமிழ்நாட்டின் முதலமைச்சராக இருந்த கருணாநிதி, மத்தியில் தனக்கு இருந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அஹிம்சையின் மரணம்.'),
            thumbnail:'/images/3631/283617_128153527329238_1419357596_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/09/02/post3631.html",
            publishDate:"Sep 2, 2012",
            summary:$sce.trustAsHtml("நீதி கேட்டு உண்ணாவிரதம் இருந்ததால், ஈழ அகதியான &#8220;செந்தூரன்&#8221;&nbsp; குற்றவாளி என்கிறது தமிழக அரசு!. உண்ணாவிரதம்&nbsp; தற்கொலைக்குற்றம் என்கிறது தமிழக பொலிஸ்!!?.&nbsp;&nbsp; மகாத்மா காந்தி&#8217;யும் தன்னை வருத்தி உண்ணாவிரதம் இருந்தார். உள்ளடக்கம் இல்லாமல்,&nbsp; உரிமைக்காக&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கட்ட துறை..'),
            thumbnail:'/images/3629/DSCN0676-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/26/post3629.html",
            publishDate:"Aug 26, 2012",
            summary:$sce.trustAsHtml("ஜாக்சன் துரை, அண்ணா துரை அல்ல.&nbsp; துறை.&nbsp; கட்டத் துறை.&nbsp; ஊரக வளர்ச்சியை கவனிக்கும் துறை என்றால் ஊரக வளர்ச்சித்துறை.&nbsp;&nbsp;&nbsp; வணிக வரிகளை வசூலிக்கும் துறை வணிகவரித்துறை.&nbsp; போக்குவரத்தைப் பார்க்கும் துறை போக்குவரத்துத் துறை.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('What  is happening to Jayalalitha?'),
            thumbnail:'/images/3616/IN21_JAYA_1296f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/25/post3616.html",
            publishDate:"Aug 25, 2012",
            summary:$sce.trustAsHtml("To be honest, it is not clear at all. She is certainly not running amok despite those defamation cases. Some silly, mean harassment, yes, but..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாறிய ஆட்சிகள்&#8230;மாறாத காடசிகள்.'),
            thumbnail:'/images/3615/karun_jaya_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/24/post3615.html",
            publishDate:"Aug 24, 2012",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறப்பு முகாம்களை இழுத்து மூடிடக் கோரி 26ஆம் தேதி மறியல் போராட்டம்: நாம் தமிழர் கட்சி'),
            thumbnail:'/images/3613/seeman_copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/22/post3613.html",
            publishDate:"Aug 22, 2012",
            summary:$sce.trustAsHtml(" சிங்கள பெளத்த இனவாத அரசின் திட்டமிட்ட இனப் படுகொலையில் இருந்து உயிர் தப்பி தமிழகத்தில் ஏதிலிகளாக அடைக்கலம் புகுந்த நம் ஈழத் தமிழ் சொந்தங்களை சிறப்பு முகாம்களில் அடைத்து வதைத்து வரும் கொடுமைக்கு முடிவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாடகம் முடிந்தது ; வேடம் கலைந்தது &#8211; பழ.நெடுமாறன்'),
            thumbnail:'/images/3611/nedu1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/22/post3611.html",
            publishDate:"Aug 22, 2012",
            summary:$sce.trustAsHtml("ஈழத் தமிழர்களுக்குள்ள உரிமைகளையெல்லாம், &#8220;கிடையாது&#8217; என்று சொல்லிய எதேச்சதிகாரத்தை வீழ்த்திட இலங்கைத் தமிழர்களின் மீட்சிக்காகத் தனித்தமிழ் ஈழம் உருவாக விரைவில் விழுப்புரத்தில் &#8220;டெசோ&#8217; மாநாடு நடைபெறும்&#8221; என தி.மு.க. தலைவர் கருணாநிதி தனது 89-வது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயிர்ப்பேதம்.'),
            thumbnail:'/images/3609/DSC_0255-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/21/post3609.html",
            publishDate:"Aug 21, 2012",
            summary:$sce.trustAsHtml("“அம்மா… இன்னைக்கு என்னை மிஸ் வெரி குட்னு சொன்னாங்கம்மா” என்று பள்ளியிலிருந்து துள்ளிக்கொண்டு வரும் குழந்தையை தாயோ தந்தையோ வாடி செல்லம் என்று அள்ளிக் கொஞ்சுவது பல வீடுகளில் நாம் பார்க்கும் ஒரு இயல்பான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் தோழர் வைகோ&#8230;'),
            thumbnail:'/images/3589/2803009690_bd0b5d68df_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/21/post3589.html",
            publishDate:"Aug 21, 2012",
            summary:$sce.trustAsHtml("வெகு தூரத்தில் இருக்கும் ஈழ மக்களுக்காக மாநாடு நடத்தவார்கள், கொடி பிடிப்பார்கள், கோஷம் போடுவார்கள். ஆனால், தப்படி தூரத்தில் பல ஆண்டுகளாக முகாம் என்ற பெயரில், கொடுஞ்சிறைக்குள் அடைக்கப்பட்டிருக்கும் ஈழத்தமிழர்களுக்காக துரும்பைக் கூட எடுத்துப்போட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆணவ மணி..'),
            thumbnail:'/images/3587/987987-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/20/post3587.html",
            publishDate:"Aug 20, 2012",
            summary:$sce.trustAsHtml("இந்தக் கட்டுரையை எழுதுவதற்கே வேதனையாக இருக்கிறது.&nbsp; சவுக்கின் கட்டுரைகளில் ஒரு லட்சத்திற்கும் அதிகமான வாசகர்களால் படிக்கப்பட்ட கட்டுரை, ஜனநாயகத்தைக் காக்க வாருங்கள் பதிவர்களே என்ற கட்டுரை. கருணாநிதி ஆட்சியில் ஊடகங்களை எப்படி முடக்கி வைத்திருக்கிறார்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருமதி பார்த்தசாரதியை கைது செய்யக் கோரி உள்துறைச் செயலருக்கு மனு'),
            thumbnail:'/images/3570/raji-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/19/post3570.html",
            publishDate:"Aug 19, 2012",
            summary:$sce.trustAsHtml("பத்மா சேஷாத்திரி பள்ளியின் கே.கே.நகர் பிரிவில், 16.08.2012 அன்று சிறுவன் ரஞ்சன் &nbsp;நீச்சல் குளத்தில் இறந்தது குறித்து, சென்னை மாநகர காவல்துறை வழக்கு பதிவு செய்து, அந்தப்பள்ளியின் நீச்சல் குளத்தை கழுவுபவர், துணை பிரி‘ன்சிபால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாம் என்ன செய்யவேண்டும்? என்ன செய்ய முடியும்?'),
            thumbnail:'/images/3568/1final_product-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/19/post3568.html",
            publishDate:"Aug 19, 2012",
            summary:$sce.trustAsHtml("டெசோவின்போது சவுக்கு வருந்தியது இலங்கைத் தமிழர் பல்லாயிரக்கணக்கில் கொன்று குவிக்கப்பட்டபோது நம்மால் ஒன்றும் செய்ய இயலவில்லையே என.முள்ளிவாய்க்காலின்போது மட்டுமல்ல குஜராத் படுகொலைகள்போதோ அல்லது விதர்பா விவசாயிகள் தற்கொலை செய்துகொண்டபோதோகூட &nbsp;மனிதநேயர்கள் அதிகம் செய்யமுடியவில்லை.கூடங்குளத்தில் மின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சட்டம் தன் கடமையைச் செய்யாது..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/08/18/post3566.html",
            publishDate:"Aug 18, 2012",
            summary:$sce.trustAsHtml(" நான் சந்தித்த சதிகள்! &#8211; ஆச்சார்யா ஸ்பெஷல் பேட்டி  ஆச்சார்யா. தமிழ்நாட்டு முதலமைச்சர் ஜெயலலிதாவுக்கு சிம்ம சொப்பனம். ஒரு வழக்கறிஞர் எப்படி தயவுதாட்சண்யம் பார்க்காமல் செயல்பட வேண்டும் என்பதன் உதாரண மனிதர்.14 ஆண்டுகளாக கோர்ட் படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவர்களை நிம்மதியாக வாழ விடுங்கள்…'),
            thumbnail:'/images/3565/m7-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/17/post3565.html",
            publishDate:"Aug 17, 2012",
            summary:$sce.trustAsHtml(" நீங்கள் ஒரு வீட்டில் குடியிருக்கிறீர்கள்.&nbsp;&nbsp; உங்களுக்கு வலதுபுறத்தில் ஒரு குடும்பம் குடியிருக்கிறது. இடதுபுறத்தில் ஒருவர் குடியிருக்கிறார்.உங்கள் வலதுபுறத்தில் இருக்கும் குடும்பத்திற்கு நீண்ட நாட்களாக ரவுடிகளிடமிருந்து ஆபத்து உண்டு. திடீரென்று ஒரு நாள் ரவுடிகள் கையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேஸ்ட் பாய்ஸ்&#8230;.'),
            thumbnail:'/images/3551/daroji-0099-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/12/post3551.html",
            publishDate:"Aug 12, 2012",
            summary:$sce.trustAsHtml(" அய்ய.. இதுக்குத்தான் டெசோ மாநாடா. சுத்த வேஸ்ட்.. இவ்ளோ கேவலமான தீர்மானத்த எங்க மிஸ் கூட போடமாட்டாங்க Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('&#8220;காலத்தின் குற்றமல்ல கருவின் குற்றம்&#8221;.'),
            thumbnail:'/images/3549/final3-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/11/post3549.html",
            publishDate:"Aug 11, 2012",
            summary:$sce.trustAsHtml("&#8220;காலத்தின் குற்றமல்ல கருவின் குற்றம்&#8221;. என் வாழ்வில் என்னை விட்டு விலகாத&nbsp; இரண்டு நினைவுகளில், இந்த வரிகளும் ஒன்று.. ஏன் எதற்கென்று ஞாபகமில்லை. ஒருபொழுது, கருணாநிதி என்ற சுயநலவாதி ஏகாந்தம் கலைத்து மனக்குரங்கு கிளர்நது ஊர்வலம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விகடனில் வந்த கனிமொழி பேட்டியில் ஒரு கேள்வி பதில்.'),
            thumbnail:'/images/3544/pix_333-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/11/post3544.html",
            publishDate:"Aug 11, 2012",
            summary:$sce.trustAsHtml("&#8221; &#8216;கட்சியில் முக்கியப் பதவியிலும் இல்லை. மத்திய அமைச்சரவையிலும் பொறுப்பு வகிக்கவில்லை. கனிமொழியை நம்பி இனி பலன் இல்லை’ என்று உங்கள் ஆதரவாளர்கள் நினைக்க ஆரம்பித்துவிட்டால் என்ன ஆகும்?&#8221;&#8221;மத்திய அமைச்சரவையில் தி.மு.க. இடம்பிடிச்சப்பவே, என்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கு விருது.'),
            thumbnail:'/images/3540/Untitled-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/10/post3540.html",
            publishDate:"Aug 10, 2012",
            summary:$sce.trustAsHtml(" சவுக்கில் யாருக்கும் விருது கொடுக்கும் வழக்கம் இருந்தது இல்லை.&nbsp;&nbsp; திடீரென்று விருது வழங்க வேண்டும் என்று முடிவெடுத்ததற்கு வலுவான காரணம் உண்டு.&nbsp; ஒரு இனத்தின் மேன்மையை உயர்த்துகிறார் ஒருவர்.&nbsp; ஒரு இனத்துக்காக வாழ்வையே அர்ப்பணிக்கிறார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எட்டப்பர் வாழ்வுரிமை பாதுகாப்பு மாநாடு'),
            thumbnail:'/images/3533/afsd00-Tamil-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/06/post3533.html",
            publishDate:"Aug 6, 2012",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கொள்ளையோ கொள்ளை.. .. ..'),
            thumbnail:'/images/3531/TNPSC-Images-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/08/06/post3531.html",
            publishDate:"Aug 6, 2012",
            summary:$sce.trustAsHtml("பிள்ளையோ பிள்ளை கலைஞர் மு.கருணாநிதி அவர்களின் கதை வசனத்தில் அவர் பெற்ற பிள்ளை மு.க.முத்துவை வைத்து எடுத்த திரைப்படம்.&nbsp;&nbsp; புலியைப் பார்த்து பூனை சூடு போட்டுக் கொண்ட கதையாக, மு.க.முத்துவை எம்.ஜி.ஆருக்கு போட்டியாக களமிறக்கிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு கொலையும், ஓராயிரம் பொய்களும்.. … .'),
            thumbnail:'/images/3515/sIMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/26/post3515.html",
            publishDate:"Jul 26, 2012",
            summary:$sce.trustAsHtml("நெல்லை மாவட்டம் நாங்குநேரி தாலுகா, மருக்கால்குறிச்சி கிராமத்தைச் சேர்ந்த வானுமாமலை என்ற இளைஞர் காவல்துறையினரால் கொல்லப்பட்டது குறித்து படித்திருப்பீர்கள்.&nbsp; சவுக்கிலும் இது குறித்து கட்டுரை வெளியிடப்பட்டுள்ளது.&nbsp;&nbsp;&nbsp; இந்தப் படுகொலை குறித்து, ஊடகங்கள் நேற்று வெளியிட்டுள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு கொலையும், ஓராயிரம் பொய்களும்.. … .'),
            thumbnail:'/images/3513/sIMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/26/post3513.html",
            publishDate:"Jul 26, 2012",
            summary:$sce.trustAsHtml("நெல்லை மாவட்டம் நாங்குநேரி தாலுகா, மருக்கால்குறிச்சி கிராமத்தைச் சேர்ந்த வானுமாமலை என்ற இளைஞர் காவல்துறையினரால் கொல்லப்பட்டது குறித்து படித்திருப்பீர்கள்.  சவுக்கிலும் இது குறித்து கட்டுரை வெளியிடப்பட்டுள்ளது.    இந்தப் படுகொலை குறித்து, ஊடகங்கள் நேற்று வெளியிட்டுள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பட்டப்பகலில் ஒரு படுகொலை.. …'),
            thumbnail:'/images/3500/_MG_3523-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/25/post3500.html",
            publishDate:"Jul 25, 2012",
            summary:$sce.trustAsHtml("திருநெல்வேலி மாவட்டம், நாங்குநேரி தாலுகாவில் உள்ள மருக்கால்குறிச்சி என்ற கிராமத்தில் ஒரு படுகொலையை அரங்கேற்றியுள்ளது காவல்துறை. படுகொலையைச் செய்த காவல் ஆய்வாளரைக் காப்பபாற்ற ஒட்டுமொத்த காவல்துறையும் பகீரத முயற்சி எடுத்து வருகிறது.மருக்கால்குறிச்சி கிராமத்தில் உள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஓபனிங் நல்லாத்தான் இருக்கு… ஆனா ஃபினிஷங் ?'),
            thumbnail:'/images/3495/03112011010-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/24/post3495.html",
            publishDate:"Jul 24, 2012",
            summary:$sce.trustAsHtml("சவுக்கு வாசர்கள் நீதிபதி கர்ணன் குறித்த முந்தைய கட்டுரையில், அந்த நீதிமன்ற ஊழியரை ஒரு வழக்கை ஏன் அன்று விசாரணைக்கு கொண்டு வரவில்லை என்று திறந்த நீதிமன்றத்தில், அனைவரின் முன்னிலையில் திட்டியதையும், நீதிக்கே அவமானம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போபால் 6 : அமெரிக்க யூனியன் கார்பைடு.'),
            thumbnail:'/images/3493/dscf4504-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/22/post3493.html",
            publishDate:"Jul 22, 2012",
            summary:$sce.trustAsHtml("கனவாகா நதியின் கரையில், மேற்கு விர்ஜீனியாவில் ஆண்டுக்கு 30 ஆயிரம் டன்கள் ஐசோ மீத்தைல் சயனைடை உற்பத்தி செய்யும் தொழிற்சாலையை நிறுவ முடிவு செய்தது யூனியன் கார்பைடு.ஐந்தடுக்கு தொழிற்சாலை கட்டப்பட்டது.&nbsp;&nbsp; ஒவ்வொரு தளத்திலும் ஐசோ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிக்கே அவமானம்.'),
            thumbnail:'/images/3490/IMG_2197-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/19/post3490.html",
            publishDate:"Jul 19, 2012",
            summary:$sce.trustAsHtml("இப்படி நீதிக்கே அவமானத்தை ஏற்படுத்தியது யார் என்று யோசிக்கிறீர்களா ? சவுக்கு வாசகர்களுக்கு நன்கு அறிமுகமான நிதியரசர் &nbsp;கர்ணன்தான் அது. &nbsp;புதிதாக வந்துள்ள சவுக்கு வாசகர்கள் சவுக்கின் உள்ளத்தில் நள்ள உள்ளம் என்ற கட்டுரையை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெகதரட்சகனின் இரட்டைக் குழல் துப்பாக்கி.. … …'),
            thumbnail:'/images/3489/l2012021139209-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/18/post3489.html",
            publishDate:"Jul 18, 2012",
            summary:$sce.trustAsHtml("அரசியல்வாதிகளில் இரட்டைக் குழல் துப்பாக்கி வைத்திருப்பது சகஜமே..&nbsp;&nbsp; அதிலும் கலைஞர் கருணாநிதி பல ஆண்டு காலமாகவே இரட்டைக் குழல் துப்பாக்கி வைத்திருப்பவர்.&nbsp; அதில் ஒரு குழலை மனைவி என்றும், மற்றொரு குழலை துணைவி என்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திரும்பிப் பார்க்கிறேன்…'),
            thumbnail:'/images/3463/1IMG_0007-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/17/post3463.html",
            publishDate:"Jul 17, 2012",
            summary:$sce.trustAsHtml("17 ஜுலை 2008 அது அவன் வாழ்வில் திருப்புமுறை ஏற்படுத்திய நாள்.    இனி சரிசெய்ய முடியாதபடி அவன் வாழ்வை புரட்டிப் போட்ட நாள்.   அன்றுதான் அவன் தொலைபேசி ஒட்டுக் கேட்பு வழக்கில் சிபி.சிஐடி போலீசாரால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எங்கே அரசு… … ?'),
            thumbnail:'/images/3456/2_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/16/post3456.html",
            publishDate:"Jul 16, 2012",
            summary:$sce.trustAsHtml("அதிமுக ஆட்சி வந்தால் சட்டம் ஒழுங்கு சிறப்பாக இருக்கும் என்ற கூற்று, ஜெயலலிதாவின் தீவிர ஆதரவாளர்களால் சொல்லப்படுவது.&nbsp; ஜெயலலிதா என்ன செய்தாலும் ஜெயலலிதாவை தூக்கிப் பிடிக்கும் சோ போன்றவர்கள் எப்போதும் சொல்லும் விஷயம் இது.&nbsp;&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலை வளர்க்கும் அரசுகள்..'),
            thumbnail:'/images/3453/14-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/14/post3453.html",
            publishDate:"Jul 14, 2012",
            summary:$sce.trustAsHtml("அரசு அதிகாரிகளுக்கும் அரசியல்வாதிகளுக்கும் உள்ள வேறுபாடுகள், கடந்த பத்தாண்டுகளாகவே மங்கி வருகின்றன.&nbsp;&nbsp;&nbsp; தமிழகத்தைப் பொறுத்தவரை, அதிகாரிகள் அரசியல்வாதிகளாகவே மாறிப்போனது தொடங்கியது 1991 ஜெயலலிதா ஆட்சிக் காலத்தில்தான்.&nbsp;&nbsp; அதற்கு முன்பு, கருணாநிதி ஆட்சிக் காலத்திலும், சர்க்காரியா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தென்னையப் பெத்தா இளநீரு… பிள்ளையப் பெத்தா கண்ணீரு…'),
            thumbnail:'/images/3448/real-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/09/post3448.html",
            publishDate:"Jul 9, 2012",
            summary:$sce.trustAsHtml("இந்தப் பாடலை யார் பாடுகிறார்கள் என்று பார்க்கிறீர்களா.. பெரும்பாலான தந்தையர் இந்தப் பாடலைப் பாடாமல் இருக்க மாட்டார்கள். சவுக்கின் தந்தை இருந்திருந்தால், இந்நேரம் “எனக்குன்னு வந்து பொறந்துருக்கு பாரு தறுதல, தறுதல.&nbsp; வேலையப் பார்றான்னா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கோமாளிகளின் கூத்து.. … …'),
            thumbnail:'/images/3437/Mayawati-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/07/post3437.html",
            publishDate:"Jul 7, 2012",
            summary:$sce.trustAsHtml("பல கோமாளிகள் சேர்ந்து கூத்து நடத்துவதைப்&nbsp; பார்த்திருக்கிறீர்களா ?&nbsp; அது நமது நாட்டில்தான் நடந்து வருகிறது.&nbsp;&nbsp; இந்தக் கூத்தில் பங்கேற்பவர்கள், சிபிஐ அதிகாரிகள், அரசியல்வாதிகள், மாநில ஆளுனர், உச்சநீதிமன்ற நீதிபதிகள் ஆகியோர். அரசியல்வாதிகளில் பிஜேபி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடுதலையை நோக்கி&#8230; &#8230; &#8230; கருத்தரங்கம்'),
            thumbnail:'/images/3428/LegalNotice-Front3-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/05/post3428.html",
            publishDate:"Jul 5, 2012",
            summary:$sce.trustAsHtml("  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அந்த நபரா காரணம் ?'),
            thumbnail:'/images/3425/IMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/05/post3425.html",
            publishDate:"Jul 5, 2012",
            summary:$sce.trustAsHtml("இன்று வெளிவந்த நக்கீரன் இதழில் கூடுதல் டிஜிபி துக்கையாண்டி பணி இடைநீக்கம் செய்யப்பட்டது குறித்து ஒரு கட்டுரை வந்துள்ளது. அந்தக் கட்டுரையை பார்ப்போம். ‘இவருக்கே இந்த நிலைமைன்னா, நம்முடைய நிலைமையும் எப்படி வேணும்னாலும் ஆகலாம். இதுக்கா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வழக்கு எண் 164/2006'),
            thumbnail:'/images/3421/4786949304_52d41b3c5e_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/07/03/post3421.html",
            publishDate:"Jul 3, 2012",
            summary:$sce.trustAsHtml("பாலாஜி சக்திவேலின் வழக்கு எண் 18/9 எப்படி பல்வேறு திருப்பங்களோடு அமைந்ததோ, அதைவிட அதிகமான திடுக்கிடும் திருப்பங்கள் நிறைந்த ஒரு வழக்குதான் 164/2006.2006 சட்டமன்றத் தேர்தல்களையொட்டி, தேர்தல் பிரச்சாரம் உச்சக்கட்டத்தில் இருந்த வேளையில் நடந்ததுதான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நியாயமான கேள்விகளே… !!! ஆனால்… … …'),
            thumbnail:'/images/3418/DSC_3837_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/27/post3418.html",
            publishDate:"Jun 27, 2012",
            summary:$sce.trustAsHtml("திமுக திட்டமிட்டுள்ள சிறை நிரப்பும் போராட்டத்துக்காக உடன்பிறப்புக்களை தயார் செய்யும் விதமாக, கருணாநிதி நேற்று ஒரு அறிக்கை வெளியிட்டள்ளார். அந்த அறிக்கையில்,“கடந்த ஓராண்டு காலத்தில் அ.தி.மு.க. ஆட்சியினர் நடத்தி வருகின்ற அராஜகங்கள் எத்தனை? கழகத்தினர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாமும் வன்முறையாளர்களே.. …'),
            thumbnail:'/images/3416/facebook1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/24/post3416.html",
            publishDate:"Jun 24, 2012",
            summary:$sce.trustAsHtml("&nbsp;திமுகவினர் மீது தொடரும் வழக்குகளைக் கண்டித்து சமீபத்தில் முகநூலில் சவுக்கு ஒரு கருத்து வெளியிட்டிருந்தது. அந்தக் கருத்து.. …“மின் கட்டணமும், பேருந்துக் கட்டணமும், பால் விலையும் உயர்ந்தபோது மறியல் செய்து சிறை நிரப்பாத திமுக,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சரிபாதி பெற்றாரா திரிபாதி ?'),
            thumbnail:'/images/3411/Tripathy_7-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/22/post3411.html",
            publishDate:"Jun 22, 2012",
            summary:$sce.trustAsHtml("இந்தத் திரிபாதி வேறு யாருமல்ல… …. சென்னை மாநகர ஆணையாளர் ஜலதகுமார் திரிபாதிதான்.&nbsp; யாரிடம் சரிபாதி பெற்றார் என்றால், இந்த மாதம் ஓய்வு பெற இருக்கும் முன்னாள் லஞ்ச ஒழிப்புத் துறை இயக்குநரும் கூடுதல் டிஜிபியுமான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு முகாம் அகதிகளை காக்க ஆர்ப்பாட்டம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/06/21/post3394.html",
            publishDate:"Jun 21, 2012",
            summary:$sce.trustAsHtml(" செங்கல்பட்டு &#8211; ஜூன் 22:&nbsp;சிறப்பு முகாமில் அவதிப்படும்அகதிகளைக் காக்க ஆர்ப்பாட்டம்! புகழேந்தி தங்கராஜ்அலைபேசி: 98419 06290 அன்பு நண்பர்கள் அனைவருக்கும் வணக்கம். செங்கல்பட்டு சிறப்பு முகாமில் அடைத்து வைக்கப்பட்டுள்ள ஈழத் தமிழ்ச் சொந்தங்களைத் திறந்தவெளி முகாமுக்கு மாற்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது அரசின் வேலையா ?'),
            thumbnail:'/images/3393/1818-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/21/post3393.html",
            publishDate:"Jun 21, 2012",
            summary:$sce.trustAsHtml("எது அரசின் வேலையா ?&nbsp;&nbsp; திருமணம் நடத்தி வைப்பது அரசின் வேலையா ? அரசு என்றால் என்ன என்று வள்ளுவர் விளக்குகிறார்.வன்கண் குடிகாத்தல் கற்றறிதல் ஆள்வினையோடுஐந்துடன் மாண்டது அமைச்சு.அமைச்சரவை என்பது, துணிவுடன் செயல்படுதல், குடிகளைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு முகாமில் உள் ஈழ ஏதிலிகளைக் காப்போம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/06/18/post3371.html",
            publishDate:"Jun 18, 2012",
            summary:$sce.trustAsHtml("புகழேந்தி தங்கராஜ்திரைப்பட இயக்குநர்அலைபேசி: 9841906290 அன்புடையீர், வணக்கம். செங்கல்பட்டு சிறப்பு முகாமில் நீண்ட நெடுங்காலமாக அடைத்து வைக்கப்பட்டுள்ள ஈழத் தமிழ்ச் சொந்தங்களின் அவலநிலையை நீங்கள் அறிவீர்கள். தங்களை விடுவிக்கக்கோரி, சென்ற மாதம் அவர்கள் மேற்கொண்ட அறவழி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் தோழர்களே… !!!'),
            thumbnail:'/images/3370/324343-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/17/post3370.html",
            publishDate:"Jun 17, 2012",
            summary:$sce.trustAsHtml(" எதற்காக வாழ்த்துக்கள் ?&nbsp;&nbsp; அந்த விவகாரத்துக்குள் செல்வதற்கு முன்னால், சிரமம் பாராமல் கீழ்கண்ட இரண்டு கட்டுரைகளைப் படித்து விடுங்கள்.வல்லான் வகுத்ததே வாய்க்கால்மகிழ்ச்சி&nbsp; … மகிழ்ச்சி படித்து விட்டீர்களா .. …&nbsp; மத்திய அமைச்சர் ஜெகதரட்சகனின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கண்டிக்கப்பட வேண்டியதே…'),
            thumbnail:'/images/3366/latest-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/16/post3366.html",
            publishDate:"Jun 16, 2012",
            summary:$sce.trustAsHtml("நேற்று சென்னையில் நடந்த ஒரு நிகழ்வு, அனைத்து ஜனநாயக சக்திகளாலும்&nbsp; கண்டிக்கப்பட வேண்டிய ஒரு நிகழ்வு.&nbsp; ஜெயலலிதா அரசின் அற்பத்தனங்கள் தொடர்ந்து அரங்கேறி வருவதற்கு நேற்றைய நிகழ்வு ஒரு சிறந்த உதாரணம்.எழுத்தாளர் சின்னக்குத்தூசியின் 78வது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜாதி ராஜா.. .. ..'),
            thumbnail:'/images/3362/raja2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/15/post3362.html",
            publishDate:"Jun 15, 2012",
            summary:$sce.trustAsHtml("16 மாத சிறைவாசத்திற்குப் பிறகு ஆ.ராசாவின் வருகை படோடாபமாக, ஏகப்பட்ட தடபுடலுடன் இனிதே நடந்து முடிந்தது. ஆண்டிமுத்து ராசாவை சிலுவையில் அறையப்பட்ட தலித் போராளியாக சித்தரிக்கும் முயற்சியில் திமுக இறங்கியிருப்பதைப் பார்க்க முடிந்தது.&nbsp;&nbsp; ராசாவும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மருத்துவமனையில் ஒரு நாள்.'),
            thumbnail:'/images/3357/bg15-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/13/post3357.html",
            publishDate:"Jun 13, 2012",
            summary:$sce.trustAsHtml("சவுக்குக்கு மருத்துவமனை என்றாலே எப்போதும் அலர்ஜிதான்.&nbsp; மருந்து வாசனை, துர்நாற்றம், இவை எல்லாவற்றையும் தாண்டி, மருத்துவமனைக்குச் சென்றாலே, துணிகளை அவிழ்த்து பட்டாபட்டி அண்டர்வேரோடு அனுப்பி விடுவார்கள் என்று எப்போதும் ஒரு எண்ணம் உண்டு.நினைவு தெரிந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐபிஎல் போட்டியில் பெட்டிங்கில் ஈடுபட்ட மத்திய அமைச்சர்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/06/13/post3355.html",
            publishDate:"Jun 13, 2012",
            summary:$sce.trustAsHtml("மெய்யாலுமாஆடல்வல்லான் நடனம் புரிந்த பஞ்ச சபைகள்- ரத்தின சபை, கனக சபை, ரஜத சபை, தாமிர சபை, சித்திர சபை ஆகியவை. இந்த ஐந்து சபைகளில் நடராஜப் பெருமான் இடது பாதத்திற்கு பதிலாக வலது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('A.Raja : DMK’s dark horse !'),
            thumbnail:'/images/3354/a-raja-150x150.jpeg',
            categories:['default',''],
            href:"/default/2012/06/13/post3354.html",
            publishDate:"Jun 13, 2012",
            summary:$sce.trustAsHtml("The homecoming of Andimuthu Raja this week was marked by pomp and fanfare. Both the DMK party and A.Raja appear to have embarked on a..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பேசக்கூடாத பொருள்.'),
            thumbnail:'/images/3351/1298860201-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/07/post3351.html",
            publishDate:"Jun 7, 2012",
            summary:$sce.trustAsHtml("சில பொருளைப் பற்றி அனைவருக்கும் தெரிந்தாலும் பேசுவது தவிர்க்கப்படும். &nbsp;மார்க்சிஸ்ட் கட்சியில் உறுப்பினராக இருந்து கொண்டு கோயிலுக்குச் செல்பவர்களைப் பற்றி அக்கட்சியில் பேசுவதைத் தவிர்ப்பார்கள்.&nbsp;&nbsp; தேர்தலில் பங்கெடுப்பது தற்காலிகம்தான், மக்கள் புரட்சிதான் இறுதி லட்சியம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உச்சகட்ட சிறுபிள்ளைத்தனம் .. …. …'),
            thumbnail:'/images/3346/DSCF3485-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/07/post3346.html",
            publishDate:"Jun 7, 2012",
            summary:$sce.trustAsHtml("புதனன்று காலை கைது செய்யப்பட்டு புழல் சிறையில் இருக்கும் திமுக முன்னாள் அமைச்சரும் சேலம் மாவட்ட திமுக செயலாளருமான வீரபாண்டி ஆறுமுகத்தை சிறையில் சந்திக்க கருணாநிதி செல்வதாக இருந்தது.&nbsp; இதற்காக உரிய அனுமதி கடிதங்களை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போபால் 5 : மீதைல் ஐசோ சயனைடு'),
            thumbnail:'/images/3343/MIC-150x150.png',
            categories:['default',''],
            href:"/default/2012/06/06/post3343.html",
            publishDate:"Jun 6, 2012",
            summary:$sce.trustAsHtml("போபால் 5 : மீதைல் ஐசோ சயனைடுசெவின் கண்டுபிடித்த பிறகு அதைத் தயாரிக்க ஒரு தொழிற்சாலை வேண்டுமே… அதற்காக யூனியன் கார்பைடு நிர்வாகம் தேர்ந்தெடுத்த இடம்தான் அமெரிக்காவில் உள்ள மேற்கு விர்ஜினியா மாகாணம். மேற்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊரான் வீட்டு நெய்…'),
            thumbnail:'/images/3339/1Anandreturnshome_Firstpost-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/05/post3339.html",
            publishDate:"Jun 5, 2012",
            summary:$sce.trustAsHtml("“ஊரான் வீட்டு நெய்யே, என் பெண்டாட்டி கையே” என்ற பழமொழியைக் கேள்விப்பட்டிருப்பீர்கள்.&nbsp; இந்தப் பழமொழி யாருக்குப் பொருந்துமோ இல்லையோ, கருணாநிதிக்கும் ஜெயலலிதாவுக்கும் நன்கு பொருந்தும். சமீபத்தில் உலக செஸ் சேம்பியனாக ஐந்தாவது முறையாக வெற்றி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கட்டெறும்பான கழுதை.. … …'),
            thumbnail:'/images/3334/001-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/06/05/post3334.html",
            publishDate:"Jun 5, 2012",
            summary:$sce.trustAsHtml("கழுதை தேய்ந்து கட்டெறும்பானதற்கு அற்புதமான உதாரணம் எது என்றால், அன்னா ஹசாரேவின் போராட்டம்தான். அன்னா ஹசாரே மற்றும் அவர் போராட்டம் மீது ஆயிரம் விமர்சனங்களைச் சொன்னாலும், ஊழலை ஒரு விவாதப்பொருளாக்கியதில், அவருக்கு முக்கிய பங்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாரதி அன்பர்களுக்கு புகழேந்தி தங்கராஜ் திறந்த மடல்'),
            thumbnail:'/images/3328/__Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/31/post3328.html",
            publishDate:"May 31, 2012",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இளைஞர்களின் ஆதர்சம்… … …'),
            thumbnail:'/images/3325/Karunaaaa-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/31/post3325.html",
            publishDate:"May 31, 2012",
            summary:$sce.trustAsHtml("யார் இந்த இளைஞர்களின் ஆதர்சம் என்று நினைக்காதீர்கள்.&nbsp; வேறு யார் ?&nbsp; தமிழினத்தின் தன்னிகரில்லாத, தரணி போற்றும், தன்னலமற்ற, தமிழினத்தின் தவமாய் தவமிருந்து பெற்ற தலைவன் கருணாநிதிதான்.&nbsp;&nbsp; ஏன் அவர் இளைஞர்களின் ஆதர்சமாக இருக்கக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வெந்த புண்ணில்.. … … .'),
            thumbnail:'/images/3323/36._Amma_Photo_Present-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/30/post3323.html",
            publishDate:"May 30, 2012",
            summary:$sce.trustAsHtml("ஜெயலலிதா அரசு ஓராண்டில் நடத்திய நூறாண்டு சாதனைகளைப் பற்றி தினந்தோறும் நாளேடுகளில் வெளிவரும் முழுப்பக்க வண்ண விளம்பரங்கள், இந்தியாவில் மிகப்பெரிய நிர்வாகச் சீர்திருத்தங்களை கொண்டு வந்த வாரன் ஹாஸ்டிங்ஸ், லார்ட் பென்டிங்க், லார்ட் ரிப்பன்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொறுப்பின்மையின் உச்சக்கட்டம்.'),
            thumbnail:'/images/3319/AVN_FULLPPL_1097030g-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/29/post3319.html",
            publishDate:"May 29, 2012",
            summary:$sce.trustAsHtml("தமிழகத்தில், குறிப்பாக சென்னையில் கடந்த ஒரு வாரமாக நிகழ்ந்து வரும் பெட்ரோல் டீசல் தட்டுப்பாடு என்பது, மத்திய மாநில அரசுகளின் பொறுப்பற்ற தன்மையின் உச்சக்கட்டத்தை வெளிப்படுத்துகிறது.சென்னை பெட்ரோலியம் நிறுவனம் மற்றும் மங்களுர் பெட்ரோகெமிக்கல் நிறுவனம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கும்பி எரியுது… குடும்பம் வாழுது… …'),
            thumbnail:'/images/3314/Karunanidhi_1_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/28/post3314.html",
            publishDate:"May 28, 2012",
            summary:$sce.trustAsHtml("1967ல் சட்டமன்றத் தேர்தலை திமுக சந்தித்த போது, அப்போது இருந்த விலைவாசி உயர்வையொட்டி திமுக வைத்த முழக்கங்கள் “கும்பி எரியுது, குளு குளு ஊட்டி ஒரு கேடா”, ”பக்தவச்சலம் அண்ணாச்சி, அரிசி விலை என்னாச்சி”,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீங்கள் வெட்கப்பட வேண்டும்.'),
            thumbnail:'/images/3299/May---11-b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/20/post3299.html",
            publishDate:"May 20, 2012",
            summary:$sce.trustAsHtml(" மற்ற பிராந்தியக் கட்சிகளும், தேசியக் கட்சிகளும், குடியரசுத் தலைவர் தேர்தலில் எந்த வேட்பாளரை ஆதரிப்பது என்று, குழம்பிக் கொண்டிருக்கையில், பி.ஏ.சங்மாவை ஜனாதிபதி தேர்தலுக்கான வேட்பாளராக நிறுத்துவதற்கு அதிமுக ஆதரவு என்று ஜெயலலிதா, நவீன் பட்நாயக்கோடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நடுநிலை பற்றி நீங்கள் பேசலாமா ?'),
            thumbnail:'/images/3290/simran-for-teenage-bonanza-jaya-tv-pressmeet-stills_3_103823123-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/18/post3290.html",
            publishDate:"May 18, 2012",
            summary:$sce.trustAsHtml("இந்த வாரம் ஆனந்த விகடன் இதழில், இனி ஹாய் மதன் கேள்வி பதில் மற்றும் மதன் கார்டூன்கள் இடம் பெறாது என்று, அறிவிப்பு வெளியிடப்பட்டிருக்கிறது.&nbsp;&nbsp; அது குறித்து ஆனந்த விகடன் இதழில் வெளிவந்த செய்தி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போபால் 4 : யூனியன் கார்பைடு.'),
            thumbnail:'/images/3279/unioncarbide_1-150x150.gif',
            categories:['default',''],
            href:"/default/2012/05/16/post3279.html",
            publishDate:"May 16, 2012",
            summary:$sce.trustAsHtml(" யூனியன் கார்பைடு1 நவம்பர் 1917 அன்று யூனியன் கார்பைடு என்ற நிறுவனம் உருவாகியது.&nbsp;&nbsp; லிண்ட் ஏர் ப்ராடக்ட்ஸ், நேஷனல் கார்பன், ப்ரஸ்டோ லைட் மற்றும் யூனியன் கார்பைடு ஆகிய நிறுவனங்கள் இணைந்து யூனியன் கார்பைடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடங்காத ஐஜி'),
            thumbnail:'/images/3275/Pramodkumar_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/15/post3275.html",
            publishDate:"May 15, 2012",
            summary:$sce.trustAsHtml("&nbsp; பிரமோத் குமார்.&nbsp;&nbsp;&nbsp; ஐபிஎஸ் அதிகாரி பிரமோத் குமார் திருப்பூர் பாசி நிதி நிறுவன மோசடி வழக்கில் கைது செய்யப்பட்டு தற்போது புழல் சிறையில் அடைக்கப்பட்டுள்ளார். சிறையில் அடைக்கப்பட்டாலும், ஐஜி என்ற கோதாவிலேயே இன்னும் பிரமோத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மே 20 மெரினாவில் கூடுவோம்'),
            thumbnail:'/images/3271/Ninaiventhal-sticker-01-05may12-curves-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/15/post3271.html",
            publishDate:"May 15, 2012",
            summary:$sce.trustAsHtml("அன்பான தோழர்களே!,கடந்த வருடம் ஐ. நா அறிக்கை போர்குற்றத்தைப் பற்றி விரிவாக பேசி, இரு தரப்பும் தவறு செய்தனர் என்று விவரித்ததை ஏற்றுக்கொள்ள மறுத்து, தமிழீழ விடுதலைப் போராட்டம் போர்குற்றமாக பார்க்க இயலாது அது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரித்துப் போன சகிப்புத்தன்மை.'),
            thumbnail:'/images/3268/cartoon-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/12/post3268.html",
            publishDate:"May 12, 2012",
            summary:$sce.trustAsHtml("கடந்த இரண்டு நாட்களாக பாராளுமன்றமே &nbsp;என்சிஇஆர்டி பாடப்புத்தகக்தில் அம்பேத்கரை இழிவு படுத்தும் வகையில் உள்ள ஒரு கார்ட்டூன் காரணமாக ஸ்தம்பித்தது.&nbsp; இடது சாரிகள் உள்ளிட்ட அனைத்துக் கட்சி எம்.பி.க்களும், இந்தக் கார்ட்டூனை உடனடியாக பாடப்புத்தகத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வழக்கு எண் 18/9'),
            thumbnail:'/images/3255/vazhakku-enn-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/09/post3255.html",
            publishDate:"May 9, 2012",
            summary:$sce.trustAsHtml("ரசனை என்பது தனி நபர் சம்பந்தப்பட்டது.&nbsp; ஒருவருக்குப் பிடித்த, கதையோ, கவிதையோ, மற்றொருவருக்கு சாதாரணமாகத் தோன்றலாம். ஒரு சில படைப்புகள் உங்கள் மனசாட்சியைப் போட்டு உலுக்கி உங்கள் தூக்கத்தைத் துறக்க வைக்கலாம்.&nbsp; பலரின் மனதையும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போபால் 3  சாத்தான்களின் ஆட்சி.'),
            thumbnail:'/images/3247/locusts-swarm-615-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/08/post3247.html",
            publishDate:"May 8, 2012",
            summary:$sce.trustAsHtml("சாத்தான்களின் ஆட்சி. மனிதன் தோன்றுவதற்கு முன்பே தோன்றிய லட்சக்கணக்கான வகைகளில் உள்ள பூச்சிகள், விவசாயத்திற்கு கடும் எதிரியாகவே இருந்து வந்துள்ளன.&nbsp;&nbsp; இந்தச் சாத்தான்களை அழிப்பதற்கு மனித சமூகம் இன்று வரை தொடர்ந்து போராடிக் கொண்டிருக்கிறது. இந்தப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Law sometimes catches up…'),
            thumbnail:'/images/3241/Pramod_Kumar_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/05/post3241.html",
            publishDate:"May 5, 2012",
            summary:$sce.trustAsHtml("Pramod Kumar IPS, a directly recruited IPS officer from Bihar allotted to the Tamil Nadu cadre, is finally behind bars. He was arrested by the..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எளிதில் கிடைக்காது நியாயம்.'),
            thumbnail:'/images/3240/56a8183c-277e-4003-a7b1-a0d37f9461ed-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/03/post3240.html",
            publishDate:"May 3, 2012",
            summary:$sce.trustAsHtml("நேற்று உச்ச நீதிமன்றம் அளித்த ஒரு தீர்ப்பானது, இந்தியாவில் ராணுவத்தின் பெயரால் நடக்கும் மனித உரிமை மீறல்களுக்கெல்லாம் ஒரு பாடமாக இருக்கும் என்று நம்புவாம்.  20 மார்ச் 2000ம் அன்று இந்திய ராணுவ உடையணிந்த 15க்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முள்ளி வாய்க்கால்: தீயண்ட நிலம்'),
            thumbnail:'/images/3236/email-ad-may-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/02/post3236.html",
            publishDate:"May 2, 2012",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலில் பேதமில்லை'),
            thumbnail:'/images/3233/268362-bangaru-laxman-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/05/01/post3233.html",
            publishDate:"May 1, 2012",
            summary:$sce.trustAsHtml("ஐக்கிய முற்போக்குக் கூட்டணி அரசாங்கம் 2004 முதல் பதவியில் இருந்தது முதல், ஊழல், ஊழல், ஊழல் என்று நாள்தோறும் பல்வேறு ஊழல்கள் வெளிவந்த வண்ணம் உள்ளன.&nbsp; இந்திய சுதந்திரம் அடைந்ததிலிருந்த இப்படி ஒரு ஊழல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நேர்மையின் விலை.'),
            thumbnail:'/images/3225/IN21_JAYA_1296f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/30/post3225.html",
            publishDate:"Apr 30, 2012",
            summary:$sce.trustAsHtml("அரசுப் பணியில் நேர்மையாக நடந்து தங்கள் பணியை சிறப்பாகச் செய்த இரண்டு அதிகாரிகள் அரசியல் காரணத்துக்காக பழிவாங்கப்பட்டுள்ளனர். அரசுப் பணியில் நேர்மையாக நடக்கும் அதிகாரிகள் அரிதிலும் அரிதாக இருக்கும் இன்றைய சூழலில், நேர்மையான அதிகாரிகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவள் பெயர் சோனி சோரி…'),
            thumbnail:'/images/3222/soni_sori-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/27/post3222.html",
            publishDate:"Apr 27, 2012",
            summary:$sce.trustAsHtml("அவள் ஒரு பள்ளி ஆசிரியை.&nbsp; அரசுப்பள்ளியில் ஆசிரியையாக பணியாற்றிக் கொண்டிருந்தாள். அவள் குடும்பம் மற்ற பழங்குடியினக் குடும்பத்தைப் போல கல்வியறிவு இல்லாத குடும்பம் அல்ல.&nbsp;&nbsp;&nbsp; அவள் தந்தை மத்ருராம் சோரி 15 வருடங்களாக பஞ்சாயத்துத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழ ஏதிலிகளின் கண்ணீர் நிலை.'),
            thumbnail:'/images/3213/IMG_0691-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/26/post3213.html",
            publishDate:"Apr 26, 2012",
            summary:$sce.trustAsHtml("செங்கல்பட்டு பூந்தமல்லியில் உள்ள அகதிகளுக்கான “சிறப்பு” முகாம்களை மூடக் கோரி தமிழக மக்கள் உரிமைக் கழகம் நடத்தும் ஐந்தாவது போரட்டமாக இன்று சென்னை மெமோரியல் ஹால் அருகே கண்டன ஆர்ப்பாட்டம் நடைபெற்றது.இதற்கு முன், அந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு பூந்தமல்லி முகாமை மூடக் கோரி ஆர்ப்பாட்டம்'),
            thumbnail:'/images/3206/n_t_s_7_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/26/post3206.html",
            publishDate:"Apr 26, 2012",
            summary:$sce.trustAsHtml("  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போபால் 2'),
            thumbnail:'/images/3201/bhopal01-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/25/post3201.html",
            publishDate:"Apr 25, 2012",
            summary:$sce.trustAsHtml("ஏழைகளின் சொர்க்கம்.ஒரியா பஸ்தி.&nbsp;&nbsp; மத்திய பிரதேசம் போபால் ரயில் நிலையம் அருகே அமைந்துள்ளதுதான் ஒரியா பஸ்தி என்ற அந்த சேரிப்பகுதி. பஸ்தி என்றால் சேரிப்பகுதி என்று பொருள்.&nbsp;&nbsp; அந்தச் சேரிப்பகுதி, பஞ்சம் மற்றும் பல்வேறு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு பூந்தமல்லி முகாமில் உள்ளவர்களை விடுவிக்க வேண்டும்'),
            thumbnail:'/images/3199/23042012032111-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/24/post3199.html",
            publishDate:"Apr 24, 2012",
            summary:$sce.trustAsHtml("செங்கல்பட்டு மற்றும் பூந்தமல்லி முகாமில் அடைத்து வைக்கப்பட்டுள்ள இலங்கைத் தமிழர்களை விடுவிக்கக் கோரியும் அம் முகாம்களை மூடக் கோரியும் தமிழக மக்கள் உரிமைக் கழகம் சார்பில் வெளியிடப்பட்ட அறிக்கை.தமிழகத்தில் 110க்கும் மேற்பட்ட இலங்கைத் தமிழர்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் இந்த பாரபட்சம் ?'),
            thumbnail:'/images/3197/_DSC0152-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/23/post3197.html",
            publishDate:"Apr 23, 2012",
            summary:$sce.trustAsHtml("காவல்துறையின் முதுகெலும்பாக இருப்பவர்கள் உதவி ஆய்வாளர்களாக பணியில் சேர்ந்து பணியாற்றும் இடைநிலை அதிகாரிகள்தான்.&nbsp;&nbsp; இந்த அதிகாரிகளின் பதவி உயர்வில் அரசு செய்யும் குளறுபடிகள் கொஞ்ச நஞ்சம் இல்லை.&nbsp; இந்தக் குளறுபடிகளால் பதவி உயர்வு கிடைக்காமல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேதனையான வீழ்ச்சி 2'),
            thumbnail:'/images/3195/Kalangher-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/20/post3195.html",
            publishDate:"Apr 20, 2012",
            summary:$sce.trustAsHtml("அண்ணாவின் அறிக்கைக்குப் பிறகு பெரியார் தன் முடிவை மாற்றிக் கொள்ளாதது மட்டுமல்ல… திராவிடர் கழகத்தின் வாரிசு என்ற மணியம்மையை அறிவிக்கப் போகிறார் என்று செய்திகள் பரவுகின்றன. இதை உண்மை என்று அறிவித்து பெரியார் அறிக்கையும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேதனையான வீழ்ச்சி..'),
            thumbnail:'/images/3193/anna-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/19/post3193.html",
            publishDate:"Apr 19, 2012",
            summary:$sce.trustAsHtml("சமீபத்தில் அருவருப்பாக இருக்கிறது என்ற கட்டுரைக்கு பின்னூட்டம் இட்டிருந்த தோழர் புதியவன் ராஜ் என்பவர், திமுகவை மட்டும் மிக மிக மோசமாக விமர்சனம் செய்திருப்பதாக வருத்தப்பட்டிருந்தார்.அதிமுகவை விட, திமுக சவுக்கால் கூடுதலாக விமர்சிக்கப்படுகிறது என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிமன்ற உத்தரவு மீறல் சிறையில் நளினிக்கு முதல் வகுப்பு மறுப்பு.'),
            thumbnail:'/images/3189/8_42-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/19/post3189.html",
            publishDate:"Apr 19, 2012",
            summary:$sce.trustAsHtml("ராஜீவ் கொலையில் தண்டிக்கப்பட்டு, வேலூர் சிறையில் வாழ்நாள் சிறைக் கைதியாக இருந்து வருபவர் நளினி. &nbsp;வாழ்நாள் சிறைக் கைதிக ஆண்டுதோறும் விடுதலை செய்கையைல் தன்னை மட்டும் விடுதலை செய்யவில்லை என சென்னை உயர்நீதிமன்றத்தில் வழக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('A State of &#8216;Encounters':  Madhumita Dutta'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/04/19/post3187.html",
            publishDate:"Apr 19, 2012",
            summary:$sce.trustAsHtml("A State of ‘Encounters’: Madhumita&nbsp;DuttaAPRIL 15, 2012tags:&nbsp;Chennai Police,&nbsp;encounter deaths,&nbsp;Velachery incidentby&nbsp;Nivedita MenonThis guest post has been written by MADHUMITA DUTTA, a Chennai-based activist and writer, in..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போபால் .. &#8230; &#8230;'),
            thumbnail:'/images/3186/Bhopal_Gas_Tragedy-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/18/post3186.html",
            publishDate:"Apr 18, 2012",
            summary:$sce.trustAsHtml("வரலாற்றிலிருந்து பாடம் கற்றுக் கொள்ளாதவர்களை வரலாறு மன்னிப்பதில்லை. வரலாற்றிலிருந்து பாடம் கற்றுக் கொள்ளாதவர்களே மீண்டும் மீண்டும் தவறுகளைச் செய்து வருகிறார்கள்.இந்தியா என்றுமே மறக்கக் கூடாத வரலாறு போபால். இயற்கை பேரழிவுகளால் உயிர்கள் பலியாவதை நாம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயர்நீதிமன்றத்துக்கே லஞ்சம் ???'),
            thumbnail:'/images/3183/681x454-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/17/post3183.html",
            publishDate:"Apr 17, 2012",
            summary:$sce.trustAsHtml("ஆட்டைக் கடித்து மாட்டைக் கடித்து நீதிமன்றத்தையே கடிக்க ஆரம்பித்து விட்டார்களே என்று ஆச்சர்யப்படாதீர்கள்.&nbsp;&nbsp; இது நடக்காவிட்டால்தான் ஆச்சர்யம்.இன்னும் எவ்வளவுதான் வேண்டும் என்ற கட்டுரையில் நெற்குன்றத்தில் உயர் உயர் அதிகாரிகளுக்கான வீட்டு வசதி திட்டம் உருவாக்கப்பட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அருவருப்பாக இருக்கிறது… … …. ….'),
            thumbnail:'/images/3174/AVN_KARUNA_120812f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/14/post3174.html",
            publishDate:"Apr 14, 2012",
            summary:$sce.trustAsHtml("  கருணாநிதியைப் பற்றி எழுதிச் சலித்து விட்டது.&nbsp; கருணாநிதி இன்று ஒரு நடை பிணம். &nbsp; அவர் எப்போதோ இறந்து விட்டார்.&nbsp; ஈழத்தமிழர்கள் கொன்று குவிக்கப்பட்டுக் கொண்டிருக்கையில் 2ஜி பணத்தை எண்ணிக்கொண்டிருந்த அன்றே கருணாநிதி இறந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மிகப் பெரிய சமூகவிரோதி யார் – சன் குழுமமே!'),
            thumbnail:'/images/3164/Sun_TV_Network_0-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/14/post3164.html",
            publishDate:"Apr 14, 2012",
            summary:$sce.trustAsHtml("நல்லவேளையாக சுனாமிப் பேரழிவிலிருந்து தமிழகம் தப்பிவிட்டது. ஆனால் சன் டிவிக்கும் கலைஞர் டிவிக்கும் வானுயர்ந்த அலைகள் இந்தோனேசியாவோடு நின்றுபோனது பெரும் ஏமாற்றமாயிருந்திருக்கும். அந்த அளவு களேபரப்படுத்தின் இவ்விரண்டு தொலைக்காட்சிகளும்.பொதுவாக தமிழர்களை உசுப்பேற்றுவதை ஒரு கடமையாகவே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மகிழ்ச்சி மகிழ்ச்சி&#8230;.'),
            thumbnail:'/images/3162/vta-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/12/post3162.html",
            publishDate:"Apr 12, 2012",
            summary:$sce.trustAsHtml("திடீரென்று இப்படி மகிழக் காரணம் என்ன ?&nbsp;&nbsp; இன்று சென்னை உயர்நிதிமனறத்தில் அளிக்கப்பட்ட ஒரு தீர்ப்பே அந்த மகிழ்ச்சிக்குக் காரணம்.கடந்த டிசம்பர் 2011ல் சவுக்கு வல்லான் வகுத்ததே வாய்க்கால் என்று ஒரு கட்டுரையை எழுதியிருந்தது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளம் போராட்டம் தோல்வியா ?'),
            thumbnail:'/images/3158/kunal-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/10/post3158.html",
            publishDate:"Apr 10, 2012",
            summary:$sce.trustAsHtml("தோழர் கானகன் கூடங்குளம் போராட்டம் தொடர்பாக எழுதியிருந்த கட்டுரைக்கு ஏராளமான எதிர்வினைகள். ஆதரவாகவும், எதிராகவும். இரு தரப்பு வாதங்களும், கடுமையாகவே இருக்கின்றன.தோழர் கானகனின் கட்டுரையிலிருந்து தெரிய வந்த விஷயங்களில் முக்கியமானது, இந்தப் போராட்டத்தின் முக்கியத்துவம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளம் &#8211; போராட்டம் தரும் படிப்பினைகள்'),
            thumbnail:'/images/3156/koodamkulam4-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/04/post3156.html",
            publishDate:"Apr 4, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் நிகழ்வுகள் நமக்குக் கற்றுத் தரும் படிப்பினைகள்தான் என்ன?&nbsp;ஆறு மாதக் காலப் போராட்டம் ஏறத்தாழ ஒரு முடிவுக்கு வந்தாகிவிட்டது. அணு உலையில் பணிகள் முடுக்கிவிடப்பட்டுள்ளன. தேசத்துரோகக் குற்றஞ்சாட்டப்பட்ட ஆர்வலர்கள் இருவர் உட்பட சிலர் இன்னமும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்புள்ள அக்கா !!!'),
            thumbnail:'/images/3155/jaya_868668f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/04/02/post3155.html",
            publishDate:"Apr 2, 2012",
            summary:$sce.trustAsHtml(" இன்று (02.04.2012) மாலை மூன்று மாத பிரிவுக்குப் பிறகு, சசிகலாவும், இளவரசியும், மீண்டும் ஜெயலலிதாவின் போயஸ் தோட்ட இல்லத்துக்குள் நுழைந்தனர். நுழைந்ததும் என்ன நடந்திருக்கும் ? ஜெயலலிதா : வா சசி… எப்படி இருக்கே… ?சசிகலா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Elusive Justice.'),
            thumbnail:'/images/3151/high_court-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/28/post3151.html",
            publishDate:"Mar 28, 2012",
            summary:$sce.trustAsHtml("The Indian judiciary has a long history of upholding human values and fundamental rights.&nbsp; Whenever the state crosses the ‘lakshman rekha’ it was the judiciary..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள் போராட்டம் தோல்வியுறாது.. .. பணிந்தது அரசு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/03/27/post3149.html",
            publishDate:"Mar 27, 2012",
            summary:$sce.trustAsHtml(" தமிழகத்தில் அரசியல் கட்சிகள் நடத்தும் போராட்டங்கள் பெரும்பாலானவை பணம் கொடுத்து, பல்வேறு தகாத காரியங்களைச் செய்வதால் வெற்றி பெறுவதாக அறிவிக்கப் படுகின்றன.அவ்வாறு நடைபெறாத போராட்டமாக இருந்தாலும், இரண்டு மணி நேரமோ, அல்லது மூன்று மணி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இடிந்தகரை&#8230; இடியாத நம்பிக்கை'),
            thumbnail:'/images/3147/LAT_WORLD_BOOK_DAY_796558a-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/26/post3147.html",
            publishDate:"Mar 26, 2012",
            summary:$sce.trustAsHtml("&nbsp;இடிந்த கரை.. இடியாத நம்பிக்கை…முதல் பக்கம்.இதை நான் எழுதும் கடைசி ஓ பக்கமாக அறிவித்துவிடலாமா என்ற மனநிலையில்தான் எழுத ஆரம்பிக்கிறேன். என்ன எழுதி என்ன பயன் என்ற அலுப்பே காரணம். அலுப்புக்குக் காரணம் கூடங்குளம்.பிப்ரவரி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இருட்டறையில் சட்டம்.. … ….'),
            thumbnail:'/images/3145/DSC_5594-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/25/post3145.html",
            publishDate:"Mar 25, 2012",
            summary:$sce.trustAsHtml("சட்டம் ஒரு இருட்டறை என்பது கேப்டன் நடித்த சூப்பர் ஹிட் திரைப்படம். ஆனால் தமிழ்நாட்டைப் பொறுத்தவரை சட்டம் இருட்டறையில்தான் அடைக்கப்பட்டிருக்கிறது.&nbsp;&nbsp; இவ்வாறு சட்டத்தை இருட்டறையில் அடைப்பவர்கள் வேறு யாரும் இல்லை.&nbsp; சட்டத்தைப் பாதுகாக்க வேண்டிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்களுக்கு உதயக்குமார் திறந்த மடல்.'),
            thumbnail:'/images/3141/udayakumar_938372a-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/25/post3141.html",
            publishDate:"Mar 25, 2012",
            summary:$sce.trustAsHtml("அன்பார்ந்த நண்பர்களே…வாழ்த்துக்கள்.&nbsp; புஷ்பராயன், நான் மற்றும் இதர 12 நண்பர்கள் பலவீனமாகியிருக்கிறோம்.&nbsp;&nbsp; ஆனால், எழுந்து உட்கார்ந்து எங்களால் மக்களோடு பேச முடிகிறது.&nbsp; காலவரையற்ற உண்ணாவிரதம் தொடங்கி இன்றோடு ஏழாவது நாள்.மத்திய அரசிடமிருந்தோ, மாநில அரசிடமிருந்தோ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளம் &#8211; காவல்துறை நடவடிக்கைக்கு கண்டனம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/03/25/post3139.html",
            publishDate:"Mar 25, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணுஉலை எதிர்ப்புப் போராட்டத்தைத் தனிமைப்படுத்த தீவிரவாதப் பூச்சாண்டி காட்டுவதில் காவல்துறை மூலம் இந்திய, தமிழக அரசுகள் ஈடுபட்டு வருவது வன்மையாகக் கண்டிக்கத்தக்கது.&nbsp; &nbsp; கூடங்குளம் அணுஉலை எதிர்ப்பு மக்கள் கூட்டமைப்பு சார்பில் ஒருங்கிணைக்கப்பட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உதயக்குமார் ஒரு தீவிரவாதி… ….'),
            thumbnail:'/images/3138/DSC_7407-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/24/post3138.html",
            publishDate:"Mar 24, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணு உலைக்கு எதிரான மக்களின் போராட்டத்தை ஒடுக்கவும், நீர்த்துப்போகச் செய்யவும், காவல்துறை செய்து வந்த பகீரதப்பிரயத்தனங்கள், தோல்வியில் முடிந்துள்ளன.&nbsp; போராட்டத்துக்கு தலைமையேற்று நடத்தும் உதயக்குமார் மற்றும் புஷ்பராயனை எப்படியாவது கைது செய்ய வேண்டும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தியா முழுவதற்கும் 144 தடை உத்தரவு ???'),
            thumbnail:'/images/3128/koodankulam5-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/23/post3128.html",
            publishDate:"Mar 23, 2012",
            summary:$sce.trustAsHtml("இந்தியா முழுமைக்கும் 144 தடை உத்தரவு பிறப்பிக்க முடியுமா ?&nbsp; அப்படித்தான் ஒரு தடை உத்தரவு திருநெல்வேலி மாவட்ட ஆட்சியரால் பிறப்பிக்கப்பட்டிருக்கிறது.19.03.2012 அன்று பிறப்பிக்கப் பட்ட உத்தரவில் இப்படித்தான் சொல்லப்பட்டுள்ளது.&nbsp; அந்த ஆணையில், கூடங்குளம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூடங்குளத்திலிருந்து காவல்துறை வெளியேற வேண்டும் &#8211; வைகோ அறிக்கை'),
            thumbnail:'/images/3124/2803005006_458d357ba9_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/23/post3124.html",
            publishDate:"Mar 23, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணுமின் நிலையத்தால் பேரழிவு ஏற்படும் என்ற நியாயமான அச்சத்தாலும், கவலையாலும், கூடங்குளம், இடிந்தகரை, கூட்டப்புளி வட்டாரத்தில் உள்ள நூற்றுக்கணக்கான கிராமங்களிலும், கடற்கரையோரங்களிலும் வாழும் பல்லாயிரக்கணக்கான மக்கள், அறவழியில், காந்திய வழியில், அணுமின் நிலையத்தைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சாபக்கேடு..'),
            thumbnail:'/images/3123/koodamkulam4-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/21/post3123.html",
            publishDate:"Mar 21, 2012",
            summary:$sce.trustAsHtml("தமிழகம் போல சாபக்கேடு பிடித்த மாநிலத்தை எங்குமே பார்க்க முடியாது ஒரு தனியான தீவு போல, நெருக்கடி அறிவிக்கப்பட்ட நிலையைப் போல ஒரு தாலுகாவில் உள்ள அத்தனை பேரின் அடிப்படை உரிமைகளும் பறிக்கப்பட்டுள்ளது….&nbsp; ஆயிரக்கணக்கில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது நாடகமா ?'),
            thumbnail:'/images/3106/womenwithbaby-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/19/post3106.html",
            publishDate:"Mar 19, 2012",
            summary:$sce.trustAsHtml("இலங்கையில் நடந்த போர்க்குற்றங்களை இன்று சேனல் 4 தொலைக்காட்சி ஆவணப்படுத்தி இரண்டு பாகங்களாக வெளியிட்டு, அது உலகெங்கும் மனசாட்சி உள்ளவர்களை உலுக்கியிருக்கிறது.&nbsp;&nbsp; ஈழத்தில் போரை நிறுத்து என்ற முழக்கத்தோடு, 2008 அக்டோபர் மாதம் இந்தியக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இவர்களே குற்றவாளிகள்.. … …'),
            thumbnail:'/images/3097/Asra_Garg_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/15/post3097.html",
            publishDate:"Mar 15, 2012",
            summary:$sce.trustAsHtml("தமிழகத்தில் நேற்றும் ஒரு என்கவுண்டர் நடந்துள்ளது.&nbsp;&nbsp; இந்த என்கவுன்டர் வேளச்சேரி வங்கிக் கொள்ளையர்களை சுட்டதை விட மிகவும் புதுமையாக இருக்கிறது.&nbsp;&nbsp; திண்டுக்கல்லில் ஹோட்டல் சுகன்யாவில் தங்கியிருந்த ஆட்கடத்தல் கும்பலை மதுரை போலீசார் வளைத்துப் பிடிக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அய்யோ&#8230; வடை போச்சே&#8230; !!!'),
            thumbnail:'/images/3092/DSC_6896-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/13/post3092.html",
            publishDate:"Mar 13, 2012",
            summary:$sce.trustAsHtml("தமிழ்நாடு வழக்கறிஞர் சங்கத் தலைவர் பிரபாகரனுக்கு சங்கக் கட்டிடம் கொடுக்க இடம் ஒதுக்கியதற்கு வழக்கறிஞர்கள் நேற்று எதிர்ப்பு தெரிவித்தனர்.&nbsp;இதையடுத்து, ஒதுக்கப்பட்ட இடத்தில் நடைபெற்று வந்த கட்டுமானப் பணிகளை உடனடியாக நிறுத்துமாறு சென்னை உயர்நிதிமன்றப் பதிவாளர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயர்நீதிமன்ற வீட்டு வசதி வாரியம்.'),
            thumbnail:'/images/3088/chennaicitypictures_highcourt-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/12/post3088.html",
            publishDate:"Mar 12, 2012",
            summary:$sce.trustAsHtml("தமிழ்நாடு வீட்டு வசதி வாரியம் கேள்விப்பட்டிருக்கிறோம். இது என்ன புதிதாக உயர்நீதிமன்ற வீட்டு வசதி வாரியம் என்று பார்க்கிறீர்களா ?தமிழ்நாடு வீட்டு வசதி வாரியத்தைப் பற்றி சவுக்கு வாசர்களுக்கு என்ன தெரியும் என்று கேட்டால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலங்கையின் கொலைவெறி&#8230;  பிரபாகரனின் மகன் படுகொலை செய்யப்பட்டதற்கான ஆதாரம்.'),
            thumbnail:'/images/3080/bala-son-of20prrabaharan-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/12/post3080.html",
            publishDate:"Mar 12, 2012",
            summary:$sce.trustAsHtml("விடுதலைப் புலிகளுக்கு எதிரான போரின் இறுதிக்கட்டத்தில் சரணடைந்த, கைது செய்யப்பட்ட போராளிகளும், முன்னணித் தலைவர்களும், சிறுவர்களும் கூட- சிறிலங்கா படையினரால் திட்டமிட்ட அடிப்படையில் நீதிக்குப்புறம்பாக படுகொலை செய்யப்பட்டுள்ளனர் என்று பிரித்தானியாவின் ‘தி இன்டிபென்டென்ட்‘ ஏடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திரிபாதி ராஜ்யம்… ….'),
            thumbnail:'/images/3074/DSC_0874-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/09/post3074.html",
            publishDate:"Mar 9, 2012",
            summary:$sce.trustAsHtml("சென்னையில் இன்று நடப்பது வேறு யாருடைய ஆட்சியுமல்ல… ஐபிஎஸ் அதிகாரி திரிபாதியின் ராஜ்யமே நடைபெற்றுக் கொண்டு இருக்கிறது. கடந்த 23 அதிகாலையில் 5 இளைஞர்களை கொன்றதிலிருந்தே திரிபாதியின் ஆட்டம் அதிரடி ஆட்டமாக மாறியிருக்கிறது.சவுக்கு பல..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனமகிழ் மன்றங்கள்… ….'),
            thumbnail:'/images/3055/pandian1-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/03/04/post3055.html",
            publishDate:"Mar 4, 2012",
            summary:$sce.trustAsHtml("மனமகிழ் மன்றங்கள் என்றவுடன், ஏதோ தமிழ்நாட்டில் உள்ள கிளப்புகளையும், கேளிக்கை விடுதிகளையும் பற்றி சவுக்கு எழுதப்போகிறது என்று நினைத்து விடாதீர்கள்.&nbsp;&nbsp; சவுக்கு தற்போது எழுதப்போவது, நீதிமன்றங்களைப் பற்றி.நேற்றைக்கு கருணாநிதியின் பாதுகாப்பு அதிகாரிகளாக இருந்த, ட்ராலி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயிர்களுக்கு விலைமதிப்பில்லை… ….'),
            thumbnail:'/images/3037/DSC_5118-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/26/post3037.html",
            publishDate:"Feb 26, 2012",
            summary:$sce.trustAsHtml("ஐந்து மனித உயிர்களின் விலை, 14 லட்சம் ரூபாய் தானா ? என்ற தலைப்பில் இன்றைய தினமலரில் கட்டுரை ஒன்றை “குயிக் கன் முருகன்”&nbsp; எழுதியுள்ளார். குயிக் கன் முருகன் “நமது சிறப்பு நிருபர்“..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குயிக் கன் முருகன்'),
            thumbnail:'/images/3030/Tripathy_JK5-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/25/post3030.html",
            publishDate:"Feb 25, 2012",
            summary:$sce.trustAsHtml("என்னடா இது ? கட்டுரையின் தலைப்பைப் பார்த்தவுடன் நகைச்சுவை கட்டுரை என்று நினைக்காதீர்கள்.&nbsp; இது நகைச்சுவை கட்டுரை அல்ல.&nbsp;&nbsp;&nbsp; நகைப்புக்குள்ளான மனித உரிமைகளைப் பற்றிய கட்டுரை.யார் இந்த குயிக் கன் முருகன் ?&nbsp;&nbsp; ஐந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துப்பாக்கியல்ல தீர்வு ,,, தினமணி தலையங்கம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/02/25/post3020.html",
            publishDate:"Feb 25, 2012",
            summary:$sce.trustAsHtml(" சென்னையில் நடந்தேறிய இரண்டு வங்கிக் கொள்ளைகள் எந்த அளவுக்கு அதிர்ச்சியை அளித்ததோ அதைவிட அதிர்ச்சி அளிப்பதாக இருக்கிறது, நள்ளிரவில் நடந்த காவல்துறையின் அதிரடி நடவடிக்கை. கொள்ளைக்காரர்களைக் காவல்துறையினர் பிடித்துச் சட்டத்தின் முன் நிறுத்தியிருந்தால் அதைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேளச்சேரி என்கவுண்டர் படுகொலை ? மீதம் உள்ள 5 பேர் கதி என்ன ?'),
            thumbnail:'/images/3019/DSC_5599-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/25/post3019.html",
            publishDate:"Feb 25, 2012",
            summary:$sce.trustAsHtml("சென்னையில் அடுத்தடுத்து நடந்த இரண்டு வங்கிக் கொள்ளையில் சம்பந்தப்பட்டதாக கருதப்படும் ஐந்து நபர்களை சென்னை மாநகரக் காவல்துறையினர், சென்னை வேளச்சேரியில் எஸ்.என்.முதலித் தெருவில் உள்ள ஒரு வீட்டில் வைத்து கொலை செய்தனர்.&nbsp;&nbsp;&nbsp; இந்த என்கவுண்டர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிஜமல்ல கதை.'),
            thumbnail:'/images/3016/DSC_6427-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/23/post3016.html",
            publishDate:"Feb 23, 2012",
            summary:$sce.trustAsHtml("கடந்த ஒரு மாதமாக சென்னை மாநகர காவல்துறையினரை பிடித்து உலுக்கிக் கொண்டிருந்த வங்கிக் கொள்ளை வழக்கு ஒரு முடிவுக்கு வந்திருக்கிறது.&nbsp;&nbsp; கொள்ளையடிக்கப்பட்டதாக சந்தேகிக்கப் பட்ட 5 இளைஞர்களை சென்னை மாநகர காவல்துறை இரவோடு இரவாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போஸ்ட் மார்ட்டம்  : காதலில் சொதப்புவது எப்படி ?'),
            thumbnail:'/images/3005/Kadhalil_sothapuvathu_eppadi-Love_failure_stills_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/22/post3005.html",
            publishDate:"Feb 22, 2012",
            summary:$sce.trustAsHtml("&nbsp;என் லவ்ல வர்ற பிரச்சனைகளுக்கு முக்கிய காரணமே நா பையனா இருக்கறதும் அவ பொண்னா இருக்கறதும் தான்.(காதலில் சொதப்புவது எப்படி? யில் சித்தார்த் பேசும் வசனம்)இந்த வசனம் தான் படத்தின் idea.காதலில் சொதப்பிய இளைஞன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புற்றுநோய் அல்லாமல் வேறு என்ன ?'),
            thumbnail:'/images/2999/2176838929_30c714cf74_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/20/post2999.html",
            publishDate:"Feb 20, 2012",
            summary:$sce.trustAsHtml("சனிக்கிழமை அன்று சசிகலாவின் கணவர் நடராஜன் நில அபகரிப்பு வழக்கில் கைது செய்யப்பட்டதைப் பார்க்கும் போது, வரலாறு திரும்புகிறது என்றே சொல்லத் தோன்றுகிறது.&nbsp;&nbsp;&nbsp; மூன்று மாதங்களுக்கு முன்பு, சசிகலாவின் நெருக்கமான உறவினர்கள் இது போல..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒன்று கூடுங்கள்…'),
            thumbnail:'/images/2993/avd-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/15/post2993.html",
            publishDate:"Feb 15, 2012",
            summary:$sce.trustAsHtml("சங்கரன் கோவில் இடைத்தேர்தல் மற்ற இடைத்தேர்தல்களை விட அதிக முக்கியத்துவம் பெற்றிருக்கிறது. குறிப்பாக விஜயகாந்துக்கும், ஜெயலலிதாவுக்கும் சட்டப்பேரவையில் நடந்த மோதலுக்குப் பிறகு இந்த இடைத் தேர்தல் முக்கியத்துவம் பெறுகிறது.உங்களுக்கு உண்மையிலேயே திராணி இருந்தால், சங்கரன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆடு நனைகிறதே என்று…..'),
            thumbnail:'/images/2990/Salman_Khurshid_portrait-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/14/post2990.html",
            publishDate:"Feb 14, 2012",
            summary:$sce.trustAsHtml("மத்திய அரசின் சட்டத்துறை அமைச்சராக இருக்கும் சல்மான் குர்ஷீத் சனியன்று பேசிய பேச்சு விரக்தியின் வெளிப்பாடு மட்டுமல்ல, விஷமத்தனமானது.&nbsp;உத்தரப்பிரதேச மாநில தேர்தலை பிரதான கட்சிகளான காங்கிரஸ் மற்றும் பிஜேபி இரண்டுமே வாழ்வா சாவா என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அத்தனை பேரும் உத்தமர்தானா ?'),
            thumbnail:'/images/2985/DSC_3886_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/10/post2985.html",
            publishDate:"Feb 10, 2012",
            summary:$sce.trustAsHtml("கருணாநிதி எது பேசினாலும் அதில் ஆயிரம் அர்த்தங்கள் இருக்கும். அப்படி இருக்க வேண்டும் என்றும் அவர் விரும்புவார். லாட்டரி அதிபர் மார்ட்டின் தயாரித்து கருணாநிதி கதை வசனம் எழுதிய இளைஞர் திரைப்படத்தின் பாடல் வெளியீட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தப்புத் தாளங்கள்…'),
            thumbnail:'/images/2972/jaya34309483-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/04/post2972.html",
            publishDate:"Feb 4, 2012",
            summary:$sce.trustAsHtml("அரசியலில் நிரந்தர நண்பர்களும் இல்லை, நிரந்தரப் பகைவர்களும் இல்லை என்ற நியதி உண்மைதான் என்றாலும், இந்த வாரம், ஜெயலலிதாவுக்கும், விஜயகாந்துக்கும், சட்டப்பேரவையில் நிகழ்ந்த மோதல் அரசியல் நாகரீகத்தையெல்லாம் குழிதோண்டிப் புதைத்து விட்டது.விஜயகாந்தை அவைக்காவலர்களை வைத்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போஸ்ட் மார்ட்டம் : நண்பன் (எ) 3 இடியட்ஸ்'),
            thumbnail:'/images/2965/vijay_nanban_movie_release_posters_3910-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/03/post2965.html",
            publishDate:"Feb 3, 2012",
            summary:$sce.trustAsHtml("”ஏன் மாணவர்களில் சிலர் தன்னை தானே கொன்றுகொள்ள வேண்டும் ? இந்த அமைப்பில் எங்கோ தவறு இருக்கிறது..ஏன் ஒவ்வொருவரும் அறிவிற்கு பதில் மதிப்பெண்களை துரத்துகிறார்கள்..இந்த கருத்தை தான் இந்த படம் சுட்டிக் காட்டி, தாக்குகிறது”-..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவர்கள் தெளிவாகத்தான் இருக்கிறார்கள்.. !!!'),
            thumbnail:'/images/2955/18092011298-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/02/01/post2955.html",
            publishDate:"Feb 1, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணு உலைக்கு எதிரான போராட்டம், ஏறக்குறைய ஆறு மாதங்களாக தொடர்ந்து நடைபெற்றுக் கொண்டு வருகிறது. &nbsp;இந்தப் போராட்டம் திடீரென்று எப்படி தொடங்கியது ?&nbsp; இதைத் தொடங்கி வைத்ததே அரசுதான். தினகரன் நாளேட்டில், ஜுலை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் இந்த உலை வெறி.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/02/01/post2946.html",
            publishDate:"Feb 1, 2012",
            summary:$sce.trustAsHtml("கூடங்குளம் அணு உலையை ஆரம்பத்திலேயே எதிர்க்காமல் இப்போது எதிர்ப்பது ஏன் ?இப்போதுதான் எதிர்க்கிறோம் என்பது தவறு. நானே 25வருடங்களாக அணு உலைகளுக்கு எதிராக எழுதிவருகிறேன்.எண்பதுகளிலிருந்தே கல்பாக்கத்தில் மருத்துவர் புகழேந்தியும்கோவையில் மருத்துவர் ரமேஷும் கள ஆய்வுகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது ஒரு வகை.'),
            thumbnail:'/images/2943/avd-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/31/post2943.html",
            publishDate:"Jan 31, 2012",
            summary:$sce.trustAsHtml(" உலகம் ஒரு நாடகமேடை, நாம் அனைவரும் அதில் நடிகர்கள் என்று சொன்னார் ஷேக்ஸ்பியர்.&nbsp;&nbsp;&nbsp; அது எந்தவிதத்தில் சரியோ இல்லையோ, தமிழக அரசைப் பொறுத்தவரை சரியாகவே இருக்கிறது.திமுக ஆட்சியில் மக்கள் அடைந்த வேதனை வார்த்தைகளால் சொல்லி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெயலலிதாவுக்கு சசிகலா உருக்கமான கடிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/01/24/post2932.html",
            publishDate:"Jan 24, 2012",
            summary:$sce.trustAsHtml("&nbsp;&nbsp;கொஞ்சம் சோர்வாக வந்து அமர்ந்த அலெக்ஸின் சட்டை பையில் துருத்திக் கொண்டு நின்றது சில கடிதங்கள்.‘‘என்ன காதல் கடிதங்களா?’’ என்று அலெக்ஸை சீண்டினார் பாண்டியன்.‘‘அட நீங்க வேற. காதலிக்கிற வயசா இது? ஊர்லேர்ந்து அப்பா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செல்லமுத்து நல்லவர் !!!'),
            thumbnail:'/images/2930/DSC_0596-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/23/post2930.html",
            publishDate:"Jan 23, 2012",
            summary:$sce.trustAsHtml("எந்தச் செல்லமுத்து ?&nbsp; தமிழ்நாடு அரசுப்பணியாளர் தேர்வாணையத்தின் தலைவராக இருந்து தன் பதவியை ராஜினாமா செய்த செல்லமுத்து அவர்களைத்தான் நல்லவர் என்று சவுக்கு சொல்கிறது.&nbsp; வீட்டு வசதித்துறையின் செயலராக இருந்தபோது, தமிழ்நாடு வீட்டு வசதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நெருடலோடு வாழ்த்துகிறோம்…. ….'),
            thumbnail:'/images/2914/21TH_NAT_898781f-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/21/post2914.html",
            publishDate:"Jan 21, 2012",
            summary:$sce.trustAsHtml("ஓய்வு பெற்ற டிஜிபி நட்ராஜ் அவர்களை தமிழ்நாடு அரசுப் பணியாளர் தேர்வாணையத்தின் தலைவராக நியமித்து தமிழக அரசு ஆணை பிறப்பித்துள்ளது.&nbsp;&nbsp; இந்த நியமனம் வரவேற்கத் தக்கது.கையில் 10 ஆண்டு டிஎன்பிஎஸ்சி வினாத்தாள்களும் விடைகளும் அடங்கிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாம் மனிதர்களா&#8230;. ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/01/20/post2905.html",
            publishDate:"Jan 20, 2012",
            summary:$sce.trustAsHtml("இந்திய எல்லைப் பாதுகாப்புப் படை மேற்கு வங்க மாநிலம் முர்ஷிதாபாத் மாவட்டத்தில் நடத்திய அட்டூழியம்.  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நான்தான் ஆட்சியை மாற்றினேன்… … !!!'),
            thumbnail:'/images/2904/vant-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/20/post2904.html",
            publishDate:"Jan 20, 2012",
            summary:$sce.trustAsHtml("இப்படி யாராவது அதிமுகவின் வெற்றிக்கு நான்தான் காரணம் என்று மார்தட்டிக் கொள்ள முடியுமா ? ஒரு வேளை இப்படி யாராவது மார்தட்டிக் கொள்ள வேண்டும் என்றால் கருணாநிதியைத் தவிர வேறு யாரும் மார்தட்டிக் கொள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாம்தான் முட்டாள்கள்….'),
            thumbnail:'/images/2893/IMG_5378-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/16/post2893.html",
            publishDate:"Jan 16, 2012",
            summary:$sce.trustAsHtml("நக்கீரன் இதழில் ஜெயலலிதாவைப் பற்றி வெளியான செய்தியும், அதன் பிறகு நடந்த சம்பவங்களும் அனைவரும் அறிந்ததே. இதைத் தொடர்ந்து ஒரு நாள் முழுக்க நக்கீரன் அலுவலகத்தை அதிமுக தொண்டர்கள் முற்றுகையிட்டு தாக்கியதும், காவல்துறையினர் வேடிக்கைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போஸ்ட் மார்ட்டம்  : மெளன குரு'),
            thumbnail:'/images/2890/Arulnidhi_Mouna-Guru_Tamil_movie_first_look_wallpapers-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/15/post2890.html",
            publishDate:"Jan 15, 2012",
            summary:$sce.trustAsHtml("Never start a fight, Always finish it.- Director Clint Eastwood ன் Changeling (2008) படத்தில் வரும் வசனம். மேலே சொல்லப்பட்டுள்ள வசனம் தான் மெளன குரு படத்தின் Idea. ஒரு சாதாரணன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பார்ந்த திரு கோபால் அவர்களே'),
            thumbnail:'/images/2882/Gopal_Nakkeeran-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/11/post2882.html",
            publishDate:"Jan 11, 2012",
            summary:$sce.trustAsHtml("இந்த கடிதத்தை உங்களுக்கும் காமராஜுக்கும் சேர்த்தே எழுதலாம் என்றுதான் முதலில் தோன்றியது.&nbsp; நீங்கள் உழைப்பால் இந்தப் பத்திரிக்கையை வளர்த்தீர்கள்.&nbsp; வலம்புரி ஜானின் உதவியாளராக உங்கள் வாழ்க்கையை தொடங்கி இன்று இந்த அளவுக்கு வளர்ந்திருக்கிறீர்கள்.&nbsp;&nbsp; ஆனால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தூணாக நின்ற தமிழன் துரும்பானது ஏன்?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2012/01/11/post2881.html",
            publishDate:"Jan 11, 2012",
            summary:$sce.trustAsHtml("இந்திய மக்கள்தொகையில் ஏறத்தாழ பதினாறில் ஒரு பங்கு தமிழர்கள் வாழ்ந்தாலும் அவர்களுக்குரிய அங்கீகாரம் என்பது இந்திய அரசியலில் அளிக்கப்படவில்லை. இந்திய அரசும் சரி, அகில இந்திய அரசியல் கட்சிகளும் சரி தமிழர்களின் தலையாய பிரச்னைகளைக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்கீரன் விரித்த வலையில் சிக்கிய ஜெயலலிதா.. …..'),
            thumbnail:'/images/2878/nakkheeran_gopal4-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/07/post2878.html",
            publishDate:"Jan 7, 2012",
            summary:$sce.trustAsHtml("இன்று நக்கீரன் அலுவலகம் அமைந்துள்ள ஜானி ஜான் கான் சாலையே போர்க்களமாக காட்சியளித்தது.&nbsp; நக்கீரன் அலுவலகம் அதிமுக தொண்டர்களால் காலை 10 மணி முதல் தொடர்ந்து தாக்கப் பட்டு வருகிறது.&nbsp; இந்தத் தாக்குதலுக்கான காரணம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறு வெற்றி&#8230;.'),
            thumbnail:'/images/2848/04_01_2012_001_030-150x150.jpg',
            categories:['default',''],
            href:"/default/2012/01/05/post2848.html",
            publishDate:"Jan 5, 2012",
            summary:$sce.trustAsHtml("இன்னும் எவ்வளவுதான் வேண்டும் என்ற கட்டுரையில் சவுக்கு அரசு விருப்புரிமைக் கோட்டாவில் வீட்டு மனை ஒதுக்கீடு பெற்ற உயர் உயர் அதிகாரிகள் நெற்குன்றம் வீட்டு வசதி வாரிய “Own your house” என்ற திட்டத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்ன ஒரு ஆண்டு !!!!'),
            thumbnail:'/images/2830/a2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/31/post2830.html",
            publishDate:"Dec 31, 2011",
            summary:$sce.trustAsHtml("2011 தமிழகத்தைப் பொறுத்தவரை ஒரு திருப்புமுனை ஆண்டாகவே அமைந்தது.&nbsp;&nbsp; 2010 முடியும் போது, புதிய ஆண்டில் திமுக ஆட்சியிலிருந்து விடிவு காலம் பிறக்குமா&nbsp; என்ற எதிர்ப்பார்ப்பு மிக மிக அதிகமாக இருந்தது. அடுத்த ஆண்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டிஎன்பிஎஸ்சி வழக்கு என்ன ஆகும் ?'),
            thumbnail:'/images/2825/TN_Public_Servi12162-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/24/post2825.html",
            publishDate:"Dec 24, 2011",
            summary:$sce.trustAsHtml("கடந்த ஒரு வாரமாகவே எதிர்ப்பார்க்கப் பட்டு வந்த காவல்துறை அதிகாரிகளின் மாற்றம் இன்று இரவு வெளியிடப்பட்டது.&nbsp;&nbsp; இந்த உத்தரவின் படி,&nbsp; &nbsp;கோவை மாநகர கமிஷனராக இருந்த அம்ரேஷ் பூரி சென்னை உளவுத்துறை ஐஜி யாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சசிகலா : கதைகளுக்குப் பஞ்சமில்லை..'),
            thumbnail:'/images/2821/sasi1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/23/post2821.html",
            publishDate:"Dec 23, 2011",
            summary:$sce.trustAsHtml("ஜெயலலிதா தன்னுடைய 30 ஆண்டு கால உயிர்த்தோழி சசிகலாவை விலக்கி வைத்தாலும் வைத்தார், தமிழ்நாட்டில் உருவாகியுள்ள கதைகளுக்குத் துளியும் பஞ்சமில்லை.&nbsp;&nbsp; சாதாரண டீக்கடை முதல், உயர் உயர் அதிகாரிகள் முதல்,&nbsp; தொழிலதிபர்கள் வரை ஒவ்வொரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போஸ்ட் மார்ட்டம் : மிஷன் இம்பாஸிபிள்'),
            thumbnail:'/images/2816/MI4-banner004-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/22/post2816.html",
            publishDate:"Dec 22, 2011",
            summary:$sce.trustAsHtml("Mission: Impossible&nbsp;Ghost Protocol முதன் முதலில் Mission: impossible அமெரிக்காவில் 60 களில் தொலைக்காட்சி தொடராகத்தான் ஆரம்பம் ஆனது.இதை எழுதி தயாரித்தவர் Bruce Geller.இதனால் இவருடைய பெயர் நேற்று வெளியான Mission : impossible..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒழிந்ததா மன்னார்குடி மாஃபியா ?'),
            thumbnail:'/images/2804/sasi1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/20/post2804.html",
            publishDate:"Dec 20, 2011",
            summary:$sce.trustAsHtml("﻿வாழ்த்துக்கள் ஜெயலலிதா என்றுதான் இந்தக் கட்டுரையை தொடங்க வேண்டும் என்று விருப்பம்.&nbsp; ஆனால் அப்படித் தொடங்குவதற்கு பெரும் தயக்கம் வருவதற்கு காரணம், கடந்த கால வரலாறு.&nbsp; நடராஜன் நீக்கம், தினகரன் நீக்கம் என்று போயஸ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('100 கோடி வேணுமாம்…. !!!!'),
            thumbnail:'/images/2788/23-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/17/post2788.html",
            publishDate:"Dec 17, 2011",
            summary:$sce.trustAsHtml("யாருக்கு 100 கோடி என்கிறீர்களா…. டைம்ஸ் ஆப் இந்தியா நாளேட்டுக்குத்தான் 100 கோடி வேண்டுமாம்.&nbsp; தமிழ்நாட்டில், தமிழனின் உழைப்பில் வியாபாரம் நடத்திப் பிழைக்கும் டைம்ஸ் ஆப் இந்தியா நாளேட்டின் சென்னைப் பதிப்பு அலுவலகத்தில், மலையாளிகளின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மலையாள மொழி வெறியில் மரணித்த நடுநிலை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/12/17/post2786.html",
            publishDate:"Dec 17, 2011",
            summary:$sce.trustAsHtml("Rising emotions, falling objectivity, the truth behind Mullaiperiyar coverage in Chennai newsroomsBy&nbsp;Radhika Giri 17 Dec 2011Posted 05-Dec-2011&nbsp;Vol 2 Issue&nbsp;48Closely following the reportage in the various..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டைம்ஸ் ஆப் இந்தியா தமிழின விரோத பத்திரிக்கையா ?'),
            thumbnail:'/images/2785/Times_of_India_08.02.2007-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/16/post2785.html",
            publishDate:"Dec 16, 2011",
            summary:$sce.trustAsHtml("தி வீக் என்ட் லீடர் என்ற இணையதளத்தில் கடந்த வாரம்,&nbsp; “தி எம் ஃபேக்டர்” என்ற தலைப்பில்&nbsp; ஒரு ராதிகா கிரி என்ற பத்திரிக்கையாளர் எழுதிய கட்டுரை ஒன்று வெளியாகியிருந்தது.Rising emotions, falling objectivity,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக கான்ஸ்டபிளின் நிலை'),
            thumbnail:'/images/2782/AgxNpUECMAEQl2l-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/16/post2782.html",
            publishDate:"Dec 16, 2011",
            summary:$sce.trustAsHtml("தமிழக காவல்துறையில் உள்ள கான்ஸ்டபிளின் நிலை இதுதான். &nbsp;&nbsp;அரசு வேலை வேண்டும் என்பதற்காக காவல்துறை பணியில் சேர்ந்த காவலரின் நிலையைப் பார்த்தீர்களா. இதற்காகவா மக்களின் வரிப்பணத்தில் இந்த கான்ஸ்டபிளுக்கு சம்பளம் கொடுக்கப் படுகிறது. &nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போராடும் விவசாயிகளின் கையையும் காலையும் உடைக்கச் சொல்லும் ஐஜி ராஜேஷ் தாஸ்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/12/15/post2780.html",
            publishDate:"Dec 15, 2011",
            summary:$sce.trustAsHtml("முல்லைப் பெரியாறு அணை, தமிழகமெங்கும் பற்றியெரியும் பிரச்சினையாக உருவெடுத்துள்ளது நம் அனைவருக்கும் தெரியும். &nbsp; தன்னிச்சையாக அரசியல் சார்பில்லாமல் வெகுண்டெழுந்த விவசாயிகள் தங்கள் உரிமையை நிலைநாட்ட தேனி மாவட்டத்தில் தொடர்ந்து போராட்டம் நடத்தி வருவதையும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போஸ்ட் மார்டம்'),
            thumbnail:'/images/2779/jhana-sir-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/15/post2779.html",
            publishDate:"Dec 15, 2011",
            summary:$sce.trustAsHtml("சவுக்கில் திரைப்பட விமர்சனங்களை எழுதினால் என்ன என்று பல நண்பர்கள் தொடர்ந்து வலியுறுத்தி வந்தாலும், சினிமா பற்றிய ஆழ்ந்த பார்வையும் புரிதலும் இருக்க வேண்டும் என்பதில் சவுக்கு தீர்மானமாக இருந்தது. மேலும், திரைப்படங்களை அலசி&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சென்னை திரும்புகிறார் ஜாங்கிட்.. .. .. ..'),
            thumbnail:'/images/2772/Jangid_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/15/post2772.html",
            publishDate:"Dec 15, 2011",
            summary:$sce.trustAsHtml("இந்த ஜாங்கிட்டின் வண்டவாளங்கள் பற்றிய விரிவான கட்டுரையை சவுக்கு ஏற்கனவே, “ஜெகஜ்ஜாலக் கில்லாடி ஜாங்கிட்” என்ற தலைப்பில் எழுதியிருந்தது.&nbsp;&nbsp; தற்போது இந்த ஜாங்கிட் லண்டன் மாநகருக்கு பயிற்சிக்காக சென்றுள்ளார். லண்டன் மாநகரில் பயிற்சிக்கு சென்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வல்லான் வகுத்ததே வாய்க்கால்… !!!'),
            thumbnail:'/images/2770/324343-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/13/post2770.html",
            publishDate:"Dec 13, 2011",
            summary:$sce.trustAsHtml(" கடந்த ஆண்டு ஏப்ரல் 2010ல் சிபிஐ அதிகாரிகள், மருத்துவக் கவுன்சிலின் தலைவராக இருந்த கேத்தன் தேசாய் என்பவரை, ஒரு மருத்துவக் கல்லூரிக்கு அனுமதி வழங்குவதற்கு 2 கோடி ரூபாய் லஞ்சம் வாங்கும்போது கையும் களவுமாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எல்லா சாலைகளும் லோக்பாலை நோக்கி….'),
            thumbnail:'/images/2759/2011_8largeimg203_Aug_2011_050101467-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/12/post2759.html",
            publishDate:"Dec 12, 2011",
            summary:$sce.trustAsHtml("அந்தப் போராட்டத்துக்குப் பிறகு, பாராளுமன்றத்தின் அன்னா ஹசாரே போராட்டம் குறித்து நடந்த விவாதத்தை அன்னா ஹசாரே குழுவினர் ஆழமாக பரிசீலித்து, அரசியல்வாதிகள் துணையின்றி, லோக்பால், சட்டமாக உருவாகாது என்பதை புரிந்து கொண்டனர்.&nbsp;&nbsp; கடந்த முறை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேசத்தின் மனசாட்சியா ?'),
            thumbnail:'/images/2747/DSC_5276-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/08/post2747.html",
            publishDate:"Dec 8, 2011",
            summary:$sce.trustAsHtml(" இன்று டெல்லி சிபிஐ நீதிமன்றம் சுப்ரமணியன் சுவாமியை டிசம்பர் 17 அன்று 2ஜி வழக்கில் உள்துறை அமைச்சர் ப.சிதம்பரத்துக்கு எதிராக சாட்சி சொல்ல உத்தரவிட்டிருக்கிறது.&nbsp; சுப்ரமணியன் சுவாமி 17 அன்று சொல்லும் சாட்சியின் அடிப்படையில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருப்பு ஆடுகள்.. … …'),
            thumbnail:'/images/2744/IMG_5136-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/05/post2744.html",
            publishDate:"Dec 5, 2011",
            summary:$sce.trustAsHtml(" எந்தத் துறையில் தான் கருப்பு ஆடுகள் இல்லை ?&nbsp; எல்லா துறைகளிலும் உள்ளது போலவே, கருப்பு ஆடுகள் வழக்கறிஞர்களிலும் இருக்கின்றன.&nbsp; அப்படிப்பட்ட கருப்பு ஆடுகள் சில வெள்ளியன்று தீக்கதிர் பத்திரிக்கையின் புகைப்படக் கலைஞரை கடுமையாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கனி வந்தாச்சு !!!!!  பாகம் 2'),
            thumbnail:'/images/2736/42102608Deiva-Thirumagan-Movie-Stills-31-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/03/post2736.html",
            publishDate:"Dec 3, 2011",
            summary:$sce.trustAsHtml(" சென்னை விமான நிலையம் சிஐடி காலனிகனிமொழியை பார்க்க வந்த திமுக அடிமைகள்பகுத்தறிவுப் பகலவன் வீட்டில் உடைக்கப் பட்ட திருஷ்டி பூசணிக்காய்ஆரத்திஜெகதரட்சகன் வந்த 2 கோடி ரூபாய் போர்ஷ் கார்கனிமொழியை புகைப்படமெடுக்க போட்டி போடும் பத்திரிக்கையாளர்கள்ஒரே நாளில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கனி வந்தாச்சு !!!!'),
            thumbnail:'/images/2698/IMG_5143-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/03/post2698.html",
            publishDate:"Dec 3, 2011",
            summary:$sce.trustAsHtml("கனிமொழியின் வருகையை ஒட்டி, திமுக செய்திருந்த தடபுடலான ஏற்பாடுகள் குறித்த பிரத்யேக புகைப்படத் தொகுப்பு.  மானமிகு வா... மனமிகு வா..&nbsp;  விஜயா தாயன்பன் துரை வகையறாக்களுக்கு சவுக்கு சொல்லும் அறிவுரை..&nbsp; நெக்ஸ்ட் டைம் இன்னும் பெட்டரா திங்க்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இப்படியும் நடக்கும்.'),
            thumbnail:'/images/2659/Jun-22-d-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/02/post2659.html",
            publishDate:"Dec 2, 2011",
            summary:$sce.trustAsHtml("முதல் காட்சி : ஜெயலலிதா தனது அதிகாரிகள் மற்றும் அமைச்சர்களோடு ஆலோசனை நடத்துகிறார்.&nbsp;(கூட்டம் தொடங்குகிறது.&nbsp; முதலமைச்சர் வருவதற்கு முன்பாகவே, சீப் செக்ரட்டரி தேபேந்திரநாத் சாரங்கி, உளவுத் துறை தலைவர் ராமானுஜம், அரசு தலைமை வழக்கறிஞர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சீரழித்தவர் சிக்கிக் கொண்டார்.'),
            thumbnail:'/images/2640/IMG_1223-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/12/01/post2640.html",
            publishDate:"Dec 1, 2011",
            summary:$sce.trustAsHtml("05.05.2003.&nbsp;&nbsp; அன்று தமிழகத்தின் பிரபலத் தயாரிப்பாளரும், இயக்குநர் மணி ரத்னத்தின் சகோதரருமான ஜி.வி என்று அழைக்கப் படும் ஜி.வெங்கடேஸ்வரன் தற்கொலை செய்து கொண்டார்.&nbsp; பல்வேறு வெற்றிப் படங்களை தயாரித்திருந்த ஜி.வியா இப்படித் தற்கொலை செய்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வொய் திஸ் கொலவெறி&#8230;..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/11/30/post2631.html",
            publishDate:"Nov 30, 2011",
            summary:$sce.trustAsHtml(" நன்றி என்டிடிவி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பான கனிமொழி… ….'),
            thumbnail:'/images/2629/DSC_4400-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/29/post2629.html",
            publishDate:"Nov 29, 2011",
            summary:$sce.trustAsHtml("வணக்கம் கனிமொழி அவர்களே….&nbsp;&nbsp; நாளை முதன் முறையாக சிறையை விட்டு நீங்கள் வெளியே வரும்போது எப்படி உணர்வீர்கள் என்பது சவுக்குக்கு நன்றாகத் தெரியும். சவுக்கு அதை உணர்ந்திருக்கிறது. கடந்த காலங்களில் சென்னை சங்கமத்தின் ஒரு பகுதியாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தோட்டம் காக்க போட்ட வேலி பயிரைத் தின்பதோ… ….'),
            thumbnail:'/images/2615/July---11-d-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/27/post2615.html",
            publishDate:"Nov 27, 2011",
            summary:$sce.trustAsHtml("தோட்டம் காக்கப் போட்ட வேலி பயிரைத் தின்பதோ, அதைக் கேள்வி கேட்க ஆளில்லாமல் பார்த்து நிற்பதோ என்றார் கவிஞர் கண்ணதாசன்.&nbsp; இது யாருக்குப் பொருந்துமோ இல்லையோ, தமிழக காவல்துறைக்கு நன்றாகவே பொருந்தும். ஜெயலலிதா ஆட்சிக்கு வந்தாலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழீழத் தேசியத் தலைவர் மேதகு வே.பிரபாகரனிற்கு தமிழ்மக்களின் பிறந்தநாள் வாழ்த்துக்கள்.'),
            thumbnail:'/images/2607/praba_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/26/post2607.html",
            publishDate:"Nov 26, 2011",
            summary:$sce.trustAsHtml("வல்வையின் வடிவே: தமிழர்வாசலின் நிமிர்வே ஜயா!சொல்லிய திசையில் சுடரும்சூரிய தேவே! தழுவும்மெல்லிய காற்றே: பாசம்மேலிடும் ஊற்றே: உன்னைஅள்ளியே அணைக்க ஆசைஆவலோடு உள்ளோம் வாராய்!00அற்றைத்திங்கள் நீதான்.அவ்வெண் நிலவும் நீதான்ஓற்றைக்காற்றும் நீதான்,ஓண்டமிழ்க் குரலும் நீதான்,கோற்றவைப் பிள்ளை நீதான்,கொடியர..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காப்பாற்றப் படுகிறாரா பிரமோத் குமார் ?'),
            thumbnail:'/images/2603/Pramod_Kumar_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/23/post2603.html",
            publishDate:"Nov 23, 2011",
            summary:$sce.trustAsHtml("பிரமோத் குமார். பீகார் மாநிலம் இவர் சொந்த ஊர்.&nbsp; தமிழ்நாட்டைச் சேர்ந்த ஐபிஎஸ் அதிகாரி இவர். &nbsp;&nbsp;&nbsp;மிக மிக திறமையானவர்.&nbsp; எதில் ?&nbsp;&nbsp; பெண்கள் விஷயத்தில்.&nbsp;&nbsp; தனக்கு கீழே பணியாற்றும் பெண் காவலராக இருந்தாலும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அம்மாவின் அன்புப் பரிசு'),
            thumbnail:'/images/2585/24348421-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/22/post2585.html",
            publishDate:"Nov 22, 2011",
            summary:$sce.trustAsHtml("நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீதும் நன்றும் பிறர் தர வாரா'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/11/21/post2583.html",
            publishDate:"Nov 21, 2011",
            summary:$sce.trustAsHtml("பழுது எண்ணும் மந்திரியின் பக்கத்துள் தெவ்வோர் எழுபது கோடி உறும்&#8217; என்பார் வள்ளுவப் பேராசான். அதாவது, தவறான ஆலோசனைகளைக் கூறுபவர்களை அரசன் பக்கத்தில் வைத்துக் கொண்டிருப்பது எழுபது கோடிப் பகைவர்கள் இருப்பதற்குச் சமம் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('3ஜி ஊழலில் கருணாநிதி மகளா ?'),
            thumbnail:'/images/2580/selvi334-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/20/post2580.html",
            publishDate:"Nov 20, 2011",
            summary:$sce.trustAsHtml(" தற்போது வெளி வர இருப்பது 2ஜி அல்ல.&nbsp;&nbsp; 3ஜி ஊழல். இந்த 3ஜி ஊழலில் சம்பந்தப் பட்டிருப்பது, மிகச் சிறந்த நெடுந்தொடர் நாயகியும், கருணாநிதியின் மற்றொரு மகளுமான செல்வி.&nbsp;&nbsp; இந்தச் செல்வியைப் பற்றி சவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அம்மாவின் பெருந்தன்மை'),
            thumbnail:'/images/2565/2359843-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/20/post2565.html",
            publishDate:"Nov 20, 2011",
            summary:$sce.trustAsHtml(" நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிட்டுக்கு மண் சுமந்த சொக்கனுக்கு விழுந்த அடி…. ….'),
            thumbnail:'/images/2561/Sep_10_a-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/18/post2561.html",
            publishDate:"Nov 18, 2011",
            summary:$sce.trustAsHtml(" பிட்டுக்கு மண் சுமந்து பிரம்படி பட்ட சொக்கனுக்கு விழுந்த அடி போல மக்களுக்கு அடி விழுந்திருக்கிறது. 2001ல் ஆட்சிக்கு வந்த ஜெயலலிதா அப்போதும் சொன்னது “கஜானா காலி” என்பதுதான்.&nbsp;&nbsp; உடனே தமிழினத் தலைவர் நான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆறு மாதங்கள்….'),
            thumbnail:'/images/2555/July---20-d-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/15/post2555.html",
            publishDate:"Nov 15, 2011",
            summary:$sce.trustAsHtml("அதிமுக அரசு பதவியேற்று ஆறு மாதங்கள் ஆகி விட்டன.&nbsp;&nbsp; புதிதாக பொறுப்பேற்ற அரசை ஆறு மாதங்கள் கழித்தே விமர்சனம் செய்ய வேண்டும் என்று எடுத்திருந்த முடிவை, முதல் வாரத்திலேயே மாற்றியது ஜெயலலிதா அரசு சமச்சீர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது மக்கள் ஆட்சியா ?'),
            thumbnail:'/images/2546/Kingfisher_Airlines-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/12/post2546.html",
            publishDate:"Nov 12, 2011",
            summary:$sce.trustAsHtml("WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யோக்கியன் வர்றான்.. சொம்ப எடுத்து உள்ள வையி….'),
            thumbnail:'/images/2534/AVN_KARUNA_120812f-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/11/post2534.html",
            publishDate:"Nov 11, 2011",
            summary:$sce.trustAsHtml("திமுக தலைவர் கருணாநிதியின் நேற்றைய அறிக்கையைப் படித்தால் இப்படித்தான் சொல்லத் தோன்றுகிறது. “உச்ச நீதிமன்ற நீதிபதிகளோ, குற்றஞ்சாட்டப்பட்டோர் மீது குற்றச்சாட்டுகள் பதிவு செய்யப்பட்ட தற்கு பிறகு ஜாமீன் மனுக்களை தாக்கல் செய்யலாம் என்றும், குற்றவியல் நடைமுறைச்சட்டம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாற்றாந்தாய் பிள்ளைகள்'),
            thumbnail:'/images/2529/23110203-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/10/post2529.html",
            publishDate:"Nov 10, 2011",
            summary:$sce.trustAsHtml(" நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இயக்கவியல் விதியை மீறிய ஜெயலலிதா.'),
            thumbnail:'/images/2527/J-Jayalalitha-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/09/post2527.html",
            publishDate:"Nov 9, 2011",
            summary:$sce.trustAsHtml("மாற்றத்தைத் தவிர மாறாதது எதுவுமில்லை என்பது இயக்கவியல் விதி.&nbsp; ஆனால், அந்த விதியை மாற்றுவேனே ஒழிய, நான் மாற மாட்டேன் என்பதை ஜெயலலிதா மீண்டும் நிரூபித்து உள்ளார்.&nbsp;நேற்று தமிழக அரசு வெளியிட்ட அரசாணையில் ஊரக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எளிதல்ல….'),
            thumbnail:'/images/2523/julian-assange-julian-assange-politics-wikileaks-whistleblow-political-poster-1291419465-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/07/post2523.html",
            publishDate:"Nov 7, 2011",
            summary:$sce.trustAsHtml("கடந்த சில நாட்களாக விக்கிலீக்ஸின் நிறுவனர், ஜுலியன் அசாஞ்சை அமெரிக்கா தலைமையிலான உலக நாடுகள் என்ன பாடு படுத்திக் கொண்டிருக்கின்றன என்பதை செய்திகளில் பார்த்திருப்பீர்கள். 2006ல் தொடங்கப் பட்ட விக்கிலீக்ஸ், இது வரை உலக அரசாங்கங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மறைப்பதற்கு எதுவுமில்லை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/11/05/post2512.html",
            publishDate:"Nov 5, 2011",
            summary:$sce.trustAsHtml("மாடலிங் மாணிக்கமாக ஜொலிக்க வேண்டும். சினிமாவில் வெல்வெட் கொடி கட்டிப் பறக்க வேண்டும். இந்த இரண்டு ஆசைகளைத் தவிர வேறெந்தப் பாவமும் செய்யாதவள் நான்! ஆனால், முதல் அடி எடுத்து வைக்கிறபோதே, தண்ணீர்த் தொட்டிக்குள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாளைய திமுகவின் தவிர்க்க முடியாத சக்தி &#8211;  கனிமொழி.'),
            thumbnail:'/images/2511/img3-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/05/post2511.html",
            publishDate:"Nov 5, 2011",
            summary:$sce.trustAsHtml("நாளைய திமுகவின் தவிர்க்க முடியாத சக்தி &#8211;&nbsp; கனிமொழி.&nbsp;&nbsp; இப்படி நாம் சொல்லவில்லை.&nbsp;&nbsp; ஜுனியர் விகடன் சொல்கிறது. இன்று ஜுனியர் விகடனில் வெளி வந்துள்ள கட்டுரையைப் படித்தால் படித்தோர் நெஞ்சம் உருகும்.&nbsp;&nbsp; மனமிரங்கும்.&nbsp; கண்கள் இரண்டும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழ் தேசிய முன்னணி மாநாடு.'),
            thumbnail:'/images/2508/TNF-Notice-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/04/post2508.html",
            publishDate:"Nov 4, 2011",
            summary:$sce.trustAsHtml("தமிழ் தேசிய முன்னணி மாநாடு வரும் 26 நவம்பர் 2011 அன்று மாலை 3 மணிக்கு ஈரோட்டில் நடைபெற உள்ளது.&nbsp;  Share this:Share on FacebookClick to share on TwitterClick to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உள்ளத்தில் நல்ல உள்ளம்…….'),
            thumbnail:'/images/2504/IMG_2197-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/03/post2504.html",
            publishDate:"Nov 3, 2011",
            summary:$sce.trustAsHtml("தலைப்புக்கு பிறகு வருவோம்.&nbsp; கடந்த இரண்டு நாட்களாக தமிழகம் மட்டுமல்லாமல், நீதிமன்றம் மற்றும் வழக்கறிஞர் வட்டாரங்களில் கடும் சர்ச்சையை ஏற்படுத்தியது நேற்று டைம்ஸ் ஆப் இந்தியா நாளேட்டில் வந்த செய்தி.&nbsp;&nbsp; அந்த செய்தியை எளிதான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாறினால்தானே ஆச்சர்யம் ?'),
            thumbnail:'/images/2495/2881301161_b3ab45afdd_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/02/post2495.html",
            publishDate:"Nov 2, 2011",
            summary:$sce.trustAsHtml("ஜெயலலிதாவுக்கு வரலாறு காணாத வெற்றியை 2011 தேர்தலில் மக்கள் அளித்தார்கள்.&nbsp;&nbsp;&nbsp; எம்.ஜி.ஆர் நினைத்திருந்தால் கூட இத்தனை பெரிய வெற்றியை பெற்றிருக்க முடியுமா என்பது சந்தேகமே.&nbsp;&nbsp;&nbsp;&nbsp; அந்த வெற்றிக்கு பிறகு, ஜெயலலிதாவின் அணுகு முறையில் மாற்றம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவர்கள் இதற்கு சரிப்பட்டு வரமாட்டார்கள்.'),
            thumbnail:'/images/2480/archive_9112-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/01/post2480.html",
            publishDate:"Nov 1, 2011",
            summary:$sce.trustAsHtml("தற்போது இந்த விவகாரம் மீண்டும் விவாதத்துக்கு வந்திருக்கும் காரணம் எச்எஸ்பிசி வங்கியின் சுவிட்சர்லாந்து கிளையில் கணக்கு வைத்திருக்கும் 782 நபர்களின் பட்டியலை ப்ரான்சு நாட்டு அரசாங்கம் இந்தியாவிடம் ஒப்படைத்திருக்கிறது.&nbsp; இந்தப் பட்டியல் கடந்த ஆண்டே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழத் தமிழருக்காக விடுதலைச் சிறுத்தைகள் போராடுவதை விரும்பாத சக்திகள் &#8211; திருமா பேட்டி இரண்டாம் பாகம்'),
            thumbnail:'/images/2476/DSC_6640-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/11/01/post2476.html",
            publishDate:"Nov 1, 2011",
            summary:$sce.trustAsHtml("&nbsp; சவுக்கு : தலித் ஒருங்கிணைப்பு தலித்துகளுக்கு அரசியல் அதிகாரம் வழங்குவதை சாத்தியப் படுத்துமா, அல்லது தமிழ் தேசிய அரசியல் சாத்தியப் படுத்துமா ?&nbsp;தமிழ்தேசிய அரசியல் என்பது தலித் வளையத்தை தாண்டியுள்ள ஜனநாயக சக்திகளையும் வென்றெடுப்பதற்கான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பத்திரிக்கையாளர்கள் கவனத்திற்கு'),
            thumbnail:'/images/2472/13-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/25/post2472.html",
            publishDate:"Oct 25, 2011",
            summary:$sce.trustAsHtml("நண்பர்களே, என்னுடைய அழைப்பை ஏற்று இங்கே வருகை தந்ததற்கு நன்றி தெரிவித்துக் கொள்கிறேன்.&nbsp;&nbsp; நான் சமீபத்தில் தான் பத்திரிக்கை கவுன்சிலின் தலைவராக பொறுப்பேற்றேன்.&nbsp;&nbsp; இதற்கு முன்பு 40 வருடங்கள் சட்ட உலகத்தில், 20 வருடங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு விசித்திர வழக்கு.'),
            thumbnail:'/images/2468/IMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/23/post2468.html",
            publishDate:"Oct 23, 2011",
            summary:$sce.trustAsHtml(" இந்திய நீதிமன்றங்களில் ஆண்டுக்கணக்கில் வழக்குகள் தேங்கிக் கிடப்பதும், இதில் சம்பந்தப்பட்டவர்கள் அலைகழிக்கப் படுவதும் ஒன்றும் புதிதல்ல.&nbsp; ஆனால் நீதிமன்றத்தில் ஆண்டுக்கணக்கில் நிலுவையில் இருக்கும் ஒரு வழக்கை பயன்படுத்தி நீதிமன்றத்தையும் ஏமாற்றி ஒரு பெரிய சொத்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது நியாயமல்ல….'),
            thumbnail:'/images/2463/Kanimozhi_photo-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/22/post2463.html",
            publishDate:"Oct 22, 2011",
            summary:$sce.trustAsHtml(" சவுக்கில் ஏற்கனவே கனிமொழி மீதும் சரத்குமார் மீதும் நம்பிக்கை மோசடிக்கான இந்திய தண்டனைச் சட்டப் பிரிவு 409 பொருந்தாது என்பது குறித்து, புரிய வேண்டியவருக்கு புரிந்து விட்டது என்ற கட்டுரையில் விரிவாக எழுதப் பட்டிருந்தது.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சீசரின் மனைவி……'),
            thumbnail:'/images/2460/DSC04708-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/21/post2460.html",
            publishDate:"Oct 21, 2011",
            summary:$sce.trustAsHtml("சீசரின் மனைவி சந்தேகத்திற்கு அப்பாற்பட்டவளாக இருக்க வேண்டும். கிறித்துவுக்கு முந்தைய 63ம் ஆண்டில், ஜுலியஸ் சீஸர் ரோம் சாம்ராஜ்யத்தின் தலைமை போதகராக தேர்ந்தெடுக்கப் படுகிறார்.&nbsp; இதற்காக அவருக்கு அரசாங்கத்தால் ஒரு வீடு ஒதுக்கப் படுகிறது.&nbsp;&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேடி சகோதரர்கள் கைது எப்போது ?'),
            thumbnail:'/images/2454/selvi-serial1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/17/post2454.html",
            publishDate:"Oct 17, 2011",
            summary:$sce.trustAsHtml(" அவர்கள் கைது செய்யப் படப் போவதே இல்லை.&nbsp; என்ன இது என்று ஆச்சர்யமாகப் பார்க்கிறீர்களா ?&nbsp; ஆம், நேற்று கேடி சகோதரர்கள் கைது செய்யப் படக் கூடாது என்று காலை முதல் பிற்பகல் வரை,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுப்ரமணிய சாமித் தேவர் ????'),
            thumbnail:'/images/2449/DSC_5196-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/17/post2449.html",
            publishDate:"Oct 17, 2011",
            summary:$sce.trustAsHtml("சென்னை தேவர் மண்டபத்தில் முக்குலத்தோர் முழக்கம் என்ற சிடி வெளியீட்டு விழா நடந்தது.&nbsp; இந்த சிடியை பாடி கவுரவித்திருப்பவர் கருணாஸ்.&nbsp;&nbsp;&nbsp; இந்த சிடி சுப்ரமணிய சுவாமியால் வெளியிடப் பட்டது.&nbsp;&nbsp; இந்நிகழ்ச்சியில் பேசிய பசும்பொன் பைன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('-சிறையிலிருந்து நளினி எழுதும் கண்ணீர் டைரி  பாகம் 3'),
            thumbnail:'/images/2445/nalini_3_small-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/16/post2445.html",
            publishDate:"Oct 16, 2011",
            summary:$sce.trustAsHtml("வார்த்தைகள் போதாதென்று, இரவு முழுவதும் இப்படி உட்காரவிடாமல் நிற்க வைப்பது, தனியொரு மரண வேதனையாக இருக்கும். கால் வலியோடு, நா வறண்டு, உயிர் பிரிவதுபோன்ற மயக்கம் வரும். ஒருவழியாக, விடியற்காலை 4 அல்லது 4.30..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் இப்படிச் செய்தீர்கள் கண்ணாயிரம் ?'),
            thumbnail:'/images/2443/Rajendran_T_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/16/post2443.html",
            publishDate:"Oct 16, 2011",
            summary:$sce.trustAsHtml(" ஒரு 15 அல்லது 20 நாட்களுக்கு முன்னால், ஜெயலலிதா பெங்களுரு நீதிமன்றத்தில் நேரில் ஆஜராக வேண்டும் என்று உச்சநீதிமன்றம் தீர்ப்பளித்த ஒரு சில நாட்களில், &nbsp;சசிகலாவின் கணவர் நடராஜன் ஒரு முக்கியமான கூட்டத்தை கூட்டியிள்ளார்.&nbsp;&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரமக்குடி சம்பவம்.  உண்மை அறியும் குழு அறிக்கை'),
            thumbnail:'/images/2438/parama_notice_6-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/12/post2438.html",
            publishDate:"Oct 12, 2011",
            summary:$sce.trustAsHtml("பரமக்குடி சம்பவம் தொடர்பாக, மக்கள் கலை இலக்கியக் கழகம், மனித உரிமை கண்காணிப்பகம் என்று தொடர்ச்சியாக உண்மை அறியும் குழு அறிக்கைகள் வந்த வண்ணம் இருக்கின்றன. அந்த வகையில் தமிழக மக்கள் உரிமைக் கழகத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கைப்புள்ள ஸ்டாலின்'),
            thumbnail:'/images/2436/STALIN-WRAPPER-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/12/post2436.html",
            publishDate:"Oct 12, 2011",
            summary:$sce.trustAsHtml(" கைப்புள்ள ஸ்டாலின் என்ற தலைப்பிலேயே அன்பு பதிப்பகம் சார்பில் புதிய புத்தகம் வெளியாகியுள்ளது.&nbsp; இந்தப் புத்தகத்தில் எழுத்துக்களை விட ஆவணங்கள் அதிகமாக உள்ளது.&nbsp; உள்ளாட்சித் துறையை தன் வசம் வைத்திருந்த ஸ்டாலினின் உள்ளாட்சித் துறையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கட்சி விரோத நடவடிக்கைகளுக்காக பரிதி இளம்வழுதி நீக்கம்'),
            thumbnail:'/images/2433/Dinakaran.com-Election_2011_18888491393-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/11/post2433.html",
            publishDate:"Oct 11, 2011",
            summary:$sce.trustAsHtml(" கடந்த வாரம் திமுக தலைவர் கருணாநிதிக்கு பரிதி இளம்வழுதி எழுதிய கடிதத்தில் “தாங்கள் எடுத்துள்ள நடவடிக்கை காரணமாக உட்கட்சி ஜனநாயகத்தில் எனது சுயமரியாதையைக் காப்பாற்றிக் கொள்ள கழகத்தின் துணைப் பொதுச் செயலாளர் பதவியில் இருந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சர்ச்சைக்கு பதில்'),
            thumbnail:'/images/2427/_MG_0229-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/11/post2427.html",
            publishDate:"Oct 11, 2011",
            summary:$sce.trustAsHtml("இது போன்ற சர்ச்கைகள், திராவிட இயக்க ஆய்வாளர் க.திருநாவுக்கரசு அவர்களை, ஜெயமோகனின் நூலுக்கு எதிர்வினையாக ஒரு புதிய நூலையே வெளியிட வைத்திருக்கிறது.&nbsp; ஜெயமோகனுக்கு பதில் சொல்லும் விதமாக “இன்றைய காந்தி &nbsp;&nbsp;யார் ?” என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சோதனை மேல் சோதனை….'),
            thumbnail:'/images/2418/DSC_0357-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/10/post2418.html",
            publishDate:"Oct 10, 2011",
            summary:$sce.trustAsHtml(" கேடி சகோதரர்களின் வீடுகளில் இன்று சிபிஐ சோதனையை தொடங்கி நடத்தி வருகிறது.&nbsp;&nbsp; தயாநிதி மாறன், கலாநிதி மாறன், மேக்சிஸ் முதலாளி அனந்த கிருஷ்ணன் மற்றும் ஆஸ்ட்ரோ தலைமை நிர்வாகி ரால்ப் மார்ஷல் ஆகியோர் மீது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெகஜ்ஜாலக் கில்லாடி ஜாங்கிட்..'),
            thumbnail:'/images/2412/Jangid_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/09/post2412.html",
            publishDate:"Oct 9, 2011",
            summary:$sce.trustAsHtml("  இரண்டு ஆண்டுகளுக்கு முன்னால் சென்னை விமான நிலையத்தில் வாகன நிறத்த காண்ட்ராக்ட் எடுத்திருந்த நவ்பாரத் என்டர்பிரைசஸ் என்ற நிறுவனத்தில் சிபிஐ அதிகாரிகள் சோதனை நடத்தினார்கள்.&nbsp; அந்த சோதனையின் போது, விமானநிலைய காவல்நிலையத்திலும், புறநகர் காவல்துறையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திராவிடக் கட்சிகள் தலித்துகளுக்கு துரோகம் இழைத்துள்ளன – தொல் திருமாவளவன்.'),
            thumbnail:'/images/2401/DSC_6635-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/06/post2401.html",
            publishDate:"Oct 6, 2011",
            summary:$sce.trustAsHtml("தமிழக அரசியல் சூழலில் பல ஆண்டு காலமாக தலித் மக்களுக்கு உரிய பிரதிநிதித்துவம் தராமல், வெறும் வாக்கு வங்கிகளாக மட்டுமே பயன்படுத்தி வந்த நிலையில், தலித் மக்களின் குரலை புறக்கணிக்க முடியாத சக்தியாக மாற்றிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரமக்குடி தாக்குதல் வீடியோ.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/10/02/post2398.html",
            publishDate:"Oct 2, 2011",
            summary:$sce.trustAsHtml("கீழ்காணும் வீடியோ, எடிட் செய்யப் படாத அசல் வீடியோ. &nbsp; பரமக்குடி பற்றிய முந்தைய பதிவில், பதிப்பிக்கப் பட்ட புகைப்படங்கள் எடிட் செய்யப் பட்டுள்ளன என்று சில குற்றச் சாட்டுகள் சுமத்தப் பட்டதால், அந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்ன ஒரு கரிசனம் ?'),
            thumbnail:'/images/2396/jaya3434-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/10/01/post2396.html",
            publishDate:"Oct 1, 2011",
            summary:$sce.trustAsHtml(" நேற்று சென்னை உயர்நீதிமன்றம், ஜெயலலிதா மீதான பிறந்த நாள் பரிசு வழக்கின் குற்றப் பத்திரிக்கையை ரத்து செய்து தீர்ப்பளித்துள்ளது.&nbsp; இந்த வழக்கில் எப்ஐஆர் பதிவு செய்யவே 4 ஆண்டுகள் தாமதம் ஆனதோடு மட்டுமல்லாமல் புலனாய்வை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வம்புச்  செல்வன் ஐபிஎஸ்'),
            thumbnail:'/images/2394/Senthilvelan__IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/29/post2394.html",
            publishDate:"Sep 29, 2011",
            summary:$sce.trustAsHtml(" தமிழக காவல்துறையில் வம்புச் செல்வன் என்று ஒரு அதிகாரி இருக்கிறார். இந்த வம்புச் செல்வன்தான் பரமக்குடி துப்பாக்கிச் சூட்டுக்கு காரணமான செந்தில்வேலன் ஐபிஎஸ்.&nbsp;&nbsp; இவர் எம்பிபிஎஸ் படித்த டாக்டர். &nbsp;ராமநாதபுரம் மாவட்டத்தில் ஏற்கனவே எஸ்.பியாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்குக்கு பிரத்யேக பேட்டியளிக்கிறார் தொல்.திருமாவளவன்.'),
            thumbnail:'/images/2361/Thol.Thirumavalavan_-_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/29/post2361.html",
            publishDate:"Sep 29, 2011",
            summary:$sce.trustAsHtml(" 1.&nbsp;&nbsp;&nbsp; உங்கள் ஆரம்ப கால வாழ்க்கை பற்றிச் சொல்லுங்கள். 2.&nbsp;&nbsp;&nbsp; ஒரு சாதாரணமான குக்கிராமத்தில், பிறந்த நீங்கள், ஒடுக்கப்பட்ட மக்களுக்காக குரல் கொடுக்க வேண்டும் என்ற திட்டம் ஏதாவது இருந்ததா ? 3.&nbsp;&nbsp;&nbsp; தலித் மக்களின் விடுதலைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புத்திசாலி ராசா….'),
            thumbnail:'/images/2355/A_Raja_0098-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/29/post2355.html",
            publishDate:"Sep 29, 2011",
            summary:$sce.trustAsHtml("ஆனால், ராசா கைது செய்யப் பட்டதிலிருந்து, 2ஜி வழக்கின் விசாரணை தொடங்கி நடைபெறத் தொடங்கியது முதலே மிக மிக கவனமான அணுகுமுறையை கையாள்கிறார்.&nbsp;&nbsp; ராசா கைது செய்யப் பட்ட பிறகு, ஒட்டு மொத்த ஊழலுக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உளவுத்துறையிலிருந்து கண்ணாயிரம்  மாற்றம்'),
            thumbnail:'/images/2352/police-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/29/post2352.html",
            publishDate:"Sep 29, 2011",
            summary:$sce.trustAsHtml("உளவுத்துறையின் கூடுதல் டிஜிபியாக இருந்த கண்ணாயிரம் மாற்றப் பட்டுள்ளார். அவருக்கு புதிய பதவி ஏதும் வழங்கப் படவில்லை என்ற செய்தியை சவுக்கு கனத்த இதயத்தோடு பகிர்ந்து கொள்கிறது எப்படி இருந்த நான் இப்படி ஆயிட்டேனே... Share this:Share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தயாநிதி மீது விரைவில் எப்ஐஆர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/09/29/post2349.html",
            publishDate:"Sep 29, 2011",
            summary:$sce.trustAsHtml("2ஜி ஊழல் வழக்கில் முன்னாள் மத்திய அமைச்சர் தயாநிதி மாறன் மீது விரைவில் முதல் தகவல் அறிக்கை பதிவு (எஃப்.ஐ.ஆர்.) செய்யப்படுமென்று உச்ச நீதிமன்றத்தில் சிபிஐ புதன்கிழமை தெரிவித்துள்ளது. ÷2ஜி அலைக்கற்றை ஒதுக்கீடு முறைகேட்டில் தயாநிதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிரிந்த இதயங்கள் கூடிய போது 2'),
            thumbnail:'/images/2342/Jaffer_Jangid-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/28/post2342.html",
            publishDate:"Sep 28, 2011",
            summary:$sce.trustAsHtml("மதியம் 2.15 மணிக்கு ஜாபர் சேட் சாட்சி சொல்வதற்கு வந்தார்.&nbsp;&nbsp; அந்த நீதிமன்றம், வழக்கமான உயர்நீதிமன்றங்கள் போல இருக்காது.&nbsp;&nbsp; சாட்சிகளின் வாக்குமூலங்களை பதிவு செய்வதற்காக மட்டும் என்பதால், ஓய்வு பெற்ற அமர்வு நீதிபதிகளை, அந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிரிந்த இதயங்கள் கூடிய போது…..'),
            thumbnail:'/images/2338/27TH_JAFFAR_SAIT_734424e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/27/post2338.html",
            publishDate:"Sep 27, 2011",
            summary:$sce.trustAsHtml("நடிகர் திலகம் சிவாஜி நடித்த ஒரு படத்தில் ஒரு பாடல் காட்சியில் இந்த வரிகள் வரும்.&nbsp; பிரிந்த இதயங்கள் கூடிய போது…. பேச முடியவில்லையே…….&nbsp; என்று. அந்தப் பாடல் வரிகள் தான் கடந்த வாரம் நினைவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினி தொடர்: பாகம் -2 விடியாத இரவு&#8230;'),
            thumbnail:'/images/2337/nalini-story-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/27/post2337.html",
            publishDate:"Sep 27, 2011",
            summary:$sce.trustAsHtml(" ஊரெல்லாம் இருட்டு. சென்னையில் பிரதான ஏரியாவான ஆர்.ஏ. புரத்தின் க்ரீன்வேஸ் சாலையும் இருட்டாகத்தான் இருந்தது. என் கண்கள் தூக்கத்தைத் தேடினாலும், பக்கத்து அறையில் என் கணவர் மீது என்னவெல்லாம் சித்ரவதைகள் அரங்கேற்றப்படுகின்றனவோ என்ற பயம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புரிய வேண்டியவருக்கு புரிந்து விட்டது.'),
            thumbnail:'/images/2332/a-raja2_20110202-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/27/post2332.html",
            publishDate:"Sep 27, 2011",
            summary:$sce.trustAsHtml("இன்று புதுதில்லி சிபிஐ நீதிமன்றத்தில் புதிய மனு ஒன்றை சிபிஐ வழக்கறிஞர் யு.யு.லலித் தாக்கல் செய்தார்.&nbsp;&nbsp;&nbsp; அந்த மனுவின் படி, முன்னாள் தொலைத் தொடர்புத் துறை அமைச்சர் ஆ.ராசா, அவரின தனிச் செயலர் ஆர்.கே.சந்தோலியா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிமன்றங்கள் யாருக்காக ?'),
            thumbnail:'/images/2322/high_court-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/26/post2322.html",
            publishDate:"Sep 26, 2011",
            summary:$sce.trustAsHtml("ஆனால், பொதுமக்களையே ஒரு நீதிமன்றத்தில் அனுமதிக்காத ஒரு உத்தரவை எப்படி ஏற்றுக் கொள்ள முடியும் ? தலைமை நீதிபதியின் நீதிமன்றத்தில், வழக்கறிஞர்கள் மட்டும் அனுமதிக்கப் படுகிறார்கள்.&nbsp; பத்திரிக்கையாளர்கள் அடையாள அட்டை காண்பித்த பிறகு அனுமதிக்கப் படுகிறார்கள்.&nbsp;&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நான் பிரதமர் ஆக வேண்டாமா ?'),
            thumbnail:'/images/2315/078484-01-02-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/25/post2315.html",
            publishDate:"Sep 25, 2011",
            summary:$sce.trustAsHtml(" முதன் முதலாக 1969ல் ராஜ்யசபைக்கு காங்கிரஸ் கட்சி சார்பாக தேர்ந்தெடுக்கப் படுகிறார்.&nbsp;&nbsp; அதற்குப் பிறகு தொடர்ந்து பாராளுமன்ற உறுப்பினராக இருந்து வருகிறார்.&nbsp;&nbsp; 1973ல் இந்திரா அமைச்சரவையில் தொழில்துறை துணை அமைச்சராக பொறுப்பேற்கிறார்.&nbsp;எப்போதான் பிரதமர் ஆக்குவாங்களோ..1982..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வழக்கு போட்டு வம்பில் சிக்கிய ஜாபர்'),
            thumbnail:'/images/2303/04_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/23/post2303.html",
            publishDate:"Sep 23, 2011",
            summary:$sce.trustAsHtml("தி.மு.க. ஆட்சியில் தனி சாம்ராஜ்யத்தை நடத்திக் கொண்டிருந்த முன்னாள் உளவுத் துறை கூடுதல் டி.ஜி.பி.&nbsp; ஜாபர் சேட், இன்று சிக்கல்களுக்கு மேல் சிக்கல்களாக சந்தித்துக் கொண்டிருக்கிறார்.&nbsp; வீட்டு வசதி வாரிய த்தை ஏமாற்றி மோசடி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விஜயகாந்தின் வரலாற்றுத் தவறு.'),
            thumbnail:'/images/2300/VIJAYAKANTH_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/23/post2300.html",
            publishDate:"Sep 23, 2011",
            summary:$sce.trustAsHtml("ண்டுக்குள் 8.36 சதவிகித வாக்குகளை பெற்ற விஜயகாந்த் இரண்டு கட்சிகளிடமும் மரியாதையை மட்டுமல்ல, அச்சத்தையும் ஏற்படுத்தினார்.&nbsp;2009 நாடாளுமன்றத் தேர்தலில் 10 சதவிகித வாக்குகளைப் பெற்று விஜயகாந்தை புறக்கணித்து விட்டு, தமிழகத்தில் தேர்தலை சந்திக்கும் கட்சி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறை செல்கிறாரா செட்டி நாட்டு சீமான்'),
            thumbnail:'/images/2294/chidambaram2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/23/post2294.html",
            publishDate:"Sep 23, 2011",
            summary:$sce.trustAsHtml("2ஜி ஊழல் வழக்கு எப்படி உச்ச நீதிமன்றத்தின் தலையீட்டுக்கு பிறகு சூடு பிடித்தது என்பதை நாம் அனைவரும் அறிவோம். &nbsp; &nbsp;2ஜி வழக்கில் எப்ஐஆர் போடப்பட்டு, 11 மாதங்களுக்குப் பிறகு சாவகாசமாக தொலைத் தொடர்புத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது கூட தெரியதா கருணாநிதிக்கு'),
            thumbnail:'/images/2285/01.Photo-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/22/post2285.html",
            publishDate:"Sep 22, 2011",
            summary:$sce.trustAsHtml("தனியார் அமைப்பிடம் முன்னாள் உளவுத்துறை அதிகாரி ஜாபர்சேட் விருது பெற்ற விவகாரம், தற்போது அவருக்கு பெரும் தலைவலியை ஏற்படுத்தியிருக்கிறது. இந்த&nbsp; விருதின் பின்னணியைத் தோண்டத் தோண்ட பகீர் தகவல்கள் அணிவகுத்து நிற்கின்றன.&nbsp;தமிழக முன்னாள் உளவுத்துறை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடியாத இரவுகள் &#8211; சிறையிலிருந்து நளினி எழுதும் கண்ணீர் தொடர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/09/22/post2283.html",
            publishDate:"Sep 22, 2011",
            summary:$sce.trustAsHtml("விடியாத இரவுசிறையிலிருந்து நளினி எழுதும் திடுக் தொடர்!அன்பான சகோதர சகோதரிகளே! இந்தத் தொடரின் மூலம் உங்களைச் சந்திப்பதில் பெரு மகிழ்ச்சி கொள்கிறேன். 21 ஆண்டுகளாக, சிறைக் கம்பிகளும், கான்கிரீட் சுவர்களுமே எனக்கு நண்பர்கள். வெளி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தள்ளிக்கோட்டை ராஜுத் தேவர் பாலு'),
            thumbnail:'/images/2280/3130-1606-t-r-balu-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/19/post2280.html",
            publishDate:"Sep 19, 2011",
            summary:$sce.trustAsHtml("ஆனால் திமுகவின் மிகப்பெரிய முதலை யார் தெரியுமா ?&nbsp; தள்ளிக்கோட்டை ராஜுத் தேவர் பாலுதான். &nbsp;&nbsp;இவர்களை விட மாறன் சகோதரர்கள் பெரிய முதலை என்றாலும், டிஆர்.பாலு, யுபிஏ.1 அரசாங்கத்தில் சம்பாதித்தது போல யாரும் சம்பாதிக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  18'),
            thumbnail:'/images/2263/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/16/post2263.html",
            publishDate:"Sep 16, 2011",
            summary:$sce.trustAsHtml("தனக்குச் சொந்தமான இரண்டு ஏக்கர் நிலத்தை வைத்துக்கொண்டு அரசியல் வியாபாரத்தில் இறங்கிய இவர் இன்று சுமார் ஆயிரம் கோடிக்கு அதிபதி. மாம்பழ மாவட்டம்&nbsp; முழுவதையுமே தன் விரல் நுனியில் வைத்திருக்கும் வல்லமை படைத்தவர். ஆரம்ப..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக அரசு என்ன செய்ய வேண்டும் ?'),
            thumbnail:'/images/2261/IMG_8770-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/16/post2261.html",
            publishDate:"Sep 16, 2011",
            summary:$sce.trustAsHtml("தாமதமாக தொடங்கினாலும், இந்த சோதனை நடவடிக்கைகள் வரவேற்கத்தக்கதே.&nbsp;&nbsp; அதிமுக அரசுக்கு கிடைத்த வாக்குகள், திமுக தலைவர் மற்றும் அவர் குடும்பத்தினர் சேர்த்த சொத்துக்களின் மீதான கோபத்தின் காரணமாகவும் தான் என்பதை யாரும் மறுக்க முடியாது.&nbsp;முன்னெப்போதும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  17'),
            thumbnail:'/images/2257/06_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/15/post2257.html",
            publishDate:"Sep 15, 2011",
            summary:$sce.trustAsHtml(" சாதாரண கான்ஸ்டபிளாகச் சேர்ந்து கண்காணிப்புத் துணையாக அதிரடி வளர்ச்சி கண்டவர். இவருடன் சேர்ந்தவர்களில் பலர் இன்னும் எஸ்.ஐ. பதவியைக் கூட எட்டிப்&nbsp; பிடிக்க முடியவில்லை. இவரின் கடைக்கண் பார்வை பட்டால்தான் காவல்துறை உயரதிகாரிகளும் சரி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  16'),
            thumbnail:'/images/2255/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/15/post2255.html",
            publishDate:"Sep 15, 2011",
            summary:$sce.trustAsHtml("வாசகர்கள் மன்னிக்கவேண்டும். நான் என் பேரையும் சொல்லமுடியாது. நான் கிளினிக் வைத்திருந்த ஊரையும் சொல்லமுடியாது. காரணம் அந்த ஊரில் என் பேரும்,&nbsp; என் பேரில் அந்த ஊரும் பிணைந்து கிடக்கிறது. எனக்கும், அரசியலுக்கும் ஆரம்பத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரமக்குடி சம்பவம் &#8211; உண்மை அறியும் குழு அறிக்கை'),
            thumbnail:'/images/2254/THSHK_PARAMAKUDI_1_779809g-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/15/post2254.html",
            publishDate:"Sep 15, 2011",
            summary:$sce.trustAsHtml("பரமக்குடி வன்முறைச் சம்பவம் தொடர்பாக கள ஆய்வு செய்த மக்கள் கண்காணிப்பகக் குழுவின் இடைக்கால அறிக்கை. (காவல்துறையின் அதிகாரிகளை சந்திக்க முடியாததால் இது இடைக்கால அறிக்கை)&nbsp; ஆண்டுதோறும் செப்டம்பர் 11 அன்று, கொண்டாடப் படும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரமக்குடி துப்பாக்கிச் சூடு சம்பவ நீதி விசாரணை அறிக்கை'),
            thumbnail:'/images/2242/ImageLoader-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/14/post2242.html",
            publishDate:"Sep 14, 2011",
            summary:$sce.trustAsHtml(" 2002ம் ஆண்டு, 1 லட்சம் அரசு ஊழியர்கள் பதவி நீக்கம் செய்யப் பட்டது தொடர்பாக அமைக்கப் பட்ட மூன்று ஓய்வு பெற்ற நீதிபதிகள், போட்டி போட்டுக் கொண்டு, எப்படி அரசு ஊழியர்களை பதவி நீக்கம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('7 தலித்துகள் உயிரிழப்புக்கு காவல்துறை காரணமா ?'),
            thumbnail:'/images/2227/Natarajan-IAS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/12/post2227.html",
            publishDate:"Sep 12, 2011",
            summary:$sce.trustAsHtml("பரமக்குடி கலவரத்தையும், அதையொட்டி நடந்த உயிரிழப்பையும், இன்று சட்டமன்றத்தில் எதிர்க்கட்சிகள் விவாதித்தன. &nbsp;இதற்கு பதிலளித்துப் பேசிய செல்வி ஜெயலலிதா, பரமக்குடியில் ஒரு சுவரில், பசும்பொன் முத்துராமலிங்கத் தேவரை, இழிவாகக் குறிப்பிட்டு ஒரு சுவற்றில் எழுதப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐந்து தலித்துகளின் உயிர்ப் பலியை தவிர்த்திருக்க முடியுமா ?'),
            thumbnail:'/images/2188/001-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/11/post2188.html",
            publishDate:"Sep 11, 2011",
            summary:$sce.trustAsHtml(" இந்தக் கலவரத்துக்கான வித்து, தாழ்த்தப் பட்ட மக்களின் தலைவராகக்&nbsp; கருதும் இமானுவேல் சேகரன் என்பவரின் நினைவு நாளின் போது நடக்கும்&nbsp; நிகழ்ச்சியில் கலந்து கொள்ள, தலித் தலைவர் ஜான் பாண்டியன் கலந்து கொள்ளச் சென்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிமன்றங்கள் எதற்காக ?'),
            thumbnail:'/images/2182/Madras-High-Court1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/10/post2182.html",
            publishDate:"Sep 10, 2011",
            summary:$sce.trustAsHtml(" நேற்று சென்னை உயர்நீதிமன்றம் அளித்த ஒரு தீர்ப்பு அப்படிப் பட்டதுதான். &nbsp;மத்திய அரசு, ரகசியமாக ஜுன் மாதத்தில் ஒரு அறிவிப்பை வெளியிட்டது.&nbsp;&nbsp; அந்த அறிவிப்பின் படி, சிபிஐ தகவல் அறியும் உரிமைச் சட்ட வரம்பில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தூக்கிலிடப்படுவது ‘லைவ்’ ரிலே  ? ஒரு குரூரத் திட்டம்'),
            thumbnail:'/images/2176/8-26-2011-22-vellore-prison-receives-commun-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/10/post2176.html",
            publishDate:"Sep 10, 2011",
            summary:$sce.trustAsHtml(" 1999ம் ஆண்டு ராஜீவ் கொலை வழக்கில் நளினி, முருகன், சாந்தன் மற்றும் பேரறிவாளன் ஆகியோருக்கு உச்ச நீதிமன்றம் தூக்கு தண்டனையை உறுதி செய்ததிலிருந்தே இவ்வழக்கில் சம்பந்தப் பட்டவர்கள் மரணத்தை எதிர்நோக்கி காத்திருந்தனர்.&nbsp;&nbsp; 2000ம் ஆண்டில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தில்லி குண்டு வெடிப்பும் அப்சல் குருவும்.'),
            thumbnail:'/images/2173/54257_BnHover-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/09/post2173.html",
            publishDate:"Sep 9, 2011",
            summary:$sce.trustAsHtml(" 2011 செப்டம்பர் 7 அன்று பல உயிர்கள் பலியான ஒரு சில மணி நேரங்களிலேயே, அப்சல் குருவின் பெயர் இந்த விவசாரத்தில் இழுக்கப் பட்டுள்ளது.&nbsp;&nbsp;&nbsp; உண்மையானதா என்று சரிபார்க்கும் முன்பே, ஒரு மின்னஞ்சல் அப்சல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரண தண்டனையை ஒழிப்போம் 4'),
            thumbnail:'/images/2157/04ndgvb01_L-G_sends_128866f-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/08/post2157.html",
            publishDate:"Sep 8, 2011",
            summary:$sce.trustAsHtml("யார் இந்த அப்சல் குரு ?&nbsp;&nbsp;&nbsp; காஷ்மீரில் தீவிரவாதம் வேர் விட்டு வளரத் தொடங்கிய நேரத்தில், இளைஞனாக இருக்கும் துரதிருஷ்டத்தை பெற்றவர்தான் இந்த அப்சல் குரு.&nbsp; &nbsp;காஷ்மீர் சமுதாயத்தில் நிலவி வந்த அநீதிகளுக்கு எதிராக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மீண்டும் ஒரு குண்டு வெடிப்பு….'),
            thumbnail:'/images/2155/blast16-16-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/07/post2155.html",
            publishDate:"Sep 7, 2011",
            summary:$sce.trustAsHtml(" இந்தியாவில் வழக்கமான குண்டுவெடிப்பு மீண்டும் அரங்கேறியிருக்கிறது. மீண்டும் 11 அப்பாவி மக்கள் தங்களின் உயிரை இழந்திருக்கிறார்கள்.&nbsp; குண்டுவெடிப்புகளும், உயிர்ப்பலிகளும், அதைத் தொடர்ந்த விசாரணைகளும், தண்டனைகளும் தொடர்ந்து கொண்டுதான் இருக்கின்றன.&nbsp; ஆனால், குண்டுவெடிப்புகள் நின்றபாடில்லை.&nbsp;மற்ற நேரங்களில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கெட்டிக் கார ரெட்டிக்களும், பிஜேபியின் இரட்டை வேடமும்.'),
            thumbnail:'/images/2144/REDDY_BROTHERS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/05/post2144.html",
            publishDate:"Sep 5, 2011",
            summary:$sce.trustAsHtml("கர்நாடக சுரங்கத் தொழிலின் தாதாக்களான ரெட்டி சகோதரர்களில் சீனிவாச ரெட்டி மற்றும், ஜனார்த்தன ரெட்டி ஆகியோர் கைது செய்யப் பட்டுள்ளனர்.&nbsp; சட்ட விரோதமாக கனிம வளம் கடத்தியதாக இவர்கள் மீது சிபிஐ வழக்கு பதிவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  15'),
            thumbnail:'/images/2128/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/03/post2128.html",
            publishDate:"Sep 3, 2011",
            summary:$sce.trustAsHtml("காசு, பணம் சேர்ந்துவிட்டால் கரப்பான் பூச்சியும் காலாட்டிக்கிட்டு அதிகாரம் பண்ணும் என்பதைப் போல இவருக்கு காசு பணம் மட்டுமில்லை அதிர்ஷ்டக் குலுக்கலில்&nbsp; அதிகாரமும் கிடைத்துவிட்டது. அதுவரை பக்கிரியாக சுற்றித் திரிந்தவர் ஆண்டவனாக அவதாரம் எடுத்துவிட்டார்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரண தண்டனையை ஒழிப்போம் 3'),
            thumbnail:'/images/2127/par1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/03/post2127.html",
            publishDate:"Sep 3, 2011",
            summary:$sce.trustAsHtml(" 13 டிசம்பர் 2001.&nbsp; காலை 11.30 மணி. பாராளுமன்றத்தில் மழைக்காலக் கூட்டத் தொடர் நடந்து கொண்டு இருக்கிறது.&nbsp; ஆயுதம் தாங்கிய 5 நபர்கள் ஒரு அம்பாசிடர் காரில் பாராளுமன்ற வளாகத்துக்குள் அதிரடியாக நுழைகிறார்கள்.&nbsp;&nbsp; பாதுகாப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரண தண்டனையை ஒழிப்போம்… 2'),
            thumbnail:'/images/2120/death-penalty-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/09/01/post2120.html",
            publishDate:"Sep 1, 2011",
            summary:$sce.trustAsHtml("இந்தச் சம்பவத்தில் விசாரணையின் தொடக்கத்தில் சாட்சிகள் கொடுத்த வாக்குமூலங்களை&nbsp; கண்டுபிடித்தனர்.&nbsp; அந்த வாக்குமூலங்கள், நீதிமன்ற விசாரணையின் போது சொன்னதற்கு மாறானதாக இருந்தது.&nbsp; தாமஸ் பார்ட்டில் என்ற சாட்சி, துப்பாக்கியைக் காட்டி பணத்தை பறித்த நபருக்கு,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தியனாக இருப்பதற்காக நான் வெட்கப்படவில்லை-நிதின் குப்தா,அய்.அய்.டி-மும்பை.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/09/01/post2109.html",
            publishDate:"Sep 1, 2011",
            summary:$sce.trustAsHtml("மிகவும் சுவாரசியமானதும்,&nbsp;நமது விழிகளை விரியச் செய்வதுமான ஒரு கட்டுரை இங்கே மொழிப்பெயர்க்கப்பட்டுள்ளது.&nbsp;ரசிக்கத் தயாராகுங்கள்.இந்தியனாக இருப்பதற்காக நான் வெட்கப்படவில்லை என்று மும்பை அய்.அய்.டி-யில் பொறியியல் பட்டப்படிப்பு பயிலும் நிதின் குப்தா ராகுல் காந்திக்கு பதிலளித்துள்ளார்.எல்லோருக்கும் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மரண தண்டனையை ஒழிப்போம்…'),
            thumbnail:'/images/2107/babbb04ed3f731d4_large-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/31/post2107.html",
            publishDate:"Aug 31, 2011",
            summary:$sce.trustAsHtml(" மூன்று தமிழர்களை தூக்குக் கொட்டடியிலிருந்து காக்க வேண்டும் என்று சவுக்கில் கட்டுரை எழுதிய போது, ஒரு சில தோழர்கள், ஏன் அப்சல் குருவுக்காக குரல் கொடுக்கவில்லை என்று கேட்டிருந்தனர்.&nbsp;&nbsp; மரண தண்டனை முற்றாக ஒழிக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  14'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/08/31/post2104.html",
            publishDate:"Aug 31, 2011",
            summary:$sce.trustAsHtml("வாங்கருவா போல மீச வச்சு’ என்று பாரதியைப் பாடுவார்கள். இவரும் பாரதியைப்போல மீசை வைத்திருப்பவர்தான். ஆனால், பாரதியாக அல்ல; சாரதியாக தன்&nbsp; வாழ்க்கையைத் துவங்கியவர். லாரி ஓட்டத் தொடங்கி, பின்னர் லாரி புரோக்கராக தன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கோடானு கோடி நன்றிகள்…..'),
            thumbnail:'/images/2103/IMG_0502-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/30/post2103.html",
            publishDate:"Aug 30, 2011",
            summary:$sce.trustAsHtml(" அன்பு உறவுகளே…..&nbsp; சென்னை உயர்நீதிமன்றம், மூவரின் தூக்கு தண்டனையை ரத்து செய்து விட்ட இந்த மகிழ்ச்சியான தருணத்தில்,தமிழக சட்டப் பேரவையில் முருகன், சாந்தன் மற்றும் பேரறிவாளனின் மரண தண்டனையை ரத்து செய்ய வேண்டும் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  13'),
            thumbnail:'/images/2094/7-19-2011-49-asset-abduction-complaint-agai-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/26/post2094.html",
            publishDate:"Aug 26, 2011",
            summary:$sce.trustAsHtml("தனக்கு சோறு கிடைக்குமா என்று பஞ்சம் பிழைக்க வந்த இவர் இன்று பல தலைமுறைகளுக்கு சொத்து சேர்த்துவிட்டார். பஞ்சத்துப் பொட்டு இல்லை. பரம்பரைப்&nbsp; பொட்டு என்று கட்சித் தலைமையால் அங்கீகரிக்கப்பட்டவரால் அடையாளங் காட்டப்பட்டவர் இவர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  12'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/08/26/post2092.html",
            publishDate:"Aug 26, 2011",
            summary:$sce.trustAsHtml("சாதாரணமாக வாழ்க்கையைத் துவங்கும் பலரில் சிலர் மட்டுமே உழைத்து சம்பாதித்து உயர்கின்றனர். சிலரோ மற்றவர்களைச் சுரண்டி வளர்ச்சியடைகின்றனர். இவர்&nbsp; உழைத்ததும் இல்லை, சுரண்டியதுமில்லை. மற்றவர்களை சுரண்ட வைத்து வளர்ந்தவர். சாப்பாட்டுக்கே கஷ்டப்பட்ட குடும்பத்தில் பிறந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீங்கள் மனது வைத்தால் முடியும்.'),
            thumbnail:'/images/2090/adfad-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/26/post2090.html",
            publishDate:"Aug 26, 2011",
            summary:$sce.trustAsHtml(" கடந்த காலங்களில் நீங்கள் எடுத்த கடுமையான நிலைபாட்டினால், நாங்கள் உங்களிடம் பெரிதாக எதையும் எதிர்ப்பார்க்கவில்லை என்பதே உண்மை.&nbsp; ஆனால், நாங்கள் நினைத்ததை பொய்யாக்கும் விதமாக, தமிழக சட்டசபையில், இலங்கையின் மீது பொருளாதாரத் தடை விதிக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எப்படி மன்னிப்பது ?'),
            thumbnail:'/images/2084/anna-hazare-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/25/post2084.html",
            publishDate:"Aug 25, 2011",
            summary:$sce.trustAsHtml(" நாட்டில் விலைவாசி விண்ணை முட்டும் அளவுக்கு உயர்ந்தது, உயர்ந்து கொண்டிருக்கிறது.&nbsp;&nbsp; போராட்டம் நடக்கவில்லை.&nbsp; மூன்று மாதத்துக்கு ஒரு முறை பெட்ரோல் டீசல் விலை உயர்த்தப் பட்டது சிறிய முணுமுணுப்புக்களை தவிர போராட்டம் ஏதும் நடக்கவில்லை...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கு வாசகர்களுக்கு ஒரு வேண்டுகோள்….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/08/23/post2079.html",
            publishDate:"Aug 23, 2011",
            summary:$sce.trustAsHtml("அன்பார்ந்த சவுக்கு வாசர்களே….&nbsp;&nbsp; சவுக்கு உங்களிடம் இது வரை எதையும் கேட்டதில்லை.&nbsp; முதன் முறையாக உங்களிடம் ஒரு பெரிய உதவியை சவுக்கு கேட்கிறது.&nbsp; இந்த உதவியை சவுக்கு வாசகர்கள் செய்வீர்கள் என்ற நம்பிக்கை சவுக்குக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்னா ஹசாரேவின் போராட்டம் ஊடகங்களால் பெரிதுபடுத்தப் படுகிறதா ?'),
            thumbnail:'/images/2078/pict13-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/22/post2078.html",
            publishDate:"Aug 22, 2011",
            summary:$sce.trustAsHtml("&nbsp;அன்னா ஹசாரே போராட்டம் தொடர்பாக தொலைக்கட்சி சேனல்களில் தொடர்ந்து நடைபெறும் விவாதங்களில் இடம்பெறும் முக்கிய விஷயங்கள்,அன்னா ஹசாரேவின் போராட்டம் ஊடகங்களால் பெரிது படுத்தப் படுகிறதா ?இது நடுத்தர வர்க்கத்தின் போராட்டம் மட்டும் தானே ?நடுத்தர..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நெகிழ்ச்சியான ஒரு நிகழ்ச்சி.'),
            thumbnail:'/images/2065/pugalenthi-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/21/post2065.html",
            publishDate:"Aug 21, 2011",
            summary:$sce.trustAsHtml("&nbsp;“உச்சிதனை முகர்ந்தால்”&nbsp; திரைப்படத்தின் இசை வெளியீட்டு விழா நிகழ்ச்சி.&nbsp; கடந்த வெள்ளிக்கிழமை, சென்னை கிருஷ்ண கான சபாவில் அந்த நெகிழ்ச்சியான நிகழ்ச்சி நடைபெற்றது. இந்தத் திரைப்படத்தின் இயக்குநர் புகழேந்தியைப் போன்ற ஒரு உணர்வுள்ள மனிதரை காணுவது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  11'),
            thumbnail:'/images/2060/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/19/post2060.html",
            publishDate:"Aug 19, 2011",
            summary:$sce.trustAsHtml("&nbsp;இவர் ஒரு முரட்டு பக்தர் அல்ல.&nbsp; வரட்டு பக்தர். தலைமைக்கே அடிக்கடி தண்ணி காட்டுபவர். இவரைக் கட்டுப்படுத்த தலைமையே பலமுறை திணறியிருக்கிறது. மேடைப் பேச்சானாலும், சட்டமன்றமானாலும் இவரின் நையாண்டிப் பேச்சுக்கு அளவே இருக்காது. தனது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிகாரிகளை மிரட்டிய ஜாபர் சேட்'),
            thumbnail:'/images/2059/01.Photo-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/19/post2059.html",
            publishDate:"Aug 19, 2011",
            summary:$sce.trustAsHtml("ஜாபர் சேட் மீது வழக்குப்பதிவு, அவரது வீடுகளில் ரெய்டு, சஸ்பெண்ட்’ என்று பரபரப்பாக இருந்த வழக்குகள்,கடந்த ஒரு மாதமாக சத்தமில்லாமல் இருக்கிறது.&nbsp; இந்நிலையில், லஞ்ச ஒழிப்பு போலீஸாரை விசாரணையின்போது ஜாபர் சேட் மிரட்டியதாக குபீர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மன்மோகன் சிங்கும் கருப்பண்ண சாமியும்'),
            thumbnail:'/images/2058/776013728_e0691574e0-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/19/post2058.html",
            publishDate:"Aug 19, 2011",
            summary:$sce.trustAsHtml("நீங்க அமேரிக்காவுல பொருளாதாரம் படிச்சவரு.&nbsp;&nbsp; நாலு அஞ்சு டாக்டர் பட்டமெல்லாம் வாங்குனவரு.&nbsp; நெறய்ய படிச்சவருன்னு என் மவன் சொல்றான். ஆனா இவ்ளோ படிச்சுட்டு நாட்ட குட்டிச்சொவரு பண்ணதே நீங்கதான்னு சொல்றாங்கய்யா.&nbsp;&nbsp;&nbsp; நாங்கள்ளாம் படிக்காதவங்க.&nbsp; பூமிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  10'),
            thumbnail:'/images/2051/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/19/post2051.html",
            publishDate:"Aug 19, 2011",
            summary:$sce.trustAsHtml("மெழுகுவர்த்தியைப் பற்றி எழுதிய ஒரு கவிஞன் ‘இந்த உயிர் வாழ்ந்ததற்கு அல்ல. செத்ததற்கு மட்டுமே சுவடுகள் உண்டு’ என்று கூறியிருந்தான். அதுபோல் இங்கே&nbsp; வரும் நாயகனும் இறப்புக்குப் பிறகே பரபரப்பானவர். இவரின் மரணத்தில் ஏற்பட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் வேண்டும் லோக்பால் ?'),
            thumbnail:'/images/2044/justice_soumitra_sen_306x180_634491652260088811-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/17/post2044.html",
            publishDate:"Aug 17, 2011",
            summary:$sce.trustAsHtml("இதற்குப் பிறகு, நாடாளுமன்றத்தின் இரு அவைகளும் கூடி, மூன்றில் இரண்டு பங்கு பெரும்பான்மையோடு இதை நிறைவேற்ற வேண்டும். யார் இந்த நீதிபதி ?&nbsp; கொல்கத்தா உயர்நீதிமன்றத்தின் நீதிபதியாக இருந்தவர் சவுமித்ரா சென்.&nbsp; இவர்தான் இன்று ராஜ்யசபையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிகார மமதை ! தினமணி தலையங்கம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/08/17/post2037.html",
            publishDate:"Aug 17, 2011",
            summary:$sce.trustAsHtml("எதிர்பார்த்தபடியே அண்ணா ஹசாரே தனது உண்ணாவிரதப் போராட்டத்தைத் தொடங்கும் முன்பாகவே முன்னெச்சரிக்கை நடவடிக்கையாகக் கைது செய்யப்பட்டு, திகார் சிறையில் ஏழு நாள் நீதிமன்றக் காவலில் வைக்கப்பட்டுள்ளார். திகார் சிறையை இப்போது சமரசம் உலாவும் இடமாகக் கருதலாம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இங்கேயும் ஒரு ஹிட்லர்'),
            thumbnail:'/images/2036/2553493-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/17/post2036.html",
            publishDate:"Aug 17, 2011",
            summary:$sce.trustAsHtml("நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நெருக்கடி நிலை ?'),
            thumbnail:'/images/2033/5605168488_a49df5c585_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/16/post2033.html",
            publishDate:"Aug 16, 2011",
            summary:$sce.trustAsHtml("&nbsp;1968ல் முதன் முதலாக அறிமுகப் படுத்தப் பட்ட மசோதா 45 ஆண்டுகள் கடந்தும் சட்டமாகாமல் இருப்பது அன்னா ஹசாரேவின் குற்றமா ? &nbsp;இன்று காங்கிரஸ் சார்பாக பேட்டியளிக்கும் தலைவர்கள் சட்டம் இயற்றுவது பாராளுமன்றத்தின் வேலை,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மார்ட்டினின் மர்ம சாம்ராஜ்யம்.'),
            thumbnail:'/images/2023/ilaignan_audio_launch_stills_pics_11-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/13/post2023.html",
            publishDate:"Aug 13, 2011",
            summary:$sce.trustAsHtml(" யார் இந்த மார்ட்டின் ? 43 வயதாகும் மார்ட்டின் இந்தியாவின் மிகப் பெரிய லாட்டரி அதிபர்.&nbsp;&nbsp;&nbsp; அசைக்க முடியாத சக்தியாக நேற்று வரை விளங்கியவர்.&nbsp;&nbsp; இவர் பிறந்த அன்று, பர்மாவைச் சேர்ந்த மார்ட்டினின் பெற்றோர்களுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாற்றி மாற்றிப் பேசுவது ஏன்'),
            thumbnail:'/images/2019/03-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/12/post2019.html",
            publishDate:"Aug 12, 2011",
            summary:$sce.trustAsHtml("முன்னாள் உளவுத்துறை அதிகாரி ஜாபர் சேட் சிறுபான்மை இனத்தவர் என்பதால் பழிவாங்கப்படுகிறார்’ என்று முன்னாள் முதல்வர் கருணாநிதி கூறியிருப்பது பெரும் சர்ச்சையை ஏற்படுத்தியுள்ளது.கருணாநிதி முதல்வராக இருந்த போது நிழலாக இருந்தவர் ஜாபர் சேட். அவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  9'),
            thumbnail:'/images/2017/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/12/post2017.html",
            publishDate:"Aug 12, 2011",
            summary:$sce.trustAsHtml("கடந்த இதழில் நம்மிடம் பேசியவரின் மனசாட்சியின் வாக்குமூலம்தான் இந்த இதழிலும் தொடர்கிறது. குறுகிய காலத்தில் நீண்ட வரலாறு படைத்துவிட்டவராதலால் வாக்குமூலமும் நீண்டிருக்கிறது. குடும்பப் பிரச்னையில் உருவாகி, கோஷ்டிப் பூசலாக உருவெடுத்து தேசத்தின் பொருளாதாரப் பிரச்னையாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலை மறைக்க உயிர்ப்பலியா ?'),
            thumbnail:'/images/2014/John_Wilkes_Booth_wanted_poster_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/12/post2014.html",
            publishDate:"Aug 12, 2011",
            summary:$sce.trustAsHtml("ராஜீவ் காந்தியின் கொலை மற்றும் அதன் பின்னர்&nbsp;நடந்த விசாரணை, அமெரிக்க ஜனாதிபதி ஆப்ரகாம் லிங்கன் படுகொலையை ஒட்டி நடந்த விசாரணையை நினைவுபடுத்துகிறது. 14 ஏப்ரல் 1865ல் லிங்கன் கொலை செய்யப் படுகிறார்.&nbsp; அதன் பின்னர் நடந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  8'),
            thumbnail:'/images/2010/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/09/post2010.html",
            publishDate:"Aug 9, 2011",
            summary:$sce.trustAsHtml(" ராமேஸ்வரத்தின் ஒரு குக்கிராமத்தில் பிறந்து உலகையே இந்தியாவின்மீது ஆச்சரியப் பார்வை பட வைத்தவர் அப்துல்கலாம் என்றால், வேறொரு குக்கிராமத்தில் பிறந்து&nbsp; உலகையே இந்தியாவின்மீது அதிர்ச்சிப் பார்வையை பட வைத்தவர் இவர். லஞ்சம், ஊழல், கொள்ளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இழந்ததே அதிகம்…..'),
            thumbnail:'/images/2009/18730177-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/09/post2009.html",
            publishDate:"Aug 9, 2011",
            summary:$sce.trustAsHtml("டிவிக்கள் என்றால் மூன்றே மூன்று ப்ராண்டுகள் மட்டும் தான்.&nbsp; சாலிடேர், டயனோரா மற்றும் ஈசி டிவி.&nbsp;&nbsp; அதுவும் கருப்பு வெள்ளை தான்.&nbsp;&nbsp; வண்ணத் தொலைக்காட்சிகளை பார்ப்பது அரிதிலும் அரிது.&nbsp; செல்போனெல்லாம் கிடையாது.&nbsp; லேண்ட் லைன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுப்ரமணியன் சுவாமி மீது புகார்.'),
            thumbnail:'/images/2000/sunfinal_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/08/post2000.html",
            publishDate:"Aug 8, 2011",
            summary:$sce.trustAsHtml("டாக்டர் சுப்ரமணியன் சுவாமி மீது பயங்கரவாத நடவடிக்கைகள் தடுப்புச் சட்டத்தின் கீழ் நடவடிக்கை எடுக்குமாறு இன்று காலை காவல்துறை தலைமை இயக்குநரிடம் புகார் மனு அனுப்பப் பட்டுள்ளது. &nbsp; அந்தப் புகாரில், மத துவேஷத்தைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிட்டு சுரேஷ்… …. …. ….'),
            thumbnail:'/images/1992/IMG_0039-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/06/post1992.html",
            publishDate:"Aug 6, 2011",
            summary:$sce.trustAsHtml("பாரப்பட்டி சுரேஷ், பொட்டு சுரேஷ் வரிசையில் பிட்டு சுரேஷ்.&nbsp; இந்த பெயர் சவுக்கு வைத்ததில்லை.&nbsp; தினகரன் தலைமை நிருபர் சுரேஷைப் பற்றி சவுக்கில் எழுதியபோது, ஒரு வாசகர் எழுதியிருந்த பின்னூட்டம், “அழகிரிக்கு ஒரு பொட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  7'),
            thumbnail:'/images/1987/05-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/05/post1987.html",
            publishDate:"Aug 5, 2011",
            summary:$sce.trustAsHtml(" தனது லட்சியத்தை அடைய சிலர் குறுக்குவழியில் செல்வார்கள். ஆனால், இவரோ குறுக்குவழியையே ல ட்சியமாக, கொண்டவர். கதருக்கே உரிய கோஷ்டிகளில் இவர் தனி கோஷ்டி. அதாவது, தனியாக ஒரு&nbsp; கோஷ்டியை வைத்துக் கொண்டிருக்கிறார் என்பது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம்  6'),
            thumbnail:'/images/1984/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/05/post1984.html",
            publishDate:"Aug 5, 2011",
            summary:$sce.trustAsHtml(" ஒளி வீச்சின் கோணத்தைப் பொறுத்து சில நேரங்களில் நிஜங்களை விட நிழல்கள் அதிகமாக வளர்ந்து விடுவதுண்டு. அதுபோல்தான் இவரும்.&nbsp; இவர் எப்போதும் நிழல் தான். இவர் சார்ந்திருந்த நிஜங்கள் மாறிக்கொண்டே இருக்கும். நிழலான இவரோ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேலிக்கு ஓணான் சாட்சி…..'),
            thumbnail:'/images/1982/DSC_3886-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/05/post1982.html",
            publishDate:"Aug 5, 2011",
            summary:$sce.trustAsHtml("ஜாபர் சேட் ஒரு இசுலாமியர், அவர் பழிவாங்கப் படுகிறார் என்று அங்கலாய்த்து ஒரு நீண்ட அறிக்கையை கருணாநிதி வெளியிட்டிருக்கிறார்.&nbsp;&nbsp; கருணாநிதி வெளியிட்டுள்ள அறிக்கை பின் வருமாறு. “கடந்த கால திமுக&nbsp; ஆட்சிக் காலத்தில் புலனாய்வுத் துறையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பார்ந்த பத்திரிக்கையாளர்களே…!!!!'),
            thumbnail:'/images/1978/DSC_0133_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/05/post1978.html",
            publishDate:"Aug 5, 2011",
            summary:$sce.trustAsHtml("அன்பார்ந்த பத்திரிக்கையாளர்களே..&nbsp;&nbsp; நக்கீரன் இதழின் ஆசிரியர் கோபால் அவர்கள் மீதும், இணை ஆசிரியர் காமராஜ் அவர்கள் மீதும், தமிழக காவல்துறை வழக்கு பதிவு செய்துள்ளது.&nbsp;&nbsp; நித்யானந்தா மற்றும் ரஞ்சிதா தொடர்பான ஒளிப்படக் காட்சிகளை ஒளிபரப்பும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உங்களைப் பாத்து ஊரே சிரிக்குது'),
            thumbnail:'/images/1973/kalai-Asiriyar_13-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/04/post1973.html",
            publishDate:"Aug 4, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்கீரன் காமராஜ் மனைவி மீது நில மோசடி புகார்'),
            thumbnail:'/images/1966/Kamaraj_complaint_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/03/post1966.html",
            publishDate:"Aug 3, 2011",
            summary:$sce.trustAsHtml("நக்கீரன் இதழின் இணை ஆசிரியர் காமராஜ் அவர்களின் மனைவி மீது நில மோசடிப் புகார் கொடுக்கப் பட்டுள்ளது. &nbsp;சென்னையை அடுத்த பூந்தமல்லியைச் சேர்ந்த வீ.அன்பழகன் என்பவர் இந்தப் புகாரை உள்துறைச் செயலாளரிடம் இன்று கொடுக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேள்வி கேட்கும் முன் சற்றே சிந்தியுங்கள் அதிகாரிகளே…!!!!'),
            thumbnail:'/images/1963/form_2-3_pg_9-24_121-136_1_Page_12-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/02/post1963.html",
            publishDate:"Aug 2, 2011",
            summary:$sce.trustAsHtml(" தற்போது காவல்துறையில் உயர் அதிகாரிகள் மத்தியில் பரபரப்பாக விவாதிக்கப்பட்டு வரும் விஷயம் என்ன தெரியுமா ?&nbsp;&nbsp; ஜாபர் சேட் மீது எடுக்கப்பட்டு வரும் நடவடிக்கை தான்.&nbsp;என்ன விவாதிக்கிறார்கள் தெரியுமா ? ஜாபர் மீது நடவடிக்கை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தொடங்கியது ஆட்டம்….'),
            thumbnail:'/images/1953/l2010101430992-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/08/01/post1953.html",
            publishDate:"Aug 1, 2011",
            summary:$sce.trustAsHtml(" காங்கிரஸை கருவறுப்போம், என்ற கட்டுரையில், காங்கிரஸ் அரசு வரக்கூடிய மழைக்கால பாராளுமன்றக் கூட்டத்தொடரில் சந்திக்கப் போகும் சிக்கல்களைப் பற்றி சவுக்கில் எழுதினாலும் எழுதினோம், ஆரம்பமே அமர்க்களமாக இருக்கிறது.&nbsp;&nbsp; நாம் எழுதியதை விட, கூடுதலான சிக்கல்களில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுப்ரமணியன் சுவாமி என்கிற பாசிஸ்ட்…'),
            thumbnail:'/images/1950/swamy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/30/post1950.html",
            publishDate:"Jul 30, 2011",
            summary:$sce.trustAsHtml("வேறு எந்த வார்த்தையாலும் சுப்ரமணியன் சுவாமியை வர்ணிக்க முடியவில்லை.&nbsp;&nbsp; கடந்த ஆகஸ்ட் 16 அன்று மும்பையிலிருந்து வெளி வரும் டிஎன்ஏ என்ற நாளிதழில், டாக்டர்.சுப்ரமணியன் சுவாமி, இசுலாமியத் தீவிரவாதத்தை ஒழிப்பது எப்படி என்ற தலைப்பில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரஞ்சிதாவின் பிரத்யேக பேட்டி.'),
            thumbnail:'/images/1948/pic12-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/30/post1948.html",
            publishDate:"Jul 30, 2011",
            summary:$sce.trustAsHtml("ரஞ்சிதா.. பாரதிராஜாவின் அறிமுகத்தில் தமிழ்த் திரையுலகில் காலடி எடுத்து வைத்த ரஞ்சிதா அறிமுகமான புதிதில் எப்படி பரபரப்பை ஏற்படுத்தினாரோ, அதை விட பரபரப்பு ஏற்பட்டது, நித்யானந்தாவோடு இருந்ததாக கூறப்பட்ட காட்சிகள் ஒளிபரப்பான போது. பத்திரிக்கையாளர்களை சந்திப்பதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம் 6'),
            thumbnail:'/images/1935/Rajamanickam-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/29/post1935.html",
            publishDate:"Jul 29, 2011",
            summary:$sce.trustAsHtml("முன்னாள் முக்கியஸ்தருக்குப் பின்னால் இருந்த முக்கியஸ்தர் இவர்தான். பல நேரங்களில் முக்கியஸ்தரையே மிஞ்சும் அளவுக்கு உத்தரவுகள் போடுவதில் கில்லாடி இவர்.&nbsp; நிர்வாகத் திறமை அதிகம் இருந்தாலும் அதை நேர்மையாக இவர் செயல்படுத்தியதே இல்லை. உச்ச..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சீறிய ஜெ&#8230;. சிக்கிய ஜாபர் சேட். கொட்டும் ஆதாரங்கள்.'),
            thumbnail:'/images/1933/011-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/29/post1933.html",
            publishDate:"Jul 29, 2011",
            summary:$sce.trustAsHtml("&nbsp;கடந்த செவ்வாயன்று காலை ஒன்பது மணிக்கு பத்திரிகையாளர்களுக்கு ‘முன்னாள் உளவுத்துறைத் தலைவர் ஜாபர் சேட் வீட்டில் சோதனை’ என்று எஸ்.எம்.எஸ். வந்து  பரபரப்பை ஏற்படுத்தியது.பலரால் நம்பவே முடியவில்லை. அதிகாரத்தின் உச்சியில் இருந்த, வானளாவிய அதிகாரம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காங்கிரஸை கருவறுப்போம்….'),
            thumbnail:'/images/1932/DSC_3838-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/28/post1932.html",
            publishDate:"Jul 28, 2011",
            summary:$sce.trustAsHtml("நாம் தமிழர்கள் தானே….? அரசியல் ரீதியாகப் பார்த்தால் நமக்கு துரோகம் இழைத்தது ஒரு கட்சி. எதிரி, காங்கிரஸ் கட்சி.&nbsp;&nbsp; பல முறை நாம் விவாதித்தது போலவும், இயற்கை நியதியைப் போலவும், எதிரிகளை நாம் மன்னிக்கலாம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம் 5'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/27/post1922.html",
            publishDate:"Jul 27, 2011",
            summary:$sce.trustAsHtml("தமிழகத்தில் எந்தக் கட்சி ஆட்சி செய்தாலும் இவர் ஆளுங்கட்சிதான். சாதாரணமாக தாதாக்கள் எல்லாம் ஒரு கொலைச் சம்பவத்திலிருந்து பேரெடுப்பார்கள். புகழ்பெறத்&nbsp; தொடங்குவார்கள். இவர் தற்கொலைச் சம்பவத்தில் புகழ்பெற்ற தாதா. ‘‘நண்பர்கள்னா உயிரக் கொடுப்பேன். எதிரின்னா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம் 4'),
            thumbnail:'/images/1921/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/27/post1921.html",
            publishDate:"Jul 27, 2011",
            summary:$sce.trustAsHtml("  ஆட்சியிலுள்ளவர்களுக்கு சாதகமாக அவ்வப்போது&nbsp; அறிக்கைகள் வெளியிடும் சுயமரியாதைக்காரர் சின்னச் சின்ன விஷயங்களை பெரிதாகவும், பெரிய விஷயங்க¬ ளக்கூட மிகவும் சிறிதாகவும் வெளிக்காட்டும் அவரது பேச்சு. தேர்தலில் நேரடியாக அவருக்குத் தொடர்பில்லை என்றாலும் தேர்தலைப் பற்றிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிகாரிகளை மிரட்டும் தினகரன் தலைமை நிருபர்.'),
            thumbnail:'/images/1919/20110727a_00310100703-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/27/post1919.html",
            publishDate:"Jul 27, 2011",
            summary:$sce.trustAsHtml(" இன்றைய தினகரன் நாளேட்டிலும், நேற்றைய தமிழ் முரசு இதழிலும் ஜாபர் சேட் வீட்டில் நடந்த சோதனையைப் பற்றிய செய்தியோடு ஒரு பெட்டிச் செய்தி. “தானே முன் வந்து தனிப்படையில் சேர்ந்த ஜெயலட்சுமி” என்ற தலைப்பில் வந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆடிய ஆட்டமென்ன ? பேசிய வார்த்தை என்ன ?'),
            thumbnail:'/images/1917/jaffer-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/26/post1917.html",
            publishDate:"Jul 26, 2011",
            summary:$sce.trustAsHtml("அன்பார்ந்த உறவுகளே….&nbsp;&nbsp; நமக்கும் ஜாபர் சேட்டுக்கும் நெருக்கமான உறவு உள்ளது என்பதை அறிவீர்கள். இந்த ஜாபர் சேட்டை நாம் தீவிரமாக எதிர்ப்பதற்கான காரணங்கள் என்ன என்பதை நாம் ஏற்கனவே பல முறை பதிவு செய்திருக்கிறோம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் உள்ளிட்டோர் வீடுகளில் லஞ்ச ஒழிப்புத் துறை சோதனை'),
            thumbnail:'/images/1913/jaffer-house-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/26/post1913.html",
            publishDate:"Jul 26, 2011",
            summary:$sce.trustAsHtml("வீட்டு வசதித் துறையின் நிலத்தை மோசடியாக ஒதுக்கீடு பெற்று, அதில் வியாபாரம் செய்ததாக முன்னாள் உளவுத் துறை கூடுதல் டிஜிபி ஜாபர் சேட் உள்ளிட்டோர் வீடுகளில் தமிழக லஞ்ச ஒழிப்புத் துறை சோதனை நடத்திக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மானங்கெட்ட மத்திய அரசு'),
            thumbnail:'/images/1910/4192193579_cd1facfd4f_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/25/post1910.html",
            publishDate:"Jul 25, 2011",
            summary:$sce.trustAsHtml("மத்தியில் ஆளும் மன்மோகன் சிங்கின் அரசு போன்ற மானங்கெட்ட அரசை உலகில் எங்குமே பார்க்க முடியாது போலிருக்கிறது.சேனல் 4ன் ஆவணப்படம், உலகின் மனசாட்சியை உலுக்கியிருக்கிறது.&nbsp;&nbsp; கண்டவர் மனதை கதற வைத்திருக்கிறது.&nbsp;&nbsp; ஆனாலும், இலங்கையின் இந்தப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எப்போதான் தலைவராக்குவீங்க ?'),
            thumbnail:'/images/1898/21045843-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/25/post1898.html",
            publishDate:"Jul 25, 2011",
            summary:$sce.trustAsHtml("   நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புழுதி படிந்த புறநானூற்று வீரம்..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/25/post1896.html",
            publishDate:"Jul 25, 2011",
            summary:$sce.trustAsHtml("&#8216;வீசப்படும் கணைகளைக் கேடயம்கொண்டு தடுப்பதா​லேயே. நம்மிடம் வில்லும் அம்பும் இல்லை&nbsp;என்று அர்த்தம் அல்ல. அவற்றைப் பயன்படுத்தாமல் இருந்துவிடப்போவதும் இல்லை. வில்லுக்கும் அம்புக்கும் வேலை கொடுத்துத்தான் தீரவேண்டும் என்றால். உடன்பிறப்பே! அப்போது நாம் கோழையாக இருக்கப்போவதில்லை!’..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவமரியாதை இயக்கம்.'),
            thumbnail:'/images/1895/Kalangher-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/23/post1895.html",
            publishDate:"Jul 23, 2011",
            summary:$sce.trustAsHtml(" &nbsp;பெரியார் துவங்கியது சுயமரியாதை இயக்கம்.&nbsp;&nbsp; அதன் வழி வந்தவன் என்று மூச்சுக்கு முன்னூறு முறை முழங்கும் கருணாநிதி இன்று நடத்திக் கொண்டிருப்பது அவமரியாதை இயக்கம். யார் என்ன சொன்னாலும், என் குடும்பமே பிரதானம் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மழையில் தொடங்கிய கட்சி&#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/23/post1887.html",
            publishDate:"Jul 23, 2011",
            summary:$sce.trustAsHtml("கொட்டும் மழையில் தி.மு.க-வை ஆரம்பித்த அண்ணா, &#8221;இந்த மழை பெய்வதற்கும் எனக் கும் எப்படி சம்பந்தம் இல்லையோ. அதுபோல் திராவிடர் கழகத்தைவிட்டுப் பிரிவதற்கும் நான் காரணம் அல்ல!&#8221; என்று நயமாகச் சொன்னார்.இன்று தமிழ் மக்களின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடன்பிறப்பே&#8230;..'),
            thumbnail:'/images/1884/1_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/23/post1884.html",
            publishDate:"Jul 23, 2011",
            summary:$sce.trustAsHtml("ஜுலை 2010ல் ஜுனியர் விகடன் பொட்டு சுரேஷைப் பற்றி மடக்கப் பட்ட மதுரைத் திலகம் என்று செய்தி வெளியிட்டதும், அதற்காக ஜுனியர் விகடன் அலுவலகத்தை அடித்து நொறுக்குவோம் என்று பொட்டு சுரேஷ் தினமலரில் விளம்பரம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அழகிரி உத்தரவின் படியே தா.கிருஷ்ணன் கொல்லப் பட்டார்'),
            thumbnail:'/images/1881/ARV_ALAGIRI_4489e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/22/post1881.html",
            publishDate:"Jul 22, 2011",
            summary:$sce.trustAsHtml(" அழகிரி உத்தரவின் படியே தா.கிருஷ்ணன் கொல்லப் பட்டார் என்று நாம் சொல்லவில்லை. அழகிரியின் கண்ணுக்கு கண்ணாக, இருந்த எஸ்ஸார் கோபி தான் இப்படிச் சொல்கிறார்.&nbsp;நேற்று முன்தினம், நில அபகரிப்பு மோசடிக் புகாரில் சிக்கியுள்ள பொட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கபில் சிபல் என்ற கல்லுளி மங்கன்.'),
            thumbnail:'/images/1873/05VBG_SIBAL_302673f-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/21/post1873.html",
            publishDate:"Jul 21, 2011",
            summary:$sce.trustAsHtml(" தற்போது மத்திய தொலைத் தொடர்புத் துறை அமைச்சராக இருக்கும் கபில் சிபல் என்ற இந்த பஞ்சாபியர் அமேரிக்காவில் சட்டம் படித்தவர்.&nbsp;&nbsp; இவரைப் போன்ற கல்லுளி மங்கனைப் பார்க்கவே முடியாது.&nbsp;&nbsp;&nbsp;&nbsp; மன்மோகன் சிங் ஊரைக் கெடுக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வறட்டுப் பிடிவாதமன்றி வேறு என்ன ?'),
            thumbnail:'/images/1861/high_court-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/20/post1861.html",
            publishDate:"Jul 20, 2011",
            summary:$sce.trustAsHtml("&nbsp;&nbsp;சமச்சீர் கல்வி தொடர்பாக சென்னை உயர்நீதிமன்றம் ஒரு வரலாற்றுச் சிறப்பு மிக்க தீர்ப்பை வழங்கியிருக்கிறது. சமச்சீர்க் கல்விக்கான பாடதிட்டங்களை ஆய்வு செய்ய தமிழக அரசு ஏற்படுத்திய பொம்மைக் கமிட்டி எவ்விதமான உருப்படியான ஆய்வையும் செய்யவில்லை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் மீது பல கோடி ரூபாய் மோசடி புகார்.'),
            thumbnail:'/images/1857/02-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/19/post1857.html",
            publishDate:"Jul 19, 2011",
            summary:$sce.trustAsHtml(" பல கோடி ரூபாய் அரசு பணத்தை மோசடி செய்ததாக, முன்னாள் உளவுத்துறை கூடுதல் டி.ஜி.பி. ஜாபர் சேட் மீது புகார் எழுந்துள்ளது. இதனால் அவருக்கு புதிய சிக்கல்&nbsp; ஏற்பட்டுள்ளது.&nbsp;மஹாராஷ்டிராவில் ஆதர்ஷ் வீட்டு வசதி வாரிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம் 3'),
            thumbnail:'/images/1855/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/19/post1855.html",
            publishDate:"Jul 19, 2011",
            summary:$sce.trustAsHtml("நவாப்பை விட இன்றைக்கு அதிக பிரபலமானவர் இவராகத்தான் இருக்க முடியும். அரசியல் பாதையில் பல முன்னேற்றங்களைக் கண்டவர். தலைமைக்கு நெருக்கமானவர்&nbsp; என்பதால் ஊர் பெயரைச் சொல்லித்தான் அழைப்பார்கள். ஆனால், இவருக்கு இப்போது இறங்குமுகம். மூன்றாம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சமச்சீர் கல்வி &#8211;  தினமணி தலையங்கம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/19/post1852.html",
            publishDate:"Jul 19, 2011",
            summary:$sce.trustAsHtml("சமச்சீர் கல்வியை இந்தக் கல்வியாண்டு முதலாகவே அமல்படுத்த வேண்டும் என்று உயர் நீதிமன்றம் தீர்ப்பு வழங்கிவிட்டது. இதை எதிர்த்து தமிழக அரசு மேல்முறையீடு செய்யும் என்றும் தெரிவிக்கப்பட்டுள்ளது. ஏற்கெனவே உயர் நீதிமன்றம் இதைத்தான் சொன்னது. அதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழல் அதிகாரிக்கு உன்னத பதவியா ?'),
            thumbnail:'/images/1851/IPS_TRAN0001_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/19/post1851.html",
            publishDate:"Jul 19, 2011",
            summary:$sce.trustAsHtml("நேற்று 3 ஐபிஎஸ் அதிகாரிகளை நியமனம் செய்து உள்துறைச் செயலாளர் ஆணை பிறப்பித்தார்.&nbsp;&nbsp; அதில் ஒரு பதவி நியமனம் தான் லஞ்ச ஒழிப்புத் துறை அல்லாமல், காவல்துறை வட்டாரங்களிலேயே சலசலப்பை ஏற்படுத்தியிருக்கிறது. சேலத்தில் டிஐஜியாக இருந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேடி சகோதரர்களின் முகத்திரையை கிழிக்கும் புதிய புத்தகம்.'),
            thumbnail:'/images/1847/KD_BRO_wrapper_1_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/18/post1847.html",
            publishDate:"Jul 18, 2011",
            summary:$sce.trustAsHtml(" கேடி சகோதரர்கள், உண்மையும், ஊழலும் என்று கேடி சகோதரர்களின் முகத்திரையை கிழிக்கும் ஒரு புத்தகம் நாளை வெளியிடப் பட உள்ளது. &nbsp; புதிய தமிழகம் வார இதழின் ஆசிரியர் திரு.அன்பழகன் இந்த நூலை எழுதியுள்ளார்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெயலலிதாவின் அதிரடியில் ஈடிஏ ஸ்டார்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/16/post1843.html",
            publishDate:"Jul 16, 2011",
            summary:$sce.trustAsHtml("கலைஞர் காப்பீட்டுத் திட்டத்துக்கு மூடுவிழா நடத்திவிட்டார் முதல்வர் ஜெயலலிதா. முந்தைய தி.மு.க. அரசின் பல திட்டங்களை ஜெயலலிதா தவிடுபொடி ஆக்கினாலும், &#8216;புதிய தலைமை செயலகத்துக்கு விசாரணை கமிஷன், கலைஞர் காப்பீட்டுத் திட்டம் நிறுத்தம்’ ஆகியவைதான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மிஸ்டர் கழுகு: தயாநிதிக்கு செம சிக்கல்!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/16/post1842.html",
            publishDate:"Jul 16, 2011",
            summary:$sce.trustAsHtml("கழுகார் வந்ததும் நமக்கு ஸ்பெஷல் சல்யூட் அடித்த விதமே, சிரிப்பை வரவழைத்தது! &#8221;கோர்ட். போலீஸ். சி.பி.ஐ.. கைது. என எல்லாமே காக்கிக் கதைகளாக இருப்பதால்தான், உமக்கு ஒரு சல்யூட் வைத்தேன்!&#8221; என்று காரணம் சொன்ன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் ரஞ்சிதா…..'),
            thumbnail:'/images/1841/K14l-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/15/post1841.html",
            publishDate:"Jul 15, 2011",
            summary:$sce.trustAsHtml(" 1992ல் நாடோடித் தென்றலில் பாரதிராஜா அறிமுகப் படுத்திய இந்த ஸ்ரீவள்ளி என்கிற ரஞ்சிதா தமிழ்த்திரையுலகில்&nbsp; அறிமுகமானாலும், தமிழ், தெலுங்கு, மலையாளம் என 50க்கும் மேற்பட்ட படங்களில் நடித்துள்ளார். திரைத்துறையில் உள்ள பெண்களுக்கு இருக்கும் அற்ப ஆயுளைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம் 2'),
            thumbnail:'/images/1831/06-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/15/post1831.html",
            publishDate:"Jul 15, 2011",
            summary:$sce.trustAsHtml("  பிரகாசமான தொலைக்காட்சி என்றாலே முதலாளியை விட அதிகமாகப் பேசப்படுவது இந்த நபரைத்தான். ஒரு மாதத்திற்கு முன்புவரை எல்லாரையும் ஆட்டி வைத் துக்கொண்டிருந்த இவர் இப்போது ஆடிப்போய் இருக்கிறார். கரன்ஸியை எண்ணிக்கொண்டிருந்தவருக்கு இப்போது கம்பி எண்ணும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொல்வதெல்லாம் உண்மை பாகம் 1'),
            thumbnail:'/images/1829/07-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/15/post1829.html",
            publishDate:"Jul 15, 2011",
            summary:$sce.trustAsHtml("﻿ஒருவர் புகழ்பெறத் தொடங்கி பிரபலமடைகிறார்&nbsp; என்றால் பிரச்னைகளும் அவரைத் தொடரத் தொடங்கிவிடுகிறது. கொஞ்ச நாட்களில் அவரின் பழைய உண்மையான&nbsp; முகம் வெளியில் யாருக்கும். தெரியாமல் மறைக்கப்படுகிறது. அந்த நபர் தன்னை எப்படி காட்டிக்கொள்ள நினைக்கிறாரோ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அச்சு வடிவத்தில் ஆதித்யா….'),
            thumbnail:'/images/1827/IMG-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/13/post1827.html",
            publishDate:"Jul 13, 2011",
            summary:$sce.trustAsHtml(" அச்சு வடிவத்தில் ஆதித்யா என்றவுடன் புரியாமல் விழிக்காதீர்கள் தோழர்களே… !&nbsp;&nbsp; ஆதித்யா நகைச்சுவை சேனல்தான் அச்சுவடிவத்தில் வெளி வந்திருக்கிறது. ஏற்கனவே, பல ஆண்டுகளாக வெளி வந்து கொண்டிருந்த ஒரு வாரமிருமுறை இதழ் இப்போது ஆதித்யாவின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஸ்பெக்ட்ரத்தில் சிக்கிய ஜாபர் சேட்&#8230;.'),
            thumbnail:'/images/1816/01.Photo-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/12/post1816.html",
            publishDate:"Jul 12, 2011",
            summary:$sce.trustAsHtml(" ﻿பாஸ். பேரைக் கேட்டாலே சும்மா அதிருதுல்ல.’’&nbsp;இப்படியொரு ரிங் டோன் வைத்திருந்தார், முன்னாள் உளவுத்துறை அதிகாரி ஜாபர் சேட்!. தேர்தலுக்கு முன்பு வரையில் அவர் பெயரைக் கேட்டாலே தி.மு.க.வினர் முதல்&nbsp; உயர் காவல்துறை அதிகாரிகள் வரை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேரான் தெளிவும்…. தெளிந்தான் கண் அய்யுறவும்'),
            thumbnail:'/images/1814/Kalangher-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/12/post1814.html",
            publishDate:"Jul 12, 2011",
            summary:$sce.trustAsHtml("அன்பார்ந்த கருணாநிதி அவர்களே….&nbsp;&nbsp; தமிழாய்ந்த அறிஞராகிய நீங்கள் அறியாதது அல்ல. குறளோவியம் படைத்த உங்களுக்கா தெரியாது ? தேரான் தெளிவும், தெளிந்தான் கண் அய்யுறவும் தீரா இடும்பையல்லவா தரும் ?&nbsp;&nbsp; அந்த தீராத இடும்பில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜார்ஜ் ஏமாற்றப் பட்டாரா ?'),
            thumbnail:'/images/1809/jaffer_sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/10/post1809.html",
            publishDate:"Jul 10, 2011",
            summary:$sce.trustAsHtml("ஏமாற்றப் பட்ட ஜார்ஜ் வேறு யாருமல்ல…..&nbsp;&nbsp; தமிழகத்தின் சட்டம் ஒழுங்கு கூடுதல் டிஜிபி எஸ் ஜார்ஜ் தான் அது. இவர் எப்படி ஏமாற்றப்பட்டார் ?&nbsp;&nbsp; அதைப் பற்றித் தான் பார்க்கப் போகிறோம். தமிழகத்தில் அதிமுக ஆட்சி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆமாம் விதிவிலக்கல்ல&#8230; தினமணி தலையங்கம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/09/post1805.html",
            publishDate:"Jul 9, 2011",
            summary:$sce.trustAsHtml("எப்போதோ நடந்திருக்க வேண்டியது, காலதாமதமாக இப்போது நடந்திருக்கிறது. மத்தியப் புலனாய்வுத் துறை ஐயம்திரிபற மத்திய ஜவுளித்துறை அமைச்சர் தயாநிதி மாறனின் செயல்பாடுகளில் இருந்த தவறை உச்ச நீதிமன்றத்தில் சுட்டிக்காட்டிய பிறகுதான் வேறு வழியே இல்லாமல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்று தயாநிதி…     நாளை அழகிரி…. ?'),
            thumbnail:'/images/1804/ARV_ALAGIRI_4489e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/08/post1804.html",
            publishDate:"Jul 8, 2011",
            summary:$sce.trustAsHtml(" ஒரு வழியாக தயாநதி மாறன் பதவியை ராஜினாமா செய்து விட்டார்.&nbsp;&nbsp;&nbsp;&nbsp; அடுத்து திஹார் செல்ல வேண்டியதுதான்.&nbsp;&nbsp;&nbsp;&nbsp; இப்போது மத்திய அமைச்சரவையில் எஞ்சியிருக்கும் ஒரே கேபினெட் அமைச்சர் மு.க.அழகிரி மட்டும் தான். மு.க.அழகிரி எப்போது ராஜினாமா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆகா&#8230; ஆககா&#8230;.'),
            thumbnail:'/images/1793/2280734-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/08/post1793.html",
            publishDate:"Jul 8, 2011",
            summary:$sce.trustAsHtml("  நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இப்போ இன்னா சார் செய்வ ?'),
            thumbnail:'/images/1790/dayanidhi_maran-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/07/post1790.html",
            publishDate:"Jul 7, 2011",
            summary:$sce.trustAsHtml("&nbsp;ஒங்க அண்ணாத்தே கலாநிதி லேங்குவேஜ்ல பேசுனாத் தானே சார் ஒனுக்கு நெல்லா புரியும் ? அதுனாலதான் அதே லேங்குவேஜ்….&nbsp;இன்னா தெனாவெட்டா இருந்த சார் நீ ? என்னா நெக்கலு, நையாண்டி ? யாருமே ஒன்ன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசு கேபிளுக்காக சக்சேனா கைதா ?  ஜுனியர் விகடன் சந்தேகம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/06/post1787.html",
            publishDate:"Jul 6, 2011",
            summary:$sce.trustAsHtml("அ.தி.மு.க. ஆட்சிக்கு வந்த பிறகு அடுத்தடுத்து அதிரடிகள். லேட்டஸ்ட். சன் பிக்சர்ஸ் தலைமை செயல் அதிகாரி ஹன்ஸ்ராஜ் சக்சேனாவைக் கைது செய்திருக்கிறது போலீஸ்!கடந்த 3-ம் தேதி ஹைதராபாத்தில் நடந்த ஃபிலிம்ஃபேர் விருது வழங்கும் நிகழ்ச்சியில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சாக்சை துவைத்தாயிற்று…. ஷுவை என்ன செய்யப் போகிறீர்கள் ?'),
            thumbnail:'/images/1786/Ayyanar-Audio-Launch-546-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/06/post1786.html",
            publishDate:"Jul 6, 2011",
            summary:$sce.trustAsHtml(" &nbsp;துவைக்காத சாக்ஸ் என்று சவுக்கில் எழுதப் பட்ட ஹன்ஸ்ராஜ் சக்சேனா என்பவர் கைது செய்யப் பட்டு இன்று சிறையில் உள்ளார்.&nbsp;எப்படி இருந்த நான்..சக்சேனா கைது செய்யப் பட்டதை சென்னை திரைப்படத் தயாரிப்பாளர்கள் சங்கத்தில் பட்டாசு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாஸ்&#8230; !  மொதல்ல உங்க கேஸ பாருங்க பாஸ்&#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/05/post1781.html",
            publishDate:"Jul 5, 2011",
            summary:$sce.trustAsHtml("திருவனந்தபுரம் ஸ்ரீ பத்மநாப சுவாமி கோயிலில் எடுக்கப்பட்ட பொக்கிஷங்கள் அனைத்தும் திருவாங்கூர் மன்னர் குடும்பத்துக்கு சொந்தமானது என்று காஞ்சி சங்கராச்சாரியார் ஸ்ரீ ஜயேந்திரர் தெரிவித்துள்ளார்.&nbsp;காஞ்சிபுரத்தில் அவர் செய்தியாளர்களுக்கு அளித்த பேட்டியில் இவ்வாறு தெரிவித்துள்ளார்.&nbsp;&#8220;நீண்ட காலமாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெயலலிதா போனை ஒட்டுக்கேட்டவருக்கு சிவப்புக் கம்பளம்'),
            thumbnail:'/images/1780/IMG-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/05/post1780.html",
            publishDate:"Jul 5, 2011",
            summary:$sce.trustAsHtml("தி.மு.க. ஆதரவு அதிகாரிகள்’ என்று முத்திரை குத்தப்பட்டு பலர் உப்புச்சப்பில்லாத துறைகளுக்கு மாற்றப்பட்டனர். அதேசமயம், ஜெயலலிதா போனையே ஒட்டுக் கேட்ட&nbsp; அதிகாரிக்கு அவர் இஷ்டப்பட்ட துறையை ஒதுக்கி, ரத்தினக் கம்பளம் விரிக்கப்பட்டுள்ளது.&nbsp;தி.மு.க.வுக்கு ஆதரவான அதிகாரிகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மோசடியில் சிக்கிய சன் பிக்சர்ஸ்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/05/post1778.html",
            publishDate:"Jul 5, 2011",
            summary:$sce.trustAsHtml("தி.மு.க. ஆட்சியில் தனி ராஜ்ஜியம் நடத்திக் கொண்டிருந்தது மு.க. குடும்பத்தினர் மட்டுமல்ல, அவரது குடும்பத்தில் வேலை பார்ப்பவர்களும், குடும்ப உறுப்பினர்களின்&nbsp; நண்பர்களும்தான். அவர்கள் அனைவரது முகத்திலும் ஆட்சி மாறியதுமே பயம் தென்பட ஆரம்பித்து விட்டது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சன் டி.வி. நிர்வாகி கைது: கிளறப்படும் பழைய புகார்கள்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/07/05/post1777.html",
            publishDate:"Jul 5, 2011",
            summary:$sce.trustAsHtml("திரைப்பட விநியோகஸ்தரை மிரட்டியதாக கூறப்படும் வழக்கில் சன் டி.வி. நிர்வாகி சக்சேனா கைது செய்யப்பட்டதால், அவர் தொடர்பான பழைய புகார்களை சென்னை மாநகரக் காவல்துறையினர் துப்புதுலக்கி வருகின்றனர். சேலத்தைச் சேர்ந்த திரைப்பட விநியோகஸ்தர் டி.எஸ்.செல்வராஜ். இவரிடம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட வெக்கங்கெட்டவனே&#8230;.!'),
            thumbnail:'/images/1776/2261415-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/05/post1776.html",
            publishDate:"Jul 5, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இருட்டறையில் உள்ளதடா உலகம்.'),
            thumbnail:'/images/1774/dalitVillagers-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/04/post1774.html",
            publishDate:"Jul 4, 2011",
            summary:$sce.trustAsHtml(" “இருட்டறையில் உள்ளதடா உலகம், சாதி இருக்கின்றதென்பானும், இருக்கின்றானே” என்றார் பாரதிதாசன். சவுக்கும் சாதி இருக்கின்றன்று தான் சொல்கிறது.&nbsp;&nbsp; சாதி இருக்க வேண்டும் என்பதற்காக அல்ல…&nbsp;&nbsp; சாதி இருக்கிறதே என்ற வேதனை. சமச்சீர் கல்வி தொடர்பான கட்டுரையில், திருமதி.ஒய்.ஜி.பார்த்தசாரதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊமை ஊரைக் கெடுக்கும்….'),
            thumbnail:'/images/1767/manmohan-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/07/03/post1767.html",
            publishDate:"Jul 3, 2011",
            summary:$sce.trustAsHtml("ஊமை ஊரைக் கெடுக்கும், பெருச்சாளி பேரைக் கெடுக்கும் என்று தமிழ்நாட்டில் ஒரு சொலவடை உண்டு. இந்த சொலவடைக்கு பொருத்தமான நபர் யார் என்று கேட்டால் நமது பிரதமர் மன்மோகன் சிங் தான். இந்த மன்மோகன் சிங்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிக்கலில் தயாநிதி மாறன்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/30/post1759.html",
            publishDate:"Jun 30, 2011",
            summary:$sce.trustAsHtml("ஆ.ராசாவுக்கு ஆச்சாரியா&nbsp;தயாநிதி மாறனுக்கு கெளதம்..2ஜி அலைக்கற்றை ஊழல் தொடர்பாக, ஆ.ராசாவின் உதவியாளர் ஆசிர்வாதம் ஆசாரியின் வாக்குமூலத்தின் அடிப்படையில் ஆ.ராசா, கனிமொழி உள்ளிட்ட 17 பேர் கைது செய்யப்பட்டுள்ளார்கள்.அதே போல், தயாநிதிமாறனின் கூடுதல் தனிச் செயலாளராக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சீர் கெட்டுப் போன தகவல் ஆணையம்.'),
            thumbnail:'/images/1758/tr_ramasamy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/30/post1758.html",
            publishDate:"Jun 30, 2011",
            summary:$sce.trustAsHtml("தகவல் அறியும் உரிமைச் சட்டம் என்பது இந்நாட்டின் குடிமகன் உண்மையிலேயே இது மக்கள் ஆட்சி தான் என்பதை உணரும் வகையில் உருவாக்கப் பட்ட ஒரு சட்டம்.&nbsp;&nbsp; இந்தச் சட்டம் வந்த பிறகு, பல ஊழல்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த கொசுத்தொல்லை தாங்க முடியவில்லையே&#8230;..'),
            thumbnail:'/images/1746/Thangabalu_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/29/post1746.html",
            publishDate:"Jun 29, 2011",
            summary:$sce.trustAsHtml("காங்கிரஸ் தலைவர் தங்கபாலு இன்று வெளியிட்டுள்ள அறிக்கையில்,&nbsp;இலங்கைத் தமிழர்கள் பிரச்சினை தொடர்பாக இந்திய அரசிடமிருந்து நிர்ப்பந்தம் ஏதும் வரவில்லை என்று இலங்கை&nbsp; அதிபர் ராஜபட்ச உலகமகாப் பொய்ச் செய்தியை பத்திரிகையாளர்களிடம் தெரிவித்திருக்கிறார். இலங்கையில் தமிழர்களின் வாழ்வுரிமைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழர் பிரச்னைக்கு தீர்வு காண இந்தியா நிர்பந்திக்கவில்லை  ராஜபக்ஷே'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/29/post1745.html",
            publishDate:"Jun 29, 2011",
            summary:$sce.trustAsHtml("இலங்கைத் தமிழர் பிரச்னைக்கு விரைவில் தீர்வு காணுமாறு தம்மை இந்தியா நிர்பந்திக்கவில்லை என்று இலங்கை அதிபர் மகிந்தா ராஜபட்ச தெரிவித்தார். எத்தகைய தீர்வாக இருப்பினும் அதற்கு நாடாளுமன்றத்தின் ஒப்புதல் பெறப்பட வேண்டும் என்றும் அவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உங்களுக்கு வெட்கமாக இல்லையா ?'),
            thumbnail:'/images/1744/IMG_9359-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/29/post1744.html",
            publishDate:"Jun 29, 2011",
            summary:$sce.trustAsHtml(" சவுக்கு யாரைப் பார்த்து இப்படி கேட்கிறது என்று வியக்காதீர்கள். நக்கீரன் இதழை நடத்துபவர்களை பார்த்துதான் இப்படி கேட்கிறது. இன்று வெளி வந்துள்ள நக்கீரன் இதழில் முதல் பக்கத்தில் ஒரு செய்தி. &#8220;மீண்டும் எரியும் தினகரன் வழக்கு&#8221;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மத்திய அரசின் மோசடி! தினமணி தலையங்கம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/27/post1743.html",
            publishDate:"Jun 27, 2011",
            summary:$sce.trustAsHtml("﻿ஐந்தாண்டுக்கு ஒரு முறை தேர்தல் வரும், இந்த ஆட்சியைத் தூக்கி எறியலாம் என்கிற நம்பிக்கையை மக்களாட்சி முறை அளிப்பதால், மக்கள் மனதிற்குள் கொதித்தபடி விலைவாசி ஏற்றத்தைச் சகித்துக் கொண்டிருக்கிறார்கள். அப்படிப்பட்ட சூழ்நிலையில் வெந்த புண்ணிலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சரியான பாதை 2'),
            thumbnail:'/images/1742/31618218-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/26/post1742.html",
            publishDate:"Jun 26, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சரியான பாதை'),
            thumbnail:'/images/1740/32516578-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/26/post1740.html",
            publishDate:"Jun 26, 2011",
            summary:$sce.trustAsHtml(" நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருந்துங்கள் திருமா……'),
            thumbnail:'/images/1738/thol-thirumavalavan-10-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/26/post1738.html",
            publishDate:"Jun 26, 2011",
            summary:$sce.trustAsHtml(" 2010 விடுதலைச் சிறுத்தைகள் ஆண்டு என்று 2008ம் ஆண்டு தொடங்கி, தமிழகமெங்கும் விடுதலைச் சிறுத்தைகள் பிரச்சாரம் செய்து வந்தனர். இந்தத் தேர்தலில் படு தோல்வி அடைந்த பிறகு வீழ்ந்த சிறுத்தைகள் என்று பெயர் மாற்றிக்கொள்வார்களா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிக்கலில் செட்டி நாட்டு சீமான்…..'),
            thumbnail:'/images/1729/Chidam_baram-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/24/post1729.html",
            publishDate:"Jun 24, 2011",
            summary:$sce.trustAsHtml(" பழனியப்பன் சிதம்பரம் அவர்களுக்கு செட்டிநாட்டுச் சீமான் என்று சவுக்கு பெயர் வைக்கவில்லை. இந்தப் பெயரை வைத்தது, சிதம்பரத்துக்கு இன்று நெருக்கமாக இருக்கும் கருணாநிதி.&nbsp;&nbsp; 1991 – 1996 அதிமுக ஆட்சிக் காலத்தில், சிதம்பரம் மத்திய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கச்சத் தீவு &#8230;  மூழ்காத உண்மைகள்!'),
            thumbnail:'/images/1726/Rajasenthur_Pandian-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/22/post1726.html",
            publishDate:"Jun 22, 2011",
            summary:$sce.trustAsHtml("   நடந்து முடிந்த தமிழக சட்டமன்ற தேர்தலில் பங்கேற்ற இளைய தலைமுறையினரும் இனி வரப்போகின்ற தலைமுறைகளும் போற்றி பாராட்டும் வகையில், என்றும் நினைவு கூறும் விதமாக. முதல்வர் ஜெயலலிதா சட்டமன்றத்தில் வரலாற்று சிறப்பு மிக்க, வரலாற்றுத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவன் இவன்'),
            thumbnail:'/images/1724/avan-ivan2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/22/post1724.html",
            publishDate:"Jun 22, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மன்மோகனின் ஊழல் ஒழிப்பு 2'),
            thumbnail:'/images/1722/323100-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/22/post1722.html",
            publishDate:"Jun 22, 2011",
            summary:$sce.trustAsHtml(" நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மன்மோகனின் ஊழல் ஒழிப்பு'),
            thumbnail:'/images/1720/34250171-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/22/post1720.html",
            publishDate:"Jun 22, 2011",
            summary:$sce.trustAsHtml("\நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாறன்களின் சரியும் சாம்ராஜ்யம் &#8211;  நடராஜன் பேட்டி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/21/post1718.html",
            publishDate:"Jun 21, 2011",
            summary:$sce.trustAsHtml("எப்போது பேசினாலும் பரபரப்பான விஷயங்களை அள்ளிக் கொட்டுவதில் வல்லவர் ம.நடராஜன். இப்போது அவரிடம் சிக்கியிருப்பது ஸ்பெக்ட்ரம் விவகாரத்தில் மாறன் சகோதரர்கள் பங்கு. அவரிடம் பேசிய போது பல அதிர்ச்சியூட்டும் தகவல்களைச் சொல்லி மலைக்க வைக்கிறார்.&nbsp;இனி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லத்திக்கா சரண் மீது லஞ்ச ஒழிப்புத் துறை விசாரணை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/21/post1717.html",
            publishDate:"Jun 21, 2011",
            summary:$sce.trustAsHtml("பெட்டி, படுக்கைகளை எல்லாம் கட்டி வைத்துக் கொண்டு இருந்தார், சுவாமி வம்பானந்தா.‘‘என்ன சுவாமி, ஆசிரமத்தை காலி பண்ணப் போறீங்களா?’’ கேட்டபடியே உள்ளே வந்தார் சிஷ்யை.&nbsp;‘‘நான் எதுக்கு ஆசிரமத்தை காலி பண்ணணும்.? ஆசிரமத்தில் நிறைய மாற்றம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனசாட்சி இல்லாத மாறன்கள்.'),
            thumbnail:'/images/1716/mk_kanimozhi_20110509-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/21/post1716.html",
            publishDate:"Jun 21, 2011",
            summary:$sce.trustAsHtml(" தயாநிதி மற்றும் கலாநிதி மாறனை இத்தனை நாளாக தழுவியிருந்த அதிர்ஷ்ட தேவதை சுத்தமாக கைகழுவி விட்டதாக தெரிகிறது. 2004 பாராளுமன்றத் தேர்தலின் போது, முரசொலி மாறனின் மறைவால், மத்திய சென்னை பாராளுமன்றத் தொகுதிக்கு, கருணை அடிப்படையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தயாநிதி மாறனை சிபிஐ விசாரிக்க பிரதமர் மன்மோகன் சிங் ஒப்புதல்?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/19/post1708.html",
            publishDate:"Jun 19, 2011",
            summary:$sce.trustAsHtml("புது தில்லி, ஜூன் 18: 2-ஜி அலைக்கற்றை விவகாரத்தில் சிக்கியுள்ள மத்திய ஜவுளித் துறை அமைச்சர் தயாநிதி மாறனிடம் சி.பி.ஐ. விசாரணை செய்ய பிரதமர் அனுமதி அளித்துள்ளதாக பிரதமர் அலுவலக வட்டாரங்களில் இருந்து தெரிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சமச்சீர் கல்விக் குழுவில் நியமித்துள்ள உறுப்பினர்களை மாற்ற மார்க்சிஸ்ட் கட்சி வலியுறுத்தல்.'),
            thumbnail:'/images/1707/CPIM_Press_News_on_18.6.2011_1_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/18/post1707.html",
            publishDate:"Jun 18, 2011",
            summary:$sce.trustAsHtml("  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேறு என்ன நோக்கம் இருக்க முடியும் ?'),
            thumbnail:'/images/1704/jaya2_20110614-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/18/post1704.html",
            publishDate:"Jun 18, 2011",
            summary:$sce.trustAsHtml("சமச்சீர் கல்வி என்ற அறிவிப்பை திமுக அரசாங்கம் வெளியிட்ட உடனேயே, ஆயில் மாபியா, அன்டர்வேர்ல்ட் மாபியாவை விட சக்தி வாய்ந்த கல்வி மாபியா களத்தில் இறங்கியது. உடனடியாக இதை எதிர்த்து சென்னை உயர்நீதிமன்றத்தில் வழக்கு தொடர்ந்தனர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழினப் படுகொலைக்கு நினைவேந்தல்'),
            thumbnail:'/images/1699/candle-light-notice-NEW-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/18/post1699.html",
            publishDate:"Jun 18, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாய்ப்பை நழுவவிடலாகாது! தினமணி தலையங்கம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/17/post1697.html",
            publishDate:"Jun 17, 2011",
            summary:$sce.trustAsHtml("நீதிபதி ரவிராஜபாண்டியன் தலைமையிலான &#8220;தனியார் பள்ளிகள் கல்விக் கட்டண நிர்ணயக் குழு&#8217; அறிவித்துள்ள புதிய கட்டணங்கள் பெரும்பாலான பெற்றோருக்கு ஏற்புடையதாக அமைந்திருக்கவில்லை என்பது கடந்த இரு நாள்களாக அனைத்துத் தரப்பிலும் எழுப்பப்படும் கண்டனங்களிலிருந்தும் குமுறலில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிமுக ஆட்சியில் அதிகாரிகள் மாற்றம் வாடிக்கையானதுதான்: கருணாநிதி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/17/post1696.html",
            publishDate:"Jun 17, 2011",
            summary:$sce.trustAsHtml("சென்னை, ஜூன் 16: அதிமுக ஆட்சியில் அதிகாரிகள் மாற்றப்படுவது வாடிக்கையானதுதான் என்று முன்னாள் முதல்வரும், திமுக தலைவருமான கருணாநிதி கூறியுள்ளார். இது தொடர்பாக வியாழக்கிழமை அவர் வெளியிட்ட அறிக்கை: உள்துறைச் செயலாளர் மாற்றம்: உள்துறை செயலாளர் 24..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலங்கை மீது போர்க்குற்ற விசாரணை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/17/post1695.html",
            publishDate:"Jun 17, 2011",
            summary:$sce.trustAsHtml("லண்டன், ஜூன் 16: விடுதலைப் புலிகளுக்கு எதிரான இறுதிக் கட்ட போரின் போது, இலங்கை ராணுவத்தின் போர்க்குற்ற விதிமீறல்கள் குறித்து விசாரணை நடத்தப்பட வேண்டும் இங்கிலாந்து பிரதமர் டேவிட் கேமரூன் கோரிக்கை விடுத்துள்ளார். தனி ஈழம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வக்கீல் வண்டு முருகன்….'),
            thumbnail:'/images/1694/4-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/16/post1694.html",
            publishDate:"Jun 16, 2011",
            summary:$sce.trustAsHtml(" வடிவேலுவின் வண்டு முருகன் காமெடி மிகப் பிரபலமானது. “உங்களுக்குத் தெரியாத செக்ஷன் இல்லை மைலார்ட்” என்று கூறுவார். அதே போலவே ஒரு வண்டு முருகன், தற்போது பேசியுள்ளார். அந்த வண்டு முருகன் வேறு யாருமல்ல…. உள்துறை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நெஞ்சை உறைய வைக்கும் சேனல் 4 காணொளி&#8230;.   இன்னுமா அமைதி ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/15/post1693.html",
            publishDate:"Jun 15, 2011",
            summary:$sce.trustAsHtml(" சேனல் 4 வெளியிட்ட காணொளி... &nbsp; &nbsp;இன்னுமா தமிழகம் அமைதியாக இருக்கிறது.. &nbsp; Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் ஜுனியர் விகடன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/15/post1692.html",
            publishDate:"Jun 15, 2011",
            summary:$sce.trustAsHtml("ஜுனியர் விகடன் இதழுக்கு சவுக்கு தனது மனமார்ந்த வாழ்த்துக்களை தெரிவித்துக் கொள்கிறது. &nbsp;சவுக்கும், வாசகர்களும் எதிர்ப்பார்ப்பது இதைத்தான். &nbsp; ஸ்பெக்ட்ரம் பக்கம் என்று ஒதுக்கி, அதில் தயாநிதி மாறனை தோலுரிக்கும் இந்த வேலையை ஜுனியர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போட் கிளப் ரோடின் பெரும் செல்வந்தர்கள்….'),
            thumbnail:'/images/1691/meenakashi-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/15/post1691.html",
            publishDate:"Jun 15, 2011",
            summary:$sce.trustAsHtml("சென்னை நகரில் போட் கிளப் ரோட் என்பது, பெரும் செல்வந்தர்கள் மட்டுமே வசிக்கும் ஒரு குடியிருப்புப் பகுதி.. இந்த போட் கிளப் ரோட்டில் ஒரு கிரவுண்ட் (2400 சதுர அடி) விலை 9 கோடி ரூபாய்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கச்சத்தீவை தாரை வார்க்க திமுக ஒரு போதும் சம்மதித்தது கிடையாது &#8211;  கருணாநிதி'),
            thumbnail:'/images/1689/Thalaivar_Kaditham_14-6-2011_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/14/post1689.html",
            publishDate:"Jun 14, 2011",
            summary:$sce.trustAsHtml("   Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தி.மு.க. காங்கிரஸ் உறவை துண்டிக்க துடிக்கிறார்கள்  கருணாநிதி அறிக்கை'),
            thumbnail:'/images/1685/DSC_3886-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/14/post1685.html",
            publishDate:"Jun 14, 2011",
            summary:$sce.trustAsHtml(" தி.மு.க. காங்கிரஸ் உறவை துண்டிக்க துடிக்கிறார்கள் என்று கருணாநிதி கூறியுள்ளார். தி.மு.க. தலைவர் கருணாநிதி வெளியிட்டுள்ள அறிக்கையில் கூறியிருப்பதாவது: தி.மு.க. உயர்நிலை கூட்டம் 10&#038;ந் தேதி அன்று மாலையில் அண்ணா அறிவாலயம், முரசொலிமாறன் வளாகத்தில் தி.மு.க. உயர் நிலை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடிவாளம் இல்லாமல் காவல் துறை?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/14/post1683.html",
            publishDate:"Jun 14, 2011",
            summary:$sce.trustAsHtml("கடந்த திமுக ஆட்சியின்போது பல அதிகார மையங்கள் செயல்பட்டு வந்தன. தனிப்பட்ட பாதுகாப்பு என்று எடுத்துக்கொண்டாலும்கூட முன்னாள் முதல்வர் கருணாநிதியின் கோபாலபுரம் மற்றும் சி.ஐ.டி. காலனி வீடுகள் செக்டார் ஏ, செக்டார் பி என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆழ்ந்த இரங்கல்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/13/post1682.html",
            publishDate:"Jun 13, 2011",
            summary:$sce.trustAsHtml("தோழர் சங்கரசுப்புவின் மகன் கடந்த 7ம் தேதி முதல் காணாமல் போனார். &nbsp;இவரை தொடர்ந்து காவல்துறையினர் தேடி வந்தனர். &nbsp;எப்படியும், இவர் உயிரோடு கிடைத்து விடுவார் என்ற நம்பிக்கையில் சவுக்கு உட்பட பெரும்பாலான வழக்கறிஞர்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('45 கோடியை வாங்கியது யார் ?'),
            thumbnail:'/images/1681/rajathi_ammal._4-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/13/post1681.html",
            publishDate:"Jun 13, 2011",
            summary:$sce.trustAsHtml("பல ஆயிரம் கோடிகளைப் பற்றி நாம் பேசியிருக்கிறோம்…. இது என்ன ? வெறும் 45 கோடி என்று யோசிக்கிறீர்களா ?45 கோடியை வாங்கிக் கொண்டு ஏமாற்றி விட்டார் ஒரு அதிகாரி என்று ராசாத்தி அம்மாள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காலில் விழுந்த கலாநிதி…. கனிய மறுத்த சிவசங்கரன்.'),
            thumbnail:'/images/1679/Mr_Kalanithi_Maran-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/12/post1679.html",
            publishDate:"Jun 12, 2011",
            summary:$sce.trustAsHtml(" கடந்த வாரம், கலாநிதி மாறனும், காவேரி கலாநிதியும், திடீர் பயணமாக சிங்கப்பூர் சென்றார்கள்.&nbsp;&nbsp; இந்தச் செய்தி வெளியில் கசியக் கூடாது என்று அவர்கள் நினைத்தாலும், செய்தி பரவவும், உடல்நலக் குறைவுக்காக சிங்கப்பூரில் சிகிச்சை பெற்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குங்குமப்பூ போண்டா'),
            thumbnail:'/images/1675/pic07-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/11/post1675.html",
            publishDate:"Jun 11, 2011",
            summary:$sce.trustAsHtml(" அழகிரி: &nbsp; ஆமாம். &nbsp;குங்குமப்பூ போண்டா ன்னு ஒரு படம் ரிலீஸ் ஆகியிருக்காமே. போலாமா.. ?தயாநிதி : &nbsp;அ்பபடி ஒரு படம் நான் கேள்விப் படவேயில்லையே.. &nbsp; &nbsp;அழகிரி : &nbsp;ஏய்.. என்னப்பா இப்டி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டெலிபோன் மணி போல் சிரித்தவர் இவரா ?'),
            thumbnail:'/images/1673/24950328-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/11/post1673.html",
            publishDate:"Jun 11, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிமன்றத்தில் கனிமொழியுடன் தாயார் ராஜாத்தி கருத்து வேறுபாடு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/11/post1671.html",
            publishDate:"Jun 11, 2011",
            summary:$sce.trustAsHtml("புது தில்லி, ஜூன் 10: தில்லி சிறப்பு நீதிமன்றத்துக்கு வெள்ளிக்கிழமை வந்த திமுக மாநிலங்களவை உறுப்பினர் கனிமொழியின் தாயார் ராஜாத்தி மதிய உணவைப் புறக்கணித்தார். நீதிமன்றத்தில் மகளுடன் சிறிது நேரம் பேசியபோது அவர்களுக்கு இடையில் கருத்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பெருமையாக இருக்கிறது…..'),
            thumbnail:'/images/1670/2881301161_b3ab45afdd_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/10/post1670.html",
            publishDate:"Jun 10, 2011",
            summary:$sce.trustAsHtml("எதை நினைத்து…. ?&nbsp;&nbsp; தமிழகத்தின் முதல்வர் செல்வி.ஜெயலலிதாவை நினைத்து. தமிழ்ச் சமூகம் ஜெயலலிதாவிடத்தில், ஈழத் தமிழரின் நலனுக்காக எதையுமே எதிர்ப்பார்த்ததில்லை.&nbsp;&nbsp; ஏனென்றால், கடந்த காலங்களின் அவரது நிலைபாடு அப்படி.&nbsp;&nbsp; புலிகளுக்கு நேரெதிரான நிலைபாடு எடுத்ததோடு,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இப்போதும் மாற்றமில்லை.'),
            thumbnail:'/images/1662/Vasan_Publication_SH_2010_Page_5-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/09/post1662.html",
            publishDate:"Jun 9, 2011",
            summary:$sce.trustAsHtml(" இன்று முத்துராமன் என்ற வாசகர், ஒரு மின்னஞ்சல் அனுப்பியிருந்தார்.&nbsp;&nbsp; அந்த மின்னஞ்சலில், விகடன் குழுமத்தின் பங்கு உரிமம் தொடர்பான செய்திகளில் இருந்த அடிப்படைத் தவறை சுட்டிக் காட்டியிருந்தார். அதற்கான ஆதாரத்தையும் அவர் இணைத்திருந்தார். அந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புலிகள் மீது சேறும், இராஜீவ் காந்திக்கு சல்யூட்டும் அடிக்கும் சவுக்கு புத்தகம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/09/post1660.html",
            publishDate:"Jun 9, 2011",
            summary:$sce.trustAsHtml("அரிசி மூட்டையில் ஓரிரு கற்கள் கலந்திருந்தால் அதைப் பிரித்தெடுக்கலாம். ஆனால், ஒரு மூட்டை மணலில் கைப்பிடி அரிசியைப் பொறுக்குவது? ராஜீவ் சர்மா எழுதிய &#8216;விடுதலைப் புலிகளுக்கு அப்பால் -‍ ராஜீவ் கொலைப் பின்னணி&#8217; நூலிலிருந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் மீண்டும் உளவுத்துறை கூடுதல் டிஜிபியானார்.'),
            thumbnail:'/images/1659/RMK_1691_copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/09/post1659.html",
            publishDate:"Jun 9, 2011",
            summary:$sce.trustAsHtml("&nbsp;என்ன வாசகர்களே…. அதிர்ச்சியாக இருக்கிறதா ?&nbsp;&nbsp; ஜாபர் சேட், மீண்டும் உளவுத்துறை கூடுதல் டிஜிபியாக இருந்தார். தற்போது, உளவுத்துறையின் டிஜிபியாக இருக்கும், ராமானுஜம், காத்திருப்போர் பட்டியலில் வைக்கப் பட்டுள்ளார். உளவுத்துறையின் கூடுதல் டிஜிபியாக இருக்கும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலங்கை விவகாரத்தில் நாடகம் நடத்தினார் கருணாநிதி &#8211; ஜெயலலிதா'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/09/post1656.html",
            publishDate:"Jun 9, 2011",
            summary:$sce.trustAsHtml("சட்டப் பேரவையில் நேற்று நிறைவேற்றப் பட்ட தீர்மானம்“தமிழனின் பண்பு யாருக்கும் தாழ்ந்தவனாக இருப்பதல்ல.&nbsp; யாரையும் தாழ்த்துவதல்ல” என்றார் பேரறிஞர் அண்ணா.&nbsp; இப்படிப்பட்ட உயரிய எண்ணத்தைக் கொண்ட தமிழர்கள் உலகெங்கும் பரவி இருக்கிறார்கள். மொழி மற்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கெட்ட பின் ஞானி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/09/post1655.html",
            publishDate:"Jun 9, 2011",
            summary:$sce.trustAsHtml("கூடா நட்பு கேடாய் முடியும்&#8217; என்பது தோல்வியில் பிறந்த ஞானோதயமாகும். கூடா நட்பு என திமுக தலைவர் கருணாநிதி கருதியதும் சுட்டிக்காட்டியதும் யாரை என்பது குறித்து அவரது கட்சிக்குள்ளும் வெளியிலும் விவாதங்கள் தொடர்ந்து நடந்தவண்ணம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குற்றம் புரிந்தவர்&#8230;..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/09/post1654.html",
            publishDate:"Jun 9, 2011",
            summary:$sce.trustAsHtml(" சென்னை, ஜூன் 8: &#8220;&#8221;என்னுடைய பெயரிலோ அல்லது 3/1 போட் கிளப் அவின்யு வீட்டிலோ 24371500 என்ற எண்ணுள்ள பி.எஸ்.என்.எல். தொலைபேசி மட்டுமே உள்ளது. 323 இணைப்புகள் உள்ளன என்று &#8220;தினமணி&#8217; நாளிதழில் வந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உன் கண்ணில் நீர் வழிந்தால்'),
            thumbnail:'/images/1653/rajathi-ammal.-3-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/08/post1653.html",
            publishDate:"Jun 8, 2011",
            summary:$sce.trustAsHtml("கண்ணீர் விட்டார் ராசாத்தி அம்மாள் என்று செய்தி வெளியிட்டதற்கு, ஒரு வாசகர், அந்தக் காட்சியைக் காணக் கொடுத்து வைக்கவில்லையே என்று வருத்தப் பட்டிருந்தார். &nbsp;அந்த வாசகருக்காக..  Share this:Share on FacebookClick to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேடி சகோதரர்களின் நாடித் துடிப்பு.'),
            thumbnail:'/images/1651/Share_holders_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/08/post1651.html",
            publishDate:"Jun 8, 2011",
            summary:$sce.trustAsHtml("  &#8221;அமைச்சர் தயாநிதி மாறனை மையமாக​வைத்துக் கிளம்பி உள்ள விவகாரத்தில், &#8216;ஸ்டெர்லிங்’ சிவசங்கரன் பெயர் அடிபடுகிறது. இவர் நடத்திய ஏர்செல் நிறுவனத்துக்குத்தான் தயாநிதி மாறன் ஸ்பெக்ட்ரம் அலைவரிசை ஒதுக்கீடு வழங்குவதில் தாமதம் செய்ததாகவும். ஆனால், மலேசியாவைச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அந்த ரம்யமான மாலைப் பொழுது….'),
            thumbnail:'/images/1647/DSC_1238-small-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/07/post1647.html",
            publishDate:"Jun 7, 2011",
            summary:$sce.trustAsHtml("&nbsp; முக்கிய விருந்தினர்கள் வந்ததும், ஒரு வழியாக மாலை 6.30க்கு விழா தொடங்கியதும், பார்வையாளர்களிடம் “அப்பாடா.. இப்பவாவது தொடங்கினாங்களே” என்ற நிம்மதியை காண முடிந்தது. முதலில் சவுக்கின் வரவேற்புரையோடு நிகழ்ச்சி தொடங்கியது. சவுக்கு தனது வரவேற்புரையில், இந்தப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாட்டிக் கொண்ட மாறன்….'),
            thumbnail:'/images/1639/IMG_0240-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/06/post1639.html",
            publishDate:"Jun 6, 2011",
            summary:$sce.trustAsHtml(" இதன் அடிப்படையில் தான், தயாநிதி வழக்கறிஞர் நோட்டீஸ் அனுப்பியது, விமான நிலையத்தில் கூவியது எல்லாம். இன்று, தொலைத் தொடர்புத் துறை ஊழியர்கள் சங்கத்தின் சார்பாக, சென்னை அண்ணா சாலையில், ஆர்ப்பாட்டம் நடந்தது.  அந்த ஆர்ப்பாட்டத்திற்கு தலைமையேற்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராதாகிருஷ்ணன் நாயுடுவுக்கு மீண்டும் அதிகாரம் மிக்க பதவி'),
            thumbnail:'/images/1629/Jan_-_15_j-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/06/post1629.html",
            publishDate:"Jun 6, 2011",
            summary:$sce.trustAsHtml("கூடுதல் டிஜிபி கே.ராதாகிருஷ்ணன் என்ற ராதாகிருஷ்ணன் நாயுடு, கடந்த திமுக ஆட்சியில் அத்தனை பதவிகளும் செல்வாக்கான பதவிகளே கிடைத்தன. &nbsp;சிவில் சப்ளைஸ் சிஐடியின் கூடுதல் டிஜிபியாக இருந்தார். அப்போதே, ஒரு பெரிய அரிசிக் கடத்தல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வரவேற்கிறோம் தயாநிதி மாறன். தினமணி அழைப்பு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/04/post1628.html",
            publishDate:"Jun 4, 2011",
            summary:$sce.trustAsHtml("&#8220;தூங்குகிறது சிபிஐ அறிக்கை&#8217; (தினமணி, ஜூன் 2, 2011) என்ற செய்தி முழுக்க முழுக்க தயாநிதி மாறனின் வீட்டு தொலைபேசி இணைப்பகம் குறித்த சிபிஐ-யின் ரகசிய அறிக்கையை பிரதானமாகக் கொண்டு வெளியிடப்பட்டது. அதில் முக்கியமானது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மௌனமே பார்வையால்……'),
            thumbnail:'/images/1627/IMG_0001343-150x111.jpg',
            categories:['default',''],
            href:"/default/2011/06/04/post1627.html",
            publishDate:"Jun 4, 2011",
            summary:$sce.trustAsHtml(" ஆனால், ஒரு பத்திரிக்கை, அதுவும், லட்சக்கணக்கான வாசகர்களால் நம்பப்படக் கூடிய ஒரு பத்திரிக்கை, ஒரு இமாலய ஊழலைப் பற்றி மௌனமாக இருப்பது ரசிக்கத் தக்கதல்ல…. அதுவும், அந்த ஊழலை நியாயப் படுத்தி எழுதினால் அது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பதவி விலகுங்கள். தினமணி தலையங்கம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/04/post1625.html",
            publishDate:"Jun 4, 2011",
            summary:$sce.trustAsHtml("சட்டத்தின் சந்து பொந்துகளில் நுழைந்துகொண்டு தாங்கள் செய்யும் தவறுகளிலிருந்து தப்பித்துக்கொள்ளும் ஒரு கூட்டம் வேறெங்குமே இல்லாத அளவுக்கு இந்தியாவில் அதிகரித்து விட்டிருக்கிறது. குறிப்பாக, ஆட்சியிலும் அதிகாரத்திலும் செல்வாக்குப் படைத்த கட்சித் தலைவர்களாக, அமைச்சர்களாகப் பொறுப்பான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நான் உங்கிட்ட என்ன கேட்டேன்…….'),
            thumbnail:'/images/1624/new-daya-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/03/post1624.html",
            publishDate:"Jun 3, 2011",
            summary:$sce.trustAsHtml("&nbsp; இந்த மாறன் சகோதரர்களுக்கு, தங்கள் மனதில் பெரிய ***** என்று நினைப்பு.&nbsp;&nbsp; யாராக இருந்தாலும், தங்களுடைய பண பலத்தால் விலைக்கு வாங்கி விடலாம் அல்லது, மிரட்டி விடலாம் என்ற இறுமாப்பு. அந்த இறுமாப்பால் தான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தஞ்சையில் உருவாகும் முள்ளிவாய்க்கால் நினைவு முற்றம்! கவிஞர் காசி ஆனந்தன் வேண்டுகோள்!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/03/post1615.html",
            publishDate:"Jun 3, 2011",
            summary:$sce.trustAsHtml("இராசராசசோழன் தஞ்சையில் மாபெரும் கற்கோயிலை எழுப்பினான். ஆயிரம் ஆண்டுகளுக்குப் பிறகும் அது கம்பீரமாகக் காட்சி தருகிறது. தமிழர்களின் சிற்பத் திறனுக்கு எடுத்துக்காட்டாகத் திகழ்கிறது. அதே தஞ்சையில் முள்ளிவாய்க்காலில் பதைக்கப் பதைக்கப் படுகொலை செய்யப்பட்ட தமிழர்களின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜபக்ஷேவை போர்க்குற்றவாளியாக அறிவி……'),
            thumbnail:'/images/1614/IMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/06/03/post1614.html",
            publishDate:"Jun 3, 2011",
            summary:$sce.trustAsHtml("முதல் கட்டமாக 28 மற்றும் 29 மே அன்று மதுரை தேனி, திண்டுக்கல் மற்றும் சிவகங்கை மாவட்டங்களில் பிரச்சாரப் பயணம் நடைபெற்றது. இன்று, சென்னையில் இருந்து மீண்டும் இந்தப் பயணம் தொடங்குகிறது என்பதை பெருமகிழ்ச்சியுடன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேள்விகளும், விளக்கங்களும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/02/post1611.html",
            publishDate:"Jun 2, 2011",
            summary:$sce.trustAsHtml(" பிரகாஷ் அவர்கள், சவுக்கிடம், அவதூறாகப் பேசியதைத் தொடர்ந்து, பிரகாஷ் அவர்களை கடிந்து கொண்டது போலவே, சவுக்கைப் பற்றியும் பல்வேறு சந்தேகங்களை வாசகர்கள் எழுப்பியிருக்கிறார்கள்.&nbsp;&nbsp; அந்த சந்தேகங்களுக்கு விளக்கம் அளிப்பது சவுக்கின் கடமை. சவுக்குக்கு அதன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தயாநிதி மாறனால் இழப்பு ரூ.440 கோடி? &#8220;தூங்குகிறது சி.பி.ஐ. அறிக்கை&#8217;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/02/post1610.html",
            publishDate:"Jun 2, 2011",
            summary:$sce.trustAsHtml("சென்னை, ஜூன் 1: நினைத்தாலே அதிர்ச்சிதரத்தக்க துணிகரமான கொள்ளை! தமிழ்நாட்டைச் சேர்ந்த மத்திய தொலைத்தொடர்புத்துறை அமைச்சர் 323 தொலைபேசிகளைத் தன்னுடைய வீட்டோடு இணைக்குமாறு பி.எஸ்.என்.எல்.லைப் பணிக்கிறார். இது எங்கே நடந்தது தில்லியிலா, இல்லையில்லை சென்னையிலேயேதான்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்கீரனின் தரத்தைப் பாருங்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/06/01/post1605.html",
            publishDate:"Jun 1, 2011",
            summary:$sce.trustAsHtml(" அன்பார்ந்த சவுக்கு வாசகர்களே….&nbsp;&nbsp;&nbsp;&nbsp; நக்கீரன் இதழின் தரத்தைப் பற்றியும், எவ்வளவு கீழ்த்தரமாக அவர்கள் செல்லக் கூடும் என்பதைப் பற்றியும், சவுக்கு பல முறை எழுதியிருக்கிறது. நேற்று, சவுக்கு தளத்தில், நக்கீரன் அலுவலகத்தில் உள்ளே நடந்த மோதல்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சின்னக் குத்தூசி…….'),
            thumbnail:'/images/1604/cinnakuthusi--150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/30/post1604.html",
            publishDate:"May 30, 2011",
            summary:$sce.trustAsHtml("  மறைந்த எழுத்தாளர் சின்னக் குத்தூசி அவர்களுக்கு நேற்று நக்கீரன் இதழ் சார்பில் நினைவேந்தல் நிகழ்ச்சி பெரியார் திடலில் நடந்தது.&nbsp;&nbsp; அந்தக் கூட்டத்தில் பேசிய பெரும்பாலானோர் சின்னக் குத்தூசியை கடவுளுக்கு நிகராக புகழ்ந்து பேசினர்.&nbsp;&nbsp; அவருடைய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் கருவாட்டுக் கடை &#8211; அன்புடன் வரவேற்கிறோம்.'),
            thumbnail:'/images/1597/invitation-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/25/post1597.html",
            publishDate:"May 25, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கேடி சகோதரர்களின் முடிவின் ஆரம்பம் ?'),
            thumbnail:'/images/1595/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_05-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/24/post1595.html",
            publishDate:"May 24, 2011",
            summary:$sce.trustAsHtml(" கருணாநிதியை விட தீய சக்தி இந்த கேடி சகோதரர்கள் (கலாநிதி மற்றும் தயாநிதி) என்று சவுக்கு, “கருணாநிதியை விட பெரிய தீயசக்தி எது ?” என்று ஏப்ரல் 10ம் தேதி எழுதியிருந்தது.அந்தக் கட்டுரையில் முக்கியமான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் இப்படிச் செய்தீர்கள் போலா நாத் ?'),
            thumbnail:'/images/1583/DSC_0414-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/24/post1583.html",
            publishDate:"May 24, 2011",
            summary:$sce.trustAsHtml(" என்ன செய்து விட்டார் போலா நாத் ?&nbsp;&nbsp; மக்களின் வரிப்பணத்தை ஏய்த்து, பொதுத் துறை நிறுவனத்தின் பணத்தை பல கோடி ரூபாய் கொள்ளையடித்துள்ள, சிபிஐ குற்றவாளியிடம் சலுகை பெற்றுள்ளார்.&nbsp;&nbsp; என்ன சலுகை என்ன குற்றம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிர்வலைகளை ஏற்படுத்தும் ஒரு புத்தகம்.'),
            thumbnail:'/images/1571/Wrapper_Final-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/23/post1571.html",
            publishDate:"May 23, 2011",
            summary:$sce.trustAsHtml("&nbsp;ராஜீவ் காந்தி.&nbsp;&nbsp; இவரது மரணத்திற்காக 21 ஆண்டுகளாக 7 பேரை தூக்குக் கொட்டடியிலும், சிறைக் கொட்டடியிலும் வைத்திருந்தாலும், இந்த வழக்கு மத்திய புலனாய்வுத் துறையால், இன்றும் விசாரிக்கப் பட்டு வருகிறது. &nbsp;இன்றும் விசாரணையில் இருக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதல் கோணல் …. ?'),
            thumbnail:'/images/1567/2405269796_0e12e55bb6_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/22/post1567.html",
            publishDate:"May 22, 2011",
            summary:$sce.trustAsHtml(" &nbsp;குறைந்தது 100 நாட்களுக்காவது, விமர்சனம் செய்ய வேண்டிய அவசியத்தை ஏற்படுத்தாது ஜெயலலிதா அரசு என்றுதான் சவுக்கு நம்பியது. ஆனால், இன்று வெளியிட்டுள்ள அமைச்சரவையின் முடிவு, சவுக்கின் முடிவை மாற்றியுள்ளது. சமச்சீர் கல்வியை கைவிட்டு, இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறை எப்படி இருக்கும் ?'),
            thumbnail:'/images/1558/tihar-jail-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/22/post1558.html",
            publishDate:"May 22, 2011",
            summary:$sce.trustAsHtml(" கருணாநிதி அரசு சிறைக் கைதிகளுக்கு ஞாயிறு தோறும் கோழிக்கறி உணவு என்ற அறிவிப்பை வெளியிட்ட போது, பல்வேறு ஊடகங்களிலும், படித்த நடுத்தர வர்க்கம் மத்தியிலும், ‘சிறைக்கைதிகளுக்கு இப்படி சிக்கனெல்லாம் போட்டா அவன் எப்படி திருந்துவான்’..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஹய்யோ&#8230; ஹய்யோ&#8230;..'),
            thumbnail:'/images/1549/image001-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/21/post1549.html",
            publishDate:"May 21, 2011",
            summary:$sce.trustAsHtml("‘ Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாவத்தின் சம்பளம் மரணம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/21/post1546.html",
            publishDate:"May 21, 2011",
            summary:$sce.trustAsHtml("  நேற்று கனிமொழி கைது செய்யப் பட்டு சிறைக்கு அனுப்பப் பட்டதும், பலர் மகிழ்ந்தாலும், சிலர் வருந்தவே செய்தார்கள். ஒரு சிலர், கனிமொழி பாவம் என்றார்கள். மற்றும் சிலர், கருணாநிதிக்கு இந்த முதிர்ந்த வயதில், எத்தனை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதயத்தைப் பற்றி நீங்கள் பேசாதீர்கள் கருணாநிதி&#8230;&#8230;!!!!'),
            thumbnail:'/images/1545/Kanimozhi2_20110520-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/20/post1545.html",
            publishDate:"May 20, 2011",
            summary:$sce.trustAsHtml("கனிமொழியின் முன் ஜாமீன் மனு இன்று தள்ளுபடி செய்யப் பட்டு, உடனடியாக கனிமொழி மற்றும் சரத் குமாரை கைது செய்யுமாறு, டெல்லி சிபிஐ நீதிமன்றம் உத்தரவிட்டது. நீங்களும் என்னென்னவோ தில்லு முள்ளுகளைச் செய்து பார்த்தீர்கள்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கனிமொழி கவிதை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/20/post1532.html",
            publishDate:"May 20, 2011",
            summary:$sce.trustAsHtml("&nbsp;மூடிய விழிகளைத் தாண்டி துளைக்கின்றது குத்திட்ட பார்வை(ஓ.பி.சைனியின் பார்வை) அசைவற்ற முகதில் உறைந்துகிடக்கிறது(ராசாவின் முகத்தில் சவக்களை) புன்னகை.சொல்லொணாப் பதற்றங்கள் நிறைக்கின்றன என்னை.(பெயில் கிடைக்குமா, கிடைக்காதா என்று) அறையின் கதவுகளுக்குப் பின்னால் பத்திரமாய்ப் பதுக்கிவைத்திருக்கிறேன்(ராசாவையும், சரத்குமாரையும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காதாயிரம் ஆன கண்ணாயிரம்.'),
            thumbnail:'/images/1531/Rajanderan._10-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/19/post1531.html",
            publishDate:"May 19, 2011",
            summary:$sce.trustAsHtml(" யார் இந்த கண்ணாயிரம் ? இந்த கண்ணாயிரம் யார் என்பதை வாசகர்கள் கமிஷனர் கண்ணாயிரம் என்ற கட்டுரையைப் படித்துத் தெரிந்து கொள்ளுங்கள். சரி இவர் எப்படி காதாயிரம் ஆனார் ? இன்று இவரை உளவுத்துறை கூடுதல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மே 18'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/18/post1525.html",
            publishDate:"May 18, 2011",
            summary:$sce.trustAsHtml("இன்று ஈழத்தமிழினத்தின் &#8220;கரிநாள்&#8221; காலத்தால் மறக்க முடியாத கறுப்புத்தினம்!!&nbsp; முள்ளிவாய்க்கால் மூர்க்கமான குண்டு மழைக்குள் வஞ்சகமாக முக்குளித்த&nbsp; இரண்டாவது குருதி வருடம்!!!. சொல்லில் வடிக்க முடியாத&nbsp; சிறுமை கொண்டு இந்தியாவும் இலங்கையும் ஈழத்தமிழினத்துக்கு&nbsp; ஈமைக்கிரியை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்று மே-18 இன அழிப்பு நாள் மற்றும் போர்க்குற்ற நாள்.'),
            thumbnail:'/images/1523/may18-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/18/post1523.html",
            publishDate:"May 18, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அப்பிடி போடு&#8230; போடு&#8230;. போடு&#8230;..'),
            thumbnail:'/images/1521/jaya_win_1a-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/17/post1521.html",
            publishDate:"May 17, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைமைச் செயலகம். புதியதா ?  பழையதா ?'),
            thumbnail:'/images/1519/20110115_secretriatechenna-copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/16/post1519.html",
            publishDate:"May 16, 2011",
            summary:$sce.trustAsHtml(" எல்லார் மனதிலும் உள்ள கேள்வி இது. &nbsp;வாசகர்களில் பலர், இந்தக் கட்டிடம் மக்கள் வரிப்பணத்தில் கட்டப் பட்டதால், ஈகோ பார்க்காமல், புதிய கட்டிடத்தில் ஜெயலலிதா பணியாற்ற வேண்டும் என்று தெரிவித்துள்ளனர்.&nbsp;&nbsp; ஒரு வாசகர் இன்னும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் செல்வி ஜெயலலிதா அவர்களே&#8230;..'),
            thumbnail:'/images/1511/3335459439_154e7e47cb_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/15/post1511.html",
            publishDate:"May 15, 2011",
            summary:$sce.trustAsHtml("வாழ்த்துக்கள் செல்வி ஜெயலலிதா.&nbsp;&nbsp; உங்களின் அரசியல் சகாப்தம் முடிந்து விட்டது என்று பத்திரிக்கைகளும், எதிர்க்கட்சிகளும் ஆருடம் கூறிய போதெல்லாம் அவைகளை பொய்யென்று நிரூபித்துக் காட்டியவர் நீங்கள். 1996ல் நடந்த தேர்தலில் அதிமுக எதிர்ப்பு அலையையும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அந்த இனிய நாள் என்று வரும் ?'),
            thumbnail:'/images/1508/kanimozhi_low_res-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/14/post1508.html",
            publishDate:"May 14, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நான்&#8230; உயர உயரப் போகிறேன்&#8230;..'),
            thumbnail:'/images/1506/25045703-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/14/post1506.html",
            publishDate:"May 14, 2011",
            summary:$sce.trustAsHtml("  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்களே பிரதானம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/13/post1503.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml("காலையிலிருந்து சவுக்குக்கு வாழ்த்துக்கள், தொலைபேசியிலும், நேரிலும் குவிந்த வண்ணம் உள்ளன.&nbsp;&nbsp; திமுகவின் இந்த வீழ்ச்சிக்கு சவுக்கு ஒரு முக்கிய காரணம் என்று தெரிவித்தனர்.&nbsp;&nbsp; திமுகவின் இந்த வீழ்ச்சி ஊர் கூடி இழுக்கப் பட்ட தேர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாக்களித்த மக்களுக்கு நன்றி  &#8211; ஜெயலலிதா'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/13/post1502.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml("இன்று செய்தியாளர்களை சந்தித்த ஜெயலலிதா பெருவாரியாக வாக்களித்து, அதிமுகவை வெற்றி பெறச் செய்த மக்களுக்கு நன்றி தெரிவித்தார். &nbsp; &nbsp;மக்கள் திமுக மீது இருந்த கோபத்தை அதிமுகவுக்கு வாக்களித்ததன் மூலம் தீர்த்துக் கொண்டனர் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கோபால்&#8230; சோரம் போய் விட்டீர்களே கோபால்.'),
            thumbnail:'/images/1501/Gopal-nakkeran6-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/13/post1501.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml(" ஊழல் பண்றதுக்கு எத்தனையோ தொழில் இருக்கும் போது, இந்தப் புனிதமான பத்திரிக்கை தொழிலையாக கோபால் பயன்படுத்தனும், பத்திரிக்கை தொழிலையா பயன்படுத்தனும். ? &nbsp; பேசாமல், நக்கீரன் பத்திரிக்கையை மூடி விட்டு, ஜானி ஜான் கான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஹய்யோ.. ஹய்யோ&#8230;. சிப்பு சிப்பா வருது'),
            thumbnail:'/images/1499/IMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/13/post1499.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml("  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள் தீர்ப்பு'),
            thumbnail:'/images/1498/karunanithi1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/13/post1498.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதற்கு தலைப்பு இல்லை'),
            thumbnail:'/images/1496/30pic1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/13/post1496.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml("&nbsp;         Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கெட்ட பய சார் கருணாநிதி….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/13/post1483.html",
            publishDate:"May 13, 2011",
            summary:$sce.trustAsHtml("இன்னும் 60 நிமிடங்களில் முடிவுளின் தன்மை தெரிந்து விடும். இருந்தாலும் இதை எழுதியே ஆக வேண்டும் என்று உள்ளுணர்வு சொல்லுகிறது. முள்ளும் மலரும் படத்தில், ரஜினிகாந்த் தன்னம்பிக்கையோடு, வேலை போன பிறகும், ஒரு கை போன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அண்ணா பல்கலைகழகமும், ஆளுனர் மாளிகையும்.'),
            thumbnail:'/images/1482/150810-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/11/post1482.html",
            publishDate:"May 11, 2011",
            summary:$sce.trustAsHtml(" அண்ணா பல்கலைகழகமும், ஆளுனர் மாளிகையும். இரண்டுக்கும் என்ன சம்பந்தம் ? இரண்டும் எதிர் எதிரே அமைந்துள்ளன. அதுவா ? இல்லை. ஆட்டுக்கு தாடியும், ஆளுனர் பதவியும் தேவையற்றவை என்பதே திமுகவின் கொள்கை. அப்படிப்பட்ட கொள்கையை உடைய திமுக,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழம் கொன்றானுக்கு இறுதி அஞ்சலி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/05/10/post1476.html",
            publishDate:"May 10, 2011",
            summary:$sce.trustAsHtml("மே13&#8242; நிகழ இருப்பது&nbsp; ஆண்டவன் கட்டளை.. ஈழத்து வேதனையின்&nbsp; ஏக்க விளைச்சல். கோபப்படாமல் ஐயா குறித்து வைத்துக்கொள்ளுங்கள் வெளியில் நீங்கள் வேசமிட்டு&nbsp; நாடகம் ஆடினாலும் உங்கள் கள்ளமான&nbsp; உள்ளுணர்வில்&nbsp; இப்படித்தான் நடக்கும் என்று கருக்கட்டி&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீங்கள் இறந்து விட்டீர்கள் கருணாநிதி…..'),
            thumbnail:'/images/1475/Kalangher-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/09/post1475.html",
            publishDate:"May 9, 2011",
            summary:$sce.trustAsHtml("1949ம் ஆண்டு, திராவிட முன்னேற்றக் கழகத்தை துவக்கி வைத்து, அண்ணா என்ன பேசினார் என்பது நினைவிருக்கிறதா கருணாநிதி அவர்களே… ? நீங்கள் மறந்திருப்பீர்கள். “திராவிட முன்னேற்றக் கழகம் தோன்றி விட்டது. திராவிடக் கழகத்திற்குப் போட்டியாக அல்ல...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதயம் இனிக்க வேண்டும், கண்கள் பனிக்க வேண்டும்.'),
            thumbnail:'/images/1467/mk_kanimozhi_20110509-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/07/post1467.html",
            publishDate:"May 7, 2011",
            summary:$sce.trustAsHtml("“இதயம் இனித்தது, கண்கள் பனித்தன” இந்த பிரபலமான வார்த்தைகளைச் சொன்னது யார் ? வேறு யார்…..? கருணாநிதி தான்.&nbsp;&nbsp;&nbsp;&nbsp; இந்த வார்த்தைகளை இவர் சொன்ன தருணம் எது தெரியுமா ?&nbsp;&nbsp; மாறன் சகோதரர்கள், தயாளு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது என்ன நீதியோ…. ?'),
            thumbnail:'/images/1437/madras-high-court-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/03/post1437.html",
            publishDate:"May 3, 2011",
            summary:$sce.trustAsHtml("சமீபத்தில் சென்னை உயர்நீதிமன்றத்தால் வழங்கப் பட்ட ஒரு ஜாமீன் இந்தக் கேள்வியை எழுப்புகிறது. சவுக்கு இன்று உயிரோடு இருப்பதற்கு காரணம் : வழக்கறிஞர்கள். சவுக்கு ஜாபர் சேட் போன்ற உயர் அதிகாரிகளின் பல்வேறு சதிச்செயல்களை முறியடித்ததற்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிபிஐ வானத்திலிருந்து குதித்து வந்ததா ?'),
            thumbnail:'/images/1432/mm_singh_a_raja_20101129-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/05/02/post1432.html",
            publishDate:"May 2, 2011",
            summary:$sce.trustAsHtml(" 1991-1996 அதிமுக ஆட்சிக் காலத்தில், அப்போது எதிர்க்கட்சியாக இருந்த, காங்கிரஸ், பல்வேறு வழக்குகளில் சிபிஐ விசாரணைக்கு உத்தரவிட வேண்டும் என்று பலத்த கோரிக்கை எழுப்பினர். இதற்கு சட்டசபையில் பதிலளித்த, ஜெயலலிதா, சிபிஐ என்ன வானத்திலிருந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புலிகளின் தளபதி ரமேஷ் சித்திரவதைக்குப் பின் சுட்டுக்கொலை'),
            thumbnail:'/images/1414/SLA_war_crime_on_LTTE_Ramesh-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/28/post1414.html",
            publishDate:"Apr 28, 2011",
            summary:$sce.trustAsHtml(" விடுதலைப்புலிகளின் தளபதி ரமேஷ் சித்திரவதை செய்யப்பட்ட பின்னர் சீருடை அணிந்து சுட்டுக் கொல்லப்பட்ட படம் போர்க்குற்ற ஆதாரப் படங்களில் இடம்பெற்றுள்ளதாக இலங்கைத் தமிழ் இணையதளங்கள் தெரிவித்துள்ளன.ரமேஷ் ராணுவத்திடம் சரணடைந்த பின்னர் கடுமையான விசாரணைக்கு உட்படுத்தப்படும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழினத் துரோகிகள்..! தினமணி தலையங்கம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/28/post1410.html",
            publishDate:"Apr 28, 2011",
            summary:$sce.trustAsHtml(" இலங்கை அரசு திட்டமிட்டு இனப்படுகொலை நடத்தி வருகிறது என்று 2009-ல் எல்லோரும் கூறியதைத்தான் இப்போது ஐக்கிய நாடுகள் குழு அறிக்கை உறுதிப்படுத்தி இருக்கிறது. அப்போது, இந்தியா எப்படி, இந்த இனப்படுகொலை குறித்து எல்லோரும் குரல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சோதனைகளை உரங்களாக்கி வெல்லும் திமுக.  குஞ்சாமணி அறிக்கை'),
            thumbnail:'/images/1409/dk_veeramani_statement-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/27/post1409.html",
            publishDate:"Apr 27, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நெஞ்சைத் தொட்டுச் சொல்லுங்கள் ராதாகிருஷ்ணன்.'),
            thumbnail:'/images/1407/rad-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/27/post1407.html",
            publishDate:"Apr 27, 2011",
            summary:$sce.trustAsHtml(" யார் இந்த ராதாகிருஷ்ணன் ? சர்வபள்ளி ராதாகிருஷ்ணனா ? இல்லை. இல்லை.&nbsp;&nbsp; சட்டம் ஒழுங்கை காக்க வேண்டிய பொறுப்பில் இருந்து கொண்டு துளியும் ஒழுங்கில்லாத கே.ராதாகிருஷ்ணன் நாயுடுதான் இது. அப்படி என்ன செய்து விட்டார் ராதாகிருஷ்ணன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உங்குத்தமா&#8230; எங்குத்தமா&#8230; யார நான் குத்தம் சொல்ல'),
            thumbnail:'/images/1402/34451843-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/26/post1402.html",
            publishDate:"Apr 26, 2011",
            summary:$sce.trustAsHtml("     Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீங்களே ஜெயிச்சுக்கங்க பாஸு.'),
            thumbnail:'/images/1399/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_03-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/25/post1399.html",
            publishDate:"Apr 25, 2011",
            summary:$sce.trustAsHtml(" தேர்தல் முடிந்த ஒரு வாரமாக, கேடி சகோதரர்களில் தொல்லை தாங்கவே முடியவில்லை. தினம், தினம் ஒரு புதிய தியரியை கிளப்பி விட்ட வண்ணம் இருக்கிறார்கள்.&nbsp;&nbsp; இவர்கள் ஒரு புறம் என்றால், இந்த குருமாராஜ் என்ற கொசுத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்து நாளேட்டின் கருணாநிதி.'),
            thumbnail:'/images/1397/The-Hindu-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/24/post1397.html",
            publishDate:"Apr 24, 2011",
            summary:$sce.trustAsHtml("  இந்து பத்திரிக்கை தான் இப்படி கருணாநிதியால் அன்போடு மவுண்ட் ரோடு மஹாவிஷ்ணு என்று அழைக்கப் பட்டது. இந்து பத்திரிக்கைக்கு, ஒரு மிகப் பெரிய பாரம்பரியம் உள்ளது. வீரப்பனைப் பற்றி புத்தகம் எழுதிய கர்நாடகாவின் முன்னாள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணை இல்லாத கருணாநிதியே….'),
            thumbnail:'/images/1388/Photo00083-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/22/post1388.html",
            publishDate:"Apr 22, 2011",
            summary:$sce.trustAsHtml("நீயும் உன் குடும்பமும், ஸ்பெக்ட்ரம் பணத்தை எண்ணிக் கொண்டிருந்த போது, நாங்கள் எங்கள் இனத்தின் விடுதலைக்காக போராடிக் கொண்டிருந்தோம்.&nbsp;&nbsp; அடிமைப் பட்டுக் கிடந்த எம் தமிழினத்தை விடுவிக்கப் போராடிய ஒரே குற்றத்திற்காக, எம்மையும், எம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அற்புதமான ஆலோசனைகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/21/post1386.html",
            publishDate:"Apr 21, 2011",
            summary:$sce.trustAsHtml("  அன்பார்ந்த உறவுகளே, புதிய அரசு பதவியேற்ற உடன் செய்ய வேண்டிய குறுகிய கால மற்றும் நீண்ட கால திட்டங்களைப் பற்றி தங்கள் ஆலோசனைகளை வெளியடுங்கள் என்று சவுக்கு விடுத்த வேண்டுகோளை ஏற்று, அன்பு உறவுகள், தங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பார்ந்த கலைஞர் அவர்களுக்கு….'),
            thumbnail:'/images/1385/70b35ea697e2c57d67e9c56c59d9-grande-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/19/post1385.html",
            publishDate:"Apr 19, 2011",
            summary:$sce.trustAsHtml(" அன்பார்ந்த கலைஞர் அவர்களுக்கு சவுக்கின் அன்பான வணக்கம். இது வரை உங்களை சவுக்கு கலைஞர் என்று அழைத்ததில்லை. ஆனால், கலைஞர் என்று அழைப்பதுதான் பிடிக்கும் என்பதால், இப்போது சவுக்கு உங்களை கலைஞர் என்றே அழைக்கிறது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய தலைமைச் செயலக கட்டிடமும், டாஸ்மாக் பாரும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/18/post1376.html",
            publishDate:"Apr 18, 2011",
            summary:$sce.trustAsHtml("இந்தக் கட்டுரை, 30 மே 2010 அன்று எழுதப் பட்டது. அந்தக் கட்டுரை இப்போது மறு பதிப்பு செய்வது பொருத்தமாகவே இருக்கிறது. &nbsp; அப்போது, கருணாநிதி, புதிய தலைமைச் செயலக கட்டிடம் கட்டினாலே ஆயிற்று,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அய்யோ .. குஞ்சாமணி தொந்தரவு தாங்க முடியலையே&#8230;'),
            thumbnail:'/images/1375/asiriyar_arikkai_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/18/post1375.html",
            publishDate:"Apr 18, 2011",
            summary:$sce.trustAsHtml("  Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்னால முடியலையே&#8230;. !!!!!'),
            thumbnail:'/images/1372/001-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/18/post1372.html",
            publishDate:"Apr 18, 2011",
            summary:$sce.trustAsHtml("இவனுங்க ஈசியா மேட்ச் பிக்சிங் பண்ணி ஜெயிச்சுடுறானுங்க.. &nbsp;நானும் பண்ணலாம்னு பாத்தா, எலெக்ஷன் கமிஷன் விடமாட்டேங்குது... &nbsp;ஹய்யோ. ஹய்யோ. Share this:Share on FacebookClick to share on TwitterClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேலையை தொடங்குவோம்….'),
            thumbnail:'/images/1371/P4-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/18/post1371.html",
            publishDate:"Apr 18, 2011",
            summary:$sce.trustAsHtml(" தேர்தல் நடக்கும் வரை, அயராது பணியாற்றினோம்.&nbsp;&nbsp; அதிமுக வெற்றிக் கனியை பறிக்கும் சூழலை ஒருவர் இருவர் அல்ல…. ஆயிரக்கணக்கானோர் சளைக்காமல் பணியாற்றி உருவாக்கினோம்.&nbsp;&nbsp; அதிமுக நாளை பெறப்போகும் வெற்றியில், சவுக்கு வாசகர்களுக்கு 0.000005 சதவிகிதம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திரும்பிப் பார்க்கிறேன்.'),
            thumbnail:'/images/1368/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/15/post1368.html",
            publishDate:"Apr 15, 2011",
            summary:$sce.trustAsHtml(" இன்று சவுக்குக்கு ஆதரவாக, ஆயிரக்கணக்கான அன்பு உள்ளங்கள் இருக்கின்றன. நேரிலும் தொலைபேசியிலும், மின்னஞ்சல் மூலமாகவும் அன்பைப் பொழிபவர்கள் பலர். ஆனால், 2008 எப்படி இருந்தது என்பதை இப்போது திரும்பிப் பார்க்கையில் மலைப்பாகவே இருக்கிறது.&nbsp;2008ல் தொலைபேசி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வரலாறு படைத்த தமிழகம்.'),
            thumbnail:'/images/1365/KR13THOGAIMALAI_550476f-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/14/post1365.html",
            publishDate:"Apr 14, 2011",
            summary:$sce.trustAsHtml("தமிழகம் புதிய வரலாறு படைத்துள்ளது.&nbsp;&nbsp; 80 சதகிதம் வாக்குப் பதிவு செய்து புதிய வரலாற்றை படைத்துள்ளார்கள் தமிழக மக்கள். பல பூத்களில் காலை 8 மணிக்கு முன்பே வரிசையில் நிற்கத் தொடங்கினர் மக்கள். பொதுவாக வரிசையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரிப்பீட்டு,,,,,'),
            thumbnail:'/images/1357/MAA_9164_copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/14/post1357.html",
            publishDate:"Apr 14, 2011",
            summary:$sce.trustAsHtml(" நேற்று, கருணாநிதி மீண்டும் பொன்னர் சங்கர் திரைப்படத்தை ரஜினி மற்றும் ஜால்ரா குடும்பத்தினரோடு பார்த்தார். &nbsp; Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரணகளத்திலும் ஒரு கிளுகிளுப்பு'),
            thumbnail:'/images/1355/00013-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/13/post1355.html",
            publishDate:"Apr 13, 2011",
            summary:$sce.trustAsHtml("தேர்தல் தொடர்பாக இத்தனை களேபரங்கள் நடந்து கொண்டிருக்கையில், ஜெயலலிதா, திமுகவினர் வன்முறையை கட்டவிழ்த்து விட, திட்டமிட்டுருக்கிறார்கள் என்று நேரடியாக குற்றம் சாட்ட, திமுகவினர் வாக்காளர்களுக்கு விநியோகம் செய்ய எடுத்துச் சென்ற பணம், பல்வேறு இடங்களில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என்ன செய்ய வேண்டும் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/12/post1353.html",
            publishDate:"Apr 12, 2011",
            summary:$sce.trustAsHtml("வாசகர்கள் பல்வேறு பேர், பின்னூட்டங்களிலும், நேரிலும், தொலைபேசியிலும், யாருக்கு வாக்களிப்பது, என்ன செய்ய வேண்டும் என்று தொடர்ந்து கேள்விகளை எழுப்பிய வண்ணம் உள்ளனர். நம்முன் இப்போது உள்ள தலையாய கடமை, திமுக காங்கிரஸ் கூட்டணி வீழ்த்தப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழப் போரில் கருணா குடும்பத்தின் சாட்சியம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/12/post1352.html",
            publishDate:"Apr 12, 2011",
            summary:$sce.trustAsHtml("வன்னிப் போரில் தமிழீழ தேசம் சந்தித்த பேரழிவுக்கும், பின்னடைவுக்குமான மூலகாரணங்களை கண்டறிவதற்கான தேடல் உலகத் தமிழர்களிடையே தொடரும் நிலையில், ‘முள்ளிவாய்க்காலில் கழுத்தறுத்த மர்ம நபர்’ என்ற தலைப்பில் கடந்த இரண்டு இதழல்களுக்கு முன்னர் கட்டுரையொன்றை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 11'),
            thumbnail:'/images/1351/karunanithi-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/12/post1351.html",
            publishDate:"Apr 12, 2011",
            summary:$sce.trustAsHtml("           Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக மக்களுக்கு மார்க்சிஸ்ட் கட்சி வேண்டுகோள்'),
            thumbnail:'/images/1343/Appeal_to_voters_Page_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/12/post1343.html",
            publishDate:"Apr 12, 2011",
            summary:$sce.trustAsHtml("       Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முறைகேடுகள் நடந்தால் தேர்தல் ரத்து: பிரவீண் குமார் எச்சரிக்கை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/12/post1340.html",
            publishDate:"Apr 12, 2011",
            summary:$sce.trustAsHtml("&nbsp;சட்டப் பேரவைத் தேர்தலில் முறைகேடுகள் நடந்தால் வாக்குப் பதிவை ரத்து செய்யவும், மறு தேர்தல் நடத்தவும் தேர்தல் ஆணையத்துக்கு அதிகாரம் உள்ளதாக தமிழக தலைமைத் தேர்தல் அதிகாரி பிரவீண் குமார் எச்சரித்துள்ளார். வாக்காளர்களுக்கு அதிகளவில் பணம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஸ்பெக்ட்ரம் ஊழல்: அதிமுகவினர் நூதன பிரச்சாரம்.'),
            thumbnail:'/images/1339/22434109-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/11/post1339.html",
            publishDate:"Apr 11, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா 10'),
            thumbnail:'/images/1337/kulla-narikkootam1bala-cartoons--150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/10/post1337.html",
            publishDate:"Apr 10, 2011",
            summary:$sce.trustAsHtml("             Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('&#8221;என் வாக்கு விற்பனைக்கு அல்ல!&#8221;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/10/post1330.html",
            publishDate:"Apr 10, 2011",
            summary:$sce.trustAsHtml("அன்புக்கினிய வாக்காளப் பெருமக்களே. வணக்கம். வளர்க நலம்!&#8216;நீங்கள் எப்படி வாக்களிக்க வேண்டும்? யாருக்கு வாக்களிக்க வேண்டும்?’ என்று&nbsp;வழிகாட்டும் தகுதி எனக்கு இருப்பதாக நான் நம்பவில்லை. என் தலைக்குப் பின்னால் எந்த ஒளிவட்டமும் இல்லை என்பதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 9'),
            thumbnail:'/images/1329/32311500-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/10/post1329.html",
            publishDate:"Apr 10, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('87 வயது முதியவர் மீண்டும் முதல்வராக வேண்டுமா? கேரளத்தில் ராகுல் பிரசாரம்'),
            thumbnail:'/images/1327/4286899457_573c46a83d_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/10/post1327.html",
            publishDate:"Apr 10, 2011",
            summary:$sce.trustAsHtml(" &nbsp;87 வயதாகிவிட்ட அச்சுதானந்தன் மீண்டும் கேரள முதல்வராக வேண்டுமா? என்று மக்கள் யோசிக்க வேண்டும். இளைஞர்களுக்கு அதிக வாய்ப்பு தந்துள்ள காங்கிரûஸ ஆதரிக்க வேண்டுமென ராகுல் காந்தி பிரசாரம் மேற்கொண்டுள்ளார்.&nbsp;கேரள மாநில சட்டப் பேரவைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('87 வயது முதியவர் மீண்டும் முதல்வராக வேண்டுமா? கேரளத்தில் ராகுல் பிரசாரம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/10/post1326.html",
            publishDate:"Apr 10, 2011",
            summary:$sce.trustAsHtml(" &nbsp;87 வயதாகிவிட்ட அச்சுதானந்தன் மீண்டும் கேரள முதல்வராக வேண்டுமா? என்று மக்கள் யோசிக்க வேண்டும். இளைஞர்களுக்கு அதிக வாய்ப்பு தந்துள்ள காங்கிரûஸ ஆதரிக்க வேண்டுமென ராகுல் காந்தி பிரசாரம் மேற்கொண்டுள்ளார்.&nbsp;கேரள மாநில சட்டப் பேரவைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நான் முதலமைச்சர் தானா ?  கருணாநிதி புலம்பல்.'),
            thumbnail:'/images/1324/karunanidhi_20080805-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/10/post1324.html",
            publishDate:"Apr 10, 2011",
            summary:$sce.trustAsHtml(" தேர்தல் கமிஷனின் அதிகாரம் பற்றி மத்திய அரசு இனியாவது தீர்மானிக்க வேண்டும் என்று முதல் அமைச்சர் கருணாநிதி கூறினார்.கடலூர் மாவட்டத்தில் ஜனநாயக முற்போக்கு கூட்டணி சார்பில் போட்டியிடும் வேட்பாளர்களை ஆதரித்து கடலூர் மஞ்சக்குப்பம் மைதானத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதியை விட பெரிய தீயசக்தி எது ?'),
            thumbnail:'/images/1322/Dayanidhi_Kalanidhi_Maran_Loyola_Alumni_Association_2010_stills_03-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/09/post1322.html",
            publishDate:"Apr 9, 2011",
            summary:$sce.trustAsHtml(" கருணாநிதி எத்தனை பெரிய தீய சக்தி என்பதை நீங்கள் அறிவீர்கள். ஆனால் கருணாநிதியை விட மிகப் பெரிய தீயசக்தி ஒன்று இருக்கிறது. அது எதுவென்றால், கேடி சகோதரர்கள் என்று அழைக்கப் படும் கலாநிதி மற்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 9'),
            thumbnail:'/images/1303/2251343-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/09/post1303.html",
            publishDate:"Apr 9, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது மக்கள் குரல்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/09/post1297.html",
            publishDate:"Apr 9, 2011",
            summary:$sce.trustAsHtml("தினமணி தலையங்கம்.27 வயது இளைஞனுக்கு ஏற்பட வேண்டிய கோபம், 72 வயது காந்தியவாதிக்கு ஏற்பட்டிருக்கிறது. லஞ்ச ஊழலில் ஈடுபடுவோரைத் தண்டிக்க வகை செய்ய லோக்பால் திருத்த மசோதாவை வலியுறுத்தி சாகும்வரை உண்ணாவிரதப் போராட்டம் தொடங்கியிருக்கிறார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேர்தல் முடிவுகள் பற்றி உளவுத் துறையின் சர்வே'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/08/post1296.html",
            publishDate:"Apr 8, 2011",
            summary:$sce.trustAsHtml("டேபிளில் கிடந்த சர்வே ரிப்போர்ட்களைப் புரட்டினார் கழுகார்!&nbsp;தமிழகத் தேர்தல் கணிப்பு பற்றி பல்வேறு மீடியாக்களில் வந்த விவரங்களைப் பார்த்துவிட்டு, நம் பக்கம் திரும்பினார்.&#8221;25 வருடங்களாகத் தமிழகத் தேர்தல்களை சந்தித்து களம் பல கண்ட கழுகாரே.&nbsp;&nbsp;இந்தத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மதுரையில் மையம்கொண்ட மூன்று வணங்காமுடிகள்!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/08/post1294.html",
            publishDate:"Apr 8, 2011",
            summary:$sce.trustAsHtml(" சகாயம், கண்ணப்பன், ஆஸ்ரா கர்க். இந்த மூன்று பேரும்தான் &nbsp;தமிழகத்தில் இன்றைய சூழலில் யாருக்கும் தலை வணங்காத வணங்காமுடிகள்! மதுரையில் அழகிரியைத் தாண்டி எதுவும் நடக்காது என்பது எழுதப்படாத விதி. ஆனால், இந்த மூவரும் அந்த விதியைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலங்கைத் தமிழர் பிரச்சனைக்காக பதவியை துறக்க தயார் &#8211; மு கருணாநிதி'),
            thumbnail:'/images/1293/27cm7-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/08/post1293.html",
            publishDate:"Apr 8, 2011",
            summary:$sce.trustAsHtml(" நவம்பர் 14, 2008 அன்று, தமிழக சட்டப்பேரவையில், ஈழத்தமிழர்களின் இன்னலை துடைப்பதற்க பதவியை துறக்கவும் தயார் என்று கருணாநிதி பேசினார்.&nbsp; அதற்குப் பிறகு என்ன நடந்தது, எத்தனை உயிர்கள் போயின என்பதை நாம் அறிவோம்.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா 8'),
            thumbnail:'/images/1277/24832296-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/08/post1277.html",
            publishDate:"Apr 8, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மதிமுகவுக்கு மூடுவிழா. திமுகவோடு இணைப்பு கருணாநிதி சூசகம்'),
            thumbnail:'/images/1275/18cm14-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/08/post1275.html",
            publishDate:"Apr 8, 2011",
            summary:$sce.trustAsHtml("மதுரையில் செய்தியாளர்களுக்கு வியாழக்கிழமை அவர் அளித்த பேட்டி&nbsp;தேர்தல் ஆணையம் பாரபட்சமாக செயல்படுவதாக நான் சொல்லவில்லை. தேர்தல் விதிமீறல்கள் தொடர்பான புகார்கள் மீது நடவடிக்கை எடுக்கும்போது பாரபட்சமில்லாமல், நீதிமன்றம்போல் நடுநிலையுடன் செயல்பட வேண்டும். நீதிமன்றங்களேகூட சில..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜெயலலிதா, விஜயகாந்துக்கு தேர்தல் ஆணையம் நோட்டீஸ்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/07/post1274.html",
            publishDate:"Apr 7, 2011",
            summary:$sce.trustAsHtml("திமுக தலைவர் கருணாநிதி மற்றும் அவரது குடும்ப உறுப்பினர்கள் குறித்து அவதூறாக பேசியதாக அளிக்கப்பட்ட புகார் தொடர்பாக, அதிமுக பொதுச் செயலாளர் ஜெயலலிதா மற்றும் தேசிய முற்போக்கு திராவிட கழகத் தலைவர் விஜயகாந்த் ஆகியோருக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மறக்க முடியுமா  &#8211; ஆனந்த விகடன் தலையங்கம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/07/post1273.html",
            publishDate:"Apr 7, 2011",
            summary:$sce.trustAsHtml(" கடந்த ஐந்து ஆண்டு கால ஆட்சியில், ஈட்டி முனையாகப் பாய்ந்து வந்த பல கேள்விகளுக்கு, முதல்வர் கருணாநிதி பதில் சொல்ல முடியாமல் பரிதவித்து நின்றதற்குப் பல காரணங்கள்! அதற்கான வேரைத் தேடினால், திசை மாறிப்போன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரவு நேரங்களில் மின்வெட்டு கூடாது'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/07/post1272.html",
            publishDate:"Apr 7, 2011",
            summary:$sce.trustAsHtml("சென்னை, ஏப். 6: சட்டப் பேரவைத் தேர்தலை ஒட்டி, வெள்ளிக்கிழமை முதல் வாக்குப்பதிவு முடிவடையும் தேதி (ஏப்ரல் 13) வரை இரவு நேரங்களில் மின்வெட்டு செய்யக் கூடாது என தேர்தல் ஆணையம் உத்தரவிட்டுள்ளது. தமிழகத்தில் நிலவிவரும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 7'),
            thumbnail:'/images/1271/24458359-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/07/post1271.html",
            publishDate:"Apr 7, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('என் வாழ்வுக்காக, என் சுகத்துக்காக, நான் வாழவில்லை &#8211; கருணாநிதி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/04/07/post1269.html",
            publishDate:"Apr 7, 2011",
            summary:$sce.trustAsHtml("மதுரை, மார்ச் 7&nbsp; : மதுரையில் நடந்த திமுக பிரமாண்ட பொதுக்கூட்டத்தில் முதல்வர் கருணாநிதி பேசியதாவது&nbsp; : மதுரை மண்டலத்தில் கட்சியை வளர்க்கும் தானைத்தலைவராக மறைந்த மேயர் முத்து செயல்பட்டார். அண்ணாவின்&nbsp;தளபதிகளில் மிகச்சிறந்த தளபதியாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்கீரன் பொய்ச் செய்திகளை வெளியிடுவது வழக்கமே.. காமராஜ்'),
            thumbnail:'/images/1266/IMG_9359-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/06/post1266.html",
            publishDate:"Apr 6, 2011",
            summary:$sce.trustAsHtml(" நக்கீரன் பத்திரிக்கை, எப்படிப் பட்ட ஒரு மிகக் கேவலமான பத்திரிக்கை என்பதை சவுக்கு வாசகர்கள் நன்கு அறிவீர்கள்.&nbsp;&nbsp; உண்மைகளை மறைப்பது, பொய்ச் செய்திகளை வெளியிடுவது, நல்லவர்களை தூற்றுவது, பொய்யர்களையும், புரட்டுக் காரர்களையும், நல்லவர்களாக எழுதுவது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்களை ஏமாற்றும் நயவஞ்சகத்தனத்தின் ஒரு பகுதியே கருத்துக் கணிப்புகள் &#8211; தங்கபாலு'),
            thumbnail:'/images/1258/Thangabalu_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/06/post1258.html",
            publishDate:"Apr 6, 2011",
            summary:$sce.trustAsHtml(" தங்களுக்கு எதிரான நாம் தமிழர் கட்சித் தலைவர் சீமானின் பிரசாரத்தால் கவலைப்படவில்லை என்று தமிழக காங்கிரஸ் தலைவர் தங்கபாலு தெரிவித்தார்.சென்னையில் நிருபர்களிடம் தங்கபாலு பேசுகையில் , &#8220;ராகுல் காந்தி ஒவ்வொரு முறையும் தமிழகத்திற்கு வரும்போது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 7'),
            thumbnail:'/images/1254/23721734-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/06/post1254.html",
            publishDate:"Apr 6, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதியின் பச்சைப் பொய்&#8230;..'),
            thumbnail:'/images/1244/l2007052413423-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/05/post1244.html",
            publishDate:"Apr 5, 2011",
            summary:$sce.trustAsHtml("ரத்தன் டாடா, ஆ.ராசாவை பாராட்டி, கருணாநிதிக்கு ஒரு கடிதத்தை எழுதி, அதை நீரா ராடியாவிடம் சீலிடப்பட்ட உறையில் வழங்கியதாக ஊடகங்களில் பிப்ரவரி மாதத்தில் செய்தி வெளி வந்தது. &nbsp;இச்செய்தியை ஒட்டி கருணாநிதி ஒரு அறிக்கை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 6'),
            thumbnail:'/images/1242/22914734-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/05/post1242.html",
            publishDate:"Apr 5, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பகுத்தறிவுப் பகலவன்,'),
            thumbnail:'/images/1250/22nov_dmk-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/04/post1250.html",
            publishDate:"Apr 4, 2011",
            summary:$sce.trustAsHtml(" ஆரியர் &#8211; திராவிடர் யுத்தம் ஆரம்பம் ஆகிவிட்டது!’ என்றகருணாநிதியின் போர்ப் பிரகடனத்தைப் படிக்கும்போதே புல்லரிக்கிறது!&#8221;நான் பாப்பாத்தி&#8221; என்றும், &#8221;ராமர் பிறந்த அயோத்தியில் கோயிலைக் கட்டாமல், வேறு எந்த இடத்தில் கோயில் கட்ட முடியும்?&#8221; என்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சகாயம் மீது பொய்ப்புகார் கொடுத்த அதிகாரி சஸ்பெண்ட்'),
            thumbnail:'/images/1239/ARV_ALAGIRI_4489e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/04/post1239.html",
            publishDate:"Apr 4, 2011",
            summary:$sce.trustAsHtml("மதுரை மாவட்ட ஆட்சியராக இருக்கும், சகாயத்தைக் கண்டு, அஞ்சா நெஞ்சன் என்ற பெயரை வைத்துக் கொண்டு, அழகிரி, அஞ்சி நடுங்குவது அனைவரும அறிந்ததே. &nbsp;இந்த சகாயத்தின் தொடர் நடவடிக்கைகளால், அதிர்ந்து போயுள்ள அழகிரி, எப்படியாவது,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 5'),
            thumbnail:'/images/1234/43139359-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/04/post1234.html",
            publishDate:"Apr 4, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குள்ளநரிக் கூட்டம்.'),
            thumbnail:'/images/1232/MAA_3425-copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/03/post1232.html",
            publishDate:"Apr 3, 2011",
            summary:$sce.trustAsHtml(" குள்ளநரிக் கூட்டம். Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 4'),
            thumbnail:'/images/1212/31354906-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/03/post1212.html",
            publishDate:"Apr 3, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதுக்குத்தானேடா மூனு பேரைக் கொன்னீங்க&#8230;.. பாவிகளே&#8230;.'),
            thumbnail:'/images/1202/karunanidhi_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/02/post1202.html",
            publishDate:"Apr 2, 2011",
            summary:$sce.trustAsHtml("நேற்று சேலத்தில் நடைபெற்ற தேர்தல் பிரச்சார பொதுக்கூட்டத்தில் பேசிய கருணாநிதி, கருத்துக் கணிப்புகளை யாரும் நம்புவதேயில்லை என்று பேசியுள்ளார். அவர் பேசியது.. &nbsp;&nbsp;&#8220;இந்த தேர்தலில் தி.மு.கழகத்தை வீழ்த்திவிட பல முனைகளிலும், எல்லா வகையான உபாயங்களிலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 3'),
            thumbnail:'/images/1197/22840500-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/02/post1197.html",
            publishDate:"Apr 2, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ? 2'),
            thumbnail:'/images/1183/2552915-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/01/post1183.html",
            publishDate:"Apr 1, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள் ஏமாந்தார்களா, ஏமாற்றப் பட்டார்களா  ஆறு, ஏழு, எட்டு மற்றும் ஒன்பதாம் பாகங்கள்.'),
            thumbnail:'/images/1179/1-24_Page_24-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/04/01/post1179.html",
            publishDate:"Apr 1, 2011",
            summary:$sce.trustAsHtml("        Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('The Last Lear'),
            thumbnail:'/images/1170/karuna_big1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/31/post1170.html",
            publishDate:"Mar 31, 2011",
            summary:$sce.trustAsHtml(" &nbsp;ON THE SCORCHING FRIDAY AFTERNOON of 11 May 2007, at Chennai’s Island Grounds, Muthuvel Karunanidhi had some important business to settle privately with Sonia Gandhi...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('﻿﻿  திமுக: திருட்டு முதலை கருணாநிதி'),
            thumbnail:'/images/1160/Kalangher-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/31/post1160.html",
            publishDate:"Mar 31, 2011",
            summary:$sce.trustAsHtml("கருணாநிதி மீண்டும் என்னை ஆறாவது முறையாக முதலமைச்சராக ஆக்குங்கள் என்று உருக்கமான வேண்டுகோளை விடுத்துள்ளார். தேர்தலில் போட்டியிடுவதற்காக கருணாநிதி தாக்கல் செய்துள்ள சொத்துக் கணக்கின் படி, (பிள்ளைகள், மகள், மகன்கள், மருமகன், மருமகள், பேரன்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆட்சி தொடர வேண்டுமா ?'),
            thumbnail:'/images/1155/2465062-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/31/post1155.html",
            publishDate:"Mar 31, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நல்லதொரு குடும்பம்.  பல்கலைகழகம்'),
            thumbnail:'/images/1153/003web-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/31/post1153.html",
            publishDate:"Mar 31, 2011",
            summary:$sce.trustAsHtml("கருணாநிதி வூட்டுல இருக்கற சொவத்துல மாட்டிருக்கு பாருங்க சாவி.. &nbsp;அந்த சாவி தான், ஸ்பெக்ட்ரம் பணத்த வெச்சுருக்க ரூம் சாவி. &nbsp;சாவியே இவ்ளோ பெருசுன்னா எவ்ளோ துட்டு இருக்கும்னு யோசிச்சு பாருங்க சாமியோவ்..  Share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கைது செய்யப் படுவாரா காமராஜ் ?'),
            thumbnail:'/images/1150/IMG_9359-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/30/post1150.html",
            publishDate:"Mar 30, 2011",
            summary:$sce.trustAsHtml("&nbsp;நக்கீரன் காமராஜ் ‘குருமாராஜ்’ என்ற பெயரில் சவுக்கு வாசகர்களுக்கு நன்கு அறிமுகமானவர். திமுக ஆட்சியில் நடைபெற்றுள்ள ஊழல்களில் பல வகையில் பங்கெடுத்தவர். கருணாநிதியைப் போலவே, இவருக்கும் திமுக நிரந்தரமாக ஆட்சியில் இருக்கப் போவதாக ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள் ஏமாந்தார்களா, ஏமாற்றப் பட்டார்களா மூன்று, நான்கு மற்றும் ஐந்தாம் பாகம்'),
            thumbnail:'/images/1144/1-24_Page_14-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/30/post1144.html",
            publishDate:"Mar 30, 2011",
            summary:$sce.trustAsHtml("        Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒளிமயமான எதிர்காலம்'),
            thumbnail:'/images/1133/24711937_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/30/post1133.html",
            publishDate:"Mar 30, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆடிய ஆட்டமென்ன&#8230;. பேசிய வார்த்தை என்ன&#8230;&#8230;'),
            thumbnail:'/images/1131/cartoon-for-Jaf-web-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/29/post1131.html",
            publishDate:"Mar 29, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அபிரிமிதமான வளர்ச்சி'),
            thumbnail:'/images/1125/25053375-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/29/post1125.html",
            publishDate:"Mar 29, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சோழியன் குடுமி சும்மா ஆடாது….'),
            thumbnail:'/images/1116/adfads-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/27/post1116.html",
            publishDate:"Mar 27, 2011",
            summary:$sce.trustAsHtml("கிராமங்களில் சோழியன் குடுமி சும்மா ஆடுமா என்று ஒரு பழமொழி உண்டு.&nbsp;&nbsp; என்ன பொருள் என்றால், எதை எடுத்தாலும் ஒரு ஆதாயம் இல்லாமல் அந்தக் காரியத்தில் அவன் இறங்க மாட்டான் என்பது. இன்று கருணாநிதியும், கழக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள் ஏமாந்தார்களா, ஏமாற்றப் பட்டார்களா முதல் அத்தியாயம்.'),
            thumbnail:'/images/1106/1-24_Page_04-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/27/post1106.html",
            publishDate:"Mar 27, 2011",
            summary:$sce.trustAsHtml("   Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுக: திருடர்களின் முன்னோடி கருணாநிதி'),
            thumbnail:'/images/1099/DSC_9063-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/27/post1099.html",
            publishDate:"Mar 27, 2011",
            summary:$sce.trustAsHtml("கருணாநிதி….. இந்தக் கருணாநிதி எப்படியெல்லாம் ஊழல் செய்தார் என்பதை, திமுக ஆட்சியைப் பற்றி விரிவாக விவாதித்து விசாரணை நடத்திய நீதிபதி சர்க்காரியா தெளிவாக சொல்லியிருக்கிறார். இன்று கருணாநிதி தேர்தல் அதிகாரி முன்பு தாக்கல் செய்துள்ள, ஆவணங்களின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்னுமா உன்ன இந்த ஊரு நம்புது ஜாபர் ?'),
            thumbnail:'/images/1090/IMG_0006-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/25/post1090.html",
            publishDate:"Mar 25, 2011",
            summary:$sce.trustAsHtml("  கடந்த திங்கட்கிழமை பத்திரிக்கையாளர்கள் மற்றும் காவல்துறை அதிகாரிகள் மத்தியில் திடீர் பரபரப்பு.. &nbsp;ஜாபர் சேட்டை தலைமைத் தேர்தல் ஆணையம் சம்மன் அனுப்பி அழைததிருக்கிறது என்று.. &nbsp; இந்தச் செய்தி பத்திரிக்கையாளர்கள் பலருக்கு சவுக்கால் சொல்லப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி மன்றமான உயர்நீதிமன்றம்.'),
            thumbnail:'/images/1061/681x454-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/24/post1061.html",
            publishDate:"Mar 24, 2011",
            summary:$sce.trustAsHtml(" இந்தக் கட்டுரையை தொடங்குவதற்கு முன், சவுக்கு தனது வாசகர்களிடம் மன்னிப்புக் கேட்டுக் கொள்ள விரும்புகிறது.&nbsp;&nbsp; எளிமையின் உதாரணம் எலிப்பி தர்மாராவ் என்று ஒரு கட்டுரையை சவுக்கு எழுதியிருந்தது. பகட்டும் படோடாபமும் அதிகமாக உள்ள நீதிபதிகள் மத்தியில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காக்க காக்க கனிமொழியை காக்க….. நோக்க நோக்க திஹாரை நோக்க'),
            thumbnail:'/images/1052/DSC_0159-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/24/post1052.html",
            publishDate:"Mar 24, 2011",
            summary:$sce.trustAsHtml(" பக்திப் பரவசமான தலைப்பாக இருக்கிறது என்றுதானே பார்க்கிறீர்கள்.&nbsp;&nbsp; இந்தத் தலைப்பின் முதல் பாதியை முணுமுணுத்துக் கொண்டிருப்பது, கருணாநிதியின் குடும்பத்தார்.&nbsp;&nbsp; திடீரென்று அத்தனை பேருக்கும் பகுத்தறிவு வேஷத்தைத் தாண்டியும், பக்தி பீறிட்டுக் கொண்டு வருகிறது. கடந்த வாரம்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேர்தல் பிரச்சாரத்தை தொடங்கினார் கருணாநிதி'),
            thumbnail:'/images/1043/25621578-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/24/post1043.html",
            publishDate:"Mar 24, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எள் எண்ணைக்காக காய்கிறது&#8230;.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/03/24/post1041.html",
            publishDate:"Mar 24, 2011",
            summary:$sce.trustAsHtml("தினமணி தலையங்கம். தேர்தல் ஆணையம் தனது கடமையைச் சிறப்பாக, பாரபட்சமின்றிச் செய்கிறது என்று பாராட்ட வேண்டிய தமிழக முதல்வர் கருணாநிதி, தமிழக சட்டப்பேரவை பொதுத்தேர்தல் நடவடிக்கைகளில் தேர்தல் ஆணையம் அதிகப்படியான கெடுபிடிகள் காட்டுவதாகக் கண்டனம் தெரிவித்திருப்பது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட்டிடம் விசாரணையில் நடந்தது என்ன ?'),
            thumbnail:'/images/1040/jaffer_sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/23/post1040.html",
            publishDate:"Mar 23, 2011",
            summary:$sce.trustAsHtml("ஜாபர் சேட்டிடம் தேர்தல் ஆணையம் கேட்டது என்ன ? நேற்றைக்கு முன்தினம், உளவுத் துறை கூடுதல் டிஜிபி ஒட்டக் கூத்தர் என்கிற ஜாபர் சேட்டிடம், தேர்தல் ஆணையம் விசாரணை நடத்தியிருக்கிறது… அப்படி என்னதான் கேட்டிருப்பார்கள் ஜாபர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலவசம்&#8230; இலவசம்&#8230;. இலவசம்&#8230;.'),
            thumbnail:'/images/1038/32536265-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/23/post1038.html",
            publishDate:"Mar 23, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மானத்தைப் பற்றி யார் பேசுவது&#8230; ஹையோ&#8230; ஹையோ&#8230;..'),
            thumbnail:'/images/1033/karuna_thiruma-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/22/post1033.html",
            publishDate:"Mar 22, 2011",
            summary:$sce.trustAsHtml("நம்பிக்கை துரோகத்துக்கு பாடம் புகட்ட மதிமுக தேர்தலில் பங்கேற்க வேண்டும் என்று, தொல்.திருமாவளவன், அறிக்கை வெளியிட்டுள்ளார். &nbsp; &nbsp;மதிமுக அதிமுக தேர்தல் கூட்டணி &#8216;கூடா நட்பு&#8217; என்று கூறியிள்ளார். &nbsp;(அப்போ உங்களுக்கும் காங்கிரசுக்கும் இருக்குறது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேர்தல் முடிஞ்சா யார் கைப்புள்ளைன்னு தெரியும்யா&#8230;!!!!!'),
            thumbnail:'/images/1029/1-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/22/post1029.html",
            publishDate:"Mar 22, 2011",
            summary:$sce.trustAsHtml(" உன் மானம் மரியாதையெல்லாம் நான் வச்சுக்கறேன்.. &nbsp; &nbsp;நான் குடுக்கற துட்ட நீ வச்சுக்கன்னு சொன்னாரு... &nbsp;பட் அந்த டீல் எனக்கு ரொம்ப புடிச்சுருந்துச்சு... Share this:Share on FacebookClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இப்போதே பயமாக இருக்கிறது……'),
            thumbnail:'/images/1027/2176838929_30c714cf74_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/21/post1027.html",
            publishDate:"Mar 21, 2011",
            summary:$sce.trustAsHtml("எதற்காக இப்போதே பயமாக இருக்கிறது… ? வேறு எதற்கு…. அதிமுக பெரும்பான்மை பெற்று, மீண்டும் ஆட்சி அமைத்து, ஜெயலலிதா முதலமைச்சர் ஆனால், எப்படி இருக்குமோ என்று இப்போதே பயமாகத்தான் இருக்கிறது. 1996ம் ஆண்டு, தமிழகம் எங்கும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலவசங்களின் திருவிழா திமுக தேர்தல் அறிக்கை'),
            thumbnail:'/images/1020/DSC_9069-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/20/post1020.html",
            publishDate:"Mar 20, 2011",
            summary:$sce.trustAsHtml("வரும் சட்டப்பேரவைத் தேர்தலில் வெற்றிபெற்றால் பெண்களின் சிரமங்களைக் குறைக்கும் வகையில் இலவசமாக கிரைண்டர் அல்லது மிக்சி வழங்கப்படும் என்று தி.மு.க. தேர்தல் அறிக்கையில் வாக்குறுதி அளிக்கப்பட்டுள்ளது. கடந்த தேர்தலில் இலவச கலர் டி.வி., இலவச எரிவாயு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசியல்ல இதெல்லாம் சாதாரணமப்பா !!!!!'),
            thumbnail:'/images/1013/32625156-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/19/post1013.html",
            publishDate:"Mar 19, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிமுக மற்றும் கூட்டணி கட்சிகள் இன்று மாலை தொகுதிகள் அறிவிப்பு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/03/18/post1006.html",
            publishDate:"Mar 18, 2011",
            summary:$sce.trustAsHtml("அதிமுக சிபிஐ, சிபிஎம், மற்றும் இதர கூட்டணிக் கட்சிகளுடன் இருந்த இந்திகக் கம்யூனிஸ்ட் கட்சி மற்றும், தேமுதிக இடையே ஏற்பட்டிருந்த பிணக்கு, தீர்ந்து சுமூகமான உறவு ஏற்படும் என்று நேற்று சவுக்கில் அறிவிக்கப் பட்டிருந்தது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சாதிக்கிடம் சாதித்தவர்கள்&#8230;.'),
            thumbnail:'/images/1005/jiwal1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/18/post1005.html",
            publishDate:"Mar 18, 2011",
            summary:$sce.trustAsHtml(" ﻿சாதிக் தற்கொலை செய்து கொண்டு இறந்து போனதைப் பற்றி பல்வேறு விவாதங்களும், கேள்விகளும், நம் அனைவரது இதயத்திலும் தொக்கிக் கொண்டு நிற்கிறது. இந்தக் கேள்விகளுக்கு விடை தெரியலாம், தெரியாமலும் போகலாம். சாதிக் மரணம் பற்றிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சத்தியமா எனக்கு எதுவும் தெரியாது !'),
            thumbnail:'/images/1004/33049687-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/18/post1004.html",
            publishDate:"Mar 18, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிமுக கூட்டணி குழப்பத்தின் பின்னணிகள்.'),
            thumbnail:'/images/1002/4293346778_21fb94341d_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/18/post1002.html",
            publishDate:"Mar 18, 2011",
            summary:$sce.trustAsHtml(" ஜப்பானைத் தாக்கிய ஆழிப்பேரலையைப் போல, தன்னிச்சையாக அ.தி.மு.க. தனது வேட்பாளர் பட்டியலை புதன்கிழமை வெளியிட்டபோது, அதிர்ந்து போய்விட்டனர் இடதுசாரிக் கட்சியினர். தே.மு.தி.க. தலைவர் விஜயகாந்தும் அவைத் தலைவர் பண்ருட்டி ராமச்சந்திரனும் வியப்பின் உச்சத்துக்குச் சென்றுவிட்டனர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிமுக கூட்டணி குழப்பம் தீர்ந்தது'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/03/17/post998.html",
            publishDate:"Mar 17, 2011",
            summary:$sce.trustAsHtml("அதிமுக கூட்டணியில் ஏற்பட்டிருந்த கடும் குழப்பம் தீர்ந்து விட்டதாகத் தெரிகிறது. அதிமுக நேற்று மாலை தன்னிச்சையாக 160 தொகுதிக்கான வேட்பாளர்களை அறிவித்ததில் இருந்தே, கூட்டணிக் கட்சிகள் கடும் அதிருப்தியில் இருந்தன. &nbsp; தேமுதிக தலைவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூட்டணிக் கட்சிகள் கடும் அதிர்ச்சி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/03/17/post997.html",
            publishDate:"Mar 17, 2011",
            summary:$sce.trustAsHtml("சட்டப்பேரவை தேர்தலுக்காக அ.தி.மு.க. வெளியிட்ட வேட்பாளர் பட்டியலால் அந்த கூட்டணியில் உள்ள கட்சிகள் அனைத்தும் கடும் அதிர்ச்சி அடைந்துள்ளன.அ.தி.மு.க. அணியில் தே.மு.தி.க.வுக்கு 41 தொகுதிகள், மார்க்சிஸ்ட் கம்யூனிஸ்ட் கட்சிக்கு 12, இந்திய கம்யூனிஸ்ட் கட்சிக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கலைஞருக்கு நன்றி கலைஞர் காப்பீட்டுத் திட்டத்திற்கு நன்றி'),
            thumbnail:'/images/996/sathik-sucide1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/16/post996.html",
            publishDate:"Mar 16, 2011",
            summary:$sce.trustAsHtml(" கலைஞருக்கு நன்றி.. கலைஞர் காப்பீட்டுத் திட்டத்திற்கு நன்றி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அப்பிடி போடு&#8230; போடு&#8230;. போடு&#8230;..'),
            thumbnail:'/images/986/2473878-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/16/post986.html",
            publishDate:"Mar 16, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராங் கால் 2'),
            thumbnail:'/images/967/DSC_1514-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/14/post967.html",
            publishDate:"Mar 14, 2011",
            summary:$sce.trustAsHtml("“ஹலோ தலைவரே…..&nbsp;&nbsp; என்ன தலைவரே விசேஷம் ?” “தேர்தல் முடிஞ்சா ரெண்டு மூடு விழா நடக்கும்னு சொல்றாங்க தலைவரே…“ “என்னப்பா அது ரெண்டு மூடு விழா“ “ஒன்னு கலைஞர் டிவி. &nbsp; அடுத்தது நம்ப நக்கீரன்““என்னப்பா குண்டத் தூக்கிப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நான் ஏன் நக்சலைட்டாக மாறக் கூடாது ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/03/12/post958.html",
            publishDate:"Mar 12, 2011",
            summary:$sce.trustAsHtml(" இந்நாட்டின் மிகப் பெரிய சாபக்கேடு ஊழல்தான் என்பதை சவுக்கு எப்போதுமே சொல்லி வந்திருக்கிறது. ஊழலை எளிதாக எடுத்துக் கொள்ளக் கூடாது என்பதும் சவுக்கின் தெளிவான நிலைபாடு. சிறிய அளவில் நடைபெறும் ஊழல்களை கண்டு கொள்ளாமல் சமரசம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நல்லபடியாக முடிந்தது.'),
            thumbnail:'/images/957/DSC_3521-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/11/post957.html",
            publishDate:"Mar 11, 2011",
            summary:$sce.trustAsHtml("  புலி வருகுது, புலி வருகுது என்று புலி வந்தே விட்டது. &nbsp; கனிமொழியை சிபிஐ விசாரிக்கப் போகிறார்கள், விசாரிக்கப் போகிறார்கள் என்று எதிர்ப்பார்த்து, எதிர்ப்பார்த்து காத்திருந்து, ஒரு வழியாக வந்தே விட்டார்கள் சிபிஐ அதிகாரிகள்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அய்யய்யோ&#8230; வடை போச்சே&#8230;.'),
            thumbnail:'/images/952/information_commissoners-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/10/post952.html",
            publishDate:"Mar 10, 2011",
            summary:$sce.trustAsHtml(" சட்டப் பேரவைத் தேர்தல் குறித்த அறிவிப்பு மார்ச் 1-ம் தேதி வெளியானது. அன்றைய தினம் தமிழக அரசு பி.ஏ. ராமய்யா, சி. மனோகரன், ஏ. ஆறுமுக நயினார் ஆகியோரை தமிழகத் தகவல் ஆணையர்களாக நியமித்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சத்தியமா எனக்கு எதுவும் தெரியாது !'),
            thumbnail:'/images/948/22830796-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/10/post948.html",
            publishDate:"Mar 10, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Molester Cop and a mute administration'),
            thumbnail:'/images/944/DHINATHANTHI_22_10_10-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/10/post944.html",
            publishDate:"Mar 10, 2011",
            summary:$sce.trustAsHtml(" &nbsp;Though we have come across numerous cases of fence eating the grass, the incident which you are about to know would shock your conscience, because,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பில்டங் ஸ்ட்ராங்கு&#8230; பேஸ்மென்டு ரொம்பபப  வீக்கு&#8230;.'),
            thumbnail:'/images/931/building_strong_basement_we-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/09/post931.html",
            publishDate:"Mar 9, 2011",
            summary:$sce.trustAsHtml("  பில்டிங்கு ஸ்ட்ராங்கு.. பேஸ்மென்டு ரொம்பபபபபப வீக்கு... Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேணாம்&#8230; வலிக்குது&#8230; அப்புறம் அழுதுடுவேன்&#8230;.'),
            thumbnail:'/images/926/21811546-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/09/post926.html",
            publishDate:"Mar 9, 2011",
            summary:$sce.trustAsHtml(" நன்றி தினமணி.. Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மூன்றா காரணம் ?  பாகம் இரண்டு.'),
            thumbnail:'/images/923/5_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/06/post923.html",
            publishDate:"Mar 6, 2011",
            summary:$sce.trustAsHtml("  2009ம் பாராளுமன்றத் தேர்தலுக்குப் பின் அமைச்சரவை உருவாக்கத்தின் போது, 2004 நினைப்பிலேயே இருந்த கருணாநிதிக்கு, காங்கிரஸின் மாறுபட்ட முகம் தெரியத் தொடங்கியது. ஈழப் போர் முடிவுக்கு வந்து, தமிழகமெங்கும் ஒரு கனத்த அமைதி நிலவிக் கொண்டிருந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கலைஞர் முடிவை உள்ளுர் தமிழர் முதல் உலகத் தமிழர் வரை பாராட்டுகின்றனர்.'),
            thumbnail:'/images/920/asiriyar_arrikkai_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/06/post920.html",
            publishDate:"Mar 6, 2011",
            summary:$sce.trustAsHtml(" காங்கிரஸ் உறவை முறித்துக் கொண்டதற்கு, கருணாநிதிக்கு உலகத் தமிழர் முதல் உளுர் தமிழர் வரை பாரட்டுவதாக திராவிடர் கழகத் தலைவர் குஞ்சாமணி என்கிற வீரமணி பாராட்டியுள்ளார். இவரைப் போன்றே, தொல் திருமாவளவனும், கருணாநிதியை, இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மூன்றா காரணம் ?'),
            thumbnail:'/images/915/1580083773_262b38544b_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/06/post915.html",
            publishDate:"Mar 6, 2011",
            summary:$sce.trustAsHtml("இன்று மாலை நடந்த திமுக உயர்நிலைக் குழுக் கூட்டத்தில், ஐக்கிய முன்னணி அரசாங்கத்தில் இருந்து விலகிக் கொள்வதென்று திமுக முடிவெடுத்துள்ளதாகவும், மன்மோகன் அரசுக்கு வெளியில் இருந்து ஆதரவு தருவதாகவும் முடிவெடுக்கப் பட்டு தீர்மானம் இயற்றப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடந்த காலம்.'),
            thumbnail:'/images/912/amithab_kalaignar-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/05/post912.html",
            publishDate:"Mar 5, 2011",
            summary:$sce.trustAsHtml("காங்கிரஸ் கட்சி 60க்கு பதிலாக 63 இடங்களைக் கேட்டது என்ற காரணத்துக்காக, 6 மந்திரி பதவிகளையும் இழக்கத் துணிந்து மத்திய அரசுக்கு அளித்து வரும் ஆதரவு வாபஸ் என்று கருணாநிதி தலைமையில் கூடிய திமுகவின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இனிக்காத சர்க்காரியா பாகம் 2'),
            thumbnail:'/images/907/DSC_9069-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/04/post907.html",
            publishDate:"Mar 4, 2011",
            summary:$sce.trustAsHtml("இனிக்காத சர்க்காரியா முதல் பாகம் எழுதியதையடுத்து, பின்னூட்டங்களில் பல கண்டனங்கள் வந்திருந்தன. ராசாத்தி அம்மாளின் தனிப்பட்ட வாழ்க்கையையும், கருணாநிதியின் தனிப்பட்ட வாழ்க்கையையும் எழுதுவதால் யாருக்கு என்ன பயன் என்று ? அதற்கு பதில் எழுதியிருந்தாலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மணியோசை கேட்டு எழுந்து'),
            thumbnail:'/images/899/33754218-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/04/post899.html",
            publishDate:"Mar 4, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சத்தியமாச் சொல்றேன்…'),
            thumbnail:'/images/896/2599182705_409ba8dba9_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/03/post896.html",
            publishDate:"Mar 3, 2011",
            summary:$sce.trustAsHtml(" நீதிமன்றத்திலே சாட்சிகளை விசாரிக்கும் முன்பு, “சத்தியமாச் சொல்றேன்னு சொல்லுங்க“ என்று கூறுவார்கள். இது என்னவென்றால், சத்தியமாக உண்மையை அவர் சொல்வார்கள். இது போல சத்தியமாக கருணாநிதியால் சொல்லப் பட்ட உண்மைகள் சிலவற்றைப் பார்ப்போமா ? 1969..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதுக்கோட்டை முத்துக்குமாருக்கு நினைவேந்தல்.'),
            thumbnail:'/images/893/muthukumar1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/02/post893.html",
            publishDate:"Mar 2, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இனிக்காத சர்க்காரியா'),
            thumbnail:'/images/890/Karunanidhi_with_3rd_wife_Rajathi_Ammal_by_HKR-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/02/post890.html",
            publishDate:"Mar 2, 2011",
            summary:$sce.trustAsHtml("  ராஜேந்தர் சிங் சர்க்காரியா… இந்தப் பெயரில் சர்க்கரை இருந்தாலும், கருணாநிதிக்கு இந்தப் பெயர் வேப்பங்காயாகவே கசக்கும். கருணாநிதியின் ஊழல்களையும், அவர் ஊழல் செய்யும் முறைகளையும், மிகச் சிறப்பான புலனாய்வு அதிகாரிகளைக் கொண்டு ஆராய்ந்து, கருணாநிதியின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மு.க.ஸ்டாலினை இன்று சந்தித்த அடிமைகள்.'),
            thumbnail:'/images/885/RMK_1693_copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/03/01/post885.html",
            publishDate:"Mar 1, 2011",
            summary:$sce.trustAsHtml(" இன்று தளபதி மு.க.ஸ்டாலின் அவர்களுக்கு, தளபதி என்றவுடன் எந்தப் போரில் சண்டையிட்டு வெற்றி பெற்றார் என்று&nbsp; அதிகப் பிரசங்கித் தனமாக கேட்காதீர்கள்.&nbsp; தன்னுடைய அண்ணன் அஞ்சாநெஞ்சனோடு போடும் சண்டையை விடவா பெரிய சண்டை வேண்டும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருப்பு பட்ஜெட்'),
            thumbnail:'/images/873/31233750-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/28/post873.html",
            publishDate:"Feb 28, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்று நீ தந்த பிச்சையிலே வளர்ந்தேனய்யா'),
            thumbnail:'/images/871/2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/28/post871.html",
            publishDate:"Feb 28, 2011",
            summary:$sce.trustAsHtml(" சட்டமன்றத் தேர்தலில், விடுதலைச் சிறுத்தைகள் கட்சிக்கு 10 இடங்கள் ஒதுக்கி நேற்று, அறிவாலயத்தில் ஒப்பந்தம் கையெழுத்தானது. &nbsp;காங்கிரஸ் கட்சிக்கும் தொகுதி ஒதுக்கீடு, முடிந்து விட்டால், இந்த அணி &#8220;துரோகிகள் அணி&#8221; என்று அழைக்கப் படும்.&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இனியாவது திமுக மானத்தோடு நடந்து கொள்ள வேண்டும். குஞ்சாமணி அறிக்கை'),
            thumbnail:'/images/869/asiriyar_arrikkai-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/28/post869.html",
            publishDate:"Feb 28, 2011",
            summary:$sce.trustAsHtml(" திமுகவை சுயமரியாதையோடும் மானத்தோடும் நடந்து கொள்ளுமாறு, திராவிடர் கழகத் தலைவர் குஞ்சாமணி இன்று வெளியிட்ட அறிக்கையைல் தெரிவித்துள்ளார். &nbsp; இது குறித்து இன்று அவர் வெளியிட்டுள்ள அறிக்கையில், திமுக தலைமையை &#8216;குட்டக் குட்ட குனிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுக அரசை பதவி நீக்கம் செய்ய வேண்டும்: விஜயகாந்த்'),
            thumbnail:'/images/864/VIJAYAKANTH-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/27/post864.html",
            publishDate:"Feb 27, 2011",
            summary:$sce.trustAsHtml("																												"),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போச்சு வார்த்தை&#8230;..'),
            thumbnail:'/images/862/2265162-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/27/post862.html",
            publishDate:"Feb 27, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முத்துவேல் கருணாநிதிக்கு ஆண்டிமுத்து ராசா கடிதம்.'),
            thumbnail:'/images/856/a_raja_20110221-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/25/post856.html",
            publishDate:"Feb 25, 2011",
            summary:$sce.trustAsHtml("  அன்புள்ள தலைவரே…..நீங்களும் உங்கள் குடும்பமும் நன்றாக இருப்பீர்கள் என்பது எனக்குத் தெரியும். ஆனால் நான் நன்றாக இல்லை தலைவரே… நீ ஜெயிலுக்குப் போக மாட்டாய், போக மாட்டாய் என்று சொல்லி சொல்லியே, என்னை திகார் ஜெயிலுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இறுதி யுத்தம்.'),
            thumbnail:'/images/849/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/24/post849.html",
            publishDate:"Feb 24, 2011",
            summary:$sce.trustAsHtml(" ஆம் தோழர்களே… இறுதி யுத்தம் தொடங்கி விட்டது.&nbsp;&nbsp; ப்ளாசி யுத்தம், இரண்டாம் உலக யுத்தம் போல பிரசித்தி பெற்ற யுத்தமாக இது வரலாற்றில் இடம் பிடிக்கப் போவதில்லை. ஏனென்றால் இது ஒரு கேவலமான யுத்தம். சுயமரியாதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வேதம் ஓதும் சாத்தான்கள்.'),
            thumbnail:'/images/840/DSC_0463-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/22/post840.html",
            publishDate:"Feb 22, 2011",
            summary:$sce.trustAsHtml(" இன்று இலங்கைத் துணைத் தூதரகத்தை திருமாவளவன் முற்றுகிகையிட்டு, தனது விடுதலைச் சிறுத்தைகள் இயக்கத்தினருடன் கைதானார். &nbsp;அப்போது செய்தியாகர்களிடம் பேசுகையில், மிகவும் உருக்கமாக, ஒரு இறுதிச் சடங்கில் கலந்து கொள்ளக் கூட அனுமதிக்காத ராஜபக்ஷே அரசுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காங்கிரஸ் – திமுக கூட்டணி பேச்சு வார்த்தை நடந்தது என்ன ?'),
            thumbnail:'/images/834/congress-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/22/post834.html",
            publishDate:"Feb 22, 2011",
            summary:$sce.trustAsHtml("  காங்கிரஸ் திமுக கூட்டணி பேச்சுவார்த்தை கடந்த ஞாயிறன்று சென்னையில் உள்ள அண்ணா அறிவாலயத்தில் நடந்தது. இந்த பேச்சுவார்த்தையில் உள்ள விபரங்கள் பல்வேறு பத்திரிக்கைகளில் தப்பும் தவறுமாக வந்த வண்ணம் உள்ளன. ஆனால் உண்மையில் நடந்தது என்ன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருப்பி அனுப்பப் பட்ட திருமா'),
            thumbnail:'/images/830/sff_bmp-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/22/post830.html",
            publishDate:"Feb 22, 2011",
            summary:$sce.trustAsHtml("தேசியத் தலைவரின் தாயார் பார்வதி அம்மாளின் இறுதிச் சடங்கில் கலந்து கொண்டு, ஒரு நாடகத்தை அரங்கேற்ற திட்டமிட்டு, நேற்று இரவு இலங்கை சென்ற, விடுதலைச் சிறுத்தைகள் கட்சித் தலைவர் தொல்.திருமாவளவனை, இலங்கை அரசு நேற்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆரியக்கூத்தாடினாலும் காரியத்தின் மேல் கை வைய்யடா தாண்டவக்கோணே&#8230;'),
            thumbnail:'/images/828/2534562-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/22/post828.html",
            publishDate:"Feb 22, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கவுன்ட்டவுனுக்கு என்ன ஆனது ?'),
            thumbnail:'/images/822/IMG_0007-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/20/post822.html",
            publishDate:"Feb 20, 2011",
            summary:$sce.trustAsHtml(" கனிமொழிக்கு கைதா, சம்மனா என்று சவுக்கு தளத்தில் ஒரு கவுன்ட்டவுன் போடப்பட்டது.&nbsp;&nbsp; இந்த கவுன்ட்டவுன், கடந்த வெள்ளியின்று முடிவடைந்தது. ஆனால், கவுன்ட்டவுன் முடியும் வரை, கைதும் நடக்கவில்லை, சம்மனும் வழங்கப் படவில்லை. கோபமடைந்த சில வாசகர்கள்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தென்னகத்து பூலான் தேவி….'),
            thumbnail:'/images/815/1367353493_c766de17b0-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/18/post815.html",
            publishDate:"Feb 18, 2011",
            summary:$sce.trustAsHtml(" பூலான் தேவியைப் பற்றிக் கேள்விப் பட்டிருப்பீர்கள்.&nbsp;&nbsp; உத்தரப் பிரதேசத்தின் மிகப் பிரசித்திப் பெற்ற கொள்ளைக் காரர். அவரைப் பற்றியதல்ல இந்தக் கட்டுரை.&nbsp; இந்தக் கட்டுரை தென்னகத்து பூலான் தேவியைப் பற்றியது. அந்தப் பூலான் தேவி, நெருக்கடியால் கொள்ளைக்காரியானவர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இவய்ங்க இப்படி தான் பாஸ் எப்பப் பாத்தாலும் துப்பிக் கிட்டே இருப்பாங்க.'),
            thumbnail:'/images/808/010-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/18/post808.html",
            publishDate:"Feb 18, 2011",
            summary:$sce.trustAsHtml("    இந்தப் பொது மக்கள் இப்படித் தாம்பாஸ். &nbsp;எப்பப் பாத்தாலும் துப்பிக்கிட்டே இருப்பாங்க. இதெல்லாம் பாத்தா, நாம அரசியல் பண்ண முடியுமா ? Share this:Share on FacebookClick to share on TwitterClick to..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Complete text of Manmohan&#8217;s interview'),
            thumbnail:'/images/806/17_02_2011_011_0051-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/17/post806.html",
            publishDate:"Feb 17, 2011",
            summary:$sce.trustAsHtml("&nbsp;Besieged by scam after scam, Prime Minister Manmohan Singh finds it necessary to explain things from his point of view.He tacitly admits to coalition pressures..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஓ போடு&#8230;  ஓ போடு&#8230;&#8230;'),
            thumbnail:'/images/802/33121937-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/17/post802.html",
            publishDate:"Feb 17, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதற்கு மகிழ்ச்சி, இதற்கு சோகம்'),
            thumbnail:'/images/796/tamilmakkalkural_blogspot_kanimozhi_rajapaksa-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/16/post796.html",
            publishDate:"Feb 16, 2011",
            summary:$sce.trustAsHtml(" இதற்கு மகிழ்ச்சி  இதற்கு சோகம். இதற்கு பட்டுப் புடவை   இதற்கு பருத்திப் புடவை மீனவருக்காக நடிப்பு  திருடர்களுடன் களிப்பு கொலைகாரனோடு ஆலோசனை  சிபிஐ பிடித்தால் என்ன செய்வது என்ற யோசனை !!! Share this:Share on FacebookClick to share on TwitterClick to..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிச்சை பாத்திரம் ஏந்த வந்தோம்.  அய்னே.. எங்கள் அய்யனே&#8230;'),
            thumbnail:'/images/789/3163978-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/15/post789.html",
            publishDate:"Feb 15, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Lordships, Respect should be commanded not ‘demanded’.'),
            thumbnail:'/images/787/30825321385bbbd8505db-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/13/post787.html",
            publishDate:"Feb 13, 2011",
            summary:$sce.trustAsHtml(" &nbsp; It is really heart wrenching to see the pathetic infrastructure of the lower courts, which invited the wrath of the Chief Justice of the Madras..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டாடி டாடி&#8230;. ஓ மை டாடி&#8230;..'),
            thumbnail:'/images/779/001-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/13/post779.html",
            publishDate:"Feb 13, 2011",
            summary:$sce.trustAsHtml("  டாடி.. எல்லாருக்கும் விருது கொடுக்கறீங்க. என் ஃப்ரெண்ட், நீரா ராடியாவுக்கு &#8220;ஸ்பெக்ட்ரம் ராணி&#8221; ன்னு ஒரு விருது குடுங்க டாடி.அப்டியே, எனக்கும் மம்மிக்கும், &#8220;வோல்டாஸ் ராணி&#8221; ன்னு ஒரு விருது குடுங்க டாடி. நீங்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சி‘ரிப்பாய் சிரிக்குதய்யா'),
            thumbnail:'/images/778/11-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/13/post778.html",
            publishDate:"Feb 13, 2011",
            summary:$sce.trustAsHtml("தயாளு அம்மாவுக்கும், கனிமொழிக்கும், சிபிஐ சம்மன் அனுப்பினால் இதே போல் சிரிப்பாரா கருணாநிதி ? Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முடிவுக்கு வந்தது இசை நாற்கலிப் போட்டி.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/02/12/post776.html",
            publishDate:"Feb 12, 2011",
            summary:$sce.trustAsHtml("சவுக்கு ஏற்கனவே ஒரு பதிவில், ஐபிஎஸ் அதிகாரிகள் மத்தியில் இசை நாற்காலிப் போட்டி நடைபெறுகிறது என்றும், அந்தப் போட்டியின் முடிவுகள் விரைவில் தெரிய வரும் என்றும் எழுதியிருந்தது. அந்தப் போட்டியின் முடிவுகள் இன்று வெளியிடப் பட்டன. அதன்படி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராசா இங்கே… கனியும் தயாளுவும் எங்கே ?'),
            thumbnail:'/images/762/shahid-balwa-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/12/post762.html",
            publishDate:"Feb 12, 2011",
            summary:$sce.trustAsHtml(" நேற்று சவுக்கு தளத்திற்கு வருகை தந்த வாசகர்கள், புதிதாக ஒரு கவுண்ட்டவுனை பார்த்து ஆச்சர்யப் பட்டிருப்பீர்கள். இதில் ஆச்சர்யப் பட ஒன்றுமே இல்லை. நடக்கப் போவதை முன்கூட்டியே கணிப்பது சவுக்கு அல்லவா ? உஸ்மான் ஆஷிஷ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போலி நீதிமன்றங்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/02/11/post753.html",
            publishDate:"Feb 11, 2011",
            summary:$sce.trustAsHtml("இந்தியாவுக்கே மிகப் பெரும் அச்சுறுத்தல் என்று சொல்லப் படும் மாவோயிஸ்டுகளுக்கு, இந்தியாவில் தற்போதுள்ள ஜனநாயக அமைப்பின் மீது நம்பிக்கை இல்லை. இந்த ஜனநாகயகத்தை அவர்கள் போலி ஜனநாயகம் என்று அழைக்கிறார்கள். இந்த நீதிமன்றங்கள், பாராளுமன்றம், சட்டமன்றம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி தங்கபாலு சந்திப்பு.'),
            thumbnail:'/images/752/Feb_10_a1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/10/post752.html",
            publishDate:"Feb 10, 2011",
            summary:$sce.trustAsHtml("  தங்கபாலு: &nbsp; &nbsp;ஒரு நூறு சீட்டு குடுத்தீங்கன்னா நாங்க பொளச்சுக்குவோம்.. என்ன சொல்றீங்க ?கருணாநிதி பக்கத்து தெருல கல்யாண மண்டபம் இருக்கு. &nbsp;அங்க 200 குஷன் சீட்டு இருக்கு. 200யும், நீங்களே எடுத்துக்கங்க. &nbsp;ஆனா,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கட்த்ரோட் பொலிடீஷியன்ஸ் பாகம் 2.'),
            thumbnail:'/images/749/RAJA3-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/10/post749.html",
            publishDate:"Feb 10, 2011",
            summary:$sce.trustAsHtml(" அந்த புதன் கிழமை காலை அனைவருக்கும் இயல்பாகத்தான் விடிந்தது. அவரவர், காலை எழுந்ததும், அன்றைய செய்தித் தாளை படித்துக் கொண்டே, காபியை குடித்துக் கொண்டே, மனைவியை திட்டிக் கொண்டே, அவசர அவசரமாகவும் இயந்திர கதியிலும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கட்த்ரோட் பொலிடீஷியன்ஸ்'),
            thumbnail:'/images/740/2451624538_337648c0cd_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/08/post740.html",
            publishDate:"Feb 8, 2011",
            summary:$sce.trustAsHtml(" என்னடா இது தலைப்பு ஆங்கிலத்தில் இருக்கிறதே என்று பார்க்காதீர்கள்.. இந்தத் தலைப்பு சவுக்கு வைத்தது அல்ல. அமைச்சராக இருக்கும் அக்கா பூங்கோதை அஞ்சா நெஞ்சன் அழகிரியைப் பார்த்துச் சொன்னது.&nbsp;&nbsp; யார் கட்த்ரோட் பொலிடீஷியன்? அதில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீ வருவாய் என நான் இருந்தேன்….'),
            thumbnail:'/images/730/Malathy_S-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/07/post730.html",
            publishDate:"Feb 7, 2011",
            summary:$sce.trustAsHtml("&nbsp;இது 1980ல் வெளியான ‘சுஜாதா’ என்ற படத்தில் இடம் பெற்ற படம்.   எம்.எஸ்.விஸ்வநாதன் இசையில், அதிகம் அறியப்படாத கல்யாணி மேனன் என்ற பாடகி. இவர் ஒளிப்பதிவாளரும், இயக்குநருமான ராஜீவ் மேனனின் தாயார் என்பது கூடுதல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீ வருவாய் என நான் இருந்தேன்….'),
            thumbnail:'/images/729/Malathy_S-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/07/post729.html",
            publishDate:"Feb 7, 2011",
            summary:$sce.trustAsHtml("&nbsp;இது 1980ல் வெளியான ‘சுஜாதா’ என்ற படத்தில் இடம் பெற்ற படம்.   எம்.எஸ்.விஸ்வநாதன் இசையில், அதிகம் அறியப்படாத கல்யாணி மேனன் என்ற பாடகி. இவர் ஒளிப்பதிவாளரும், இயக்குநருமான ராஜீவ் மேனனின் தாயார் என்பது கூடுதல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீ வருவாய் என நான் இருந்தேன்….'),
            thumbnail:'/images/728/Malathy_S-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/07/post728.html",
            publishDate:"Feb 7, 2011",
            summary:$sce.trustAsHtml(" இது 1980ல் வெளியான ‘சுஜாதா’ என்ற படத்தில் இடம் பெற்ற படம்.&nbsp;&nbsp; எம்.எஸ்.விஸ்வநாதன் இசையில், அதிகம் அறியப்படாத கல்யாணி மேனன் என்ற பாடகி. இவர் ஒளிப்பதிவாளரும், இயக்குநருமான ராஜீவ் மேனனின் தாயார் என்பது கூடுதல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராசா கைதுக்கு திமுக வெளியிலிருந்து ஆதரவு'),
            thumbnail:'/images/724/2183015-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/07/post724.html",
            publishDate:"Feb 7, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி சோனியா சந்திப்பு…. நடந்தது என்ன ?'),
            thumbnail:'/images/722/Sonia-Gandhi_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/06/post722.html",
            publishDate:"Feb 6, 2011",
            summary:$sce.trustAsHtml("கருணாநிதி டெல்லி சென்று சோனியாவை சந்தித்தார். 45 நிமிடங்கள் நீடித்த அந்த சந்திப்பு மிகவும் சுமூகமாக அமைந்தது என்றும் தெரிவித்தார். அந்த உரையாடலில் என்னதான் நடந்தது என்பது வெளியில்&nbsp;வராத மர்மமாகவே உள்ளது.  சவுக்கு அதை புலனாய்வு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நேத்து ராத்திரி யம்மா… மானம் போச்சுடி யம்மா….'),
            thumbnail:'/images/718/Jaffar_Sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/06/post718.html",
            publishDate:"Feb 6, 2011",
            summary:$sce.trustAsHtml("  என்னடா இது ஏதோ கசமுசா சமாச்சாராம் என்று பார்க்கிறீர்களா ? &nbsp;&nbsp;&nbsp;இதை கசா முசா சமாச்சாரம் என்று சொல்ல முடியாது.&nbsp;&nbsp; கண்றாவி சமாச்சாரம் என்று தாராளமாக சொல்லலாம். ‘நேத்து ராத்திரி யம்மா… தூக்கம் போச்சுடி யம்மா’..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செல்லிலிருந்து செல்லுக்கு'),
            thumbnail:'/images/712/05_02_2011_011_024-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/05/post712.html",
            publishDate:"Feb 5, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆஆஆஆஆஆ ராசா'),
            thumbnail:'/images/709/3947531-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/05/post709.html",
            publishDate:"Feb 5, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தயாளமான தயாளு.'),
            thumbnail:'/images/707/karunanidhi_birthday_3_june_2010-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/04/post707.html",
            publishDate:"Feb 4, 2011",
            summary:$sce.trustAsHtml("  ஸ்பெக்ட்ரம்…. 2ஜியில் ஊழலே நடைபெற வில்லை என்று திமுக தொடர்ச்சியாக நடத்திய பொதுக்கூட்டத்தில் பேசிய அதிமுகவிலிந்து திமுகவுக்கு தாவிய செல்வகணபதி ஒரு பொதுக்கூட்டத்தில் பேசுகையில், ஸ்பெக்ட்ரம் என்பது கண்ணுக்கே தெரியாது. கண்ணுக்குத் தெரியாத ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தயாளமான தயாளு.'),
            thumbnail:'/images/706/karunanidhi_birthday_3_june_2010-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/04/post706.html",
            publishDate:"Feb 4, 2011",
            summary:$sce.trustAsHtml("&nbsp;&nbsp;ஸ்பெக்ட்ரம்…. 2ஜியில் ஊழலே நடைபெற வில்லை என்று திமுக தொடர்ச்சியாக நடத்திய பொதுக்கூட்டத்தில் பேசிய அதிமுகவிலிந்து திமுகவுக்கு தாவிய செல்வகணபதி ஒரு பொதுக்கூட்டத்தில் பேசுகையில், ஸ்பெக்ட்ரம் என்பது கண்ணுக்கே தெரியாது. கண்ணுக்குத் தெரியாத ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புடிச்சுட்டோம்.. புடிச்சுட்டோம்.'),
            thumbnail:'/images/703/Untitled-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/04/post703.html",
            publishDate:"Feb 4, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆககா&#8230; ஆகாகாககாகா'),
            thumbnail:'/images/702/167771_1565149614998_1423116401_31329918_469816_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/04/post702.html",
            publishDate:"Feb 4, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆககா&#8230; ஆகாகாககாகா'),
            thumbnail:'/images/701/167771_1565149614998_1423116401_31329918_469816_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/04/post701.html",
            publishDate:"Feb 4, 2011",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏழைகளை செல்பேனில் பேச வைத்ததற்காக ராசாவுக்கு சிறை &#8211; கருணாநிதி'),
            thumbnail:'/images/698/aaa1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/03/post698.html",
            publishDate:"Feb 3, 2011",
            summary:$sce.trustAsHtml("  ஸ்பெக்ட்ரம் குறித்து கருணாநிதி, எழுச்சி மிகு உரை. திமுகவின் பொதுக்குழுத் தீர்மானங்களை வீளக்கி நடந்த பொதுக்கூட்டத்தில் பேசிய கருணாநிதி, ஆ.ராசா, ஏழைகள் செல்போனில் பேச வழிவகை செய்த ஒரே காரணத்திற்காக இன்று சிறையில் இருக்கிறார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வெளியே போ….. !'),
            thumbnail:'/images/696/savukku_image_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/02/post696.html",
            publishDate:"Feb 2, 2011",
            summary:$sce.trustAsHtml(" யார், யாரை வெளியே போகச் சொன்னது ?&nbsp;&nbsp; அந்த விபரங்கள் தானே இந்தக் கட்டுரையே…. ஒரு விஷயத்தை முதலில் ஆரம்பிப்பதற்கு முன்பு ஒரு பில்டப் கொடுக்க வேண்டாமா ?&nbsp;&nbsp; முதலில் பில்டப். சூப்பர் ஸ்டாரின் பாட்சா படத்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடங்க மறுப்பவரின் அசட்டுச் சிரிப்பு.'),
            thumbnail:'/images/692/Feb_02_l-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/02/post692.html",
            publishDate:"Feb 2, 2011",
            summary:$sce.trustAsHtml("அடங்க மறுப்போம், அத்து மீறுவோம் என்று சொல்லிக் கொண்டு ஊரை ஏமாற்றும் கட்சியின் எம்.எல்.ஏ துறை (சொம்படிக்கும் துறை) ரவிக்குமார், எப்படி அசட்டுச் சிரிப்புச் சிரித்தபடி நிற்கிறார் பாருங்கள்.  உங்களப் பாத்தாலே, நெஞ்சும் பாக்கெட்டும் நெறஞ்சுடுதுய்யா...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாட்டாளி மக்கள் கட்சிக்கு 28 + 1'),
            thumbnail:'/images/690/Feb_02_k-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/02/post690.html",
            publishDate:"Feb 2, 2011",
            summary:$sce.trustAsHtml(" பாட்டாளி மக்கள் கட்சிக்கு வரக்கூடிய சட்டமன்றத் தேர்தலில் 28 இடங்களும், 2013ல் காலியாக உள்ள ராஜ்ய சபை இடத்தில் அன்புமணி ராமதாஸுக்கு மன்னிக்கவும், சின்ன அய்யாவுக்கு ஒரு இடமும் ஒதுக்க திமுக தலைமை ஒப்புக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைவனுக்கென்ன, தூங்கி விட்டான். அகப்பட்டவன் நானல்லவா ?'),
            thumbnail:'/images/687/ar-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/02/post687.html",
            publishDate:"Feb 2, 2011",
            summary:$sce.trustAsHtml(" தலைவனுக்கென்ன.. தூங்கி விட்டான். &nbsp;அகப்பட்டவன் நானல்லவா&nbsp;ஐயிரண்டு மாதத்தினை கைகளிலே போட்டு விட்டான்...&nbsp; Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்னமிட்ட கை.'),
            thumbnail:'/images/684/thukkiandi-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/02/01/post684.html",
            publishDate:"Feb 1, 2011",
            summary:$sce.trustAsHtml(" என்னடா இது சவுக்கு எம்ஜிஆர் விசிறி ஆகி விட்டதா என்று பார்க்காதீர்கள். இது நிஜ வாழ்வில் நாம் பார்க்கும் ஒரு அன்னமிட்ட கை.அதுவும் அன்னமிட்ட கைக்குச் சொந்தக் காரர் ஒரு காவல்துறை உயர் அதிகாரி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்த ஆண்டு கலைமாமணி விருது பெற்றோர்.'),
            thumbnail:'/images/676/tamanna_spicy_23_11_09__6_-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/30/post676.html",
            publishDate:"Jan 30, 2011",
            summary:$sce.trustAsHtml(" ‘தமிழக அரசு அறிவித்துள்ள கலைமாமணி விருதுகளுக்கு தேர்ந்தெடுக்கப் பட்டவர்கள்.      இவர்கள் யாரென்று பெயர் போட வேண்டியதில்லை  எழுத்தாளர் சா.கந்தசாமி.  எழுத்தாளர் நாஞ்சில் நாடன்.  Share this:Share on FacebookClick to share on TwitterClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நோயாளியான மருத்துவர்'),
            thumbnail:'/images/668/52_ramadass1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/30/post668.html",
            publishDate:"Jan 30, 2011",
            summary:$sce.trustAsHtml("  பாட்டாளி மக்கள் கட்சி, திமுக கூட்டணியில் சேர்ந்து 2011 சட்டமன்ற தேர்தலில் போட்டியிடும் என்று கருணாநிதி இன்று டெல்லியில் அறிவித்துள்ளார். &nbsp;இந்த அறிவிப்பை அடுத்து, தேர்தல் களம் ஓரளவுக்கு தெளிவாகியிருக்கிறது. &nbsp; &nbsp;ராமதாஸின் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராங் கால்'),
            thumbnail:'/images/646/kamaraj1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/29/post646.html",
            publishDate:"Jan 29, 2011",
            summary:$sce.trustAsHtml(" “ஹலோ தலைவரே… 2ஜி விவகாரத்துல சிபிஐ விசாரணை பற்றி பரபரப்பான தகவல் வந்துகிட்டுருக்கு தலைவரே…“ “என்ன தகவல் பா ? “ “நக்கீரன் இணை ஆசிரியர் காமராஜ் வீட்டுல ரெய்டு நடந்தத ஒட்டி அவர் ரொம்ப கலக்கத்துல..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தொடங்கியது இசை நாற்காலிப் போட்டி …   ….. …'),
            thumbnail:'/images/635/IMG_8791-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/29/post635.html",
            publishDate:"Jan 29, 2011",
            summary:$sce.trustAsHtml("இசை நாற்காலிப் போட்டி தொடங்கி விட்டது நண்பர்களே… எதற்கு இப்போது இந்த இசை நாற்காலிப் போட்டி என்கிறீர்களா ? இந்தப் போட்டியை சவுக்கு நடத்தவில்லை நண்பர்களே…. இந்தப் போட்டியை தனிப்பட்ட யாரும் நடத்தவில்லை. ஆனால்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குடியரசு தின விழா&#8230; சவுக்கின் பிரத்யேக ஆல்பம்.'),
            thumbnail:'/images/633/DSC_8069-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/29/post633.html",
            publishDate:"Jan 29, 2011",
            summary:$sce.trustAsHtml("  சவுக்கின், குடியரசு தின விழாவின் பிரத்யேக ஆல்பாம். &nbsp;கண்டு களியுங்கள் வாசகர்களே.. கோபப் படாம என்னய்யா பண்ணச் சொல்ற. சவுக்கோட குடியரசு தின விருதுகள் பட்டியல்ல என் பேரு இல்லையே..  வாய்யா, சவுக்கு வாசகர்கள் கிட்ட போய்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தப் பொழப்பு பொழைக்கறதுக்கு நாண்டுகிட்டு சாகலாம்.'),
            thumbnail:'/images/625/sunil_1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/27/post625.html",
            publishDate:"Jan 27, 2011",
            summary:$sce.trustAsHtml("&nbsp;யாருக்கு இந்த வசவு என்று அதிசயிக்காதீர்கள். எல்லாம் உங்களுக்கு நன்கு தெரிந்த நபர் தான். நேற்று நடந்த குடியரசுத் தலைவர் விருதுகள் விழாவில், ‘டையப்பர்’ விருது பெற்றார் இல்லையா ? அதே சுனில் குமார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிங்கமும், சிறுநரியும்'),
            thumbnail:'/images/620/Jayakanthan_Writer-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/26/post620.html",
            publishDate:"Jan 26, 2011",
            summary:$sce.trustAsHtml("தினமணி இணைதளத்தில் இன்று இந்தப் புகைப்படத்தை வெளியிட்டு, ஜெயகாந்தனின் சிறுகதை, குறுநாவல், நாவல்களின் தலைப்பை வெளியிட்டிருந்தார்கள்.&nbsp;&nbsp;இந்தப் புகைப்படத்திற்கு அவை மிகச் சிறப்பாக பொருந்தியுள்ளன.&nbsp; சிறப்பம்சத்தை கருதி, சவுக்கு அதை மறுபதிப்பு செய்கிறது.உதயம்&nbsp;&nbsp;குருபீடம் அக்கினிப் பிரவேசம்&nbsp;- ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பட்டொளி வீசி பறக்குது பாரீர்.'),
            thumbnail:'/images/618/3216875-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/26/post618.html",
            publishDate:"Jan 26, 2011",
            summary:$sce.trustAsHtml("aநன்றி தினமணி   Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கின் குடியரசு தின விருதுகள்.'),
            thumbnail:'/images/616/jaffer-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/25/post616.html",
            publishDate:"Jan 25, 2011",
            summary:$sce.trustAsHtml("ஒவ்வொரு ஆண்டும், குடியரசு தின விழாவின் போது, காவல்துறை உயர் அதிகாரிகளுக்கு பதக்கம் வழங்கப் படுவது வழக்கம். இந்தப் பதக்கங்கள், அதிகாரிகளின் சட்டையில் மாட்டிக் கொள்வதை விட, வேறு எந்தப் பயனையும் அளிப்பதில்லை என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிணத்தின் மீது பேச்சுவார்த்தை'),
            thumbnail:'/images/605/32144140-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/25/post605.html",
            publishDate:"Jan 25, 2011",
            summary:$sce.trustAsHtml("    நன்றி தினமணி Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடற்படை தளபதியோடு கருணாநிதி பேச்சுவார்த்தை'),
            thumbnail:'/images/603/Jan_-_22_g-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/23/post603.html",
            publishDate:"Jan 23, 2011",
            summary:$sce.trustAsHtml("இந்திய கடற்படை தளபதி எஸ்.பி.சர்மா அவர்களோடு, கருணாநிதி நடத்திய பேச்சுவார்த்தையில் நடந்த விபரங்கள் என்ன என்று தெரிந்து கொள்ள சவுக்கு வாசகர்கள் ஆவலாக இருப்பீர்கள். &nbsp;இதோ அந்த பேச்சுவார்த்தையின் விபரங்கள்.                    கருணாநிதி&nbsp;&nbsp;&nbsp;&nbsp; வாங்க சர்மா. எப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தியக் கடற்படையே, தமிழகத்தை விட்டு வெளியேறு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/01/23/post601.html",
            publishDate:"Jan 23, 2011",
            summary:$sce.trustAsHtml("இன்று மீண்டும் ஒரு மீனவன் இலங்கை கடற்படையால் சுடப்பட்டு கொல்லப் பட்டிருக்கிறான்.இதற்கும் ஒரு தந்தி டெல்லிக்குப் போகும். வேறு எந்த மாறுதலும் நடைபெறாது. நாளையும் மீனவன் கொல்லப் படுவான். நாளை மறுநாளும் கொல்லப் படுவான்.இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முடவன் கொம்புத் தேனுக்கு ஆசைப்படலாமா ?'),
            thumbnail:'/images/600/Kamaraj_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/22/post600.html",
            publishDate:"Jan 22, 2011",
            summary:$sce.trustAsHtml("&nbsp; முடவன் கொம்புத் தேனுக்கு ஆசைப் படலாமா ? படக்கூடாதல்லவா. அதைப் போலத்தானே மானமில்லாதவன் தான் அவமானப் படுத்தப் பட்டதாக கூவுவது ? அப்படி கூவும் மானங்கெட்டவன் யார் என்று தெரிந்து கொள்ள ஆவலாக இருக்கிறதல்லவா ? அது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சரவணன் என்ற சகுனி.'),
            thumbnail:'/images/593/Tiruvengimalai_saravanan-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/22/post593.html",
            publishDate:"Jan 22, 2011",
            summary:$sce.trustAsHtml("என்னடா சவுக்கு அடிக்கடி சரவணன் பற்றியே எழுதுகிறது என்று யோசிக்கிறீர்களா ? இப்போது நாம் பார்க்கப் போகும் சரவணன், ‘டால்மேன்‘ என்று தன்னை அழைத்துக் கொள்ளும் திருவேங்கிமலை சரவணன். இந்த சரவணனுக்கு ஏன் சகுனி என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏன் பிறந்தாய் மகனே ஏன் பிறந்தாயோ'),
            thumbnail:'/images/587/ARV_ALAGIRI_4489e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/22/post587.html",
            publishDate:"Jan 22, 2011",
            summary:$sce.trustAsHtml("பாகப் பிரிவினை படத்துக்காக கண்ணதாசன் எழுதிய இந்தப் பாடல், எவ்வித மாறுதலும் செய்யாமலேயே மிகப் பொருத்தமாக அமைந்திருக்கிறது. &nbsp; சவுக்குக்கு வேலையே வைக்காமல், இந்தப் பாடலை கருணாநிதிக்காகவே காலத்தை கடந்து எழுதிய கண்ணதாசனுக்கு வாழ்த்துக்கள்.ஏன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனித உருவில் மிருகம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2011/01/20/post581.html",
            publishDate:"Jan 20, 2011",
            summary:$sce.trustAsHtml("கடந்த வாரம் ஜுனியர் விகடனில் வெளிவந்துள்ள இந்தச் செய்தியை பாருங்கள். &nbsp; &nbsp; &#8216;காதில் விழுந்தது கொஞ்சம் அதிர்ச்சியான தகவல்தான். ஜீரணிக்கவே சிரமமாக இருந்தது!&#8221; என்ற கழுகார்.&#8221;எவ்வளவுதான் சத்தான புட்டிப்பால் வந்தாலும், தாய்ப் பாலுக்கு இணையாகாது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லயோலா கல்லூரி சர்வே.  அதிமுக அமோக வெற்றிJ'),
            thumbnail:'/images/580/pressmeet-blore-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/20/post580.html",
            publishDate:"Jan 20, 2011",
            summary:$sce.trustAsHtml(" லயோலா கல்லூரியின் காட்சி ஊடகத் துறை, அவ்வப் போது, பொது விவகாரங்கள் தொடர்பாக கருத்துக் கணிப்பு நடத்தி முடிவுகளை வெளியிடுவது வழக்கம். &nbsp; &nbsp;இதே போல, கடந்த ஆண்டு நவம்பர் மாதத்தில், 2011ல் நடக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உக்காரும் இடத்தில் கட்டி'),
            thumbnail:'/images/576/Baskaran_IAS-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/19/post576.html",
            publishDate:"Jan 19, 2011",
            summary:$sce.trustAsHtml("திருவாரூர் மாவட்ட ஆட்சித் தலைவராக நியமிக்கப் பட்டுள்ள திரு.கே.பாஸ்கரன் ஐஏஎஸ் கருணாநிதியை சந்தித்து வாழ்த்து பெறுகிறார்.  அவர் நிற்கும் பொசிஷனைப் பார்த்தால் அவருக்கு உட்காரும் இடத்தில் கட்டி இருப்பது போல தோன்றுகிறது. &nbsp; &nbsp;பாஸ்கர் சார்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிச்சைக் காரர்கள் மீது ‘பகீர்‘ புகார்.'),
            thumbnail:'/images/573/Jan_-_15_c-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/19/post573.html",
            publishDate:"Jan 19, 2011",
            summary:$sce.trustAsHtml("  ‘அய்யா சாமீ… தர்ம தொரை… பிச்சை போடுங்கய்யா….‘ ரெண்டு நாளா சாப்பிடலய்யா… ‘ இது போன்ற குரலை நாம் அடிக்கடி கேட்டிருப்போம். ஆனால் கடந்த 15.01.2011 அன்று கோபலபுரத்தில் இதே தொனியில் சற்று வேறுபாடான குரல்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலீவா வெளில வா தலீவா'),
            thumbnail:'/images/566/25THAZHAGIRI_80842e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/18/post566.html",
            publishDate:"Jan 18, 2011",
            summary:$sce.trustAsHtml(" கும்ப்டுக்கிறேன் தல.&nbsp;எம்பேரு வண்ணாரப்பேட்டை லுச்சா பையன் தல. நான் நெம்ப நாளா ஒன்ன பாலோ பண்ணிக்கினே கீறேன் தல.&nbsp;&nbsp; நம்ப இஸ்டேட்லயே தில்லான ஒரே ஆளு நீதான் தல. சார்ட்டா சொல்லனுன்னா நீ ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பான கவிஞர்களே….'),
            thumbnail:'/images/560/Inv_2011_6-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/16/post560.html",
            publishDate:"Jan 16, 2011",
            summary:$sce.trustAsHtml("என் அன்பான தமிழ்க் கவிஞர்களே.. உங்கள் மீது சவுக்கு மிகுந்த மதிப்பும் மரியாதையும் வைத்திருக்கிறது. நீங்கள் எல்லாம் படைப்பாளிகள். படைப்பதனால் மற்றவர்களை விட சமூகத்தில் சிறப்பு பெற்றவர்கள். சவுக்குக்கு கவிதை எழுதத் தெரியாது. ஆனால் ரசிக்கத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இலக்கியவாதி ராசாத்தி அம்மாள்.'),
            thumbnail:'/images/555/Inv_2011_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/16/post555.html",
            publishDate:"Jan 16, 2011",
            summary:$sce.trustAsHtml(" &nbsp;தொழில் அதிபர் ராசாத்தி அம்மாளைப் பற்றி சவுக்கில் படித்திருக்கிறீர்கள். ராசாத்தி அம்மாளின் மற்றொரு பரிமாணம் உங்களுக்குத் தெரியுமா ? தெரியாது. அதுதான் ராசாத்தி அம்மாள் இலக்கியவாதி என்பது. நேற்று, சென்னை சங்கமத்தின் ஒரு பகுதியாக, தமிழ்ச்சங்கமத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதியை இன்று சந்தித்த அடிமைகள்.'),
            thumbnail:'/images/536/Jan_-_15_e-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/15/post536.html",
            publishDate:"Jan 15, 2011",
            summary:$sce.trustAsHtml("  கருணாநிதியை இன்று தமிழக அரசில் பணியாற்றும் ஏராளமான அடிமைகள் சந்தித்து பொங்கல் வாழ்த்துக்கள் தெரிவித்தனர். &nbsp; இதில் சில அடிமைகளுக்கு கருணாநிதி பொங்கல் பரிசாக, 1000 ரூபாய் வழங்கினார். முதலில் இந்தப் புகைப்படங்களைப் பாருங்கள்.  ட்ராஃபிக்ல பிச்சை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மன்னவனே அழலாமா'),
            thumbnail:'/images/527/1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/14/post527.html",
            publishDate:"Jan 14, 2011",
            summary:$sce.trustAsHtml(" 2011 தேர்தலில், திமுக தோற்று, ஆந்திராவில் என்.டி.ராமாராவை அவரது கட்சியை விட்டு நீக்கியது போல, கருணாநிதியும் நீக்கப் படுகிறார் என்று வைத்துக் கொள்ளுங்கள். &nbsp;அப்போது ராசாத்தி அம்மாள், கருணாநிதியை பார்த்து பாடினால் எப்படிப் பாடுவார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாட்டிக் கொண்ட மார்ட்டின்.'),
            thumbnail:'/images/526/illaignan_Audio-Launch15-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/14/post526.html",
            publishDate:"Jan 14, 2011",
            summary:$sce.trustAsHtml(" மார்ட்டின் வேறு யாரும் அல்ல தோழர்களே….. இன்று ரிலீஸ் ஆகிறதே… கலைஞரின் இளைஞன். அந்தப் படத்தின் தயாரிப்பாளர் தான்.&nbsp;&nbsp; அந்தப் படத்தின் பின்னணி கதை என்ன என்பதைத் தான் சவுக்கு வாசகர்கள் பார்த்தீர்களே… இப்போது மார்ட்டின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கொல்லப் பட்ட மீனவனுக்கு கருணாநிதி அஞ்சலி'),
            thumbnail:'/images/519/25749828-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/14/post519.html",
            publishDate:"Jan 14, 2011",
            summary:$sce.trustAsHtml(" நன்றி தினமணி. Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனசாட்சியும் மானமும் உள்ள கவிஞன்.'),
            thumbnail:'/images/517/va.manikandan-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/13/post517.html",
            publishDate:"Jan 13, 2011",
            summary:$sce.trustAsHtml(" அன்பார்ந்த தோழர்களே, &nbsp;கவிஞர் வா.மணிகண்டன் அவர்கள் சென்னை சங்கமம் நிகழ்ச்சி தொடர்பாக சவுக்குக்கு எழுதியிள்ள கடிதத்தை சவுக்கு தனது வாசகர்களுக்காக அப்படியே பிரசுரம் செய்கிறது. &nbsp;கவிஞர் மணிகண்டனுக்கு சவுக்கு தனது மனமார்ந்த வாழ்த்துக்களையும் நன்றிகளையும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சென்னை சங்கமம்.'),
            thumbnail:'/images/515/Jan_12_k1-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/13/post515.html",
            publishDate:"Jan 13, 2011",
            summary:$sce.trustAsHtml("இந்தப் புகைப்படத்தில் உள்ளவர்கள் அமர்ந்திருக்கும் போது, என்ன நினைத்திருப்பார்கள் ? இந்தப் புகைப்படத்தில் உள்ளவர்கள் அமர்ந்திருக்கும் போது, என்ன நினைத்திருப்பார்கள் ?கனிமொழி: &nbsp;எவ்வளவோ சொல்லியும் டாடி நீரா ராடியாவை கூப்ட மாட்டேன்டாரே.. அடுத்த சங்கமத்துக்காவது அவங்கள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பட்டுக்கோட்டையிலிருந்து இரா.சரவணன்.'),
            thumbnail:'/images/513/jaffer-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/12/post513.html",
            publishDate:"Jan 12, 2011",
            summary:$sce.trustAsHtml("  புதுக்கோட்டையிலிருந்து சரவணன் தெரியும். இது என்னடா இது. பட்டுக்கோட்டையிலிருந்து சரவணன், அதுவும் இரா.சரவணன் என்று பார்க்கிறீர்களா ?&nbsp;&nbsp; வேறு யார். ஜுனியர் விகடனில் உள்ள ஜாபர் சேட்டின் அடிமை சரவணன் தான். பத்திரிக்கையாளர்களின் உலகம் வித்தியாசமானது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கலைஞரின் இளைஞன் கதை.'),
            thumbnail:'/images/509/image013-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/11/post509.html",
            publishDate:"Jan 11, 2011",
            summary:$sce.trustAsHtml(" படமே இன்னும் ரிலீஸ் ஆகலை. அதுக்குள்ள எப்படி அந்தப் படத்தின் கதையை சவுக்கு எழுதுகிறது என்று பார்க்கிறீர்களா ? அந்தப் படத்தில் கதை என்று ஒன்று இருக்கிறதா என்ன ?&nbsp;&nbsp; ஆனாலும், மீண்டும் திராவிட முன்னேற்றக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாலியும், காலியும்.'),
            thumbnail:'/images/499/remembering-kothamangalam-subbu07-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/08/post499.html",
            publishDate:"Jan 8, 2011",
            summary:$sce.trustAsHtml("சரி உங்களுக்கு க்ளூ… ஓகேவா…. கண்டு பிடியுங்கள் பார்க்கலாம்.&nbsp;ஒருவர் கவிஞர். மற்றொருவர் கயவர்ஒருவர் வயதில் மூத்தவர் மற்றொருவர் ஊரை ஏய்த்தவர்ஒருவர் வாயில் கவிதை நடைபயிலும் மற்றொருவர் வாயில் பொய்மை நடைபயிலும்.ஒருவர் பாட்டெழுதுவதில் புலமை மிக்கவர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆரம்பிச்சுட்டாங்கய்யா ஆரம்பிச்சுட்டாங்கய்யா'),
            thumbnail:'/images/494/IMG_9577-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/08/post494.html",
            publishDate:"Jan 8, 2011",
            summary:$sce.trustAsHtml("அதிமுக பொதுக்குழுவுக்காக மதுரவாயலில் வைக்கப் பட்டுள்ள கட்அவுட். &nbsp;பொதுக்குழு முடிந்து ஒரு வார காலம் ஆன பின்னும், இன்னும் இந்த பேனர் எடுக்கப் படவில்லை. மக்களிடம் வெகு விரைவாக வெறுப்பை சம்பாதிக்க வழி, இது போன்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீண்டத்தகாத வார்த்தையான “தமிழ் மையம்“'),
            thumbnail:'/images/492/Kaspar_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/07/post492.html",
            publishDate:"Jan 7, 2011",
            summary:$sce.trustAsHtml("தமிழ் மையம் என்ற வார்த்தை தீண்டத்தகாததா ? ஆம் தோழர்களே… இன்று சென்னை உயர்நீதிமன்றம் அப்படித்தான் தீர்ப்பு வழங்கியுள்ளது. தமிழக அரசு சென்னை சங்கமம் தொடர்பாக வெளியிடும் விளம்பரங்கள் எதிலும் தமிழ் மையம் என்ற வார்த்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரண்டாக உடைகிறதா திமுக… ?'),
            thumbnail:'/images/488/2533551202_1bb302a3dd_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/07/post488.html",
            publishDate:"Jan 7, 2011",
            summary:$sce.trustAsHtml("திமுகவின் உள்நாட்டுப் போர் உச்சகட்டத்தை எட்டியிருப்பதாக தகவல்கள் தெரிவிக்கின்றன.&nbsp;திமுக என்றதும், ஏதோ மாவட்டச் செயலாளர்கள் யாராவது கலகம் செய்கிறார்கள் என்று தவறாக நினைத்து விடாதீர்கள். இது மாவட்டச் செயலாளர்கள் யாரும் செய்த கலகம் அல்ல. கழகம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடங்க மறுப்போம்.   அத்து மீறுவோம்.'),
            thumbnail:'/images/483/ravikumar_tiruma-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/06/post483.html",
            publishDate:"Jan 6, 2011",
            summary:$sce.trustAsHtml("அடங்க மறுப்போம்.. &nbsp;அத்து மீறுவோம்....   ஆனால் கோபாலபுரம் போனால் கூழைக் கும்பிடு போடுவோம். Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கண்ணே பாப்பா கனியம்மா.'),
            thumbnail:'/images/480/KANIMOZHI_10674f-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/05/post480.html",
            publishDate:"Jan 5, 2011",
            summary:$sce.trustAsHtml("&nbsp;கனிமோழிக்கு சவுக்கின் பிறந்த நாள் வாழ்த்துக்கள்.&nbsp;&nbsp; இந்த பிறந்த நாள் கனிக்கு இனிமையாக இருந்ததா என்றால் இல்லை. இன்று கனிமொழி ஒரே அழுகாச்சி..&nbsp;&nbsp; எல்லா பிறந்த நாளுக்கும் கூடவே இருந்து மதிய உணவு சாப்பிடும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தகத்தகாய கதிரவன்.'),
            thumbnail:'/images/473/Sunil_kumar-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/05/post473.html",
            publishDate:"Jan 5, 2011",
            summary:$sce.trustAsHtml("தலைப்பை பார்த்தவுடன் என்னடா இதுவும் ஆண்டிமுத்து ராசாவைப் பற்றிய பதிவா என்று ஆச்சர்யப் படாதீர்கள்… இது ஆண்டிமுத்து மகனைப் போலவே, மற்றொரு ஜகஜ்ஜாலக் கில்லாடியைப் பற்றிய பதிவு ஆ.ராசா நான் குற்றமற்றவன் எந்தத் தவறும் செய்யவில்லை என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழல் மன்னனுக்குப் பாராட்டு விழாj'),
            thumbnail:'/images/467/vairamuthu3111_339-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/04/post467.html",
            publishDate:"Jan 4, 2011",
            summary:$sce.trustAsHtml(" கருணாநிதிக்கு பல்வேறு தலைப்புகளில் பாராட்டு விழா நடத்தியாகி விட்டது.&nbsp;&nbsp; சமீப காலமாக பாராட்டு விழா நடத்தி நீண்ட நாட்கள் வேறு ஆகி விட்டன.&nbsp;&nbsp; அதனால் என்ன செய்யலாமென்று, திமுகவினர் யோசித்த போது அவர்களுக்கு வந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வில்சனுக்கு வாழ்த்துக்கள்.'),
            thumbnail:'/images/460/Wilson-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/03/post460.html",
            publishDate:"Jan 3, 2011",
            summary:$sce.trustAsHtml("வில்சனுக்கு வாழ்த்துக்கள். &nbsp; திரு.பி.வில்சன் அவர்கள், தமிழ்நாடு அரசின் கூடுதல் தலைமை வழக்கறிஞராக பணியாற்றி வருகிறார். &nbsp; இவர் விரைவில் சென்னை உயர்நீதிமன்ற நீதிபதி ஆக உள்ளார் என்று தகவல்கள் கூறுகின்றன. இவர் கிறிஸ்துமஸ் தினத்தன்று,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாங்களும் அதத்தான் சொல்றோம் பாஸு.'),
            thumbnail:'/images/458/IMG_0003-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/02/post458.html",
            publishDate:"Jan 2, 2011",
            summary:$sce.trustAsHtml("கடந்த வாரம் குமுதம் இதழில் சென்னை தமிழனுக்கு லண்டன் விருது ! என்ற தலைப்பில் ஒரு கட்டுரை.&nbsp;&nbsp; அந்தக் கட்டுரையில் ஜாபர் சேட்டுக்கு தேசிய சட்ட நாள் விருது வழங்கப் பட்டது தொடர்பாக ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('படிச்சவன் சூதும் வாதும் பண்ணா…. பாகம் 2'),
            thumbnail:'/images/456/IMG_9442-150x150.jpg',
            categories:['default',''],
            href:"/default/2011/01/01/post456.html",
            publishDate:"Jan 1, 2011",
            summary:$sce.trustAsHtml(" இரண்டாம் பாகத்தை படிப்பதற்கு முன்னால், குமுதம் ரிப்போர்ட்டர் இதழுக்கு தொழில் அதிபர் சாதிக் பாட்சா அளித்த பேட்டியை படித்து விடுங்கள். பிறகு இரண்டாம் பாகத்தை தொடர்வோம். சரி, தைரியமாக பேசி விட்டோம். என்ன ஆனாலும் பார்த்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இனிய புத்தாண்டு வாழ்த்துக்கள்.'),
            thumbnail:'/images/449/savukku_image-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/31/post449.html",
            publishDate:"Dec 31, 2010",
            summary:$sce.trustAsHtml("அன்பார்ந்த தோழர்களே…. அன்பு உறவுகள் அனைவருக்கும் இனிய புத்தாண்டு வாழ்த்துக்கள். 2011ம் ஆண்டைப் பற்றி பார்க்கும் முன், 2010ஐப் பற்றி சிறிது பார்ப்போம்.&nbsp;2010 சவுக்குக்கு மிக மிக முக்கியமான ஆண்டு.&nbsp;&nbsp; இந்த ஆண்டு தான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தோளில் தொங்கும் ஸ்பெக்ட்ரம் வேதாளம்!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/31/post445.html",
            publishDate:"Dec 31, 2010",
            summary:$sce.trustAsHtml("ஒன்பது நாட்கள்.. 417 கேள்விகள்.ஒட்டுமொத்த சி.பி.ஐ. அதிகாரிகளில், திறமையும் அனுபவமும் மிக்க 247 பேர்களைத் தேர்ந்தெடுத்து&nbsp;ஸ்பெக்ட்ரம் ஊழலை விசாரிக்கும் பணியில் இறக்கி இருக்கிறார், அதன் இயக்குநர் ஏ.பி.சிங்! பங்குச் சந்தை மோசடி மன்னன் ஹர்ஷத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கண்ணாயிரத்துக்கு கண்டனம்.'),
            thumbnail:'/images/443/Rajendran_T_IPS-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/31/post443.html",
            publishDate:"Dec 31, 2010",
            summary:$sce.trustAsHtml("டைட்டில் நல்லா இருக்குல்ல…. ? என்னதான் மக்கள் பிரச்சினைகளைப் பற்றி ஆயிரம் எழுதினாலும், காவல்துறை அதிகாரிகளைப் பற்றி எழுதும் போது இருக்கும் இன்பம் இருக்கிறதே…. அது அலாதியானது. சவுக்கு வாசகர்களுக்கு நன்கு அறிமுகமான கமிஷனர் கண்ணாயிரத்திற்குத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('படிச்சவன் சூதும் வாதும் பண்ணா அய்யோன்னு போவான்.'),
            thumbnail:'/images/438/ANIL-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/30/post438.html",
            publishDate:"Dec 30, 2010",
            summary:$sce.trustAsHtml(" படிச்சவன் சூதும் வாதும் பண்ணா போவான் போவான்…அய்யோன்னு போவான்… என்றான் பாரதி. இப்படி சூதும் வாதும் செய்த இரண்டு படித்தவர்களைப் பற்றித் தான் இந்தப் பதிவு. நாரணமங்கலம். சமீபத்தில் செய்திகளின் இந்தப் பெயர் அடிப்பட்டிருப்பதை கண்டிருப்பீர்கள்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு லட்சத்து எழுபத்தாறாயிரம் கோடி நன்றிகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/23/post431.html",
            publishDate:"Dec 23, 2010",
            summary:$sce.trustAsHtml("சவுக்கு இன்று பத்து லட்சம் ஹிட்டுகளை தொட்டிருக்கிறது. சவுக்கு என்ற ஒன்று எதற்காக உருவானது ?&nbsp;&nbsp; ஆறு மாதங்களுக்கு முன்பு நிலவிய தமிழகத்தின் ஊடகச் சூழலே சவுக்கு உருவாகக் காரணம். சவுக்குக்கு, இது போல ஒரு வலைத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சினிமாவுக்குப் போன சித்தாளு.'),
            thumbnail:'/images/425/2638052737_4e2bd8d72e-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/22/post425.html",
            publishDate:"Dec 22, 2010",
            summary:$sce.trustAsHtml(" சினிமாவுக்குப் போன சித்தாளு.&nbsp;&nbsp; இது ஜெயகாந்தனின் மிகப் பிரபலமான நாவல். சினிமா எப்படி உழைப்பாளி மக்களின் வாழ்க்கையை சீரழிக்கிறது என்பதையும், கதாநாயக வழிபாட்டின் தீமைகளையும் மிக அழகாக உணர்த்தியிருப்பார். இந்தப் பதிவுக்கு இப்படி ஒரு தலைப்பை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உன்னோடு நான் இருந்த ஒவ்வொரு  மணித்துளியும்'),
            thumbnail:'/images/418/350l2xd-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/21/post418.html",
            publishDate:"Dec 21, 2010",
            summary:$sce.trustAsHtml(" இருவர் படம் பார்த்திருப்பீர்கள். அந்தப் படம் எதைப் பற்றியது என்ன கதை என்பதைப் பற்றி இதன் விக்கீபீடியா &nbsp;பக்கத்தில் &nbsp;பார்த்து தெரிந்து கொள்ளுங்கள். &nbsp; அந்தப் படத்தில் &#8220;உன்னோடு நான் இருந்த ஒவ்வொரு மணித்துளியும், மரணப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கோனப்குப்பக் காட்டில் கோபிநாதன் பாலகிருஷ்ணா..! ராஜினாமா செய் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/20/post413.html",
            publishDate:"Dec 20, 2010",
            summary:$sce.trustAsHtml("என்னடா இது சவுக்கு திடீரென்று யாரோ ஒரு பாலகிருஷ்ணனை ராஜினாமா செய்யச் சொல்கிறதே…. யார் இந்த பாலகிருஷ்ணன், எதற்காக ராஜினாமா செய்ய வேண்டும் என்று விளம்புகிறீர்களா ?&nbsp;அந்த பாலகிருஷ்ணன் வேறு யாரும் அல்ல…. இந்தியாவின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிறந்த நாள் வாழ்த்துக்கள் ஜாபர்.'),
            thumbnail:'/images/412/cake-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/19/post412.html",
            publishDate:"Dec 19, 2010",
            summary:$sce.trustAsHtml(" ஜாபர் சேட்டுக்கு இன்று பிறந்த நாள்.&nbsp;&nbsp;&nbsp;&nbsp; எதிரியாக இருந்தாலும், பொய் வழக்கு போட்டு, சவுக்கை சிறைக்கு அனுப்பியிருந்தாலும், ஜாபருக்கு பிறந்த நாள் வாழ்த்துக்கள் சொல்லும் பக்குவம் சவுக்குக்கு உண்டு. தினமும் ஜாபர் சேட், சவுக்கை கெட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்கீரன் காமராஜ் சவுக்குக்கு பேட்டி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/18/post404.html",
            publishDate:"Dec 18, 2010",
            summary:$sce.trustAsHtml("என் அன்பு வாசகர்களே,நக்கீரன் காமராஜின் தரப்பு என்ன என்பதை தெரிந்து கொள்வதற்காக, நேற்று காமராஜை சவுக்கு தொடர்பு கொண்டது. &nbsp;சார் சவுக்கு சார்பாக பேசுகிறோம். &nbsp;உங்கள் தரப்பு என்ன என்று கூறுங்கள், பதிப்பிக்கிறோம் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்கீரன் காமராஜ் சவுக்குக்கு பேட்டி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/18/post403.html",
            publishDate:"Dec 18, 2010",
            summary:$sce.trustAsHtml("என் அன்பு வாசகர்களே,நக்கீரன் காமராஜின் தரப்பு என்ன என்பதை தெரிந்து கொள்வதற்காக, நேற்று காமராஜை சவுக்கு தொடர்பு கொண்டது. &nbsp;சார் சவுக்கு சார்பாக பேசுகிறோம். &nbsp;உங்கள் தரப்பு என்ன என்று கூறுங்கள், பதிப்பிக்கிறோம் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கழலும் டவுசர்கள்.   கலக்கும் சிபிஐ'),
            thumbnail:'/images/402/1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/16/post402.html",
            publishDate:"Dec 16, 2010",
            summary:$sce.trustAsHtml(" சிபிஐ நடத்தும் ரெய்டுகளால் பலரது டவுசர்கள் கழற்றப் பட்டு வருகின்றன.&nbsp;&nbsp; அவ்வகையில் நேற்று கழற்றப் பட்ட முக்கியமான இரண்டு டவுசர்கள் யாருடையது தெரியுமா ? முதல் டவுசர் குருமா ராஜ் மற்றும் இரண்டாவது டவுசர் போலிப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கர்ம வீரர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/16/post394.html",
            publishDate:"Dec 16, 2010",
            summary:$sce.trustAsHtml("இந்தப் பதிவு ஜுன் மாதம் எழுதப் பட்டது. &nbsp;இந்தப் பதிவு எழுதியதற்கு சவுக்கின் மீது எத்தனை விமர்சனங்கள், காழ்ப்புகள் தெரியுமா ? &nbsp;இன்று சவுக்கு சொன்ன அத்தனையும் உண்மையாகி இருக்கிறது.&nbsp;கர்ம வீரர். கர்ம வீரர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரலோகத்தில் இருக்கும் பிதாவே, இந்தப் போலிப் பாதிரியை மன்னியும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/16/post393.html",
            publishDate:"Dec 16, 2010",
            summary:$sce.trustAsHtml("போலிப் பாதிரி, இந்த நபரை போலிப் பாதிரி என்று கூட சொல்லக் கூடாது. &nbsp;இவர் பாதிரி அல்ல. &nbsp;எதற்கும் உதவாத பாதி திரி. &nbsp;இவரைப் பற்றி சவுக்கு கடந்த ஜுலை மாதம் எழுதிய பதிவு,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆங்கிலப் பேராசிரியர் ஜாபர் சேட்.'),
            thumbnail:'/images/392/Jaffar_Sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/15/post392.html",
            publishDate:"Dec 15, 2010",
            summary:$sce.trustAsHtml("&nbsp;என்னடா இது…. ஜாபர் சேட் ஒரு ஐபிஎஸ் அதிகாரி என்பது தெரியும். உளவுத்துறையின் தலைவர் என்பது தெரியும். கருணாநிதியின் கைக்கூலி என்பது தெரியும். கோபாலபுரத்தின் கோயபல்ஸ் என்பது தெரியும், இது என்னடா புதிதாக…. ஆங்கிலப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எங்கேயோ கேட்ட குரல்.'),
            thumbnail:'/images/387/1_11600-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/12/post387.html",
            publishDate:"Dec 12, 2010",
            summary:$sce.trustAsHtml("   இன்று ரஜினிகாந்த் பிறந்த நாள். &nbsp;ரஜினி சிறப்பாக நடித்த ஒரு சில படங்களில் இதுவும் ஒன்று.&nbsp;&nbsp; அந்தப் படம் இன்று ரஜினிகாந்த் பிறந்தநாளை முன்னிட்டு, ரிலீஸ் செய்யப் படுகிறது.&nbsp;உடனே இது ரஜினி நடித்த படம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('7 தமிழர் விடுதலை மாநாடு.'),
            thumbnail:'/images/384/IMG_9276-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/12/post384.html",
            publishDate:"Dec 12, 2010",
            summary:$sce.trustAsHtml("ஏழு தமிழர் விடுதலை என்றால் என்ன ? யார் அந்த ஏழு பேர் ?&nbsp;&nbsp; அவர்கள் மட்டும் தான் தமிழர்களா ? இது போன்ற கேள்விகளுக்கு விடை தந்ததுதான் இன்று தமிழக மக்கள் உரிமைக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்குக்குத் தெரிந்த உலகின் சிறந்த மனித உரிமைப் போராளிக்கு வாழ்த்துக்கள்.'),
            thumbnail:'/images/375/radhakrishnan-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/10/post375.html",
            publishDate:"Dec 10, 2010",
            summary:$sce.trustAsHtml("சவுக்குக்கு தனது வாசகர்களைக் கண்டால் மிகவும் பயமாக இருக்கிறது.&nbsp;&nbsp; நீங்களே சொல்லுங்கள்.&nbsp;&nbsp; பாதுகாப்பு அதிகாரிகளின் உதவி இல்லாமல், தானாக வரிசையில் நின்று, டிக்கெட் வாங்கி, குடும்பத்தோடு சொந்தக் காசில் ஒரு உயர்நீதிமன்ற நீதிபதி சினிமா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதி தேவன்களின் மயக்கம்.'),
            thumbnail:'/images/373/IMG_0001-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/10/post373.html",
            publishDate:"Dec 10, 2010",
            summary:$sce.trustAsHtml("&nbsp;உயர்நீதிமன்ற நீதிபதி பதவி என்பது ஏறக்குறைய சர்வ வல்லமை படைத்தது. இந்திய அரசியலமைப்பின் பிரிவு 226 என்பது, அத்தனை அதிகாரங்களையும் உயர்நீதிமன்றத்துக்கு வழங்குகிறது. நீதிபதிகள் என்பவர்கள் பாரபட்ச மற்றவர்களாக நேர்மையானவர்களாக இருக்க வேண்டும் என்பதே அனைவரின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய தகவல்கள் அடங்கிய இசைப்பிரியாவின் படுகொலை போர்க்குற்ற காணொளி &#8211; சனல்4'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/09/post372.html",
            publishDate:"Dec 9, 2010",
            summary:$sce.trustAsHtml(" ஊடகவியளாளரும் இசை, நடன கலைஞருமான இசைப்பிரியாவை சிங்கள இராணுவத்தினர் படுகொலை செய்த காட்சி ஒன்றை புதிய தகவல்களை உள்ளடக்கி சனல்4 இன்று வெளியிட்டுள்ளது.சிறீலங்கா அரசு மீதான சுயாதீன போர்க்குற்ற விசாரணைக்கான கோரிக்கை வலுப்பெறும் வகையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விஷக்கிருமிகள்&#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/09/post370.html",
            publishDate:"Dec 9, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாடு பார் கவுன்சில் தலைவர் பதவியிலிருந்து ஆர்.கே.சந்திரமோகனை இடைநீக்கம் செய்வதற்கான உத்தரவை உயர் நீதிமன்றம் பிறப்பித்துள்ளது. உயர் நீதிமன்றத்தில் நீதிபதியை விரும்பத்தகாத வார்த்தைகளால் பேசியுள்ளார்; இது நீதிமன்றத்தை அவமதித்ததோடு அல்லாமல், நீதியைச் செயல்படுத்துவதில் குறுக்கீடு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீலச் சாயம் வெளுத்துப் போச்சு… ராசா வேஷம் கலைஞ்சு போச்சு.'),
            thumbnail:'/images/369/DSC_09123-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/08/post369.html",
            publishDate:"Dec 8, 2010",
            summary:$sce.trustAsHtml("&nbsp; குழந்தைகளாக இருக்கையில் நம்மில் பலர் பாடியிருக்கும் பாடல் இது. இதைப் போலத்தான் இன்று ராசாவின் வேஷம் கலைந்தது. இன்று அதிகாலை பல்வேறு குழுக்களாக பிரிந்து இந்தியா முழுவதும் சோதனையை நடத்திய சிபிஐ அதிகாரிகள், ஆ.ராசாவின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் டவுசரை கழற்றிய டைம்ஸ் நவ் தொலைக்காட்சி.'),
            thumbnail:'/images/362/Jaffar_Sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/06/post362.html",
            publishDate:"Dec 6, 2010",
            summary:$sce.trustAsHtml(" தமிழக உளவுத்துறை ஐஜி ஜாபர் சேட்டின் டவுசரை இன்று டைம்ஸ் நவ் தொலைக்காட்சி கழற்றியது. சவுக்கில்தான் முதன் முறையாக ஜாபர் சேட்டுக்கு வழங்கப் பட்ட இரண்டு க்ரவுண்டு வீட்டு மனையைப் பற்றியும், அதை அவர் முதலில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('2G-யை தூக்கி முழுங்கும் வைமேக்ஸ்!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/05/post361.html",
            publishDate:"Dec 5, 2010",
            summary:$sce.trustAsHtml("அடுத்த மெகா அகா ஜுகா!ஸ்பெக்ட்ரம் ஊழல் முறைகேட்டுக்கு இன்னமும் நாடாளுமன்றத்திலும் உச்ச நீதிமன்றத்திலும் தீர்வு எட்டப்படாத நிலையில், புதிய பூதம் ஒன்றுபுறப்பட்டு இருக்கிறது. ஸ்பெக்ட்ரம் விவகாரத்தை மூன்று ஆண்டுகளுக்கு முன்னால் ஆரம்பித்துவைத்த மார்க்சிஸ்ட் கம்யூனிஸ்ட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('2G-யில் சம்பந்தப்பட்டவரா சலாவுதீன்?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/05/post360.html",
            publishDate:"Dec 5, 2010",
            summary:$sce.trustAsHtml("அமலாக்கப்பிரிவு அமுக்க நினைக்கும் துபாய் ஜாம்பவான்!கடந்த இதழில், டெல்லியில் இருந்து சென்னைக்கு ரகசிய விசிட் வந்துள்ள வருவாய் அமலாக்கப் பிரிவு அதிகாரிகள் டீம் பற்றி சொல்லி இருந்தோம்! சென்னை சிட்டி சென்டர், கிழக்குக் கடற்கரை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மிஸ்டர் கழுகு: &#8221;வயசாயிடுச்சு!&#8221; ராகுல் சுரீர்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/05/post359.html",
            publishDate:"Dec 5, 2010",
            summary:$sce.trustAsHtml("மழையில் நனைந்து வந்த கழுகார், சிறகுகளைச் சிலுப்பியபடி கொஞ்ச நேரம் ஆசுவாசப்படுத்திக் கொண்டார். அவராகத் தொடங்கட்டும் என்று காத்திருந்தோம். &#8221;மழை, வெள்ளம் எனத் தமிழகத்தின் முக்கியமான பகுதிகள் அனைத்தும் தண்ணீரில் மிதக்கின்றன. கன மழை ஆரம்பிப்பதற்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உயிர் பயத்தில் நடுங்கிய ராஜபக்ஷே!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/05/post358.html",
            publishDate:"Dec 5, 2010",
            summary:$sce.trustAsHtml("காட்சி:1 இரு கைகளும் பின்னால் கட்டப்பட்ட நிலையில் அழைத்து வரப்படும் போராளிகள் ஓர் இடத்தில் தலைகுப்புறத் தள்ளப்படுகிறார்கள். சிங்கள&nbsp;ஷூக்கள் அவர்களின் முதுகுகளை வெறித்தனமாக மிதிக்கின்றன. அடுத்த கணமே போராளிகளின் தலைகளைக் குறிவைத்து சிங்களர்கள் கண்மூடித்தனமாகச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுகவிலிருந்து ஆ.ராசா நீக்கம் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/05/post357.html",
            publishDate:"Dec 5, 2010",
            summary:$sce.trustAsHtml("அலெக்ஸ் போன் செய்தார் சார். கோபாலபுரம் ஏரியாவில் இருக்கிறாராம். சில நிமிடங்களில் வந்துவிடுவதாகச் சொன்னார்’’ என்று பாண்டியனிடம் இன்டர்காமில் தகவல் கொடுத்தார் அர்ச்சனா.&nbsp;‘‘சரிம்மா. அவர் வருவதற்குள் சூடா இஞ்சி டீயை ஆர்டர் செய்’’ என்றார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுனில் குமார் செய்தியை புறக்கணித்த ஊடகங்கள்.'),
            thumbnail:'/images/356/sunil_new-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/05/post356.html",
            publishDate:"Dec 5, 2010",
            summary:$sce.trustAsHtml("லஞ்ச ஒழிப்புத் துறை இணை இயக்குநராக சுனில் குமார் ஐபிஎஸ் பணியாற்றி வருகிறார். ஐஏஎஸ், ஐபிஎஸ், மற்றும் தமிழகத்தில் உள்ள அரசுத் துறை ஊழியர்கள் அனைவர் மீதும் தொடரப்படும் ஊழல் வழக்குகளை மேற்பார்வை செய்வது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வீடு வாங்கலையோ வீடு&#8230;&#8230;.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/04/post355.html",
            publishDate:"Dec 4, 2010",
            summary:$sce.trustAsHtml("LAND SCAM 3.0One for my officer, one for my boy.Land and property are coveted assets. So why are chief ministers allowed to give these away..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எளிமையின் உதாரணம் எலிப்பி தர்மாராவ்.'),
            thumbnail:'/images/354/2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/04/post354.html",
            publishDate:"Dec 4, 2010",
            summary:$sce.trustAsHtml("எலிப்பி தர்மாராவ்.&nbsp;&nbsp; ஆந்திர மாநிலத்தைச் சேர்ந்த சென்னை உயர்நீதிமன்றத்தின் மூத்த நீதிபதி. 1999ம் ஆண்டு உயர்நீதிமன்ற நீதிபதியாக ஆந்திர மாநிலத்தில் நியமிக்கப் பட்டு, 2000ம் ஆண்டு சென்னை உயர்நீதிமன்றத்துக்கு மாறுதலில் வருகிறார்.&nbsp;இந்த நீதியரசர்தான், பன்னாட்டு பகாசுர..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யார் இந்த பிரபாகரன்…?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/12/04/post353.html",
            publishDate:"Dec 4, 2010",
            summary:$sce.trustAsHtml("தமிழன் யார் என்பதை அகிலமே திரும்பிப் பார்க்க வைத்தவர் ஒரு நாட்டின் வரலாற்றை மாத்தரமல்ல உலகின் பெரும் பகுதி&nbsp; வரலாற்றையே தலைகீழாக புரட்டிப் போட்ட ஈழப் போராட்டத்தின் நாயகன் பெயர் வேலுப்பிள்ளை பிரபாகரன் உலகத்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜபக்சவின் ஆணவப்போக்குக்கு விழுந்த முதல் அடி'),
            thumbnail:'/images/352/ma_01.jpg',
            categories:['default',''],
            href:"/default/2010/12/04/post352.html",
            publishDate:"Dec 4, 2010",
            summary:$sce.trustAsHtml("புகழ்பெற்ற ஒக்ஸ்போட் மாணவர் கழகத்தில் உரையாற்ற அழைக்கப்பட்ட மஹிந்த ராஜபக்சவுக்கு எதிராக பிரி. தமிழர்கள் காட்டிய வலுவான எதிர்ப்புக் காரணமாக அவரது பேச்சு கைவிடப்பட்டது. இது அவர் ஆட்சிக்கு வந்த பின்னர் சந்தித்த பாரிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மானத்தி அவள்: தமிழச்சி – வித்யாசாகர்!!'),
            thumbnail:'/images/350/iaisai.jpg',
            categories:['default',''],
            href:"/default/2010/12/03/post350.html",
            publishDate:"Dec 3, 2010",
            summary:$sce.trustAsHtml(" 1மண்ணின்விடுதலைக்குப் போராடியதமிழச்சியின் நிர்வாணம்இணையமெங்கும் ஒளிபரப்பு;உயிரிருந்தும் உலவும் நாம் -அதை கண்டும் -சாகாத; இழி பிறப்பு!!————————————————————–2மானத்தில் -தொட்டால் சுடும் நெருப்பு,இழிவாய் -பார்த்தாலே பாயும் மின்சாரம்,அவள் -தாயிற்கும் ஒரு படி மேல் என்றுஇனி புரியும் – சிங்களனுக்கு!!————————————————————–3அவளுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜாவும் கூஜாவும்.'),
            thumbnail:'/images/348/Jaffar_Sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/12/02/post348.html",
            publishDate:"Dec 2, 2010",
            summary:$sce.trustAsHtml("ராஜாவைப் பற்றி நன்கு தெரியும்.&nbsp;&nbsp; ஊரே ராஜாவை உரித்து உப்புக் கண்டம் போட்டுக் கொண்டிருக்கிறார்கள்.&nbsp;&nbsp; அது யாரு கூஜா ? வேற யாரு …. கோபாலபுரம் கூஜாதான். இப்புவும் புரியலையா… ? நம்ப ஜாபர் சேட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழல் தடுப்புத் துறையால் ஊத்தி மூடப்பட்ட பெரும் ஊழல்.'),
            thumbnail:'/images/340/radhakrishna1n-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/30/post340.html",
            publishDate:"Nov 30, 2010",
            summary:$sce.trustAsHtml("500 ரூபாய் லஞ்சம் வாங்கிய சர்வேயர் கைது.&nbsp;&nbsp; கரூர் மாவட்டம் அத்தியூர் கிராமத்தில் சர்வேயராக உள்ள கிருஷ்ணன், அவரிடம் நில அளவை செய்வதற்காக வந்த கண்ணன் என்பவரிடம் ரூபாய்.500 லஞ்சம் கேட்டுள்ளார். லஞ்சம் கொடுக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தொழில் அதிபர் ராசாத்தி அம்மாள்.'),
            thumbnail:'/images/325/rasathi_ammal-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/29/post325.html",
            publishDate:"Nov 29, 2010",
            summary:$sce.trustAsHtml(" என்னடா இது புதுக் கதையாக இருக்கிறதே என்று பார்க்கிறீர்களா ? “காகிதப்பூ“ நாடகத்தில் கதாநாயகியாக நடித்தார் என்று தெரியும். கருணாநிதியின் மூன்றாவது மனைவி என்று தெரியும். என்னடா இது திடீரென்று சவுக்கு ராசாத்தி அம்மாளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('﻿  ஈழத் தமிழர்கள் பிணத்தை எண்ணிக் கொண்டிருந்த போது கருணாநிதி பணத்தை எண்ணிக் கொண்டிருந்தார்.'),
            thumbnail:'/images/307/IMG_9149-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/27/post307.html",
            publishDate:"Nov 27, 2010",
            summary:$sce.trustAsHtml("ஈழத் தமிழர்கள் கொத்துக் குண்டுகளுக்கு இரையாகிக் கொண்டிருந்த போது, ஸ்பெக்ட்ரம் ஊழலில் வந்த பணத்தை கருணாநிதி குடும்பத்தினர் எண்ணிக் கொண்டிருந்தனர் என்று பழ.நெடுமாறன் குற்றம் சாட்டினார். சென்னை தியாகராயா நகரில் இன்று மாவீரர் நாள் பொதுக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழ்தேசிய மாவீரர் நாள் நவம்பர் 27 &#8211; 2010'),
            thumbnail:'/images/300/maveerar-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/27/post300.html",
            publishDate:"Nov 27, 2010",
            summary:$sce.trustAsHtml("Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike this:Like..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆகாரம் உண்ண எல்லோருன் ஒன்றாக அன்போடு ஓடி வாங்க….'),
            thumbnail:'/images/296/aram-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/25/post296.html",
            publishDate:"Nov 25, 2010",
            summary:$sce.trustAsHtml(" என்ன இது திடீரென்று சவுக்கு அன்னதானம் வழங்கப் போகிறதா என்று பார்க்கிறீர்களா ? அதெல்லாம் இல்லை.&nbsp;&nbsp; இந்தப் பாடல் உடுமலை நாராயண கவியின் பாடல்.இந்தப் பாடல் இடம் பெற்ற படம் பராசக்தி. விதியின் விளையாட்டாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('Washington Post questions ethics in Indian media'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/24/post287.html",
            publishDate:"Nov 24, 2010",
            summary:$sce.trustAsHtml(" “Do you have in mind a clear political solution, even if you have not revealed the specifics?” Mr. N. Ram of The Hindu who was..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஓ அமேரிக்கா..  கருணாநிதி கவிதை..'),
            thumbnail:'/images/286/a-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/23/post286.html",
            publishDate:"Nov 23, 2010",
            summary:$sce.trustAsHtml(" &nbsp;நேற்று நியூயார்க் டைம்ஸ் நாளேட்டில் ஆ.ராசா குறித்தும் கருணாநிதி குறித்தும் அவர் குடும்பம் குறித்தும் பிரசுரிக்கப் பட்ட கட்டுரையை சவுக்கு வாசகர்கள் படித்திருப்பீர்கள். &nbsp;அந்தக் கட்டுரையைக் கண்ட கருணாநிதி, கடும் கோபம் அடைந்து, அமேரிக்காவைக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆண்டிமுத்து ராசாவின் வேட்டியை அவிழ்த்த அமெரிக்க பேப்பர்.'),
            thumbnail:'/images/284/a-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/22/post284.html",
            publishDate:"Nov 22, 2010",
            summary:$sce.trustAsHtml("   இந்திய ஊழலின் இதயத்தில் பொறுத்தமற்ற மனிதர் இப்படித்தான் நியூயார்க் டைம்ஸ் ஆண்டிமுத்து ராசாவை வர்ணிக்கிறது. இன்று நியூயார்க் டைம்ஸ் நாளேட்டில் வெளிவந்த கட்டுரையை சவுக்கு தனது வாசகர்களுக்காக உடனுக்குடன் மொழி பெயர்த்து வழங்குகிறது. ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆ.ராசா நல்லவரா…. கெட்டவரா….. …….'),
            thumbnail:'/images/283/mm_singh_a_raja_20101129-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/21/post283.html",
            publishDate:"Nov 21, 2010",
            summary:$sce.trustAsHtml("ஆ.ராசா தவறு செய்தாரா இல்லையா என்பதை விசாரிக்கும் முன்பே அவர் மீது குற்றம் சாட்டுகிறார்கள். இவ்வளவு பெரிய ஊழல் நடைபெறுவதற்கு வாய்ப்பே இல்லை.&nbsp;&nbsp; ராசா தலித் என்பதால் இவ்வாறு பார்ப்பன ஊடகங்களாலும், பார்ப்பனீய சக்திகளாலும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீரா ராடியா என்ற மாதரசி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/21/post277.html",
            publishDate:"Nov 21, 2010",
            summary:$sce.trustAsHtml("அரசியல் தரகர் ரீரா ராடியா உடனான ஆ.ராசா மற்றும் முக்கிய புள்ளிகளிடம் நடத்திய உரையாடலை இன்று தினமணி நாளேடு வெளியிட்டுள்ளது. &nbsp;சவுக்கு வாசகர்களுக்காக தினமணியில் வந்த மொழியாக்கம். ஆ. ராசா &#8211; நீரா ராடியா உரையாடல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எங்க ராசா.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/20/post276.html",
            publishDate:"Nov 20, 2010",
            summary:$sce.trustAsHtml("இன்று வெளிவந்த நக்கீரன் இதழில் வெளிவந்த கட்டுரை கமா புல்ஸ்டாப் கூட மாற்றாமல், சவுக்கு நேயர்களுக்காக அப்படியே தரப்படுகிறது. &nbsp; இந்தக் கட்டுரையை எழுதியவர் பெயர் பிரகாஷ். &nbsp; இக்கட்டுரையை படித்து விட்டு, நக்கீரனின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அணைப்புத் துறை தலைவர்.'),
            thumbnail:'/images/275/j1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/20/post275.html",
            publishDate:"Nov 20, 2010",
            summary:$sce.trustAsHtml(" தீயணைப்புத் துறைத் தலைவர் கேள்விப் பட்டிருக்கிறீர்கள்.&nbsp;&nbsp;&nbsp;&nbsp; இது என்ன அணைப்புத் துறை தலைவர், புதிதாக இருக்கிறதே என்று பார்க்கிறீர்களா ? விளக்கிச் சொல்கிறேன். பொறுங்கள். கடந்த ஞாயிறு இந்தியாவே எப்படி பரபரப்பாக இருந்தது என்பது உங்களுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சன் டிவியை ஒழித்துக் கட்ட கனிமொழி திட்டம்'),
            thumbnail:'/images/273/4060247467_d225c319a2_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/19/post273.html",
            publishDate:"Nov 19, 2010",
            summary:$sce.trustAsHtml("அவுட்லுக் இணையதளம், இன்று கனிமொழி மற்றும் அரசியல் தரகர் நீரா ராடியா உடனான உரையாடலை வெளியிட்டுள்ளது. &nbsp;அந்த உரையாடலில், கனிமொழி, இந்தியா முழுமைக்கும் டிடிஎச் போன்ற திட்டங்களை கொண்டு வந்து மாறன் சகோதரர்களின் பிடியை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆண்டிமுத்துவும், சின்னப்பிள்ளையும்.'),
            thumbnail:'/images/270/raja-768204-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/18/post270.html",
            publishDate:"Nov 18, 2010",
            summary:$sce.trustAsHtml("இத்தனைக்கும் காரணம் போன பதிவின் தலைப்பு தான்.&nbsp;&nbsp; அந்தத் தலைப்பு நகைச்சுவை உணர்வுக்காக எழுதப் பட்டதே தவிர, வேறு எந்த உள்நோக்கமும் இல்லை.&nbsp;&nbsp; ராசாவின் பெற்றோர் ஆண்டிமுத்து மீதும், சின்னப்பிள்ளை மீதும் சவுக்குக்கு நிரம்ப..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆண்டிமுத்து அன்று இரவுக் காட்சிக்கு போயிருந்தால்….'),
            thumbnail:'/images/256/Raja_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/15/post256.html",
            publishDate:"Nov 15, 2010",
            summary:$sce.trustAsHtml(" ஆண்டிமுத்து இரவுக் காட்சிக்குப் போயிருந்தால் என்ன ஆயிருக்கும் ? இந்தியாவுக்கு  17,60,00,00,00,000 ரூபாய் மிச்சமாயிருக்கும்.&nbsp;&nbsp; புரிகிறதா.. ஆம் ஆண்டிமுத்து, ஆ.ராசாவின் தந்தை.&nbsp;&nbsp; 1962ம் ஆண்டு, அவர் இரவுக் காட்சிக்கு போயிருந்தால், இந்தியா இந்த வரலாறு காணாத ஊழலை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடுதலை தேவதை'),
            thumbnail:'/images/244/9623d2da9fcc8fd75272-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/14/post244.html",
            publishDate:"Nov 14, 2010",
            summary:$sce.trustAsHtml(" சிறையிலிருந்து வெளிவரும் சுதந்திர தேவதையை சவுக்கு வரவேற்கிறது. &nbsp; வாருங்கள் சூ கீ அவர்களே.               Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போலி என்கவுண்டரும் பாம்பாட்டிச் சித்தரும்.'),
            thumbnail:'/images/239/Sylendra-Babu-Handling-Python-2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/13/post239.html",
            publishDate:"Nov 13, 2010",
            summary:$sce.trustAsHtml(" போலி என்கவுண்டர் உங்களுக்குத் தெரியும். அது யார் பாம்பாட்டிச் சித்தர் ? வேறு யார் … இந்தப் படங்களைப் பாருங்கள் தெரியும்.&nbsp;   என்கவுண்டரைப் பற்றி எழுதிய பதிவுக்குத் தான் எத்தனைக் கண்டனங்கள் ….&nbsp;&nbsp; எத்தனை அவதூறு வார்த்தைகள்…. உணர்ச்சி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாசத் தலைவனுக்கு பாராட்டு விழா.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/12/post230.html",
            publishDate:"Nov 12, 2010",
            summary:$sce.trustAsHtml("ஏறக்குறைய அனைத்து தலைப்புகளிலும் கருணாநிதிக்கு பாராட்டு விழா நடத்தி முடித்து விட்டதால் இப்பொழுது கருணாநிதியை எதற்காக பாராட்டுவது என்று “கருணாநிதியை பாராட்டும் துறையின்“ அமைச்சர் ஜெகதரட்சகனும், துணை அமைச்சர் துரை முருகனும் உட்கார்ந்து யோசிக்கின்றனர்.&nbsp;திடீரென்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சட்டப் பேரவை கூட்டத்திற்காக கருணாநிதி செய்த கொலை.'),
            thumbnail:'/images/229/encounter_284024f-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/09/post229.html",
            publishDate:"Nov 9, 2010",
            summary:$sce.trustAsHtml("ஆம். இது கருணாநிதி செய்த கொலை தான். இந்தக் கொலையை இன்று கோவை மாநகரமே பட்டாசுகள் வெடித்துக் கொண்டாடியது. இன்றுதான் எங்களுக்கு தீபாவளி என்று ஊடகங்களுக்கு அளித்த பேட்டிகளில், கூறுகிறார்கள் கோவை மக்கள். &nbsp;முதலில் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விக்கிலீக்கும் விடுதலைப் புலிகளும்.'),
            thumbnail:'/images/226/317_0052-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/07/post226.html",
            publishDate:"Nov 7, 2010",
            summary:$sce.trustAsHtml("விக்கிலீக்குக்கும், விடுதலைப் புலிகளுக்கும் என்ன தொடர்பு என்பதை பின்னால் பார்ப்போம்.முதலில், விடுதலைப் புலிகள் மீதான தடை, கருணாநிதி அரசின் நிலைபாடு ஆகியவற்றை பார்த்து விடுவோம்.&nbsp;சட்டவிரோத நடவடிக்கைகள் தடுப்பு தீர்ப்பாயம் புலிகள் இயக்கத்தின் மீதான தடைக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஸ்பெக்ட்ரம்&#8230; கூட்டணிக்கு ஆபத்து?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/06/post214.html",
            publishDate:"Nov 6, 2010",
            summary:$sce.trustAsHtml(" &nbsp;விசாரணைக்கு உத்தரவிட்டு ஓராண்டு கடந்துவிட்டது. இனியும் என்ன செய்கிறீர்கள்? இத்தனைக்கு பிறகும் தொலைத் தொடர்புத் துறைக்கு அமைச்சர் மாற்றப்படவில்லை. விசாரணையின் போக்கைப் பார்த்தால், இன்னும் பத்தாண்டு இழுப்பீர்கள் போல? நேர்மையை கடைபிடிக்கும் விஷயத்தில், அரசே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஸ்டாலினை எதிர்க்கத் துணிந்த வீரபாண்டியார்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/06/post213.html",
            publishDate:"Nov 6, 2010",
            summary:$sce.trustAsHtml("‘சார். டெல்லியிலிருந்து வீடியோ சாட்டிங்கில் உங்களை பாண்டியன் சார் அழைக்கிறார்’’ என்று இன்டர்காமில் அலெக்ஸுக்கு தகவல் கொடுத்தார் அர்ச்சனா.சாட்டிங்கில் நுழைந்து, ‘‘என்ன பாண்டியன். டெல்லி கேஸ் எப்படி போயிக்கிட்டு இருக்கு’’ என்று விசாரித்தார் அலெக்ஸ்.‘‘நம்ம..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காவல்துறை உள்குத்து.'),
            thumbnail:'/images/212/Jaffar_Sait_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/06/post212.html",
            publishDate:"Nov 6, 2010",
            summary:$sce.trustAsHtml("தமிழக காவல்துறையில் உள்குத்து உச்ச கட்டத்தை அடைந்திருப்பதாக தகவல்கள் கூறுகின்றன. இந்த உள்குத்து, லத்திக்கா சரணை டிஜிபியாக நியமித்ததில் இருந்தே தொடங்கி விட்டாலும், தற்போது, மிக அதிகமாகி, காங்கிரஸ் கட்சியின் கோஷ்டி சண்டை அளவுக்கு வளர்ந்திருப்பதாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடுதலைப்புலி போட்ட அதிரடி மனு!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/01/post211.html",
            publishDate:"Nov 1, 2010",
            summary:$sce.trustAsHtml(" விடுதலைப்புலிகள் தலைவர் பிரபாகரன் இப்போது உயிருடன் இல்லை.புலிகள் இயக்கம் அழிக்கப்பட்டுவிட்டது என்று இலங்கை அரசு அறிவித்துக்கொண்டிருக்க. இந்தியாவில் புலிகள் இயக்கத்துக்கான தடை நீட்டிக்கப்பட்டுக்கொண்டிருக்கிறது.இந்தத் தடையை நீக்கக் கோரும் வழக்கு விசாரணையால் இந்த தீர்ப்பாயங்கள் களைகட்டியிருக்கின்றன.புலிகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொரணையற்றவர்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/01/post210.html",
            publishDate:"Nov 1, 2010",
            summary:$sce.trustAsHtml("உதகை, அக். 31: 2ஜி அலைகற்றை ஒதுக்கீடு விவகாரத்தில் உச்ச நீதிமன்றம் அண்மையில் தெரிவித்துள்ள கருத்துகள் இறுதித் தீர்ப்பல்ல என்று மத்திய தொலைத் தொடர்பு, தகவல் தொழில்நுட்பத்துறை அமைச்சர் ஆ. ராசா கூறினார்.  ÷நீலகரி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிலமோசடிகளின் காலம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/11/01/post209.html",
            publishDate:"Nov 1, 2010",
            summary:$sce.trustAsHtml("எல்லாப் பெருநகரங்களிலும் நிலமோசடி மிகச் சர்வசாதாரணமாக நடைபெற்றுக் கொண்டிருக்கிறது. பல இடங்களில் பல பேரைக் கொன்று நிலங்கள் அபகரிக்கப்பட்டுள்ளன அல்லது குறைந்த விலைக்குக் கைமாறியுள்ளன. மும்பையிலும் இது நடக்கிறது என்றாலும், கார்கில் போரில் உயிர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆசிய வளர்ச்சி வங்கியில் திடுக்கிடும் ஊழல்'),
            thumbnail:'/images/208/KAshokVardhanShettyIAS-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/11/01/post208.html",
            publishDate:"Nov 1, 2010",
            summary:$sce.trustAsHtml("ஆசிய வளர்ச்சி வங்கியின் நிதியை முறைகேடாக, தமிழக அரசு சுய உதவிக்குழுக்களுக்கான கட்டிடத்திற்கு செலவழிக்கப்பட்டுள்ளதாக சர்ச்சை எழுந்துள்ளது. ஆசிய வளர்ச்சி வங்கி, தமிழக அரசின் செயல்பாட்டிற்கு அதிருப்தி தெரிவித்துள்ளது.தமிழக அரசு ஆசிய வளர்ச்சி வங்கி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக முதல்வர் மு.கருணாநிதி அவர்கட்கு,'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/31/post206.html",
            publishDate:"Oct 31, 2010",
            summary:$sce.trustAsHtml("ஒரு ஈழத்தமிழனாகிய நான் சிங்களவன் செய்த கொடுமைகளையும் தமிழினத்தின் வெளிப்படையான சில எதிரிகளையும் தேசத் துரோகிகளையும் நன்கு அறிவேன். மேலும் நான் எனக்கு நினைவு தெரிந்த நாள் முதாலாய் உங்களைப் பற்றியும் உங்கள் அரசியல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காவிரியில் தண்ணீர் கிடையாது'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/30/post200.html",
            publishDate:"Oct 30, 2010",
            summary:$sce.trustAsHtml(" காவிரி ஆற்றிலிருந்து, தமிழகத்துக்கு தண்ணீர் திறந்துவிடும் பேச்சுக்கே இடமில்லை என்று கர்நாடக நீர்வளத்துறை அமைச்சர் பசவராஜ் பொம்மை பெங்களூரில் அனைத்துக் கட்சி கூட்டம் முடிந்ததும் பத்திரிகையாளர்களிடம் தெரிவித்தார்..இதை தொடர்ந்து பெங்களூரில் இருக்கும் அவரை 28ம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மூடுவிழா நோக்கி நுகர்பொருள் வாணிப கழகம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/30/post199.html",
            publishDate:"Oct 30, 2010",
            summary:$sce.trustAsHtml("நுகர்பொருள் வாணிப கழகம் மூடு விழாவை நோக்கி போய் கொண்டு இருக்கிறது. காவிர் டெல்டா மாவட்டங்களில் சம்பா, குறுவை சாகுபடிகளில் விவசாயிகளுக்கு நல்ல விலைக்கு நெல் கொள்முதல் செய்யும் நோக்கத்துடன் தொடங்கப்பட்ட நுகர்பொருள் வாணிப..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அக்காவின் அக்கப்போர்.'),
            thumbnail:'/images/198/young_vasanthi-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/28/post198.html",
            publishDate:"Oct 28, 2010",
            summary:$sce.trustAsHtml("&nbsp;வசந்தி அக்காவும், அவர் கணவர், ஸ்டான்லி ராஜனும், 1996ம் ஆண்டு, எண் 4, விவி காலனி முதல் தெரு, ஆதம்பாக்கம், சென்னை 88 என்ற முகவரியில் வசித்து வந்தனர். ஏற்கனவே சொல்லியது போல, அக்கா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வசந்தமில்லா வசந்தி.'),
            thumbnail:'/images/192/Kalaignar_87_Book_Release_Invitation_02-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/26/post192.html",
            publishDate:"Oct 26, 2010",
            summary:$sce.trustAsHtml("யார் இது புது கேரக்டர்.&nbsp;&nbsp; வசந்தி என்றவுடன் கண்ணா பின்னாவென்று யோசிக்காதீர்கள். இந்த வசந்தி வேறு யாருமல்ல. திராவிட முன்னேற்றக் கழகத்தின் ராஜ்ய சபை உறுப்பினர் வசந்தி ஸ்டான்லி தான் அந்த நபர்.&nbsp;இந்த வசந்தி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பள்ளிக் கட்டண நிர்ணயக் குழுத் தலைவர் நீதிபதி கோவிந்தராஜன் திடீர் ராஜிநாமா'),
            thumbnail:'/images/177/justicegovindarajan.jpg',
            categories:['default',''],
            href:"/default/2010/10/24/post177.html",
            publishDate:"Oct 24, 2010",
            summary:$sce.trustAsHtml("சென்னை, அக். 23: தனியார் பள்ளிகளுக்கான கல்விக் கட்டண நிர்ணயக் குழுவின் தலைவர் பதவியிலிருந்து நீதிபதி கோவிந்தராஜன் திடீரென ராஜிநாமா செய்துள்ளார்.&nbsp;மேல்முறையீடு செய்துள்ள தனியார் பள்ளிகளுக்கு கட்டண நிர்ணயம் செய்வது தொடர்பாக அரசுக்கும், நீதிபதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதலை வடிக்கும் கண்ணீர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/23/post7442.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml("போலியாக கண்ணீர் வடிப்பதற்கு முதலைக் கண்ணீர் என்று உதாரணம் கூறுவார்கள். அப்படிப்பட்ட முதலைக் கண்ணீரை இன்று வடிப்பது யார் ?இந்தக் கண்ணீரையும் இப்போது உகுக்க வேண்டிய தேவை என்னவென்றால், காங்கிரஸ் கட்சியும், சோனியா காந்தியும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சூடும் இல்லை. சொரணையும் இல்லை.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/23/post7441.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml("யாருக்கு என்று கேட்கிறீர்களா ? தமிழ்நாட்டில் உள்ள அதிகாரிகளுக்குத் தான்.ஒரு அரசாங்கம் தவறு செய்திருக்கிறது என்று நீதிமன்றம் சுட்டிக் காட்டினால், அதை திருத்திக் கொள்வதை விட்டு விட்டு, அந்தத் தீர்ப்பை எதிர்த்து உச்ச நீதிமன்றத்திலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொதுப் பணத் துறை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/23/post7440.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml("இந்த வார தமிழக அரசியல் இதழில், “வழக்கில் சிக்க வைக்க சதி. ராமசுந்தரம் ஐஏஎஸ் ராஜினாமா ? “ என்ற தலைப்பில் அட்டைச் செய்தி வந்திருக்கிறது. படித்துப் பார்த்தால், நமது சுனில் குமார் பற்றியும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதலை வடிக்கும் கண்ணீர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/23/post7018.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml("போலியாக கண்ணீர் வடிப்பதற்கு முதலைக் கண்ணீர் என்று உதாரணம் கூறுவார்கள். அப்படிப்பட்ட முதலைக் கண்ணீரை இன்று வடிப்பது யார் ?இந்தக் கண்ணீரையும் இப்போது உகுக்க வேண்டிய தேவை என்னவென்றால், காங்கிரஸ் கட்சியும், சோனியா காந்தியும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சூடும் இல்லை. சொரணையும் இல்லை.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/23/post7017.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml("யாருக்கு என்று கேட்கிறீர்களா ? தமிழ்நாட்டில் உள்ள அதிகாரிகளுக்குத் தான்.ஒரு அரசாங்கம் தவறு செய்திருக்கிறது என்று நீதிமன்றம் சுட்டிக் காட்டினால், அதை திருத்திக் கொள்வதை விட்டு விட்டு, அந்தத் தீர்ப்பை எதிர்த்து உச்ச நீதிமன்றத்திலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொதுப் பணத் துறை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/23/post7016.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml("இந்த வார தமிழக அரசியல் இதழில், “வழக்கில் சிக்க வைக்க சதி. ராமசுந்தரம் ஐஏஎஸ் ராஜினாமா ? “ என்ற தலைப்பில் அட்டைச் செய்தி வந்திருக்கிறது. படித்துப் பார்த்தால், நமது சுனில் குமார் பற்றியும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பொதுப் பணத் துறை'),
            thumbnail:'/images/175/sunil_new-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/23/post175.html",
            publishDate:"Oct 23, 2010",
            summary:$sce.trustAsHtml(" இந்த வார தமிழக அரசியல் இதழில், “வழக்கில் சிக்க வைக்க சதி. ராமசுந்தரம் ஐஏஎஸ் ராஜினாமா ? “ என்ற தலைப்பில் அட்டைச் செய்தி வந்திருக்கிறது. படித்துப் பார்த்தால், நமது சுனில் குமார் பற்றியும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சூடும் இல்லை. சொரணையும் இல்லை.'),
            thumbnail:'/images/167/letikha_saran-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/22/post167.html",
            publishDate:"Oct 22, 2010",
            summary:$sce.trustAsHtml(" யாருக்கு என்று கேட்கிறீர்களா ?&nbsp;&nbsp; தமிழ்நாட்டில் உள்ள அதிகாரிகளுக்குத் தான்.ஒரு அரசாங்கம் தவறு செய்திருக்கிறது என்று நீதிமன்றம் சுட்டிக் காட்டினால், அதை திருத்திக் கொள்வதை விட்டு விட்டு, அந்தத் தீர்ப்பை எதிர்த்து உச்ச நீதிமன்றத்திலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இது என்ன ராஜநீதியோ'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/22/post166.html",
            publishDate:"Oct 22, 2010",
            summary:$sce.trustAsHtml(" விடுதலைப் புலிகள் இயக்கத்துக்கு எதிரான போருக்குப் பின்னர், இலங்கை அரசே விடுதலைப் புலிகளை மறந்துவிட்டு அடுத்த&nbsp; வேலையைப் பார்க்கத் தொடங்கிவிட்ட நிலையில், இன்னமும் இந்திய அரசு விடுதலைப் புலிகளை பயங்கரவாத இயக்கமாகக் கருதி தடை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதலை வடிக்கும் கண்ணீர்.'),
            thumbnail:'/images/165/1karuna_croc-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/21/post165.html",
            publishDate:"Oct 21, 2010",
            summary:$sce.trustAsHtml("&nbsp; போலியாக கண்ணீர் வடிப்பதற்கு முதலைக் கண்ணீர் என்று உதாரணம் கூறுவார்கள்.&nbsp;&nbsp; அப்படிப்பட்ட முதலைக் கண்ணீரை இன்று வடிப்பது யார் ?&nbsp;வேறு யார், தமிழ்நாட்டின் மூத்த முதலையான கருணாநிதியைத் தவிர வேறு யார் ? நேற்று உடன்பிறப்புகளுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்றோடு ஆறு ஆண்டுகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/18/post7443.html",
            publishDate:"Oct 18, 2010",
            summary:$sce.trustAsHtml("இன்றோடு ஆறு ஆண்டுகள் ஆகின்றன. எது பற்றி என்று கேட்கிறீர்களா ? சந்தன வீரப்பன் என்று அழைக்கப் பட்ட கூஸ் முனுசாமி வீரப்பன் இறந்து இன்றோடு ஆறு ஆண்டுகள் ஆகின்றன.வீரப்பனை கொன்றோம் என்று மார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்றோடு ஆறு ஆண்டுகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/10/18/post7019.html",
            publishDate:"Oct 18, 2010",
            summary:$sce.trustAsHtml("இன்றோடு ஆறு ஆண்டுகள் ஆகின்றன. எது பற்றி என்று கேட்கிறீர்களா ? சந்தன வீரப்பன் என்று அழைக்கப் பட்ட கூஸ் முனுசாமி வீரப்பன் இறந்து இன்றோடு ஆறு ஆண்டுகள் ஆகின்றன.வீரப்பனை கொன்றோம் என்று மார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இன்றோடு ஆறு ஆண்டுகள்.'),
            thumbnail:'/images/160/Koose_Muniswamy_Veerappan_con_mitra-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/18/post160.html",
            publishDate:"Oct 18, 2010",
            summary:$sce.trustAsHtml(" இன்றோடு ஆறு ஆண்டுகள் ஆகின்றன. எது பற்றி என்று கேட்கிறீர்களா ?&nbsp;&nbsp; சந்தன வீரப்பன் என்று அழைக்கப் பட்ட கூஸ் முனுசாமி வீரப்பன் இறந்து இன்றோடு ஆறு ஆண்டுகள் ஆகின்றன. வீரப்பனை கொன்றோம் என்று மார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புலிகள் இயக்கம் மீதான தடையை நீக்கக் கோரும் ஆர்ப்பாட்டத்திற்கு அனுமதி மறுப்பு.'),
            thumbnail:'/images/153/tamilsworld1943619545-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/18/post153.html",
            publishDate:"Oct 18, 2010",
            summary:$sce.trustAsHtml("விடுதலைப் புலிகள் மீதான தடையை நீக்க வலியுறுத்தி, தமிழக மக்கள் உரிமைக் கழகத்தின் சார்பாக, வரும் செவ்வாயன்று காலை, சென்னை மெமோரியல் ஹால் அருகே, ஆர்ப்பாட்டம் ஒன்று நடத்த அனுமதி கோரி, சென்னை மாநகர..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புலிகள் மீதான தடையை நீக்கு. கையெழுத்து இயக்கம்'),
            thumbnail:'/images/149/800px-tamil-tigers-flagsvg-150x150.png',
            categories:['default',''],
            href:"/default/2010/10/17/post149.html",
            publishDate:"Oct 17, 2010",
            summary:$sce.trustAsHtml(" அன்பார்ந்த தோழர்களே,புலிகள் இயக்கம் மீதான தடையை நீக்க வேண்டும் என்று வலியுறுத்தி தோழர் புகழேந்தி தங்கராஜ் எடுக்கும் முன் முயற்சியில், &nbsp;ஒரு கையெழுத்து இயக்கம் நடத்த உத்தேசிக்கப் பட்டுள்ளது. &nbsp; இது குறித்து, காவல்துறையிடம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துச்சமாக மதிக்கப் பட்ட உச்சநீதிமன்றம்.'),
            thumbnail:'/images/140/letikha_saran-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/15/post140.html",
            publishDate:"Oct 15, 2010",
            summary:$sce.trustAsHtml("சமீபத்தில், லத்திக்கா சரணை டிஜிபியான நியமித்தது தவறு என்று சென்னை உயர்நீதிமன்றம் வழங்கியுள்ள தீர்ப்பானது, உச்சநீதிமன்றத்தை தமிழக முதல்வரும், அப்போதைய உள்துறை செயலரும், தற்போதைய தலைமைச் செயலருமான மாலதியும் மதித்த லட்சணம் என்ன என்பதை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜபக்ஷே உருவத்தை விளக்குக் கம்பத்தில் தொங்கவிடுங்கள்'),
            thumbnail:'/images/127/10wimur-copy-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/13/post127.html",
            publishDate:"Oct 13, 2010",
            summary:$sce.trustAsHtml("இந்தியாவுக்கு வருகை தரும் இலங்கை அதிபர் ராஜபக்ஷேவின் உருவப் படத்தை ஒவ்வொரு விளக்குக் கம்பத்திலும் கட்டித் தொங்கவிடுங்கள் என்று, தோழர் புகழேந்தி தங்கராஜ் அனுப்பியுள்ள செய்திக் குறிப்பு இங்கே பிரசுரிக்கப் படுகிறது. சவுக்கு, தோழரின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒழித்தே தீருவோம்.'),
            thumbnail:'/images/124/2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/12/post124.html",
            publishDate:"Oct 12, 2010",
            summary:$sce.trustAsHtml("2010 டிசம்பர் 1. இதுதான் இறுதி நாள்.&nbsp;&nbsp; அதற்கு முன்பாக சவுக்குக்கு முடிவு கட்டியே தீர வேண்டும்.&nbsp;&nbsp; இதுதான், வெள்ளை மாளிகையில் நேற்று எடுக்கப் பட்ட முடிவு. இந்த வெள்ளை மாளிகையின் சிறப்புக் கூட்டத்தில் பங்கேற்றோர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிச்சை பாத்திரம் ஏந்தி வந்தேன், அன்னையே.. என் அன்னையே.'),
            thumbnail:'/images/122/1580083773_262b38544b_b-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/11/post122.html",
            publishDate:"Oct 11, 2010",
            summary:$sce.trustAsHtml("  திராவிட முன்னேற்றக் கழகத்தின் வரலாற்றிலேயே இல்லாத அளவுக்கு பலவீனமடைந்து காங்கிரசின் காலடியில் தன்னை சமர்ப்பித்துக் கொண்டுள்ளது திமுக. இந்த பலவீனத்திற்கான ஒரே காரணம், இன்று திமுகவை தன்னுடைய குடும்ப நிறுவனமாக மாற்றி வைத்துள்ள கருணாநிதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதி தேவன் மயக்கம் ?'),
            thumbnail:'/images/118/kalanidhi-dayanidhi-maran-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/06/post118.html",
            publishDate:"Oct 6, 2010",
            summary:$sce.trustAsHtml(" நீதிதேவன் மயக்கம். அறிஞர் அண்ணா எழுதிய நாடகம். அந்த நாடகத்தை அறிஞர் அண்ணா என்ன நினைத்து எழுதினாரோ.. இன்று அது உண்மையாகி விடுமோ என்று அஞ்ச வைக்கிறது.கேடி சகோதரர்கள் என்று அழைக்கப் படும், கலாநிதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரண்டு கோடி மக்களை மகிழ வைத்த தீர்ப்பு'),
            thumbnail:'/images/108/01tvko_Chattambi_Sw_172825f-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/05/post108.html",
            publishDate:"Oct 5, 2010",
            summary:$sce.trustAsHtml("இரண்டு கோடி மக்கள் என்றால் இரண்டு கோடி பெற்றோர்கள். இரண்டு கோடி பெற்றோர்களின் மனதில் பாலை வார்த்த ஒரு தீர்ப்பை இன்று சென்னை உயர்நீதிமன்றம் வழங்கியிருக்கிறது.&nbsp;செப்டம்பர் 14 அன்று, இதே சென்னை உயர்நீதிமன்றத்தின் நீதிபதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்றே சொன்னார்…'),
            thumbnail:'/images/104/04_10_2010_004_010-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/04/post104.html",
            publishDate:"Oct 4, 2010",
            summary:$sce.trustAsHtml(" அறிஞர் அண்ணா அன்றே சொன்னார், இந்தப் பதர்களைப் பற்றி, என்று கருணாநிதி தனது கடிதத்திலும், உரை வீச்சிலும் குறிப்பிடுவதைப் பார்த்திருப்பீர்கள்.இன்று தினமலர் நாளேட்டில் வந்த ஒரு செய்தியை காண்போம். பிறகு, இது பற்றி விவாதிப்போம்.&nbsp;செய்தி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உத்தரப்பிரதேச உத்தமப் புத்திரன்.'),
            thumbnail:'/images/99/sunil_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/03/post99.html",
            publishDate:"Oct 3, 2010",
            summary:$sce.trustAsHtml("சில நாட்களுக்கு முன்பு ஒரு பதிவில், சுனில் குமார் என்ற லஞ்ச ஒழிப்புத் துறையின் இணை இயக்குநராக இருக்கும் ஒரு அதிகாரி ஊழல் பேர்விழி என்றும், ஏராளமான சொத்துக்களை வாங்கிக் குவித்திருக்கிறார் என்றும் சவுக்கில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எட்டு ரூபாய்க்கு எண்பது பொய்கள்.'),
            thumbnail:'/images/79/IMG_0001343-150x111.jpg',
            categories:['default',''],
            href:"/default/2010/10/02/post79.html",
            publishDate:"Oct 2, 2010",
            summary:$sce.trustAsHtml(" சவுக்கு வாசகர்களுக்கு ஒரு விடுகதை.“எட்டு ரூபாய் கொடுத்தால் எண்பது பொய் சொல்வான். அவன்&nbsp;&nbsp; யார் ? “&nbsp;&nbsp; சவுக்கு வாசகர்கள் புத்திசாலிகள். இந்நேரம் விடை கண்டு பிடித்திருப்பீர்கள். கண்டு பிடிக்காதவர்களுக்காக.. அவன் தான் ஜுனியர்&nbsp;விகடன். சவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக மருத்துவ மனை பணியாளர்கள் திடீர் போராட்டம்.'),
            thumbnail:'/images/73/pandi_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/10/01/post73.html",
            publishDate:"Oct 1, 2010",
            summary:$sce.trustAsHtml("&nbsp;தமிழகத்தில் அரசு மருத்துவ மனையைச் சேர்ந்த ஸ்ட்ரேச்சர் தள்ளுபவர்கள் அனைவரும் போராட்ட அறிவிப்பைச் செய்திருக்கிறார்கள். இவர்களைத் தொடர்ந்து, தனியார் மருத்துவமனையைச் சேர்ந்தவர்க ளும் போராட்டத்தில் குதிக்க இருப்பதாக சவுக்குக்கு பிரத்யேக தகவல்கள் வந்துள்ளன.இந்தப் போராட்டத்துக்கான..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தாமதிக்கப் பட்டாலும் மறுக்கப் படாத நீதி ..'),
            thumbnail:'/images/68/NPVJ-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/30/post68.html",
            publishDate:"Sep 30, 2010",
            summary:$sce.trustAsHtml("நீண்ட தாமதத்திற்குப் பிறகு, மறுக்கப் படாமல் நீதி கிடைத்திருக்கிறது.&nbsp;&nbsp; ராமன் வனவாசம் சென்ற 14 ஆண்டுகள் போல 14 ஆண்டுகள் கழித்து அந்த நீதி கிடைத்திருக்கிறது.கிடைத்த இந்த நீதி, சாதாரணமானது அல்ல, மிகப் பெரிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆம் இது ராஜ ராஜனின் ஆட்சி தான்.'),
            thumbnail:'/images/63/Raraja_detail-150x150.png',
            categories:['default',''],
            href:"/default/2010/09/28/post63.html",
            publishDate:"Sep 28, 2010",
            summary:$sce.trustAsHtml("தஞ்சாவூர் பெரிய கோயிலின் 1000வது ஆண்டு விழாவில் பேசிய அமைச்சர் பொன்முடி “சோழர் காலம் பொற்காலமாக இருந்தது. தமிழகத்தில் பொற்கால ஆட்சியை முதல் அமைச்சர் கருணாநிதி நடத்தி வருகிறார். ராஜராஜ சோழனாக இருக்கும் உங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இவர்களை தெரிந்து கொள்ளுங்கள்.'),
            thumbnail:'/images/58/IMG-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/26/post58.html",
            publishDate:"Sep 26, 2010",
            summary:$sce.trustAsHtml(" இவர்கள் யார் என்பது தெரியுமா ?&nbsp;&nbsp; இவர்களை உங்களுக்குத் தெரியாமல் இருக்கலாம்.&nbsp;&nbsp; ஆனால் உங்களை இவர்களுக்குத் தெரிந்திருக்கலாம்.&nbsp;&nbsp; உங்கள் அந்தரங்கங்களும் தெரிந்திருக்கலாம்.&nbsp;&nbsp; உங்களுக்கு யார் மீது கோபம், யாருடன் நீங்கள் நெருக்கம், யாரை உங்களுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடை வீதிக்கு வந்த கத்தரிக்காய்.'),
            thumbnail:'/images/54/Shanti20Bhushan-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/23/post54.html",
            publishDate:"Sep 23, 2010",
            summary:$sce.trustAsHtml("கத்தரிக்காய் வீதிக்கு வந்தே விட்டது.&nbsp;&nbsp; அரசல் புரசலாக நீதிமன்ற வளாகங்களில் வழக்கறிஞர்களுக்குள் குசுகுசுப்பாக பேசப்பட்டுக் கொண்டிருந்த விஷயம் வெட்டவெளிக்கு வந்து விட்டது. இந்த விஷயத்தை வெட்ட வெளிச்சத்துக்கு கொண்டு வந்துள்ளவர், இந்தியாவின் மிக மூத்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யாருக்கு நன்றி சொல்ல ?'),
            thumbnail:'/images/44/cowboy_with_whip-150x150.png',
            categories:['default',''],
            href:"/default/2010/09/22/post44.html",
            publishDate:"Sep 22, 2010",
            summary:$sce.trustAsHtml("சவுக்கு இன்று 4 லட்சம் ஹிட்டுகளை அடைந்திருக்கிறது.&nbsp;&nbsp; குறுகிய காலத்தில் தொட்டுள்ள இந்த சாதனை சவுக்கின் சாதனையா ? இல்லவே இல்லை.சவுக்கு இன்று பலரால் கவனிக்கப் படவும், சிலரால் மதிக்கப் படக்கூடிய நிலையை அடைந்திருக்கிறது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('2030'),
            thumbnail:'/images/42/11-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/20/post42.html",
            publishDate:"Sep 20, 2010",
            summary:$sce.trustAsHtml(" 2030 வரை திமுக ஆட்சி தொடர்ந்து நடைபெறுகிறது என்று வைத்துக் கொள்ளுங்கள்.&nbsp;அப்போது, தமிழ் நாட்டில் மாணவர்களுக்கான பாடநூல் எப்படி இருக்கும் தெரியுமா ?இப்படித்தான். தமிழ்  முதலில் கடவுள் வாழ்த்துமொழி வளர்த்த ஆசாடபூதியே போற்றிதிருக்குவளை தீய சக்தியே போற்றிமஞ்சள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆவின் நெய்யும், ராமானுஜத்தின் பொய்யும்'),
            thumbnail:'/images/37/1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/19/post37.html",
            publishDate:"Sep 19, 2010",
            summary:$sce.trustAsHtml("ஆவின் என்ற பிரபலமாக அழைக்கப் படும் தமிழ்நாடு கூட்டுறவு பால் உற்பத்தியாளர்கள் சங்கத்தின் தலைமை அலுவலகம், மாதவரம் பால்பண்ணையில் இருக்கிறது.&nbsp;குஜராத்தில் ஆனந் போல லாபம் ஈட்டக் கூடிய வகையில் வளர்ந்திருக்க வேண்டிய ஆவின், நிர்வாகச்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரு தலித்துகள்.'),
            thumbnail:'/images/33/sunil_2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/17/post33.html",
            publishDate:"Sep 17, 2010",
            summary:$sce.trustAsHtml("இரு தலித்துகள்.&nbsp;இந்தப் பதிவு இரண்டு தலித்துகளைப் பற்றியது.&nbsp;&nbsp; இரண்டு பேருமே உயர் அதிகாரிகள்.&nbsp;&nbsp;&nbsp;ஒருவர் 1990ல் பணிக்குச் சேர்ந்தவர். மற்றொருவர் 1988ல் பணிக்குச் சேர்ந்தவர்.&nbsp;ஒருவர் தமிழகத்தைச் சேர்ந்தவர். மற்றவர் உத்தரப் பிரதேசத்தைச் சேர்ந்தவர்.&nbsp;ஒருவர் நேர்மையின் பிறப்பிடம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மக்கள் விரோத நீதிமன்றங்கள்.'),
            thumbnail:'/images/29/madras-high-court-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/15/post29.html",
            publishDate:"Sep 15, 2010",
            summary:$sce.trustAsHtml(" &nbsp;The American people must be made the masters and not the servants of even the highest court in the land.Theodore Roosevelt&nbsp;அமெரிக்க மக்கள் இந்நாட்டின் உச்ச பட்ச..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பதவி படுத்தும் பாடு… …. ….'),
            thumbnail:'/images/25/IN21_DGP_8951f-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/13/post25.html",
            publishDate:"Sep 13, 2010",
            summary:$sce.trustAsHtml("தமிழக காவல்துறையில் பதவி படுத்தும் பாடு இருக்கிறதே … அப்பப்பா. சொல்லி மாளாது.ஐபிஎஸ் அதிகாரிகள் என்றால் குறைந்த பட்சமாக சில விஷயங்கள் தவறாமல் கிடைக்கும். அவை ஒரு அலுவலகம். ஓட்டுனரோடு கூடிய வாகனம்.&nbsp;&nbsp; குடியிருப்பு.&nbsp;&nbsp;..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யார் அந்த 5 சதவிகிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/12/post16.html",
            publishDate:"Sep 12, 2010",
            summary:$sce.trustAsHtml(" கடந்த வெள்ளிக் கிழமை டைம்ஸ் ஆப் இந்தியா நாளேட்டில் ஒரு செய்தி.&nbsp;&nbsp; தமிழகத்தில் உள்ள 95 சதவிகித ஐபிஎஸ் அதிகாரிகள் தங்கள் சொத்துக் கணக்கை தாங்களாகவே முன் வந்து உள்துறை அமைச்சக இணைய தளத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மத்திய குற்றப் பிரிவு'),
            thumbnail:'/images/15/a-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/11/post15.html",
            publishDate:"Sep 11, 2010",
            summary:$sce.trustAsHtml("டைம்ஸ் ஆப் இந்தியா நாளேட்டில் கடந்த வாரம் இது தொடர்பான ஒரு செய்தி வெளியாகியிருந்தது. அச்செய்தியில், மத்தியக் குற்றப் பிரிவில் ஊழல் அதிகமாகி விட்டதாகவும் அதனால் கண்ணாயிரத்தின் கட்டுப் பாட்டில் இருந்து கூடுதல் காவல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பத்திரிக்கையாளரை தாக்கிய உதவி ஆணையர் மாற்றப் பட்டார்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/11/post10.html",
            publishDate:"Sep 11, 2010",
            summary:$sce.trustAsHtml("இன்று காலை பள்ளிக்கரணை அருகே ஒரு அடையாளம் தெரியாத பெண்ணின் பிணம் பாதி எரிந்த நிலையில் காணப்படுவதாக வந்த தகவலையடுத்து உடனடியாக செய்தி சேகரிப்பதற்காக காலை 11.30 மணியளவில் அந்த இடத்திற்க செல்கிறார் ஜெய்சங்கர்.&nbsp;ஜெய்சங்கர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜனநாயகத்தைக் காக்க வாருங்கள் பதிவர்களே !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/10/post9.html",
            publishDate:"Sep 10, 2010",
            summary:$sce.trustAsHtml("ஜனநாயகத்தைக் காப்பதற்கும் பதிவுலகத்துக்கும் என்ன சம்பந்தம் என்று நினைக்கிறீர்களா ? இருக்கிறது.தமிழ்நாட்டில் இன்று நான்காவது தூண் என்று அழைக்கப் படும் பத்திரிக்கை உலகம் எந்த நிலையில் இருக்கிறது என்று தெரியுமா ? சவுக்குக்கு கிடைத்துள்ள..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இளங்கோவடிகளும், எல்காட் நிறுவனமும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/07/post8.html",
            publishDate:"Sep 7, 2010",
            summary:$sce.trustAsHtml("தலைப்பை பார்த்து விட்டு, இந்தப் பதிவு ஏதோ சிலப்பதிகாரம் தொடர்பானது என்று நினைத்துக் கொள்ளாதீர்கள். இந்தப் பதிவு, சிலப்பதிகாரம் பற்றியது அல்ல. எல்காட் நிறுவனத்தில் உள்ள இளங்கோவன் என்ற ஒரு அதிகாரியின் சித்து விளையாட்டைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இளங்கோவடிகளும், எல்காட் நிறுவனமும்.'),
            thumbnail:'/images/7444/IMG1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/07/post7444.html",
            publishDate:"Sep 7, 2010",
            summary:$sce.trustAsHtml("தலைப்பை பார்த்து விட்டு, இந்தப் பதிவு ஏதோ சிலப்பதிகாரம் தொடர்பானது என்று நினைத்துக் கொள்ளாதீர்கள். இந்தப் பதிவு, சிலப்பதிகாரம் பற்றியது அல்ல. எல்காட் நிறுவனத்தில் உள்ள இளங்கோவன் என்ற ஒரு அதிகாரியின் சித்து விளையாட்டைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இளங்கோவடிகளும், எல்காட் நிறுவனமும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/07/post7020.html",
            publishDate:"Sep 7, 2010",
            summary:$sce.trustAsHtml("தலைப்பை பார்த்து விட்டு, இந்தப் பதிவு ஏதோ சிலப்பதிகாரம் தொடர்பானது என்று நினைத்துக் கொள்ளாதீர்கள். இந்தப் பதிவு, சிலப்பதிகாரம் பற்றியது அல்ல. எல்காட் நிறுவனத்தில் உள்ள இளங்கோவன் என்ற ஒரு அதிகாரியின் சித்து விளையாட்டைப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துவைக்காத சாக்ஸும், கருணாநிதியும்.'),
            thumbnail:'/images/7445/Sun_TV_Pictures_COO_Hansraj_Saxena1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/06/post7445.html",
            publishDate:"Sep 6, 2010",
            summary:$sce.trustAsHtml("இந்தத் தலைப்பு, பரபரப்புக்காகவோ, ஆர்வத்தை தூண்டுவதற்காகவோ வைக்கப் பட்டது அல்ல. துவைக்காத சாக்ஸ் எடுக்கும் நாற்றத்தை விட, மோசமான துர்நாற்றத்தை உருவாக்கக் கூடிய ஒரு சாக்ஸை கருணாநிதி விரும்பி அருகில் வைத்துக் கொண்டிருப்பது எப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துவைக்காத சாக்ஸும், கருணாநிதியும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/06/post7021.html",
            publishDate:"Sep 6, 2010",
            summary:$sce.trustAsHtml("இந்தத் தலைப்பு, பரபரப்புக்காகவோ, ஆர்வத்தை தூண்டுவதற்காகவோ வைக்கப் பட்டது அல்ல. துவைக்காத சாக்ஸ் எடுக்கும் நாற்றத்தை விட, மோசமான துர்நாற்றத்தை உருவாக்கக் கூடிய ஒரு சாக்ஸை கருணாநிதி விரும்பி அருகில் வைத்துக் கொண்டிருப்பது எப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('துவைக்காத சாக்ஸும், கருணாநிதியும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/06/post7.html",
            publishDate:"Sep 6, 2010",
            summary:$sce.trustAsHtml("இந்தத் தலைப்பு, பரபரப்புக்காகவோ, ஆர்வத்தை தூண்டுவதற்காகவோ வைக்கப் பட்டது அல்ல. துவைக்காத சாக்ஸ் எடுக்கும் நாற்றத்தை விட, மோசமான துர்நாற்றத்தை உருவாக்கக் கூடிய ஒரு சாக்ஸை கருணாநிதி விரும்பி அருகில் வைத்துக் கொண்டிருப்பது எப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடுத்து என்ன செய்வது ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/05/post7446.html",
            publishDate:"Sep 5, 2010",
            summary:$sce.trustAsHtml("சவுக்குக்கு எழுதிய பின்னூட்டத்தில் ஒரு அன்பர், “சவுக்கிடம் ஒரு கேள்வி,, சவுக்கு உங்களைப்போல் ஒன்றிரண்டு இணையத்தளங்களையும், பத்திரிகைகளையும் இன்று நேற்று அல்ல பலவருடங்களாக பார்க்கிறேன், இந்த அரசியல்வாதிகள், மற்றும் அதிகாரிகளின் கதை தொடர்ந்து அப்படியேதான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடுத்து என்ன செய்வது ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/05/post7022.html",
            publishDate:"Sep 5, 2010",
            summary:$sce.trustAsHtml("சவுக்குக்கு எழுதிய பின்னூட்டத்தில் ஒரு அன்பர், “சவுக்கிடம் ஒரு கேள்வி,, சவுக்கு உங்களைப்போல் ஒன்றிரண்டு இணையத்தளங்களையும், பத்திரிகைகளையும் இன்று நேற்று அல்ல பலவருடங்களாக பார்க்கிறேன், இந்த அரசியல்வாதிகள், மற்றும் அதிகாரிகளின் கதை தொடர்ந்து அப்படியேதான்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அடுத்து என்ன செய்வது ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/05/post6.html",
            publishDate:"Sep 5, 2010",
            summary:$sce.trustAsHtml("சவுக்குக்கு எழுதிய பின்னூட்டத்தில் ஒரு அன்பர்,&nbsp;“சவுக்கிடம் ஒரு கேள்வி,, சவுக்கு உங்களைப்போல் ஒன்றிரண்டு இணையத்தளங்களையும், பத்திரிகைகளையும் இன்று நேற்று அல்ல பலவருடங்களாக பார்க்கிறேன், இந்த அரசியல்வாதிகள், மற்றும் அதிகாரிகளின் கதை தொடர்ந்து அப்படியேதான் தொடர்கதையாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரட்சிக்கப் பட்ட ஜெகதரட்சகன்.'),
            thumbnail:'/images/7447/jagathratchagan_607123374-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/04/post7447.html",
            publishDate:"Sep 4, 2010",
            summary:$sce.trustAsHtml("ஜெகதரட்சகன். இந்தப் பெயர் கடந்த பாராளுமன்றத் தேர்தலுக்கு முன்பு வரை, வன்னியர் சங்க தலைவர் என்ற வகையில், அங்கங்கே சுவர் விளம்பரங்களில் மட்டும் தென்படும். வன்னியர் சமுதாயத்தில் இவருக்கு பெரிய அளவில் ஆதரவு ஒன்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரட்சிக்கப் பட்ட ஜெகதரட்சகன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/04/post7023.html",
            publishDate:"Sep 4, 2010",
            summary:$sce.trustAsHtml("ஜெகதரட்சகன். இந்தப் பெயர் கடந்த பாராளுமன்றத் தேர்தலுக்கு முன்பு வரை, வன்னியர் சங்க தலைவர் என்ற வகையில், அங்கங்கே சுவர் விளம்பரங்களில் மட்டும் தென்படும். வன்னியர் சமுதாயத்தில் இவருக்கு பெரிய அளவில் ஆதரவு ஒன்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரட்சிக்கப் பட்ட ஜெகதரட்சகன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/04/post5.html",
            publishDate:"Sep 4, 2010",
            summary:$sce.trustAsHtml("ஜெகதரட்சகன். இந்தப் பெயர் கடந்த பாராளுமன்றத் தேர்தலுக்கு முன்பு வரை, வன்னியர் சங்க தலைவர் என்ற வகையில், அங்கங்கே சுவர் விளம்பரங்களில் மட்டும் தென்படும். வன்னியர் சமுதாயத்தில் இவருக்கு பெரிய அளவில் ஆதரவு ஒன்றும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜோசப் ஃபெலிக்ஸுக்கு ஒரு கடிதம்'),
            thumbnail:'/images/7448/Joseph-Felix-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/03/post7448.html",
            publishDate:"Sep 3, 2010",
            summary:$sce.trustAsHtml("சவுக்கு இன்று மூன்று லட்சம் ஹிட்டுகளைத் தொட்டுள்ளது. சவுக்கை தொடர்ந்து படித்து வரும் வாசகர்களின் அன்புக்கும், ஆதரவுக்கும், சவுக்கு என்றென்றும் நன்றிக் கடன் பட்டுள்ளது. திட்டினாலும், அநானியாக வந்து அவதூறு பேசினாலும் அவர்களும் சவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜோசப் ஃபெலிக்ஸுக்கு ஒரு கடிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/03/post7024.html",
            publishDate:"Sep 3, 2010",
            summary:$sce.trustAsHtml("சவுக்கு இன்று மூன்று லட்சம் ஹிட்டுகளைத் தொட்டுள்ளது. சவுக்கை தொடர்ந்து படித்து வரும் வாசகர்களின் அன்புக்கும், ஆதரவுக்கும், சவுக்கு என்றென்றும் நன்றிக் கடன் பட்டுள்ளது. திட்டினாலும், அநானியாக வந்து அவதூறு பேசினாலும் அவர்களும் சவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜோசப் ஃபெலிக்ஸுக்கு ஒரு கடிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/03/post4.html",
            publishDate:"Sep 3, 2010",
            summary:$sce.trustAsHtml("சவுக்கு இன்று மூன்று லட்சம் ஹிட்டுகளைத் தொட்டுள்ளது. சவுக்கை தொடர்ந்து படித்து வரும் வாசகர்களின் அன்புக்கும், ஆதரவுக்கும், சவுக்கு என்றென்றும் நன்றிக் கடன் பட்டுள்ளது. திட்டினாலும், அநானியாக வந்து அவதூறு பேசினாலும் அவர்களும் சவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கிளம்பிற்றுக் காண் குறுநரிகளின் கூட்டம்'),
            thumbnail:'/images/7450/cartoon-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/09/01/post7450.html",
            publishDate:"Sep 1, 2010",
            summary:$sce.trustAsHtml("தினமணியில் ஒரு தவ்ளூண்டு கார்ட்டூன் வந்ததுக்கே கருணாநிதி குய்யோ முறையோன்னு அலறி, கூப்பாடு போட்டு, என் பொண்டாட்டி என்ன மலடியான்னு கேட்டு, சினிமாக்காரங்களுக்கும் எனக்கும் இருக்கற ஒறவ யாராலயும் பிரிக்க முடியாதுன்னு பொலம்பனாரு. இந்தியா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கிளம்பிற்றுக் காண் குறுநரிகளின் கூட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/01/post7026.html",
            publishDate:"Sep 1, 2010",
            summary:$sce.trustAsHtml("தினமணியில் ஒரு தவ்ளூண்டு கார்ட்டூன் வந்ததுக்கே கருணாநிதி குய்யோ முறையோன்னு அலறி, கூப்பாடு போட்டு, என் பொண்டாட்டி என்ன மலடியான்னு கேட்டு, சினிமாக்காரங்களுக்கும் எனக்கும் இருக்கற ஒறவ யாராலயும் பிரிக்க முடியாதுன்னு பொலம்பனாரு. இந்தியா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கிளம்பிற்றுக் காண் குறுநரிகளின் கூட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/09/01/post3.html",
            publishDate:"Sep 1, 2010",
            summary:$sce.trustAsHtml("  தினமணியில் ஒரு தவ்ளூண்டு கார்ட்டூன் வந்ததுக்கே கருணாநிதி குய்யோ முறையோன்னு அலறி, கூப்பாடு போட்டு, என் பொண்டாட்டி என்ன மலடியான்னு கேட்டு, சினிமாக்காரங்களுக்கும் எனக்கும் இருக்கற ஒறவ யாராலயும் பிரிக்க முடியாதுன்னு பொலம்பனாரு.&nbsp;இந்தியா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆண்டியும் அரசனும்…… … ….'),
            thumbnail:'/images/7452/Kamaraj-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/30/post7452.html",
            publishDate:"Aug 30, 2010",
            summary:$sce.trustAsHtml("என்னடா சவுக்கு ஏதோ பழங்காலத்துக் கதை சொல்லப் போகுதோன்னு ஆச்சர்யப் பட வேண்டம். சவுக்கு சொல்லப் போகும், ஆண்டியும், அரசனும், சமகாலத்தில் உள்ளவர்கள் தான். அரசர், சவுக்கு வாசகர்கள் நன்கு அறிந்தவர். ஆண்டியைப் பற்றி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஆண்டியும் அரசனும்…… … ….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/30/post7027.html",
            publishDate:"Aug 30, 2010",
            summary:$sce.trustAsHtml("என்னடா சவுக்கு ஏதோ பழங்காலத்துக் கதை சொல்லப் போகுதோன்னு ஆச்சர்யப் பட வேண்டம். சவுக்கு சொல்லப் போகும், ஆண்டியும், அரசனும், சமகாலத்தில் உள்ளவர்கள் தான். அரசர், சவுக்கு வாசகர்கள் நன்கு அறிந்தவர். ஆண்டியைப் பற்றி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதியோர் இல்லமாகும், மாநில தகவல் ஆணையம்.'),
            thumbnail:'/images/7453/radhakrishna1n-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/28/post7453.html",
            publishDate:"Aug 28, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாடு தலைமைத் தகவல் ஆணையராக தற்போதைய தமிழக அரசின் தலைமைச் செயலாளர் கே.எஸ்.ஸ்ரீபதியை நியமிக்கப் படப் போவதாக எழுந்த செய்திகளும், அதையொட்டி எழுந்த சர்ச்சைகளும், எதிர்க்கட்சித் தலைவர் செல்வி ஜெயலலிதா இக்கூட்டம் தொடர்பான விபரங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முதியோர் இல்லமாகும், மாநில தகவல் ஆணையம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/28/post7029.html",
            publishDate:"Aug 28, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாடு தலைமைத் தகவல் ஆணையராக தற்போதைய தமிழக அரசின் தலைமைச் செயலாளர் கே.எஸ்.ஸ்ரீபதியை நியமிக்கப் படப் போவதாக எழுந்த செய்திகளும், அதையொட்டி எழுந்த சர்ச்சைகளும், எதிர்க்கட்சித் தலைவர் செல்வி ஜெயலலிதா இக்கூட்டம் தொடர்பான விபரங்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிதானம் தவறி வரும் முதல்வர் கருணாநிதி'),
            thumbnail:'/images/7454/dmk6-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/25/post7454.html",
            publishDate:"Aug 25, 2010",
            summary:$sce.trustAsHtml("இந்தியாவிலேயே மிகச் சிறந்த சாணக்கியர் என்று அனைவராலும் ஏற்றுக் கொள்ளப் பட்டவர் கருணாநிதி. இவரின் சாணக்கியத்தனத்துக்கு முன்னால், எவரும் நிற்க முடியாது. கருணாநிதி கண்ணசைத்தால் ஒரு பொருள், திரும்பினால் ஒரு பொருள் என்று இவரின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிதானம் தவறி வரும் முதல்வர் கருணாநிதி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/25/post7030.html",
            publishDate:"Aug 25, 2010",
            summary:$sce.trustAsHtml("இந்தியாவிலேயே மிகச் சிறந்த சாணக்கியர் என்று அனைவராலும் ஏற்றுக் கொள்ளப் பட்டவர் கருணாநிதி. இவரின் சாணக்கியத்தனத்துக்கு முன்னால், எவரும் நிற்க முடியாது. கருணாநிதி கண்ணசைத்தால் ஒரு பொருள், திரும்பினால் ஒரு பொருள் என்று இவரின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கமிஷனர் கண்ணாயிரம்.'),
            thumbnail:'/images/7455/03nxg_p6_7_ips_gllsb08c103nxg_rajendran1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/24/post7455.html",
            publishDate:"Aug 24, 2010",
            summary:$sce.trustAsHtml("கருந்தேள் கண்ணாயிரம், கைதி கண்ணாயிரம் கேள்விப் பட்டிருக்கிறோம். அது என்ன புதுசா ? கமிஷனர் கண்ணாயிரம் என்று கேட்கிறீர்களா ?நம்ப சென்னை மாநகர கமிஷனர் ராஜேந்திரன்தான் அந்த கண்ணாயிரம். இவர் பெயர் ஏன் கண்ணாயிரம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கமிஷனர் கண்ணாயிரம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/24/post7031.html",
            publishDate:"Aug 24, 2010",
            summary:$sce.trustAsHtml("கருந்தேள் கண்ணாயிரம், கைதி கண்ணாயிரம் கேள்விப் பட்டிருக்கிறோம். அது என்ன புதுசா ? கமிஷனர் கண்ணாயிரம் என்று கேட்கிறீர்களா ?நம்ப சென்னை மாநகர கமிஷனர் ராஜேந்திரன்தான் அந்த கண்ணாயிரம். இவர் பெயர் ஏன் கண்ணாயிரம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கை முடக்கு.  அடுத்த திட்டம்.'),
            thumbnail:'/images/7456/Jaffer7878-1--150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/23/post7456.html",
            publishDate:"Aug 23, 2010",
            summary:$sce.trustAsHtml("சவுக்கை முடக்க அடுத்த கட்ட திட்டம் தயாராகி விட்டது என நம்பகமான தகவல்கள் வந்துள்ளன. கடந்த 10 நாட்களாகவே, சவுக்கின் கணினியை முடக்க பல்வேறு திட்டங்கள் உளவுத் துறையால் அரங்கேற்றப் பட்டு வருகின்றன.முதலில் அவர்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கை முடக்கு.  அடுத்த திட்டம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/23/post7032.html",
            publishDate:"Aug 23, 2010",
            summary:$sce.trustAsHtml("சவுக்கை முடக்க அடுத்த கட்ட திட்டம் தயாராகி விட்டது என நம்பகமான தகவல்கள் வந்துள்ளன. கடந்த 10 நாட்களாகவே, சவுக்கின் கணினியை முடக்க பல்வேறு திட்டங்கள் உளவுத் துறையால் அரங்கேற்றப் பட்டு வருகின்றன.முதலில் அவர்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொந்த வேலைக்கும் ரகசிய நிதியா ?'),
            thumbnail:'/images/7458/DSC05456-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/21/post7458.html",
            publishDate:"Aug 21, 2010",
            summary:$sce.trustAsHtml("ஜாபர் சார். நீங்க திருந்தவே மாட்டீங்களா ? எத்தனை வாட்டி சார் உங்களுக்கு சொல்றது ? உங்க சொந்த வேலைக்கு திண்டுக்கல் போறதுக்கு கூட ரகசிய நிதியிலேர்ந்தா டிக்கட் வாங்குவீங்க ?மதுரையிலேயோ, திண்டுக்கலிலோ அரசுப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சட்டமும் ஒழுங்கீனமும். பாகம் 2'),
            thumbnail:'/images/7457/radhakrishna1n1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/21/post7457.html",
            publishDate:"Aug 21, 2010",
            summary:$sce.trustAsHtml("கடைசியாக எந்த இடத்தில் விட்டோம் ? ராதாகிருஷ்ணன் லஞ்ச ஒழிப்புத் துறைக்கு மாறுதல் செய்த இடத்தில் விட்டோம் அல்லவா ?ராதாகிருஷ்ணன் லஞ்ச ஒழிப்புத் துறையின் சிறப்பு புலனாய்வுக் குழு 1ன் தலைவராக நியமிக்கப் படுகிறார்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சொந்த வேலைக்கும் ரகசிய நிதியா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/21/post7034.html",
            publishDate:"Aug 21, 2010",
            summary:$sce.trustAsHtml("ஜாபர் சார். நீங்க திருந்தவே மாட்டீங்களா ? எத்தனை வாட்டி சார் உங்களுக்கு சொல்றது ? உங்க சொந்த வேலைக்கு திண்டுக்கல் போறதுக்கு கூட ரகசிய நிதியிலேர்ந்தா டிக்கட் வாங்குவீங்க ?மதுரையிலேயோ, திண்டுக்கலிலோ அரசுப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சட்டமும் ஒழுங்கீனமும். பாகம் 2'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/21/post7033.html",
            publishDate:"Aug 21, 2010",
            summary:$sce.trustAsHtml("கடைசியாக எந்த இடத்தில் விட்டோம் ? ராதாகிருஷ்ணன் லஞ்ச ஒழிப்புத் துறைக்கு மாறுதல் செய்த இடத்தில் விட்டோம் அல்லவா ?ராதாகிருஷ்ணன் லஞ்ச ஒழிப்புத் துறையின் சிறப்பு புலனாய்வுக் குழு 1ன் தலைவராக நியமிக்கப் படுகிறார்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சட்டம் மற்றும் ஒழுங்கீனம்.'),
            thumbnail:'/images/7460/radha1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/20/post7460.html",
            publishDate:"Aug 20, 2010",
            summary:$sce.trustAsHtml("இது என்ன சட்டம் மற்றும் ஒழுங்கீனம் என்று பார்க்கிறீர்களா ? சட்டம் மற்றும் ஒழுங்கு கூடுதல் டிஜிபியின் ஒழுங்கீனத்தைப் பற்றி எழுதும் போது இந்த தலைப்பு பொருத்தம் தானே ?சட்டம் ஒழுங்கு கூடுதல் டிஜிபி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாசத் தலைவனுக்கு பாராட்டு விழா.'),
            thumbnail:'/images/7459/CM150210_113-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/20/post7459.html",
            publishDate:"Aug 20, 2010",
            summary:$sce.trustAsHtml("ஏறக்குறைய அனைத்து தலைப்புகளிலும் கருணாநிதிக்கு பாராட்டு விழா நடத்தி முடித்து விட்டதால் இப்பொழுது கருணாநிதியை எதற்காக பாராட்டுவது என்று “கருணாநிதியை பாராட்டும் துறையின்“ அமைச்சர் ஜெகதரட்சகனும், துணை அமைச்சர் துரை முருகனும் உட்கார்ந்து யோசிக்கின்றனர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சட்டம் மற்றும் ஒழுங்கீனம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/20/post7036.html",
            publishDate:"Aug 20, 2010",
            summary:$sce.trustAsHtml("இது என்ன சட்டம் மற்றும் ஒழுங்கீனம் என்று பார்க்கிறீர்களா ? சட்டம் மற்றும் ஒழுங்கு கூடுதல் டிஜிபியின் ஒழுங்கீனத்தைப் பற்றி எழுதும் போது இந்த தலைப்பு பொருத்தம் தானே ?சட்டம் ஒழுங்கு கூடுதல் டிஜிபி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாசத் தலைவனுக்கு பாராட்டு விழா.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/20/post7035.html",
            publishDate:"Aug 20, 2010",
            summary:$sce.trustAsHtml("ஏறக்குறைய அனைத்து தலைப்புகளிலும் கருணாநிதிக்கு பாராட்டு விழா நடத்தி முடித்து விட்டதால் இப்பொழுது கருணாநிதியை எதற்காக பாராட்டுவது என்று “கருணாநிதியை பாராட்டும் துறையின்“ அமைச்சர் ஜெகதரட்சகனும், துணை அமைச்சர் துரை முருகனும் உட்கார்ந்து யோசிக்கின்றனர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காக்கி உடையில் காட்டுமிராண்டிகள்.'),
            thumbnail:'/images/7461/IMG_00116-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/19/post7461.html",
            publishDate:"Aug 19, 2010",
            summary:$sce.trustAsHtml("மீண்டும் காக்கி உடை தனது கோர முகத்தை காட்டியிருக்கிறது. கருணாநிதி ஆட்சியாக இருந்தாலும் சரி. ஜெயலலிதா ஆட்சியாக இருந்தாலும் சரி. காவல் துறை எப்போதும் காட்டுமிராண்டித் துறையாகவே இருந்து வந்திருக்கிறது. பிடிக்காதவர்கள் மீது பொய்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காக்கி உடையில் காட்டுமிராண்டிகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/19/post7037.html",
            publishDate:"Aug 19, 2010",
            summary:$sce.trustAsHtml("மீண்டும் காக்கி உடை தனது கோர முகத்தை காட்டியிருக்கிறது. கருணாநிதி ஆட்சியாக இருந்தாலும் சரி. ஜெயலலிதா ஆட்சியாக இருந்தாலும் சரி. காவல் துறை எப்போதும் காட்டுமிராண்டித் துறையாகவே இருந்து வந்திருக்கிறது. பிடிக்காதவர்கள் மீது பொய்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைமைச் செயலகத்தில் ஏலம் போடப்படும் அரசுப் பணியிடங்கள்.'),
            thumbnail:'/images/7463/secretariat-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/17/post7463.html",
            publishDate:"Aug 17, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாடு அரசின் மற்ற துறைகள் எங்கும் இல்லாத வண்ணம், தமிழக சட்டப் பேரவைத் துறையில் மட்டும் அலுவலக உதவியாளர்கள் எனப்படும் ஓ.ஏ பணியிடங்களுக்கான நியமனம் எந்த விதிமுறைக்கும் உட்படாமல் அதிகார மையங்களில் உள்ளவர்களின் மன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதிக்கு சின்ன கருணாநிதி கடிதம்.'),
            thumbnail:'/images/7462/Thiruma-new1-5B1-5D-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/17/post7462.html",
            publishDate:"Aug 17, 2010",
            summary:$sce.trustAsHtml("அது என்ன சின்னக் கருணாநிதி என்று பார்க்கிறீர்களா ? கடிதத்தை படித்தீர்கள் என்றால் விபரமாகப் புரியும். கருணாநிதிக்கு நிகராக, சின்னக் கருணாநிதி என்ற பட்டத்தை பெற தகுதியான ஒரே நபர் என்று சவுக்கால் தேர்ந்தெடுக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைமைச் செயலகத்தில் ஏலம் போடப்படும் அரசுப் பணியிடங்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/17/post7039.html",
            publishDate:"Aug 17, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாடு அரசின் மற்ற துறைகள் எங்கும் இல்லாத வண்ணம், தமிழக சட்டப் பேரவைத் துறையில் மட்டும் அலுவலக உதவியாளர்கள் எனப்படும் ஓ.ஏ பணியிடங்களுக்கான நியமனம் எந்த விதிமுறைக்கும் உட்படாமல் அதிகார மையங்களில் உள்ளவர்களின் மன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதிக்கு சின்ன கருணாநிதி கடிதம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/17/post7038.html",
            publishDate:"Aug 17, 2010",
            summary:$sce.trustAsHtml("அது என்ன சின்னக் கருணாநிதி என்று பார்க்கிறீர்களா ? கடிதத்தை படித்தீர்கள் என்றால் விபரமாகப் புரியும். கருணாநிதிக்கு நிகராக, சின்னக் கருணாநிதி என்ற பட்டத்தை பெற தகுதியான ஒரே நபர் என்று சவுக்கால் தேர்ந்தெடுக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எந்திரன் திரை விமர்சனம்.'),
            thumbnail:'/images/7464/11-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/15/post7464.html",
            publishDate:"Aug 15, 2010",
            summary:$sce.trustAsHtml("திருக்குவளை பிக்சர்ஸ் தயாரிப்பில் ஆக்டோபஸ் குடும்பத்தின் மேற்பார்வையில் வெளிவந்திருக்கும் படம்தான் எந்திரன்.மிகுந்த பொருட்செலவில் பிரம்மாண்டமாக எடுக்கப் பட்டிருக்கிறது என்ற ஏகப்பட்ட எதிர்ப்பார்ப்பை படம் கிளப்பியிருக்கிறது. ஆனால் தியேட்டருக்கு சென்றவர்களுக்கு ஏமாற்றமே மிஞ்சுகிறது. திருட்டு விசிடியில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எந்திரன் திரை விமர்சனம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/15/post7040.html",
            publishDate:"Aug 15, 2010",
            summary:$sce.trustAsHtml("திருக்குவளை பிக்சர்ஸ் தயாரிப்பில் ஆக்டோபஸ் குடும்பத்தின் மேற்பார்வையில் வெளிவந்திருக்கும் படம்தான் எந்திரன்.மிகுந்த பொருட்செலவில் பிரம்மாண்டமாக எடுக்கப் பட்டிருக்கிறது என்ற ஏகப்பட்ட எதிர்ப்பார்ப்பை படம் கிளப்பியிருக்கிறது. ஆனால் தியேட்டருக்கு சென்றவர்களுக்கு ஏமாற்றமே மிஞ்சுகிறது. திருட்டு விசிடியில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('களத்துக்கு வந்த ஜாபர்.   வரவேற்கும் கழகம்.'),
            thumbnail:'/images/7465/23-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/14/post7465.html",
            publishDate:"Aug 14, 2010",
            summary:$sce.trustAsHtml("இத்தனை நாட்களாக நிழல் யுத்தம் நடத்திக் கொண்டிருந்த ஜாபர் சேட், களத்துக்கு வந்து விட்டார். களத்துக்கு வந்த ஜாபரை, சவுக்கும், தமிழக மக்கள் உரிமைக் கழகமும் வருக வருகவென வரவேற்கிறது. நிழல் யுத்தம் நடத்துவது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('களத்துக்கு வந்த ஜாபர்.   வரவேற்கும் கழகம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/14/post7041.html",
            publishDate:"Aug 14, 2010",
            summary:$sce.trustAsHtml("இத்தனை நாட்களாக நிழல் யுத்தம் நடத்திக் கொண்டிருந்த ஜாபர் சேட், களத்துக்கு வந்து விட்டார். களத்துக்கு வந்த ஜாபரை, சவுக்கும், தமிழக மக்கள் உரிமைக் கழகமும் வருக வருகவென வரவேற்கிறது. நிழல் யுத்தம் நடத்துவது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தர்மபுரம் ஆதீனம் மீது பரபரப்பு பாலியல் புகார்.'),
            thumbnail:'/images/7467/IMG_8640-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/13/post7467.html",
            publishDate:"Aug 13, 2010",
            summary:$sce.trustAsHtml("நாகப்பட்டினம் மயிலாடுதுறையில் உள்ள தர்மபுரம் ஆதினம் மடத்தின் மீது பரபரப்பு பாலியல் குற்றச் சாட்டு எழுந்துள்ளது. இந்த சம்பவம் குறித்து காவல்துறை உரிய விசாரணை நடத்தினால் பல திடுக்கிடும் உண்மைகள் அம்பலமாகும் என்று தெரிகிறது.சென்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தர்மபுரம் ஆதீனம் மீது பரபரப்பு பாலியல் புகார்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/13/post7043.html",
            publishDate:"Aug 13, 2010",
            summary:$sce.trustAsHtml("நாகப்பட்டினம் மயிலாடுதுறையில் உள்ள தர்மபுரம் ஆதினம் மடத்தின் மீது பரபரப்பு பாலியல் குற்றச் சாட்டு எழுந்துள்ளது. இந்த சம்பவம் குறித்து காவல்துறை உரிய விசாரணை நடத்தினால் பல திடுக்கிடும் உண்மைகள் அம்பலமாகும் என்று தெரிகிறது.சென்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடன்பிறப்பே,'),
            thumbnail:'/images/7468/final_on_11-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/12/post7468.html",
            publishDate:"Aug 12, 2010",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,நெடுநாட்களாக உனக்கு கடிதம் எழுதாமல் இருந்தேன். ஆனால் எழுதியே தீர வேண்டிய சூழலை சில குடிலன்கள் உருவாக்கியுள்ளதால், உன்னை இக்கடிதம் வாயிலாக சந்திப்பதைத் தவிர வேறு என்ன வழி ?உலகில் வேறு எங்கும் இல்லாத..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடன்பிறப்பே,'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/12/post7044.html",
            publishDate:"Aug 12, 2010",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,நெடுநாட்களாக உனக்கு கடிதம் எழுதாமல் இருந்தேன். ஆனால் எழுதியே தீர வேண்டிய சூழலை சில குடிலன்கள் உருவாக்கியுள்ளதால், உன்னை இக்கடிதம் வாயிலாக சந்திப்பதைத் தவிர வேறு என்ன வழி ?உலகில் வேறு எங்கும் இல்லாத..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மேற்கு வங்கமும் உமாசங்கரும்.'),
            thumbnail:'/images/7469/11_28_2007_15_12_15_inv-2520meet-2520blore-25202-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/10/post7469.html",
            publishDate:"Aug 10, 2010",
            summary:$sce.trustAsHtml("தமிழக முதல்வர் கருணாநிதிக்கு எப்போதுமே ஒரு பழக்கம் உண்டு. தமிழகத்தின் எதிர்க்கட்சித் தலைவர்கள் யாராவது எதையாவது ஒன்றைச் சுட்டிக்காட்டி அறிக்கை ஏதாவது வெளியிட்டால், உடனடியாக மேற்குவங்கத்தைப் பாருங்கள், பீகாரைப் பாருங்கள், ஆந்திராவைப் பாருங்கள் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மேற்கு வங்கமும் உமாசங்கரும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/10/post7045.html",
            publishDate:"Aug 10, 2010",
            summary:$sce.trustAsHtml("தமிழக முதல்வர் கருணாநிதிக்கு எப்போதுமே ஒரு பழக்கம் உண்டு. தமிழகத்தின் எதிர்க்கட்சித் தலைவர்கள் யாராவது எதையாவது ஒன்றைச் சுட்டிக்காட்டி அறிக்கை ஏதாவது வெளியிட்டால், உடனடியாக மேற்குவங்கத்தைப் பாருங்கள், பீகாரைப் பாருங்கள், ஆந்திராவைப் பாருங்கள் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாதுகாப்புக்கே பாதுகாப்பு.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/08/post7471.html",
            publishDate:"Aug 8, 2010",
            summary:$sce.trustAsHtml("அது என்ன ரவுடிக்கே ரவுடி, கில்லாடிக்கு கில்லாடி போல, பாதுகாப்புக்கே பாதுகாப்பு ? இருங்கள் விளக்கமாக சொல்லுகிறேன். ஒரு நபருக்கு சில நபர்கள் பாதுகாப்புத் தருகிறார்கள். அந்த சில நபருக்கு அந்த ஒரு நபர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாதுகாப்புக்கே பாதுகாப்பு.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/08/post7047.html",
            publishDate:"Aug 8, 2010",
            summary:$sce.trustAsHtml("அது என்ன ரவுடிக்கே ரவுடி, கில்லாடிக்கு கில்லாடி போல, பாதுகாப்புக்கே பாதுகாப்பு ? இருங்கள் விளக்கமாக சொல்லுகிறேன். ஒரு நபருக்கு சில நபர்கள் பாதுகாப்புத் தருகிறார்கள். அந்த சில நபருக்கு அந்த ஒரு நபர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சோதனைத் தமிழர்.'),
            thumbnail:'/images/7472/jafer-11-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/06/post7472.html",
            publishDate:"Aug 6, 2010",
            summary:$sce.trustAsHtml("இந்த வாரம் குமுதம் பார்த்தீர்களா ? கடந்த இதழுக்கும் இந்த இதழுக்கும் ஒரு முக்கிய வித்தியாசம் உள்ளது. ஞானி வெளியே போய் ஜாபர் சேட் உள்ளே வந்துள்ளார். ஞானி வெளியே போனதற்கும் ஜாபர் சேட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சோதனைத் தமிழர்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/06/post7048.html",
            publishDate:"Aug 6, 2010",
            summary:$sce.trustAsHtml("இந்த வாரம் குமுதம் பார்த்தீர்களா ? கடந்த இதழுக்கும் இந்த இதழுக்கும் ஒரு முக்கிய வித்தியாசம் உள்ளது. ஞானி வெளியே போய் ஜாபர் சேட் உள்ளே வந்துள்ளார். ஞானி வெளியே போனதற்கும் ஜாபர் சேட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைகீழ் விகிதங்கள்.'),
            thumbnail:'/images/7473/2008111550030101-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/08/04/post7473.html",
            publishDate:"Aug 4, 2010",
            summary:$sce.trustAsHtml("ஊழல் செய்யும் அரசியல் வாதிகளை விட, இந்த அதிகாரிகள், இச்சமுதாயத்தின் புற்று நோய் என்று சவுக்கு எப்போதுமே சொல்லி வந்திருக்கிறது.ஊழல் செய்யும் அரசியல் வாதிகள், ஐந்து ஆண்டுகளுக்கு ஒரு முறை தலித்துகள் வீட்டிலும், சேரிகளிலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைகீழ் விகிதங்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/04/post7049.html",
            publishDate:"Aug 4, 2010",
            summary:$sce.trustAsHtml("ஊழல் செய்யும் அரசியல் வாதிகளை விட, இந்த அதிகாரிகள், இச்சமுதாயத்தின் புற்று நோய் என்று சவுக்கு எப்போதுமே சொல்லி வந்திருக்கிறது.ஊழல் செய்யும் அரசியல் வாதிகள், ஐந்து ஆண்டுகளுக்கு ஒரு முறை தலித்துகள் வீட்டிலும், சேரிகளிலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விக்கிலீக்கும், வின்னர் வடிவேலுவும்.'),
            thumbnail:'/images/7474/237px-Wikileaks_logo_svg-150x150.png',
            categories:['default',''],
            href:"/default/2010/08/01/post7474.html",
            publishDate:"Aug 1, 2010",
            summary:$sce.trustAsHtml("விக்கி லீக்குக்கும் வின்னர் வடிவேலுவுக்கும் என்ன தொடர்பு என்கிறீர்களா ? விக்கிலீக் இணைய தளம் வெளியிடும் ரகசிய ஆவணங்கள், சம்பந்தப் பட்ட நபர்களை “வேண்டாம்….. வலிக்குது… அப்புறம் அழுதுடுவேன். “ என்று சொல்ல வைக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விக்கிலீக்கும், வின்னர் வடிவேலுவும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/08/01/post7050.html",
            publishDate:"Aug 1, 2010",
            summary:$sce.trustAsHtml("விக்கி லீக்குக்கும் வின்னர் வடிவேலுவுக்கும் என்ன தொடர்பு என்கிறீர்களா ? விக்கிலீக் இணைய தளம் வெளியிடும் ரகசிய ஆவணங்கள், சம்பந்தப் பட்ட நபர்களை “வேண்டாம்….. வலிக்குது… அப்புறம் அழுதுடுவேன். “ என்று சொல்ல வைக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பார்ந்த தமிழக முதல்வரே … …. ….'),
            thumbnail:'/images/7475/2451624538_337648c0cd_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/29/post7475.html",
            publishDate:"Jul 29, 2010",
            summary:$sce.trustAsHtml("சவுக்கின் கைதுக்கு முன்பு, தங்களிடம் சவுக்கு எழுதிய செம்மொழிப் பாடல், பதிவும், மற்றொரு பதிவும் காண்பிக்கப் பட்டு, சவுக்கு ஒரு தேசத் துரோகியாக சித்தரிக்கப் பட்டதாக சவுக்கு அறிகிறது. தாங்களும் ஒரு எழுத்தாளர் என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அன்பார்ந்த தமிழக முதல்வரே … …. ….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/29/post7051.html",
            publishDate:"Jul 29, 2010",
            summary:$sce.trustAsHtml("சவுக்கின் கைதுக்கு முன்பு, தங்களிடம் சவுக்கு எழுதிய செம்மொழிப் பாடல், பதிவும், மற்றொரு பதிவும் காண்பிக்கப் பட்டு, சவுக்கு ஒரு தேசத் துரோகியாக சித்தரிக்கப் பட்டதாக சவுக்கு அறிகிறது. தாங்களும் ஒரு எழுத்தாளர் என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறையில் சவுக்கு… ….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/26/post7476.html",
            publishDate:"Jul 26, 2010",
            summary:$sce.trustAsHtml("எல்லாப் பொழுதுகளைப் போலவேதான் அந்த புதனும் விடிந்தது. சவுக்கு வழக்கம் போல நீதிமன்றத்திற்கு கிளம்பிக் கொண்டிருந்த காலை வேளையில் தான் அந்த அழைப்பு மணி அடித்தது.சவுக்கின் கைதில் உண்மையில் நடந்தது என்ன, காவல்துறையினர் கூறிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறையில் சவுக்கு… ….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/26/post7052.html",
            publishDate:"Jul 26, 2010",
            summary:$sce.trustAsHtml("எல்லாப் பொழுதுகளைப் போலவேதான் அந்த புதனும் விடிந்தது. சவுக்கு வழக்கம் போல நீதிமன்றத்திற்கு கிளம்பிக் கொண்டிருந்த காலை வேளையில் தான் அந்த அழைப்பு மணி அடித்தது.சவுக்கின் கைதில் உண்மையில் நடந்தது என்ன, காவல்துறையினர் கூறிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் ரொம்ப நல்லவர்……'),
            thumbnail:'/images/7477/jaffer-sait3-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/24/post7477.html",
            publishDate:"Jul 24, 2010",
            summary:$sce.trustAsHtml("பாஸு. சவுக்கு ஜாபர் சேட்ட பத்தி எழுதி, ரொம்ப ரசா பாசமா ஆயிப் போச்சு. நடந்த எல்லாத்தையும், இணையத்துல விரிவாவே பதிவு பண்ணியிருக்காங்க. இனிமே ஜாபர் சேட்டோட மோதி, ஜெயிக்க முடியும்ணு தோணலை. அதனால,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜாபர் சேட் ரொம்ப நல்லவர்……'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/24/post7053.html",
            publishDate:"Jul 24, 2010",
            summary:$sce.trustAsHtml("பாஸு. சவுக்கு ஜாபர் சேட்ட பத்தி எழுதி, ரொம்ப ரசா பாசமா ஆயிப் போச்சு. நடந்த எல்லாத்தையும், இணையத்துல விரிவாவே பதிவு பண்ணியிருக்காங்க. இனிமே ஜாபர் சேட்டோட மோதி, ஜெயிக்க முடியும்ணு தோணலை. அதனால,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலுக்கு எதிரான சவுக்கு தன் வேலையை நிறுத்தாது'),
            thumbnail:'/images/7478/sankar-with-policc1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/22/post7478.html",
            publishDate:"Jul 22, 2010",
            summary:$sce.trustAsHtml("அன்புள்ள சவுக்கு வாசகர்களுக்கு.இரண்டு நாள் காலதாமதத்திற்கு மன்னிக்கவும் காரணம் நீங்கள் எதிர்பார்த்துக் கொண்டிருந்த அந்த சம்பவம் நிகழ்ந்து விட்டது. சவுக்கு பலரை வெளுத்து வாங்குகிறதே இவர் கதி என்னவாகுமோ ? என்று பலர் எண்ணியிருக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழலுக்கு எதிரான சவுக்கு தன் வேலையை நிறுத்தாது'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/22/post7054.html",
            publishDate:"Jul 22, 2010",
            summary:$sce.trustAsHtml("அன்புள்ள சவுக்கு வாசகர்களுக்கு.இரண்டு நாள் காலதாமதத்திற்கு மன்னிக்கவும் காரணம் நீங்கள் எதிர்பார்த்துக் கொண்டிருந்த அந்த சம்பவம் நிகழ்ந்து விட்டது. சவுக்கு பலரை வெளுத்து வாங்குகிறதே இவர் கதி என்னவாகுமோ ? என்று பலர் எண்ணியிருக்க..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு மகிழ்ச்சி….    ஒரு சோகம்…..'),
            thumbnail:'/images/7481/js-and-jiwal-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/19/post7481.html",
            publishDate:"Jul 19, 2010",
            summary:$sce.trustAsHtml("ஒரே நேரத்தில் இப்படி இரண்டு விதமான உணர்வுகள் வந்தால் அதை எப்படி அனுபவிப்பது ? அனுபவித்துத் தானே ஆக வேண்டும்.முதலில் சோகத்தை பகிர்ந்து கொள்வோம். இரட்டைக் குழல் துப்பாக்கிகளாக செயல்பட்டு வந்த, காவல்துறை ஐஜிக்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு மகிழ்ச்சி….    ஒரு சோகம்…..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/19/post7057.html",
            publishDate:"Jul 19, 2010",
            summary:$sce.trustAsHtml("ஒரே நேரத்தில் இப்படி இரண்டு விதமான உணர்வுகள் வந்தால் அதை எப்படி அனுபவிப்பது ? அனுபவித்துத் தானே ஆக வேண்டும்.முதலில் சோகத்தை பகிர்ந்து கொள்வோம். இரட்டைக் குழல் துப்பாக்கிகளாக செயல்பட்டு வந்த, காவல்துறை ஐஜிக்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சந்தனக்காடு to ஜானி ஜான் கான் ரோடு 2'),
            thumbnail:'/images/7482/0033-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/16/post7482.html",
            publishDate:"Jul 16, 2010",
            summary:$sce.trustAsHtml("வீரப்பன். இந்தப் பெயர், தமிழக மற்றும் கர்நாடக காவல் துறைக்கு சிம்ம சொப்பனமாக விளங்கியது. மொலக்கன் என்கிற வீரப்பனின் ஆப்பரேஷன்களிலேயே மிகப் பெரிய ஆப்பரேஷன், ராஜ்குமார் கடத்தல். இரண்டு மாநில அரசாங்கங்களை மூன்று மாதங்களுக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சந்தனக்காடு to ஜானி ஜான் கான் ரோடு 2'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/16/post7058.html",
            publishDate:"Jul 16, 2010",
            summary:$sce.trustAsHtml("வீரப்பன். இந்தப் பெயர், தமிழக மற்றும் கர்நாடக காவல் துறைக்கு சிம்ம சொப்பனமாக விளங்கியது. மொலக்கன் என்கிற வீரப்பனின் ஆப்பரேஷன்களிலேயே மிகப் பெரிய ஆப்பரேஷன், ராஜ்குமார் கடத்தல். இரண்டு மாநில அரசாங்கங்களை மூன்று மாதங்களுக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடைக்கப் படும் நான்காவது தூண்….'),
            thumbnail:'/images/7483/IMG_8431-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/14/post7483.html",
            publishDate:"Jul 14, 2010",
            summary:$sce.trustAsHtml("நான்காவது தூண். ஜனநாயகத்தின் முக்கியமான பங்கு வகிக்கும் ஒரு தூண். பத்திரிக்கைகளைத்தான் இவ்வாறு முக்கியமான தூணாக கருதுகிறார்கள் அறிஞர்கள்.இன்று இந்த நான்காவது தூண் மெல்ல மெல்ல கருணாநிதியால் உடைக்கப் பட்டுக் கொண்டிருக்கிறது. இந்தத் தூணை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடைக்கப் படும் நான்காவது தூண்….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/14/post7059.html",
            publishDate:"Jul 14, 2010",
            summary:$sce.trustAsHtml("நான்காவது தூண். ஜனநாயகத்தின் முக்கியமான பங்கு வகிக்கும் ஒரு தூண். பத்திரிக்கைகளைத்தான் இவ்வாறு முக்கியமான தூணாக கருதுகிறார்கள் அறிஞர்கள்.இன்று இந்த நான்காவது தூண் மெல்ல மெல்ல கருணாநிதியால் உடைக்கப் பட்டுக் கொண்டிருக்கிறது. இந்தத் தூணை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரலோகத்தில் இருக்கும் பிதாவே, இந்தப் போலிப் பாதிரியை மன்னியும்.'),
            thumbnail:'/images/7484/gaspar-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/11/post7484.html",
            publishDate:"Jul 11, 2010",
            summary:$sce.trustAsHtml("மறக்க முடியுமா என்று ஒரு தொடர் ஜகத் கஸ்பரால் நக்கீரன் இதழில் தொடர்ந்து எழுதப்பட்டு வந்ததை அறிவீர்கள். அந்தத் தொடர் எழுதப்பட்டு வந்ததை சவுக்கு வாசகர்கள் அறிவீர்கள். அந்தத் தொடரைப் படித்தவர்களுக்கு, புலிகள் இயக்கமே,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பரலோகத்தில் இருக்கும் பிதாவே, இந்தப் போலிப் பாதிரியை மன்னியும்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/11/post7060.html",
            publishDate:"Jul 11, 2010",
            summary:$sce.trustAsHtml("மறக்க முடியுமா என்று ஒரு தொடர் ஜகத் கஸ்பரால் நக்கீரன் இதழில் தொடர்ந்து எழுதப்பட்டு வந்ததை அறிவீர்கள். அந்தத் தொடர் எழுதப்பட்டு வந்ததை சவுக்கு வாசகர்கள் அறிவீர்கள். அந்தத் தொடரைப் படித்தவர்களுக்கு, புலிகள் இயக்கமே,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுகவின் அடுத்தடுத்த போராட்டங்கள்.'),
            thumbnail:'/images/7485/karunanidhi_575035-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/10/post7485.html",
            publishDate:"Jul 10, 2010",
            summary:$sce.trustAsHtml("இலங்கை கடற்படையினரால், இந்திய மீனவர் ஒருவர் கொல்லப் பட்டது குறித்து செய்தி வெளியானதும், உடனடியாக சென்னையில் உள்ள இலங்கை துணைத் தூதரகம் முன்பாக திமுக ஆர்ப்பாட்டம் அறிவித்துள்ளது. இந்த அறிவிப்பைக் கேட்டு எப்படி சிரிப்பது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுகவின் அடுத்தடுத்த போராட்டங்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/10/post7061.html",
            publishDate:"Jul 10, 2010",
            summary:$sce.trustAsHtml("இலங்கை கடற்படையினரால், இந்திய மீனவர் ஒருவர் கொல்லப் பட்டது குறித்து செய்தி வெளியானதும், உடனடியாக சென்னையில் உள்ள இலங்கை துணைத் தூதரகம் முன்பாக திமுக ஆர்ப்பாட்டம் அறிவித்துள்ளது. இந்த அறிவிப்பைக் கேட்டு எப்படி சிரிப்பது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சந்தனக்காடு to ஜானி ஜான்கான் ரோடு. 1'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/08/post7486.html",
            publishDate:"Jul 8, 2010",
            summary:$sce.trustAsHtml("ஏ ப்ரல் மாத இரவு. 2003ம் ஆண்டு. ஒரு பச்சை நிற ஜீப்பில், கோபால் ராயப்பேட்டையில் உள்ள தனது அலுவலகத்தில் இருந்து கிளம்புகிறார். அந்த ஜீப்பை மோகன் என்ற டிரைவர் ஓட்டிச் செல்கிறார். அலுவலகத்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சந்தனக்காடு to ஜானி ஜான்கான் ரோடு. 1'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/08/post7062.html",
            publishDate:"Jul 8, 2010",
            summary:$sce.trustAsHtml("ஏ ப்ரல் மாத இரவு. 2003ம் ஆண்டு. ஒரு பச்சை நிற ஜீப்பில், கோபால் ராயப்பேட்டையில் உள்ள தனது அலுவலகத்தில் இருந்து கிளம்புகிறார். அந்த ஜீப்பை மோகன் என்ற டிரைவர் ஓட்டிச் செல்கிறார். அலுவலகத்தை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('‘பயிற்சிக்காக லண்டனுக்குச் சென்ற காவல்துறை அதிகாரிகள்&#8230;’வெடித்துக் கிளம்பும் சர்ச்சைகள்!'),
            thumbnail:'/images/7487/414945982_fe6aa23fda_o-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/06/post7487.html",
            publishDate:"Jul 6, 2010",
            summary:$sce.trustAsHtml("அரசு செலவில் ஊர்ச்சுற்றிப் பார்க்கச் சென்றிருக்கிறார்கள், காவல்துறை உயர் அதிகாரிகள்! மேலாண்மை குறித்த பயிற்சி என்ற பெயரில் லண்டனை சுற்றிப் பார்க்க, எட்டு கூடுதல் டி.ஜி.பி-க்கள் இங்கிலாந்து நாட்டுக்குச் சென்றிருப்பதைத் தொடர்ந்து தான் இப்படியொரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('‘பயிற்சிக்காக லண்டனுக்குச் சென்ற காவல்துறை அதிகாரிகள்&#8230;’வெடித்துக் கிளம்பும் சர்ச்சைகள்!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/06/post7063.html",
            publishDate:"Jul 6, 2010",
            summary:$sce.trustAsHtml("அரசு செலவில் ஊர்ச்சுற்றிப் பார்க்கச் சென்றிருக்கிறார்கள், காவல்துறை உயர் அதிகாரிகள்! மேலாண்மை குறித்த பயிற்சி என்ற பெயரில் லண்டனை சுற்றிப் பார்க்க, எட்டு கூடுதல் டி.ஜி.பி-க்கள் இங்கிலாந்து நாட்டுக்குச் சென்றிருப்பதைத் தொடர்ந்து தான் இப்படியொரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கின் செம்மொழி சிறப்பு பாடல்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/04/post7488.html",
            publishDate:"Jul 4, 2010",
            summary:$sce.trustAsHtml("சமீபத்தில் நடந்து முடிந்த செம்மொழி மாநாட்டுக்காக ஏ.ஆர்.ரஹ்மான் பாடல் ஒன்று தயாரிக்கப் பட்டு வெளியிடப் பட்டது. இந்தப் பாடல் தயாரித்து வெளியிடப்பட மட்டும் நமது வரிப்பணம் 7.5 கோடி செலவிடப் பட்டுள்ளதாக தகவல்கள் தெரிவிக்கின்றன.ஆனால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கின் செம்மொழி சிறப்பு பாடல்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/04/post7064.html",
            publishDate:"Jul 4, 2010",
            summary:$sce.trustAsHtml("சமீபத்தில் நடந்து முடிந்த செம்மொழி மாநாட்டுக்காக ஏ.ஆர்.ரஹ்மான் பாடல் ஒன்று தயாரிக்கப் பட்டு வெளியிடப் பட்டது. இந்தப் பாடல் தயாரித்து வெளியிடப்பட மட்டும் நமது வரிப்பணம் 7.5 கோடி செலவிடப் பட்டுள்ளதாக தகவல்கள் தெரிவிக்கின்றன.ஆனால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கை முடக்கு ! அதிரடி திட்டம்.'),
            thumbnail:'/images/7489/kaspar-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/07/01/post7489.html",
            publishDate:"Jul 1, 2010",
            summary:$sce.trustAsHtml("நித்யானந்தா மற்றும், கர்மவீரர் ஆகிய பதிவுகள், சமூகத்தில் பெரிய மனிதர் வேடத்தில் உலா வரும் பலரின் முகத்திரையை கிழித்ததையும், அந்த பதிவுகள் பெரும் வரவேற்பை பெற்றதையும், சவுக்கு வாசகர்கள் அறிவீர்கள்.இந்த பதிவுகள் அதிர்வலைகளை ஏற்படுத்தியது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கை முடக்கு ! அதிரடி திட்டம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/07/01/post7065.html",
            publishDate:"Jul 1, 2010",
            summary:$sce.trustAsHtml("நித்யானந்தா மற்றும், கர்மவீரர் ஆகிய பதிவுகள், சமூகத்தில் பெரிய மனிதர் வேடத்தில் உலா வரும் பலரின் முகத்திரையை கிழித்ததையும், அந்த பதிவுகள் பெரும் வரவேற்பை பெற்றதையும், சவுக்கு வாசகர்கள் அறிவீர்கள்.இந்த பதிவுகள் அதிர்வலைகளை ஏற்படுத்தியது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அனாதையாக 560 பேர் .. .. ..'),
            thumbnail:'/images/7490/DSC02753-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/30/post7490.html",
            publishDate:"Jun 30, 2010",
            summary:$sce.trustAsHtml("தேடப்படும் குற்றவாளியான டக்ளஸ் தேவானந்தாவை கைது செய்ய வேண்டும் என்ற புகார் எழுந்தபோது, டக்ளஸ் தேவானந்தா சொன்ன பதில், 1987ல் ராஜீவ் காந்தியும் ஜெயவர்த்தனேவும் கையெழுத்திட்ட ஒப்பந்தத்தின் படி, அனைத்துக் குற்றவாளிகளுக்கும் பொது மன்னிப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அனாதையாக 560 பேர் .. .. ..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/30/post7066.html",
            publishDate:"Jun 30, 2010",
            summary:$sce.trustAsHtml("தேடப்படும் குற்றவாளியான டக்ளஸ் தேவானந்தாவை கைது செய்ய வேண்டும் என்ற புகார் எழுந்தபோது, டக்ளஸ் தேவானந்தா சொன்ன பதில், 1987ல் ராஜீவ் காந்தியும் ஜெயவர்த்தனேவும் கையெழுத்திட்ட ஒப்பந்தத்தின் படி, அனைத்துக் குற்றவாளிகளுக்கும் பொது மன்னிப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏழைப் பங்காளர் டி.சுதர்சனம்.'),
            thumbnail:'/images/7493/2006051713740401-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/27/post7493.html",
            publishDate:"Jun 27, 2010",
            summary:$sce.trustAsHtml("நேற்று சட்டமன்ற காங்கிரஸ் கட்சித் தலைவரும், காங்கிரஸில் முக்கியப் புள்ளியுமான திரு.டி.சுதர்சனம் அவர்கள், கோவையில் மாரடைப்பால் காலமானார் என்று செய்தி வந்துள்ளது.பொதுவாக இறந்தவர்களை விமர்சனம் செய்யக் கூடாது என்ற ஒரு கிறுக்குத்தனமான அரசியல் மரபு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பழ.கருப்பையா வீட்டின் மீது தாக்குதல்.  காட்டுமிராண்டிகளின் காலம்.'),
            thumbnail:'/images/7492/karupaiya-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/27/post7492.html",
            publishDate:"Jun 27, 2010",
            summary:$sce.trustAsHtml("பழ.கருப்பையா….தமிழகத்தின் மிகச் சிறந்த கட்டுரையாளர். வீரியமான எழுத்துக்குச் சொந்தக் காரர். இவர் கட்டுரைகள் படிப்பவர்களின் ரத்தத்தை சூடேற்றும் தன்மை படைத்தன. இவர் எழுத்தில் சத்திய ஆவேசம் உண்டு. இவரின் கட்டுரைகள் தினமணி நாளேட்டில் வந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏழைப் பங்காளர் டி.சுதர்சனம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/27/post7069.html",
            publishDate:"Jun 27, 2010",
            summary:$sce.trustAsHtml("நேற்று சட்டமன்ற காங்கிரஸ் கட்சித் தலைவரும், காங்கிரஸில் முக்கியப் புள்ளியுமான திரு.டி.சுதர்சனம் அவர்கள், கோவையில் மாரடைப்பால் காலமானார் என்று செய்தி வந்துள்ளது.பொதுவாக இறந்தவர்களை விமர்சனம் செய்யக் கூடாது என்ற ஒரு கிறுக்குத்தனமான அரசியல் மரபு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பழ.கருப்பையா வீட்டின் மீது தாக்குதல்.  காட்டுமிராண்டிகளின் காலம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/27/post7067.html",
            publishDate:"Jun 27, 2010",
            summary:$sce.trustAsHtml("பழ.கருப்பையா….தமிழகத்தின் மிகச் சிறந்த கட்டுரையாளர். வீரியமான எழுத்துக்குச் சொந்தக் காரர். இவர் கட்டுரைகள் படிப்பவர்களின் ரத்தத்தை சூடேற்றும் தன்மை படைத்தன. இவர் எழுத்தில் சத்திய ஆவேசம் உண்டு. இவரின் கட்டுரைகள் தினமணி நாளேட்டில் வந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('”தண்டவாள தகர்ப்புக்கு காரணம் நானா?” மறுக்கிறார் மாறன்'),
            thumbnail:'/images/7494/IMG_8246-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/24/post7494.html",
            publishDate:"Jun 24, 2010",
            summary:$sce.trustAsHtml("இந்திய நீதிமன்றத்தால் தேடப்படும் குற்றவாளியாக அறிவிக்கப்பட்டிருப்பவர் இலங்கை அமைச்சர் டக்ளஸ் தேவானந்தா. அவர் சமீபத்தில் இந்திய அரசின் கவுரவ விருந்தினராக இந்தியாவுக்கு வந்து சென்றிருக்கிறார். அவருக்கு இந்திய அரசு சார்பில் சிவப்புக் கம்பள வரவேற்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('”தண்டவாள தகர்ப்புக்கு காரணம் நானா?” மறுக்கிறார் மாறன்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/24/post7070.html",
            publishDate:"Jun 24, 2010",
            summary:$sce.trustAsHtml("இந்திய நீதிமன்றத்தால் தேடப்படும் குற்றவாளியாக அறிவிக்கப்பட்டிருப்பவர் இலங்கை அமைச்சர் டக்ளஸ் தேவானந்தா. அவர் சமீபத்தில் இந்திய அரசின் கவுரவ விருந்தினராக இந்தியாவுக்கு வந்து சென்றிருக்கிறார். அவருக்கு இந்திய அரசு சார்பில் சிவப்புக் கம்பள வரவேற்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரு வழக்குகள்..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/22/post7495.html",
            publishDate:"Jun 22, 2010",
            summary:$sce.trustAsHtml("இந்த இரு வழக்குகள், மீரட் சதி வழக்கோ அல்லது லாகூர் சதி வழக்கோ அல்ல. தமிழ்நாட்டில் நடந்து கொண்டிருக்கும் இரு வழக்குகள். இந்த வழக்குகளில் சம்பந்தப் பட்டவர்கள் இரு பெண்கள். ஒருவர் கைம்பெண். ஒருவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரு வழக்குகள்..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/22/post7072.html",
            publishDate:"Jun 22, 2010",
            summary:$sce.trustAsHtml("இந்த இரு வழக்குகள், மீரட் சதி வழக்கோ அல்லது லாகூர் சதி வழக்கோ அல்ல. தமிழ்நாட்டில் நடந்து கொண்டிருக்கும் இரு வழக்குகள். இந்த வழக்குகளில் சம்பந்தப் பட்டவர்கள் இரு பெண்கள். ஒருவர் கைம்பெண். ஒருவர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சந்தனக் காடு TO  ஜானி ஜான் கான் ரோடு அதிரடி தொடர் ஆரம்பம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/21/post7497.html",
            publishDate:"Jun 21, 2010",
            summary:$sce.trustAsHtml("வீரப்பன். இந்த சந்தனக் கடத்தல் வீரப்பன் கர்நாடகக் கண்மணி ராஜ்குமாரை கடத்திய போது இருந்த பரபரப்புக்கும், அதிர்ச்சிகளுக்கும் கொஞ்சமும் பஞ்சம் இல்லை.ராஜ்குமாரை வீரப்பன் கடத்தி வைத்திருந்த போது நடந்தது என்ன என்று, கர்நாடக டிஜிபி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சந்தனக் காடு TO  ஜானி ஜான் கான் ரோடு அதிரடி தொடர் ஆரம்பம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/21/post7073.html",
            publishDate:"Jun 21, 2010",
            summary:$sce.trustAsHtml("வீரப்பன். இந்த சந்தனக் கடத்தல் வீரப்பன் கர்நாடகக் கண்மணி ராஜ்குமாரை கடத்திய போது இருந்த பரபரப்புக்கும், அதிர்ச்சிகளுக்கும் கொஞ்சமும் பஞ்சம் இல்லை.ராஜ்குமாரை வீரப்பன் கடத்தி வைத்திருந்த போது நடந்தது என்ன என்று, கர்நாடக டிஜிபி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எங்கள் பிணங்களின் மீதுதான் செம்மொழி மாநாடு நடக்கும்….'),
            thumbnail:'/images/7498/Bagath-Singh-before-he-was-arrested-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/19/post7498.html",
            publishDate:"Jun 19, 2010",
            summary:$sce.trustAsHtml("மதுரையில் 10வது நாளாக உண்ணாவிரதம் இருந்த பகத்சிங், நடராஜன், ராஜேந்திரன், பாரதி, எழிலரசன் மற்றும் ராஜு ஆகியோரை எப்போதுமே வழக்கறிஞர்களை காவல்துறையினரை வைத்து ஒடுக்குவதை வழக்கமாகக் கொண்ட கருணாநிதியின் காவல்துறை நேற்று இரவு, ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எங்கள் பிணங்களின் மீதுதான் செம்மொழி மாநாடு நடக்கும்….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/19/post7074.html",
            publishDate:"Jun 19, 2010",
            summary:$sce.trustAsHtml("மதுரையில் 10வது நாளாக உண்ணாவிரதம் இருந்த பகத்சிங், நடராஜன், ராஜேந்திரன், பாரதி, எழிலரசன் மற்றும் ராஜு ஆகியோரை எப்போதுமே வழக்கறிஞர்களை காவல்துறையினரை வைத்து ஒடுக்குவதை வழக்கமாகக் கொண்ட கருணாநிதியின் காவல்துறை நேற்று இரவு, ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கர்ம வீரர்…'),
            thumbnail:'/images/7499/k2-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/17/post7499.html",
            publishDate:"Jun 17, 2010",
            summary:$sce.trustAsHtml("கர்ம வீரர். கர்ம வீரர் என்றவுடன் உங்கள் நினைவுக்கு வருவது பெருந்தலைவர் காமராஜர். இந்தப் பதிவு பெருந்தலைவரைப் பற்றிய பதிவு என்று நினைத்துக் கொள்ளாதீர்கள். இது கர்ம வீரர் பற்றிய பதிவு அல்ல. இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கர்ம வீரர்…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/17/post7075.html",
            publishDate:"Jun 17, 2010",
            summary:$sce.trustAsHtml("கர்ம வீரர். கர்ம வீரர் என்றவுடன் உங்கள் நினைவுக்கு வருவது பெருந்தலைவர் காமராஜர். இந்தப் பதிவு பெருந்தலைவரைப் பற்றிய பதிவு என்று நினைத்துக் கொள்ளாதீர்கள். இது கர்ம வீரர் பற்றிய பதிவு அல்ல. இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நித்யானந்தா ஆபாச சிடி வெளியானது எப்படி ? அதிர்ச்சியூட்டும் தகவல்கள்.'),
            thumbnail:'/images/7500/swamiji1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/16/post7500.html",
            publishDate:"Jun 16, 2010",
            summary:$sce.trustAsHtml("பொதுவாக, தமிழ்நாட்டுக்கென ஒரு ‘ட்ரென்ட்’ உண்டு. அது பத்திரிக்கையாளர்கள் மீதான புகார்களைப் பற்றி மூச்சு விடாதது. பத்திரிக்கையாளர்களைப் பற்றி வண்டி வண்டியாக புகார்கள் இருந்தாலும், அதைப் பற்றி எந்த பத்திரிக்கையும் எழுதாதாம். அதுதான் பத்திரிக்கை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நித்யானந்தா ஆபாச சிடி வெளியானது எப்படி ? அதிர்ச்சியூட்டும் தகவல்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/16/post7076.html",
            publishDate:"Jun 16, 2010",
            summary:$sce.trustAsHtml("பொதுவாக, தமிழ்நாட்டுக்கென ஒரு ‘ட்ரென்ட்’ உண்டு. அது பத்திரிக்கையாளர்கள் மீதான புகார்களைப் பற்றி மூச்சு விடாதது. பத்திரிக்கையாளர்களைப் பற்றி வண்டி வண்டியாக புகார்கள் இருந்தாலும், அதைப் பற்றி எந்த பத்திரிக்கையும் எழுதாதாம். அதுதான் பத்திரிக்கை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கின் செம்மொழி விருதுகள்.'),
            thumbnail:'/images/7501/IMG_8225-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/13/post7501.html",
            publishDate:"Jun 13, 2010",
            summary:$sce.trustAsHtml("செம்மொழி மாநாட்டுக்காக கருணாநிதி குடும்பத்தை விட, அரசு இயந்திரமும், பரந்து பட்ட சமூகமும் கொடுத்திருக்கக் கூடிய உழைப்பு மெய் சிலிர்க்கச் செய்கிறது. அரசு அதிகாரிகளும், பத்திரிக்கையாளர்களும், தமிழறிஞர்களும், காட்டும் ஆர்வமும், உணர்வும் பிரமிப்பூட்டுகின்றன.இவர்களின் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்கின் செம்மொழி விருதுகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/13/post7077.html",
            publishDate:"Jun 13, 2010",
            summary:$sce.trustAsHtml("செம்மொழி மாநாட்டுக்காக கருணாநிதி குடும்பத்தை விட, அரசு இயந்திரமும், பரந்து பட்ட சமூகமும் கொடுத்திருக்கக் கூடிய உழைப்பு மெய் சிலிர்க்கச் செய்கிறது. அரசு அதிகாரிகளும், பத்திரிக்கையாளர்களும், தமிழறிஞர்களும், காட்டும் ஆர்வமும், உணர்வும் பிரமிப்பூட்டுகின்றன.இவர்களின் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செம்மொழி மாநாட்டுக்கு சவுக்கின் யோசனைகள்'),
            thumbnail:'/images/7502/wctc_t-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/12/post7502.html",
            publishDate:"Jun 12, 2010",
            summary:$sce.trustAsHtml("செம்மொழி மாநாட்டுக்கான ஏற்பாடுகளின் ஒரு பகுதியாக சென்னைப் பல்கலைக்கழகத்தின் கடிகார கோபுரம் ஒவ்வொரு மணி நேரத்துக்கும் மணி அடிக்கும் போது ஒரு திருக்குறளைச் சொல்லி, அதற்கான விளக்கமும் சொல்ல ஏற்பாடு செய்யப் பட்டுள்ளதாக செய்திகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செம்மொழி மாநாட்டுக்கு சவுக்கின் யோசனைகள்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/12/post7079.html",
            publishDate:"Jun 12, 2010",
            summary:$sce.trustAsHtml("செம்மொழி மாநாட்டுக்கான ஏற்பாடுகளின் ஒரு பகுதியாக சென்னைப் பல்கலைக்கழகத்தின் கடிகார கோபுரம் ஒவ்வொரு மணி நேரத்துக்கும் மணி அடிக்கும் போது ஒரு திருக்குறளைச் சொல்லி, அதற்கான விளக்கமும் சொல்ல ஏற்பாடு செய்யப் பட்டுள்ளதாக செய்திகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசியலில் இருந்து ஓய்வு.  ஸ்டாலின் திடீர் அறிவிப்பு.'),
            thumbnail:'/images/7504/LAT_STALIN_19564a-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/07/post7504.html",
            publishDate:"Jun 7, 2010",
            summary:$sce.trustAsHtml("தலைப்பை பார்த்தவுடன் அதிர்ச்சியாக இருக்கிறதா ? இது இப்போது நடக்கவில்லை. 2020ல் நடக்கிறது. கருணாநிதியின் 97வது பிறந்த நாள் முடிந்தவுடன் இந்த அறிவிப்பு வெளிவரும் என்று சவுக்குக் பிரத்யேக தகவல் வந்துள்ளது. கருணாநிதியின் 97வது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசியலில் இருந்து ஓய்வு.  ஸ்டாலின் திடீர் அறிவிப்பு.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/07/post7080.html",
            publishDate:"Jun 7, 2010",
            summary:$sce.trustAsHtml("தலைப்பை பார்த்தவுடன் அதிர்ச்சியாக இருக்கிறதா ? இது இப்போது நடக்கவில்லை. 2020ல் நடக்கிறது. கருணாநிதியின் 97வது பிறந்த நாள் முடிந்தவுடன் இந்த அறிவிப்பு வெளிவரும் என்று சவுக்குக் பிரத்யேக தகவல் வந்துள்ளது. கருணாநிதியின் 97வது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நோயாளியான மருத்துவர் ? பாகம் இரண்டு'),
            thumbnail:'/images/7505/Ramadas-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/06/post7505.html",
            publishDate:"Jun 6, 2010",
            summary:$sce.trustAsHtml("பாட்டாளி மக்கள் கட்சியின் தேர்தல் பயணம் 1989ல் தொடங்கியது.1989ல் நடைபெற்ற தேர்தலில், பாட்டாளி மக்கள் கட்சி கூட்டணியின்றி தனித்துப் போட்டியிட்டு, 15 லட்சத்து 36 ஆயிரத்து 350 வாக்குகளை பெற்றது. எனினும் ஓரிடத்தில் கூட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நோயாளியான மருத்துவர் ? பாகம் இரண்டு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/06/post7082.html",
            publishDate:"Jun 6, 2010",
            summary:$sce.trustAsHtml("பாட்டாளி மக்கள் கட்சியின் தேர்தல் பயணம் 1989ல் தொடங்கியது.1989ல் நடைபெற்ற தேர்தலில், பாட்டாளி மக்கள் கட்சி கூட்டணியின்றி தனித்துப் போட்டியிட்டு, 15 லட்சத்து 36 ஆயிரத்து 350 வாக்குகளை பெற்றது. எனினும் ஓரிடத்தில் கூட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நோயாளியான மருத்துவர் ? பாகம் ஒன்று'),
            thumbnail:'/images/7507/52_ramadass1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/05/post7507.html",
            publishDate:"Jun 5, 2010",
            summary:$sce.trustAsHtml("டாக்டர்.ராமதாஸ். இந்தப் பெயரோடு வன்னியர் சங்கத் தலைவராக தன் அரசியல் வாழ்வைத் தொடங்கினார். பிறகு, தமிழார்வம் காரணமாக, மருத்துவர் ச.ராமதாசு என்று மாறி, பிறகு ‘தமிழ்க்குடிதாங்கி’ என்று ஆகியது.யார் இந்த ராமாதாஸ் ? தமிழகத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நோயாளியான மருத்துவர் ? பாகம் ஒன்று'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/05/post7083.html",
            publishDate:"Jun 5, 2010",
            summary:$sce.trustAsHtml("டாக்டர்.ராமதாஸ். இந்தப் பெயரோடு வன்னியர் சங்கத் தலைவராக தன் அரசியல் வாழ்வைத் தொடங்கினார். பிறகு, தமிழார்வம் காரணமாக, மருத்துவர் ச.ராமதாசு என்று மாறி, பிறகு ‘தமிழ்க்குடிதாங்கி’ என்று ஆகியது.யார் இந்த ராமாதாஸ் ? தமிழகத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுக: துரோகங்களின் காலம் 2.'),
            thumbnail:'/images/7508/k1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/02/post7508.html",
            publishDate:"Jun 2, 2010",
            summary:$sce.trustAsHtml("தற்போது அறிவிக்கப் பட்டுள்ள திமுகவின் ராஜ்யசபா வேட்பாளர்கள் மூன்று பேரும் எப்படி கட்சித் தாவி வந்தவர்கள், அவர்களின் வரலாறு என்ன என்பதைப் பற்றி பார்த்தோம். டி.எம்.செல்வகணபதி குறித்து, பெரும்பாலானோருக்கு தெரிந்திருக்கும் என்பதால், அவர் குறித்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுக: துரோகங்களின் காலம் 2.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/02/post7084.html",
            publishDate:"Jun 2, 2010",
            summary:$sce.trustAsHtml("தற்போது அறிவிக்கப் பட்டுள்ள திமுகவின் ராஜ்யசபா வேட்பாளர்கள் மூன்று பேரும் எப்படி கட்சித் தாவி வந்தவர்கள், அவர்களின் வரலாறு என்ன என்பதைப் பற்றி பார்த்தோம். டி.எம்.செல்வகணபதி குறித்து, பெரும்பாலானோருக்கு தெரிந்திருக்கும் என்பதால், அவர் குறித்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுக:  துரோகங்களின் காலம் ?'),
            thumbnail:'/images/7510/kp-ramalingam-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/06/01/post7510.html",
            publishDate:"Jun 1, 2010",
            summary:$sce.trustAsHtml("திராவிட இயக்க வரலாற்றின் மிக முக்கியமான விழுதாக இருக்கும், திராவிட முன்னேற்றக் கழகத்தில், இது துரோகங்களின் காலமா என்ற சந்தேகம் எழுந்துள்ளது.ராஜ்ய சபைக்கு ஏற்பட்டுள்ள காலியிடங்களுக்கு, ஏராளமான பேர், திராவிட முன்னேற்றக் கழகத்திலேயே தகுதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுக:  துரோகங்களின் காலம் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/06/01/post7086.html",
            publishDate:"Jun 1, 2010",
            summary:$sce.trustAsHtml("திராவிட இயக்க வரலாற்றின் மிக முக்கியமான விழுதாக இருக்கும், திராவிட முன்னேற்றக் கழகத்தில், இது துரோகங்களின் காலமா என்ற சந்தேகம் எழுந்துள்ளது.ராஜ்ய சபைக்கு ஏற்பட்டுள்ள காலியிடங்களுக்கு, ஏராளமான பேர், திராவிட முன்னேற்றக் கழகத்திலேயே தகுதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வித்தாரக் கள்ளி விறகொடிக்கப் போனாளாம்….'),
            thumbnail:'/images/7512/r-m-veerappan-17809-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/30/post7512.html",
            publishDate:"May 30, 2010",
            summary:$sce.trustAsHtml("வித்தாரக் கள்ளி விறகொடிக்கப் போனாளாம்…. கத்தாழ முள்ளு கொத்தோட வந்துச்சாம் என்று எங்கள் ஊரில், பெண்கள், புடவையை தூக்கி சொருகிக் கொண்டு சண்டையிடும்போது சொல்வார்கள். இதற்கு பொருள் என்னவென்றால், “என்னடி கதை விடுற…. நீ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய தலைமைச் செயலக கட்டிடமும்,  டாஸ்மாக் பாரும்'),
            thumbnail:'/images/7511/new-secretariat-building-chennai-photos4-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/30/post7511.html",
            publishDate:"May 30, 2010",
            summary:$sce.trustAsHtml("எதிர்க்கட்சித் தலைவர் செல்வி ஜெயலலிதா, புதிய தலைமைச் செயலக கட்டிடம் பார்த்தாலே அருவருப்பாக இருக்கிறது என்றும், 2011ல் அதிமுக ஆட்சி அமைத்ததும், பழைய புனித ஜார்ஜ் கோட்டையில் தான் ஆட்சி அமைப்பேன் என்றும், புதிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வித்தாரக் கள்ளி விறகொடிக்கப் போனாளாம்….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/30/post7088.html",
            publishDate:"May 30, 2010",
            summary:$sce.trustAsHtml("வித்தாரக் கள்ளி விறகொடிக்கப் போனாளாம்…. கத்தாழ முள்ளு கொத்தோட வந்துச்சாம் என்று எங்கள் ஊரில், பெண்கள், புடவையை தூக்கி சொருகிக் கொண்டு சண்டையிடும்போது சொல்வார்கள். இதற்கு பொருள் என்னவென்றால், “என்னடி கதை விடுற…. நீ..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய தலைமைச் செயலக கட்டிடமும்,  டாஸ்மாக் பாரும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/30/post7087.html",
            publishDate:"May 30, 2010",
            summary:$sce.trustAsHtml("எதிர்க்கட்சித் தலைவர் செல்வி ஜெயலலிதா, புதிய தலைமைச் செயலக கட்டிடம் பார்த்தாலே அருவருப்பாக இருக்கிறது என்றும், 2011ல் அதிமுக ஆட்சி அமைத்ததும், பழைய புனித ஜார்ஜ் கோட்டையில் தான் ஆட்சி அமைப்பேன் என்றும், புதிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதியின் பல்வேறு பரிமாணங்கள்.'),
            thumbnail:'/images/7513/KARUNANIDHI_M_8934e-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/23/post7513.html",
            publishDate:"May 23, 2010",
            summary:$sce.trustAsHtml("ஏதாவது ஒரு பிரிவோ, அல்லது அமைப்போ பாராட்டு விழா நடத்தினால், உடனே, அந்த அமைப்பில் தான் ஒரு அங்கம் என்று பேசுவது கருணாநிதிக்கு வழக்கம். விடுதலை (கழுதைகளின்) சிறுத்தைகளின் சார்பில் நடந்த பாராட்டு விழாவிலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதியின் பல்வேறு பரிமாணங்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/23/post7089.html",
            publishDate:"May 23, 2010",
            summary:$sce.trustAsHtml("ஏதாவது ஒரு பிரிவோ, அல்லது அமைப்போ பாராட்டு விழா நடத்தினால், உடனே, அந்த அமைப்பில் தான் ஒரு அங்கம் என்று பேசுவது கருணாநிதிக்கு வழக்கம். விடுதலை (கழுதைகளின்) சிறுத்தைகளின் சார்பில் நடந்த பாராட்டு விழாவிலே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லைலாவுக்கெல்லாம் லைலா'),
            thumbnail:'/images/7514/political-cyclone-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/22/post7514.html",
            publishDate:"May 22, 2010",
            summary:$sce.trustAsHtml("அது என்ன லைலாவுக்கெல்லாம் லைலா? கோடையின் கடும் வெம்மையில், காதலியின் குளிர்ச்சியான பார்வையும், வார்த்தைகளுமே வறண்டு போய் எரிச்சலை உண்டு பண்ணும் வேளையில், இனிய தென்றலாய், நமக்கெல்லாம், அரிதிலும், அரிதான மழையை தந்து, நம்மை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லைலாவுக்கெல்லாம் லைலா'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/22/post7090.html",
            publishDate:"May 22, 2010",
            summary:$sce.trustAsHtml("அது என்ன லைலாவுக்கெல்லாம் லைலா? கோடையின் கடும் வெம்மையில், காதலியின் குளிர்ச்சியான பார்வையும், வார்த்தைகளுமே வறண்டு போய் எரிச்சலை உண்டு பண்ணும் வேளையில், இனிய தென்றலாய், நமக்கெல்லாம், அரிதிலும், அரிதான மழையை தந்து, நம்மை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாருங்கள் ஞானதேசிகன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/19/post7515.html",
            publishDate:"May 19, 2010",
            summary:$sce.trustAsHtml("அன்புக்கும் மரியாதைக்கும் உரிய ஞானதேசிகன் அவர்களே,முதலில் உங்களுக்கு உள்துறை செயலாளராக நியமிக்கப் பட்டிருக்கும் உங்களுக்கு அன்பு வாழ்த்துக்கள்.உங்களுக்கு சவுக்கின் அன்பு வணக்கங்கள். நீங்கள் யாரென்று சவுக்குக்கு தெரியாது. ஆனால் நீங்கள் ஒரு ஐஏஎஸ் ஆபீசர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாருங்கள் ஞானதேசிகன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/19/post7091.html",
            publishDate:"May 19, 2010",
            summary:$sce.trustAsHtml("அன்புக்கும் மரியாதைக்கும் உரிய ஞானதேசிகன் அவர்களே,முதலில் உங்களுக்கு உள்துறை செயலாளராக நியமிக்கப் பட்டிருக்கும் உங்களுக்கு அன்பு வாழ்த்துக்கள்.உங்களுக்கு சவுக்கின் அன்பு வணக்கங்கள். நீங்கள் யாரென்று சவுக்குக்கு தெரியாது. ஆனால் நீங்கள் ஒரு ஐஏஎஸ் ஆபீசர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிறம் மாறும் ஜுனியர் விகடன்.'),
            thumbnail:'/images/7516/IMG_0001343-150x111.jpg',
            categories:['default',''],
            href:"/default/2010/05/17/post7516.html",
            publishDate:"May 17, 2010",
            summary:$sce.trustAsHtml("ஜுனியர் விகடன். ஒரு காலத்தில், தரமான பத்திரிக்கையாக, மக்களின் நம்பிக்கையை பெற்ற இதழாக வலம் வந்து கொண்டிருந்தது ஜுனியர் விகடன். இப்போது, சிறிது சிறிதாக நிறம் மாறி, தற்போது மஞ்சள் நிறமாகவே ஆகி விட்டது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நிறம் மாறும் ஜுனியர் விகடன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/17/post7092.html",
            publishDate:"May 17, 2010",
            summary:$sce.trustAsHtml("ஜுனியர் விகடன். ஒரு காலத்தில், தரமான பத்திரிக்கையாக, மக்களின் நம்பிக்கையை பெற்ற இதழாக வலம் வந்து கொண்டிருந்தது ஜுனியர் விகடன். இப்போது, சிறிது சிறிதாக நிறம் மாறி, தற்போது மஞ்சள் நிறமாகவே ஆகி விட்டது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்குக்கு கருணாநிதி ப்ரத்யேக பேட்டி'),
            thumbnail:'/images/7517/1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/13/post7517.html",
            publishDate:"May 13, 2010",
            summary:$sce.trustAsHtml("உண்மையான டெக்கான் க்ரானிக்கிள் பேட்டிஇன்றைய டெக்கான் க்ரானிக்கிள் நாளிதழில், கருணாநிதி பேட்டியளித்துள்ளார். இந்த இதழில் கருணாநிதியின் பேட்டி வந்த பின்புலம் குறித்து, சவுக்கில், தனிப் பதிவு எழுதப் படும். ஆனால், இந்தப் பதிவு, கருணாநிதி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சவுக்குக்கு கருணாநிதி ப்ரத்யேக பேட்டி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/13/post7093.html",
            publishDate:"May 13, 2010",
            summary:$sce.trustAsHtml("உண்மையான டெக்கான் க்ரானிக்கிள் பேட்டிஇன்றைய டெக்கான் க்ரானிக்கிள் நாளிதழில், கருணாநிதி பேட்டியளித்துள்ளார். இந்த இதழில் கருணாநிதியின் பேட்டி வந்த பின்புலம் குறித்து, சவுக்கில், தனிப் பதிவு எழுதப் படும். ஆனால், இந்தப் பதிவு, கருணாநிதி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாட்டின் கல்வி வளர்ச்சியை தடுக்க சிபிஐ சதி ?'),
            thumbnail:'/images/7518/AVN16_KETAN_12683e-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/10/post7518.html",
            publishDate:"May 10, 2010",
            summary:$sce.trustAsHtml("நாட்டின் கல்வி வளர்ச்சியை தடுப்பதற்கு மத்திய புலனாய்வு நிறுவனமான சிபிஐ முயற்சி செய்து வருவதாக திடுக்கிடும் தகவல்கள் எழுந்துள்ளன.இந்தியா போன்ற, வளர்ந்து வரும் நாடுகளில், கல்வி மிகவும் பின் தங்கிய நிலையில் உள்ளது. மேலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாட்டின் கல்வி வளர்ச்சியை தடுக்க சிபிஐ சதி ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/10/post7094.html",
            publishDate:"May 10, 2010",
            summary:$sce.trustAsHtml("நாட்டின் கல்வி வளர்ச்சியை தடுப்பதற்கு மத்திய புலனாய்வு நிறுவனமான சிபிஐ முயற்சி செய்து வருவதாக திடுக்கிடும் தகவல்கள் எழுந்துள்ளன.இந்தியா போன்ற, வளர்ந்து வரும் நாடுகளில், கல்வி மிகவும் பின் தங்கிய நிலையில் உள்ளது. மேலும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பேராசைக் காரனடா பார்ப்பான்'),
            thumbnail:'/images/7519/N-2520Srinivasan222-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/09/post7519.html",
            publishDate:"May 9, 2010",
            summary:$sce.trustAsHtml("பேராசைக் காரனடா பார்ப்பான் &#8211; ஆனால்பெரியதுரை என்னினுடல் வேர்ப்பான்யாரானாலும் கொடுமை இழைப்பான் &#8211; துரைஇம்மென்றால் நாய்போல உழைப்பான்.என்று பாரதி சொன்னது எத்தனை சத்தியமான வார்த்தைகள் ? இந்தப் பதிவு எந்த பார்ப்பானைப் பற்றித் தெரியுமா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பேராசைக் காரனடா பார்ப்பான்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/09/post7095.html",
            publishDate:"May 9, 2010",
            summary:$sce.trustAsHtml("பேராசைக் காரனடா பார்ப்பான் &#8211; ஆனால்பெரியதுரை என்னினுடல் வேர்ப்பான்யாரானாலும் கொடுமை இழைப்பான் &#8211; துரைஇம்மென்றால் நாய்போல உழைப்பான்.என்று பாரதி சொன்னது எத்தனை சத்தியமான வார்த்தைகள் ? இந்தப் பதிவு எந்த பார்ப்பானைப் பற்றித் தெரியுமா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மானங்கெட்ட ராசா ?'),
            thumbnail:'/images/7520/a_raja_ye_20081224-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/08/post7520.html",
            publishDate:"May 8, 2010",
            summary:$sce.trustAsHtml("மீண்டும், ஸ்பெக்ட்ரம் என்னும் பூதம், ராசாவையும், திமுகவையும், பிடித்து ஆட்டத் தொடங்கியிருக்கிறது. மத்திய புலனாய்வு நிறுவனம், சி.பி.ஐ, தொலைத்தொடர்பு அலுவலகத்தையும், இது தொடர்பாக மேலும் பல்வேறு அலுவலகங்களிலும் சோதனை நடத்தியிருக்கிறது. இச் சோதனைகள், ஆ.ராசா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மானங்கெட்ட ராசா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/08/post7096.html",
            publishDate:"May 8, 2010",
            summary:$sce.trustAsHtml("மீண்டும், ஸ்பெக்ட்ரம் என்னும் பூதம், ராசாவையும், திமுகவையும், பிடித்து ஆட்டத் தொடங்கியிருக்கிறது. மத்திய புலனாய்வு நிறுவனம், சி.பி.ஐ, தொலைத்தொடர்பு அலுவலகத்தையும், இது தொடர்பாக மேலும் பல்வேறு அலுவலகங்களிலும் சோதனை நடத்தியிருக்கிறது. இச் சோதனைகள், ஆ.ராசா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரும்புக் கோட்டை திரைப்பட விமர்சனம்'),
            thumbnail:'/images/7521/44-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/07/post7521.html",
            publishDate:"May 7, 2010",
            summary:$sce.trustAsHtml("அறிவாலயம் ப்ரொடக்ஷன்ஸ் சார்பில் புதிதாக வெளி வந்திருக்கும் திரைப்படம்தான் இரும்புக் கோட்டை கிழட்டுச் சிங்கம் படத்தின் தலைப்பிற்கேற்றார்போல், கதாநாயகன் சிறு வயது தொடங்கி, தள்ளாத வயது வரை, எவ்வளவு வயதானாலும் விடாப்பிடியாக நான்தான் கதாநாயகனாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரும்புக் கோட்டை திரைப்பட விமர்சனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/07/post7097.html",
            publishDate:"May 7, 2010",
            summary:$sce.trustAsHtml("அறிவாலயம் ப்ரொடக்ஷன்ஸ் சார்பில் புதிதாக வெளி வந்திருக்கும் திரைப்படம்தான் இரும்புக் கோட்டை கிழட்டுச் சிங்கம் படத்தின் தலைப்பிற்கேற்றார்போல், கதாநாயகன் சிறு வயது தொடங்கி, தள்ளாத வயது வரை, எவ்வளவு வயதானாலும் விடாப்பிடியாக நான்தான் கதாநாயகனாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாடாளுமன்றத்தில் நடந்த சூப்பர் விவாதம்&#8230;'),
            thumbnail:'/images/7522/Parliament-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/03/post7522.html",
            publishDate:"May 3, 2010",
            summary:$sce.trustAsHtml("2006-2007 அன்றைய கணக்குப்படி மக்கள் பிரச்னைகள் பற்றி பேசி, விவாதம் நடத்தி மக்களுக்கு ’நல்லதை’ மட்டுமே செய்ய வேண்டும் என்ற நோக்கத்தோடு நடத்தப்பட்டு வரும் நாடாளுமன்றத்தை நடத்த ஒரு நிமிடத்துக்கு ஆகும் செலவு எவ்வளவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நாடாளுமன்றத்தில் நடந்த சூப்பர் விவாதம்&#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/03/post7098.html",
            publishDate:"May 3, 2010",
            summary:$sce.trustAsHtml("2006-2007 அன்றைய கணக்குப்படி மக்கள் பிரச்னைகள் பற்றி பேசி, விவாதம் நடத்தி மக்களுக்கு ’நல்லதை’ மட்டுமே செய்ய வேண்டும் என்ற நோக்கத்தோடு நடத்தப்பட்டு வரும் நாடாளுமன்றத்தை நடத்த ஒரு நிமிடத்துக்கு ஆகும் செலவு எவ்வளவு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டெல்லியில் கருணாநிதி சோனியா சந்திப்பு.  நடந்தது என்ன ?'),
            thumbnail:'/images/7523/INDIA_-_SRI_LANKA_-F-_0518_-_Sonia_Gandhi_e_Karunanidhi-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/02/post7523.html",
            publishDate:"May 2, 2010",
            summary:$sce.trustAsHtml("(கருணாநிதி இன்று டெல்லி சென்று, சோனியா, மற்றும் மன்மோகன் சிங்குடன், சிறப்பு பேச்சு வார்த்தை நடத்தினார். அப்பேச்சு வார்த்தையில் நடந்தது என்ன என்று சவுக்கு புலனாய்வு செய்ததில், கிடைத்த தகவல்கள், சவுக்கு வாசகர்களுக்கு)கருணாநிதி வணக்கம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('டெல்லியில் கருணாநிதி சோனியா சந்திப்பு.  நடந்தது என்ன ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/02/post7099.html",
            publishDate:"May 2, 2010",
            summary:$sce.trustAsHtml("(கருணாநிதி இன்று டெல்லி சென்று, சோனியா, மற்றும் மன்மோகன் சிங்குடன், சிறப்பு பேச்சு வார்த்தை நடத்தினார். அப்பேச்சு வார்த்தையில் நடந்தது என்ன என்று சவுக்கு புலனாய்வு செய்ததில், கிடைத்த தகவல்கள், சவுக்கு வாசகர்களுக்கு)கருணாநிதி வணக்கம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைவா வா…. தலைமையேற்க வா… தமிழகம் காக்க வா…'),
            thumbnail:'/images/7524/2005042806200401-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/05/01/post7524.html",
            publishDate:"May 1, 2010",
            summary:$sce.trustAsHtml("என் அன்புத் தலைவா. தமிழ்நாட்டை உய்விக்க உன்னை விட்டால் ஆளில்லை என்பதால்தான் உனக்கு இந்த அழைப்பு. இன்று தமிழ்நாடு இருக்கும் நிலையில் யாருடைய உயிருக்கும் பாதுகாப்பு இல்லாத, யாருடைய கருத்தையும் வெளிப்படையாக கூற இயலாத,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தலைவா வா…. தலைமையேற்க வா… தமிழகம் காக்க வா…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/05/01/post7100.html",
            publishDate:"May 1, 2010",
            summary:$sce.trustAsHtml("என் அன்புத் தலைவா. தமிழ்நாட்டை உய்விக்க உன்னை விட்டால் ஆளில்லை என்பதால்தான் உனக்கு இந்த அழைப்பு. இன்று தமிழ்நாடு இருக்கும் நிலையில் யாருடைய உயிருக்கும் பாதுகாப்பு இல்லாத, யாருடைய கருத்தையும் வெளிப்படையாக கூற இயலாத,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உளவுத் துறை ஐஜி ஜாபர் சேட் என்னை எதிரியாகப் பார்க்கிறார் ஏ.கே.விஸ்வநாதன்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/29/post7525.html",
            publishDate:"Apr 29, 2010",
            summary:$sce.trustAsHtml("உளவுத் துறை ஐஜி ஜாபர் சேட், எனக்கு எதிரி. என் மீது பத்திரிக்கைகளில் தவறான செய்திகள் வருவதற்கு அவர்தான் காரணம் என்று ஐஜி ஏ.கே.விஸ்வநாதன், சென்னை உயர்நீதிமன்றத்தில் தாக்கல் செய்துள்ள மனுவில் கூறியுள்ளார்.கடந்த ஆகஸ்ட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உளவுத் துறை ஐஜி ஜாபர் சேட் என்னை எதிரியாகப் பார்க்கிறார் ஏ.கே.விஸ்வநாதன்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/29/post7101.html",
            publishDate:"Apr 29, 2010",
            summary:$sce.trustAsHtml("உளவுத் துறை ஐஜி ஜாபர் சேட், எனக்கு எதிரி. என் மீது பத்திரிக்கைகளில் தவறான செய்திகள் வருவதற்கு அவர்தான் காரணம் என்று ஐஜி ஏ.கே.விஸ்வநாதன், சென்னை உயர்நீதிமன்றத்தில் தாக்கல் செய்துள்ள மனுவில் கூறியுள்ளார்.கடந்த ஆகஸ்ட்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கமிஷனர் ராஜேந்திரன் மீது வழக்கு பதிவு.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/27/post7526.html",
            publishDate:"Apr 27, 2010",
            summary:$sce.trustAsHtml("சென்னை மாநகர காவல்துறை கமிஷனர் ராஜேந்திரன் மீது வழக்கு பதிவு செய்யப் பட்டிருப்பதாக திடுக்கிடும் தகவல் எழுந்துள்ளது. நேற்று சென்னை உயர்நீதிமன்றத்தில் நடந்த அம்பேத்கர் சிலை திறப்பு விழாவில், திமுகவினர் வந்து அமைதியான முறையில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கமிஷனர் ராஜேந்திரன் மீது வழக்கு பதிவு.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/27/post7102.html",
            publishDate:"Apr 27, 2010",
            summary:$sce.trustAsHtml("சென்னை மாநகர காவல்துறை கமிஷனர் ராஜேந்திரன் மீது வழக்கு பதிவு செய்யப் பட்டிருப்பதாக திடுக்கிடும் தகவல் எழுந்துள்ளது. நேற்று சென்னை உயர்நீதிமன்றத்தில் நடந்த அம்பேத்கர் சிலை திறப்பு விழாவில், திமுகவினர் வந்து அமைதியான முறையில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினி செல்போன்.  நடந்தது என்ன ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/26/post7527.html",
            publishDate:"Apr 26, 2010",
            summary:$sce.trustAsHtml("கடந்த 20.04.2010 அன்று பத்திரிக்கைகளில் வேலு£ர் பெண்கள் சிறையில் 19 ஆண்டுகளாக இருந்து வரும், நளினியின் அறையில் செல்போன் கைப்பற்றப் பட்டதாக பத்திரிக்கைகளில் தகவல் வெளிவந்தது. இதையடுத்து, தமிழக சட்டப் பேரவையிலும் இச்சம்பவம் விவாதிக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினி செல்போன்.  நடந்தது என்ன ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/26/post7103.html",
            publishDate:"Apr 26, 2010",
            summary:$sce.trustAsHtml("கடந்த 20.04.2010 அன்று பத்திரிக்கைகளில் வேலு£ர் பெண்கள் சிறையில் 19 ஆண்டுகளாக இருந்து வரும், நளினியின் அறையில் செல்போன் கைப்பற்றப் பட்டதாக பத்திரிக்கைகளில் தகவல் வெளிவந்தது. இதையடுத்து, தமிழக சட்டப் பேரவையிலும் இச்சம்பவம் விவாதிக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உளவுத்துறை ஐஜி ஜாபர்சேட்டுக்கு பகிரங்கக் கடிதம்'),
            thumbnail:'/images/7528/19965_311284978089_655808089_3404716_7442637_n-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/04/25/post7528.html",
            publishDate:"Apr 25, 2010",
            summary:$sce.trustAsHtml("“ஆளெல்லாம் ஸ்டைலா சினிமா ஆக்டர் மாதிரி இருக்காரு.. ஆனா புத்தி சரியில்லையே.. “அன்பார்ந்த திரு.ஜாபர்சேட் அவர்களே,வழக்கமாக அரசியல்வாதிகளுக்குத்தான் பகிரங்கக் கடிதம் எழுதுவார்கள், என்ன இது அதிகாரிக்கு, அதுவும் காவல்துறை அதிகாரிக்கு பகிரங்கக் கடிதமா என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உளவுத்துறை ஐஜி ஜாபர்சேட்டுக்கு பகிரங்கக் கடிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/25/post7104.html",
            publishDate:"Apr 25, 2010",
            summary:$sce.trustAsHtml("“ஆளெல்லாம் ஸ்டைலா சினிமா ஆக்டர் மாதிரி இருக்காரு.. ஆனா புத்தி சரியில்லையே.. “அன்பார்ந்த திரு.ஜாபர்சேட் அவர்களே,வழக்கமாக அரசியல்வாதிகளுக்குத்தான் பகிரங்கக் கடிதம் எழுதுவார்கள், என்ன இது அதிகாரிக்கு, அதுவும் காவல்துறை அதிகாரிக்கு பகிரங்கக் கடிதமா என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யானும் இட்ட தீ மூள்கமூள்கவே'),
            thumbnail:'/images/7529/IMG_5603-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/04/17/post7529.html",
            publishDate:"Apr 17, 2010",
            summary:$sce.trustAsHtml("முன்னை இட்ட தீ முப்புறத்திலேபின்னை இட்ட தீ தென்இலங்கையில்அன்னை இட்ட தீ அடிவயிற்றிலேயானும் இட்ட தீ மூள்கமூள்கவேகருணாநிதியின் துரோகங்களுக்கு அளவேயில்லாமல் நாளுக்கு நாள் வளர்ந்து கொண்டே இருக்கிறது. உலகத் தமிழர் வரலாற்றிலேயே, மிகப் பெரும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யானும் இட்ட தீ மூள்கமூள்கவே'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/17/post7105.html",
            publishDate:"Apr 17, 2010",
            summary:$sce.trustAsHtml("முன்னை இட்ட தீ முப்புறத்திலேபின்னை இட்ட தீ தென்இலங்கையில்அன்னை இட்ட தீ அடிவயிற்றிலேயானும் இட்ட தீ மூள்கமூள்கவேகருணாநிதியின் துரோகங்களுக்கு அளவேயில்லாமல் நாளுக்கு நாள் வளர்ந்து கொண்டே இருக்கிறது. உலகத் தமிழர் வரலாற்றிலேயே, மிகப் பெரும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லஞ்ச ஒழிப்புத் துறையில் நூதன ஊழல்.  பகீர் குற்றச் சாட்டு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/14/post7530.html",
            publishDate:"Apr 14, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் பல்வேறு அரசு துறைகளில் உள்ள ஊழல்களைக் களையவும், லஞ்சம் வாங்கும் அரசு ஊழியர்கள் மீது நடவடிக்கை எடுக்கவும், முறைகேடுகளை கண்டறியவும் ஏற்படுத்தப் பட்ட லஞ்ச ஒழிப்புத் துறையிலேயே, நூதனமாக முறையில் ஊழல் நடைபெற்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லஞ்ச ஒழிப்புத் துறையில் நூதன ஊழல்.  பகீர் குற்றச் சாட்டு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/14/post7106.html",
            publishDate:"Apr 14, 2010",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் பல்வேறு அரசு துறைகளில் உள்ள ஊழல்களைக் களையவும், லஞ்சம் வாங்கும் அரசு ஊழியர்கள் மீது நடவடிக்கை எடுக்கவும், முறைகேடுகளை கண்டறியவும் ஏற்படுத்தப் பட்ட லஞ்ச ஒழிப்புத் துறையிலேயே, நூதனமாக முறையில் ஊழல் நடைபெற்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐஏஎஸ், ஐபிஎஸ் என்றால் கண்டு கொள்ளாத லஞ்ச ஒழிப்புத் துறை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/13/post7531.html",
            publishDate:"Apr 13, 2010",
            summary:$sce.trustAsHtml("லஞ்ச ஒழிப்புத் துறை லஞ்சம் வாங்கும் அரசு ஊழியர்களை மறைந்திருந்து, பாய்ந்து சென்று கையும் களவுமாக கைது செய்தது என்று செய்திகளில் படித்திருப்பீர்கள். ஆனால், இப்படி கையும் களவுமாக கைது செய்யப் படுபவர்களில், கீழ்மட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஐஏஎஸ், ஐபிஎஸ் என்றால் கண்டு கொள்ளாத லஞ்ச ஒழிப்புத் துறை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/13/post7107.html",
            publishDate:"Apr 13, 2010",
            summary:$sce.trustAsHtml("லஞ்ச ஒழிப்புத் துறை லஞ்சம் வாங்கும் அரசு ஊழியர்களை மறைந்திருந்து, பாய்ந்து சென்று கையும் களவுமாக கைது செய்தது என்று செய்திகளில் படித்திருப்பீர்கள். ஆனால், இப்படி கையும் களவுமாக கைது செய்யப் படுபவர்களில், கீழ்மட்ட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காங்கிரஸ் கட்சியை விஞ்சும் தமிழக காவல்துறை'),
            thumbnail:'/images/7532/police-final-sub_02-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/04/11/post7532.html",
            publishDate:"Apr 11, 2010",
            summary:$sce.trustAsHtml("தமிழக காவல்துறைக்கும் காங்கிரஸ் கட்சிக்கும் என்ன சம்பந்தம் இருக்கிறது என்று கேட்கிறீர்களா ? இருக்கிறது. கோஷ்டிகளை வளர்த்து மோதிக்கொள்வதில், தமிழக காங்கிரஸ் கட்சியை விஞ்ச ஒருவரும் கிடையாது. தற்போது காங்கிரஸ் கட்சியையும் விஞ்சும் வகையில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காங்கிரஸ் கட்சியை விஞ்சும் தமிழக காவல்துறை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/11/post7108.html",
            publishDate:"Apr 11, 2010",
            summary:$sce.trustAsHtml("தமிழக காவல்துறைக்கும் காங்கிரஸ் கட்சிக்கும் என்ன சம்பந்தம் இருக்கிறது என்று கேட்கிறீர்களா ? இருக்கிறது. கோஷ்டிகளை வளர்த்து மோதிக்கொள்வதில், தமிழக காங்கிரஸ் கட்சியை விஞ்ச ஒருவரும் கிடையாது. தற்போது காங்கிரஸ் கட்சியையும் விஞ்சும் வகையில்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடுதலை கேட்பது நளினியின் உரிமை, சலுகை அல்ல:  கவிஞர் தாமரை'),
            thumbnail:'/images/7533/nalini_680-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/04/05/post7533.html",
            publishDate:"Apr 5, 2010",
            summary:$sce.trustAsHtml("நளினி விடுதலை, அரசியல் சிக்கலும், சட்டச் சிக்கலும் என்ற தலைப்பில், நளினி விடுதலையை பல்வேறு கோணங்களில் அலசும் ஒரு கருத்தரங்கை, கீற்று டாட் காம் இணைய தளம் ஏற்பாடு செய்திருந்தது. இக்கருத்தரங்கில் எழுத்தாளர் பூங்குழலி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விடுதலை கேட்பது நளினியின் உரிமை, சலுகை அல்ல:  கவிஞர் தாமரை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/05/post7109.html",
            publishDate:"Apr 5, 2010",
            summary:$sce.trustAsHtml("நளினி விடுதலை, அரசியல் சிக்கலும், சட்டச் சிக்கலும் என்ற தலைப்பில், நளினி விடுதலையை பல்வேறு கோணங்களில் அலசும் ஒரு கருத்தரங்கை, கீற்று டாட் காம் இணைய தளம் ஏற்பாடு செய்திருந்தது. இக்கருத்தரங்கில் எழுத்தாளர் பூங்குழலி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினியால் கருணாநிதி உயிருக்கு ஆபத்து ?'),
            thumbnail:'/images/7534/MK_5187f-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/04/03/post7534.html",
            publishDate:"Apr 3, 2010",
            summary:$sce.trustAsHtml("என்ன இது ? பைத்தியக்காரத்தனமாக இருக்கிறதே என்று தோன்றுகிறதா ? பைத்தியக்காரத்தனமாக தோன்றினாலும், இவ்வாறுதான் கருணாநிதி தலைமையிலான அரசு, நளினி முன் விடுதலை தொடர்பாக சென்னை உயர்நீதிமன்றத்தில் தாக்கல் செய்த அரசாணையில் குறிப்பிட்டுள்ளது.19 ஆண்டுகளாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினியால் கருணாநிதி உயிருக்கு ஆபத்து ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/03/post7110.html",
            publishDate:"Apr 3, 2010",
            summary:$sce.trustAsHtml("என்ன இது ? பைத்தியக்காரத்தனமாக இருக்கிறதே என்று தோன்றுகிறதா ? பைத்தியக்காரத்தனமாக தோன்றினாலும், இவ்வாறுதான் கருணாநிதி தலைமையிலான அரசு, நளினி முன் விடுதலை தொடர்பாக சென்னை உயர்நீதிமன்றத்தில் தாக்கல் செய்த அரசாணையில் குறிப்பிட்டுள்ளது.19 ஆண்டுகளாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காலம் 2012.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/01/post7535.html",
            publishDate:"Apr 1, 2010",
            summary:$sce.trustAsHtml("2011ல் நடந்த சட்டமன்றத் தேர்தலில் திமுக தோற்று, அதிமுக ஆட்சிப் பொறுப்பில் இருக்கிறது. காங்கிரஸ் அதிமுக கூட்டணி. விடுதலைப் புலிகள் தலைவர் பிரபாகரன் மீண்டும் வெளி உலகிற்கு வந்து புலிகள் இயக்கத்துக்கு தமிழகத்தில் எண்பதுகளின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('காலம் 2012.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/04/01/post7111.html",
            publishDate:"Apr 1, 2010",
            summary:$sce.trustAsHtml("2011ல் நடந்த சட்டமன்றத் தேர்தலில் திமுக தோற்று, அதிமுக ஆட்சிப் பொறுப்பில் இருக்கிறது. காங்கிரஸ் அதிமுக கூட்டணி. விடுதலைப் புலிகள் தலைவர் பிரபாகரன் மீண்டும் வெளி உலகிற்கு வந்து புலிகள் இயக்கத்துக்கு தமிழகத்தில் எண்பதுகளின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் வசந்தபாலன்.'),
            thumbnail:'/images/7536/angadi-theru-tamil-movie-3-765886-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/28/post7536.html",
            publishDate:"Mar 28, 2010",
            summary:$sce.trustAsHtml("ஒரு படைப்பு என்பது என்ன ? பார்வை யாளனையோ, வாசகனையோ, சிந்திக்கத் தூண்டி, அவன் மனதில் என்ன விதமான ஒரு மாற்றத்தை ஏற்படுத்த வேண்டும் ?நாம் எல்லோரும், சரவணா ஸ்டோர்சுக்கு பல முறை சென்றிருப்போம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வாழ்த்துக்கள் வசந்தபாலன்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/28/post7112.html",
            publishDate:"Mar 28, 2010",
            summary:$sce.trustAsHtml("ஒரு படைப்பு என்பது என்ன ? பார்வை யாளனையோ, வாசகனையோ, சிந்திக்கத் தூண்டி, அவன் மனதில் என்ன விதமான ஒரு மாற்றத்தை ஏற்படுத்த வேண்டும் ?நாம் எல்லோரும், சரவணா ஸ்டோர்சுக்கு பல முறை சென்றிருப்போம்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அல்லி ராணி அடிமையும், தள்ளு வண்டி தனயனும்…'),
            thumbnail:'/images/7537/KARUNANIDHI_8799e-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/22/post7537.html",
            publishDate:"Mar 22, 2010",
            summary:$sce.trustAsHtml("இன்று இந்தியாவை ஆண்டு கொண்டிருக்கும் அல்லி ராணி யார் என்பது உங்கள் அனைவருக்கும் தெரியும். இந்த அல்லி ராணியின் அடிமையாகவும், பிரதிநிதியாகவும் இன்று பிரதமராக இருக்கும் மன்மோகன் சிங் பிரதமராக இருக்கும் தனது நாட்களை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அல்லி ராணி அடிமையும், தள்ளு வண்டி தனயனும்…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/22/post7113.html",
            publishDate:"Mar 22, 2010",
            summary:$sce.trustAsHtml("இன்று இந்தியாவை ஆண்டு கொண்டிருக்கும் அல்லி ராணி யார் என்பது உங்கள் அனைவருக்கும் தெரியும். இந்த அல்லி ராணியின் அடிமையாகவும், பிரதிநிதியாகவும் இன்று பிரதமராக இருக்கும் மன்மோகன் சிங் பிரதமராக இருக்கும் தனது நாட்களை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி பேசுவதை கேளுங்கள் முட்டாள்களே… …'),
            thumbnail:'/images/7538/3-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/16/post7538.html",
            publishDate:"Mar 16, 2010",
            summary:$sce.trustAsHtml("கருணாநிதி பேசுவதையும், கடிதமாகவும், கேள்வி பதில் அறிக்கைகளாகவும், அவராகவே இலக்கியம் என்று கருதிக் கொண்டு எழுதும் கவிதைகளாகவும் கொட்டப்படும் விஷமத்தனமான உளறல்களை நீங்கள் விரும்பினாலும் விரும்பாவிட்டாலும், தொலைக்காட்சி ஊடகங்களும், செய்தி ஊடகங்களும், உங்கள் முகத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி பேசுவதை கேளுங்கள் முட்டாள்களே… …'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/16/post7114.html",
            publishDate:"Mar 16, 2010",
            summary:$sce.trustAsHtml("கருணாநிதி பேசுவதையும், கடிதமாகவும், கேள்வி பதில் அறிக்கைகளாகவும், அவராகவே இலக்கியம் என்று கருதிக் கொண்டு எழுதும் கவிதைகளாகவும் கொட்டப்படும் விஷமத்தனமான உளறல்களை நீங்கள் விரும்பினாலும் விரும்பாவிட்டாலும், தொலைக்காட்சி ஊடகங்களும், செய்தி ஊடகங்களும், உங்கள் முகத்தில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குழந்தைக்கு லாலிபாப்.  கிழவனுக்கு ?'),
            thumbnail:'/images/7539/karunanidhi_20081124-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/13/post7539.html",
            publishDate:"Mar 13, 2010",
            summary:$sce.trustAsHtml("வயது ஆக ஆக, மூளையின் செல் வளர்ச்சி அறவே நின்று போய் முதியவர்கள் குழந்தைகளைப் போல நடந்து கொள்வார்கள் என்பது அறிவியல் உண்மை. இது போல, முதிர்ந்த, தள்ளாத வயதில் இருக்கும் ஒருவரிடம், ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('குழந்தைக்கு லாலிபாப்.  கிழவனுக்கு ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/13/post7115.html",
            publishDate:"Mar 13, 2010",
            summary:$sce.trustAsHtml("வயது ஆக ஆக, மூளையின் செல் வளர்ச்சி அறவே நின்று போய் முதியவர்கள் குழந்தைகளைப் போல நடந்து கொள்வார்கள் என்பது அறிவியல் உண்மை. இது போல, முதிர்ந்த, தள்ளாத வயதில் இருக்கும் ஒருவரிடம், ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எனக்கு வேற வழி தெரியல….'),
            thumbnail:'/images/7541/Kvinde9-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/07/post7541.html",
            publishDate:"Mar 7, 2010",
            summary:$sce.trustAsHtml("எனக்கு வேற வழி தெரியல…. என்ன பண்றது சொல்லுங்க. நான் எப்பவோ என் கதைய முடிச்சுக்கிட்டிருக்கணும். இந்த அளவுக்கு சந்தி சிரிக்கணும்னு என் தலையெழுத்து. வெளிய தலக்காட்ட முடியல.என் அப்பாதான் எல்லாத்துக்கும் காரணம்… …..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எனக்கு வேற வழி தெரியல….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/07/post7117.html",
            publishDate:"Mar 7, 2010",
            summary:$sce.trustAsHtml("எனக்கு வேற வழி தெரியல…. என்ன பண்றது சொல்லுங்க. நான் எப்பவோ என் கதைய முடிச்சுக்கிட்டிருக்கணும். இந்த அளவுக்கு சந்தி சிரிக்கணும்னு என் தலையெழுத்து. வெளிய தலக்காட்ட முடியல.என் அப்பாதான் எல்லாத்துக்கும் காரணம்… …..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நித்யானந்தா&#8230; சவுக்கின் ப்ரத்யேக ஆல்பம்'),
            thumbnail:'/images/7542/9-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/04/post7542.html",
            publishDate:"Mar 4, 2010",
            summary:$sce.trustAsHtml("சவுக்கு Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நித்யானந்தா&#8230; சவுக்கின் ப்ரத்யேக ஆல்பம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/04/post7118.html",
            publishDate:"Mar 4, 2010",
            summary:$sce.trustAsHtml("சவுக்கு Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on RedditClick to share on PinterestLike..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கதவைத் திறந்தாலும், காற்று வராது'),
            thumbnail:'/images/7543/aaa-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/03/post7543.html",
            publishDate:"Mar 3, 2010",
            summary:$sce.trustAsHtml("கடந்த வாரமும், இந்த வாரமும் நடந்த சம்பவங்கள் மிக முக்கியமானவை. முதல் சம்பவம் சிதம்பரம் அண்ணாமலை பல்கலைக்கழகத்தில் காவல்துறையினரின் அதீத தாக்குதலால் பலியான மூன்று மாணவர்கள். இரண்டாவது சம்பவம், சென்னை காமராஜர் அரங்கத்தில் நடந்த,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கதவைத் திறந்தாலும், காற்று வராது'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/03/post7119.html",
            publishDate:"Mar 3, 2010",
            summary:$sce.trustAsHtml("கடந்த வாரமும், இந்த வாரமும் நடந்த சம்பவங்கள் மிக முக்கியமானவை. முதல் சம்பவம் சிதம்பரம் அண்ணாமலை பல்கலைக்கழகத்தில் காவல்துறையினரின் அதீத தாக்குதலால் பலியான மூன்று மாணவர்கள். இரண்டாவது சம்பவம், சென்னை காமராஜர் அரங்கத்தில் நடந்த,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவர் பெயர் ஞானப்பிரகாசம்'),
            thumbnail:'/images/7544/Image0122-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/03/02/post7544.html",
            publishDate:"Mar 2, 2010",
            summary:$sce.trustAsHtml("இந்த ஞானப்பிரகாசம் போன்ற நபர்களை நம்மில் பல பேர் சட்டை செய்திருக்க மாட்டோம், இந்த ஞானப்பிரகாசம் கல்லக்குடியில் ரயில் வராத தண்டவாளத்தில் தலைவைத்துப் படுத்தவரில்லை. தமிழாய்ந்த அறிஞர் இல்லை. பல கோடிகளுக்கு அதிபதியும் இல்லை...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அவர் பெயர் ஞானப்பிரகாசம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/03/02/post7120.html",
            publishDate:"Mar 2, 2010",
            summary:$sce.trustAsHtml("இந்த ஞானப்பிரகாசம் போன்ற நபர்களை நம்மில் பல பேர் சட்டை செய்திருக்க மாட்டோம், இந்த ஞானப்பிரகாசம் கல்லக்குடியில் ரயில் வராத தண்டவாளத்தில் தலைவைத்துப் படுத்தவரில்லை. தமிழாய்ந்த அறிஞர் இல்லை. பல கோடிகளுக்கு அதிபதியும் இல்லை...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாசத் தலைவனுக்கு பாராட்டு விழா'),
            thumbnail:'/images/7545/CM150210_113-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/02/27/post7545.html",
            publishDate:"Feb 27, 2010",
            summary:$sce.trustAsHtml("ஏறக்குறைய அனைத்து தலைப்புகளிலும் கருணாநிதிக்கு பாராட்டு விழா நடத்தி முடித்து விட்டதால் இப்பொழுது கருணாநிதியை எதற்காக பாராட்டுவது என்று “கருணாநிதியை பாராட்டும் துறையின்“ அமைச்சர் ஜெகதரட்சகனும், துணை அமைச்சர் துரை முருகனும் உட்கார்ந்து யோசிக்கின்றனர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாசத் தலைவனுக்கு பாராட்டு விழா'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/27/post7121.html",
            publishDate:"Feb 27, 2010",
            summary:$sce.trustAsHtml("ஏறக்குறைய அனைத்து தலைப்புகளிலும் கருணாநிதிக்கு பாராட்டு விழா நடத்தி முடித்து விட்டதால் இப்பொழுது கருணாநிதியை எதற்காக பாராட்டுவது என்று “கருணாநிதியை பாராட்டும் துறையின்“ அமைச்சர் ஜெகதரட்சகனும், துணை அமைச்சர் துரை முருகனும் உட்கார்ந்து யோசிக்கின்றனர்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('W.R.வரதராஜனை கொலை செய்த சிபிஎம்.'),
            thumbnail:'/images/7546/4199888090_959cd42628-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/02/24/post7546.html",
            publishDate:"Feb 24, 2010",
            summary:$sce.trustAsHtml("இருந்தாலும் மறைந்தாலும் பேர் சொல்ல வேண்டும்இவர் போல யாரென்று ஊர் சொல்ல வேண்டும்.அது 1991ம் ஆண்டு. மே மாத இறுதி. பதின் பருவ வயதில் இருந்த எங்களுக்கு சைக்கிளை எடுத்துக் கொண்டு காலைக் காட்சி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('W.R.வரதராஜனை கொலை செய்த சிபிஎம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/24/post7122.html",
            publishDate:"Feb 24, 2010",
            summary:$sce.trustAsHtml("இருந்தாலும் மறைந்தாலும் பேர் சொல்ல வேண்டும்இவர் போல யாரென்று ஊர் சொல்ல வேண்டும்.அது 1991ம் ஆண்டு. மே மாத இறுதி. பதின் பருவ வயதில் இருந்த எங்களுக்கு சைக்கிளை எடுத்துக் கொண்டு காலைக் காட்சி,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு முகாமில் நடந்தது என்ன ? கண்ணீர் வாக்குமூலம்'),
            thumbnail:'/images/7547/letter-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/02/07/post7547.html",
            publishDate:"Feb 7, 2010",
            summary:$sce.trustAsHtml("கடிதத்தை பெரிதாக்க க்ளிக் செய்யவும் முதல் பக்கம் இரண்டாம் பக்கம் மூன்றாம் பக்கம் நான்காம் பக்கம் ஐந்தாம் பக்கம் ஆறாம் பக்கம் ஏழாம் பக்கம் படித்தவர்கள் தங்கள் நண்பர்களுக்கு அருள் கூர்ந்து அனுப்புங்கள். கருணாநிதியின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு முகாமில் நடந்தது என்ன ? கண்ணீர் வாக்குமூலம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/07/post7123.html",
            publishDate:"Feb 7, 2010",
            summary:$sce.trustAsHtml("கடிதத்தை பெரிதாக்க க்ளிக் செய்யவும் முதல் பக்கம் இரண்டாம் பக்கம் மூன்றாம் பக்கம் நான்காம் பக்கம் ஐந்தாம் பக்கம் ஆறாம் பக்கம் ஏழாம் பக்கம் படித்தவர்கள் தங்கள் நண்பர்களுக்கு அருள் கூர்ந்து அனுப்புங்கள். கருணாநிதியின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுப்ரமணியன் சுவாமிக்கு சென்னை உயர்நீதிமன்றம் கடும் கண்டனம்'),
            thumbnail:'/images/7548/MadrasHighCourtManuNeedhiCholanStatue-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/02/05/post7548.html",
            publishDate:"Feb 5, 2010",
            summary:$sce.trustAsHtml("டாக்டர் சுப்ரமணியன் சுவாமிக்கு சென்னை உயர்நீதிமன்றம் கடும் கண்டனத்தை தெரிவித்தது. ராஜீவ் கொலை வழக்கில் தண்டனை பெற்று 18 ஆண்டுகளாக சிறையில் வாடும் நளினி 7 வருடம் முடித்தவர்களை விடுதலை செய்துள்ளதால், தன்னையும் முன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சுப்ரமணியன் சுவாமிக்கு சென்னை உயர்நீதிமன்றம் கடும் கண்டனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/05/post7124.html",
            publishDate:"Feb 5, 2010",
            summary:$sce.trustAsHtml("டாக்டர் சுப்ரமணியன் சுவாமிக்கு சென்னை உயர்நீதிமன்றம் கடும் கண்டனத்தை தெரிவித்தது. ராஜீவ் கொலை வழக்கில் தண்டனை பெற்று 18 ஆண்டுகளாக சிறையில் வாடும் நளினி 7 வருடம் முடித்தவர்களை விடுதலை செய்துள்ளதால், தன்னையும் முன்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு அகதிகள் முகாம் தாக்குதலைக் கண்டித்து ஆர்ப்பாட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/04/post7550.html",
            publishDate:"Feb 4, 2010",
            summary:$sce.trustAsHtml("03.02.2009 அன்று இரவு செங்கல்பட்டு அகதிகளுக்கான சிறப்பு முகாமில் நடந்த காவல்துறையின் காட்டுமிராண்டித்தனமான தாக்குதலைக் கண்டித்து மாபெரும் கண்டன ஆர்ப்பாட்டம் 04.02.2010 அன்று மாலை 4 மணிக்கு, சென்னை மெமோரியல் ஹால் அருகே நடைபெற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டில் தமிழீழ அகதிகளை தாக்கிய காட்டுமிராண்டி காவல்துறையை கண்டித்து ஆர்ப்பாட்டம்'),
            thumbnail:'/images/7549/IMG_7530-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/02/04/post7549.html",
            publishDate:"Feb 4, 2010",
            summary:$sce.trustAsHtml("செங்கல்பட்டு அகதிகளுக்கான சிறப்பு முகாமில், கருணாநிதியின் கைக்கூலி காவல்துறையால் நடத்தப் பட்ட கொடிய தாக்குதலைக் கண்டித்து இன்று (04.02.2010) மாலை சென்னை மெமோரியல் ஹால் அருகே இன்று இதழாளர் அய்யநாதன் தலைமையில் கண்டன ஆர்ப்பாட்டம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டு அகதிகள் முகாம் தாக்குதலைக் கண்டித்து ஆர்ப்பாட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/04/post7126.html",
            publishDate:"Feb 4, 2010",
            summary:$sce.trustAsHtml("03.02.2009 அன்று இரவு செங்கல்பட்டு அகதிகளுக்கான சிறப்பு முகாமில் நடந்த காவல்துறையின் காட்டுமிராண்டித்தனமான தாக்குதலைக் கண்டித்து மாபெரும் கண்டன ஆர்ப்பாட்டம் 04.02.2010 அன்று மாலை 4 மணிக்கு, சென்னை மெமோரியல் ஹால் அருகே நடைபெற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('செங்கல்பட்டில் தமிழீழ அகதிகளை தாக்கிய காட்டுமிராண்டி காவல்துறையை கண்டித்து ஆர்ப்பாட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/04/post7125.html",
            publishDate:"Feb 4, 2010",
            summary:$sce.trustAsHtml("செங்கல்பட்டு அகதிகளுக்கான சிறப்பு முகாமில், கருணாநிதியின் கைக்கூலி காவல்துறையால் நடத்தப் பட்ட கொடிய தாக்குதலைக் கண்டித்து இன்று (04.02.2010) மாலை சென்னை மெமோரியல் ஹால் அருகே இன்று இதழாளர் அய்யநாதன் தலைமையில் கண்டன ஆர்ப்பாட்டம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழத் தமிழர்களே செத்து ஒழியுங்கள்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/03/post7551.html",
            publishDate:"Feb 3, 2010",
            summary:$sce.trustAsHtml("ஈழத்திலே சிங்களக் காடையர்கள் தந்த நெருக்கடிக்கும், குண்டு வீச்சுக்கும் அஞ்சி, தாய்த் தமிழகம் நம்மை வாரி அணைத்துக் கொள்ளும், வாஞ்சையோடு ஏந்திக் கொள்ளும் என்ற நம்பிக்கையில் எம் மண்ணில் கால் வைத்த ஈழத் தமிழர்களே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஈழத் தமிழர்களே செத்து ஒழியுங்கள்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/02/03/post7127.html",
            publishDate:"Feb 3, 2010",
            summary:$sce.trustAsHtml("ஈழத்திலே சிங்களக் காடையர்கள் தந்த நெருக்கடிக்கும், குண்டு வீச்சுக்கும் அஞ்சி, தாய்த் தமிழகம் நம்மை வாரி அணைத்துக் கொள்ளும், வாஞ்சையோடு ஏந்திக் கொள்ளும் என்ற நம்பிக்கையில் எம் மண்ணில் கால் வைத்த ஈழத் தமிழர்களே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரும்புக் கோட்டை திரைப்பட விமர்சனம்'),
            thumbnail:'/images/7552/44-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/30/post7552.html",
            publishDate:"Jan 30, 2010",
            summary:$sce.trustAsHtml("அறிவாலயம் ப்ரொடக்ஷன்ஸ் சார்பில் புதிதாக வெளி வந்திருக்கும் திரைப்படம்தான் இரும்புக் கோட்டை கிழட்டுச் சிங்கம். படத்தின் தலைப்பிற்கேற்றார்போல், கதாநாயகன் சிறு வயது தொடங்கி, தள்ளாத வயது வரை, எவ்வளவு வயதானாலும் விடாப்பிடியாக நான்தான் கதாநாயகனாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இரும்புக் கோட்டை திரைப்பட விமர்சனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/30/post7128.html",
            publishDate:"Jan 30, 2010",
            summary:$sce.trustAsHtml("அறிவாலயம் ப்ரொடக்ஷன்ஸ் சார்பில் புதிதாக வெளி வந்திருக்கும் திரைப்படம்தான் இரும்புக் கோட்டை கிழட்டுச் சிங்கம். படத்தின் தலைப்பிற்கேற்றார்போல், கதாநாயகன் சிறு வயது தொடங்கி, தள்ளாத வயது வரை, எவ்வளவு வயதானாலும் விடாப்பிடியாக நான்தான் கதாநாயகனாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிபிஐ வானத்தில் இருந்து குதித்து வந்ததா ?'),
            thumbnail:'/images/7553/untitled-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/27/post7553.html",
            publishDate:"Jan 27, 2010",
            summary:$sce.trustAsHtml("இப்போதைய திமுக எதிர்க்கட்சியாக இருந்த போது, சிபிஐ விசாரணை வேண்டும் என்று கோரிக்கை வைத்தது. அப்போது முதலமைச்சராக இருந்த செல்வி.ஜெ.ஜெயலலிதா, சட்டமன்றத்தில் “சிபிஐ என்ன வானத்தில் இருந்து குதித்து வந்ததா ? ஜெயலலிதா கேட்டது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிபிஐ வானத்தில் இருந்து குதித்து வந்ததா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/27/post7129.html",
            publishDate:"Jan 27, 2010",
            summary:$sce.trustAsHtml("இப்போதைய திமுக எதிர்க்கட்சியாக இருந்த போது, சிபிஐ விசாரணை வேண்டும் என்று கோரிக்கை வைத்தது. அப்போது முதலமைச்சராக இருந்த செல்வி.ஜெ.ஜெயலலிதா, சட்டமன்றத்தில் “சிபிஐ என்ன வானத்தில் இருந்து குதித்து வந்ததா ? ஜெயலலிதா கேட்டது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரிலையன்ஸ் இன்டஸ்ட்ரீஸ் லிமிடெட்டும் திமுக லிமிடெட்டும்'),
            thumbnail:'/images/7554/Dhirubhai_Ambani-150x150.gif',
            categories:['default',''],
            href:"/default/2010/01/25/post7554.html",
            publishDate:"Jan 25, 2010",
            summary:$sce.trustAsHtml("ரிலையன்ஸ் இன்டஸ்ட்ரீஸ் நிறுவனத்துக்கும் அரசியல் கட்சிக்கும் என்ன தொடர்பு என்ற வினாக்களை சற்றே நிறுத்தி வையுங்கள். என்ன தொடர்பு என்று விளக்கமாகவே பார்ப்போம்.ரிலையன்ஸ் இன்டஸ்ட்ரீஸ் நிறுவனம் இந்தியாவின் மிகப்பெரிய வர்த்தக நிறுவனம். திருக்குவளை முத்துவேல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ரிலையன்ஸ் இன்டஸ்ட்ரீஸ் லிமிடெட்டும் திமுக லிமிடெட்டும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/25/post7130.html",
            publishDate:"Jan 25, 2010",
            summary:$sce.trustAsHtml("ரிலையன்ஸ் இன்டஸ்ட்ரீஸ் நிறுவனத்துக்கும் அரசியல் கட்சிக்கும் என்ன தொடர்பு என்ற வினாக்களை சற்றே நிறுத்தி வையுங்கள். என்ன தொடர்பு என்று விளக்கமாகவே பார்ப்போம்.ரிலையன்ஸ் இன்டஸ்ட்ரீஸ் நிறுவனம் இந்தியாவின் மிகப்பெரிய வர்த்தக நிறுவனம். திருக்குவளை முத்துவேல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினியை விடுதலை செய்யாதீர்கள்'),
            thumbnail:'/images/7555/nalini-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/23/post7555.html",
            publishDate:"Jan 23, 2010",
            summary:$sce.trustAsHtml("நளினியை விடுதலை செய்யக் கூடாது என்று சவுக்கு சொல்லவில்லை. தமிழக மக்கள் சொல்லவில்லை. ஈழத் தமிழர்கள் சொல்லவில்லை. சொல்வது யார் தெரியுமா ?முத்துவேல் கருணாநிதிதான். (கருணாநிதியை விமர்சனம் செய்தால், அநானியாக வந்து கெட்ட வார்த்தையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நளினியை விடுதலை செய்யாதீர்கள்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/23/post7131.html",
            publishDate:"Jan 23, 2010",
            summary:$sce.trustAsHtml("நளினியை விடுதலை செய்யக் கூடாது என்று சவுக்கு சொல்லவில்லை. தமிழக மக்கள் சொல்லவில்லை. ஈழத் தமிழர்கள் சொல்லவில்லை. சொல்வது யார் தெரியுமா ?முத்துவேல் கருணாநிதிதான். (கருணாநிதியை விமர்சனம் செய்தால், அநானியாக வந்து கெட்ட வார்த்தையில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு துளி விஷம் கொடுங்களேன்&#8230; &#8230; &#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/22/post7557.html",
            publishDate:"Jan 22, 2010",
            summary:$sce.trustAsHtml("உலகில் பாவப்பட்ட ஜென்மங்களான ஆதரவற்ற ஈழத் தமிழனாய்த் தான் நானும் பிறந்தேன். எனக்கு இரண்டு அக்கா மற்றும் ஒரு அண்ணன். அனைவருக்கும் திருமணமாகி விட்டது. மக்கட்செல்வத்தில் எனக்கு குறையே இல்லாமல் ஏழு குழந்தைகள். நான்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஒரு துளி விஷம் கொடுங்களேன்&#8230; &#8230; &#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/22/post7133.html",
            publishDate:"Jan 22, 2010",
            summary:$sce.trustAsHtml("உலகில் பாவப்பட்ட ஜென்மங்களான ஆதரவற்ற ஈழத் தமிழனாய்த் தான் நானும் பிறந்தேன். எனக்கு இரண்டு அக்கா மற்றும் ஒரு அண்ணன். அனைவருக்கும் திருமணமாகி விட்டது. மக்கட்செல்வத்தில் எனக்கு குறையே இல்லாமல் ஏழு குழந்தைகள். நான்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மகத்தான மக்கள் தலைவன் மரணம்'),
            thumbnail:'/images/7559/Jyoti_Basu-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/17/post7559.html",
            publishDate:"Jan 17, 2010",
            summary:$sce.trustAsHtml("ஜோதி பாசு. சிபிஎம் கட்சியைச் சேர்ந்தவராக இருந்தாலும், கட்சி பேதங்களைக் கடந்து, எல்லாருடனும் நேச உணர்வுடன் பழகிய ஒரு தலைவன் ஜோதி பாசு. சிபிஎம் கட்சியை வெறுக்க பல காரணங்கள் இருந்தாலும், இதையெல்லாம் தாண்டி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிரபாகரன் தந்தை மரணத்துக்கு காரணம் தொல்.திருமாவளவனே ?'),
            thumbnail:'/images/7558/fbGYtR-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/17/post7558.html",
            publishDate:"Jan 17, 2010",
            summary:$sce.trustAsHtml("பிரபாகரன் தந்தை நோய்வாய்ப்பட்டுத்தானே இறந்தார், அவர் மரணத்துக்கு திருமாவளவன் எப்படி பொறுப்பாக முடியும் என்ற கேள்வி எழுவது நியாயமே. ஆனால், தேசியத் தலைவர் பிரபாகரனின் தந்தை வேலுப்பிள்ளையின் மரணத்துக்கு ஏன் தொல்.திருமாவளவனே காரணம் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மகத்தான மக்கள் தலைவன் மரணம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/17/post7135.html",
            publishDate:"Jan 17, 2010",
            summary:$sce.trustAsHtml("ஜோதி பாசு. சிபிஎம் கட்சியைச் சேர்ந்தவராக இருந்தாலும், கட்சி பேதங்களைக் கடந்து, எல்லாருடனும் நேச உணர்வுடன் பழகிய ஒரு தலைவன் ஜோதி பாசு. சிபிஎம் கட்சியை வெறுக்க பல காரணங்கள் இருந்தாலும், இதையெல்லாம் தாண்டி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிரபாகரன் தந்தை மரணத்துக்கு காரணம் தொல்.திருமாவளவனே ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/17/post7134.html",
            publishDate:"Jan 17, 2010",
            summary:$sce.trustAsHtml("பிரபாகரன் தந்தை நோய்வாய்ப்பட்டுத்தானே இறந்தார், அவர் மரணத்துக்கு திருமாவளவன் எப்படி பொறுப்பாக முடியும் என்ற கேள்வி எழுவது நியாயமே. ஆனால், தேசியத் தலைவர் பிரபாகரனின் தந்தை வேலுப்பிள்ளையின் மரணத்துக்கு ஏன் தொல்.திருமாவளவனே காரணம் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அனாதைகளுக்கு அடைக்கலம் தரும் செம்மொழி மாநாடு ?'),
            thumbnail:'/images/7560/karu-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/03/post7560.html",
            publishDate:"Jan 3, 2010",
            summary:$sce.trustAsHtml("அனாதைகளுக்கும், செம்மொழி மாநாட்டுக்கும் என்ன தொடர்பு ? இருக்கிறது. இந்த ஆண்டு நடைபெறுவதாக அறிவிக்கப் பட்டிருந்த உலகத் தமிழ் செம்மொழி மாநாட்டை எப்படியாவது வெற்றி பெற்றதாக காட்ட வேண்டும் என்று கருணாநிதி கடும் முனைப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அனாதைகளுக்கு அடைக்கலம் தரும் செம்மொழி மாநாடு ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/03/post7136.html",
            publishDate:"Jan 3, 2010",
            summary:$sce.trustAsHtml("அனாதைகளுக்கும், செம்மொழி மாநாட்டுக்கும் என்ன தொடர்பு ? இருக்கிறது. இந்த ஆண்டு நடைபெறுவதாக அறிவிக்கப் பட்டிருந்த உலகத் தமிழ் செம்மொழி மாநாட்டை எப்படியாவது வெற்றி பெற்றதாக காட்ட வேண்டும் என்று கருணாநிதி கடும் முனைப்பு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பூமியை காதலிக்கும் ஒரு கூட்டம்.'),
            thumbnail:'/images/7561/Image0062-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/02/post7561.html",
            publishDate:"Jan 2, 2010",
            summary:$sce.trustAsHtml("பொதுவாக வாழ்க்கையில் சமூகத்தை நேசிப்பவர்கள் குறைவு. நானும் சமூகத்தில் ஒரு அங்கம் என்பது அனைவருக்கும் புரிந்திருந்தாலும் தான் மற்றும் தனது குடும்பத்தை தாண்டி சிந்திப்பவர்கள் வெகு குறைவு. எத்தனை தோல்விகள் வந்தாலும், எத்தனை நெருக்கடிகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பூமியை காதலிக்கும் ஒரு கூட்டம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/02/post7137.html",
            publishDate:"Jan 2, 2010",
            summary:$sce.trustAsHtml("பொதுவாக வாழ்க்கையில் சமூகத்தை நேசிப்பவர்கள் குறைவு. நானும் சமூகத்தில் ஒரு அங்கம் என்பது அனைவருக்கும் புரிந்திருந்தாலும் தான் மற்றும் தனது குடும்பத்தை தாண்டி சிந்திப்பவர்கள் வெகு குறைவு. எத்தனை தோல்விகள் வந்தாலும், எத்தனை நெருக்கடிகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மத்தியில் தமிழ் ஆட்சிமொழி. சாத்தான் ஓதும் வேதம்.'),
            thumbnail:'/images/7562/kalaignar-tv-1_0003-150x150.jpg',
            categories:['default',''],
            href:"/default/2010/01/01/post7562.html",
            publishDate:"Jan 1, 2010",
            summary:$sce.trustAsHtml("&lt;&gt; வழக்கமாக பத்திரிக்கையாளர்கள் சந்திப்பின் போது, அனைத்து அரசியல்வாதிகளும் கையாளும் தந்திரம், தாங்கள் சொல்ல நினைக்கும் கருத்துக்களை, தங்களுக்கு ஏதுவான, தங்களது “அடிவருடி பத்திரிக்கையாளர்களை“ விட்டு ஏதுவான ஒரு கேள்வியை கேட்க வைப்பார்கள். இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மத்தியில் தமிழ் ஆட்சிமொழி. சாத்தான் ஓதும் வேதம்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2010/01/01/post7138.html",
            publishDate:"Jan 1, 2010",
            summary:$sce.trustAsHtml("&lt;&gt; வழக்கமாக பத்திரிக்கையாளர்கள் சந்திப்பின் போது, அனைத்து அரசியல்வாதிகளும் கையாளும் தந்திரம், தாங்கள் சொல்ல நினைக்கும் கருத்துக்களை, தங்களுக்கு ஏதுவான, தங்களது “அடிவருடி பத்திரிக்கையாளர்களை“ விட்டு ஏதுவான ஒரு கேள்வியை கேட்க வைப்பார்கள். இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சினிமா பார்த்தால் 1200 ரூபாய் ???'),
            thumbnail:'/images/7563/4-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/31/post7563.html",
            publishDate:"Dec 31, 2009",
            summary:$sce.trustAsHtml("என்னடா இது ? நம்மதானே காசு குடுத்து சினிமா பாக்கணும். திருட்டு டிவிடியிலே பாக்கறதுன்னா கூட, நம்மதானே காசு செலவு பண்ணணும். சினிமா பாக்க 1200 ரூபாய் எவன் தருவான் ? ஒரு வேளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சினிமா பார்த்தால் 1200 ரூபாய் ???'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/31/post7139.html",
            publishDate:"Dec 31, 2009",
            summary:$sce.trustAsHtml("என்னடா இது ? நம்மதானே காசு குடுத்து சினிமா பாக்கணும். திருட்டு டிவிடியிலே பாக்கறதுன்னா கூட, நம்மதானே காசு செலவு பண்ணணும். சினிமா பாக்க 1200 ரூபாய் எவன் தருவான் ? ஒரு வேளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திவாரி லேகியம்.. … … … …. ?'),
            thumbnail:'/images/7564/Surya-02333-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/29/post7564.html",
            publishDate:"Dec 29, 2009",
            summary:$sce.trustAsHtml("நாராயண் தத் திவாரி என்ற ஆந்திர மாநில முன்னாள் கவர்னரைப் பற்றி சமீபத்தில் படித்திருப்பீர்கள். இவரின் ஆபாச வீடியோ தொலைக் காட்சியில் ஒளிபரப்பப் பட்டவுடன், அந்த வீடியோ பொய் என்று கூறியவர், காங்கிரஸ் மேலிடத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திவாரி லேகியம்.. … … … …. ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/29/post7140.html",
            publishDate:"Dec 29, 2009",
            summary:$sce.trustAsHtml("நாராயண் தத் திவாரி என்ற ஆந்திர மாநில முன்னாள் கவர்னரைப் பற்றி சமீபத்தில் படித்திருப்பீர்கள். இவரின் ஆபாச வீடியோ தொலைக் காட்சியில் ஒளிபரப்பப் பட்டவுடன், அந்த வீடியோ பொய் என்று கூறியவர், காங்கிரஸ் மேலிடத்தின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜனநாயகத்தைக் காக்க வாருங்கள் பதிவர்களே !'),
            thumbnail:'/images/7565/blog_logo1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/26/post7565.html",
            publishDate:"Dec 26, 2009",
            summary:$sce.trustAsHtml("ஜனநாயகத்தைக் காப்பதற்கும் பதிவுலகத்துக்கும் என்ன சம்பந்தம் என்று நினைக்கிறீர்களா ? இருக்கிறது. தமிழ்நாட்டில் இன்று நான்காவது தூண் என்று அழைக்கப் படும் பத்திரிக்கை உலகம் எந்த நிலையில் இருக்கிறது என்று தெரியுமா ? சவுக்குக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஜனநாயகத்தைக் காக்க வாருங்கள் பதிவர்களே !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/26/post7141.html",
            publishDate:"Dec 26, 2009",
            summary:$sce.trustAsHtml("ஜனநாயகத்தைக் காப்பதற்கும் பதிவுலகத்துக்கும் என்ன சம்பந்தம் என்று நினைக்கிறீர்களா ? இருக்கிறது. தமிழ்நாட்டில் இன்று நான்காவது தூண் என்று அழைக்கப் படும் பத்திரிக்கை உலகம் எந்த நிலையில் இருக்கிறது என்று தெரியுமா ? சவுக்குக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தென்னையப் பெத்தா இளநீரு.. பிள்ளையப் பெத்தா கண்ணீரு…'),
            thumbnail:'/images/7566/C2-AA-C3-AC-C2-AE-C3-B0-C2-A3-C2-A4-C2-AE-C3-B5-C2-AE-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/25/post7566.html",
            publishDate:"Dec 25, 2009",
            summary:$sce.trustAsHtml("இந்தப் பாடலை கருணாநிதி பாடி வருவதாகவும், யாரிடம் புலம்புவது என்று கூட தெரியாமல் தனக்குத் தானே புலம்பும் நிலைக்கு தள்ளப் பட்டுள்ளதாகவும், தகவல்கள் வெளியாகியுள்ளன. கருணாநிதிக்கு மிக நெருக்கமாக அறியப்படும், பத்திரிக்கையாளர் “நக்கீரன் காமராஜிடம்“..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தென்னையப் பெத்தா இளநீரு.. பிள்ளையப் பெத்தா கண்ணீரு…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/25/post7142.html",
            publishDate:"Dec 25, 2009",
            summary:$sce.trustAsHtml("இந்தப் பாடலை கருணாநிதி பாடி வருவதாகவும், யாரிடம் புலம்புவது என்று கூட தெரியாமல் தனக்குத் தானே புலம்பும் நிலைக்கு தள்ளப் பட்டுள்ளதாகவும், தகவல்கள் வெளியாகியுள்ளன. கருணாநிதிக்கு மிக நெருக்கமாக அறியப்படும், பத்திரிக்கையாளர் “நக்கீரன் காமராஜிடம்“..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழின் தறுதலை மகன்'),
            thumbnail:'/images/7567/arnold-karuna-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/22/post7567.html",
            publishDate:"Dec 22, 2009",
            summary:$sce.trustAsHtml("கருணாநிதிக்கு விருதுகளும், புகழ்ச்சிகளும், எப்படி சலிக்கவில்லையோ, அதே போல, கருணாநிதியை வாய் நிறைய திட்டுவதற்கும், சபிப்பதற்கும், “சவுக்குக்கும்” சலிப்பதேயில்லை. கடைசியாய் நடந்த பாராட்டு விழா, கொல்கத்தா பாரதி தமிழ்ச்சங்கம் சார்பில் வள்ளுவர் கோட்டத்தில் 2009..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழின் தறுதலை மகன்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/22/post7143.html",
            publishDate:"Dec 22, 2009",
            summary:$sce.trustAsHtml("கருணாநிதிக்கு விருதுகளும், புகழ்ச்சிகளும், எப்படி சலிக்கவில்லையோ, அதே போல, கருணாநிதியை வாய் நிறைய திட்டுவதற்கும், சபிப்பதற்கும், “சவுக்குக்கும்” சலிப்பதேயில்லை. கடைசியாய் நடந்த பாராட்டு விழா, கொல்கத்தா பாரதி தமிழ்ச்சங்கம் சார்பில் வள்ளுவர் கோட்டத்தில் 2009..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லஞ்ச ஒழிப்புத் துறை எஸ்.பி மீது லஞ்சப் புகார்'),
            thumbnail:'/images/7568/Lakshmi-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/18/post7568.html",
            publishDate:"Dec 18, 2009",
            summary:$sce.trustAsHtml("லட்சுமி, காவல் கண்காணிப்பாளர் லட்சுமி.. … மங்களகரமான பெயர். பிறக்க ஒரு ஊர். காவல்துறையில் இருப்பதனால் பிழைக்க பல ஊர். சட்டம் படித்து பெரிய வழக்கறிஞர் ஆக வேண்டும் என்ற ஆசையில், சென்னை டாக்டர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லஞ்ச ஒழிப்புத் துறை எஸ்.பி மீது லஞ்சப் புகார்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/18/post7144.html",
            publishDate:"Dec 18, 2009",
            summary:$sce.trustAsHtml("லட்சுமி, காவல் கண்காணிப்பாளர் லட்சுமி.. … மங்களகரமான பெயர். பிறக்க ஒரு ஊர். காவல்துறையில் இருப்பதனால் பிழைக்க பல ஊர். சட்டம் படித்து பெரிய வழக்கறிஞர் ஆக வேண்டும் என்ற ஆசையில், சென்னை டாக்டர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுகவின் புதிய மாவட்ட செயலாளர் SS.கிருஷ்ணமூர்த்தி IPS'),
            thumbnail:'/images/7569/tblgeneralnews_469260811811-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/15/post7569.html",
            publishDate:"Dec 15, 2009",
            summary:$sce.trustAsHtml("எஸ்.எஸ்.கிருஷ்ணமூர்த்தி, ஐபிஎஸ் சமீபத்தில் தேர்தல் ஆணையத்தால் மாறுதல் செய்யப் பட்ட, எஸ்.எஸ்.கிருஷ்ணமூர்த்தி ஐபிஎஸ், திமுகவின் புதிய மாவட்ட செயலாளராக உருவெடுத்துள்ளார். திமுகவின் மாவட்ட செயலாளர்களை விட விசுவாசமாக, அழகிரிக்கும், கருணாநிதிக்கும் செயல்பட்டு வருகிறார் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திமுகவின் புதிய மாவட்ட செயலாளர் SS.கிருஷ்ணமூர்த்தி IPS'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/15/post7145.html",
            publishDate:"Dec 15, 2009",
            summary:$sce.trustAsHtml("எஸ்.எஸ்.கிருஷ்ணமூர்த்தி, ஐபிஎஸ் சமீபத்தில் தேர்தல் ஆணையத்தால் மாறுதல் செய்யப் பட்ட, எஸ்.எஸ்.கிருஷ்ணமூர்த்தி ஐபிஎஸ், திமுகவின் புதிய மாவட்ட செயலாளராக உருவெடுத்துள்ளார். திமுகவின் மாவட்ட செயலாளர்களை விட விசுவாசமாக, அழகிரிக்கும், கருணாநிதிக்கும் செயல்பட்டு வருகிறார் என்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தெலங்கானா பிரச்சினைக்கு தீர்வு. சோனியாவுக்கு யோசனைகள்.'),
            thumbnail:'/images/7570/untitled-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/14/post7570.html",
            publishDate:"Dec 14, 2009",
            summary:$sce.trustAsHtml("ஆழம் தெரியாமல் காலை விட்டு மாட்டிக் கொண்டு விழிக்கிறார் சோனியா. ராஜசேகர ரெட்டிக்கு பிறகு, ஆந்திராவில் ஒரு பெரிய தலைவர் இல்லை என்பதால், 2014ல் பிரதமராக இருக்கும் தன் மகனுக்கு ஆதரவு வேண்டும் என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தெலங்கானா பிரச்சினைக்கு தீர்வு. சோனியாவுக்கு யோசனைகள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/14/post7146.html",
            publishDate:"Dec 14, 2009",
            summary:$sce.trustAsHtml("ஆழம் தெரியாமல் காலை விட்டு மாட்டிக் கொண்டு விழிக்கிறார் சோனியா. ராஜசேகர ரெட்டிக்கு பிறகு, ஆந்திராவில் ஒரு பெரிய தலைவர் இல்லை என்பதால், 2014ல் பிரதமராக இருக்கும் தன் மகனுக்கு ஆதரவு வேண்டும் என்ற..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('40 நாட்களில் 11,000 ஹிட்டுகள்.  நன்றி வாசகர்களே!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/11/post7572.html",
            publishDate:"Dec 11, 2009",
            summary:$sce.trustAsHtml("சவுக்கு, ப்ளாகாக www.savukku.blogspot.com என்ற பெயரில் கடந்த ஏப்ரல் 2009ல் தொடங்கப் பட்டது சவுக்கு. முதல் கட்டுரையாக &#8220;தொலைபேசி ஒட்டுக் கேட்பும், கருணாநிதியின் கபட நாடகமும்&#8221; என்ற தலைப்பில், தொலைபேசி ஒட்டுக் கேட்பு விவகாரம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழ்நாடு அரசு திரைப்பட விருதுகள்.  சவுக்கின் ப்ரத்யேக ஆல்பம்'),
            thumbnail:'/images/7571/10-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/11/post7571.html",
            publishDate:"Dec 11, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யுங்கள். படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யுங்கள். சவுக்கு Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('40 நாட்களில் 11,000 ஹிட்டுகள்.  நன்றி வாசகர்களே!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/11/post7148.html",
            publishDate:"Dec 11, 2009",
            summary:$sce.trustAsHtml("சவுக்கு, ப்ளாகாக www.savukku.blogspot.com என்ற பெயரில் கடந்த ஏப்ரல் 2009ல் தொடங்கப் பட்டது சவுக்கு. முதல் கட்டுரையாக &#8220;தொலைபேசி ஒட்டுக் கேட்பும், கருணாநிதியின் கபட நாடகமும்&#8221; என்ற தலைப்பில், தொலைபேசி ஒட்டுக் கேட்பு விவகாரம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழ்நாடு அரசு திரைப்பட விருதுகள்.  சவுக்கின் ப்ரத்யேக ஆல்பம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/11/post7147.html",
            publishDate:"Dec 11, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யுங்கள். படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யுங்கள். சவுக்கு Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி திடீர் ஓய்வு அறிவிப்பு ! வெளிவராத பின்னணி தகவல்கள்.'),
            thumbnail:'/images/7573/final-on-11-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/09/post7573.html",
            publishDate:"Dec 9, 2009",
            summary:$sce.trustAsHtml("கடந்த டிசம்பர் 6ம் தேதியன்று, சென்னை வள்ளுவர் கோட்டத்தில் நடைபெற்ற பாராட்டு விழாவில், முதல்வர் கருணாநிதி “அரசியல், அமைச்சர் பதவி இவைகளையெல்லாம் ஒதுக்கிவைத்துவிட்டு உங்களிலொருவனாக நான் என்னை இணைத்துக்கொள்வேன்“ சட்டமன்ற புதிய கட்டிடம் திறக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி திடீர் ஓய்வு அறிவிப்பு ! வெளிவராத பின்னணி தகவல்கள்.'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/09/post7149.html",
            publishDate:"Dec 9, 2009",
            summary:$sce.trustAsHtml("கடந்த டிசம்பர் 6ம் தேதியன்று, சென்னை வள்ளுவர் கோட்டத்தில் நடைபெற்ற பாராட்டு விழாவில், முதல்வர் கருணாநிதி “அரசியல், அமைச்சர் பதவி இவைகளையெல்லாம் ஒதுக்கிவைத்துவிட்டு உங்களிலொருவனாக நான் என்னை இணைத்துக்கொள்வேன்“ சட்டமன்ற புதிய கட்டிடம் திறக்கப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழல்களின் தேசம் !'),
            thumbnail:'/images/7574/1000-rupees-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/07/post7574.html",
            publishDate:"Dec 7, 2009",
            summary:$sce.trustAsHtml("நல்ல மனிதர்கள் ஒன்றும் செய்யாமல் இருப்பதே தீவினையின் வெற்றிக்கு முக்கிய காரணம். Edmond Burke இன்று இந்தியாவில் ஊழல் ஒரு மிகச் சாதாரணமான ஒரு விஷயமாகிப் போய் விட்டது. ஊழலைப் பொறுத்தவரை நமக்கு மிக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊழல்களின் தேசம் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/07/post7150.html",
            publishDate:"Dec 7, 2009",
            summary:$sce.trustAsHtml("நல்ல மனிதர்கள் ஒன்றும் செய்யாமல் இருப்பதே தீவினையின் வெற்றிக்கு முக்கிய காரணம். Edmond Burke இன்று இந்தியாவில் ஊழல் ஒரு மிகச் சாதாரணமான ஒரு விஷயமாகிப் போய் விட்டது. ஊழலைப் பொறுத்தவரை நமக்கு மிக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('25 ஆண்டுகளாக … … …. …. ….'),
            thumbnail:'/images/7575/timemagazinecover-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/03/post7575.html",
            publishDate:"Dec 3, 2009",
            summary:$sce.trustAsHtml("1984 டிசம்பர் 2 நள்ளிரவு 12.00 மணி. மத்திய பிரதேச மாநிலம். போபால் நகரம். எல்லாப் பொழுதுகளையும் போலேதான் அன்றைய பொழுதும் கழியும் என்று இயல்பாக வேலைகளை முடித்து விட்டு வீடு திரும்பினர் மக்கள்.அன்றாட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('25 ஆண்டுகளாக … … …. …. ….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/03/post7151.html",
            publishDate:"Dec 3, 2009",
            summary:$sce.trustAsHtml("1984 டிசம்பர் 2 நள்ளிரவு 12.00 மணி. மத்திய பிரதேச மாநிலம். போபால் நகரம். எல்லாப் பொழுதுகளையும் போலேதான் அன்றைய பொழுதும் கழியும் என்று இயல்பாக வேலைகளை முடித்து விட்டு வீடு திரும்பினர் மக்கள்.அன்றாட..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நா கூசவில்லையா ?'),
            thumbnail:'/images/7576/feb09_04cartoon1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/12/01/post7576.html",
            publishDate:"Dec 1, 2009",
            summary:$sce.trustAsHtml("18.11.2009 அன்று கருணாநிதி வெளியிட்டுள்ள உடன்பிறப்புகளுக்கு எழுதிய கடிதத்தில் “இப்படி சகோதர யுத்தம் காரணமாக நம்மை நாமே கொன்று குவித்துக் கொண்டது மாத்திரமல்ல, முறையாக திட்டமிட்டு நடவடிக்கை மேற்கொள்ளத் தவறிய காரணத்தால் நம்முடைய பலத்தையும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நா கூசவில்லையா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/12/01/post7152.html",
            publishDate:"Dec 1, 2009",
            summary:$sce.trustAsHtml("18.11.2009 அன்று கருணாநிதி வெளியிட்டுள்ள உடன்பிறப்புகளுக்கு எழுதிய கடிதத்தில் “இப்படி சகோதர யுத்தம் காரணமாக நம்மை நாமே கொன்று குவித்துக் கொண்டது மாத்திரமல்ல, முறையாக திட்டமிட்டு நடவடிக்கை மேற்கொள்ளத் தவறிய காரணத்தால் நம்முடைய பலத்தையும்,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விசாரணை கமிஷன்களால் என்ன பயன் ?'),
            thumbnail:'/images/7577/Babri-mosque-interior-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/29/post7577.html",
            publishDate:"Nov 29, 2009",
            summary:$sce.trustAsHtml("பாப்ரி மசூதியின் உட்புறத்தோற்றம் தற்போது 1992ம் ஆண்டு, பாபர் மசூதி இடிக்கப் பட்ட விவகாரம் தொடர்பாக அமைக்கப் பட்ட லிபரான் கமிஷன் வெளியாகி, பாராளுமன்றத்தில் கடும் அமளியை கிளப்பி, அதனால் பாராளுமன்றம், இரண்டு நாட்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('விசாரணை கமிஷன்களால் என்ன பயன் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/29/post7153.html",
            publishDate:"Nov 29, 2009",
            summary:$sce.trustAsHtml("பாப்ரி மசூதியின் உட்புறத்தோற்றம் தற்போது 1992ம் ஆண்டு, பாபர் மசூதி இடிக்கப் பட்ட விவகாரம் தொடர்பாக அமைக்கப் பட்ட லிபரான் கமிஷன் வெளியாகி, பாராளுமன்றத்தில் கடும் அமளியை கிளப்பி, அதனால் பாராளுமன்றம், இரண்டு நாட்கள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாவீரர் நாளில் சபதம் ஏற்போம் !'),
            thumbnail:'/images/7578/kalam-pulam-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/27/post7578.html",
            publishDate:"Nov 27, 2009",
            summary:$sce.trustAsHtml("மாவீரர் நாள் உரையாற்ற பிரபாகரன் வருவாரா, வரமாட்டாரா என்பது பற்றியெல்லாம் பல பதிவுகள் உலா வரும் நிலையில், “சவுக்கு“ அதற்குள் செல்ல விரும்பவில்லை. மாறாக, இம்மாவீரர் நாளில் நாம் அடுத்து என்ன செய்ய வேண்டும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாவீரர் நாளில் சபதம் ஏற்போம் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/27/post7154.html",
            publishDate:"Nov 27, 2009",
            summary:$sce.trustAsHtml("மாவீரர் நாள் உரையாற்ற பிரபாகரன் வருவாரா, வரமாட்டாரா என்பது பற்றியெல்லாம் பல பதிவுகள் உலா வரும் நிலையில், “சவுக்கு“ அதற்குள் செல்ல விரும்பவில்லை. மாறாக, இம்மாவீரர் நாளில் நாம் அடுத்து என்ன செய்ய வேண்டும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தியா ஏழை நாடா ?'),
            thumbnail:'/images/7579/AnilAmbani-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/26/post7579.html",
            publishDate:"Nov 26, 2009",
            summary:$sce.trustAsHtml("இந்தியா வளரும் நாடு, மூன்றாம் உலக நாடு, என்று அனைவரும் கூறுகிறார்கள். இது உண்மையா ? ஏன் இந்த நிலை ? இந்தியா சுதந்திரம் பெற்று 62 ஆண்டுகள் 3 மாதங்கள் மற்றும் 9..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்தியா ஏழை நாடா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/26/post7155.html",
            publishDate:"Nov 26, 2009",
            summary:$sce.trustAsHtml("இந்தியா வளரும் நாடு, மூன்றாம் உலக நாடு, என்று அனைவரும் கூறுகிறார்கள். இது உண்மையா ? ஏன் இந்த நிலை ? இந்தியா சுதந்திரம் பெற்று 62 ஆண்டுகள் 3 மாதங்கள் மற்றும் 9..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாகம் 2. கிழியும் எம்.கே.நாராயணின் முகத்திரை'),
            thumbnail:'/images/7580/1_3-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/25/post7580.html",
            publishDate:"Nov 25, 2009",
            summary:$sce.trustAsHtml("ஜனவரி 2005ல் தேசிய பாதுகாப்பு ஆலோசகராக பதவியேற்றதிலிருந்தே, இந்தியாவின் வெளிநாட்டு உளவு அமைப்பான “ரா” RAW (Research and Analysis Wing) தன்னுடைய கட்டுப்பாட்டில் வர வேண்டும் என்று தொடர்ந்து முயற்சிகள் எடுத்து வருகிறார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாகம் 2. கிழியும் எம்.கே.நாராயணின் முகத்திரை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/25/post7156.html",
            publishDate:"Nov 25, 2009",
            summary:$sce.trustAsHtml("ஜனவரி 2005ல் தேசிய பாதுகாப்பு ஆலோசகராக பதவியேற்றதிலிருந்தே, இந்தியாவின் வெளிநாட்டு உளவு அமைப்பான “ரா” RAW (Research and Analysis Wing) தன்னுடைய கட்டுப்பாட்டில் வர வேண்டும் என்று தொடர்ந்து முயற்சிகள் எடுத்து வருகிறார்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கிழியும் எம்.கே.நாராயணனின் முகத்திரை…'),
            thumbnail:'/images/7581/security_advisor_narayanan-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/18/post7581.html",
            publishDate:"Nov 18, 2009",
            summary:$sce.trustAsHtml("எம்.கே.நாராயணன்எம்.கே.நாராயணன் (75) என்றழைக்கப் படும் மாயன்கோட்டே கேளத் நாராயணன் தற்போது பாரதப் பிரதமரின் தேசியப் பாதுகாப்பு ஆலோசகராக இருந்து வருகிறார். இவரைப் பற்றிய விக்கீப்பீடியாவின் பக்கங்களில், இலங்கை விவகாரங்களில் இவர் கைதேர்ந்தவர் என்று கூறப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கிழியும் எம்.கே.நாராயணனின் முகத்திரை…'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/18/post7157.html",
            publishDate:"Nov 18, 2009",
            summary:$sce.trustAsHtml("எம்.கே.நாராயணன்எம்.கே.நாராயணன் (75) என்றழைக்கப் படும் மாயன்கோட்டே கேளத் நாராயணன் தற்போது பாரதப் பிரதமரின் தேசியப் பாதுகாப்பு ஆலோசகராக இருந்து வருகிறார். இவரைப் பற்றிய விக்கீப்பீடியாவின் பக்கங்களில், இலங்கை விவகாரங்களில் இவர் கைதேர்ந்தவர் என்று கூறப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனித குல வரலாற்றில் மிகப் பெரிய துரோகி யார் ?'),
            thumbnail:'/images/7582/11-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/17/post7582.html",
            publishDate:"Nov 17, 2009",
            summary:$sce.trustAsHtml("ப்ரூட்டஸ்: ஜுலியஸ் சீசரின் ரோமானிய சாம்ராஜ்யத்தில், அமைச்சரவையில் இடம் பெற்றிருந்த, சீசரின் நெருங்கிய உறவினர் ப்ரூட்டஸ் செய்த துரோகம், வரலாற்றில் மிகவும் புகழ் பெற்றது. அகில சக்திகளையும் ஒருங்கே கொண்டிருந்த சீசரை, ப்ரூட்ஸ் அவரது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனித குல வரலாற்றில் மிகப் பெரிய துரோகி யார் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/17/post7158.html",
            publishDate:"Nov 17, 2009",
            summary:$sce.trustAsHtml("ப்ரூட்டஸ்: ஜுலியஸ் சீசரின் ரோமானிய சாம்ராஜ்யத்தில், அமைச்சரவையில் இடம் பெற்றிருந்த, சீசரின் நெருங்கிய உறவினர் ப்ரூட்டஸ் செய்த துரோகம், வரலாற்றில் மிகவும் புகழ் பெற்றது. அகில சக்திகளையும் ஒருங்கே கொண்டிருந்த சீசரை, ப்ரூட்ஸ் அவரது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பத்திரிக்கைகள் மிகைப்படுத்தி செய்தி வெளியிடுகின்றதா ?'),
            thumbnail:'/images/7583/dmk1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/16/post7583.html",
            publishDate:"Nov 16, 2009",
            summary:$sce.trustAsHtml("குறிப்பு: சற்றே பெரிய பதிவு. பொறுமையாக படிக்கவும்.கருணாநிதி கடந்த 15ம் தேதி வெளியிட்டுள்ள அறிக்கையில் “பத்திரிக்கைகள் செய்திகளை மிகைப்படுத்தி வெளியிடுவதாக“ அறிக்கை வெளியிட்டுள்ளார். மேலும் அவர் அந்த அறிக்கையில் “பத்திரிக்கைகளுக்கு அரசின் வாயிலாக எத்தகைய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பத்திரிக்கைகள் மிகைப்படுத்தி செய்தி வெளியிடுகின்றதா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/16/post7159.html",
            publishDate:"Nov 16, 2009",
            summary:$sce.trustAsHtml("குறிப்பு: சற்றே பெரிய பதிவு. பொறுமையாக படிக்கவும்.கருணாநிதி கடந்த 15ம் தேதி வெளியிட்டுள்ள அறிக்கையில் “பத்திரிக்கைகள் செய்திகளை மிகைப்படுத்தி வெளியிடுவதாக“ அறிக்கை வெளியிட்டுள்ளார். மேலும் அவர் அந்த அறிக்கையில் “பத்திரிக்கைகளுக்கு அரசின் வாயிலாக எத்தகைய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனித உரிமை நாள் டிசம்பர் 10ல் மரண தண்டனை ஒழிப்பு மாநாடு'),
            thumbnail:'/images/7584/december-10-notice-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/15/post7584.html",
            publishDate:"Nov 15, 2009",
            summary:$sce.trustAsHtml("வரும் டிசம்பர் 10 சர்வதேச மனித உரிமை நாளாகும். இந்நாளில் கீழ்கண்ட கோரிக்கைகளோடு &#8220;ஒழியட்டும் மரண தண்டனை, மலரட்டும் மனித உரிமை&#8221; என்ற தலைப்பில் சென்னையில் மாநாடு நடைபெற இருக்கிறது. இம்மாநாட்டில் 5 கோரிக்கைகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மனித உரிமை நாள் டிசம்பர் 10ல் மரண தண்டனை ஒழிப்பு மாநாடு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/15/post7160.html",
            publishDate:"Nov 15, 2009",
            summary:$sce.trustAsHtml("வரும் டிசம்பர் 10 சர்வதேச மனித உரிமை நாளாகும். இந்நாளில் கீழ்கண்ட கோரிக்கைகளோடு &#8220;ஒழியட்டும் மரண தண்டனை, மலரட்டும் மனித உரிமை&#8221; என்ற தலைப்பில் சென்னையில் மாநாடு நடைபெற இருக்கிறது. இம்மாநாட்டில் 5 கோரிக்கைகள்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அனானிகளை என்ன செய்யலாம் ?'),
            thumbnail:'/images/7587/anonymous_woman_lightbox-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/14/post7587.html",
            publishDate:"Nov 14, 2009",
            summary:$sce.trustAsHtml("அரசையும், கருணாநிதியையும் எதிர்த்து பதிவுகள் எழுதினால் அனானிகளின் படையெடுப்பு கடுமையானதாக இருக்கிறது. பல நாட்களாக சவுக்கு comment moderation இல்லாமலே இருந்தது. ஆனால் சில அனானிகள் மோசமான சொற்பிரயோகங்களோடு, பிறர் படித்தால் முகம் சுளிக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தாமதிக்கப் பட்ட நீதி மறுக்கப் பட்ட நீதியா ?'),
            thumbnail:'/images/7585/photo1235-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/14/post7585.html",
            publishDate:"Nov 14, 2009",
            summary:$sce.trustAsHtml("கருணாநிதி, முல்லைப் பெரியாறு விவகாரம் தொடர்பாக “தாமதிக்கப் பட்ட நீதி, மறுக்கப் பட்ட நீதி“ என்ற தலைப்பில் அறிக்கை ஒன்று வெளியிட்டுள்ளார். இந்த அறிக்கையில் கருணாநிதி பின்வருமாறு கருத்து தெரிவித்துள்ளார். “உச்ச நீதிமன்றம் அல்ல,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அனானிகளை என்ன செய்யலாம் ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/14/post7163.html",
            publishDate:"Nov 14, 2009",
            summary:$sce.trustAsHtml("அரசையும், கருணாநிதியையும் எதிர்த்து பதிவுகள் எழுதினால் அனானிகளின் படையெடுப்பு கடுமையானதாக இருக்கிறது. பல நாட்களாக சவுக்கு comment moderation இல்லாமலே இருந்தது. ஆனால் சில அனானிகள் மோசமான சொற்பிரயோகங்களோடு, பிறர் படித்தால் முகம் சுளிக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தாமதிக்கப் பட்ட நீதி மறுக்கப் பட்ட நீதியா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/14/post7161.html",
            publishDate:"Nov 14, 2009",
            summary:$sce.trustAsHtml("கருணாநிதி, முல்லைப் பெரியாறு விவகாரம் தொடர்பாக “தாமதிக்கப் பட்ட நீதி, மறுக்கப் பட்ட நீதி“ என்ற தலைப்பில் அறிக்கை ஒன்று வெளியிட்டுள்ளார். இந்த அறிக்கையில் கருணாநிதி பின்வருமாறு கருத்து தெரிவித்துள்ளார். “உச்ச நீதிமன்றம் அல்ல,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடும் நெருக்கடியில் கருணாநிதி… ….'),
            thumbnail:'/images/7588/13_11_2009_001_021_013-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/13/post7588.html",
            publishDate:"Nov 13, 2009",
            summary:$sce.trustAsHtml("கடந்த 10 நாட்களாக, இலங்கை அகதிகள் மேல், கருணாநிதிக்கு ஏற்பட்டுள்ள “திடீர்“ அக்கறை குறித்து, பலர் அதிர்ச்சியில் ஆழ்ந்துள்ளனர். 1983ல் இலங்கையில் வெடித்த இனக் கலவரம் காரணமாக ஈழத் தமிழ் மக்கள் அகதிகளாகத் தமிழ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கடும் நெருக்கடியில் கருணாநிதி… ….'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/13/post7164.html",
            publishDate:"Nov 13, 2009",
            summary:$sce.trustAsHtml("கடந்த 10 நாட்களாக, இலங்கை அகதிகள் மேல், கருணாநிதிக்கு ஏற்பட்டுள்ள “திடீர்“ அக்கறை குறித்து, பலர் அதிர்ச்சியில் ஆழ்ந்துள்ளனர். 1983ல் இலங்கையில் வெடித்த இனக் கலவரம் காரணமாக ஈழத் தமிழ் மக்கள் அகதிகளாகத் தமிழ்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட கோமாளிகளா !!!!!'),
            thumbnail:'/images/7589/20091101yeddy1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/09/post7589.html",
            publishDate:"Nov 9, 2009",
            summary:$sce.trustAsHtml("ரெட்டி vs யெட்டி. கர்நாடக அரசியலில், கடந்த 15 நாட்களாக நடந்த சம்பவங்கள், விறுவிறுப்பான மசாலா படத்தை விஞ்சும் வண்ணம் இருந்தன. நகைச்சுவை, சென்டிமென்ட், த்ரில் என்று எதற்கும் பஞ்சம் இல்லை. ஒகெனக்கல் கூட்டுக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அட கோமாளிகளா !!!!!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/09/post7165.html",
            publishDate:"Nov 9, 2009",
            summary:$sce.trustAsHtml("ரெட்டி vs யெட்டி. கர்நாடக அரசியலில், கடந்த 15 நாட்களாக நடந்த சம்பவங்கள், விறுவிறுப்பான மசாலா படத்தை விஞ்சும் வண்ணம் இருந்தன. நகைச்சுவை, சென்டிமென்ட், த்ரில் என்று எதற்கும் பஞ்சம் இல்லை. ஒகெனக்கல் கூட்டுக்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக லஞ்ச ஒழிப்புத் துறையின் அயோக்கியத்தனம்'),
            thumbnail:'/images/7590/bribery-150x150.png',
            categories:['default',''],
            href:"/default/2009/11/08/post7590.html",
            publishDate:"Nov 8, 2009",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் லஞ்ச ஒழிப்புத் துறை என்ற ஒரு துறை, 1964ம் ஆண்டு முதல் செயல்பட்டு வருகிறது. இத்துறை உயிரோடு இருக்கிறது என்பதை காட்டிக் கொள்ள அவ்வப்போது, செய்தித் தாளில் “லஞ்சம் வாங்கிய விஏஓ கைது“,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக லஞ்ச ஒழிப்புத் துறையின் அயோக்கியத்தனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/08/post7166.html",
            publishDate:"Nov 8, 2009",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் லஞ்ச ஒழிப்புத் துறை என்ற ஒரு துறை, 1964ம் ஆண்டு முதல் செயல்பட்டு வருகிறது. இத்துறை உயிரோடு இருக்கிறது என்பதை காட்டிக் கொள்ள அவ்வப்போது, செய்தித் தாளில் “லஞ்சம் வாங்கிய விஏஓ கைது“,..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிபதி தினகரன் நல்லவரா கெட்டவரா ?'),
            thumbnail:'/images/7591/ind_t2-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/11/04/post7591.html",
            publishDate:"Nov 4, 2009",
            summary:$sce.trustAsHtml("&#8220;நீ யாரென்று கேட்டால் சாதியைக் கூறாமல் நான் தமிழன் என்றோ அல்லது நான் மனிதன் என்றோ கூறும் நிலை வர வேண்டும்&#8217; என்று தமிழக துணை முதல்வர் மு.க. ஸ்டாலின் அக்டோபர் 3 அன்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதிபதி தினகரன் நல்லவரா கெட்டவரா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/11/04/post7167.html",
            publishDate:"Nov 4, 2009",
            summary:$sce.trustAsHtml("&#8220;நீ யாரென்று கேட்டால் சாதியைக் கூறாமல் நான் தமிழன் என்றோ அல்லது நான் மனிதன் என்றோ கூறும் நிலை வர வேண்டும்&#8217; என்று தமிழக துணை முதல்வர் மு.க. ஸ்டாலின் அக்டோபர் 3 அன்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக தலைமைச் செயலாளர் ஸ்ரீபதி மீது திடுக்கிடும் புகார்'),
            thumbnail:'/images/7592/2008081558910701-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/31/post7592.html",
            publishDate:"Oct 31, 2009",
            summary:$sce.trustAsHtml("தமிழக தலைமைச் செயலாளர் ஸ்ரீபதி மீது திடுக்கிடும் புகார் எழுந்துள்ளது. தலைமைச் செயலாளராக நியமிக்கப் படுவதற்கு முன், ஸ்ரீபதி விழிப்புப் பணி ஆணையராக (Vigilance Commissioner) பதவி வகித்தார். அப்பதவியில் இருக்கையில், ஊழல் புகாரில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக தலைமைச் செயலாளர் ஸ்ரீபதி மீது திடுக்கிடும் புகார்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/31/post7168.html",
            publishDate:"Oct 31, 2009",
            summary:$sce.trustAsHtml("தமிழக தலைமைச் செயலாளர் ஸ்ரீபதி மீது திடுக்கிடும் புகார் எழுந்துள்ளது. தலைமைச் செயலாளராக நியமிக்கப் படுவதற்கு முன், ஸ்ரீபதி விழிப்புப் பணி ஆணையராக (Vigilance Commissioner) பதவி வகித்தார். அப்பதவியில் இருக்கையில், ஊழல் புகாரில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அழிந்தது ஆணவம் !'),
            thumbnail:'/images/7593/2-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/30/post7593.html",
            publishDate:"Oct 30, 2009",
            summary:$sce.trustAsHtml("சென்னை உயர்நீதிமன்றம் வியாழனன்று வெளியிட்ட அதிரடித் தீர்ப்பால் ராதாகிருஷ்ணன் என்ற ஆணவம் பிடித்த போலீஸ் அதிகாரியின் கொட்டம் அடங்கத் தொடங்கியுள்ளது. தமிழக ஐபிஎஸ் அதிகாரிகளிலேயே, ஆணவம் பிடித்த அதிகாரிகளின் பட்டியிலில் முதலிடம் பிடிப்பவர் ராதாகிருஷ்ணன்தான்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அழிந்தது ஆணவம் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/30/post7169.html",
            publishDate:"Oct 30, 2009",
            summary:$sce.trustAsHtml("சென்னை உயர்நீதிமன்றம் வியாழனன்று வெளியிட்ட அதிரடித் தீர்ப்பால் ராதாகிருஷ்ணன் என்ற ஆணவம் பிடித்த போலீஸ் அதிகாரியின் கொட்டம் அடங்கத் தொடங்கியுள்ளது. தமிழக ஐபிஎஸ் அதிகாரிகளிலேயே, ஆணவம் பிடித்த அதிகாரிகளின் பட்டியிலில் முதலிடம் பிடிப்பவர் ராதாகிருஷ்ணன்தான்...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போலீஸ் அதிகாரிகள் சஸ்பென்ட் சென்னை உயர்நீதிமன்றம் அதிரடி'),
            thumbnail:'/images/7594/photos-255Ccoprk.jpg',
            categories:['default',''],
            href:"/default/2009/10/29/post7594.html",
            publishDate:"Oct 29, 2009",
            summary:$sce.trustAsHtml("19/2 அன்று சென்னை உயர்நீதிமன்றத்தில் நடந்த வழக்கறிஞர்கள் மீதான கொடும் தாக்குதலை யாரும் மறந்திருக்க முடியாது. மனிதருள் மாணிக்கம் ராதாகிருஷ்ணன் ராமசுப்ரமணியம் அன்று உயர்நீதிமன்ற வளாகமே போர்க்களமாக காட்சியளித்தது. வழக்கறிஞர்கள், நீதிபதிகள், பொதுமக்கள் என..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('போலீஸ் அதிகாரிகள் சஸ்பென்ட் சென்னை உயர்நீதிமன்றம் அதிரடி'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/29/post7170.html",
            publishDate:"Oct 29, 2009",
            summary:$sce.trustAsHtml("19/2 அன்று சென்னை உயர்நீதிமன்றத்தில் நடந்த வழக்கறிஞர்கள் மீதான கொடும் தாக்குதலை யாரும் மறந்திருக்க முடியாது. மனிதருள் மாணிக்கம் ராதாகிருஷ்ணன் ராமசுப்ரமணியம் அன்று உயர்நீதிமன்ற வளாகமே போர்க்களமாக காட்சியளித்தது. வழக்கறிஞர்கள், நீதிபதிகள், பொதுமக்கள் என..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடன் பிறப்புக்கு கருணாநிதி உருக்கமான கடிதம்'),
            thumbnail:'/images/7595/2007011510640401-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/28/post7595.html",
            publishDate:"Oct 28, 2009",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,நீண்ட நாட்களாக உனக்கு கடிதம் எழுதவில்லை. இத்தமிழ் கூறும் நல்லுலகை நான்தான் பாதுகாக்க வேண்டும் என்று உலகத்தமிழர்கள் தங்களது அவாவை அடக்காது வெளிப்படுத்தியதாலேதான், உனக்கு கடிதம் கூட எழுத நேரமில்லாமல் மக்கள் பணியை கவனித்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உடன் பிறப்புக்கு கருணாநிதி உருக்கமான கடிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/28/post7171.html",
            publishDate:"Oct 28, 2009",
            summary:$sce.trustAsHtml("உடன்பிறப்பே,நீண்ட நாட்களாக உனக்கு கடிதம் எழுதவில்லை. இத்தமிழ் கூறும் நல்லுலகை நான்தான் பாதுகாக்க வேண்டும் என்று உலகத்தமிழர்கள் தங்களது அவாவை அடக்காது வெளிப்படுத்தியதாலேதான், உனக்கு கடிதம் கூட எழுத நேரமில்லாமல் மக்கள் பணியை கவனித்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராசா ராசாஆஆஆ  மானங்கெட்ட ராசாஆஆஆஆ'),
            thumbnail:'/images/7596/a_raja_ye_20081224-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/24/post7596.html",
            publishDate:"Oct 24, 2009",
            summary:$sce.trustAsHtml("மீண்டும், ஸ்பெக்ட்ரம் என்னும் பூதம், ராசாவையும், திமுகவையும், பிடித்து ஆட்டத் தொடங்கியிருக்கிறது. மத்திய புலனாய்வு நிறுவனம், சி.பி.ஐ, தொலைத்தொடர்பு அலுவலகத்தையும், இது தொடர்பாக மேலும் பல்வேறு அலுவலகங்களிலும் சோதனை நடத்தியிருக்கிறது. இச் சோதனைகள், ஆ.ராசா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராசா ராசாஆஆஆ  மானங்கெட்ட ராசாஆஆஆஆ'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/24/post7172.html",
            publishDate:"Oct 24, 2009",
            summary:$sce.trustAsHtml("மீண்டும், ஸ்பெக்ட்ரம் என்னும் பூதம், ராசாவையும், திமுகவையும், பிடித்து ஆட்டத் தொடங்கியிருக்கிறது. மத்திய புலனாய்வு நிறுவனம், சி.பி.ஐ, தொலைத்தொடர்பு அலுவலகத்தையும், இது தொடர்பாக மேலும் பல்வேறு அலுவலகங்களிலும் சோதனை நடத்தியிருக்கிறது. இச் சோதனைகள், ஆ.ராசா..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீபாவளி சிறப்பு பட்டிமன்றம். கலைஞருக்கு நன்றி !'),
            thumbnail:'/images/7597/anniyan026gq-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/22/post7597.html",
            publishDate:"Oct 22, 2009",
            summary:$sce.trustAsHtml("தமிழக முதல்வர் கலைஞருக்கு திமுகவும் தமிழக அரசும் மட்டுமின்றி, பல்வேறு அமைப்புகளும் போட்டி போட்டுக் கொண்டு விருதுகளை வழங்குகின்றன. அவர் முன்னிலையில் கட்சியினரும், கவிஞர்களும், பேச்சாளர்களும் அவரை எவ்வளவு புகழ்ந்தாலும், அவருக்கு முழு திருப்தி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தீபாவளி சிறப்பு பட்டிமன்றம். கலைஞருக்கு நன்றி !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/22/post7173.html",
            publishDate:"Oct 22, 2009",
            summary:$sce.trustAsHtml("தமிழக முதல்வர் கலைஞருக்கு திமுகவும் தமிழக அரசும் மட்டுமின்றி, பல்வேறு அமைப்புகளும் போட்டி போட்டுக் கொண்டு விருதுகளை வழங்குகின்றன. அவர் முன்னிலையில் கட்சியினரும், கவிஞர்களும், பேச்சாளர்களும் அவரை எவ்வளவு புகழ்ந்தாலும், அவருக்கு முழு திருப்தி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருமாவளவனின் ஆர்ப்பாட்டம்'),
            thumbnail:'/images/7598/24539890-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/21/post7598.html",
            publishDate:"Oct 21, 2009",
            summary:$sce.trustAsHtml("செய்திவிடுதலை சிறுத்தைகள் சார்பில் ராஜபக்ஷே சகோதரர்களை போர்க் குற்றவாளிகளாக அறிவிக்கக் கோரி ஆர்ப்பாட்டம்இந்த புகைப்படங்களை இத்தளத்தில் வெளியிட்டு சவுக்கு இப்போராட்டத்துக்கு தன் வாழ்த்துக்களை தெரிவித்துக் கொள்கிறது. Share this:Share on FacebookClick to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('திருமாவளவனின் ஆர்ப்பாட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/21/post7174.html",
            publishDate:"Oct 21, 2009",
            summary:$sce.trustAsHtml("செய்திவிடுதலை சிறுத்தைகள் சார்பில் ராஜபக்ஷே சகோதரர்களை போர்க் குற்றவாளிகளாக அறிவிக்கக் கோரி ஆர்ப்பாட்டம்இந்த புகைப்படங்களை இத்தளத்தில் வெளியிட்டு சவுக்கு இப்போராட்டத்துக்கு தன் வாழ்த்துக்களை தெரிவித்துக் கொள்கிறது. Share this:Share on FacebookClick to share..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எம்.ஏ (கலைஞர் சிந்தனைகள்) பாடத் திட்டம்'),
            thumbnail:'/images/7599/2008020550080301-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/19/post7599.html",
            publishDate:"Oct 19, 2009",
            summary:$sce.trustAsHtml("சென்னைப் பல்கலைக் கழக துணைவேந்தர் திருவாசகம்செய்தி சென்னைப் பல்கலைக் கழகத்தில் புதிய முதுகலைப் பட்டப் படிப்பு “எம்.ஏ (கலைஞர் சிந்தனைகள்) அறிமுகம்.திருவாசகம், சென்னைப் பல்கலைக்கழக துணைவேந்தர் சென்னைப் பல்கலைகழகத்தில் இந்தப் புதிய முதுகலைப் பட்டப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('எம்.ஏ (கலைஞர் சிந்தனைகள்) பாடத் திட்டம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/19/post7175.html",
            publishDate:"Oct 19, 2009",
            summary:$sce.trustAsHtml("சென்னைப் பல்கலைக் கழக துணைவேந்தர் திருவாசகம்செய்தி சென்னைப் பல்கலைக் கழகத்தில் புதிய முதுகலைப் பட்டப் படிப்பு “எம்.ஏ (கலைஞர் சிந்தனைகள்) அறிமுகம்.திருவாசகம், சென்னைப் பல்கலைக்கழக துணைவேந்தர் சென்னைப் பல்கலைகழகத்தில் இந்தப் புதிய முதுகலைப் பட்டப்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்சலைட்டுகள் நாட்டின் பாதுகாப்புக்கு அச்சுறுத்தலா ?'),
            thumbnail:'/images/7601/manmohan_singh_4001-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/18/post7601.html",
            publishDate:"Oct 18, 2009",
            summary:$sce.trustAsHtml("நேற்று மன்மோகன் சிங் பேசிய இரு விஷயங்கள் நாம் கவனத்தில் கொள்ள வேண்டியன. ஞாயிற்றுக் கிழமை நடந்த செய்தியாளர்கள் சந்திப்பில் இந்த தேசத்தின் மிகப்பெரிய உள்நாட்டு அச்சுறுத்தல் நக்சலைட்டுகளே, வரக்கூடிய காலங்களில், நக்சலைட்டுகளுக்கெதிரான போரில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராதாகிருஷ்ணன் ஐபிஎஸ் என்ற மாணிக்கம் (!!!!????)'),
            thumbnail:'/images/7600/argentina_panel_27_03_08-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/18/post7600.html",
            publishDate:"Oct 18, 2009",
            summary:$sce.trustAsHtml("ராஜீவ் தவான் “இந்த உலகில் நாம் மாணிக்கங்களை அரிதாகத்தான் காணமுடியும். ராதாகிருஷ்ணன் அது போன்றதொரு மாணிக்கம். அவர் உலகின் தலைச்சிறந்த காவல்துறை அதிகாரிகளில் ஒருவர். அவரைப் போன்ற காவல்துறை அதிகாரி 19/2 சம்பவத்தில் தவறாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நக்சலைட்டுகள் நாட்டின் பாதுகாப்புக்கு அச்சுறுத்தலா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/18/post7177.html",
            publishDate:"Oct 18, 2009",
            summary:$sce.trustAsHtml("நேற்று மன்மோகன் சிங் பேசிய இரு விஷயங்கள் நாம் கவனத்தில் கொள்ள வேண்டியன. ஞாயிற்றுக் கிழமை நடந்த செய்தியாளர்கள் சந்திப்பில் இந்த தேசத்தின் மிகப்பெரிய உள்நாட்டு அச்சுறுத்தல் நக்சலைட்டுகளே, வரக்கூடிய காலங்களில், நக்சலைட்டுகளுக்கெதிரான போரில்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராதாகிருஷ்ணன் ஐபிஎஸ் என்ற மாணிக்கம் (!!!!????)'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/18/post7176.html",
            publishDate:"Oct 18, 2009",
            summary:$sce.trustAsHtml("ராஜீவ் தவான் “இந்த உலகில் நாம் மாணிக்கங்களை அரிதாகத்தான் காணமுடியும். ராதாகிருஷ்ணன் அது போன்றதொரு மாணிக்கம். அவர் உலகின் தலைச்சிறந்த காவல்துறை அதிகாரிகளில் ஒருவர். அவரைப் போன்ற காவல்துறை அதிகாரி 19/2 சம்பவத்தில் தவறாக..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக அரசே செங்கல்பட்டு பூந்தமல்லி வதை முகாம்களை இழுத்து மூடு !'),
            thumbnail:'/images/7602/Image0065-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/10/04/post7602.html",
            publishDate:"Oct 4, 2009",
            summary:$sce.trustAsHtml("செங்கல்பட்டு பூந்தமல்லி (அகதி) முகாம்களை இழுத்து மூட வலியுறுத்தி கோட்டை முன் ஆர்ப்பாட்டம்செங்கல்பட்டு மற்றும் பூந்தமல்லியில், ஈழ அகதிகளுக்காக சிறப்பு முகாம் இயங்கி வருகிறது. நடைமுறையில் இது அகதிகள் முகாம் அல்ல ! இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக அரசே செங்கல்பட்டு பூந்தமல்லி வதை முகாம்களை இழுத்து மூடு !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/10/04/post7178.html",
            publishDate:"Oct 4, 2009",
            summary:$sce.trustAsHtml("செங்கல்பட்டு பூந்தமல்லி (அகதி) முகாம்களை இழுத்து மூட வலியுறுத்தி கோட்டை முன் ஆர்ப்பாட்டம்செங்கல்பட்டு மற்றும் பூந்தமல்லியில், ஈழ அகதிகளுக்காக சிறப்பு முகாம் இயங்கி வருகிறது. நடைமுறையில் இது அகதிகள் முகாம் அல்ல ! இது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜீவ் கொலையாளிகள் அரசை மிரட்டுகிறார்களா ?'),
            thumbnail:'/images/7603/Nalini-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/09/28/post7603.html",
            publishDate:"Sep 28, 2009",
            summary:$sce.trustAsHtml("நளினி சமீபத்தில், ராஜீவ் கொலை வழக்கில் தண்டனை பெற்றவர்களான ராபர்ட் பயாஸ் மற்றும் நளினி ஆகியோர், முன்விடுதலை கோரி சாகும் வரை உண்ணாவிரதம் மேற்கொண்டனர். ராபர்ட் பயஸ் இதையொட்டி, தேசிய ஊடகங்களில் கடும் விவாதம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜீவ் கொலையாளிகள் அரசை மிரட்டுகிறார்களா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/28/post7179.html",
            publishDate:"Sep 28, 2009",
            summary:$sce.trustAsHtml("நளினி சமீபத்தில், ராஜீவ் கொலை வழக்கில் தண்டனை பெற்றவர்களான ராபர்ட் பயாஸ் மற்றும் நளினி ஆகியோர், முன்விடுதலை கோரி சாகும் வரை உண்ணாவிரதம் மேற்கொண்டனர். ராபர்ட் பயஸ் இதையொட்டி, தேசிய ஊடகங்களில் கடும் விவாதம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிணங்களின் மீது உலகத் தமிழ் மாநாடு !'),
            thumbnail:'/images/7604/tblfpnnews_65835207701-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/09/24/post7604.html",
            publishDate:"Sep 24, 2009",
            summary:$sce.trustAsHtml("ஒரு மொழி என்பது யாரால் சிறப்பு பெறுகிறது ? மக்களால் சிறப்பு பெறுகிறது. “கல்தோன்றி மண்தோன்றா காலத்தே முன்தோன்றிய மூத்த குடி. “ என்றெல்லாம் பழம்பெருமை பேசி வருகிறோமே. இத்தனை ஆண்டுகாலம், மக்கள் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பிணங்களின் மீது உலகத் தமிழ் மாநாடு !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/24/post7180.html",
            publishDate:"Sep 24, 2009",
            summary:$sce.trustAsHtml("ஒரு மொழி என்பது யாரால் சிறப்பு பெறுகிறது ? மக்களால் சிறப்பு பெறுகிறது. “கல்தோன்றி மண்தோன்றா காலத்தே முன்தோன்றிய மூத்த குடி. “ என்றெல்லாம் பழம்பெருமை பேசி வருகிறோமே. இத்தனை ஆண்டுகாலம், மக்கள் இந்த..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிகாரிகளை நம்பி மோசம் போன ஜெயலலிதா !'),
            thumbnail:'/images/7605/27jaya.jpg',
            categories:['default',''],
            href:"/default/2009/09/23/post7605.html",
            publishDate:"Sep 23, 2009",
            summary:$sce.trustAsHtml("1991ல் ராஜீவ் மரணத்திற்குப் பின் ஏற்பட்ட அனுதாப அலையால், ஆட்சிக்கு வந்த ஜெயலலிதா, மக்கள் தனக்கு திடீரென தந்த பதவியை சரிவர பயன்படுத்தத் தவறினார். தமிழகம் வரலாறு காணாத ஊழலையும், அதிகார துஷ்பிரயோகத்தையும் சந்தித்தது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அதிகாரிகளை நம்பி மோசம் போன ஜெயலலிதா !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/23/post7181.html",
            publishDate:"Sep 23, 2009",
            summary:$sce.trustAsHtml("1991ல் ராஜீவ் மரணத்திற்குப் பின் ஏற்பட்ட அனுதாப அலையால், ஆட்சிக்கு வந்த ஜெயலலிதா, மக்கள் தனக்கு திடீரென தந்த பதவியை சரிவர பயன்படுத்தத் தவறினார். தமிழகம் வரலாறு காணாத ஊழலையும், அதிகார துஷ்பிரயோகத்தையும் சந்தித்தது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அறிஞர் அண்ணா கருணாநிதிக்கு எழுதிய கடிதம்'),
            thumbnail:'/images/7606/ANNA-2520-2520Approved-2520Photo-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/09/22/post7606.html",
            publishDate:"Sep 22, 2009",
            summary:$sce.trustAsHtml("கருணாநிதிக்கு “அண்ணா விருது“ வழங்கப்படுவதையொட்டி, அண்ணா கருணாநிதிக்கு எழுதிய கடிதம்.அன்புள்ள தம்பி,செப்டம்பர் 26ம் நாள், என் பெயரில் உனக்கு விருது வழங்கப்படுவதாக செய்தியறிந்தேன். இந்த நேரத்தில், இவ்விருது உனக்கு தகுதியானதுதானா என்ற எண்ணம் என்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அறிஞர் அண்ணா கருணாநிதிக்கு எழுதிய கடிதம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/22/post7182.html",
            publishDate:"Sep 22, 2009",
            summary:$sce.trustAsHtml("கருணாநிதிக்கு “அண்ணா விருது“ வழங்கப்படுவதையொட்டி, அண்ணா கருணாநிதிக்கு எழுதிய கடிதம்.அன்புள்ள தம்பி,செப்டம்பர் 26ம் நாள், என் பெயரில் உனக்கு விருது வழங்கப்படுவதாக செய்தியறிந்தேன். இந்த நேரத்தில், இவ்விருது உனக்கு தகுதியானதுதானா என்ற எண்ணம் என்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜன் லாக்கப் மரணம் காவல்துறையின் கோர முகம்'),
            thumbnail:'/images/7607/08_09_2009_003_004_009-104x150.jpg',
            categories:['default',''],
            href:"/default/2009/09/08/post7607.html",
            publishDate:"Sep 8, 2009",
            summary:$sce.trustAsHtml("சென்னையை அடுத்த பனையூரில், கடந்த 24.08.2009 அன்று இளங்கோவன் செட்டியார் மற்றும் அவரது மனைவி ரமணி ஆகியோர் சுட்டுக் கொல்லப்பட்டனர். அவர்களது மருமகள், காயமடைந்தார். இக்கொலை வழக்கில், ராஜன் எனும் சண்முகசுந்தரம் என்பவர், இக்கொலையை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ராஜன் லாக்கப் மரணம் காவல்துறையின் கோர முகம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/08/post7183.html",
            publishDate:"Sep 8, 2009",
            summary:$sce.trustAsHtml("சென்னையை அடுத்த பனையூரில், கடந்த 24.08.2009 அன்று இளங்கோவன் செட்டியார் மற்றும் அவரது மனைவி ரமணி ஆகியோர் சுட்டுக் கொல்லப்பட்டனர். அவர்களது மருமகள், காயமடைந்தார். இக்கொலை வழக்கில், ராஜன் எனும் சண்முகசுந்தரம் என்பவர், இக்கொலையை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீலாங்கரை இரட்டைக் கொலை.. சென்னை உயர்நீதிமன்றம் அதிரடி !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/07/post7608.html",
            publishDate:"Sep 7, 2009",
            summary:$sce.trustAsHtml("சென்னையை அடுத்த பனையூரில், கடந்த 24.08.2009 அன்று இளங்கோவன் செட்டியார் மற்றும் அவரது மனைவி ரமணி ஆகியோர் சுட்டுக் கொல்லப்பட்டனர். அவர்களது மருமகள், காயமடைந்தார். இக்கொலை வழக்கில், ராஜன் எனும் சண்முகசுந்தரம் என்பவர், இக்கொலையை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீலாங்கரை இரட்டைக் கொலை.. சென்னை உயர்நீதிமன்றம் அதிரடி !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/09/07/post7184.html",
            publishDate:"Sep 7, 2009",
            summary:$sce.trustAsHtml("சென்னையை அடுத்த பனையூரில், கடந்த 24.08.2009 அன்று இளங்கோவன் செட்டியார் மற்றும் அவரது மனைவி ரமணி ஆகியோர் சுட்டுக் கொல்லப்பட்டனர். அவர்களது மருமகள், காயமடைந்தார். இக்கொலை வழக்கில், ராஜன் எனும் சண்முகசுந்தரம் என்பவர், இக்கொலையை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏ.கே.விஸ்வநாதன், ஐபிஎஸ் மீது ஊழல் புகார்'),
            thumbnail:'/images/7609/2009031958090102.jpg',
            categories:['default',''],
            href:"/default/2009/08/31/post7609.html",
            publishDate:"Aug 31, 2009",
            summary:$sce.trustAsHtml("ஏ.கே.விஸ்வநாதன் ஐபிஎஸ் தமிழகத்தில் ஐஜி அந்தஸ்தில் இருக்கும் ஐபிஎஸ் அதிகாரியான ஏ.கே.விஸ்வநாதன் மீது ஊழல் புகார் எழுந்துள்ளது. சிபிஐன் ஊழல் ஒழிப்புப் பிரிவில் 5 ஆண்டுகள் எஸ்பியாகவும், டிஐஜியாகவும் பணியாற்றி, பின்னர், தமிழக லஞ்ச..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஏ.கே.விஸ்வநாதன், ஐபிஎஸ் மீது ஊழல் புகார்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/08/31/post7185.html",
            publishDate:"Aug 31, 2009",
            summary:$sce.trustAsHtml("ஏ.கே.விஸ்வநாதன் ஐபிஎஸ் தமிழகத்தில் ஐஜி அந்தஸ்தில் இருக்கும் ஐபிஎஸ் அதிகாரியான ஏ.கே.விஸ்வநாதன் மீது ஊழல் புகார் எழுந்துள்ளது. சிபிஐன் ஊழல் ஒழிப்புப் பிரிவில் 5 ஆண்டுகள் எஸ்பியாகவும், டிஐஜியாகவும் பணியாற்றி, பின்னர், தமிழக லஞ்ச..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக காவல்துறையில் உள்குத்து&#8230;.!'),
            thumbnail:'/images/7610/aaaaaaaaaaaaaaaaaaaa-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/08/30/post7610.html",
            publishDate:"Aug 30, 2009",
            summary:$sce.trustAsHtml("கடந்த பிப்ரவரி 19 அன்று சென்னை உயர்நீதிமன்ற வளாகத்தினுள் நடந்த வழக்கறிஞர்கள் மீதான கொடூர தாக்குதலை நாம் மறந்திருக்க இயலாது. ஒட்டுமொத்த வழக்கறிஞர் சமூகமும் இணைந்து, இத்தாக்குதலுக்கு எதிராக குரல் எழுப்பியும், போராடியும் ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழக காவல்துறையில் உள்குத்து&#8230;.!'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/08/30/post7186.html",
            publishDate:"Aug 30, 2009",
            summary:$sce.trustAsHtml("கடந்த பிப்ரவரி 19 அன்று சென்னை உயர்நீதிமன்ற வளாகத்தினுள் நடந்த வழக்கறிஞர்கள் மீதான கொடூர தாக்குதலை நாம் மறந்திருக்க இயலாது. ஒட்டுமொத்த வழக்கறிஞர் சமூகமும் இணைந்து, இத்தாக்குதலுக்கு எதிராக குரல் எழுப்பியும், போராடியும் ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூண்டில் அடைக்கப் பட்ட விடுதலை சிறுத்தை'),
            thumbnail:'/images/7611/thiruma-jail2-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/08/17/post7611.html",
            publishDate:"Aug 17, 2009",
            summary:$sce.trustAsHtml("ஆகஸ்ட் 17 விடுதலை சிறுத்தைகள் தலைவர் தொல் திருமாவளவனின் பிறந்த நாள். தமிழகத்தில் ஒரு நம்பிக்கைக்குரிய தலைவராக வளர்ந்து வந்தவர். பல தலித் தலைவர்கள் பெருந்தலைவர்களாக வளர்ந்ததும்,இயக்கத்தை மறந்து தங்களது சுயநலத்தைப் கவனத்தில் கொண்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கூண்டில் அடைக்கப் பட்ட விடுதலை சிறுத்தை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/08/17/post7187.html",
            publishDate:"Aug 17, 2009",
            summary:$sce.trustAsHtml("ஆகஸ்ட் 17 விடுதலை சிறுத்தைகள் தலைவர் தொல் திருமாவளவனின் பிறந்த நாள். தமிழகத்தில் ஒரு நம்பிக்கைக்குரிய தலைவராக வளர்ந்து வந்தவர். பல தலித் தலைவர்கள் பெருந்தலைவர்களாக வளர்ந்ததும்,இயக்கத்தை மறந்து தங்களது சுயநலத்தைப் கவனத்தில் கொண்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறைக் கைதிகள் உரிமைக்கான ஒரு பேரணி !'),
            thumbnail:'/images/7612/IMG_6540-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/08/11/post7612.html",
            publishDate:"Aug 11, 2009",
            summary:$sce.trustAsHtml("தமிழக மக்கள் உரிமைக் கழகம் சார்பில், சிறைக் கைதிகளுக்கான ஒரு கோரிக்கைப் பேரணி, 10.08.2009 அன்று நடைபெற்றது. 1) 7 ஆண்டுகள் தண்டனைக் கழித்த வாழ்நாள் சிறையாளிகளை விடுதலை செய்ய வேண்டும் 2) 10..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறைக் கைதிகள் உரிமைக்கான ஒரு பேரணி !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/08/11/post7188.html",
            publishDate:"Aug 11, 2009",
            summary:$sce.trustAsHtml("தமிழக மக்கள் உரிமைக் கழகம் சார்பில், சிறைக் கைதிகளுக்கான ஒரு கோரிக்கைப் பேரணி, 10.08.2009 அன்று நடைபெற்றது. 1) 7 ஆண்டுகள் தண்டனைக் கழித்த வாழ்நாள் சிறையாளிகளை விடுதலை செய்ய வேண்டும் 2) 10..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முத்துக்கருப்பன் IPS மீதான ஊழல் வழக்குகள் மூடப்பட்டன'),
            thumbnail:'/images/7613/18170373-146x150.jpg',
            categories:['default',''],
            href:"/default/2009/08/08/post7613.html",
            publishDate:"Aug 8, 2009",
            summary:$sce.trustAsHtml("முத்துக்கருப்பன், IPS 2001ம் ஆண்டில் ஜெயலலிதா ஆட்சிக்கு வந்தவுடன், மிகவும் போட்டிகள் அதிகம் இருக்கும் சென்னை மாநகர காவல் ஆணையாளராக நியமிக்கப் பட்டார் முத்துக்கருப்பன் IPS. கூடுதல் டிஜிபி தரத்திலான அதிகாரிகள் தான் சென்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('முத்துக்கருப்பன் IPS மீதான ஊழல் வழக்குகள் மூடப்பட்டன'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/08/08/post7189.html",
            publishDate:"Aug 8, 2009",
            summary:$sce.trustAsHtml("முத்துக்கருப்பன், IPS 2001ம் ஆண்டில் ஜெயலலிதா ஆட்சிக்கு வந்தவுடன், மிகவும் போட்டிகள் அதிகம் இருக்கும் சென்னை மாநகர காவல் ஆணையாளராக நியமிக்கப் பட்டார் முத்துக்கருப்பன் IPS. கூடுதல் டிஜிபி தரத்திலான அதிகாரிகள் தான் சென்னை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லஞ்ச ஒழிப்புத் துறை லஞ்சத்தை ஒழிக்கிறதா ? வளர்க்கிறதா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/07/31/post7614.html",
            publishDate:"Jul 31, 2009",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் லஞ்ச ஒழிப்புத் துறை என ஒரு துறை செயல்பட்டு வருகிறது என்பது “லஞ்சம் வாங்கிய விஏஓ கைது, லஞ்சம் வாங்கிய உதவியாளர் கைது, லஞ்சம் வாங்கிய காவலர் கைது“ என்று வரும் செய்திகளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('லஞ்ச ஒழிப்புத் துறை லஞ்சத்தை ஒழிக்கிறதா ? வளர்க்கிறதா ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/07/31/post7190.html",
            publishDate:"Jul 31, 2009",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் லஞ்ச ஒழிப்புத் துறை என ஒரு துறை செயல்பட்டு வருகிறது என்பது “லஞ்சம் வாங்கிய விஏஓ கைது, லஞ்சம் வாங்கிய உதவியாளர் கைது, லஞ்சம் வாங்கிய காவலர் கைது“ என்று வரும் செய்திகளை..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பெரியார் திடல் எனும் சங்கர மடம்'),
            thumbnail:'/images/7615/ramaswami_naicker-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/07/30/post7615.html",
            publishDate:"Jul 30, 2009",
            summary:$sce.trustAsHtml("தந்தை பெரியார் தன்னுடைய செல்வங்கள் அனைத்தையும் பகுத்தறிவு மற்றும் பகுத்தறிவுப் பிரச்சாரத்துக்காகவே அளித்தவர். இம்மக்களை மூடத்தனத்திலிருந்து விடுவித்து, விழிப்புணர்வு ஊட்ட வேண்டும் என்பதற்காகவே தன் வாழ்க்கையை தமிழ் கூறும் நல்லுலகத்துக்கு அர்ப்பணித்தவர். அந்தப் பெரியாரின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பெரியார் திடல் எனும் சங்கர மடம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/07/30/post7191.html",
            publishDate:"Jul 30, 2009",
            summary:$sce.trustAsHtml("தந்தை பெரியார் தன்னுடைய செல்வங்கள் அனைத்தையும் பகுத்தறிவு மற்றும் பகுத்தறிவுப் பிரச்சாரத்துக்காகவே அளித்தவர். இம்மக்களை மூடத்தனத்திலிருந்து விடுவித்து, விழிப்புணர்வு ஊட்ட வேண்டும் என்பதற்காகவே தன் வாழ்க்கையை தமிழ் கூறும் நல்லுலகத்துக்கு அர்ப்பணித்தவர். அந்தப் பெரியாரின்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறையில் நளினி சித்திரவதை, வேலூர் சிறையில் தொடரும் அவலம்'),
            thumbnail:'/images/7616/Nalini-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/07/28/post7616.html",
            publishDate:"Jul 28, 2009",
            summary:$sce.trustAsHtml("கடந்த டிசம்பர் மாதம், வேலூர் பெண்கள் சிறையில் சாரதா என்ற பெண்மணி சிறைக்காவலர்களால் கடுமையாக தாக்கப் பட்டு, நளினி அந்தச் செய்தியை தன் வழக்கறிஞர் புகழேந்தியிடம் தெரிவித்ததையடுத்து, சென்னை உயர்நீதிமன்றத்தில், ஆட்கொணர்வு மனு தாக்கல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறையில் நளினி சித்திரவதை, வேலூர் சிறையில் தொடரும் அவலம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/07/28/post7192.html",
            publishDate:"Jul 28, 2009",
            summary:$sce.trustAsHtml("கடந்த டிசம்பர் மாதம், வேலூர் பெண்கள் சிறையில் சாரதா என்ற பெண்மணி சிறைக்காவலர்களால் கடுமையாக தாக்கப் பட்டு, நளினி அந்தச் செய்தியை தன் வழக்கறிஞர் புகழேந்தியிடம் தெரிவித்ததையடுத்து, சென்னை உயர்நீதிமன்றத்தில், ஆட்கொணர்வு மனு தாக்கல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறையில் நடந்த சித்திரவதை !                                                                     சீறிய உயர்நீதிமன்றம் !'),
            thumbnail:'/images/7617/Nalini1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/07/19/post7617.html",
            publishDate:"Jul 19, 2009",
            summary:$sce.trustAsHtml("கடந்த ஆண்டு டிசம்பர் மாதத்தில், சாரதா என்ற 55 வயது பெண்மணி, ரயில்வே போலீசாரால் ஒரு திருட்டு வழக்கில் கைது செய்யப் பட்டு வேலூர் பெண்களுக்கான சிறையில் அடைக்கப் பட்டார். சிறையில் அடைக்கப்படுகையில் ரூ.5000/-..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறையில் நடந்த சித்திரவதை !                                                                     சீறிய உயர்நீதிமன்றம் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/07/19/post7193.html",
            publishDate:"Jul 19, 2009",
            summary:$sce.trustAsHtml("கடந்த ஆண்டு டிசம்பர் மாதத்தில், சாரதா என்ற 55 வயது பெண்மணி, ரயில்வே போலீசாரால் ஒரு திருட்டு வழக்கில் கைது செய்யப் பட்டு வேலூர் பெண்களுக்கான சிறையில் அடைக்கப் பட்டார். சிறையில் அடைக்கப்படுகையில் ரூ.5000/-..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதி எனும் மாயை !'),
            thumbnail:'/images/7618/rrj-125x150.jpg',
            categories:['default',''],
            href:"/default/2009/07/05/post7618.html",
            publishDate:"Jul 5, 2009",
            summary:$sce.trustAsHtml("நீதிபதி ரகுபதி திருச்சிக்கு அருகில் உள்ள ஒரு மாவட்டத்தைச் சேர்ந்தவர் டாக்டர் கிருஷ்ணமூர்த்தி. இவரது மகன் கிருபா ஸ்ரீதர் பாண்டிச்சேரியில் உள்ள ஒரு தனியார் மருத்துவக் கல்லூரியில் மூன்றாமாண்டு படிக்கிறார். அதில் கண் மருத்துவம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதி எனும் மாயை !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/07/05/post7194.html",
            publishDate:"Jul 5, 2009",
            summary:$sce.trustAsHtml("நீதிபதி ரகுபதி திருச்சிக்கு அருகில் உள்ள ஒரு மாவட்டத்தைச் சேர்ந்தவர் டாக்டர் கிருஷ்ணமூர்த்தி. இவரது மகன் கிருபா ஸ்ரீதர் பாண்டிச்சேரியில் உள்ள ஒரு தனியார் மருத்துவக் கல்லூரியில் மூன்றாமாண்டு படிக்கிறார். அதில் கண் மருத்துவம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய வடிவில் நெருக்கடி நிலை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/27/post7619.html",
            publishDate:"Jun 27, 2009",
            summary:$sce.trustAsHtml(". இந்தியன் எக்ஸ்பிரஸ் நாளிதழில் வந்த கட்டுரையின் தமிழாக்கம் சமீபத்தில், மனித உரிமைக் குழு ஒன்று ஈமெயில் ஒன்றை சுற்றுக்கு அனுப்பியிருந்தது. தேர்தல் முடிந்த பின்னால், ஐக்கிய முற்போக்கு கூட்டணி அரசாங்கத்தின் நோக்கம் தீவிரவாத..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('புதிய வடிவில் நெருக்கடி நிலை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/27/post7195.html",
            publishDate:"Jun 27, 2009",
            summary:$sce.trustAsHtml(". இந்தியன் எக்ஸ்பிரஸ் நாளிதழில் வந்த கட்டுரையின் தமிழாக்கம் சமீபத்தில், மனித உரிமைக் குழு ஒன்று ஈமெயில் ஒன்றை சுற்றுக்கு அனுப்பியிருந்தது. தேர்தல் முடிந்த பின்னால், ஐக்கிய முற்போக்கு கூட்டணி அரசாங்கத்தின் நோக்கம் தீவிரவாத..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்திய அரசியலில் வெற்றிடம்…. ??'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/22/post7620.html",
            publishDate:"Jun 22, 2009",
            summary:$sce.trustAsHtml("நடந்து முடிந்த பாராளுமன்றத் தேர்தல் பல அரசியல் கட்சிகளை நிலைகுலையச் செய்திருக்கிறது. காங்கிரஸ் கட்சி எதிர்பாராமல் கிடைத்த வெற்றியில், இறுமாப்புடன் இருக்கிறது. பிரதான எதிர்க் கட்சிகள், இந்த தோல்வியை எப்படி எதிர்கொள்வது, அடுத்து என்ன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்திய அரசியலில் வெற்றிடம்…. ??'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/22/post7196.html",
            publishDate:"Jun 22, 2009",
            summary:$sce.trustAsHtml("நடந்து முடிந்த பாராளுமன்றத் தேர்தல் பல அரசியல் கட்சிகளை நிலைகுலையச் செய்திருக்கிறது. காங்கிரஸ் கட்சி எதிர்பாராமல் கிடைத்த வெற்றியில், இறுமாப்புடன் இருக்கிறது. பிரதான எதிர்க் கட்சிகள், இந்த தோல்வியை எப்படி எதிர்கொள்வது, அடுத்து என்ன..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊருக்கு உபதேசம் செய்யும் சிபிஎம் ..'),
            thumbnail:'/images/7621/South_Asian_Communist_Banner-150x150.png',
            categories:['default',''],
            href:"/default/2009/06/13/post7621.html",
            publishDate:"Jun 13, 2009",
            summary:$sce.trustAsHtml("இந்தியாவில், பெரிய அளவில் ஊழல் புகார்கள் ஏதும் இல்லாமல், தொடர்ந்து இந்தியாவின் படித்த நடுத்தர வர்க்கத்தின் மன சாட்சியாக செயல்பட்டு வரும் மார்க்சிஸ்ட் கட்சி, அதன் வரலாற்றில் மிகப் பெரிய தோல்வியை சந்தித்து இன்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('ஊருக்கு உபதேசம் செய்யும் சிபிஎம் ..'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/13/post7197.html",
            publishDate:"Jun 13, 2009",
            summary:$sce.trustAsHtml("இந்தியாவில், பெரிய அளவில் ஊழல் புகார்கள் ஏதும் இல்லாமல், தொடர்ந்து இந்தியாவின் படித்த நடுத்தர வர்க்கத்தின் மன சாட்சியாக செயல்பட்டு வரும் மார்க்சிஸ்ட் கட்சி, அதன் வரலாற்றில் மிகப் பெரிய தோல்வியை சந்தித்து இன்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உல்லாச கருணாநிதியும்  உறங்கும் உள்துறையும்&#8230; &#8230;'),
            thumbnail:'/images/7622/Sivajisilverjublie110108_33-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/06/10/post7622.html",
            publishDate:"Jun 10, 2009",
            summary:$sce.trustAsHtml("தமிழகத்தில் முதலமைச்சராக உள் துறையையும் தன் வசத்தில் வைத்துக் கொண்டுள்ள கருணாநிதியின் ஆட்சிக்கு மேலும் ஒரு மணிமகுடம் ஏற்றப் பட்டுள்ளது. புழல் சிறைக்குள்ளேயே வெல்டிங் குமார் என்ற ஆயுள் தண்டனைக் கைதி சக கைதிகளால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உல்லாச கருணாநிதியும்  உறங்கும் உள்துறையும்&#8230; &#8230;'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/10/post7198.html",
            publishDate:"Jun 10, 2009",
            summary:$sce.trustAsHtml("தமிழகத்தில் முதலமைச்சராக உள் துறையையும் தன் வசத்தில் வைத்துக் கொண்டுள்ள கருணாநிதியின் ஆட்சிக்கு மேலும் ஒரு மணிமகுடம் ஏற்றப் பட்டுள்ளது. புழல் சிறைக்குள்ளேயே வெல்டிங் குமார் என்ற ஆயுள் தண்டனைக் கைதி சக கைதிகளால்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்திய ஜனநாயகம் எங்கே போகிறது … ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/06/post7624.html",
            publishDate:"Jun 6, 2009",
            summary:$sce.trustAsHtml("&#8220;There is enough in this world for everybodys need, but not enough for peoples&#8217; greed&#8221;மகாத்மா காந்தி நடந்து முடிந்த நாடாளுமன்றத் தேர்தலில், தமிழ் நாட்டில் ஏறத்தாழ எல்லா தொகுதிகளிலும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இந்திய ஜனநாயகம் எங்கே போகிறது … ?'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/06/post7200.html",
            publishDate:"Jun 6, 2009",
            summary:$sce.trustAsHtml("&#8220;There is enough in this world for everybodys need, but not enough for peoples&#8217; greed&#8221;மகாத்மா காந்தி நடந்து முடிந்த நாடாளுமன்றத் தேர்தலில், தமிழ் நாட்டில் ஏறத்தாழ எல்லா தொகுதிகளிலும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாயாண்டி குடும்பத்தார் திரைப்பட விமர்சனம்'),
            thumbnail:'/images/7625/2-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/06/05/post7625.html",
            publishDate:"Jun 5, 2009",
            summary:$sce.trustAsHtml("திமுக பட நிறுவனத்தின் தயாரிப்பில் வெளிவந்திருக்கிறது &#8220;மாயாண்டிக் குடும்பத்தார்&#8221; திரைப்படம். மிகுந்த பொருட்செலவில் பிரம்மாண்ட படைப்பாக வந்திருக்கிறது. கதாநாயகனாக நடிக்கும் கருணாநிதியே எழுதி இயக்கியுள்ள படம் இது. திருக்குவளையிலிருந்து ஒரு தகரப் பெட்டியோடு சென்னைக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மாயாண்டி குடும்பத்தார் திரைப்பட விமர்சனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/05/post7201.html",
            publishDate:"Jun 5, 2009",
            summary:$sce.trustAsHtml("திமுக பட நிறுவனத்தின் தயாரிப்பில் வெளிவந்திருக்கிறது &#8220;மாயாண்டிக் குடும்பத்தார்&#8221; திரைப்படம். மிகுந்த பொருட்செலவில் பிரம்மாண்ட படைப்பாக வந்திருக்கிறது. கதாநாயகனாக நடிக்கும் கருணாநிதியே எழுதி இயக்கியுள்ள படம் இது. திருக்குவளையிலிருந்து ஒரு தகரப் பெட்டியோடு சென்னைக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதி பிறந்த நாளில் கண்ணுக்கினிய காட்சிகள்.'),
            thumbnail:'/images/7626/E-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/06/04/post7626.html",
            publishDate:"Jun 4, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யவும். Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தள்ளாத வயதிலும் தணியாத அதிகார போதை'),
            thumbnail:'/images/7627/m-karunanidhi-sonia-gandhi-rahul-gandhi-dayanidhi-maran-2009-5-19-11-53-40-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/06/03/post7627.html",
            publishDate:"Jun 3, 2009",
            summary:$sce.trustAsHtml("இன்று கருணாநிதிக்கு 86வது பிறந்த நாள். சிறந்த தமிழறிஞர், சிறந்த நிர்வாகி, சிறந்த ராஜதந்திரி, சிறந்த அரசியல்வாதி, சிறந்த எழுத்தாளர், என்றெல்லாம் கருணாநிதியை புகழ வேண்டும் என்று ஆசையாகத் தான் இருக்கிறது. இந்தப் புகழ்ச்சிக்கெல்லாம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தள்ளாத வயதிலும் தணியாத அதிகார போதை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/03/post7203.html",
            publishDate:"Jun 3, 2009",
            summary:$sce.trustAsHtml("இன்று கருணாநிதிக்கு 86வது பிறந்த நாள். சிறந்த தமிழறிஞர், சிறந்த நிர்வாகி, சிறந்த ராஜதந்திரி, சிறந்த அரசியல்வாதி, சிறந்த எழுத்தாளர், என்றெல்லாம் கருணாநிதியை புகழ வேண்டும் என்று ஆசையாகத் தான் இருக்கிறது. இந்தப் புகழ்ச்சிக்கெல்லாம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதிக்கு ராசாத்தி அம்மாள் மனந்திறந்த மடல் !'),
            thumbnail:'/images/7629/rasaaathi-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/06/02/post7629.html",
            publishDate:"Jun 2, 2009",
            summary:$sce.trustAsHtml("அன்பரே !உங்களைப் போல் கொஞ்சும் தமிழில் எனக்கு எழுதத் தெரியாது. மந்திரத் தமிழில் மயக்கத் தெரியாது. என் மனதை எழுதத் தெரியும். உங்களுக்கு அப்போது பிடித்த &#8216;காகிதப் பூ&#8217; கதாநாயகி இப்போது உங்கள் மனம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசு ஊழியர்களும், கொடை வள்ளல் கருணாநிதியும்.,,,'),
            thumbnail:'/images/7628/govt-servants-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/06/02/post7628.html",
            publishDate:"Jun 2, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது அழுத்தவும் சமுதாயத்தில் நடக்கும் எதுவுமே தங்களை பாதிக்காது எங்களுக்கும் அதற்கும் சம்பந்தம் இல்லை என்பது போல், பாசாங்கு செய்து கொண்டு ஒரு கூட்டம் இருக்கிறது என்றால் அது அரசு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('கருணாநிதிக்கு ராசாத்தி அம்மாள் மனந்திறந்த மடல் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/02/post7205.html",
            publishDate:"Jun 2, 2009",
            summary:$sce.trustAsHtml("அன்பரே !உங்களைப் போல் கொஞ்சும் தமிழில் எனக்கு எழுதத் தெரியாது. மந்திரத் தமிழில் மயக்கத் தெரியாது. என் மனதை எழுதத் தெரியும். உங்களுக்கு அப்போது பிடித்த &#8216;காகிதப் பூ&#8217; கதாநாயகி இப்போது உங்கள் மனம்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசு ஊழியர்களும், கொடை வள்ளல் கருணாநிதியும்.,,,'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/06/02/post7204.html",
            publishDate:"Jun 2, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது அழுத்தவும் சமுதாயத்தில் நடக்கும் எதுவுமே தங்களை பாதிக்காது எங்களுக்கும் அதற்கும் சம்பந்தம் இல்லை என்பது போல், பாசாங்கு செய்து கொண்டு ஒரு கூட்டம் இருக்கிறது என்றால் அது அரசு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யாருக்கும் வெட்கமில்லை !'),
            thumbnail:'/images/7630/attachment5-150x150.jpeg',
            categories:['default',''],
            href:"/default/2009/05/28/post7630.html",
            publishDate:"May 28, 2009",
            summary:$sce.trustAsHtml("நன்றி. துக்ளக் ஒரு வழியாக கருணாநிதி நடத்திய உள்ளே வெளியே நாடகம் முடிவுக்கு வந்து விட்டது. தமிழினத் தலைவராய் இருப்பதைக் காட்டிலும், குடும்பத் தலைவராய் இருப்பதுதான் பிரதான பணி என அப்பணியை செவ்வனே செய்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('யாருக்கும் வெட்கமில்லை !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/28/post7206.html",
            publishDate:"May 28, 2009",
            summary:$sce.trustAsHtml("நன்றி. துக்ளக் ஒரு வழியாக கருணாநிதி நடத்திய உள்ளே வெளியே நாடகம் முடிவுக்கு வந்து விட்டது. தமிழினத் தலைவராய் இருப்பதைக் காட்டிலும், குடும்பத் தலைவராய் இருப்பதுதான் பிரதான பணி என அப்பணியை செவ்வனே செய்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உள்ளே வெளியே கருணாநிதியின் புதிய நாடகம்.'),
            thumbnail:'/images/7631/cartoon-1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/26/post7631.html",
            publishDate:"May 26, 2009",
            summary:$sce.trustAsHtml("நன்றி தினமணி ஒரு வழியாய் கருணாநிதியின் &#8220;உள்ளே வெளியே&#8221; ஓரங்க நாடகம் முடிவுக்கு வந்து விட்டது. கடந்த ஒரு வாரமாய் தேசிய ஊடகங்களிலும், தமிழ் ஊடகங்களிலும், இந்நாடகம் குறித்த செய்திகள் புளித்துப் போகும் அளவுக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதையும் பாருங்கள் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/23/post7632.html",
            publishDate:"May 23, 2009",
            summary:$sce.trustAsHtml("தமிழீழ தேசியத் தலைவர் பிரபாகரன் இறந்து விட்டார் என்ற செய்தி பரப்பப் பட்டதும், தமிழகமே துயரத்தில் ஆழ்ந்து, ஏதாவதொரு மூலையில் இருந்து அவர் இறக்கவில்லை என்ற நல்ல செய்தி வராதா என்ற ஏக்கத்தோடு, அலைந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('இதையும் பாருங்கள் !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/23/post7208.html",
            publishDate:"May 23, 2009",
            summary:$sce.trustAsHtml("தமிழீழ தேசியத் தலைவர் பிரபாகரன் இறந்து விட்டார் என்ற செய்தி பரப்பப் பட்டதும், தமிழகமே துயரத்தில் ஆழ்ந்து, ஏதாவதொரு மூலையில் இருந்து அவர் இறக்கவில்லை என்ற நல்ல செய்தி வராதா என்ற ஏக்கத்தோடு, அலைந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மந்திரி பதவி கொடுங்கள் தாயே !'),
            thumbnail:'/images/7634/05-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/22/post7634.html",
            publishDate:"May 22, 2009",
            summary:$sce.trustAsHtml("மூன்று எழுத்து.மூன்று எழுத்து. கூட்டு மூன்று எழுத்துஓட்டு மூன்று எழுத்துகட்சி மூன்று எழுத்துஆட்சி மூன்று எழுத்துதில்லி மூன்று எழுத்துசோனியா மூன்று எழுத்துராகுல் மூன்று எழுத்துதிமுக மூன்று எழுத்துபதவி மூன்று எழுத்துஇல்லை மூன்று எழுத்துஅல்வா மூன்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வடக்கு வழங்கவில்லை குடும்பம் செழிக்கவில்லை'),
            thumbnail:'/images/7633/vadugu-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/22/post7633.html",
            publishDate:"May 22, 2009",
            summary:$sce.trustAsHtml("உடன்பிறப்பே, பம்பரமாய்ச் சுற்றி, நாடாளுமன்ற தேர்தலில் நீ ஈட்டித்தந்த வெற்றி தெவிட்டாத தெள்ளமுதாய்ச் நாவில் சுவைக்கும் இவ்வேளையில், அச்சுவையிலே வேம்பைக் கலந்தது போல் கழகக் கண்மணிகளாம் அழகிரி, தயாநிதி, கனிமொழி, பாலு, ராசா ஆகியோருக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மந்திரி பதவி கொடுங்கள் தாயே !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/22/post7210.html",
            publishDate:"May 22, 2009",
            summary:$sce.trustAsHtml("மூன்று எழுத்து.மூன்று எழுத்து. கூட்டு மூன்று எழுத்துஓட்டு மூன்று எழுத்துகட்சி மூன்று எழுத்துஆட்சி மூன்று எழுத்துதில்லி மூன்று எழுத்துசோனியா மூன்று எழுத்துராகுல் மூன்று எழுத்துதிமுக மூன்று எழுத்துபதவி மூன்று எழுத்துஇல்லை மூன்று எழுத்துஅல்வா மூன்று..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('வடக்கு வழங்கவில்லை குடும்பம் செழிக்கவில்லை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/22/post7209.html",
            publishDate:"May 22, 2009",
            summary:$sce.trustAsHtml("உடன்பிறப்பே, பம்பரமாய்ச் சுற்றி, நாடாளுமன்ற தேர்தலில் நீ ஈட்டித்தந்த வெற்றி தெவிட்டாத தெள்ளமுதாய்ச் நாவில் சுவைக்கும் இவ்வேளையில், அச்சுவையிலே வேம்பைக் கலந்தது போல் கழகக் கண்மணிகளாம் அழகிரி, தயாநிதி, கனிமொழி, பாலு, ராசா ஆகியோருக்கு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதியின் ஆட்சியும் காவல்துறையின் சூழ்ச்சியும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/17/post7635.html",
            publishDate:"May 17, 2009",
            summary:$sce.trustAsHtml("நீதியின் ஆட்சியும் காவல்துறையின் சூழ்ச்சியும் ஈழத்தில் படுகொலையை நிறுத்த தன்னையே மாய்த்துக் கொண்ட முத்துக்குமார் மரணத்துக்குப் பிறகு சமூகத்தில் அனைத்துப் பிரிவினரின் போராட்டத்தை கருணாநிதி தன் கூலிப்படையாக செயல்படும் காவல்துறையை ஏவி விட்டு ஒடுக்கிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('நீதியின் ஆட்சியும் காவல்துறையின் சூழ்ச்சியும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/17/post7211.html",
            publishDate:"May 17, 2009",
            summary:$sce.trustAsHtml("நீதியின் ஆட்சியும் காவல்துறையின் சூழ்ச்சியும் ஈழத்தில் படுகொலையை நிறுத்த தன்னையே மாய்த்துக் கொண்ட முத்துக்குமார் மரணத்துக்குப் பிறகு சமூகத்தில் அனைத்துப் பிரிவினரின் போராட்டத்தை கருணாநிதி தன் கூலிப்படையாக செயல்படும் காவல்துறையை ஏவி விட்டு ஒடுக்கிய..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('அரசரைவிட அரசுக்கு விசுவாசம்'),
            thumbnail:'/images/7636/IMG_5648-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/12/post7636.html",
            publishDate:"May 12, 2009",
            summary:$sce.trustAsHtml("போலீசாரால் நீதிமன்றத்துக்கு அழைத்து வரப்படும் வழக்கறிஞர் புகழேந்தி கருணாநிதியின் அடிவருடியாய் செயல்படுவதில் காவல்துறை காட்டும் முனைப்பும் அவசரமும் வியக்கத் தக்கதாய் உள்ளது. ஆங்கிலத்தில் MORE LOYAL THAN THE KING HIMSELF என்று ஒரு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழ்நாட்டில் கருணாநிதியின் கொடுங்கோலாட்சி !'),
            thumbnail:'/images/7637/vadugu1-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/11/post7637.html",
            publishDate:"May 11, 2009",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் கருணாநிதியின் கொடுங்கோலாட்சி ! எமெர்ஜென்சியில் பல நெருக்கடிகளை சந்தித்ததாக மார்தட்டிக் கொள்ளும் முத்துவேல் கருணாநிதியும் அவர் குடும்பத்தினரும் தற்பொழுது தமிழ்நாட்டில் காவல்துறையின் துணையோடு செயல்படுத்தி வரும் அராஜகங்களும் அநியாயங்களும் வரன்முறையற்று வளர்ந்து கொண்டே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தமிழ்நாட்டில் கருணாநிதியின் கொடுங்கோலாட்சி !'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/11/post7213.html",
            publishDate:"May 11, 2009",
            summary:$sce.trustAsHtml("தமிழ்நாட்டில் கருணாநிதியின் கொடுங்கோலாட்சி ! எமெர்ஜென்சியில் பல நெருக்கடிகளை சந்தித்ததாக மார்தட்டிக் கொள்ளும் முத்துவேல் கருணாநிதியும் அவர் குடும்பத்தினரும் தற்பொழுது தமிழ்நாட்டில் காவல்துறையின் துணையோடு செயல்படுத்தி வரும் அராஜகங்களும் அநியாயங்களும் வரன்முறையற்று வளர்ந்து கொண்டே..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மவுன்ட் ரோட்டை மூடிய மன்மோகன் சிங்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/09/post7638.html",
            publishDate:"May 9, 2009",
            summary:$sce.trustAsHtml("மருத்துவமனையில் சிகிச்சை பெற்று வரும் கருணாநிதியை பார்த்து நலம் விசாரிப்பதற்காக இன்று சென்னையில் உள்ள அப்போல்லோ மருத்துவமனைக்கு மன்மோகன் சிங் வருகை தந்தார். இவர் வருகையை ஒட்டி ஜெமினி மேம்பாலம் முதல் சாந்தி தியேட்டர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('மவுன்ட் ரோட்டை மூடிய மன்மோகன் சிங்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/09/post7214.html",
            publishDate:"May 9, 2009",
            summary:$sce.trustAsHtml("மருத்துவமனையில் சிகிச்சை பெற்று வரும் கருணாநிதியை பார்த்து நலம் விசாரிப்பதற்காக இன்று சென்னையில் உள்ள அப்போல்லோ மருத்துவமனைக்கு மன்மோகன் சிங் வருகை தந்தார். இவர் வருகையை ஒட்டி ஜெமினி மேம்பாலம் முதல் சாந்தி தியேட்டர்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிபுசோரேன், பர்னாலா கருணாநிதி சந்திப்பு'),
            thumbnail:'/images/7639/kalais-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/05/post7639.html",
            publishDate:"May 5, 2009",
            summary:$sce.trustAsHtml("சென்னை அப்போல்லோ மருத்துவமனையில் அனுமதிக்கப் பட்டுள்ள சிபுசோரேன், ஆளுநர் பர்னாலா மற்றும் முதல்வர் கருணாநிதி ஆகியோர் சந்தித்து உரையாடினால் .. .. .. . ..(என்று ஒரு கற்பனை)கருணாநிதி : வாங்க சோரேன். எப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிபுசோரேன், பர்னாலா கருணாநிதி சந்திப்பு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/05/05/post7215.html",
            publishDate:"May 5, 2009",
            summary:$sce.trustAsHtml("சென்னை அப்போல்லோ மருத்துவமனையில் அனுமதிக்கப் பட்டுள்ள சிபுசோரேன், ஆளுநர் பர்னாலா மற்றும் முதல்வர் கருணாநிதி ஆகியோர் சந்தித்து உரையாடினால் .. .. .. . ..(என்று ஒரு கற்பனை)கருணாநிதி : வாங்க சோரேன். எப்படி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தம்பியின் உண்ணா விரதமும் அண்ணாவின் கவிதையும்'),
            thumbnail:'/images/7641/anna-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/05/01/post7641.html",
            publishDate:"May 1, 2009",
            summary:$sce.trustAsHtml("தமிழக அரசியல் வாரப் பத்திரிக்கையில் வெளிவந்துள்ள கவிதைஎழுதியவர் நக்கீரன்.படம் ஒப்பாரிசுத்தமானது என் சமாதிசத்தியமாய்ச் சொல்கிறேன் !ஆண்டுக்கு இரண்டு முறை தான் தம்பிகள் என் சமாதிக்கு வருவீர்கள்பிறந்த நாளில் ஒரு முறைமரித்த நாளில் மறு முறைஅது..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாராளுமன்ற தேர்தலில் ஜெயிக்கப் பட்டினி &#8211; கருணாநிதியின் புதிய நாடக விமரிசனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/30/post7642.html",
            publishDate:"Apr 30, 2009",
            summary:$sce.trustAsHtml("“பாராளுமன்ற தேர்தலில் ஜெயிக்கப் பட்டினி “கருணாநிதியின் புதிய நாடக விமரிசனம்தலைச்சிறந்த எழுத்தாளரான கலைஞர் மு.கருணாநிதி தான் எழுதி இயக்கி வரும் நாடகங்களின் தொடர்ச்சியாக “பாராளுமன்ற தேர்தலில் ஜெயிக்கப் பட்டினி” என்ற புதிய நாடகத்தை எழுதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பாராளுமன்ற தேர்தலில் ஜெயிக்கப் பட்டினி &#8211; கருணாநிதியின் புதிய நாடக விமரிசனம்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/30/post7218.html",
            publishDate:"Apr 30, 2009",
            summary:$sce.trustAsHtml("“பாராளுமன்ற தேர்தலில் ஜெயிக்கப் பட்டினி “கருணாநிதியின் புதிய நாடக விமரிசனம்தலைச்சிறந்த எழுத்தாளரான கலைஞர் மு.கருணாநிதி தான் எழுதி இயக்கி வரும் நாடகங்களின் தொடர்ச்சியாக “பாராளுமன்ற தேர்தலில் ஜெயிக்கப் பட்டினி” என்ற புதிய நாடகத்தை எழுதி..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பழநி பாரதியின் திராவகக் கவிதை'),
            thumbnail:'/images/7643/DSC07086-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/04/29/post7643.html",
            publishDate:"Apr 29, 2009",
            summary:$sce.trustAsHtml("ஜுனியர் விகடனில் வெளிவந்த பழனி பாரதியின் கவிதைஎன் சோற்றுத்தட்டில் மலத்தை அள்ளி வைக்கிறான் அவன்உண்ண விருப்பமில்லையென்றால் தட்டைக் கழுவி வைக்கச் சொல்கிறான்நான் ஒன்றும் பேசவே இல்லைஎன் சகோதரியை அழுந்தப் பிடித்துஅவள் கருக் குழியை சாம்பல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('பழநி பாரதியின் திராவகக் கவிதை'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/29/post7219.html",
            publishDate:"Apr 29, 2009",
            summary:$sce.trustAsHtml("ஜுனியர் விகடனில் வெளிவந்த பழனி பாரதியின் கவிதைஎன் சோற்றுத்தட்டில் மலத்தை அள்ளி வைக்கிறான் அவன்உண்ண விருப்பமில்லையென்றால் தட்டைக் கழுவி வைக்கச் சொல்கிறான்நான் ஒன்றும் பேசவே இல்லைஎன் சகோதரியை அழுந்தப் பிடித்துஅவள் கருக் குழியை சாம்பல்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உண்ணா விரதமும் கண்ணீர்க் காட்சிகளும்'),
            thumbnail:'/images/7644/slide-11-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/04/28/post7644.html",
            publishDate:"Apr 28, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யவும் Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('உண்ணா விரதமும் கண்ணீர்க் காட்சிகளும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/28/post7220.html",
            publishDate:"Apr 28, 2009",
            summary:$sce.trustAsHtml("படத்தை பெரிதாக்க படத்தின் மீது க்ளிக் செய்யவும் Share this:Share on FacebookClick to share on TwitterClick to share on Google+Click to share on TumblrClick to share on..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேர்தலில் யாருக்கு வாக்களிக்க வேண்டாம் என்ற குறுந்தகடு வெளியீடு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/27/post7645.html",
            publishDate:"Apr 27, 2009",
            summary:$sce.trustAsHtml("/&gt; இனி என்ன செய்யப் போகிறோம் என்ற தலைப்பில் ஈழத்தில் நடைபெறும் படுகொலைகளை விவரித்தும் இந்திய அரசு மற்றும் தமிழக அரசின் பங்கு என்ன என்று விளக்கும் சில குறுந்தகடுகள் பரவலாக விநியோகிக்கப் பட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தேர்தலில் யாருக்கு வாக்களிக்க வேண்டாம் என்ற குறுந்தகடு வெளியீடு'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/27/post7221.html",
            publishDate:"Apr 27, 2009",
            summary:$sce.trustAsHtml("/&gt; இனி என்ன செய்யப் போகிறோம் என்ற தலைப்பில் ஈழத்தில் நடைபெறும் படுகொலைகளை விவரித்தும் இந்திய அரசு மற்றும் தமிழக அரசின் பங்கு என்ன என்று விளக்கும் சில குறுந்தகடுகள் பரவலாக விநியோகிக்கப் பட்டு..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('23ந்தேதி வேலை நிறுத்தத்துக்கு ஆதரவு தருவாய் உடன்பிறப்பே'),
            thumbnail:'/images/7646/anniyan026gq-150x150.jpg',
            categories:['default',''],
            href:"/default/2009/04/22/post7646.html",
            publishDate:"Apr 22, 2009",
            summary:$sce.trustAsHtml("23ந் தேதி பந்த் க்கு ராஜபக்ஷே ஆதரவு &#8211; கருணாநிதி தகவல் ஈழத்தில் போரை நிறுத்த தேவையான அனைத்து நடவடிக்கைகளையும் எடுத்த பின்னாலும் (பதவியை மட்டும் விடாமல்) ஈழத்தில் போர் நிறுத்தப் படாமல் தொடர்ந்து..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தொலைபேசி ஒட்டுக்கேட்பும் கருணாநிதியின் கபடநாடகமும்'),
            thumbnail:'/images/7647/poongo-2520resugn-147x150.jpg',
            categories:['default',''],
            href:"/default/2009/04/21/post7647.html",
            publishDate:"Apr 21, 2009",
            summary:$sce.trustAsHtml("14.04.2009.. .. .. சரியாக ஒரு வருடம் முடிந்து விட்டது. &lt;align="justify"&gt;எதற்கு ஒரு வருடம் முடிந்து விட்டது என்கிறீர்களா ? 14.04.2008 அன்று டெக்கான் க்ரானிக்கிள் நாளிதழில் முன்னாள் தலைமைச் செயலாளர் திரிபாதி அவர்களுக்கும்..."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('தொலைபேசி ஒட்டுக்கேட்பும் கருணாநிதியின் கபடநாடகமும்'),
            thumbnail:'',
            categories:['default',''],
            href:"/default/2009/04/21/post7223.html",
            publishDate:"Apr 21, 2009",
            summary:$sce.trustAsHtml("14.04.2009.. .. .. சரியாக ஒரு வருடம் முடிந்து விட்டது. &lt;align="justify"&gt;எதற்கு ஒரு வருடம் முடிந்து விட்டது என்கிறீர்களா ? 14.04.2008 அன்று டெக்கான் க்ரானிக்கிள் நாளிதழில் முன்னாள் தலைமைச் செயலாளர் திரிபாதி அவர்களுக்கும்..."),
            done:false
    });
    

    filteredPosts=$scope.posts.slice(0);
};

  $scope.figureOutPostsToDisplay = function() {
    if($scope.filteredCategory!="") {
      $scope.filteredPosts=[];
      for (var i = 0; i < $scope.posts.length; i++) {
        if($scope.posts[i].categories[0]==$scope.filteredCategory)
        {
          $scope.filteredPosts.push($scope.posts[i]);
        }
      }
      $scope.currentPage=1;
    }
    else {
      $scope.filteredPosts = $scope.posts.slice(0);
    }

    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
    var end = begin + $scope.itemsPerPage;
    $scope.pagePosts = $scope.filteredPosts.slice(begin, end);
  };

  $scope.recentPosts=function() {
    if($scope.posts.length>10)
    {
      return $scope.posts.slice(0,10);
    }
    else
    return $scope.posts;
  };

  $scope.makePosts();
  $scope.figureOutPostsToDisplay();

  $scope.pageChanged = function() {
    $scope.figureOutPostsToDisplay();
  };

$scope.status = {
  isopen: false
};

$scope.toggled = function(open) {
  console.log('Dropdown is now: ', open);
};

$scope.toggleDropdown = function($event) {
  $event.preventDefault();
  $event.stopPropagation();
  $scope.status.isopen = !$scope.status.isopen;
};
});
