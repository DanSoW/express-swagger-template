/**
 * @typedef QuestDto
 * @property {string} task.required
 * @property {string} hint.required
 * @property {number} radius.required
 * @property {string} ref_media.required
 * @property {number} marks_id.required
 */
class QuestDto {
    task;
    hint;
    radius;
    ref_media;
    marks_id;

    constructor(model){
        this.task = model.task;
        this.hint = model.hint;
        this.radius = model.radius;
        this.ref_media = model.ref_media;
        this.marks_id = model.marks_id
    }
}

export default QuestDto;