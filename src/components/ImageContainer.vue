<template>
    <div class="Container" id="ImageContainer" ref="ImageContainer">
        <img ref="Image" id="Img" :src="this.imageUrl" :alt="this.Data.Alt">
    </div> 
    </template>
    <script>
    import { GamesGetAssetsFile } from '@/utilitys/get_assets.js';
    
    export default {
        name: 'ImageContainer',
        data() {
            return {
                imageUrl: '',
                ContainerSize: {
                    width: 0,
                    height: 0
                }
            };
        },
        props: {
            ID: {
                type: String,
                required: true
            },
            Data: {
                type: Object,
                required: true
            }
        },
        methods: {
            Init(){
                const img = new Image();
                img.onload = () => {
                    let ImageDatas = {
                        width: img.width,
                        height: img.height
                    };
                    // Height First
                    let New = this.GetScaledDimensions(this.ContainerSize.width, this.ContainerSize.height, ImageDatas.width, ImageDatas.height);
                    let newHeight = New.height;
                    let newWidth = New.width;
                    let ApplyImage = document.getElementById('Img');
                    ApplyImage.style.width = newWidth + 'px';
                    ApplyImage.style.height = newHeight + 'px';
                    console.log(newHeight, newWidth);
                }
                img.src = this.imageUrl;
            },
            GetScaledDimensions(containerWidth, containerHeight, imageWidth, imageHeight) {
                // 計算寬和高的比例
                const widthRatio = containerWidth / imageWidth;
                const heightRatio = containerHeight / imageHeight;
    
                // 選擇較小的比例來確保圖片完全放入容器中
                const scale = Math.min(widthRatio, heightRatio);
    
                // 計算縮放後的圖片尺寸
                const scaledWidth = imageWidth * scale;
                const scaledHeight = imageHeight * scale;
    
                return { width: scaledWidth, height: scaledHeight };
            }
        },
        mounted() {
            this.imageUrl = GamesGetAssetsFile(this.ID, this.Data.Src);
            let data = document.getElementById('ImageContainer');
            let ApplyImage = document.getElementById('Img');
            data = data.getBoundingClientRect();
            this.ContainerSize = {
                width: data.width,
                height: data.height
            }
            this.Init();
            window.addEventListener('resize', this.Init);
            // update per 5 seconds
        },
    };
    </script>
    
    <style scoped>
    .Container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    </style>