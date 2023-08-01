function make_album(artist_name:string,album_title:string,num_tracks?:number){
    let music_album = {};

    if(num_tracks==undefined){
        music_album={
            "name" : artist_name,
            "title":album_title,
        };  
    }
    else{
        music_album={
            "name" : artist_name,
            "title":album_title,
            "track":num_tracks,
        };
    }
    return music_album
}
let album1=make_album("Jack","Music Series",)
let album2=make_album("Cena John","Music World",54)
let album3=make_album("Mark Wood","Spotify",99)
console.log(album1);
console.log(album2);
console.log(album3);
