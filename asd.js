var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.tiktok.com/api/privacy/user/private_account/update/v1?aid=1988&app_language=en&app_name=tiktok_web&battery_info=0.96&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=&channel=tiktok_web&cookie_enabled=true&device_id=&device_platform=web_pc&field=private_account&focus_state=true&from_page=setting&history_len=14&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=GB&referer=https%3A%2F%2Fwww.tiktok.com%2Fmessages%3Flang%3Den&region=IL&root_referer=https%3A%2F%2Fwww.tiktok.com%2F%40mrhavitmrhavit&screen_height=1080&screen_width=1920&tt_csrf_token=&tz_name=Asia%2FJerusalem&value=0&verifyFp=&webcast_language=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("X-Secsdk-Csrf-Token", "00010000000105bc4fb8f8bfa0ec67b6ea55f3932a30c32eaa388e54876960be6735342e4329175087cb5136883c");
xhr.send('field=private_account&tt_csrf_token=&value=0');
