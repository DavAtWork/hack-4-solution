export default async function Artist(){
    
    `https://api.unsplash.com/users/${username}/photos/?client_id=${api_key}`

    const url = `https://api.unsplash.com/users/ashbot/photos/?client_id=34k0v7zAAU1jHWUJ4ZIiyZQClidhjXNxZawR-8QNZaI`
    const request = await fetch(url)
    const data = await request.json()
    
    console.log(data);

}