import { RoutePath } from "types/routes";
import Menu from "assets/components/Menu";
import { navigationItems } from "assets/data/navigation";
import { Outlet } from "react-router-dom";
import * as S from "./style";
import NavColumn from "assets/components/NavColumn";

const Settings = () => {
  return (
    <S.Settings>
      <Menu active={RoutePath.SETTINGS} navItems={navigationItems} />
      <S.SettingsPage>
        <header>
          <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
        </header>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
          <NavColumn activeRoute={RoutePath.SETTINGS_TABLES} />
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
              Selecione uma categoria
            </S.SettingsContentBoxEmpty>
            <Outlet />
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

export default Settings;
