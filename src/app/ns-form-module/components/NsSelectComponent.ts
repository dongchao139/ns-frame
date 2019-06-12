import { OnInit, Component, Input, Output, EventEmitter, Type } from "@angular/core";
import { SelectConfig } from "../FormConfig";

@Component({
    selector: 'ns-select',
    templateUrl: './ns-select.html'
})
export class NsSelectComponent<T> implements OnInit {

    @Input() config: SelectConfig<T>;
    @Output() onChange = new EventEmitter<T>();


    constructor() {

    }

    ngOnInit(): void {

    }
}
