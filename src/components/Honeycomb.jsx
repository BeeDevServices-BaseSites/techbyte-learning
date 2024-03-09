import React, { useState, useEffect, useRef } from "react";
import flying_bee from "../assets/images/flyingbee.gif";

// This was moved outside the component to prevent rebuilding every loop iteration
const images = [
  "https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png",
  "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-512.png",
  "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-512.png",
  "",
  "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-256.png",
  "",
  "",
  "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-512.png",
  "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/less-512.png",
  "https://ih1.redbubble.net/image.2517831630.1453/raf,360x360,075,t,fafafa:ca443f4786.jpg",
  "https://ih1.redbubble.net/image.2191078753.4647/raf,360x360,075,t,fafafa:ca443f4786.jpg",
  "https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/github-hexagon-social-media-512.png",
  "https://images.squarespace-cdn.com/content/v1/57c649658419c2380d1947be/1534825375055-OA4431YN1BZ93RTAEIZF/postman-tile.png?format=1500w",
  "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
  "",
  "https://external-preview.redd.it/vs-code-communlty-v0-dlSyBrQ6fL9zuuHWgK3upfUYBWUhnC6dQNAY3j7DoOQ.jpg?auto=webp&s=0c600da3dd499738ba5284ed63b4ef62bd4f2dbc",
  "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/python-512.png",
  "https://ih0.redbubble.net/image.2488655041.9084/raf,360x360,075,t,fafafa:ca443f4786.jpg",
  "",
  "https://ih0.redbubble.net/image.2456533905.2366/raf,360x360,075,t,fafafa:ca443f4786.jpg",
  "",
  "https://thumbs.dreamstime.com/b/interns hip-text-red-violet-ribbon-badge-stamp-internship-text-red-violet-ribbon-stamp-213094471.jpg",
  "",
  "",
  "",
  "",
  "https://coding-pandas.com/panda.jpg",
  "",
  "",
  "",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX///9WMyvvzKNEKCMAAADMrI1XNCvNrY7QsJDsyaHJqYtGKSRUMirfvZnnxZ5QLyjWtZNOKSNQLCVBJB9QKiFFFADcupfVtJPjwZxKLCbJp4XuyZ1JHRBLJSCZemRVPThiQDbCooWDTEMxAAD13sWOe3dMIhdqST2sjXSAbFhhUkP306k6Ih1AIh0VDAspGBTm1sj67+Ty1rb359bq5uX08vKzp6VCDgCpm5jb1dR9XU3KwsCdjYmhgWqIaFa2lnuOeGIyKiJCQkKGhoYeGRRnPDQ7GRLWvKTCurhxV1GLeHQ/AgCBa2ZyYE9mSUN3X1otJh8mJiZFOi+RkZFlZWU1NTV2dnZWSDsuEw4rAADey7luU0WZgnQ0DABfPy5gS0crUPGNAAAPJUlEQVR4nO1c+1vayBomhGQmIYQQIQmsUlgVtQLWincRe7ZS263bPd1ztq1dt///f3Hmmssk8dgVxD7PvD94C8zMO9/9m8FCQUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC4gfD7u7e3tra2kuEYgz495dra3t7e7u7i17iP8Xu3trL4k8E6FsxCz9xFF+u7f0QRPdHo338nXPLpJUNxnM3GuRpYf/0YP1t77DROGy8WCt+HzeBaNDAw/Terh+cPhWio6v1zvJyr+4qiuJ2Kv+UWwi7Q0aq95aXO++uRoumd3ymN3p1S6FwN7wHEywWjQ2XjWfVe43O2fHi6I2O9OWQHSHoz4BgnCJhudw5WIy+jt41ejF6mCCYCcFiMei48YGtXuPdArT1rFHXlSRBzZ4Rw6KTpKgo9cbZI/M71nvJJSAnYz7cy4TQdIGi0lMe1R6PfrWEBVi66cyOYNHo6qkZfj16PILvlxURte6sjJAi6NZScyy/fyR+o049sbdV9GVlE8zMCCm8CaZYTUiy3nkUp3rcS5pIE0uwDWcRCROA7RU2eoxi/RGM8aqRNJAy9jIncLY6imHDE7SVlpo0xsbpvAkeNJK2UUY6anW0ewcK23O8e77W0zpoM6vl5ISNg/kSPBIINssoKK5MwD111AYmdHxTC+71aki8jZpUVP1wrhTPRIKqRYwQ3lMqnkGJ+tC4z37Adg3raZKi0phj1DhLRgm9qjZ1xdqAZmq9hm0HFc+BGnQq/KERRC8znFBVjQApbiWwMzh7EGeoTbWazJ7ml9+sC2GwqmI3UOtqd+ioETimY1DSiQcBF6cJ8nWW6alaTU68PCeKIkE6M9JREC04E46W9ZD8rWKaOdtDNoTqaVNVlcegmCJYVrGb06GJ13KnJebaqZ1LkI3oQJ1sZfkRKAo2qOhNKsJN4JCl3sUwSBsqY6Hl7wzZOANsrhBzaIoUZ+5uUgSrZGO5m2ER3wgqDoSaiQCgF9KyTWJqdsWDQAMQeoHNRchs0HbwuzT00Pcq1OkAQr4CNyysLqIpztyjHokqaqlk0hUqwgApm11xyCIjhJLDDG30VIO+4/hkBzTMPzA1+gIv+T4NOIHhUfZgs0aEqIq1xmxDv5jJkF3FIuz4hIam+SCxSApeMFZMD5h+5IwMuwJN0zcqJlNSkHqraUINUCF2qBBFb6McXs2O4FWKYJOKsDYmIvTT5MgqeXzwNRYxYkAyMn0eZ5zsAXxiiWMmxKYuLGJ2OerpoUgQT0jcG8AJmJchPgLOBphZIc+AJpdykDMCTn0cE9cyqpo2RaUxo0pjlJIgn889x36GE0QuBCGmcLzoNzLjITE/JmUjxjA5jI3U9NylSiOGDMXqzaRBtV8XbZxMhy0fpdwAGRldmK+Nt66vLyZ+uLp03wZ5U8dBORpX35A5DKXmdy+2rrcuuj77U9HWJjXq2dJ66nZmwfC3ukiwymfToebYJuU3+VSiGG4BmDRDBpS/RXCSeutx+V28YsN83PQBtUUTKjT8pv2pUv/wcILvUwSJY8OTISXVKBmgPS/FsOknzJBxQDESp9hB4NHgF89mqCHCye+xUT6aeHCzAkkpTLY1padK78HJzUGq6UR3E89VG0PNpwSjlf1riL5s+cwTRhaHpBa3RhIvIjUmhgg3yQARxwnZPwixN9XJvoqpzcMd6ijlRqlFEL9W6wLKEH4M+e2j2IK+X6C1RTIKNJjhTI0KiFoDOJ+ZoDf+iSb9JaTYxYrqAFJhkI1NBUWUvz2sOyUma3wvyUwdiMWHhHUdLon4NrzCCYgcjePn9S1syP0tiu/gdan0bzJrKMZXkGgISb/pzqaczYMz1JSfqYYTWSfMCLshQbrAU2xEfpRy3tWXsVkq4GtwC73tFzLAH+GAF1RPsSGyrRWdTf23hxEs7HcEiuVQSd02ZehHXmZI3nNFbIg1Y+y4fho4MXcqCcrUPFFWg9/1HzLAn+GArynDthvubXnGBAuiFOk0RElR4URlGPN/JBv+L/7pmplezL0EkAV2E6RCpQ/GoZqPYgNO8Bwk+6Z5hpDZ1N8+nGCh8CF+CENFiDtsygrxA2j6eKD48+qAECz9LvaIbWjSdAVDE1sXGmSa8MfpH/HxtogldleEuRl6MwiHGLHqvhrbR5eKEF6UMoF7hnakjx7i1x2fb+iWvnHS7kItOsgJDMPR/I+Zo3wiagqIDJuiEJfXZ0Mw7lHpNhJzR8UvZbiVzbALYi0KAznE7kkNL1TXFbdWO+nCqKOIKkINvsoc5RMNRx0yoxqZCMYse25HhwkREmuvntBgkS/DKKLb6GXnK8hdXP6McIkVYAUlRGF6ikbKk6EfOlNuiFyIs20N0xKYOWyaWeCcDSdtcJy5tCGAoYqi5Bye0NMyS+cHgysnMCqqPNP/lDnMNZmElBcsm+LutDHDAhiD1IjV+Ca6KGcDXiIcxvExcjQOInhOCFoDfBIxoBRrbRipcZCj7CQ5YuEiPv8cjmiOl0MRUkPAwQIGWp4FTbZDHwog6ZghDD6jxZU/M4quiR6FHfHsjTKBBmyTZKaRIZZ1qzeHY7bjRjQB0TIUqiDOJzMNMSToocLqXGcHup8/Y0lwhkrt61iD3Fi3s9QUm6FvmGBCB2ALUN3ludzNOJ6qMTMkebezjf0pfC0ubOhsc+WDm50VfqSqT3H3ShlwhopVq513eda6fZ1miOZAxmrS3DtSoumcLp8c3MZ9mYsUyCOFHdwU1vXK3mYKivnFM0ldV/tEA8Kg5rrnvE21nVIGEu9RNAFduknM1UzndjQzTXhrSPoUpLhILu0TM0Afdjfi/Kxms98vlfpqv9+P5V4u8llUVbcnSYLPcajwSI/DjUer27kd5x9No/TeQrUT9vakOk9QfE4F6CAPWBNvxVjqzrBfFuuD2kaXZrHbCXdDM7YiLjx8XYlczXRmqUwaXyJXilMa0okhvU7Y/ZgkGCDN2khfGEGKtpOq8HD8H9NKMUbxd9ILYVPQpIa5mi9zvJFxNg0DLk5paNseslbUFoka19s0xsPNlAAJlrIY4vhPA8c2fI7bIK+vN33apSH+WCOnF4zhPEVYGK2qvMzGKQ07cKJFEYA+ykSpE0UpSnsli4ii9IeZDBV3wwT0JBWaXc2HZN9Y3ldBKRFliJ3p6lxv8b0f8GBB6t8w5wrbnex3lIVmE8xlqLidLg3/FQ2wjiu/heSxtI3kbYP53ow6Xg2DxRgf/tk8b2Ec2cGuf55lgoxh3hNX70Lmo2idzFM6DyU17TBcfJnzpaFvA8YQJ21+dLhtOEhFaQ8YrYdloSwkVONleZwhf8DudoW3/yAaCkaFiWegtI0zHMykqr8Dp6uc4QQH/GLsQqIREI9vaPS+Fs5AuHuISOn9YRQruFvmdbvboS1Iw4v3VpF58j4GCoirc7/39WxAGeIeRgX3yooCUB7DbLDK+rfNWB/X6g8jifIHTf4ndyN9ARCHEcAT0+rg27wJIiEylXpDAn7REe52e1o3M0pwxYwzTKN2Ll4Vh9idQdapUarztkKMZ4SA+/ZFi5odTNzhsk3QSZ2fJBmmm7oxrIwTDawKdV7I97AdmLcVYhyTjkZ9fZ8xLPom8GyjaNj4/gFgDYcc6M3+MH28EofbDchQhmEEjmb6zLv6H8iwh49yFXoddxd7VwXOEDk7CKFPrhx6vNZlSImznGaYfA37SEPg+XxMzNC8OcJt29nfMckG7hE39gtvxANC7EdBXAX11EmKpfZ3yoIhqmpCbWvj9Mmq03px3EDb+ljXoPd/axyiCu0mzdAht7QiNMXTsKraH/YFQ0y9KH2/yG/tFt4fHj4WQYRj3Abaa4lHZgav4yIpCuIaloY7pdJO4rKh6Hhq7dRNMNBC850++seD9luiOgVgnJutYS8zLPVxw/Ryp7Rzh7+1OqkPF2lvHpscBRCjvQe/5q9c75d2SEMYcxyWyvkxozYRdaP1YjEMb8Trer6opHGCOyULUbtExC4R0X6pn0vRbQuGWGkt6KOI+6IhgklezaQow9Llz5coMpADCOvyZyWfYvVEcGGLUtKUNzW0zTwzRBK8vLTiXalLpZRxKE+fbSQNHC5KhAhm4raTDcY5Wops8FKM/nqzlJeh6k6S4IKsEGO3Ff+gRQDaOQyrpQwPhGjnMFTi92qhuTAdxbhpxS7leXkM9WGmQuo7/WyCbvQJHAOYYJEEC4U3sVNCB+YwLGf31xQlR4gr4XUqW9MWaIQUmhZ+8NDPYajvZBNBOU62EAfcvCumtkgjpECmyHtiEGY3oKo5ypjDXW8yhoZvaubNognikIHE6OMlAXg+yFix0s+v6rMeNVXKsIIbbq1F08NokdafY28jGQ6yyttcEeJaI+NPiKFN+WnmwnUU44b2Sk2owfYg44LkXQyVpbQEEcPwovGTECFK3sKON2KYQfGutoUoQ3q1M2ToLZocRcRwPCDni8nYUL2ruSawZ7fmwkvRwaK5UbwJGW4OYsfgDHrquDAhszh9dgC61OEMzbVFc6O44QczgDFUy1ZMjOpd3cNqrKXBzrDVpQ3OsPVE/i3PLldTMPnMb0s0Q44Z7jIhNpEfYviVM4SLpsbBtRSYIUOsqpRj887+qEXONvQYP+RKzxnD1hMI9xQ3oa9Zii2UybF8F0PdUqvoS5wfYtjmDBdNLAI3RNhJUFTLVUvJun0eM0P0mrKaxIBdzX06IiwUXjAhwq9LwmpV/CE35DDT3kZXUtQ4wy6Lh4umFccbMwr5mWgmwoKuW3n0EJbgk3KkDEB0phkoI5oEzXx2auhKF182CaCfsPTvWvo9QR3NkyOIFBXbIqouHs7QBE+SIHU3oHuXmt4LWElbYNGti2zsIzHCk4cK8XO39TSqwkzsvmm1mqmA8X0E2/Dp8sPYf2HWb/85x8GXv55WjMjE7tGz1dvpdPBdPJcG0+nt6u2HBf4Lwe/C6PTgr69/r97e0yYHt6t/vz87uDp+mv4lH7unH1an/5fe0nT129WPRi3C6GyKNHYwWFpSlwgGGEv8Z6KZ6z+KZuZhdHX24duzJsIzhG8Yzyi+vX13tPh/UCohISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIfG9+B9Jqnj0jFPdXgAAAABJRU5ErkJggg==",
  "",
].map((image, index) => (
  image ? (
    <li className="item" key={ index }>
      <a href={`#${ index + 1 }`} title={ index + 1 }>
        <img className="honeycomb_image" src={ image } alt={ index } />
      </a>
    </li>
  ) : (
    <li className="item2" key={ index }>
      <a href={`#${ index + 1 }`} title={ index + 1 }>
        <img src="" alt="" />
      </a>
    </li>
  )
))

const Honeycomb = () => {
  // This needs to be a ref to track through rerenders
  const currentIndex = useRef(-1);
  const [combImages, setCombImages] = useState(
    [...Array(images.length)].map((_, idx) => (
      <div className="item placeholder" key={ idx }>
        {" "}
      </div>
    ))
  );

  useEffect(() => {
    // This conditional is required to stop this useEffect loop
    if (currentIndex.current !== images.length) {
      setTimeout(() => {
        currentIndex.current += 1;
        setCombImages((prev) => {
          const newCombs = [...prev];
          newCombs[currentIndex.current] = images[currentIndex.current];
          return newCombs;
        });
      }, window.innerWidth <= 450 ? 0 : 50);
    }
  }, [combImages]);

  return (
    <>
      <ul className="honeycomb_container">{ ...combImages }</ul>
      <img className="bumble_bee_image" src={flying_bee} alt="bumble bee" />
    </>
  );
};

export default Honeycomb;
