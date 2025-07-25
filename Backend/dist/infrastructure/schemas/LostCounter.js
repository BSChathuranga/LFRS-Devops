"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LostCounterSchema = new mongoose_1.default.Schema({
    seq: {
        type: Number,
        required: true
    }
});
const LostCounter = mongoose_1.default.model("LostCounter", LostCounterSchema);
exports.default = LostCounter;
