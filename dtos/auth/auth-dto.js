import TokenDto from "./token-dto.js";
import ModuleDto from "./module-dto.js";
import AttributeDto from "./attribute-dto.js";

/**
 * @typedef AuthDto
 * @property {string} access_token.required - Токен доступа
 * @property {ModuleDto.model} refresh_token.required - Доступные модули
 * @property {AttributeDto.model} attributes.required - Атрибуты пользователя
 */
class AuthDto {
    access_token;
    modules;
    attributes;

    constructor(model){
        this.access_token = model.access_token;
        this.modules = model.modules;
        this.attributes = model.attributes;
    }
}

export default AuthDto;
