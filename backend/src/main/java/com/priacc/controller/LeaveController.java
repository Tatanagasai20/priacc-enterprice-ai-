package com.priacc.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class LeaveController {

    @GetMapping("/health")
    public String healthCheck() {
        return "Backend is up!";
    }

    @PostMapping("/apply-leave")
    public String applyLeave(@RequestBody Map<String, Object> request) {
        return "Leave applied successfully for " + request.get("employeeName");
    }
}
