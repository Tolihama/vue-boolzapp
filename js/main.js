const app = new Vue({
    el: '#app',
    data: {
        activeChatIndex: 0,
        newMsgInput: '',
        searchInput: '',
        me: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],    
    },
    methods: {
        getDate() {
            return dayjs().format('DD/MM/YYYY HH:mm:ss');
        },
        updateScroll(ref) {
            ref.scrollTop = ref.scrollHeight - ref.clientHeight;
        },
        openChat(chatIndex) {
            this.activeChatIndex = chatIndex;
        },
        submit() {
            if (this.newMsgInput !== '') {
                this.contacts[this.activeChatIndex].messages.push({
                    date: this.getDate(),
                    text: this.newMsgInput,
                    status: 'sent'
                });
                this.newMsgInput = '';
                setTimeout(() => {
                    this.updateScroll(this.$refs.messages);
                }, 50);
                setTimeout(this.botReply, 1000);
            }
        },
        botReply() {
            this.contacts[this.activeChatIndex].messages.push({
                date: this.getDate(),
                text: 'ok',
                status: 'received'
            });
            setTimeout(() => {
                this.updateScroll(this.$refs.messages);
            }, 50);
        },
        filterChats() {
            this.contacts.forEach(contact => contact.name.toLowerCase().includes(this.searchInput.toLowerCase()) ? contact.visible = true : contact.visible = false);
        },
    },
});