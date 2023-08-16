import './bootstrap';

import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { ToasterContainer } from 'baseui/toast';
import { PlatformProvider } from './Contexts/PlatformContext';

const engine = new Styletron();

InertiaProgress.init()

createInertiaApp({
    // resolve: (name) => require(`./Pages/${name}`),
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <ToasterContainer autoHideDuration={3000}>
                        <PlatformProvider>
                            <App {...props} />
                        </PlatformProvider>
                    </ToasterContainer>
                </BaseProvider>
            </StyletronProvider>)
    },
})