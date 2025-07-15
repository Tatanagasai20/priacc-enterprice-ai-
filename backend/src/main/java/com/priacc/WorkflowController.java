package com.priacc;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class WorkflowController {

    @PostMapping("/api/apply-leave")
    public String applyLeave(@RequestBody Map<String, String> payload) {
        String employee = payload.getOrDefault("employee", "Unknown");
        return "Leave request received for " + employee;
    }
}
