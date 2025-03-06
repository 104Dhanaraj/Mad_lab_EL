(function()
{
    self.addEventListener('install', event =>{
        console.log('sw is installing');
        self.skipWaiting();
    });
    self.addEventListener('activate', event =>{
        console.log('sw is activating');
        
    });
    self.addEventListener('fetch', event =>{
        console.log('sw is fetching', event.request.url);
        
    });
}
)