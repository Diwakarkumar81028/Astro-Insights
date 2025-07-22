const box=document.getElementById('box');
const zodiacSigns = [
  "Aries",       // March 21 – April 19
  "Taurus",      // April 20 – May 20
  "Gemini",      // May 21 – June 20
  "Cancer",      // June 21 – July 22
  "Leo",         // July 23 – August 22
  "Virgo",       // August 23 – September 22
  "Libra",       // September 23 – October 22
  "Scorpio",     // October 23 – November 21
  "Sagittarius", // November 22 – December 21
  "Capricorn",   // December 22 – January 19
  "Aquarius",    // January 20 – February 18
  "Pisces"       // February 19 – March 20
];
const compliments = [
  "Your energy lights up every room you enter.",
  "You have a cosmic charm that’s truly magnetic.",
  "Your intuition is as powerful as the stars themselves.",
  "You radiate positivity, just like your zodiac sign.",
  "You're a true celestial soul with a heart full of magic.",
  "The universe is proud to have someone like you in it.",
  "You bring balance and beauty wherever you go.",
  "Like your sign, you're full of strength and grace.",
  "You inspire others just by being your authentic self.",
  "Your aura is as bright as the morning sun.",
  "You're perfectly aligned with the universe's best vibes.",
  "You have the calm of the moon and the fire of the stars.",
  "The stars couldn’t have created a more amazing person.",
  "Your presence is both grounding and uplifting.",
  "Your zodiac sign gifts you with unique beauty and wisdom.",
  "You carry the strength of your sign with elegance.",
  "You're the kind of soul that makes the galaxy smile.",
  "Your destiny shines brighter than any constellation.",
  "You are the universe’s favorite kind of rare.",
  "Your spirit is timeless, just like the stars above."
];
const victim= [
  "You always care for others, but they rarely care for you the same way.",
  "You support everyone, yet feel alone when you need support.",
  "You remember everyone’s pain, but no one remembers yours.",
  "You give your time and energy, and get ignored in return.",
  "You stay loyal, even to those who don't value your presence.",
  "You’re always there for others, but they vanish when it’s your turn.",
  "You put others first, and they still take you for granted.",
  "You spread kindness, but receive silence in return.",
  "You carry others through their storms, while hiding your own tears.",
  "You stay strong for everyone, but no one asks how you’re doing.",
  "You forgive easily, but others keep hurting you.",
  "You help people heal, while your heart quietly breaks.",
  "You give without expectations, yet feel the most disappointed.",
  "You’re always the reason for someone’s smile, but no one sees your sadness.",
  "You love deeply, and others treat it like it’s nothing.",
  "You see the best in people who don't see anything in you.",
  "You keep checking on people, even when they forget about you.",
  "You always try to make things right, even when it's not your fault.",
  "You never let others feel alone, but often sit in silence yourself.",
  "You protect everyone’s feelings, but who protects yours?"
];
const Recommendations = [
  "Trust the timing of your life — the stars know what they’re doing.",
  "Take time to connect with your inner self today.",
  "Let go of what you can’t control; focus on your energy.",
  "Your zodiac sign holds deep wisdom — explore it daily.",
  "Drink water, cleanse your aura, and breathe deeply.",
  "Follow your intuition — it’s the universe whispering to you.",
  "You’re exactly where you need to be, even if it doesn’t feel like it.",
  "Take a break and recharge your cosmic energy.",
  "Journal your thoughts — your soul has something to say.",
  "Avoid negativity today; protect your vibe at all costs.",
  "Read your daily horoscope with an open heart, not fear.",
  "You attract what you believe — keep your thoughts positive.",
  "Spend time in nature to reconnect with universal energy.",
  "Set your intentions clearly; the universe is listening.",
  "Your sign's strengths are powerful — embrace them.",
  "Forgive and release what’s weighing your spirit down.",
  "Speak kindly to yourself — you’re made of stardust.",
  "Light a candle and manifest peace for your mind.",
  "Realign your chakras with meditation or calming music.",
  "Check your moon sign too — your emotions matter."
];
const futurePredictions = [
  "A beautiful opportunity is on the horizon — be ready.",
  "You’re entering a phase of peace and inner strength.",
  "Financial stability is coming your way.",
  "A meaningful relationship will soon blossom in your life.",
  "Your hard work will finally be rewarded.",
  "Success is written in your stars — trust the process.",
  "New doors will open when you least expect them.",
  "You will soon receive the clarity you've been seeking.",
  "Positive energy will surround you in the coming days.",
  "A wish close to your heart is about to come true.",
  "The universe is aligning everything in your favor.",
  "Your efforts are creating powerful results behind the scenes.",
  "A long-awaited message or answer is coming your way.",
  "You’ll soon meet someone who will impact your life positively.",
  "You’re about to step into a phase of emotional healing.",
  "Happiness and harmony are heading toward your home.",
  "Your creative ideas will attract recognition and success.",
  "An old wound will heal, and you’ll feel lighter than ever.",
  "A big breakthrough is closer than you think.",
  "You're being guided toward your true life purpose.",
  "A surprise opportunity will bring unexpected joy.",
  "Love and understanding will enter your personal life.",
  "Your energy is attracting the right people into your life.",
  "You’re entering a season of personal and spiritual growth.",
  "You’ll soon let go of what no longer serves you.",
  "Your strength and patience are about to be rewarded.",
  "A peaceful chapter of your life is beginning soon.",
  "Abundance in all forms is making its way to you.",
  "You’re attracting divine protection and blessings.",
  "The coming days will be filled with joy and success."
];

const form=document.querySelector('form');
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     let data=new FormData(form);
//    data=Array.from(data);
//    console.log(data);
// })


const submit=document.getElementById('submit');
submit.addEventListener('click',(event)=>{
    event.preventDefault();
   let name=document.getElementById('name').value;
   let surname=document.getElementById('surname').value;
   const m1=document.createElement('h3');
    m1.innerHTML=`Hii,${name} ${surname}`;

    //dob calculation
    const dob=document.getElementById('dob').value;
    console.log(dob);
    let y="";
    let i=0,n=dob.length;
    while(i<n){
        if(dob[i]!="-") y=y+dob[i];
        else break;
        i++;
    }
    let m="";
    i++;
    while(i<n){
         if(dob[i]!="-") m=m+dob[i];
         else break;
         i++;
    }
    let d="";
    i++;
    while(i<n){
       d=d+dob[i];
       i++;
    }
   y=Number(y);
   m=Number(m);
   d=Number(d);
    console.log(y,m,d); 

 //   
    const m2=document.createElement('h3');
    m2.innerHTML=`Your Zodiioc sign is${zodiacSigns[m]}`;
 //
    const m3=document.createElement('h3');
    m3.innerHTML=`${compliments[(m+y+d)%19]}`;
  //
  const m4=document.createElement('h3');
  m4.innerHTML=`${victim[(m+d)%19]}`;
  //
  const m5=document.createElement('h3');
  m5.innerHTML=`${Recommendations[(y+m*3+d*2)%19]}`;
  //
  const m6=document.createElement('h3');
  m6.innerHTML=`${futurePredictions[(y+m+d)%29]}`;
  //div
  const ele=document.createElement('div');
  ele.append(m1,m2,m3,m4,m5,m6);
  const result=document.getElementById('result');
  result.innerHTML="";
  result.appendChild(ele) ;  
 
})

const clear=document.getElementById('clear');
clear.addEventListener('click',(event)=>{
    // event.preventDefault();
     const result=document.getElementById('result');
     result.innerHTML="";
     form.clear();
})