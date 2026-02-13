import members from '../../.vitepress/members.json';

export default {
    paths() {
        return Object.entries(members).map(([key, value]) => {
            return {
                params: {
                    member: key
                },
                content: `# Member - ${value} - Auto Redirect

Click [here](/zh/members/${key}) if your browser didn't automatically redirect.`
            };
        });
    }
}