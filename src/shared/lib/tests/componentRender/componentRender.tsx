import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateScheme, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateScheme>;
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {}
) {
    const { route = "/", initialState } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <Suspense fallback={"Loading..."}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nForTests}>
                        {component}
                    </I18nextProvider>
                </MemoryRouter>
            </Suspense>
        </StoreProvider>
    );
}
