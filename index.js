const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client();
var godarray = new Array();
var number = 0;
var peoplename = new Array();
var godrnd = new Array();

peoplename[0] = new Array("");
peoplename[1] = new Array("");
peoplename[2] = new Array("");
peoplename[3] = new Array("");
peoplename[4] = new Array("");


godrnd[0] = new Array("12345");
godrnd[1] = new Array("12345");
godrnd[2] = new Array("12345");
godrnd[3] = new Array("12345");
godrnd[4] = new Array("12345");


godarray[0] = new Array("Achilles");
godarray[1] = new Array("Agni");
godarray[2] = new Array("Ah Muzen Cab");
godarray[3] = new Array("Ah Puch");
godarray[4] = new Array("Amatersu");
godarray[5] = new Array("Anhur");
godarray[6] = new Array("Anubis");
godarray[7] = new Array("Ao Kuang");
godarray[8] = new Array("Aphrodite");
godarray[9] = new Array("Apollo");
godarray[10] = new Array("Arachne");
godarray[11] = new Array("Ares");
godarray[12] = new Array("Artemis");
godarray[13] = new Array("Artio");
godarray[14] = new Array("Athena");
godarray[15] = new Array("Awilix");
godarray[16] = new Array("Bacchus");
godarray[17] = new Array("Bakasura");
godarray[18] = new Array("Baron Samedi");
godarray[19] = new Array("Bastet");
godarray[20] = new Array("Bellona");
godarray[21] = new Array("Cabrakan");
godarray[22] = new Array("Camazotz");
godarray[23] = new Array("Cerberus");
godarray[24] = new Array("Cernunnos");
godarray[25] = new Array("Chaac");
godarray[26] = new Array("Chang'e");
godarray[27] = new Array("Chernobog");
godarray[28] = new Array("Chiron");
godarray[29] = new Array("Chronos");
godarray[30] = new Array("Cu Chulainn");
godarray[31] = new Array("Cupid");
godarray[32] = new Array("Da Ji");
godarray[33] = new Array("Discodia");
godarray[34] = new Array("Erlang Shen");
godarray[35] = new Array("Fafnir");
godarray[36] = new Array("Fenrir");
godarray[37] = new Array("Freya");
godarray[38] = new Array("Ganesha");
godarray[39] = new Array("Geb");
godarray[40] = new Array("Guan Yu");
godarray[41] = new Array("Hachiman");
godarray[42] = new Array("Hades");
godarray[43] = new Array("He Bo");
godarray[44] = new Array("Heimdallr");
godarray[45] = new Array("Hel");
godarray[46] = new Array("Hera");
godarray[47] = new Array("Hercules");
godarray[48] = new Array("Horus");
godarray[49] = new Array("Hou Yi");
godarray[50] = new Array("Hun Batz");
godarray[51] = new Array("Isis");
godarray[52] = new Array("Izanami");
godarray[53] = new Array("Janus");
godarray[54] = new Array("Jing Wei");
godarray[55] = new Array("Jormungandr");
godarray[56] = new Array("Kali");
godarray[57] = new Array("Khepri");
godarray[58] = new Array("King Arthur");
godarray[59] = new Array("Kukulkan");
godarray[60] = new Array("Kumbhakarna");
godarray[61] = new Array("Kuzenbo");
godarray[62] = new Array("Loki");
godarray[63] = new Array("Medusa");
godarray[64] = new Array("Mercury");
godarray[65] = new Array("Merlin");
godarray[66] = new Array("Mulan");
godarray[67] = new Array("Ne Zha");
godarray[68] = new Array("Neith");
godarray[69] = new Array("Nemesis");
godarray[70] = new Array("Nike");
godarray[71] = new Array("Nox");
godarray[72] = new Array("Nu Wa");
godarray[73] = new Array("Odin");
godarray[74] = new Array("Olorun");
godarray[75] = new Array("Osiris");
godarray[76] = new Array("Pele");
godarray[77] = new Array("Persephone");
godarray[78] = new Array("Poseidon");
godarray[79] = new Array("Ra");
godarray[80] = new Array("Raijin");
godarray[81] = new Array("Rama");
godarray[82] = new Array("Rataoskr");
godarray[83] = new Array("Ravana");
godarray[84] = new Array("Scylla");
godarray[85] = new Array("Serqet");
godarray[86] = new Array("Set");
godarray[87] = new Array("Skadi");
godarray[88] = new Array("Sobek");
godarray[89] = new Array("Sol");
godarray[90] = new Array("Sun Wukong");
godarray[91] = new Array("Susano");
godarray[92] = new Array("Sylvanus");
godarray[93] = new Array("Terra");
godarray[94] = new Array("Thanatos");
godarray[95] = new Array("The Morrigan");
godarray[96] = new Array("Thor");
godarray[97] = new Array("Thoth");
godarray[98] = new Array("Tyr");
godarray[99] = new Array("Ullr");
godarray[100] = new Array("Vamana");
godarray[101] = new Array("Vulcan");
godarray[102] = new Array("Xbalanque");
godarray[103] = new Array("Xing Tian");
godarray[104] = new Array("Yemoja");
godarray[105] = new Array("Ymir");
godarray[106] = new Array("Zues");
godarray[107] = new Array("Zhong Kui");
godarray[108] = new Array("Baba Yaga");




var test;
var namestorage;
var rndselct = true;

var loopover = true;


client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    console.log(message.content);
    
    temp = message.content;


    if(message.content.startsWith(`!god`)) {

        var loop = 0;
        test = message.mentions.users.size;
        console.log(test);

     
        namestorage = message.mentions.users.keyArray()
        
        
       while(test > loop)
      {
     
        
        
        peoplename[loop] = namestorage.splice(0,1)
        
        //console.log(peoplename[loop])
        

        while(rndselct == true)
        {
            number = Math.floor(Math.random() * 109); //was 3
            console.log(number)
            godrnd[loop] = number
            if(loop == 0)
            {
                if(godrnd[loop] == godrnd[1] || godrnd[loop] == godrnd[2] || godrnd[loop] == godrnd[3] || godrnd[loop] == godrnd[4])
                {
                    rndselct = true
                    
                }
                else
                {
                    rndselct = false
                }
            }
            if(loop == 1)
            {
                if(godrnd[loop] == godrnd[0] || godrnd[loop] == godrnd[2] || godrnd[loop] == godrnd[3] || godrnd[loop] == godrnd[4])
                {
                    rndselct = true
                    
                }
                else
                {
                    rndselct = false
                }
            }
            if(loop == 2)
            {
                if(godrnd[loop] == godrnd[0] || godrnd[loop] == godrnd[1] || godrnd[loop] == godrnd[3] || godrnd[loop] == godrnd[4])
                {
                    rndselct = true
                }
                else
                {
                    rndselct = false
                }
            }
            if(loop == 3)
            {
                if(godrnd[loop] == godrnd[0] || godrnd[loop] == godrnd[1] || godrnd[loop] == godrnd[2] || godrnd[loop] == godrnd[4])
                {
                    rndselct = true
                }
                else
                {
                    rndselct = false
                }
            }
            if(loop == 4)
            {
                if(godrnd[loop] == godrnd[0] || godrnd[loop] == godrnd[1] || godrnd[loop] == godrnd[2] || godrnd[loop] == godrnd[3])
                {
                    rndselct = true
                }
                else
                {
                    rndselct = false
                }
            }
            

            
        }


        loop = loop + 1;
        rndselct = true;

       }
       

    
        
        loop = 0
        
        while(test > loop)
        {
            message.channel.send("<@" + peoplename[loop] + "> you got " + godarray[godrnd[loop]])
            loop = loop + 1
        }

        
        
       
        

    }
    

})


client.login(token);

