var posts = angular.module('postapp', ['ui.bootstrap']);

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
			title:$sce.trustAsHtml('தண்ணீர் விட்டோ வளர்த்தோம் சர்வேசா&#8230;'),
            thumbnail:'/images/9085/DSC_0642-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/11/29/post9085.html",
            publishDate:"Nov 29, 2014",
            summary:$sce.trustAsHtml("தண்ணீர் விட்டோ வளர்த்தோம் சர்வேசா இப்பயிரைகண்ணீரால் காத்தோம் கருகத் திருவுளமோ? என்றான் பாரதி.இதே போன்ற வேதனையான நிலையில்தான் தமிழகம் இன்று இருக்கிறது. இந்தியாவில் எங்கும் காணப்படாத வகையில் ஒரு அசாதாரண சூழல் தமிழத்தில் நிலவுகிறது...."),
            done:false
    });
    
		$scope.posts.push(
		{
			title:$sce.trustAsHtml('சிறை  செல்லும் சீமாட்டி &#8211; பாகம் 2'),
            thumbnail:'/images/9032/JAYALALITHA-PHOTOS-TN-CM-JAYALALITHA-PHOTOS-AMMA-PHOTOS-FOR-FLEX-JAYALALITHA-PHOTOS-FOR-FLEX-PRINTING-HIGH-QUALITY-JAYALALITHA-PHOTOS-AMMA-HQ-PHOTOS-TAMILANDU-CM-AMMA-PHOTOS18-150x150.jpg',
            categories:['default',''],
            href:"/default/2014/11/27/post9032.html",
            publishDate:"Nov 27, 2014",
            summary:$sce.trustAsHtml("சிறை செல்லும் சீமாட்டியின் முதல் பாகத்தை படிக்காதவர்கள் படித்து விடுங்கள்.  இணைப்பு வரும் டிசம்பர் 18 அன்று ஜெயலலிதாவின் மேல் முறையீட்டு மனு உச்சநீதிமன்றத்தில் விசாரணைக்கு வருகிறது.  அன்று, ஜெயலலிதாவின் அப்பீல் கர்நாடக உயர்நீதிமன்றத்தில் எத்தனை..."),
            done:false
    });
    
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
