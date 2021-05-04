<template>
    <div class="social-media">
        <img src=/social/Google.svg id="google" />
        <img src=/social/Pinterest.svg id="pinterest" />
        <img src=/social/Linkedin.svg id="Linkedin" />
        <img src=/social/Twitter.svg id="twitter" />
        <img src=/social/Facebook.svg id="facebook" />
        <img src=/social/Instagram.svg id="instagram" />
    </div>
</template>

<style lang="scss" scoped>

.social-media {
    img {
        width: 40px; 
        height: auto;
        display: inline-block;
        padding: 0 5px;
        cursor: pointer;
        &:hover {
           margin-top: -5px;
           background-color: $base-color; 
        }
    }
}
</style>