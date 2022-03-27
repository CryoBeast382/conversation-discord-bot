let auth = require('./auth.json')

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('testingyay is online!');
});

client.on('message', message =>{
    console.log(`${message.author.username} says: ${message.content} in: ${message.channel.name}`);

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);    
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCi2Ra_VN4Agu-ufumxAFOkQ. Click the link for the youtube channel!');
    } else if (command == 'hi'){
        message.channel.send('Hi! If you would like to continue on with conversation please type ".you"');
    } else if (command == 'you'){
        message.channel.send(' I am still a work in progress and Im sorry if im faulty. Please contact the owner of me if you want to know more. type ".about" to learn more. ');
    } else if (command == 'about'){
        message.channel.send('I am a bot created with the programming language JavaScript. If you want to learn how to create a discord server type ".server" If you want to know how to make a discord bot type ".bot" or to continue the conversation type ".me"')
    } else if (command == 'server'){
        message.channel.send('here is the discord server tutorial. https://www.google.com/search?q=how+to+create+a+discord+server+youtube&rlz=1C1CHBF_enUS933US933&sxsrf=ALeKk01L98k5gLmGf8NiaTX_y5BZWtuwhw%3A1619459030816&ei=1vuGYJqaMY2GtQa1iKGYBQ&oq=how+to+create+a+discord+server+youtube&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEBYQHjoHCAAQRxCwAzoHCAAQsAMQQzoNCC4QsAMQyAMQQxCTAjoKCC4QsAMQyAMQQzoCCABKBQg4EgExUJEaWOwiYMkjaAFwAngAgAGaAYgBsQaSAQM3LjKYAQCgAQGqAQdnd3Mtd2l6yAELwAEB&sclient=gws-wiz&ved=0ahUKEwia3YmCu5zwAhUNQ80KHTVECFMQ4dUDCA4&uact=5#kpvalbx=_3PuGYMWhEtv0tAb69oTADQ32')
    } else if (command == 'bot'){
        message.channel.send('here is the discord bot tutorial. https://www.youtube.com/watch?v=X_qg0Ut9nU8')
    } else if (command == 'test'){
        message.channel.send('@everyone I am online for people to use. :)')
    } else if (command == 'dang'){
        message.channel.send('@everyone I am going offline to be tested and improved. To use me wait until my messaging say I am back online or until the discord server owner says I am ready to use. ::))')
    } else if (command == 'secret'){
        message.channel.send('*ooooooooo* *you have activated the* ***secret*** command. type ".bet" for the secret commandddddddd.')
    } else if (command == 'bet'){
        message.channel.send('IM A BEAR AND I MADE A SHOE AND THREW IT IN THE ROAD... Me: *cool*')
    } else if (command == 'me'){
        message.channel.send('How are you today? (When you answer type ".good" or ".bad")')
    } else if (command == 'good'){
        message.channel.send('I know this was only artificial conversation but I am being worked on and trying to be improved. If you have any suggestions for how I could be better please contact the person who made me. CryoBeast382_YT#7348')
    } else if (command == 'conversation'){
        message.channel.send('Yes? (type ".hi" to start a conversation')
    }
    else if (command == 'beast'){
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }
    else if (command == 'ee'){
        message.channel.send('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    }
    else if (command == 'bad'){
        message.channel.send('why are you bad today?')
    }
    else if (command == 'idk'){
        message.channel.send('ok well Im sorry that you are bad today.')
    }
    else if (command == 'idk.'){
        message.channel.send('ok well Im sorry that you are bad today.')
    }
    else if (command == 'because'){
        message.channel.send('ok well Im sorry that you are bad today.')
    }
    else if (command == 'reasons.'){
        message.channel.send('ok well Im sorry that you are bad today.')
    }
    else if (command == 'reasons'){
        message.channel.send('ok well Im sorry that you are bad today.')
    }
    else if (command == 'commands'){
        message.channel.send('commands. ".ping", ".youtube", ".hi", ".you", ".about", ".server", ".bot", ".test", ".dang", ".bet", ".me", ".good", ".beast", ".ee", ".idk", ".idk.", ".because", ".reasons.", ".reasons", ".commands" there will most likely be more commands to come but this is the list so far! There is also a secret command that I will do every once in a while so that you guys can maybe figure it out!')
    }
});

client.login(auth.token); 
