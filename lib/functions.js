const axios = require('axios');

//API Calls: These references allows us to retrieve Axios' promises and extract the response data for use elsewhere.   
const getTournaments = () => { 
    return axios.get(`https://www.globaltennisnetwork.com/component/api?apiCall=getTournaments&format=raw&devKey=93006-Yv11CRiEEQ&gender=B&latitude=28.53&longtitude=-81.37&limit=100`)
}
const getLadders = () => { 
    return axios.get(`https://www.globaltennisnetwork.com/component/api?apiCall=getLadders&format=raw&devKey=93006-Yv11CRiEEQ&gender=M&latitude=28.53&longtitude=-81.37&limit=100`)
}

const buildPlayers = async function(player){
    const data = { player };
    return(data)
}
    
const buildEvents = async function(event){
    //We package all gathered 'data' - event, tournament, ladder - starting with event 
    const data = { event };

    //API Call to Global Tennis Network, grabbing tournament, filtering for US only
    const allTournaments = await getTournaments().then((response) => response.data);
    data.tournament = allTournaments.filter(function(item){
        return item.country === 'United States';
    });
        
    //API Call to Global Tennis Network, grabbing ladder, filtering for US only
    const allLadders = await getLadders().then((response) => response.data);
    data.ladder = allLadders.filter(function(item){
        return item.country === 'United States';
    });

    // console.log(data.tournament);
    // console.log(data.ladder);

    return(data);    
}


module.exports = {
    getTournaments,
    getLadders,
    buildEvents,
    buildPlayers
}
