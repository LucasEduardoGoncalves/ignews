import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: '8320ec3589d3b7068849', // process.env.GITHUB_CLIENT_ID,
            clientSecret: '3f665cc32ee6e2e59fc127c468423d9f361cabdb', // process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user'
        }),
    ],
})