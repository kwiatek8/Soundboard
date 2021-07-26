resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

client_script('client.lua')

ui_page('index.html')

files({
    'index.html',
    'script.js',
    'style.css',
})

exports {
	'soundboard_display',
}