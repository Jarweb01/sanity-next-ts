import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'odr04iai',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-06-07',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;