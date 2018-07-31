new Vue ({
	el: '#header',
	data: {
		massage: "Change Password ",
        massageSlim: "Links"
	}
});

new Vue ({
	el: '#footer',
	data: {
		dev: "Anton M. Dudarev", 
		siteName: "http://anton.dudarev.com"
	}
});

new Vue({
    el: '#list',
    data: {
        siteTitle: '',
        newSite: '',
        newSiteURL: '',
        sites: [
            {siteTitle:'Amazon', company:'https://www.amazon.com/gp/css/homepage.html', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-1'}, 
            {siteTitle:'Coursera', company:'https://www.coursera.org/account/settings', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-2'},
            {siteTitle:'Delicious', company:'https://delicious.com/settings/password', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-3'},
            {siteTitle:'Facebook', company:'https://www.facebook.com/settings?tab=account&section=password&view', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-4'}, 
            {siteTitle:'Foursquare', company:'https://foursquare.com/change_password', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-4'}, 
            {siteTitle:'GitHub', company:'https://github.com/settings/admin', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-5'},
            {siteTitle:'Google', company:'https://accounts.google.com/b/0/EditPasswd?hl=en&continue=https://www.google.com/settings/security', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-6'},
            {siteTitle:'HipChat', company:'https://yourteam.hipchat.com/account/password', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-7'},
            {siteTitle:'LinkedIn', company:'https://www.linkedin.com/settings/?trk=nav_account_sub_nav_settings', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-8'}, 
            {siteTitle:'Payoneer', company:'https://myaccount.payoneer.com/MainPage/ChangePassword.aspx', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-9'},
            {siteTitle:'Pinterest', company:'https://www.pinterest.com/settings/', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-10'},
            {siteTitle:'Pocket', company:'https://getpocket.com/changepass', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-11'},
            {siteTitle:'Reddit', company:'https://www.reddit.com/prefs/update/', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-12'}, 
            {siteTitle:'Slack', company:'https://gromadco.slack.com/account/settings', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-13'},
            {siteTitle:'Twitter', company:'https://twitter.com/settings/password', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-14'},
            {siteTitle:'Vkontakte', company:'https://vk.com/settings', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-15'},
            {siteTitle:'Yahoo', company:'https://edit.yahoo.com/config/eval_profile', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-16'}, 
            {siteTitle:'Yandex', company:'https://passport.yandex.ru/passport?mode=changepass', siteIcon:'./icon/favicon-facebook.png', checkTitle:'box-17'},           
        ]
    },

    computed:{
        filteredList: function(){
            var comp = this.siteTitle;
            return this.sites.filter(function (elem) {
                if(comp==='') return true;
                else return elem.siteTitle.indexOf(comp) > -1;
            })
        }
    }
});

$( function() {
	$( "#sortable" ).sortable({
	   revert: true
	});
	$( "#draggable" ).draggable({
		connectToSortable: "#sortable",
		helper: "clone",
		revert: "invalid"
	});
	$( "ul, li" ).disableSelection();
});

