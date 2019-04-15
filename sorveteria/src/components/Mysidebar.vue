<template>
  <Mysidebar :menu="menu"/>
</template>

<script>
    export default {
        data() {
            menu: [
                {
                    header: true,
                    title: 'Menu de navegação'
                },
                {
                    href: '/',
                    title: 'Dashboard'
                },
                {
                    href: '#',
                    title: 'Cadastro de remessa'
                },
            ]
        }
    }
</script>