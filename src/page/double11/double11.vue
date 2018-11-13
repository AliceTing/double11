<style lang="scss">

    .container {
        height: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .wrap {
            float: left;
            height: 100%;
        }
        .left,
        .right {
            width: 30%;
            padding: 30px 20px;
            box-sizing: border-box;
        }
        .middle {
            width: 40%;
        }
        .left .inner,
        .right .inner {
            box-sizing: border-box;
            border: solid 1px rgba(60, 46, 213, .54);
            background-color: rgba(60, 46, 213, .14);
            border-radius: 10px;
        }
        .left .inner .data_md:first-child,
        .data_md{
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            overflow: hidden;
            .name {
                padding-left: 10px;
                color: #78B7FF;
                font-size: 18px;
                line-height: 40px;
                &:before {
                    content: '';
                    display: inline-block;
                    width: 8px;
                    height: 14px;
                    margin-right: 15px;
                    border-radius: 8px;
                    background-color: #78B7FF;
                }
            }
            .con{
                flex: 1;
            }
        }
        .middle{
            box-sizing: border-box;
            padding-bottom: 30px;
            .data_md{
                display: block;
            }
        }
        .left .inner{
            .data_md:first-child{
                overflow: visible;
            }
        }
    }
</style>

<style lang="scss">
    html,
    body {
        height: 100%;
        background: linear-gradient(0deg, #16084a, #16084b);
    }
</style>

<template>
    <div class="container">
        <div class="wrap left">
            <div class="inner">
                <targetComplete></targetComplete>
                <businessRanking></businessRanking>
                <orderNumber></orderNumber>
            </div>
        </div>
        <div class="wrap middle">
            <mainTitle></mainTitle>
            <orderMap></orderMap>
            <orderList></orderList>
        </div>
        <div class="wrap right">
            <div class="inner">
                <member></member>
                <salesAmount></salesAmount>
            </div>
        </div>
    </div>
</template>

<script>
    import targetComplete from './components/targetComplete';
    import businessRanking from './components/businessRanking';
    import orderNumber from './components/orderNumber';
    import mainTitle from './components/mainTitle';
    import orderMap from './components/orderMap';
    import orderList from './components/orderList';
    import member from './components/member';
    import salesAmount from './components/salesAmount';

    export default {
        components: {
            targetComplete,
            businessRanking,
            orderNumber,
            mainTitle,
            orderMap,
            orderList,
            member,
            salesAmount
        },
        data() {
            return {
                clientHeight: {
                    height: ''
                }
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {},
        computed: {
            setSingleHeight() {
                let me = this;
                if(me.clientHeight.height){
                    let innerBoxHeight = me.clientHeight.height.substr(0,me.clientHeight.height.length-2) - 60;
                    let singleHeight = Math.floor(innerBoxHeight / 3);
                    return singleHeight;
                }
            },
            setMiddleSingleHeight() {
                let me = this;

                if(me.clientHeight.height) {
                    let innerBoxHeight = me.clientHeight.height;
                    let middleSingleHeight = Math.floor(innerBoxHeight.substr(0,innerBoxHeight.length-2) / 2);
                    return middleSingleHeight;
                }
            }
        }
    }

</script>

